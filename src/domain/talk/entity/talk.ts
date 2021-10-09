import { TalkId } from '../value/talkId'
import { TalkBody } from '../value/talkBody'
import { RoomId } from '../../room/value/roomId'

export class Talk {
    constructor(
        public roomId: RoomId,
        public talkId: TalkId,
        public body: TalkBody
    ) {}

    public equals(other: Talk): boolean {
        return other !== null && this.talkId === other.talkId
    }
}
