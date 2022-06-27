import { Module } from 'vuex'
import { State } from '..'

// state type
const states = {
    //staking
    stakingState: false, // Pledge process
    stakingInfo: {} as any,

    //waiting dialog
    waitingState: false, // show / hidden
    waitingAni: false,  // add animation 
    waitingInfo: {
        title: '',
        subtitle: '',
        desc: ''
    },
    readyAssetsCoin: 0 ,// Judge whether the query is completed
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
        },
        waitingShow(state, payload: any) {
            state.waitingState = payload;
        },
        waitingChangeAni(state, payload: any) {
            state.waitingAni = payload;
        },
        waitingInfo(state, payload: any) {
            state.waitingInfo = payload;
        },
        readyAssets(state, payload: any) {
            state.readyAssetsCoin = payload;
        },
    },
    actions: {
        //staking
        stakingState({ commit }, paylaod: any) {
            commit('stakingState', paylaod.show)
            commit('stakingInfo', paylaod.info)
        },
        waitingShow({ commit }, paylaod: any) {
            commit('waitingShow', paylaod)
        },
        waitingChangeAni({ commit }, paylaod: any) {
            commit('waitingChangeAni', paylaod.ani)
            commit('waitingInfo', paylaod.info)
        },
        readyAssetsCoin({ commit }, paylaod: any) {
            commit('readyAssets', paylaod)
        },
    },
} as Module<typeof_staking, State>
