<template>
    <RoomList @room-id="setRoomId" />
    <TalkList :room-id="roomId" />
</template>

<script setup lang="ts">
import { provide } from '@vue/runtime-core'
import { reactive, ref } from 'vue'
import { RoomAppService } from './application/roomAppService'
import { TalkAppService } from './application/talkAppService'
import { RoomFactory } from './infrastructure/room/roomFactory'
import { RoomRepository } from './infrastructure/room/roomRepository'
import { TalkFactory } from './infrastructure/talk/talkFactory'
import { TalkRepository } from './infrastructure/talk/talkRepository'
import { Keys } from './presentation/states/keys'
import roomController from './presentation/states/roomState'
import talkController from './presentation/states/talkState'
import RoomList from './components/RoomList.vue'
import TalkList from './components/TalkList.vue'

const _talkFactory = new TalkFactory()
const _talkRepository = new TalkRepository()

const _roomFactory = new RoomFactory()
const _roomRepository = new RoomRepository()

const _talkAppService = new TalkAppService(_talkFactory, _talkRepository)

const _roomAppService = new RoomAppService(
    _roomFactory,
    _roomRepository,
    _talkRepository
)

provide(Keys.TalkControllerKey, reactive(talkController(_talkAppService)))
provide(Keys.RoomControllerKey, reactive(roomController(_roomAppService)))

const roomId = ref('')
const setRoomId = (value: string) => {
    roomId.value = value
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
