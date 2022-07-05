import { Module } from 'vuex'
import { State } from '..'

// state type
const states = {
    // NFT
    purchaseState: false, // It is mainly used for processes with multiple states (such as sales, on the shelf, and purchase). The layout is complex and can be reused
    purchaseInfo: {} as any,
    badge: [0, 1, 2, 3, 4, 5],
    game: [2, 3, 101101, 201101, 301101, 401101, 501101, 101102, 201102, 301102, 401102, 501103, 101103, 201103, 301103, 401103, 501103],
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
