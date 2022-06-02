import { Module } from 'vuex'
import { State } from '..'

// 定义state类型
const states = {
    // NFT
    purchaseState: false, // 主要是用于有多种状态流程 （比如售卖，上架， 购买）布局比较复杂，且能够被复用
    purchaseInfo: {} as any,
    badge: [0, 1, 2, 3, 4, 5],
    game: [2, 3, 101101],
    box: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
}
export type typeof_myBox = typeof states
export default {
    namespaced: true,
    state: states,
    mutations: {
        // box 
        purchaseState(state, payload: any) {
            state.purchaseState = payload;
        },
        purchaseInfo(state, payload: any) {
            state.purchaseInfo = payload;
        },
    },
    actions: {
        //box
        purchaseState({ commit }, paylaod: any) {
            commit('purchaseState', paylaod.show)
            commit('purchaseInfo', paylaod.info)
        },
    },
} as Module<typeof_myBox, State>
