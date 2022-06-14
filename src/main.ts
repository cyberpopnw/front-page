import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index' // import vue-router
import store, { key } from './store'
import './index.css' // Customize global styles
import MyVideo from './components/video/video.vue'
import ComingA from './components/coming/comingA.vue'
import ComingB from './components/coming/comingB.vue'
import MessageA from './components/dialog/MessageA.vue'
import MessageB from './components/dialog/MessageB.vue'
import PopupA from './components/popup/PopupA.vue'
import PopupB from './components/popup/PopupB.vue'
import MetaMaskA from './components/metamask/metamaskA.vue'
import MetaMaskB from './components/metamask/metamaskB.vue'
import XplanproA from './components/xplanpro/xplanproA.vue'
import XplanproB from './components/xplanpro/xplanproB.vue'
import api from './api/request'
import VideoBg from 'vue-videobg'
import headerA from './components/common/headerA.vue'
import headerB from './components/common/headerB.vue'
import footerA from './components/common/footerA.vue'
import footerB from './components/common/footerB.vue'
import 'swiper/css'
import VueI18n from './assets/language/register-i18n'
import msgPopupA from './components/common/msgPopupA.vue'
import msgPopupB from './components/common/msgPopupB.vue'
import loading from './components/loading/loading.vue'
import purchaseA from './components/box/purchase.vue'
import purchaseB from './components/box/purchaseB.vue'
import stakingA from './components/staking/stakingA-2.vue'
import stakingB from './components/staking/stakingB.vue'
import wrongNetWorkA from './components/common/wrongNetWorkA.vue';
import loadGameA from './components/assets/loadGameA.vue';
import boxOpenedA from './components/assets/boxOpenedA.vue';
import boxOpenedB from './components/assets/boxOpenedB.vue';
import registerA from './components/common/registerA.vue';
import registerB from './components/common/registerB.vue';
import Waiting from './components/staking/waiting.vue';


import vue3videoPlay from 'vue3-video-play' 
import 'vue3-video-play/dist/style.css' 
import 'default-passive-events'



const app = createApp(App) // Create instance
app.config.globalProperties.$api = api;


app.use(router) // Mount route
app.use(store, key) // Mount vuex
app.use(VueI18n)


app.component('MyVideo', MyVideo) //Video components
app.component('ComingA', ComingA)
app.component('ComingB', ComingB)
app.component('MessageA', MessageA)
app.component('MessageB', MessageB)
app.component('PopupA', PopupA)
app.component('PopupB', PopupB)
app.component('MetamaskA', MetaMaskA)
app.component('MetamaskB', MetaMaskB)
app.component('XplanproA', XplanproA)
app.component('XplanproB', XplanproB)
app.component('video-bg', VideoBg)
app.component('headerA', headerA)
app.component('headerB', headerB)
app.component('footerA', footerA)
app.component('footerB', footerB)
app.component('msgPopupA', msgPopupA)
app.component('msgPopupB', msgPopupB)
app.component('loading', loading)
app.component('purchaseA', purchaseA)
app.component('purchaseB', purchaseB)
app.component('stakingA', stakingA)
app.component('stakingB', stakingB)
app.component('wrongNetWorkA', wrongNetWorkA)
app.component('loadGameA', loadGameA)
app.component('boxOpenedA', boxOpenedA)
app.component('boxOpenedB', boxOpenedB)
app.component('registerA', registerA)
app.component('registerB', registerB)
app.component('Waiting', Waiting)

app.use(vue3videoPlay)
app.mount('#app')
