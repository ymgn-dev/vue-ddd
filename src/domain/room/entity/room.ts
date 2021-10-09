import { RoomId } from '../value/roomId'
import { RoomTitle } from '../value/roomTitle'

export class Room {
    public id: RoomId
    public title: RoomTitle

    constructor(id: RoomId, title: RoomTitle) {
        this.id = id
        this.title = title
    }

    public equals(other: Room): boolean {
        return other !== null && this.id === other.id
    }
}
