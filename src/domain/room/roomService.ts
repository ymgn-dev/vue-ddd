import { RoomRepositoryBase } from './roomRepositoryBase'
import { RoomTitle } from './value/roomTitle'

export class RoomService {
    constructor(private readonly _repository: RoomRepositoryBase) {}

    async isDuplicated(title: RoomTitle): Promise<boolean> {
        const found = await this._repository.findByTitle(title)
        return found !== null
    }
}
