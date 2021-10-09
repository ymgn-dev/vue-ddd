import { Talk } from './entity/talk'
import { RoomId } from '../room/value/roomId'
import { TalkBody } from './value/talkBody'

export abstract class TalkFactoryBase {
    abstract create(roomId: RoomId, body: TalkBody): Talk
}
