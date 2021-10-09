import { TalkId } from '../value/talkId'
import { TalkBody } from '../value/talkBody'
import { RoomId } from '../../room/value/roomId'

export class Talk {
    public roomId: RoomId
    public talkId: TalkId
    public body: TalkBody

    constructor(roomId: RoomId, talkId: TalkId, body: TalkBody) {
        this.roomId = roomId
        this.talkId = talkId
        this.body = body
    }

    public equals(other: Talk): boolean {
        return other !== null && this.talkId === other.talkId
    }
}
