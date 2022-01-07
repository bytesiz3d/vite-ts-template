import { Store } from 'vuex'
import { State } from "@/types/State"

// define your typings for the store state
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}