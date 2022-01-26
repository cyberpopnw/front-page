import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

import sys, { typeof_sys } from './modules/sys'
import user, { typeof_user } from './modules/user'
import moralis, { typeof_moralis } from './modules/moralis'

export const key: InjectionKey<Store<State>> = Symbol()

export type State = {
    counter: number
    vuexIsLogin: boolean
    vuexTestVar: string
    sys?: typeof_sys
    user?: typeof_user
    moralis?: typeof_moralis
}

const store = createStore({
    state: {
        counter: 0,
        vuexIsLogin: false, // 
        vuexTestVar: 'uex',
    },
    mutations: {
        // 修改所有state
        $changeStore(state: any, payload: any) {
            const nameArr = payload.k.split('.')
            const len = nameArr.length
            if (len >= 2) {
                let obj = state[nameArr[0]]
                for (let i = 1; i < len - 1; i++) {
                    obj = obj[nameArr[i]]
                }
                obj[nameArr[len - 1]] = payload.v
            } else {
                state[payload.k] = payload.v
            }
        },
    },
    actions: {
        set({ commit }, payload: any) {
            if (typeof payload.k !== 'string') return console.log(`---------->payload: { k, v }:`, { payload })
            commit('$changeStore', payload)
        },
    },
    modules: {
        sys,
        user,
        moralis,
    },
})
export default store
