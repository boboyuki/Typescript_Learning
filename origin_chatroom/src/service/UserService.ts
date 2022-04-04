export type UserData = {
    id: string,
    name: string,
    roomName: string
}
export default class UserService {
    private userMap:Map<string, UserData>
    constructor() {
        this.userMap = new Map()
    }
    addUser(data: UserData) {
        this.userMap.set(data.id, data)
    }
    removeUser(id: string) {
        if(this.userMap.has(id)) {
            this.userMap.delete(id)
        }
    }
    getUser(id: string) {
        if(!this.userMap.has(id)) return null
        const data = this.userMap.get(id)
        if(data) {
            return data
        }else {
            return null
        }
    }
    userDataInfoHandler(id: string, name: string, roomName: string) :UserData {
        return {
            id, name, roomName
        }
    }
}