import { Module } from 'vuex'
import { State } from '..'

// state type
const states = {
    innerWidth: window.innerWidth as number, // Current screen width
    innerHeight: window.innerHeight as number, // Current screen width
}
export type typeof_sys = typeof states
export default {
    namespaced: true,
    state: states,
    mutations: {
        // Get screen width and height
        get_screen_size(state) {
            state.innerWidth = window.innerWidth
            state.innerHeight = window.innerHeight
        },
    },
    actions: {
        get_screen_size({ commit }) {
            commit('get_screen_size')
        },
    },
} as Module<typeof_sys, State>
