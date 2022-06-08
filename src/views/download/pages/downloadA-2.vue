<template>
    <header-a path="download" :type="0" v-if="isClick"></header-a>
    <div class="warp">
        <div class="banner">
            <div class="nav"><span class="green">{{ $t('message.download.nav_txt1') }}</span> > {{ $t('message.download.nav_txt2') }}</div>
            <div class="banner_txt">
                <div class="welmsg">{{ $t('message.download.welmsg_txt1') }} <span>{{ $t('message.download.welmsg_txt2') }}</span></div>
                <div class="title">{{ $t('message.download.title') }}</div>
            </div>
        </div>
        <div class="register">
            <div class="step1"><span class="green">{{ $t('message.download.step1_name') }} :</span> {{ $t('message.download.welmsg_txt2') }}</div>
            <div class="step1_content">
                <div class="img"><img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/step1_img.png" alt=""></div>
                <form action="#" onsubmit="">
                    <label for="Email">{{ $t('message.common.register.Email') }}</label>
                    <div class="button">
                        <input type="text" v-model="emailAddress" @input="emailInput()" :placeholder="$t('message.download.inputEmail')"/>
                        <div class="tip" v-if="emailErr">{{ $t('message.download.tips3') }}</div>
                    </div>
                    <!-- <div class="button" style="margin-top: 1.87vw;margin-bottom: 0.4vw;">
                        <input type="text" v-model="emailCode" placeholder="Email verification code"/>
                        <span class="send" @click="send">{{ Sended == 60 ? 'Send code' : Sended}}</span>
                    </div> -->
                    <p class="tips">{{ $t('message.download.tips1') }}</p>
                    <button type="button" @click="register">{{ $t('message.download.REGISTER') }}</button>
                </form>
            </div>
        </div>
        <div class="down_button">
            <div class="arrow"><img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/down_arrow.svg" alt=""></div>
            <div class="step2_wrap">
                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alen.png" alt="">
                <div class="step2">
                    <span class="green">{{ $t('message.download.step2_name') }} :</span> <br/>{{ $t('message.download.download_txt') }} <br/> 
                    <div>{{ $t('message.download.version') }}</div>
                </div>
            </div>
            <div class="buttons">
                <div class="down_cyberpop" @click="downloadGame(0)">
                    <img class="media" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/android.png" alt="">
                    <b>{{ $t('message.download.Android') }}</b>
                </div>
                <div class="down_cyberpop not-error" @click="downloadGame(2)">
                    <img class="media" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/ios.png" alt="">
                    <b>{{ $t('message.download.ios') }}</b>
                </div>
                <div class="down_cyberpop" @click="downloadGame(1)">
                    <img class="media" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/windows.png" alt="">
                    <b>{{ $t('message.download.windows') }}</b>
                </div>
            </div>
        </div>
    </div>
    <footer-a></footer-a>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;
const idTemp = computed(() => store?.state.wallet?.idTemp);
const router = useRouter()
const isClick = ref(false as any);

// download
const isDonload: any = ref(false);
const downloadGame = (type: number) => {
    if(type == 2) return;
    if(!isDonload.value){
        store.dispatch('user/showDialog',{ show: true, info: { state: 0, txt: t('message.download.tips3')} });
        return;
    }
    window.location.href = type == 0 ? 'https://d3bhixjyozyk2o.cloudfront.net/Cyberpop.apk' : 'https://d3bhixjyozyk2o.cloudfront.net/Cyberpop_1.0.1_2022_05_13.rar';
    proxy.$api.get(`/code/user/download?address=${idTemp.value}`).then((res: any) => {
        console.log(res);
    }).catch( (err: any) => {
        console.log(err)
    })
}

const code = ref(0) as any
const getPublicAddress = (email: any,  referralCode?: any,  publicAddress?: string) => {
    proxy.$api.post(`/code/business/invuser?address=${publicAddress || 0}&icode=${referralCode || 0}&email=${email}&nickname=${0}`).then((res: any) => {
        if(res.data.code == 514) {
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.download.tips4')}})
            return;
        }
        if(res.data.code == 510) {
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.download.tips5') }})
            return;
        }
        if(res.data.code == 506) {
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.download.tips6') }})
            return;
        }
        
        if(res.data.code != 55555) {
            isDonload.value = true;
            store.dispatch('wallet/messSing', code.value);
            store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}});
            return
        }
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: 'Try another address'}})
        // messgSing(publicAddress)
    }).catch( (err: any) => {
        console.log(err)
    })
}

// is email
const emailCodeVerification = () => {
    return new Promise((resolve, reject) => {
        if(emailInput() && emailCodeInput()){
            proxy.$api.get(`/game/verify_email?email=${emailAddress.value}&verify_code=${emailCode.value}`).then((res: any) => {
                if(res.error == 'ok'){
                    const ethereum = (window as any).ethereum // Get metamask instance
                    console.log(ethereum, 'ethereum');
                    if(!ethereum){
                        getPublicAddress(emailAddress.value, emailAddress.value, '')
                        return;
                    }
                    messgSing(idTemp.value)
                }else{
                    store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: 'Code error' }})
                }
            })
        }else{
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: 'Please enter complete' }})
        }
    })
}
// const inputNumber = (e:any) => {
//     console.log(e.target.value);
//     // console.log(e.target.value,regExp.test(e.target.value));
//     let regExp = /^[0-9]+$/; // Verify that is a positive integer
//     emailAddress.value = e.target.value
//     if ( e.target.value && !(regExp.test(e.target.value))) {
//         emailState.value = 'error' 
//     } else if( !e.target.value ){
//         emailState.value = 'error'
//     }else{
//         emailState.value = ''
//     }
// }



// login
const messgSing = async (publicAddress: any) => {
    try {
        const Web3 = (window as any).Web3;
        const web3 = new Web3((window as any).ethereum)
        const result = await web3.eth.personal.sign(
            `cyber-business`,
            publicAddress,
            '' // MetaMask will ignore the password argument here
        );
        if(result) {
            getPublicAddress(emailAddress.value, code.value, idTemp.value);
        }else{
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.reject_transaction')}})
        }
    } catch (err) {
        store.dispatch('user/showDialog', {show: true, info: {state: 0, txt: 'sign error' }})
        throw new Error(
            'You need to sign the message to be able to log in.'
        );
    }
}


//Verify that the mailbox has been registered
const verification = () => {
    proxy.$api.get(`/code/user/bemail?email=${emailAddress.value}`).then(async (res: any) => {
        if(res.data === true) { // This mailbox has not been registered
            const ethereum = (window as any).ethereum // Get fox instance
            console.log(ethereum, 'ethereum');
            if(!ethereum){
                getPublicAddress(emailAddress.value, code.value, '')
                return;
            }
            let [ account ] = await Web3.getAccounts()
            messgSing(account)
        }else{
            isDonload.value = true;
            store.dispatch('wallet/messSing', code.value);
            store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.download.tips4') }});
        }
    }).catch( (err: any) => {
        console.log(err)
    })
}


const register = async () => {
    console.log(emailInput(), 'emailInput');
    if(emailInput()){
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.download.tips3') }})
        return;
    }
    await verification();
    // await emailCodeVerification();
}


// email
const emailAddress = ref('');
const emailCode = ref('')
const ReferralCode = ref('Not ReferralCode')

const emailErr = ref(false);
const emailCodeErr = ref(false);
const ReferralCodeErr = ref(false);
const Sended = ref(60);
const emailInput = () => {
    let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/; //regular
    emailErr.value = false;
    console.log(reg.test(emailAddress.value));

    if(!reg.test(emailAddress.value)) {
        emailErr.value = true;
        return !reg.test(emailAddress.value)
    }
    return !reg.test(emailAddress.value)
}


let codetimer: any = null;
const send = () => {
    if( emailInput() ){
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: 'Email error' }})
        return;
    }
    codetimer = setInterval(() => {
        --Sended.value
        if(Sended.value == 0) {
            clearInterval(codetimer);
            Sended.value = 60
        }
    }, 1000)
    proxy.$api.get(`/game/generate_code?email=${emailAddress.value}`).then((res: any) => {
        if(res.error == 'ok'){
            store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}});
        }else{
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: 'Please wait 1 minute'}})
        }
    }).catch( (err: any) => {
        console.log(err)
    })
}


const emailCodeInput = () => {
    var regu = /^\d{6}$/; 
    console.log(regu.test(emailCode.value));
    if(emailCode.value.length > 6) emailCode.value = emailCode.value.slice(0, 6)
    if(regu.test(emailCode.value)){
        emailCodeErr.value = false;
        return true;
    }
    emailCodeErr.value = true;
    return false;
}

onMounted(() => {
    code.value = router.currentRoute.value.query.code;
    isClick.value = router.currentRoute.value.query.isClick;
})

</script>

<style lang="less">
    @keyframes arrow{
        0% {
            transform: translateY(0);
        }
        25% {
            transform: translateY(10px);
        }
        50% {
            transform: translateY(0px);
        }
        75% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0px);
        }
    }
    .green{
        color: #A6F779;
    }
    .warp{
        width: 100%;
        background: #080808;
        overflow: hidden;
        .banner{
            position: relative;
            width: 100%;
            height: 18.85vw;
            margin-top: 5.5vw;
            color: #fff;
            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/down_background_pc3-2.png');
            background-size: auto 100%;
            background-position: center top;
            overflow: hidden;
            .nav{
                position: absolute;
                left: 3vw;
                top: 1.09vw;
                font-size: 1.09vw;
                font-family: AlibabaPuHuiTi_2_75_SemiBold;
                line-height: 1.51vw;
            }
            .banner_txt{
                margin: 5.46vw 0 0 19.63vw;
                .welmsg{
                    margin-bottom: .6vw;
                    font-size: 2.08vw;
                    font-family: AlibabaPuHuiTi_2_65_Medium;
                    line-height: 3.125vw;
                    filter: drop-shadow(0.1vw 0 0 #D236A5) drop-shadow(-0.15vw 0 0.05rem #72F0D9);
                    span{
                        color: #EBFF11;
                    }
                }
                .title{
                    font-size: 4.16vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    line-height: 5.2vw;
                    filter: drop-shadow(0.155vw 0 0 #D236A5) drop-shadow(-0.15vw 0 0.05rem #72F0D9);
                }
            }
        }
        .register{
            padding: 0 19.58vw;
            color: #ffffff;
            .step1{
                margin: 1.56vw 0 .78vw;
                font-size: 1.87vw;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 2.6vw;
            }
            .step1_content{
                display: flex;
                width: 100%;
                height: 22.13vw;
                background: linear-gradient(145deg, rgba(0, 0, 0, 0.32) 0%, rgba(31, 38, 110, 0.21) 45%, rgba(108, 250, 166, 0.18) 59%, rgba(32, 38, 110, 0.3) 72%, rgba(0, 0, 0, 0.35) 100%);
                border: 2px solid;
                border-image: linear-gradient(270deg, rgba(108, 248, 167, 1), rgba(93, 16, 244, 0.5), rgba(108, 248, 167, 1)) 2 2;
                backdrop-filter: blur(22px);
                .img{
                    width: 28.43vw;
                    height: 17vw;
                    margin: 2.6vw 0 0 -3.33vw;
                    // overflow: hidden;
                    position: relative;
                    img{
                        width: 28.43vw;
                        height: 17vw;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                        transition: all .2s ease-in-out;
                    }
                    img:hover{
                        width: 106%;
                        height: 106%;
                    }
                }
                form{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin: 4.53vw 0 4.16vw 5.625vw;
                    label{
                        margin-left: .2vw;
                        font-size: 1.14vw;
                        font-family: AlibabaPuHuiTi_2_85_Bold;
                        line-height: 1.56vw;
                    }
                    .button{
                        position: relative;
                        width: 24.68vw;
                        height: 3.22vw;
                        margin-top: 1.14vw;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/withborder-2.svg');
                        background-size: 100% 100%;
                        input{
                            width: 24.68vw;
                            height: 3.22vw;
                            padding: .78vw 1.2vw;
                            font-size: 1.14vw;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #FFFFFF;
                            line-height: 3.22vw;
                            background: none;
                            border: none;
                            outline: none;
                        }
                        span{
                            position: absolute;
                            right: 0;
                            font-size: 1.14vw;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            color: #A6F779;
                            top: 50%;
                            transform: translateY(-50%);
                            margin-right: 1.40vw;
                        }
                        .tip{
                            position: absolute;
                            left: 0;
                            bottom: -1.2vw;
                            font-size: .83vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            line-height: 1.14vw;
                            color: #fb3487;
                        }
                    }
                    .tips{
                        margin: 1.4vw 0 1.56vw .4vw;
                        font-size: .83vw;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        line-height: 1.14vw;
                    }
                    button{
                        width: 15.2vw;
                        height: 3.64vw;
                        margin: 0 auto;
                        display: block;
                        font-size: 1.25vw;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        font-weight: bold;
                        color: #000000;
                        line-height: 3.64vw;
                        border: none;
                        background: transparent;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/greenButton-2.svg');
                        background-size: 100% 100%;
                        cursor: pointer;
                        transition: all .1s ease-in;
                    }
                    button:hover{
                        opacity: .9;
                    }
                }
            }
        }
        .down_button{
            width: 64.68vw;
            height: 36vw;
            margin: -9.47vw 0 .6vw 20.1vw;
            color: #ffffff;
            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/step2_bg.png');
            background-size: 100% 100%;
            transition: all .2s ease-in-out;
            cursor: pointer;
            display: inline-block;
            z-index: 0;
            .arrow{
                display: inline-block;
                margin: 10.78vw auto 0;
                width: 100%;
                height: 2.7vw;
                text-align: center;
                img{
                    width: 2.7vw;
                    -webkit-animation: arrow 2s linear infinite;
                }
            }
            .step2_wrap{
                display: flex;
                position: relative;
                z-index: 2;
                img{
                    // width: 8.125vw;
                    // height: 8.125vw;
                    width: 11vw;
                    height: 11vw;
                    margin-left: -2.6vw;
                }
                .step2{
                    padding: 1.8vw 0;
                    margin-left: -.4vw;
                    font-size: 1.87vw;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    line-height: 2.2vw;
                    div{
                        font-size: 1.04vw;
                        margin-top: -.2vw;
                    }
                }
            }
            .buttons{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 60.8vw;
                height: 10.83vw;
                margin: -2.8vw 0 0 -.2vw;
                padding: 0 1.17vw 0 3.64vw;
                background: linear-gradient(113deg, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0.32) 0%, rgba(31, 38, 110, 0.21) 33%, rgba(108, 250, 166, 0.18) 47%, rgba(32, 38, 110, 0.3) 70%, rgba(0, 0, 0, 0.35) 100%);
                border: 2px solid;
                border-image: linear-gradient(270deg, rgba(108, 248, 167, 1), rgba(93, 16, 244, 0.5), rgba(108, 248, 167, 1)) 2 2;
                backdrop-filter: blur(16px);
                z-index: 1;
                .down_cyberpop{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 15.10vw;
                    height: 4.06vw;
                    font-size: 1.14vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    font-weight: bold;
                    color: #FFFFFF;
                    line-height: 1.56vw;
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/down_button2-2.png');
                    background-size: 100% 100%;
                    transition: all .1s ease-in;
                    position: relative;
                    .media{
                        margin-right: 0.52vw;
                        width: 1.4vw;
                        height: 1.66vw;
                    }
                }
                .not-error{
                    cursor:not-allowed !important;
                }
                .down_cyberpop:hover{
                    opacity: .7;
                }
            }
        }
    }
    
</style>