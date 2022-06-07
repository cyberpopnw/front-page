import { Module } from 'vuex'
import { State } from '..'

// state type
const states = {
    //staking
    stakingState: false, // Pledge process
    stakingInfo: {} as any,
}
export type typeof_staking = typeof states
export default {
    namespaced: true,
    state: states,
    mutations: {
        //staking
        stakingState(state, payload: any) {
            state.stakingState = payload;
        },
        stakingInfo(state, payload: any) {
            state.stakingInfo = payload;
        }
    },
    actions: {
        //staking
        stakingState({ commit }, paylaod: any) {
            commit('stakingState', paylaod.show)
            commit('stakingInfo', paylaod.info)
        },
    },
} as Module<typeof_staking, State>
