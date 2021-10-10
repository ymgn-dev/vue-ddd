import { reactive, readonly } from 'vue'
import { RoomAppService } from '../../application/roomAppService'
import { Room } from '../../domain/room/entity/room'

export default function roomController(_service: RoomAppService) {
    const state = reactive<{
        rooms: Room[]
    }>({ rooms: [] })

    const fetchRoom = async (): Promise<void> => {
        const roomList = await _service.getRoomList()
        state.rooms = Array.from(roomList)
    }

    const createRoom = async (title: string): Promise<boolean> => {
        const isSuccess = await _service.saveRoom(title)

        await fetchRoom()

        return isSuccess
    }

    const deleteRoom = async (roomId: string): Promise<void> => {
        await _service.deleteRoom(roomId)

        await fetchRoom()
    }

    const editroom = async (roomId: string, title: string): Promise<void> => {
        await _service.updateRoom(roomId, title)

        await fetchRoom()
    }

    return {
        state: readonly(state),
        fetchRoom,
        createRoom,
        deleteRoom,
        editroom,
    }
}

export type RoomControllerType = ReturnType<typeof roomController>
