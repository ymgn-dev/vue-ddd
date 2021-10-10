import { Room } from '../../domain/room/entity/room'
import { RoomRepositoryBase } from '../../domain/room/roomRepositoryBase'
import { RoomId } from '../../domain/room/value/roomId'
import { RoomTitle } from '../../domain/room/value/roomTitle'

export class RoomRepository extends RoomRepositoryBase {
    private _rooms: Room[] = []

    async findById(id: RoomId): Promise<Room | null> {
        for (const room of this._rooms) {
            if (room.id.equals(id)) {
                return room
            }
        }
        return null
    }

    async findByTitle(title: RoomTitle): Promise<Room | null> {
        for (const room of this._rooms) {
            if (room.title.equals(title)) {
                return room
            }
        }
        return null
    }

    async findAll(): Promise<Room[]> {
        return Array.from(this._rooms)
    }

    async save(room: Room): Promise<void> {
        this._rooms.push(room)
    }

    async delete(room: Room): Promise<void> {
        this._rooms = this._rooms.filter((n) => n !== room)
    }
}
