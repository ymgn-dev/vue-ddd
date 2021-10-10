import { RoomId } from '../domain/room/value/roomId'
import { Talk } from '../domain/talk/entity/talk'
import { TalkFactoryBase } from '../domain/talk/talkFactoryBase'
import { TalkRepositoryBase } from '../domain/talk/talkRepositoryBase'
import { TalkService } from '../domain/talk/talkService'
import { TalkBody } from '../domain/talk/value/talkBody'
import { TalkId } from '../domain/talk/value/talkId'

export class TalkAppService {
    // TODO: ドメインサービスは現状未使用だが今後のために定義しておく
    private _service: TalkService

    constructor(
        private readonly _factory: TalkFactoryBase,
        private readonly _repository: TalkRepositoryBase
    ) {
        this._service = new TalkService(_repository)
    }

    async saveTalk(roomId: string, body: string): Promise<boolean> {
        try {
            const talk = this._factory.create(
                new RoomId(roomId),
                new TalkBody(body)
            )

            await this._repository.save(talk)

            return true
        } catch (e) {
            return false
        }
    }

    async updateTalk(
        roomId: string,
        talkId: string,
        body: string
    ): Promise<void> {
        const found = await this._repository.findById(
            new RoomId(roomId),
            new TalkId(talkId)
        )

        if (found !== null) {
            found.body = new TalkBody(body)
            await this._repository.save(found)
        }
    }

    async deleteTalk(roomId: string, talkId: string): Promise<void> {
        const found = await this._repository.findById(
            new RoomId(roomId),
            new TalkId(talkId)
        )

        if (found !== null) {
            await this._repository.delete(found)
        }
    }

    async getTalk(roomId: string, talkId: string): Promise<Talk | null> {
        const found = await this._repository.findById(
            new RoomId(roomId),
            new TalkId(talkId)
        )

        return found
    }

    async getTalkList(roomId: string): Promise<Talk[]> {
        const id = new RoomId(roomId)
        const found = await this._repository.findByRoom(id)

        return found
    }
}
