import { Room } from './entity/room'
import { RoomId } from './value/roomId'
import { RoomTitle } from './value/roomTitle'

export abstract class RoomRepositoryBase {
    abstract findById(id: RoomId): Promise<Room | null>
    abstract findByTitle(title: RoomTitle): Promise<Room | null>
    abstract findAll(): Promise<Room[]>
    abstract save(room: Room): Promise<void>
    abstract delete(room: Room): Promise<void>
}
