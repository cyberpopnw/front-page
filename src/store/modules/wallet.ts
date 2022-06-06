import { Module } from 'vuex'
import { State } from '..'

// state type
const states = {
    // wallet
    isInstall: false, // is install metamsk
    realId: -1, // includ * id
    idTemp: '' as string,  // all number id
    loggined: false, // PC login status
    showMenuAni: false, // mobile login status
    metaMaskActive: false, // install metamask
    metaAni: false,
    messSing: '', // Signature message
}
export type typeof_wallet = typeof states
export default {
    namespaced: true,
    state: states,
    mutations: {
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
} as Module<typeof_wallet, State>
