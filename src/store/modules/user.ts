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


    // assets
    transferActive: false, // 背包页-TRANSFER按钮
    transferAni: false,
    dataSum: ref([]) as any, // search NFT & dao data 
    readyAssets: -1 ,// 判断是否查询完毕
    contract: ref([]) , // 存放transfer所需abi，address
    transferSuccess: 0, // 转账成功状态
    boxOpened: false, //盒子打开以后的弹窗
    boxId: 0,

    // NFT
    purchaseState: false, // 主要是用于有多种状态流程 （比如售卖，上架， 购买）布局比较复杂，且能够被复用
    purchaseInfo: {} as any,
    badge: [0, 1, 2, 3, 4, 5],
    game: [2, 3, 101101],
    box: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],

    //staking
    stakingState: false, //质押流程
    stakingInfo: {} as any,
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


        // assets
        transferChange(state, payload: any) {
            state.transferActive = payload;
        },
        transferChangeAni(state, payload: any) {
            state.transferAni = payload;
        },
        dataSumSearch(state, payload: any) {
            state.dataSum = payload;
        },
        readyAssets(state, payload: any) {
            state.readyAssets = payload;
        },
        contractData(state, payload: any) {
            state.contract = payload;
        },
        transferSuccess(state, payload: any) {
            state.transferSuccess = payload;
        },
        boxOpened(state, payload: any){
            state.boxOpened = payload
        },
        boxId(state, payload: any){
            state.boxId = payload
        },


        // box 
        purchaseState(state, payload: any) {
            state.purchaseState = payload;
        },
        purchaseInfo(state, payload: any) {
            state.purchaseInfo = payload;
        },

        //staking
        stakingState(state, payload: any) {
            state.stakingState = payload;
        },
        stakingInfo(state, payload: any) {
            state.stakingInfo = payload;
        }
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

        
        // assets
        transferChange({ commit }, paylaod: any) {
            commit('transferChange', paylaod)
        },
        transferChangeAni({ commit }, paylaod: any) {
            commit('transferChangeAni', paylaod)
        },
        dataSumSearch({ commit }, paylaod: any) {
            commit('dataSumSearch', paylaod.data)
            commit('readyAssets', paylaod.flag)
        },
        contractData({ commit }, paylaod: any) {
            commit('contractData', paylaod)
        },
        chageChainId({ commit }, paylaod: any){
            commit('chageChainId', paylaod)
        },
        transferSuccess({ commit }, payload: any) {
            commit('transferSuccess', payload);
        },
        boxOpened({ commit }, payload: any) {
            commit('boxOpened', payload);
        },
        boxId({ commit }, payload: any){
            commit('boxId', payload);
        },


        //box
        purchaseState({ commit }, paylaod: any) {
            commit('purchaseState', paylaod.show)
            commit('purchaseInfo', paylaod.info)
        },


        //staking
        stakingState({ commit }, paylaod: any) {
            commit('stakingState', paylaod.show)
            commit('stakingInfo', paylaod.info)
        },
    },
} as Module<typeof_user, State>
