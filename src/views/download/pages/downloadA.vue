<template>
    <header-a path="download" :type="0" v-if="isClick"></header-a>
    <div class="warp">
        <div class="register">
            <form action="#" onsubmit="">
                <div class="button" style="margin-top: 4.68vw;margin-bottom: 2.36vw;">
                    <input type="text" v-model="emailAddress" :placeholder="$t('message.download.inputEmail')"/>
                </div>
                <!-- <div class="button" style="margin-top: 1.87vw;margin-bottom: 0.4vw;">
                    <input type="text" v-model="emailCode" placeholder="Email verification code"/>
                    <span class="send" @click="send">{{ Sended == 60 ? 'Send code' : Sended}}</span>
                </div> -->
                <p class="tips">{{ $t('message.download.tips1') }}</p>
                <button type="button" @click="register">{{ $t('message.download.REGISTER') }}</button>
            </form>
        </div>
        <div class="down_button">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alen.png" alt="">
            <div class="tips">DOWNLOAD CYBERPOP</div>
            <div class="buttons">
                <div class="down_cyberpop" @click="downloadGame(0)">
                    <img class="media" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/android.png" alt="">
                    <b>{{ $t('message.download.Android') }}</b>
                </div>
                <div class="down_cyberpop" @click="downloadGame(1)">
                    <img class="media" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/windows.png" alt="">
                    <b>{{ $t('message.download.windows') }}</b>
                    <div class="version">{{ $t('message.download.version') }}</div>
                </div>
                <div class="down_cyberpop not-error" @click="downloadGame(2)">
                    <img class="media" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/ios.png" alt="">
                    <b>{{ $t('message.download.ios') }}</b>
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

// 验证邮箱
const emailCodeVerification = () => {
    return new Promise((resolve, reject) => {
        if(emailInput() && emailCodeInput()){
            proxy.$api.get(`/game/verify_email?email=${emailAddress.value}&verify_code=${emailCode.value}`).then((res: any) => {
                if(res.error == 'ok'){
                    const ethereum = (window as any).ethereum // 获取小狐狸实例
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


// login
const messgSing = async (publicAddress: any) => {
    try {
        const Web3 = (window as any).Web3;
        const web3 = new Web3((window as any).ethereum) // 创建一个新的web3 对象
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


onUnmounted(() => {

})

onMounted(() => {
    code.value = router.currentRoute.value.query.code;
    isClick.value = router.currentRoute.value.query.isClick;
})

</script>

<style lang="less">
    .warp{
        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/down_background_pc3.png');
        background-size: auto 100%;
        background-position: center top;
        background-color: rgba(0, 0, 0, 0.9);
        height: 100vh;
        .register{
            width: 40.62vw;
            height: 21.35vw;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(4px);
            position: absolute;
            left: 0;
            right: 0;
            top: 11.51vw;
            margin: auto;
            z-index: 1;
            .button{
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/withborder.png');
                width: 25.02vw;
                height: 3.75vw;
                background-size: 100% 100%;
                font-size: 1.14vw;
                font-family: AlibabaPuHuiTi_2_85_Bold;
                color: #FFFFFF;
                line-height: 1.3vw;
                margin: 0 auto;
                position: relative;
                input{
                    font-size: 1.14vw;
                    line-height: 1.3vw;
                    border: none;
                    outline: none;
                    width: 100%;
                    height: 100%;
                    background: none;
                    padding: 1.25vw 1.66vw;
                    color: #fff;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
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
            }
            .tips{
                font-size: 0.83vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: 1.3vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                margin-top: 0.53vw;
                margin-bottom: 1.14vw;
                text-align: center;
            }
            button{
                border: none;
                background: transparent;
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/greenButton.png');
                background-size: 100% 100%;
                width: 17.5vw;
                height: 4.37vw;
                margin: 0 auto;
                display: block;
                font-size: 1.25vw;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #000000;
                line-height: 4.37vw;
                cursor: pointer;
                transition: all .1s ease-in;
            }
            button:hover{
                opacity: .9;
            }
        }
        .down_button{
            position: absolute;
            width: 50.62vw;
            left: 0;
            right: 0;
            bottom: 10.12vh;
            margin: 0 auto;
            text-align: center;
            transition: all .2s ease-in-out;
            cursor: pointer;
            z-index: 0;
            img{
                width: 7.7vw;
            }
            .tips{
                font-size: 1.3vw;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                text-align: center;
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
                top: 5vw;
            }
            .buttons{
                display: flex;
                justify-content: space-between;
                .down_cyberpop{
                    width: 15.10vw;
                    height: 4.06vw;
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/down_button2.png');
                    background-size: 100% 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.14vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 1.56vw;
                    transition: all .1s ease-in;
                    position: relative;
                    .media{
                        margin-right: 0.52vw;
                        width: 1.4vw;
                        height: 1.66vw;
                    }
                    .version{
                        position: absolute;
                        top: -2vw;
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