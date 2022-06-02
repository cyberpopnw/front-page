import { Module } from 'vuex'
import { State } from '..'
import { ref } from 'vue'

// 定义state类型
const states = {
    // assets
    transferActive: false, // 背包页-TRANSFER按钮
    transferAni: false,
    dataSum: ref([]) as any, // search NFT & dao data 
    readyAssets: -1 ,// 判断是否查询完毕
    contract: ref([]) , // 存放transfer所需abi，address
    transferSuccess: 0, // 转账成功状态
    boxOpened: false, //盒子打开以后的弹窗
    boxId: 0,
}
export type typeof_myAssets = typeof states
export default {
    namespaced: true,
    state: states,
    mutations: {
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
    },
    actions: {
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
        transferSuccess({ commit }, payload: any) {
            commit('transferSuccess', payload);
        },
        boxOpened({ commit }, payload: any) {
            commit('boxOpened', payload);
        },
        boxId({ commit }, payload: any){
            commit('boxId', payload);
        },
    },
} as Module<typeof_myAssets, State>
