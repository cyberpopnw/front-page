import { Module } from 'vuex'
import { State } from '..'
import { ref } from 'vue'

// state type
const states = {
    // assets
    transferActive: false, // my assets-TRANSFER btn
    transferAni: false,
    dataSum: ref([]) as any, // search NFT & dao data 
    readyAssets: -1 ,// Judge whether the query is completed
    contract: ref([]) , // abi and address required for transfer
    transferSuccess: 0, // Transfer succeeded status
    boxOpened: false, // Pop up window after the box is opened
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
