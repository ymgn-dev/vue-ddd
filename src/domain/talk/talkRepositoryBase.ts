import { RoomId } from '../room/value/roomId'
import { Talk } from './entity/talk'
import { TalkId } from './value/talkId'

export abstract class TalkRepositoryBase {
    abstract findById(roomId: RoomId, talkId: TalkId): Promise<Talk | null>
    abstract findByRoom(id: RoomId): Promise<Talk[]>
    abstract save(talk: Talk): Promise<void>
    abstract delete(talk: Talk): Promise<void>
}
