import { RoomId } from '../../domain/room/value/roomId'
import { Talk } from '../../domain/talk/entity/talk'
import { TalkRepositoryBase } from '../../domain/talk/talkRepositoryBase'
import { TalkId } from '../../domain/talk/value/talkId'

export class TalkRepository extends TalkRepositoryBase {
    private _talks: Talk[] = []

    async findById(roomId: RoomId, talkId: TalkId): Promise<Talk | null> {
        for (const talk of this._talks) {
            if (talk.roomId === roomId && talk.talkId === talkId) {
                return talk
            }
        }
        return null
    }

    async findByRoom(id: RoomId): Promise<Talk[]> {
        const result: Talk[] = []
        for (const talk of this._talks) {
            if (talk.roomId === id) {
                result.push(talk)
            }
        }
        return result
    }

    async save(talk: Talk): Promise<void> {
        this._talks.push(talk)
    }

    async delete(talk: Talk): Promise<void> {
        this._talks = this._talks.filter((n) => n !== talk)
    }
}
