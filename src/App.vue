<template>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" :key="$route.path" v-if="$route.meta.keepAlive" />
        </keep-alive>
        <component :is="Component" :key="$route.path" v-if="!$route.meta.keepAlive" />
        <msg-popup-a v-if="innerWidth > 1025 && TipsState" :addNetwork="TipsInfo.addNetwork" :isShowTips="TipsState" :isLoading="TipsInfo.hasLoading" :isClose="TipsInfo.hasClose" :title="TipsInfo.title" :content="TipsInfo.content" :boxId="TipsInfo.boxId" :haveNFT="TipsInfo.haveNFT"/>
        <msg-popup-b v-if="innerWidth <= 1025 && TipsState" :addNetwork="TipsInfo.addNetwork" :isShowTips="TipsState" :isLoading="TipsInfo.hasLoading" :isClose="TipsInfo.hasClose" :title="TipsInfo.title" :content="TipsInfo.content" :boxId="TipsInfo.boxId" :haveNFT="TipsInfo.haveNFT"/>
        <message-a v-if="innerWidth > 1025 && showDialog" :state="alertInfo.state" :txt="alertInfo.txt"></message-a>
        <message-b v-if="innerWidth <= 1025 && showDialog" :state="alertInfo.state" :txt="alertInfo.txt"></message-b>
        <purchaseA v-if="innerWidth > 1025 && purchaseState" :isShowTips="purchaseState" :title="purchaseInfo.title" :content1="purchaseInfo.content1" :content2="purchaseInfo.content2" :state="purchaseInfo.state" :haveNFT="purchaseInfo.haveNFT" :boxId="purchaseInfo.boxId"/>
        <purchaseB v-if="innerWidth <= 1025 && purchaseState" :isShowTips="purchaseState" :title="purchaseInfo.title" :content1="purchaseInfo.content1" :content2="purchaseInfo.content2" :state="purchaseInfo.state" :haveNFT="purchaseInfo.haveNFT" :boxId="purchaseInfo.boxId"/>
        <staking-a v-if="innerWidth > 1025 && stakingState" :isShowTips="stakingState" :haveCTY="stakingInfo.haveCTY" :state="stakingInfo.state"/>
        <staking-b v-if="innerWidth <= 1025 && stakingState" :isShowTips="stakingState" :haveCTY="stakingInfo.haveCTY" :state="stakingInfo.state"/>
        <boxOpenedA v-if="innerWidth > 1025 && boxOpened" :isShowTips="boxOpened" :boxId="boxId"></boxOpenedA>
        <boxOpenedB v-if="innerWidth <= 1025 && boxOpened" :isShowTips="boxOpened" :boxId="boxId"></boxOpenedB>
        <div class="ip_error" v-if="iperror && innerWidth > 1025">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/warning.svg" alt="">
            {{$t('message.common.ip')}}
        </div>
        <div class="ip_error_Mobile" v-if="iperror && innerWidth <= 1025">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/warning.svg" alt="">
            {{$t('message.common.ip')}}
        </div>
        <!-- <div style="background: #333;color: #fff" v-if="cname">{{ cname }}</div> -->
    </router-view>
</template>
<script setup lang="ts">
import { onMounted, computed, ref, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import store from '@/store'
import { useI18n } from 'vue-i18n';
import {  useRouter } from 'vue-router'
const route = useRouter()
const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;
const $store: any = useStore()
const router = useRouter()


const innerWidth = computed(() => store.state.sys?.innerWidth || 0)
const iperror = ref(false);


const TipsState = computed(() => store.state.user?.TipsState );
const TipsInfo = computed(() => store.state.user?.TipsInfo);
const alertInfo = computed(() => store.state.user?.alertInfo);
const showDialog = computed(() => store.state.user?.showDialog);
const boxOpened = computed(() => store.state.myAssets?.boxOpened);
const boxId = computed(() => store.state.myAssets?.boxId);
const purchaseState = computed(() => store.state.myBox?.purchaseState );
const purchaseInfo = computed(() => store.state.myBox?.purchaseInfo);
const stakingState = computed(() => store.state.staking?.stakingState );
const stakingInfo = computed(() => store.state.staking?.stakingInfo);

const isChinese = (val: any) => {
    var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
　　if(reg.test(val) && val !== '国内未能识别的地区' || val == 'CHINA'){     
        return false;
　　}else{
        return true;
    }
}

const cname = ref(0) // City name


onMounted(() => {
    const ethereum = (window as any).ethereum 
    window.onresize = () => store.dispatch('sys/get_screen_size') // Monitor screen size
    
    if(ethereum){  // Only execute if metamask is installed
        ethereum.on("accountsChanged", (accounts: any) => {
            console.log(accounts[0]); //Once the account is switched, it will be executed here
            let id = accounts[0];
            let len = id.length-1;
            id = id[0]+id[1]+id[2]+id[3]+id[4]+"*****"+id[len-3]+id[len-2]+id[len-1]+id[len];
            store.dispatch('wallet/connectWallet',{realId:id, idTemp:accounts[0]});// Store asterisk ID and complete id
            store.dispatch('myAssets/dataSumSearch',{flag:0});
        });
        ethereum.on('chainChanged', (chainId: string) => {
            let id: any = Number(chainId);
            // console.log(id);
            
            store.dispatch('user/chageChainId', Number(chainId))
            
            if(id != 56 && id != 43113 && id != 85 && id != 80001) {
                store.dispatch('user/xplanChangeAni', true);
                store.dispatch('user/TipsState', {show: true, info: { hasLoading: false, hasClose: true, title: 'Network Error', content: t('message.common.metamask.switch'), addNetwork: true}});
                return;
            }
            store.dispatch('user/TipsState', {show: false, info: { }});
        });
    }

    // If the code of the invitation is carried, it will jump automatically
    console.log(router.currentRoute.value.query.code, 'router.currentRoute.value.query.code');
    
    // setTimeout(() => {
    //     if(router.currentRoute.value.query.code) router.push({ path: '/download', query: { code: router.currentRoute.value.query.code || '' } })
    // }, 500);
     
    // Verify whether it is a Chinese IP
    var returnCitySN = (window as any).returnCitySN;
    console.log(returnCitySN, 'returnCitySN');
    let HongShou = '125.69.86.177' // ip White list
    let HongShou5G = '125.69.86.216'
    let indiegame = "171.223.208.133"
    console.log(process.env.NODE_ENV, 'process.env'); 
    cname.value = returnCitySN.cname;
    if(!isChinese(returnCitySN.cname)) {
        // route.push({ path: '/IPshielding' })
        iperror.value = true;
        console.log(2222);
    }else{ 
        setTimeout(() => {
            console.log(route.currentRoute.value, 'route.currentRoute.value');
            if(route.currentRoute.value.path == '/IPshielding') route.push({ path: '/' })
        }, 1000);
    }//
})
</script>
<style>
    .ip_error, .ip_error_Mobile{
        z-index: 6;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0vw;
        left: 50%;
        font-size: 1vw;
        transform: translateX(-50%);
        /* width: 52.34vw; */
        height: 2.3vw;
        padding: 0 2vw;
        margin-top: 8vw;
        font-size: .83vw;
        font-family: AlibabaPuHuiTi_2_55_Regular;
        color: #F2FF0B;
        line-height: 2.3vw;
        background: rgba(243, 255, 41, 0.42);
        border-radius: 4px;
        border: 1px solid #F3FF29;
        white-space: nowrap;
        /* animation-fill-mode: forwards; */
    }
    .ip_error > img{
        width: 1.6vw;
        margin-right: .4vw;
    }
    .ip_error_Mobile{
        top: 10vw;
        width: auto;
        height: auto;
        padding: 6px;
        line-height: 2.6vw;
        white-space: normal;
    }
    .ip_error_Mobile > img{
        float: left;
        width: 4vw;
        margin-right: 2vw;
    }
    @keyframes springtimeAniamtScale2 {
        0% {
            bottom: 2.5vw;
        }
        25% {
            bottom: 0vw;
        }
        50% {
            bottom: -2vw;
        }
        75%{
            bottom: 0vw;
        }
        100% {
            bottom: 2.5vw;
        }
    }
    @keyframes fadeInRight {
        0% {
            opacity: 0;
            -webkit-transform: translateX(30px);
            transform: translateX(30px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
    }
    @keyframes fadeInLeft {
        0% {
            opacity: 0;
            -webkit-transform: translateX(-30px);
            transform: translateX(-30px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
    }
    @keyframes bounceInLeft {
        0% {
            opacity: 0;
            -webkit-transform: translateX(-2000px);
            -ms-transform: translateX(-2000px);
            transform: translateX(-2000px);
        }
        60% {
            opacity: .4;
            -webkit-transform: translateX(-100px);
            -ms-transform: translateX(-100px);
            transform: translateX(-100px);
        }
        80% {
            opacity: .8;
            -webkit-transform: translateX(-30px);
            -ms-transform: translateX(-30px);
            transform: translateX(-30px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateX(0);
            -ms-transform: translateX(0);
            transform: translateX(0);
        }
    }
    @keyframes bounceInRight {
        0% {
            opacity: 0;
            -webkit-transform: translateX(2000px);
            -ms-transform: translateX(2000px);
            transform: translateX(2000px);
        }
        60% {
            opacity: .4;
            -webkit-transform: translateX(100px);
            -ms-transform: translateX(100px);
            transform: translateX(100px);
        }
        80% {
            opacity: .8;
            -webkit-transform: translateX(30px);
            -ms-transform: translateX(30px);
            transform: translateX(30px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateX(0);
            -ms-transform: translateX(0);
            transform: translateX(0);
        }
    }
    @keyframes fadeInUp {
        0% {
            opacity: 0;
            -webkit-transform: translateY(30px);
            -ms-transform: translateY(30px);
            transform: translateY(30px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0);
        }
    }
    /* @keyframes fadeInDown {
        0% {
            opacity: 0;
            -webkit-transform: translateY(-30px);
            -ms-transform: translateY(-30px);
            transform: translateY(-30px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0);
        }
    } */
    @keyframes fadeInDown {
        0% {
            opacity: 1;
            -webkit-transform: translateY(0px);
            -ms-transform: translateY(0px);
            transform: translateY(0px);
        }
        50% {
            opacity: 1;
            -webkit-transform: translateY(-30px);
            -ms-transform: translateY(-30px);
            transform: translateY(-30px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateY(0px);
            -ms-transform: translateY(0px);
            transform: translateY(0px);
        }
    }
    @keyframes bounceIn {
        0% {
            opacity: 0;
            -webkit-transform: scale(0.3);
            -ms-transform: scale(0.3);
            transform: scale(0.3);
        }
        50% {
            opacity: 1;
            -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
        }
        70% {
            -webkit-transform: scale(0.9);
            -ms-transform: scale(0.9);
            transform: scale(0.9);
        }
        100% {
            opacity: 1;
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }
    }
     @keyframes home {
        0% {
            background-size: auto 109%;
        }
        10% {
            background-size: auto 108%;
        }
        20% {
            background-size: auto 107%;
        }
        30%{
            background-size: auto 106%;
        }
        40% {
            background-size: auto 105%;
        }
        50% {
            background-size: auto 104%;
        }
        60% {
            background-size: auto 103%;
        }
        70% {
            background-size: auto 102%;
        }
        80% {
            background-size: auto 101%;
        }
        90% {
            background-size: auto 100%;
        }
        100% {
            background-size: auto 100%;
        }
    }
    @keyframes bounceShow {
        0% {
            opacity: 0;
            -webkit-transform: scale(0.3);
            -ms-transform: scale(0.3);
            transform: scale(0.3);
        }
        50% {
            opacity: 1;
            -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
        }
        100% {
            opacity: 1;
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }
    }
    @keyframes bounceHide {
        0% {
            opacity: 1;
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }
        50% {
            opacity: 1;
            -webkit-transform: scale(1.05);
            -ms-transform: scale(1.05);
            transform: scale(1.05);
        }
        99% {
            opacity: 0;
            -webkit-transform: scale(0.3);
            -ms-transform: scale(0.3);
            transform: scale(0.3);
        }
        100% {
            opacity: 0;
            -webkit-transform: scale(0);
            -ms-transform: scale(0);
            transform: scale(0);
        }
    }

    .fadeInUp{
        animation: fadeInUp 1s linear;
    }
    .fadeInDown{
        animation: fadeInDown 3s linear infinite;
    }
    .bounceIn{
        animation: bounceIn 1s linear;
    }
    .bounceShow{
        animation: bounceShow 0.2s linear;
    }
    .bounceHide{
        animation: bounceHide 0.2s linear;
        animation-fill-mode: forwards;
    }
    .fadeInLeft{
         animation: fadeInLeft 1s linear;
    }
    .fadeInRight{
         animation: fadeInRight 1s linear;
    }
    .bounceInLeft{
        animation: bounceInLeft 1s linear;
    }
    .bounceInRight{
         animation: bounceInRight 1.5s linear;
    }
</style>
