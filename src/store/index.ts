import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

import sys, { typeof_sys } from './modules/sys'
import user, { typeof_user } from './modules/user'
import myAssets, { typeof_myAssets } from './modules/myAssets'
import myBox, { typeof_myBox } from './modules/myBox'
import staking, { typeof_staking } from './modules/staking'
import wallet, { typeof_wallet } from './modules/wallet'
// create InjectionKey
export const key: InjectionKey<Store<State>> = Symbol()

export type State = {
    counter: number
    vuexIsLogin: boolean
    vuexTestVar: string
    sys?: typeof_sys
    user?: typeof_user
    myAssets?: typeof_myAssets
    myBox?: typeof_myBox
    staking?: typeof_staking
    wallet?: typeof_wallet
}

const store = createStore({
    state: {
        counter: 0,
        vuexIsLogin: false, // Current login status
        vuexTestVar: 'vuex',
    },
    mutations: {
        // change state
        $changeStore(state: any, payload: any) {
            // user.info.name = 'xxx'
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
        // use store.dispatch('set', { k: 'sys.innerHeight', v: '12312' })
        set({ commit }, payload: any) {
            if (typeof payload.k !== 'string') return console.log(`---------->payload: error:`, { payload })
            commit('$changeStore', payload)
        },
    },
    modules: {
        sys,
        user,
        myAssets,
        myBox,
        staking,
        wallet
    },
})
export default store
