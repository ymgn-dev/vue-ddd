import { RoomId } from '../value/roomId'
import { RoomTitle } from '../value/roomTitle'

export class Room {
    constructor(public id: RoomId, public title: RoomTitle) {}

    public equals(other: Room): boolean {
        return other !== null && this.id === other.id
    }
}
