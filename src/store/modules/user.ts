import { Module } from 'vuex'
import { State } from '..'

type role = {
    name: string
}

// state type
const states = {
    name: 'test' as string,
    age: 0 as number,
    roles: [] as role[],
    account: '' as string, // user address
    nativeBalance: '' as string, // local balance
    tokenBalances: '' as string, // token balance
    chainId: -1 as Number, // chainid

    // home header
    active: 0,
    xplanActive: false,
    xplanAni: false,
    showDialog: false,
    alertInfo: {} as any, // messageAlert Info
    TipsState: false, // Custom Popup show
    TipsInfo: {} as any, // Custom Popup infomation
}
export type typeof_user = typeof states
export default {
    namespaced: true,
    state: states,
    mutations: {
        // init user
        init(state, paylaod: typeof_user) {
            console.log(`---------->日志输出:paylaod`, paylaod)
            // for (const key in paylaod) {
            //     state[key] = paylaod[key]
            // }
            state['name'] = paylaod['name']
            state['age'] = paylaod['age']
            state['roles'] = paylaod['roles']
        },
        // init user role
        initRoles(state, paylaod: role[]) {
            console.log(`---------->日志输出:paylaod`, paylaod)
            state.roles = paylaod
        },
        // add user role
        addRole(state, payload: role) {
            state.roles.push(payload)
        },
        // logout
        logout(state, paylaod: boolean) {
            state['account'] = ''
            state['nativeBalance'] = ''
            state['tokenBalances'] = ''
        },
        chageChainId(state, paylaod: any){
            state.chainId = paylaod;
        },

        // home header
        changeActive(state, payload: any) {
            state.active = payload;
        },
        changeXplan(state, payload: any) {
            state.xplanActive = payload;
        },
        xplanChangeAni(state, payload: any) {
            state.xplanAni = payload;
        },
        showDialog(state, payload: any) {
            state.showDialog = payload;
        },
        alertInfo(state, payload: any) {
            state.alertInfo = payload;
        },
        TipsState(state, paylaod: any){
            state.TipsState = paylaod;
        },
        TipsInfo(state, paylaod: any){
            state.TipsInfo = paylaod;
        },
    },
    actions: {
        // init user
        init({ commit }, paylaod: typeof_user) {
            commit('init', paylaod)
        },
        initRoles({ commit }, paylaod: role[]) {
            commit('initRoles', paylaod)
        },
        addRole({ commit }, paylaod: role) {
            commit('addRole', paylaod)
        },
        // logout
        logout({ commit }, paylaod: boolean) {
            commit('logout', paylaod)
        },
        chageChainId({ commit }, paylaod: any){
            commit('chageChainId', paylaod)
        },

        // home header
        changeActive({ commit }, paylaod: any) {
            commit('changeActive', paylaod)
        },
        changeXplan({ commit }, paylaod: any) {
            commit('changeXplan', paylaod)
        },
        xplanChangeAni({ commit }, paylaod: any) {
            commit('xplanChangeAni', paylaod)
        },
        showDialog({ commit }, paylaod: any) {
            commit('showDialog', paylaod.show)
            commit('alertInfo', paylaod.info)
        },
        TipsState({ commit }, paylaod: any) {
            commit('TipsState', paylaod.show),
            commit('TipsInfo', paylaod.info)
        },

    },
} as Module<typeof_user, State>
