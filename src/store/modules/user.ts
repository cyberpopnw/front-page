import { Module } from 'vuex'
import { State } from '..'
import { ref } from 'vue'

// 定义数组item的类型
type role = {
    name: string
}

// 定义state类型
const states = {
    name: 'test' as string,
    age: 0 as number,
    roles: [] as role[],
    account: '' as string, // 用户地址
    nativeBalance: '' as string, // 本地余额
    tokenBalances: '' as string, // 令牌余额
    chainId: -1 as Number, // chainid

    // home header
    active: 0,
    xplanActive: false,
    xplanAni: false,
    showDialog: false,
    alertInfo: {} as any, // messageAlert Info
    TipsState: false, // 自定义弹窗show
    TipsInfo: {} as any, // 自定义弹窗信息

    // wallet
    isInstall: false, // 是否下载metamsk
    realId: -1, // 带星号id，用于页面显示
    idTemp: '' as string,  // 完整id，用于判断
    loggined: false, // PC登录状态
    showMenuAni: false, // mobile登录状态
    metaMaskActive: false, // install metamask
    metaAni: false,
    messSing: '', // 签名消息
}
export type typeof_user = typeof states
export default {
    namespaced: true,
    state: states,
    mutations: {
        // 初始化用户
        init(state, paylaod: typeof_user) {
            console.log(`---------->日志输出:paylaod`, paylaod)
            // for (const key in paylaod) {
            //     state[key] = paylaod[key]
            // }
            state['name'] = paylaod['name']
            state['age'] = paylaod['age']
            state['roles'] = paylaod['roles']
        },
        // 初始化用户角色
        initRoles(state, paylaod: role[]) {
            console.log(`---------->日志输出:paylaod`, paylaod)
            state.roles = paylaod
        },
        // 添加用户角色
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

        // wallet
        checkInstall(state, payload: any) {
            state.isInstall = payload;
        },
        walletId(state, payload: any) {
            state.realId = payload;
        },
        walletIdTemp(state, payload: any) {
            state.idTemp = payload;
        },
        walletloggined(state, payload: any) {
            state.loggined = payload;
        },
        walletMenuAni(state, payload: any) {
            state.showMenuAni = payload;
        },
        metaChange(state, payload: any){
            state.metaMaskActive = payload;
        },
        metaChangeAni(state, payload: any) {
            state.metaAni = payload;
        },
        messSing(state, payload: any){
            state.messSing = payload;
        },
    },
    actions: {
        // 初始化用户
        init({ commit }, paylaod: typeof_user) {
            commit('init', paylaod)
        },
        initRoles({ commit }, paylaod: role[]) {
            commit('initRoles', paylaod)
        },
        addRole({ commit }, paylaod: role) {
            commit('addRole', paylaod)
        },
        // 注销
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


        // wallet
        checkInstall({ commit }, paylaod: any) {
            commit('checkInstall', paylaod)
        },
        connectWallet({ commit }, paylaod: any) {
            paylaod.realId && commit('walletId', paylaod.realId)
            paylaod.idTemp && commit('walletIdTemp', paylaod.idTemp)
        },
        walletloggined({ commit }, paylaod: any) {
            commit('walletloggined', paylaod)
        },
        walletMenuAni({ commit }, paylaod: any) {
            commit('walletMenuAni', paylaod)
        },
        metaChange({ commit }, paylaod: any) {
            commit('metaChange', paylaod)
        },
        metaChangeAni({ commit }, paylaod: any) {
            commit('metaChangeAni', paylaod)
        },
        messSing({ commit }, paylaod: any) {
            commit('messSing', paylaod)
        },
    },
} as Module<typeof_user, State>
