import { InjectionKey } from 'vue'

import { RoomControllerType } from './roomState'
import { TalkControllerType } from './talkState'

export class Keys {
    static readonly TalkControllerKey: InjectionKey<TalkControllerType> =
        Symbol('TalkController')

    static readonly RoomControllerKey: InjectionKey<RoomControllerType> =
        Symbol('RoomController')
}
