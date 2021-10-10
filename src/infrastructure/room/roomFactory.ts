import { v4 as uuidv4 } from 'uuid'

import { Room } from '../../domain/room/entity/room'
import { RoomFactoryBase } from '../../domain/room/roomFactoryBase'
import { RoomId } from '../../domain/room/value/roomId'
import { RoomTitle } from '../../domain/room/value/roomTitle'

export class RoomFactory extends RoomFactoryBase {
    create(title: RoomTitle): Room {
        const uuid = uuidv4()
        const roomId = new RoomId(uuid)

        return new Room(roomId, title)
    }
}
