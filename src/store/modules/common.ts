import { Module } from 'vuex'
import { State } from '..'

// state type
const states = {
    warning: true,
}
export type typeof_common = typeof states
export default {
    namespaced: true,
    state: states,
    mutations: {
        warningShow(state, paylaod: any){
            state.warning = paylaod;
        },
    },
    actions: {
        warningShow({ commit }, paylaod: any) {
            commit('warningShow', paylaod)
        }
    },
} as Module<typeof_common, State>
