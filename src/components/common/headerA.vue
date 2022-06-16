<template>
    <div class="home">
        <header>
            <div class="bgdiv"></div>
            <div class="tips" v-if="warning">
                <div>{{ $t('message.common.tips1')}}<span> https://cyberpop.online </span>{{ $t('message.common.tips2')}}</div>
                <img class="close" src="@/assets/nwhome/close.svg" @click="closeWarn" alt="">
            </div>
            <div class="content" id="header">
                <div class="logo">
                    <a :href="path"><img v-show="!logoHFlag" :src="logoHSrcP" @mouseenter="logoHFlag = true" alt=""></a>
                    <a :href="path"><img v-show="logoHFlag" :src="logoHSrcG" @mouseleave="logoHFlag = false" alt=""></a>
                </div>
                <div class="user">
                    <div class="switch_chain"
                        @mouseover="mouseOver"
                        @mouseleave="mouseLeaveChain"
                        v-show="realId !== -1"
                    >
                        <div class="select_chain" @click="switchChain" :class="{'selected': chainId == 56 || chainId == 43113 || chainId == 80001 || chainId == 85}"><img :src="chainId == 56 || chainId == 43113 || chainId == 80001 || chainId == 85 ? chainList.select.img : chainList.notSupported.img" alt=""><span>{{ chainId == 56 || chainId == 43113 || chainId == 80001 || chainId == 85 ? chainList.select.name : chainList.notSupported.name }}</span><div class="blur"></div></div>
                        <div class="hover_chunk" v-show="showChainList">
                            <div class="chunk_wrap">
                                <div class="cover"></div>
                                <div class="coverborder"></div>
                                <div class="network">
                                    <div v-for="(value,key,index) in chainList" @click="changeChain(value)" :key="index" class="item" v-show="!value.active"><img :src="value.img" alt=""><span>{{ value.name }}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="language" ref="clickCursor3">
                        <!-- <img @click="showLanguage = !showLanguage" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-language.svg" alt=""> -->
                        <div class="icon" @click="showLanguage = !showLanguage"></div>
                        <div class="langUl" v-show="showLanguage" ref="cursor3">
                            <div class="wrap">
                                <div class="cover"></div>
                                <div class="coverborder"></div>
                                <ul>
                                    <li :class="select == 'us' ? 'active' : ''" @click="selectLang('us')">{{$t('message.common.language1')}}</li>
                                    <li :class="select == 'cn' ? 'active' : ''" @click="selectLang('cn')">{{$t('message.common.language2')}}</li>
                                    <li :class="select == 'jp' ? 'active' : ''" @click="selectLang('jp')">{{$t('message.common.language3')}}</li>
                                    <li :class="select == 'kr' ? 'active' : ''" @click="selectLang('kr')">{{$t('message.common.language4')}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="download">
                        <div @click="goDownload()"></div>
                    </div>
                    <div class="register">
                        <div class="register_button" @click="isRegister(true)">
                            <!-- <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/register-email.svg" alt=""> -->
                            <!-- <span>{{ $t('message.home.reg_submit1') }}</span>
                            <span>{{ $t('message.home.reg_submit2') }}</span> -->
                        </div>
                    </div>
                    <div class="login_in" v-if="!loggined" @click="login()" @mouseenter="mouseEnter()" @mouseleave="mouseLeave()">
                        <div class="txt">{{$t('message.common.wallet')}}</div>
                        <div class="mask" id="mask"></div>
                    </div>
                    <div class="logged_in" v-if="loggined">
                        <img class="wallet" src="@/assets/nwhome/wallet.svg" alt="">
                        <div class="idtxt">{{realId}}</div>
                        <img class="portrait" src="@/assets/nwhome/portrait.svg" ref="clickCursor2" alt="" @click="showloggedFlag = !showloggedFlag,hoverLogged = false" @mouseenter="hoverLogged = true" @mouseleave="hoverLogged = false">
                        <div class="logged_menu" v-show="showloggedFlag || hoverLogged" ref="cursor2" @mouseenter="hoverLogged = true" @mouseleave="hoverLogged = false">
                            <div class="wrap">
                                <div class="cover"></div>
                                <div class="coverborder"></div>
                                <div @click="toAssets()">{{t('message.common.login_myAssets')}}</div>
                                <div @click="signout">{{t('message.common.login_logout')}}</div>
                            </div>
                        </div>
                    </div>
                     <div class="code" v-if="code">inviter Code: {{ code }} &nbsp;&nbsp;&nbsp; level: {{ level }} </div>
                </div>
                <div class="menu">
                    <ul id="menuUl">
                        <li @mouseover="menuHover(0)" @click="changeMenu(0, '/')" :class="{'active': active == 0}">
                            <span>{{$t('message.common.menu1')}}</span>
                        </li>
                        <li @mouseover="menuHover(1)" @click="changeMenu(1, '/mining')" :class="{'active': active == 1}">
                            <span>{{$t('message.common.menu2')}}</span>
                        </li>
                        <li @mouseover="menuHover(2)" @click="changeMenu(2, '/mystery')" :class="{'active': active == 2}">
                            <span>{{$t('message.common.menu3')}}</span>
                        </li>
                        <li @mouseover="menuHover(4)" @mouseleave="hoverDoc = false" @mouseenter="hoverDoc = true" ref="clickCursor" @click="showDoc = !showDoc,hoverDoc = false" :class="{'active': active == 4}">
                            <span >{{$t('message.common.menu4')}}</span>
                            <div class="doc_menu" v-show="showDoc || hoverDoc" ref="cursor" @mouseenter="hoverDoc = true">
                                <div class="wrap">
                                    <div class="cover"></div>
                                    <div class="coverborder"></div>
                                    <!-- <a href="https://d3bhixjyozyk2o.cloudfront.net/CyberpopWhitePaper18thFeb2022.pdf" @click="showDoc = false" target="view_window">{{t('message.common.doc_whitePaper')}}</a> -->
                                    <a href="https://pdf.cyberpop.online/" @click="showDoc = false" target="view_window">{{t('message.common.doc_whitePaper')}}</a>
                                    <!-- <a href="https://d3bhixjyozyk2o.cloudfront.net/CyberpopTechnologyArchitecture2.pdf" @click="showDoc = false" target="view_window">{{$t('message.common.doc_greenPaper')}}</a> -->
                                    <a href="https://d3bhixjyozyk2o.cloudfront.net/(new)CyberPOPNewworlddeck(en).pdf" @click="showDoc = false" target="view_window">{{t('message.common.doc_deck')}}</a>
                                </div>
                            </div>
                        </li>
                        <li @mouseover="menuHover(5)" @click="changeMenu(5, '/space')" :class="{'active': active == 5}">
                            <span>{{$t('message.common.menu5')}}</span>
                        </li>
                        <li @mouseover="menuHover(6)" @click="toMarket" :class="{'active': active == 6}">
                            <span>{{$t('message.common.menu7')}}</span>
                        </li>
                        <!-- <li @mouseover="menuHover(6)" @click="changeMenu(6, '/')" :class="{'active': active == 6}">
                            <span>{{$t('message.common.menu6')}}</span>
                        </li> -->
                    </ul>
                </div>
            </div>
            <!-- <div class="white-list" v-show="close && path == '/'">
                <div class="wrap">
                    <div class="left">Total Raise：<span>$750,000</span></div>
                    <img class="cImg" src="@/assets/nwhome/whitelistbanner_seg.svg" alt="">
                    <div class="right">
                        <div class="name">IDO WHITELISTS OPEN</div>
                        <div class="desc">
                            Limited to <span>2500</span> whitelists / Basic quota per person: <span>$300</span>
                            Reach <span>4000</span> points to get a whitelist!
                        </div>
                    </div>
                    <img class="close" src="@/assets/nwhome/close.svg" alt="" @click="close = false">
                </div>
            </div> -->
        </header>
    </div>

    <!-- Add network Popup -->
    <metamask-a v-if="metaMaskActive"></metamask-a>
    <!-- Switch network Popup -->
    <wrongNetWorkA :isShowTips="isShowTips" @changeSwitch="changeSwitch"></wrongNetWorkA>
    <!-- Dealer registration -->
    <register-a v-if="register" :register="register" :registerTrans="registerTrans" :code="code" :level="level" @closeRegister="closeRegister"></register-a>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, computed, getCurrentInstance, readonly, ref, watch } from 'vue'
import store from '@/store'
import NFT from '@/tools/web3' 
import {  useRouter } from 'vue-router'
import { Locale, useI18n } from 'vue-i18n';
const { proxy } = getCurrentInstance() as any;
const router = useRouter()
let close: any = ref(true);
const code: any = ref('');
const isShowTips = ref(false);
const register = ref(false);
const registerTrans = ref(false);
const readyAssetsF: any = computed(() => store.state.myAssets?.readyAssets ); // Status value of the connection
const props = defineProps({
    path: String, 
    type: Number
})
const warning: any = computed(() => store.state.common?.warning );
const closeWarn = () => {store.dispatch('common/warningShow',false)}
const chainList = ref({
    BSC: {
        name: 'BSC',
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/BSC.ico',
        chainId: 56,
    },
    avax: {
        name: 'Fuji',
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/avax.png',
        chainId: 43113,
    },
    mumbai: {
        name: 'Mumbai',
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/poly.png',
        chainId: 80001,
    },
    Gate: {
        name: 'Gate',
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/gate.svg',
        chainId: 85,
    },
    select: {
        name: 'BSC',
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/BSC.ico',
        chainId: 56,
        active: 1,
    },
    notSupported: {
        name: '',
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwAssets/wrong.png',
        active: 1,
    }
}) as any


// router
const goDownload = () => {
    router.push({ path: '/download', query: { code: router.currentRoute.value.query.code, isClick: 1 } })
    return;
}
const toMarket = () => {
    window.open('https://testmarket.cyberpop.online/#/', '_blank');
}


const showChainList = ref(false);
const chainId: any = computed(() => store.state.user?.chainId );

// Automatically determine the current chain
watch(chainId, (newVal, oldVal) => {
    if(!oldVal) return;
    let temp: any;
    Object.keys(chainList._rawValue).forEach((key: any) => {
        if(chainList._rawValue[key].chainId == newVal){
            temp = chainList._rawValue[key]
        }
    })
    if(temp) chainList.value.select = { ...temp, active: 1 };
}, {immediate:true,deep:true});

const changeChain = async (value?: any) => {
    let a: any = await NFT.addChain(value.chainId)
    if(a){
        store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}})
        chainList.value.select = {...value, active: 1};
    }else{
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.tran_stop')}})
    }
}

const mouseOver: any = () => {
    console.log(chainId.value);
    if(chainId.value == 56 || chainId.value == 43113 || chainId.value == 85 || chainId.value == 80001){
        showChainList.value = true;
    }
}

const mouseLeaveChain: any = () => {
    showChainList.value = false;
}

const switchChain = () => { //Switching chain
    if(chainId.value == 56 || chainId.value == 43113 || chainId.value == 85 || chainId.value == 80001) return;
    store.dispatch('user/xplanChangeAni', true);
    isShowTips.value = !isShowTips.value;
}
const changeSwitch = () => { //Subassemblies, popup properties
    isShowTips.value = !isShowTips.value;
}


// language
let showLanguage:any = ref(false);

const { locale, t, getLocaleMessage } = useI18n()
let select:any = ref('us');
const selectLang = (index: any) => {
    showLanguage.value = false
    select.value = index

    locale.value = index
    localStorage.setItem('lang', index)
    
}

// connect
const mouseEnter = () => {
    const mask = document.getElementById("mask") as HTMLElement;
    mask.classList.add('submitAnimation');
    mask.classList.remove('stopSubmitAnimation');
}

const mouseLeave = () => {
    const mask = document.getElementById("mask") as HTMLElement;
    mask.classList.add('stopSubmitAnimation');
    mask.classList.remove('submitAnimation');
}

const messSing = computed(() => store?.state.wallet?.messSing); // Signature message

const active = computed(() => store?.state.user?.active);
const menuHover = (type: any) => {
    let myMenuUl = document.getElementById("menuUl") as HTMLElement;
    let header = document.getElementById("header") as HTMLElement;
    let myMenuLi = myMenuUl.getElementsByTagName("li");
    let myMenuLiLen:number = myMenuLi.length;
    for( let i=0;i<myMenuLiLen;i++){
        myMenuLi[i].addEventListener('mouseout',() => {
            store.dispatch('user/changeActive', menuFlag.value);
        })
    }
    header.addEventListener('mouseout',() => {
        store.dispatch('user/changeActive', menuFlag.value);
    })
    store.dispatch('user/changeActive', type);
}

let menuFlag:any = ref(props.type);
const changeMenu = (type: any, route?: any) => {
    menuFlag.value = type;
    store.dispatch('user/changeActive', type)
    if(route) router.push({ path: `${route}`, query: {
        code: code.value
    }})
}



// docMenu
let showDoc:any = ref(false); 
let hoverDoc:any = ref(false); 
const cursor:any = ref(null)
const clickCursor:any = ref(null)
//logged_menu
let showloggedFlag:any = ref(false)
let hoverLogged:any = ref(false)
const cursor2:any = ref(null)
const clickCursor2:any = ref(null)
//language
const cursor3:any = ref(null)
const clickCursor3:any = ref(null)

const handleOtherClick = (e:any) => {
    if( cursor.value.contains(e.target) || clickCursor.value.contains(e.target)){
        showloggedFlag.value = false;
        showLanguage.value = false;
        return
    }else{
        showDoc.value = false;
    }

    if( cursor3.value.contains(e.target) || clickCursor3.value.contains(e.target)){
        showDoc.value = false;
        showloggedFlag.value = false;
        return
    }else{
        showLanguage.value = false;
    }

    if( loggined.value ){
        if( cursor2.value.contains(e.target) || clickCursor2.value.contains(e.target) ){
            showDoc.value = false;
            showLanguage.value = false;
            return
        }else{
            showloggedFlag.value = false;
        }
    }
}






let logoHSrcP:any = ref(''); 
let logoHSrcG:any = ref(''); 
const logoHImport = async() => {
    const logoHSrcPng:any = await import('@/assets/nwhome/logo_101.png');
    const logoHSrcGif:any = await import('@/assets/nwhome/logo.gif');
    logoHSrcP.value = logoHSrcPng.default;
    logoHSrcG.value = logoHSrcGif.default;
}

// header
let logoHFlag: any = ref(false) ;

// footer
let logoFlag: any = ref(false) ;


const realId = computed(() => store?.state.wallet?.realId);
const idTemp = computed(() => store?.state.wallet?.idTemp);
const id: any = ref(0)
const metaMaskActive = computed(() => store?.state.wallet?.metaMaskActive);


const loggined = computed(() => store?.state.wallet?.loggined);

// Login burying point
const logined = (accounts: string) => {
    proxy.$api.post(`/code/connection/general`, {
        "action":"connectWallet",
        "address": accounts,
        "time":"1",
        "parameter1":"",
        "parameter2":"",
        "parameter3":""
    }).then((res: any) => {
        console.log(res);
    }).catch( (err: any) => {
        console.log(err)
    })
}


const connect: any = async () => {
    const ismessage: any = await NFT.hasMetaMask()

    if( ismessage == 'No install' ){
        store.dispatch('wallet/metaChange',true);
        store.dispatch('wallet/metaChangeAni',true);
        store.dispatch('wallet/checkInstall',false);
        if(code.value && messSing.value == '') {
            register.value = true;
            registerTrans.value = true;
            store.dispatch('wallet/messSing', 'ok');
        };
    }else{
        store.dispatch('wallet/metaChange',true);
        store.dispatch('wallet/metaChangeAni',true);
        store.dispatch('wallet/checkInstall',true);
        const [accounts]: any = await NFT.login().then((res: any) => {
            store.dispatch('wallet/metaChange',false);
            store.dispatch('wallet/metaChangeAni',false);
            store.dispatch('wallet/walletloggined',true);
            return res;
        })
        id.value = accounts;
        let len = id.value.length-1;
        id.value = id.value[0]+id.value[1]+id.value[2]+id.value[3]+id.value[4]+"*****"+id.value[len-3]+id.value[len-2]+id.value[len-1]+id.value[len];
        store.dispatch('wallet/connectWallet',{realId:id.value, idTemp:accounts});// Store asterisk ID and complete id
        store.dispatch('myAssets/dataSumSearch',{flag:0});
        if(readyAssetsF.value <= 0) logined(accounts);
        const Web3 = (window as any).Web3;
        let web3obj = new Web3((Web3 as any).givenProvider);
        await web3obj.eth.net.getId().then((chainId: any) => {
            store.dispatch('user/chageChainId', Number(chainId))
            if(chainId != 56 && chainId != 43113 && chainId != 80001 && chainId != 85) {
                store.dispatch('user/xplanChangeAni', true);
                store.dispatch('user/TipsState', {show: true, info: { hasLoading: false, hasClose: true, title: 'Network Error', content: t('message.common.metamask.switch'), addNetwork: true}});
            }
        })
        if(code.value && messSing.value == '') isRegister();
    }
}

// Invite users to register
const level = ref(0) as any; // User level
const isRegister = (isClick?: boolean) => {
    if(isClick) { // Indicates the clicked button
        register.value = true;
        registerTrans.value = true;
        code.value = router.currentRoute.value.query.code;
        return;
    }
    proxy.$api.get(`/code/level/eqaddr?addr=${idTemp.value}`).then((res: any) => {
        if(res.data === true){
            register.value = true;
            registerTrans.value = true;
        } 
        setTimeout(() => {
            level.value = res.data.level || 0;
            code.value = res.data.inv_level || router.currentRoute.value.query.code;
        }, 1000);
    }).catch( (err: any) => {
        console.log(err)
    })
}

const closeRegister = () => {
    registerTrans.value = false;
    setTimeout(() => {
        register.value = false;
    }, 300);
}


const login = () =>{
    connect();
}

const signout = () => {
    showloggedFlag.value = false;
    hoverLogged.value = false;
    store.dispatch('wallet/connectWallet',{realId: -1});
    store.dispatch('wallet/walletloggined',false);
    store.dispatch('user/showDialog',{show: false, info: {}});
    

    if( proxy.$route.path == '/knapsack' ){
        router.push('/');
    }
}


const toAssets = () => {
    router.push({ path: '/knapsack', query: { code: code.value } });
}



onUnmounted(() => {
    window.removeEventListener('click', handleOtherClick, true);
})


onMounted(() => {
    if( realId.value != -1){
        store.dispatch('wallet/walletloggined',true);
    }
    logoHImport();
    window.addEventListener('click', handleOtherClick, true)
    store.dispatch('user/changeActive', props.type)
    store.dispatch('wallet/metaChange',false)
    store.dispatch('user/showDialog',{show: false, info: {}});

    if( localStorage.getItem('lang') ){
        select.value = localStorage.getItem('lang');        
    }
    code.value = router.currentRoute.value.query.code;
    if(realId.value == -1) login() //Determine whether you have logged in and then log in automatically
    let temp: any;
    Object.keys(chainList._rawValue).forEach((key: any) => {
        if(chainList._rawValue[key].chainId == chainId.value) temp = chainList._rawValue[key]
    })
    if(temp) chainList.value.select = { ...temp, active: 1 };
})
</script>

<style lang="less" scoped>
    @keyframes submitAnimation {
        0%{
            left: -13vw;
        }
        100%{
            left: -1.4vw;
        }
    }
    @keyframes stopSubmitAnimation {
        0%{
            left: -1.4vw;
        }
        100%{
            left: -13vw;
        }
    }
    a {
        text-decoration: none;
        color: #fff;
    }
    a:link {
        text-decoration: none;
    }
    a:visited {
        text-decoration: none;
    }
    a:hover {
        text-decoration: none;
    }
    a:active {
        text-decoration: none;
    }
    a:focus {
        text-decoration: none;
    }
    .router-link-active {
    text-decoration: none;
    }
    .home{
        position: relative;
        width: 100%;
        header{
            z-index: 99;
            position: fixed;
            top: 0;
            width: 100%;
            // height: 5.5vw;
            color: #fff;
            .bgdiv{
                position: absolute;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg , rgba(0,0,0,1) 0%, rgba(0, 0, 0, 1) 20% ,rgba(0, 0, 0, .9) 26%,
                        rgba(23, 10, 71, .96) 50%,rgba(10, 8, 15, .9) 65%, rgba(40, 33, 65,.9) 78%,rgba(0,0,0,1) 100%);
            }
            .tips{
                position: relative;
                margin: .52vw auto 0;
                font-size: 1.04vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                z-index: 999999;
                text-align: center;
                div:first-child{
                    display: inline-block;
                    padding: .4vw 2.44vw;
                    background: #373B49;
                    box-shadow: inset 4px 4px 4px 1px rgba(0, 0, 0, 0.25);
                }
                span{
                    color: #EDFF00;
                }
                .close{
                    position: absolute;
                    right: 3.33vw;
                    top: .4vw;
                    width: 1.4vw;
                    height: 1.4vw;
                    cursor: pointer;
                }
            }
            .content{
                height: 5.5vw;
                margin: 0 2.91vw 0 0;
                display: flex;
                justify-content: space-between;
                position: relative;
                .logo{
                    width: 18.20vw;
                    height: 100%;
                    overflow: hidden;
                    img{
                        width: 110.2%;
                        height: 100.2%;
                        border: none;
                        margin: -.1vw;
                    }
                    img[src=""],img:not([src]){
                        opacity:0;
                    }
                }
                .user{
                    display: flex;
                    position: relative;
                    .switch_chain{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 0.83vw;
                        padding-bottom: .5vw;
                        img{
                            margin-right: .4vw;
                            width: 1.56vw;
                        }
                        .select_chain{
                            // border: 1px solid #DD2ECE;
                            padding: 0.5vw 1vw;
                            font-size: 1.02vw;
                            color: #DD2ECE;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: .83vw;
                            white-space: nowrap;
                            cursor: pointer;
                            font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        }
                        .selected{
                            border: 1px solid transparent;
                            color: #fff;
                            &:hover{
                                opacity: .8;
                            }
                        }

                        // .select_chain:hover{
                        //     box-shadow: inset 0px 1px 20px 0px rgba(221, 46, 206, 0.72);
                        // }
                        .selected:hover{
                            box-shadow: none;
                        }
                        // .selected:hover .blur{
                        //     display: block;
                        // }
                        // .blur{
                            // display: none;
                            // position: absolute;
                            // width: 6vw;
                            // height: 0.46vw;
                            // background: #6D4AFF;
                            // filter: blur(0.52vw);
                        // }
                        .hover_chunk{
                            z-index: 10;
                            position: absolute;
                            top: 3.74vw;
                            left: 0;
                            .chunk_wrap{
                                position: relative;
                                width: 9.27vw;
                                margin-top: 2vw;
                                background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
                                border: .15vw solid;
                                border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 3 3;
                                clip-path: polygon(0 0, 100% 0, 100% 82%, 88% 100%, 0 100%);
                                transition: all 430ms ease-out;
                                .cover{
                                    position: absolute;
                                    top: 0;
                                    width: 100%;
                                    height: 100%;
                                    background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
                                    clip-path: polygon(0 0, 100% 0, 100% 82%, 88% 100%, 0 100%);
                                }
                                .coverborder{
                                    z-index: -1;
                                    position: absolute;
                                    bottom: 0;
                                    right: 0;
                                    content: '';
                                    display: inline-block;
                                    width: 3vw;
                                    height: 3vw;
                                    background-color: #2d2942;
                                }
                                .network{
                                    position: relative;
                                    padding: 0.3vw .8vw .4vw;
                                    .item{
                                        display: flex;
                                        padding: .5vw 0;
                                        cursor: pointer;
                                        align-items: center;
                                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                        img{
                                            width: 1.56vw;
                                        }        
                                    }
                                    .item + .item{
                                        border-top: 2px solid #534968;
                                    }
                                    .item:hover{
                                        color: #DE2DCF;
                                    }
                                }
                            }
                        }
                    }
                    .register{
                        height: 100%;
                        display: flex;
                        margin: auto .5vw;
                        margin-right: 1vw;
                        padding-bottom: .5vw;
                        align-items: center;
                        .register_button{
                            width: 1.66vw;
                            height: 1.66vw;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-email.svg');
                            background-position: center;
                            background-size: 100%;
                            &:hover{
                                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-email-hover.svg');
                                background-size: 100%;
                            }
                        }
                        // .register_button{
                        //     display: flex;
                        //     flex-direction: column;
                        //     justify-content: center;
                        //     align-items: center;
                        //     min-width: 2.54vw;
                        //     height: 2.3vw;
                        //     font-family: AlibabaPuHuiTi_2_55_Regular;
                        //     color: #FFFFFF;
                        //     border: 1px solid #FFFFFF;
                        //     box-sizing: border-box;
                        //     text-align: center;
                        //     cursor: pointer;
                        //     img{
                        //         width: .98vw;
                        //         height: .67vw;
                        //         margin: 1px auto .14vw;
                        //     }
                        //     span{
                        //         display: inline-block;
                        //         word-break: break-all;
                        //         font-size: .52vw;
                        //         line-height: .5vw;
                        //         transform: scale(.8);
                        //     }
                        //     &:hover{
                        //         opacity: .8;
                        //     }
                        // }
                    }
                    .login_in{
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 10.3vw;
                        height: 2.3vw;
                        margin-top: 1.34vw;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-loginBg.svg');
                        background-size: 102% 100%;
                        background-position: -.1vw top;
                        overflow: hidden;
                        cursor: pointer;
                        .txt{
                            z-index: 2;
                            color: #000000;
                            font-size: 1vw;
                            transform: scale(.8);
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            // line-height: 2.3vw;
                            font-weight: bold;
                            white-space: nowrap;
                        }
                        .mask{
                            // z-index: -1;
                            position: absolute;
                            top: 0;
                            left: -13vw;
                            width: 12vw;
                            height: 100%;
                            background-color: #EDFF00;
                            transform: skewX(-38deg);
                        }
                        .submitAnimation{
                            animation: submitAnimation 0.15s linear;
                            animation-fill-mode: forwards;
                        }
                        .stopSubmitAnimation{
                            animation: stopSubmitAnimation 0.15s linear;
                            animation-fill-mode: forwards;
                        }
                    }
                    .logged_in{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                        height: 2.3vw;
                        margin: auto 0;
                        padding-bottom: .5vw;
                        .wallet{
                            width: 1.4vw;
                            height: .98vw;
                        }
                        .idtxt{
                            // width: 8vw;
                            margin: 0 .6vw;
                            height: 1.56vw;
                            font-size: .98vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #C8C4C4;
                            line-height: 1.56vw;
                            text-align: center;
                        }
                        .portrait{
                            width: 2.6vw;
                            height: 2.6vw;
                        }
                        .logged_menu{
                            position: absolute;
                            top: 2.16vw;
                            right: -1.2vw;
                            .wrap{
                                position: relative;
                                width: 9.27vw;
                                height: 5.1vw;
                                margin-top: 2vw;
                                background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
                                border: .15vw solid;
                                border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 3 3;
                                clip-path: polygon(0 0, 100% 0, 100% 75%, 93% 100%, 0 100%);

                                .cover{
                                    position: absolute;
                                    top: 0vw;
                                    width: 100%;
                                    height: 100%;
                                    background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
                                    clip-path: polygon(0 0, 100% 0, 100% 75%, 93% 100%, 0 100%);
                                }
                                .coverborder{
                                    z-index: -1;
                                    position: absolute;
                                    bottom: 0;
                                    right: 0;
                                    content: '';
                                    display: inline-block;
                                    width: 8vw;
                                    height: 8vw;
                                    background-color: #2d2942;
                                }
                                div:nth-child(3){
                                    position: absolute;
                                    left: 50%;
                                    transform: translateX(-50%);
                                    width: 7.43vw;
                                    height: 1.3vw;
                                    padding-right: .8vw;
                                    margin: 1vw auto .4vw;
                                    font-size: .93vw;
                                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                    color: #FFFFFF;
                                    line-height: .4vw;
                                    text-align: right;
                                    border-bottom: .15vw solid #534968;
                                    cursor: pointer;
                                }
                                div:nth-child(4){
                                    position: absolute;
                                    right: 1.7vw;
                                    bottom: .9vw;
                                    width: 7.43vw;
                                    height: 1.3vw;
                                    font-size: .93vw;
                                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                    color: rgb(255, 24, 255);
                                    line-height: 1.3vw;
                                    text-align: right;
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                    .code{
                        position: absolute;
                        right: 0.1vw;
                        bottom: 0.2vw;
                        padding: 0.2vw 0.5vw;
                        font-size: 0.625vw;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #B4A2FF;
                    }
                    .code:hover{
                        box-shadow: inset 0px 0px 10px 0px #4625A2;
                    }
                    .download{
                        position: relative;
                        margin: auto .5vw;
                        padding-bottom: .5vw;
                        background: transparent;
                        div{
                            width: 1.66vw;
                            height: 1.66vw;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-down.svg');
                            background-position: center;
                            background-size: 100%;
                            cursor: pointer;
                            &:hover{
                                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-down-hover.svg');
                                background-size: 100%;
                            }
                        }
                    }
                    .language{
                        position: relative;
                        margin: auto .5vw;
                        padding-bottom: .5vw;
                        .icon{
                            width: 1.66vw;
                            height: 1.66vw;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-language2.svg');
                            background-repeat: no-repeat;
                            background-position: center;
                            background-size: 100%;
                            cursor: pointer;
                            &:hover{
                                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-language-hover.svg');
                                background-size: 100%;
                            }
                        }
                        .langUl{
                            position: absolute;
                            top: 4.1vw;
                            left: -4.22vw;
                            .wrap{
                                position: absolute;
                                width: 8vw;
                                height: 10vw;
                                // height: 6vw;
                                background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
                                border: .15vw solid;
                                border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 3 3;
                                clip-path: polygon(0 0, 100% 0, 100% 82%, 88% 100%, 0 100%);
                                text-align: right;
                                .cover{
                                    position: absolute;
                                    top: 0;
                                    width: 100%;
                                    height: 100%;
                                    background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
                                    clip-path: polygon(0 0, 100% 0, 100% 82%, 88% 100%, 0 100%);
                                }
                                .coverborder{
                                    z-index: -1;
                                    display: inline-block;
                                    position: absolute;
                                    bottom: -.15vw;
                                    right: -.15vw;
                                    content: '';
                                    width: 1.6vw;
                                    height: 1.6vw;
                                    background-color: #2d2942;
                                }
                                ul{
                                    position: absolute;
                                    width: 100%;
                                    padding: .2vw .4vw;
                                    font-size: .93vw;
                                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                    color: #fff;
                                    li{
                                        width: 6.8vw;
                                        padding: .6vw .8vw .6vw 0;
                                        font-size: .93vw;
                                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                        color: #FFFFFF;
                                        cursor: pointer;
                                    }
                                    li + li{
                                        border-top: 2px solid #534968;
                                    }
                                    li:hover{
                                        color: rgb(255, 24, 255);
                                    }
                                    li.active{
                                        color: rgb(255, 24, 255);
                                    }
                                }
                            }
                        
                        }
                    }
                }
                .menu{
                    position: absolute;
                    top: 0;
                    left: 19.5vw;
                    // width: 43.6vw;
                    height: 100%;
                    ul{
                        width: 100%;
                        height: 100%;
                    }
                    ul > li{
                        float: left;
                        width: 7.81vw;
                        height: 100%;
                        padding-top: 1.6vw;
                        padding-right: .8vw;
                        text-align: center;
                        font-size: 1.04vw;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        color: #FFFFFF;
                        line-height: 1.45vw;
                        cursor: pointer;
                        transform: skew(-18deg);
                        &.active{
                            background: linear-gradient(180deg, rgba(0,0,0,0),rgba(255, 24, 255, 0) 65%, rgba(255, 24, 255, 0.62) 100%);
                        }  
                        span{
                            display: inline-block;
                            transform: skew(18deg);
                        }
                        .doc_menu{
                            position: absolute;
                            top: 5.14vw;
                            right: -1.4vw;
                            transform: skew(18deg);
                            .wrap{
                                position: relative;
                                width: 8.3vw;
                                // height: 7.96vw;
                                height: 5.6vw;
                                margin-top: .6vw;
                                background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
                                border: .15vw solid;
                                border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 3 3;
                                clip-path: polygon(0 0, 100% 0, 100% 82%, 88% 100%, 0 100%);
                                .cover{
                                    position: absolute;
                                    top: 0vw;
                                    width: 100%;
                                    height: 100%;
                                    background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
                                    clip-path: polygon(0 0, 100% 0, 100% 82%, 88% 100%, 0 100%);
                                }
                                .coverborder{
                                    z-index: -1;
                                    position: absolute;
                                    bottom: 0;
                                    right: 0;
                                    content: '';
                                    display: inline-block;
                                    width: 8vw;
                                    height: 8vw;
                                    background-color: #2d2942;
                                }
                                a{
                                    display: inline-block;
                                    text-decoration: none;
                                    position: absolute;
                                    right: 0;
                                    width: 7vw;
                                    height: 1.3vw;
                                    padding-right: .8vw;
                                    margin-right: .49vw;
                                    font-size: .93vw;
                                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                    text-align: right;
                                    color: #fff;
                                    white-space: nowrap;
                                    cursor: pointer;
                                }
                                a:nth-child(3){
                                    top: .8vw;
                                }
                                a:nth-child(4){
                                    top: 2.4vw;
                                    padding-top: .5vw;
                                }
                                a:nth-child(5){
                                    top: 4.6vw;
                                    padding-top: .5vw;
                                }
                                a + a{
                                    border-top: 2px solid #534968;
                                }
                                a:hover{
                                    color: rgb(255, 24, 255);
                                }
                            }
                        }
                    }
                    li:nth-child(3){
                        width: 9.8vw;
                    }
                    li:last-child > span{
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .white-list{
                width: 100%;
                height: 6.8vw;
                background-image: url('../../assets/nwhome/whitelist_banner.png');
                background-size: 100% 100%;
                .wrap{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    height: 100%;
                    .left{
                        height: 3.12vw;
                        font-size: 1.87vw;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        line-height: 2.6vw;
                        span{
                            color: #12FD00; 
                            font-size: 3.12vw;
                        }
                    }
                    .right{
                        .name{
                            font-size: 1.56vw;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            color: #12FD00;
                            line-height: 2.08vw;
                        }
                        .desc{
                            width: 26.875vw;
                            font-size: .83vw;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            line-height: 1.25vw;
                            span{
                                color: #12FD00;
                                font-size: 1.14vw;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                            }
                        }
                    }
                    .cImg{
                        width: 2.6vw;
                        height: 5.3vw;
                        margin-right: 2.39vw;
                    }
                    .close{
                        position: absolute;
                        top: .3vw;
                        right: .3vw;
                        width: 2.2vw;
                        height: 2.2vw;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .section{
        z-index: 8;
        position: fixed;
        display: flex;
        justify-content: center;
        top: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0,0,0,.46);
        overflow: hidden;
        .title{
            width: 39.58vw;
            height: 8.85vw;
            margin-top: 17.4vw;
            font-size: 2.08vw;
            font-family: AlibabaPuHuiTi_2_75_SemiBold;
            color: #FFFFFF;
            line-height: 8.85vw;
            letter-spacing: 1.04vw;
            text-align: center;
            background-image: url('../../../assets/nwmining/coming-bg.png');
            background-position: center;
            background-size: auto 100%;
        }
    }
    @media screen {
        @media (max-width: 1000px) {
            .langUl{
                .wrap{
                    // height: 9vw !important;
                    height: 7vw !important;
                }
            }
        }
        @media (max-width: 900px) {
            .langUl{
                .wrap{
                    height: 7.4vw !important;
                    li{
                        margin-left: .3vw !important;
                    }
                }
            }
        }
    }

</style>

function $t(arg0: string) {
  throw new Error('Function not implemented.')
}

function $t(arg0: string) {
  throw new Error('Function not implemented.')
}
