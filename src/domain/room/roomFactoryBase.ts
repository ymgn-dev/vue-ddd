import { Room } from './entity/room'
import { RoomTitle } from './value/roomTitle'

export abstract class RoomFactoryBase {
    abstract create(title: RoomTitle): Room
}
