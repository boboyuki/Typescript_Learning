import "./index.css";
import { io } from 'socket.io-client'
import { UserData } from "@/service/UserService"

type UserMsg = { userData: UserData, msg: string, time: number }

const clientIo = io();

const url = new URL(location.href);
const userName = url.searchParams.get("userName");
const roomName = url.searchParams.get("roomName");
if (!userName || !roomName) {
    location.href = `/main/main.html`
}

const textInput = document.querySelector("#textInput") as HTMLInputElement;
const submitBtn = document.querySelector("#submitBtn") as HTMLButtonElement;
const backBtn = document.querySelector("#backBtn") as HTMLButtonElement;
const chatBoard = document.querySelector("#chatBoard") as HTMLDivElement;
const headerRoomName = document.querySelector("#headerRoomName") as HTMLParagraphElement;
headerRoomName.innerText = roomName || " - "

let userId = "";

const messageHandler = (data: UserMsg) => {
    console.log(data.time)
    const msgBox = document.createElement("div");
    const date = new Date(data.time);
    const time = `${date.getHours()}:${date.getMinutes()}`
    msgBox.classList.add("flex", "mb-4", "items-end")
    if (data.userData.id === userId) {
        msgBox.classList.add("justify-end")
        msgBox.innerHTML = `
        <p class="text-xs text-gray-700 mr-4">${time}</p>

        <div>
            <p class="text-xs text-white mb-1 text-right">${data.userData.name}</p>
            <p
                class="mx-w-[50%] break-all bg-white px-4 py-2 rounded-bl-full rounded-br-full rounded-tl-full"
            >
                ${data.msg}
            </p>
        </div>
        `
    }else {
        msgBox.classList.add("justify-start")
        msgBox.innerHTML = `
        <div>
            <p class="text-xs text-gray-700 mb-1">${data.userData.name}</p>
            <p
            class="mx-w-[50%] break-all bg-gray-800 px-4 py-2 rounded-tr-full rounded-br-full rounded-tl-full text-white"
            >
            ${data.msg}
            </p>
        </div>

        <p class="text-xs text-gray-700 ml-4">${time}</p>
        `
    }
    chatBoard.appendChild(msgBox);
    textInput.value = "";
    chatBoard.scrollTop = chatBoard.scrollHeight
}
const roomMsgHandler = (msg: string) => {
    const msgBox = document.createElement("div");
    msgBox.classList.add("flex", "justify-center", "mb-4", "items-center");
    msgBox.innerHTML = `<p class="text-gray-700 text-sm">${msg}</p>`;
    chatBoard.append(msgBox);
    chatBoard.scrollTop = chatBoard.scrollHeight
}
submitBtn.addEventListener("click", () => {
    const textValue = textInput.value;
    if(textValue.trim()) {
        clientIo.emit("chat", textValue)
    }
})
backBtn.addEventListener("click", () => {
    location.href = "/main/main.html"
})

clientIo.emit("join", { userName, roomName })
clientIo.on("join", (msg) => {
    console.log("join user", msg);
    roomMsgHandler(msg)
})
clientIo.on("chat", (data: UserMsg) => {
    messageHandler(data)
})
clientIo.on("leave", (msg) => {
    roomMsgHandler(msg)
})
clientIo.on("userId", (id) => {
    userId = id
})