import { reactive, readonly } from 'vue'
import { TalkAppService } from '../../application/talkAppService'
import { Talk } from '../../domain/talk/entity/talk'

export default function talkController(_service: TalkAppService) {
    const state = reactive<{
        talks: Talk[]
    }>({ talks: [] })

    const initTalk = async (roomId: string): Promise<void> => {
        await fetchTalk(roomId)
    }

    const fetchTalk = async (roomId: string): Promise<void> => {
        const talkList = await _service.getTalkList(roomId)

        state.talks = Array.from(talkList)
    }

    const createTalk = async (
        roomId: string,
        body: string
    ): Promise<boolean> => {
        const isSuccess = await _service.saveTalk(roomId, body)

        await fetchTalk(roomId)

        return isSuccess
    }

    const deleteTalk = async (
        roomId: string,
        talkId: string
    ): Promise<void> => {
        await _service.deleteTalk(roomId, talkId)

        await fetchTalk(roomId)
    }

    const editTalk = async (
        roomId: string,
        talkId: string,
        body: string
    ): Promise<void> => {
        await _service.updateTalk(roomId, talkId, body)

        await fetchTalk(roomId)
    }

    return {
        state: readonly(state),
        initTalk,
        createTalk,
        deleteTalk,
        editTalk,
    }
}

export type TalkControllerType = ReturnType<typeof talkController>
