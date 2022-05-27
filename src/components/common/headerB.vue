<template>
    <div class="home">
        <header>
            <div class="content" id="header">
                <div class="logo">
                    <a :href="path"><img v-show="!logoHFlag" :src="logoHSrcP" @mouseenter="logoHFlag = true" alt=""></a>
                    <a :href="path"><img v-show="logoHFlag" :src="logoHSrcG" @mouseleave="logoHFlag = false" alt=""></a>
                </div>
                <img class="menu" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/header-menu.svg" @click="showMenu()" alt="">
            </div>
            <div class="menuMask" ref="cursor" :class="isPage && (showMenuAni ? 'menuAnimation' : 'stopMenuAnimation')">
                <div class="close-menu">
                    <div class="select_chain" v-show="realId !== -1" @click="showMsgPop()"><img :src="chainId == 97 || chainId == 43113 || chainId == 85 || chainId == 80001 ? chainList.select.img : chainList.notSupported.img" alt=""><span>{{ chainId == 97 || chainId == 43113 || chainId == 85 || chainId == 80001 ? chainList.select.name : chainList.notSupported.name }}</span></div>
                    <img @click="closeMenuIcon()" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/close-menu.svg" alt="">
                </div>
                <div class="login_in" v-if="!loggined" @click="login()">
                    <div class="txt">{{$t('message.common.wallet')}}</div>
                </div>
                <div class="code"> 
                    <button @click="isRegister(true)">{{ $t('message.home.reg_submit') }}</button> 
                    <span v-if="code">{{ $t('message.home.inviter_Code') }}: {{ code }} &nbsp;&nbsp;&nbsp; {{ $t('message.home.level') }}: {{ level }}</span> 
                </div>
                <div class="logged_in" v-if="loggined">
                    <img class="portrait" src="@/assets/nwhome/portrait.svg" alt="">
                    <div class="idtxt">{{ realId }}</div>
                    <div class="submenu">
                        <div class="myassets" @click="toAssets()">{{$t('message.common.login_myAssets')}}</div>
                        <div class="logout" @click="signout">{{$t('message.common.login_logout')}}</div>
                    </div>
                    <div class="mask"></div>
                </div>
                <ul id="menuUl" class="menuul">
                    <li @click="changeMenu(0, '/')" :class="{'active': active == 0}">{{$t('message.common.menu1')}}</li>
                    <li @click="changeMenu(1, '/mining')" :class="{'active': active == 1}">{{$t('message.common.menu2')}}</li>
                    <li @click="changeMenu(2, '/mystery')" :class="{'active': active == 2}">{{$t('message.common.menu3')}}</li>
                    <li :class="{'active': active == 4}">
                        <div class="doc" @click="docMenu()">{{$t('message.common.menu4')}} <span :class="changeArrow ? 'change' : ''"></span></div>
                        <div class="docmenu" v-show="showDoc">
                            <!-- <a @click="closeMenu()" href="https://d3bhixjyozyk2o.cloudfront.net/CyberpopWhitePaper18thFeb2022.pdf" target="view_window">{{$t('message.common.doc_whitePaper')}}</a> -->
                            <a @click="closeMenu()" href="https://pdf.cyberpop.online/" target="view_window">{{$t('message.common.doc_whitePaper')}}</a>
                            <!-- <a @click="closeMenu()" href="https://d3bhixjyozyk2o.cloudfront.net/CyberpopTechnologyArchitecture2.pdf" target="view_window">Green paper</a> -->
                            <a @click="closeMenu()" href="https://d3bhixjyozyk2o.cloudfront.net/(new)CyberPOPNewworlddeck(en).pdf" target="view_window">{{$t('message.common.doc_deck')}}</a>
                        </div>
                    </li>
                    <li @click="changeMenu(5,'/space')" :class="{'active': active == 5}">{{$t('message.common.menu5')}}</li>
                    <!-- <li @click="changeMenu(5, '/')" :class="{'active': active == 5}">{{$t('message.common.menu6')}}</li> -->
                </ul>
                <div class="language">
                    <div @click="openLang()">{{$t('message.common.language_switch')}} <span :class="langArrow ? 'change' : ''"></span></div>
                    <ul v-show="showLang">
                        <li :class="select == 'us' ? 'active' : ''" @click="selectLang('us')">{{$t('message.common.language1')}}</li>
                        <li :class="select == 'cn' ? 'active' : ''" @click="selectLang('cn')">{{$t('message.common.language2')}}</li>
                        <li :class="select == 'jp' ? 'active' : ''" @click="selectLang('jp')">{{$t('message.common.language3')}}</li>
                        <li :class="select == 'kr' ? 'active' : ''" @click="selectLang('kr')">{{$t('message.common.language4')}}</li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
    <metamask-b v-if="metaMaskActive"></metamask-b>
    <coming-b v-show="showComingFlag"></coming-b>
    <!-- 经销商注册 -->
    <register-b v-if="register" :register="register" :registerTrans="registerTrans" :code="code" :level="level" @closeRegister="closeRegister"></register-b>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, computed, getCurrentInstance, readonly, ref, watch } from 'vue'
import store from '@/store'
import NFT from '@/tools/web3' 
import {  useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { proxy } = getCurrentInstance() as any;
const router = useRouter()
const readyAssetsF: any = computed(() => store.state.user?.readyAssets ); // 连接的状态值
const register = ref(false);
const registerTrans = ref(false);

const props = defineProps({
    path: String, 
    type: Number
})

let showLang:any = ref(false)
let langArrow:any = ref(false)
const openLang = () => {
    showLang.value = !showLang.value
    langArrow.value = !langArrow.value
}

const { locale, t } = useI18n()
let select:any = ref('us');
const selectLang = (index:any) => {
    store.dispatch('user/walletMenuAni', false)
    select.value = index
    locale.value = index
    localStorage.setItem('lang', index)
}

const chainList = ref({
    BSC: {
        name: 'BSC',
        img: 'https://testnet.bscscan.com/images/favicon.ico',
        chainId: 97,
    },
    avax: {
        name: 'Fuji',
        img: 'https://nftrade.com/img/chains/icons/avax.png',
        chainId: 43113,
    },
    mumbai: {
        name: 'Mumbai',
        img: 'https://mumbai.polygonscan.com/images/svg/brands/poly.png?v=1.3',
        chainId: 80001,
    },
    Gate: {
        name: 'Gate',
        img: 'https://www.gatechain.io/docs/assets/img/logo.svg',
        chainId: 85,
    },
    select: {
        name: 'BSC',
        img: 'https://testnet.bscscan.com/images/favicon.ico',
        chainId: 97,
        active: 1,
    },
    notSupported: {
        name: 'Wrong Network',
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwAssets/wrong.png',
        active: 1,
    }
}) as any

const chainId: any = computed(() => store.state.user?.chainId );
// 自动判断当前所在链
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
const showMsgPop = () => {
    store.dispatch('user/xplanChangeAni', true);
    store.dispatch('user/TipsState', {show: true, info: { hasLoading: false, hasClose: true, title: 'Network Error', content: t('message.common.metamask.switch'), addNetwork: true}});
}



// coming soon
let showComingFlag:any = ref(false)
const ctimer:any = ref(null)

const showComing = () => {
    clearTimeout(ctimer.value);
    // Stow menu
    store.dispatch('user/walletMenuAni', false)
    // default animation
    store.dispatch('user/addComingOut', false)
    // show coming view
    showComingFlag.value = true;
    ctimer.value = setTimeout(() => {
        // change animation
        store.dispatch('user/addComingOut', true)
    },3000)
}



// menu
const showMenuAni = computed(() => store?.state.user?.showMenuAni);
let isPage:any = ref(false);
const showMenu = () => {
    isPage.value = true;
    store.dispatch('user/walletMenuAni', true)
}
const closeMenuIcon = () => {
    // isPage.value = false;
    store.dispatch('user/walletMenuAni', false)
}


// docMenu
let showDoc:any = ref(false); 
let changeArrow:any = ref(false)
const docMenu = () => {
    showDoc.value = !showDoc.value
    changeArrow.value = !changeArrow.value
}

// pdf click
const closeMenu = () => {
    store.dispatch('user/walletMenuAni', false)
    showDoc.value = !showDoc.value
    changeArrow.value = !changeArrow.value
}


// connect
let connectMove: any = ref(false);
const mouseEnter = () => {
    connectMove.value = true;
}

const mouseLeave = () => {
    connectMove.value = false;
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
let logoFlag: any = ref(false);


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

let menuFlag:any = ref(1);
const changeMenu = (type: any, route?: any) => {
    store.dispatch('user/walletMenuAni', false)
    menuFlag.value = type;
    store.dispatch('user/changeActive', type)
    if(route) router.push({ path: `${route}`, query: {
        code: code.value
    }})
}




const realId = computed(() => store?.state.user?.realId);
const idTemp = computed(() => store?.state.user?.idTemp);
const id: any = ref(0)
const metaMaskActive = computed(() => store?.state.user?.metaMaskActive);
const messSing = computed(() => store?.state.user?.messSing); // 签名消息
const code: any = ref(''); // 邀请码

const loggined = computed(() => store?.state.user?.loggined); // 登录信息
const connect: any = async () => {
    store.dispatch('user/walletMenuAni', false)
    const ismessage: any = await NFT.hasMetaMask()

    if( ismessage == 'No install' ){
        // store.dispatch('user/metaChange',true);
        // store.dispatch('user/metaChangeAni',true);
        // store.dispatch('user/checkInstall',false);
    }else{
        store.dispatch('user/metaChange',true);
        store.dispatch('user/metaChangeAni',true);
        store.dispatch('user/checkInstall',true);
        const [accounts]: any = await NFT.login().then((res: any) => {
            store.dispatch('user/metaChange',false);
            store.dispatch('user/metaChangeAni',false);
            store.dispatch('user/walletloggined',true);
            return res;
        })
        id.value = accounts;
        let len = id.value.length-1;
        id.value = id.value[0]+id.value[1]+id.value[2]+id.value[3]+id.value[4]+"*****"+id.value[len-3]+id.value[len-2]+id.value[len-1]+id.value[len];
        store.dispatch('user/connectWallet',{realId:id.value, idTemp:accounts});// 存放星号id、完整id
        store.dispatch('user/dataSumSearch',{flag:0});
        if(readyAssetsF.value <= 0) logined(accounts);
        const Web3 = (window as any).Web3
        let web3obj = new Web3((Web3 as any).givenProvider)
        await web3obj.eth.net.getId().then((chainId: any) => {
            store.dispatch('user/chageChainId', Number(chainId))
            if(chainId != 97 && chainId != 43113 && chainId != 85 && chainId != 80001) store.dispatch('user/TipsState', {show: true, info: { hasLoading: false, hasClose: true, title: 'Network Error', content: t('message.common.metamask.switch'), addNetwork: true}});
        })
        if(code.value && messSing.value == '') isRegister();
    }
}


const closeRegister = () => {
    registerTrans.value = false;
    setTimeout(() => {
        register.value = false;
    }, 300);
}


// 用户注册
const level = ref(0); // 用户等级
const isRegister = (isClick?: boolean) => {
    if(isClick) { // 表示是点击的按钮
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




// 登录相关
const login = () =>{
    connect();
}

const logined = (accounts: string) => {
    proxy.$api.post(`/code/connection/general`, {
        "action":"connectWallet",
        "address": accounts,
        "time":"1",
        "parameter1":"",
        "parameter2":"",
        "parameter3":""
    }).then((res: any) => {
        // console.log(res);
    }).catch( (err: any) => {
        // console.log(err) 
    })
}

const signout = () => {
    store.dispatch('user/walletMenuAni', false);
    store.dispatch('user/connectWallet',{realId: -1});
    store.dispatch('user/walletloggined',false);

    store.dispatch('user/showDialog',{show: false, info: {}});
    if( proxy.$route.path == '/knapsack' ){
        router.push('/');
    }
}

const toAssets = () => {
    router.push('/knapsack');
    store.dispatch('user/walletMenuAni', false);
}


const cursor:any = ref(null)
const handleOtherClick = (e:any) => { // click 收起 菜单
    if( cursor.value.contains(e.target) ){
        return
    }else{
        store.dispatch('user/walletMenuAni', false)
    }
}
onUnmounted(() => {
    window.removeEventListener('click', handleOtherClick, true);
})

onMounted(() => {
    window.addEventListener('click', handleOtherClick, true) // click 收起 菜单
    if( realId.value != -1){
        store.dispatch('user/walletloggined',true);
    }
    logoHImport();
    store.dispatch('user/changeActive', props.type)
    store.dispatch('user/metaChange',false)
    store.dispatch('user/showDialog',{show: false, info: {}});
    
    if( localStorage.getItem('lang') ){
        select.value = localStorage.getItem('lang');        
    }
    code.value = router.currentRoute.value.query.code;
    if(realId.value == -1) login() // 判断是否已经登陆过了 然后自动登录
    let temp: any;
    Object.keys(chainList._rawValue).forEach((key: any) => {
        if(chainList._rawValue[key].chainId == chainId.value) temp = chainList._rawValue[key]
    })
    if(temp) chainList.value.select = { ...temp, active: 1 };
})
</script>

<style lang="less" scoped>
    @keyframes menuStart{
        0% {
            right: -1000px;
        }
        100%{
            right: 0;
        }
    }
    @keyframes menuEnd{
        0% {
            right: 0;
        }
        100%{
            right: -1000px;
        }
    }
    html,
    body {
        height: 100%;
        overflow-x: hidden;
    }
    .home{
        position: relative;
        width: 100%;
        header{
            z-index: 99;
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 55px;
            color: #fff;
            background-color: #000000;
            .content{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .logo{
                    width: 151px;
                    height: 41px;
                    overflow: hidden;
                    img{
                        width: 100.2%;
                        height: 100.2%;
                        border: none;
                        margin: -2px;
                    }
                    img[src=""],img:not([src]){
                        opacity:0;
                    }
                }
                .menu{
                    width: 30px;
                    height: 30px;
                    margin-right: 17px;
                }
            }
            .menuMask{
                position: fixed;
                top: 0;
                right: -1000px;
                width: 316px;
                min-height: 100vh;
                max-height: 100vh;
                background-color: rgba(0,0,0,.92);
                overflow-x: hidden;
                overflow-y: auto;

                .close-menu{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    height: 44px;
                    padding: 12px 17px 0;
                    // text-align: right;
                    .select_chain{
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        cursor: pointer;
                        img{
                            width: 24px;
                            height: 24px;
                            margin-right: 6px;
                        }
                    }
                    img{
                        width: 30px;
                        height: 30px;
                        // margin-top: 12px;
                        // margin-right: 17px;
                    }
                }
                .login_in{
                    width: 100%;
                    height: 100px;
                    overflow: hidden;
                    cursor: pointer;
                    text-align: center;
                    .txt{
                        width: 238px;
                        height: 54px;
                        margin: 0 auto;
                        margin-top: 27px;
                        font-size: 20px;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #000000;
                        line-height: 54px;
                        text-align: center;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-loginBg.svg');
                        background-size: 100% 100%;
                        background-position: left top;
                        white-space: nowrap;
                    }
                }
                .code{
                    text-align: center;
                    font-size: 1vw;
                    button{
                        padding: 0 20px;
                        height: 30px;
                        background-color: #452CB6;
                        border-radius: 4px;
                        border: none;
                        outline: none;
                        color: #fff;
                    }
                    span{
                        margin-left: 10px;
                    }
                }
                .logged_in{
                    position: relative;
                    width: 100%;
                    height: 180px;
                    margin-top: 10px;
                    text-align: center;
                    .mask{
                        z-index: -1;
                        position: absolute;
                        top: 28px;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 287px;
                        height: 150px;
                        background-color: #452CB6;
                        border-radius: 4px;
                    }
                    .portrait{
                        width: 50px;
                        height: 50px;
                    }
                    .idtxt{
                        width: 144px;
                        height: 30px;
                        margin: 12px auto 5px;
                        font-size: 19px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #C8C4C4;
                        line-height: 28px;
                    }
                    .submenu{
                        display: flex;
                        justify-content: space-between;
                        width: 286px;
                        height: 60px;
                        margin-left: 30px;
                        padding-right: 30px;
                        .myassets,.logout{
                            font-size: 16px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            font-weight: 400;
                            color: #FFFFFF;
                            line-height: 60px;
                            text-align: left;
                            cursor: pointer;
                        }
                    }
                } 
                .menuul{
                    li{
                        position: relative;
                        width: 286px;
                        // height: 60px;
                        margin-left: 30px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 58px;
                        font-size: 16px;
                        border-bottom: 1px solid rgba(255,255,255,.3);
                        cursor: pointer;
                    }
                    .doc > span{
                        position: absolute;
                        top: 21px;
                        right: 17px;
                        width: 12px;
                        height: 12px;
                        border-left: 2px solid #fff;
                        border-bottom: 2px solid #fff;
                        transform: rotateZ(-45deg);
                    }
                    .doc > span.change{
                        transform: rotateZ(135deg);
                        top: 26px;
                    }
                    .docmenu{
                        width: 100%;
                        margin-top: -10px;
                        margin-bottom: 12px;
                        a{
                            display: block;
                            height: 35px;
                            font-size: 14px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            font-weight: 400;
                            color: #999999;
                            line-height: 35px;
                            text-decoration: none;
                        }
                    }
                    .active{
                        color: #04FF55;
                    }
                }
                .language{
                    position: relative;
                    width: 286px;
                    margin-left: 30px;
                    div{
                        width: 100%;
                        font-size: 16px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #FFFFFF;
                        line-height: 58px;
                        cursor: pointer;
                    }
                    div > span{
                        position: absolute;
                        top: 21px;
                        right: 17px;
                        content: '';
                        width: 12px;
                        height: 12px;
                        border-left: 2px solid #fff;
                        border-bottom: 2px solid #fff;
                        transform: rotateZ(-45deg);
                    }
                    div > span.change{
                        transform: rotateZ(135deg);
                        top: 26px;
                    }
                    ul{
                        li{
                            height: 40px;
                            font-size: 14px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #999999;
                            line-height: 20px;
                            cursor: pointer;
                        }
                        li.active{
                            color: #ffffff;
                        }
                    }
                }
            }
            .menuAnimation{
                animation: menuStart .2s ease-out;
                animation-fill-mode: forwards;
            }
            .stopMenuAnimation{
                animation: menuEnd .2s ease-out;
                animation-fill-mode: forwards;
            }
        }
        .buttom{
            position: absolute;
            bottom: 7px;
            left: 0;
            right: 0;
            width: 18px;
            height: 18px;
            margin: 0 auto;
        }
    }

</style>
