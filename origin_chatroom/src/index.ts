import devServer from "@/server/dev";
import prodServer from "@/server/prod";
import express from "express";
import { Server } from "socket.io";
import moment from "moment"
import { name } from "@/utils";
import http from "http"
import UserService from "@/service/UserService";

const port = 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const userService = new UserService();

io.on("connection", (socket) => {
  socket.on("join", ({ userName, roomName }: { userName: string, roomName: string }) => {
    const userData = userService.userDataInfoHandler(socket.id, userName, roomName);
    userService.addUser(userData);
    socket.join(roomName);
    socket.broadcast.to(roomName).emit("join", `${userName}加入${roomName}聊天室`);
  })
  socket.emit("userId", socket.id)
  socket.on("chat", (msg) => {
    const time = moment.utc();
    const userData = userService.getUser(socket.id);
    if (userData?.name) {
      io.to(userData.roomName).emit("chat", { userData, msg, time })
    }
  })
  socket.on("disconnect", () => {
    const userData = userService.getUser(socket.id)
    const userName = userData?.name
    if (userName) {
      socket.broadcast.to(userData.roomName).emit("leave", `${userName} 已經離開聊天室`);
      userService.removeUser(socket.id)
    }
  })
})
// 執行npm run dev本地開發 or 執行npm run start部署後啟動線上伺服器
if (process.env.NODE_ENV === "development") {
  devServer(app);
} else {
  prodServer(app);
}

console.log("server side", name);

server.listen(port, () => {
  console.log(`The application is running on port ${port}.`);
});
