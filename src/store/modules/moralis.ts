import { Module } from 'vuex'
import { State } from '..'

// 定义state类型
const states = {
    serverUrl: 'https://iryujqeq3c0k.usemoralis.com:2053/server' as string, // 
    appId: 'pgxFvaT0RRCnC9efXnb6f6Ck9WxudIoscdigwwpU' as string, // appid
    chain: 'bsc testnet' as string, // 
    address: '0xF55c6Be2F9390301bFc66Dd9f7f52495B56301dC' as any, // 
    // address: '0xffec052ee58e1a4d5848a61e7a68a79a94cd5c0e' as string, // 
    user: {
        accounts: '' as string, // 
        username: '' as string, // 
        nativeBalance: '' as string, // 
        tokenBalances: '' as string, // 
    },
}
export type typeof_moralis = typeof states
export default {
    namespaced: true,
    state: states,
    mutations: {
        // 
        async init(state, user: any) {
            state.user = user // 
        },
        // logout
        async logout(state, paylaod: boolean) {
            state.user = { accounts: '', username: '', nativeBalance: '', tokenBalances: '' }
        },
    },
    actions: {
        // login
        init({ commit }, paylaod: boolean) {
            commit('init', paylaod)
        },
        logout({ commit }, paylaod: boolean) {
            commit('logout', paylaod)
        },
    },
} as Module<typeof_moralis, State>
