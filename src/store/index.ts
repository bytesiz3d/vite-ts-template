// store.ts
import { InjectionKey } from "vue";
import {
  createStore,
  useStore as baseUseStore,
  Store,
  ActionContext,
} from "vuex";
import { State } from "@/types/State";

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
  },
  mutations: {
    increment(state: State) {
      state.count++;
    },
  },
  actions: {
    increment(context: ActionContext<State, State>) {
      context.commit("increment");
    },
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}

export default store;
