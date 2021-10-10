import { Room } from '../domain/room/entity/room'
import { RoomFactoryBase } from '../domain/room/roomFactoryBase'
import { RoomRepositoryBase } from '../domain/room/roomRepositoryBase'
import { RoomService } from '../domain/room/roomService'
import { RoomId } from '../domain/room/value/roomId'
import { RoomTitle } from '../domain/room/value/roomTitle'
import { TalkRepositoryBase } from '../domain/talk/talkRepositoryBase'

export class RoomAppService {
    private _service: RoomService

    constructor(
        private readonly _factory: RoomFactoryBase,
        private readonly _repository: RoomRepositoryBase,
        private readonly _talkRepository: TalkRepositoryBase
    ) {
        this._service = new RoomService(_repository)
    }

    async saveRoom(title: string): Promise<boolean> {
        try {
            const roomTitle = new RoomTitle(title)
            const newRoom = this._factory.create(roomTitle)

            const isDuplicated = await this._service.isDuplicated(newRoom.title)

            if (isDuplicated) {
                return false
            }

            await this._repository.save(newRoom)

            return true
        } catch (e) {
            return false
        }
    }

    async updateRoom(roomId: string, title: string): Promise<void> {
        const id = new RoomId(roomId)
        const found = await this._repository.findById(id)

        if (found !== null) {
            found.title = new RoomTitle(title)
            await this._repository.save(found)
        }
    }

    async deleteRoom(roomId: string): Promise<void> {
        const id = new RoomId(roomId)
        const found = await this._repository.findById(id)

        if (found !== null) {
            await this._repository.delete(found)
        }
    }

    async getRoomList(): Promise<Room[]> {
        const found = await this._repository.findAll()
        return found
    }
}
