import { v4 as uuidv4 } from 'uuid'

import { RoomId } from '../../domain/room/value/roomId'
import { Talk } from '../../domain/talk/entity/talk'
import { TalkFactoryBase } from '../../domain/talk/talkFactoryBase'
import { TalkBody } from '../../domain/talk/value/talkBody'
import { TalkId } from '../../domain/talk/value/talkId'

export class TalkFactory extends TalkFactoryBase {
    create(roomId: RoomId, body: TalkBody): Talk {
        const uuid = uuidv4()
        const talkId = new TalkId(uuid)

        return new Talk(roomId, talkId, body)
    }
}
