import { Module } from 'vuex'
import { State } from '..'

// state type
const states = {
    // NFT
    purchaseState: false, // It is mainly used for processes with multiple states (such as sales, on the shelf, and purchase). The layout is complex and can be reused
    purchaseInfo: {} as any,
    badge: [0, 1, 2, 3, 4, 5],
    game: [2, 3, 101101, 101102, 101150, 101201, 101202, 101250, 101301, 101302, 101350, 101401, 101411, 101451],
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
