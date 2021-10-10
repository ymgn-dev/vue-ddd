<template>
    <div class="flex justify-center space-x-4">
        <input type="text" class="border-2 rounded-md" v-model="message" />
        <button class="border-2 rounded-md" @click="sendMessage()">送信</button>
    </div>
    <h1>トーク</h1>
    <ul>
        <li v-for="talk in controller.state.talks" :key="talk.talkId.value">
            {{ talk.body.value }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { inject } from '@vue/runtime-core'
import { computed, onBeforeMount, ref } from 'vue'
import { Keys } from '../presentation/states/keys'

const props = defineProps({
    roomId: { type: String, default: '' },
})

const controller = inject(Keys.TalkControllerKey)!

const message = ref('')

const sendMessage = () => {
    controller.createTalk(props.roomId, message.value)
    message.value = ''
}

// トークの初期化等が必要になる場合はonBeforeMount内のコールバックに処理を書く
// onBeforeMount(() => {})
</script>
