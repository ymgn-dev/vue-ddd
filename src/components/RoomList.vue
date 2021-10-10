<template>
    <div class="flex justify-center space-x-4">
        <input type="text" class="border-2 rounded-md" v-model="roomName" />
        <button class="border-2 rounded-md" @click="createRoom()">
            ルーム作成
        </button>
    </div>
    <h1>ルーム一覧</h1>
    <ul>
        <li v-for="room in controller.state.rooms" :key="room.id.value">
            {{ room.title.value }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { inject } from '@vue/runtime-core'
import { ref } from 'vue'
import { Keys } from '../presentation/states/keys'

const controller = inject(Keys.RoomControllerKey)!

const roomName = ref('')

const createRoom = () => {
    controller.createRoom(roomName.value)
    roomName.value = ''
}

// ルームの初期化等が必要になる場合はonBeforeMount内のコールバックに処理を書く
// onBeforeMount(() => {})
</script>
