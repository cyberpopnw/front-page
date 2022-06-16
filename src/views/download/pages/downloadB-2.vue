<template>
    <header-b path="/download" :type="0" v-if="isClick"></header-b>
    <div class="download bounceShow">
        <div class="banner">
            <div class="welmsg">{{ $t('message.download.welmsg_txt1') }} <span>{{ $t('message.download.welmsg_txt2') }}</span></div>
            <div class="title">{{ $t('message.download.title') }}</div>
        </div>
        <div class="download-mask">
            <div class="step1"><span class="green">{{ $t('message.download.step1_name') }} :</span> {{ $t('message.download.welmsg_txt2') }}</div>
            <form action="#" onsubmit="">
                <label for="Email">{{ $t('message.common.register.Email') }}</label>
                <div class="button">
                    <input type="text" v-model="email" @input="emailInput()" :placeholder="$t('message.download.inputEmail')"/>
                    <div class="tip" v-if="emailErr">{{ $t('message.download.tips3') }}</div>
                </div>
                <!-- <div class="button" style="margin-top: 28px;margin-bottom: 9px;">
                    <input type="text" v-model="emailCode" placeholder="Email verification code" @input="emailCodeInput"/>
                    <span @click="send"> {{ Sended == 60 ? 'Send code' : Sended }}</span>
                </div> -->
                <p class="tips">{{ $t('message.download.tips1') }}</p>
                <button type="button" @click="submit">{{ $t('message.download.REGISTER') }}</button>
            </form>
        </div>
        <div class="down_button">
            <div class="arrow"><img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/down_arrow.svg" alt=""></div>
            <div class="step2">
                <span class="green">{{ $t('message.download.step2_name') }} :</span> <br/>{{ $t('message.download.download_txt') }} <br/> 
                <div>{{ $t('message.download.version') }}</div>
            </div>
            <div class="person"><img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alen.png" alt=""></div>
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
    <footer-b></footer-b>
</template>

<script setup lang='ts'> 
    import { onMounted, onUnmounted, ref, reactive, getCurrentInstance, computed } from 'vue'
    import store from '@/store'
    import { useI18n } from 'vue-i18n';
    import {  useRouter } from 'vue-router'
    import Web3 from '@/tools/web3' 
    const { proxy } = getCurrentInstance() as any;
    const router = useRouter()
    const { t } = useI18n()
    const thisAcounts = ref(0);
    const isClick = ref(false as any);

    // download
    const isDonload: any = ref(false);
    const downloadGame = (type: number) => {
        if(type == 2) {
            store.dispatch('user/showDialog',{ show: true, info: { state: 0, txt: t('message.download.tips2') } });
            return;
        };
        if(!isDonload.value){
            store.dispatch('user/showDialog',{ show: true, info: { state: 0, txt: t('message.download.tips3') } });
            return;
        }
        window.location.href = type == 0 ? 'https://d3bhixjyozyk2o.cloudfront.net/Cyberpop_1.0.3_2022_06_10_19_23_03_V25_Dev.false_Symbols.USE_NFT_ASSETS.apk' : 'https://d3bhixjyozyk2o.cloudfront.net/Cyberpop_1.0.3_2022_06_10_19_28_19_V25_Dev.false_Symbols.USE_NFT_ASSETS.exe';
        proxy.$api.get(`/code/user/download?address=${thisAcounts.value}`).then((res: any) => {
            console.log(res);
        }).catch( (err: any) => {
            console.log(err)
        })
    }

    const code = ref(0) as any
    const getPublicAddress = (email: any,  referralCode?: any,  publicAddress?: string) => {
        proxy.$api.post(`/code/business/invuser?address=${publicAddress || 0}&icode=${referralCode || 0}&email=${email}&nickname=${0}`).then((res: any) => {
            if(res.data.code == 514) {
                isDonload.value = true;
                store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.download.tips4')}})
                return;
            }
            if(res.data.code == 510) {
                addressInfo()
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
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.reject_transaction')}})
            // messgSing(publicAddress)
        }).catch( (err: any) => {
            console.log(err)
        })
    }

    // Get address binding information
    const addressInfo = () => {
        proxy.$api.get(`/code/user/baddress?address=${thisAcounts.value}`).then((result: any) => {
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: "You're bound: " + result.data }})
        }).catch((err: any) => {
            console.log(err); 
        })
    }

    // login
    const messgSing = async (publicAddress: any) => {
        try {
            const Web3 = (window as any).Web3;
            const web3 = new Web3((window as any).ethereum) // Create a new Web3 object
            const result = await web3.eth.personal.sign(
                `cyber-business`,
                publicAddress,
                '' // MetaMask will ignore the password argument here
            );
            if(result) {
                getPublicAddress(email.value, code.value, publicAddress);
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
        proxy.$api.get(`/code/user/bemail?email=${email.value}`).then(async (res: any) => {

            let [ account ] = await Web3.getAccounts()
            thisAcounts.value = account;

            if(res.data === true) { // This mailbox has not been registered
                const ethereum = (window as any).ethereum // Get metamask instance
                console.log(ethereum, 'ethereum');
                if(!ethereum){
                    getPublicAddress(email.value, code.value, '')
                    return;
                }
                let [ account ] = await Web3.getAccounts()
                messgSing(account)
            }else{
                isDonload.value = true;
                store.dispatch('wallet/messSing', code.value);
                store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}});
            }
        }).catch( (err: any) => {
            const ethereum = (window as any).ethereum // Get fox instance
            if(!ethereum) getPublicAddress(email.value, code.value, '');
        })
    }


    const submit = () => {
        if(emailInput() ){
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.download.tips3') }})
            return;
        }
        verification()
    }

    // email
    const email = ref('');
    const emailCode = ref('')
    const ReferralCode = ref('Not ReferralCode')

    const emailErr = ref(false);
    const emailCodeErr = ref(false);
    const ReferralCodeErr = ref(false);
    const Sended = ref(60);
    const emailInput = () => {
        let reg = /@/; //正则
        emailErr.value = false;
        if(!reg.test(email.value)) {
            emailErr.value = true;
            return !reg.test(email.value)
        }
        return !reg.test(email.value)
    }


    let timer: any = null;
    const send = () => {
        if(!emailInput() ){
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: 'Email error' }})
            return;
        }
        timer = setInterval(() => {
            --Sended.value
            if(Sended.value == 0) {
                clearInterval(timer);
                Sended.value = 60
            }
        }, 1000)
        proxy.$api.get(`/game/generate_code?email=${email.value}`).then((res: any) => {
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
        clearInterval(timer);
    })

    onMounted(() => {
        code.value = router.currentRoute.value.query.code;
        isClick.value = router.currentRoute.value.query.isClick;
    })
</script>

<style lang="less" scoped>
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
    .download{
        z-index: 6;
        width: 100%;
        background: #080808;
        overflow: hidden;
        .banner{
            width: 100%;
            height: 260px;
            margin-top: 55px;
            color: #fff;
            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/down_background_pc3-b-2.png');
            background-size: auto 100%;
            background-position: center top;
            text-align: center;
            overflow: hidden;
            .welmsg{
                margin: 30px auto 14px;
                font-size: 20px;
                font-family: AlibabaPuHuiTi_2_65_Medium;
                line-height: 18px;
                filter: drop-shadow(0.1vw 0 0 #D236A5) drop-shadow(-0.15vw 0 0.05rem #72F0D9);
                span{
                    color: #EBFF11;
                }
            }
            .title{
                width: 90%;
                text-align: center;
                margin: 0 auto;
                font-size: 36px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                line-height: 30px;
                filter: drop-shadow(0.155vw 0 0 #D236A5) drop-shadow(-0.15vw 0 0.05rem #72F0D9);
            }
        }
        .download-mask{
            padding: 0 12px;
            color: #FFFFFF;
            .step1{
                margin: 20px auto;
                font-size: 20px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 28px;
                text-align: center;
            }
            form{
                height: 257px;
                margin: 0 auto;
                padding: 30px 26px 24px;
                background: linear-gradient(145deg, rgba(0, 0, 0, 0.32) 0%, rgba(31, 38, 110, 0.21) 45%, rgba(108, 250, 166, 0.18) 59%, rgba(32, 38, 110, 0.3) 72%, rgba(0, 0, 0, 0.35) 100%);
                border: 1px solid;
                border-image: linear-gradient(270deg, rgba(108, 248, 167, 1), rgba(93, 16, 244, 0.5), rgba(108, 248, 167, 1)) 1 1;
                backdrop-filter: blur(22px);
                label{
                    font-size: 18px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    line-height: 25px;
                }
                .button{
                    position: relative;
                    width: 100%;
                    height: 44px;
                    display: inline-block;
                    margin: 17px 0;
                    font-size: 13px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    line-height: 18px;
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/withborder-2.svg');
                    background-size: 100% 100%;
                    input{
                        line-height: 18px;
                        border: none;
                        outline: none;
                        width: 100%;
                        height: 100%;
                        background: none;
                        padding: 0 16px;
                        color: #fff;
                        font-size: 13px;
                        font-family: AlibabaPuHuiTi_2_85_Bold;
                    }
                    span{
                        position: absolute;
                        right: 0;
                        font-size: 14px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #A6F779;
                        line-height: 20px;
                        top: 50%;
                        transform: translateY(-50%);
                        margin-right: 16px;
                    }
                    .tip{
                        position: absolute;
                        left: 0;
                        bottom: -14px;
                        font-size: 12px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        line-height: 17px;
                        color: #fb3487;
                    }
                }
                .tips{
                    margin-bottom: 29px;
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    line-height: 17px;
                }
                button{
                    border: none;
                    background: transparent;
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/greenButton-2.svg');
                    background-size: 100% 100%;
                    width: 212px;
                    height: 54px;
                    margin: 0 auto;
                    display: block;
                    font-size: 18px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    font-weight: bold;
                    color: #000000;
                    line-height: 25px;
                }
            }
        }
        .down_button{
            padding: 130px 17px 0;
            margin-bottom: 30px;
            margin-top: -130px;
            color: #FFFFFF;
            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/step2_bg-b.png');
            background-repeat: no-repeat;
            background-size: 112% auto;
            transition: all .2s ease-in-out;
            // display: inline-block;
            z-index: 0;
            .arrow{
                width: 32px;
                height: 32px;
                margin: 15px auto 13px;
                img{
                    width: 100%;
                    -webkit-animation: arrow 2s linear infinite;
                }
            }
            .step2{
                font-size: 20px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 28px;    
                text-align: center;        
                div{
                    font-size: 16px;
                }
            }
            .person{
                position: relative;
                width: 100%;
                height: 160px;
                margin-top: -20px;
                text-align: center;
                z-index: 1;
                img{
                    width: 160px;
                    height: 160px;
                }
            }
            .buttons{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                height: 316px;
                margin: 0 auto;
                margin-top: -80px;
                padding-top: 79px;
                background: linear-gradient(53deg, rgba(0, 0, 0, 0.35) 0%, rgba(32, 38, 110, 0.3) 30%, rgba(108, 250, 166, 0.18) 52%, rgba(31, 38, 110, 0.21) 61%, rgba(0, 0, 0, 0.32) 100%, rgba(0, 0, 0, 0.32) 100%);
                border: 1px solid;
                border-image: linear-gradient(270deg, rgba(108, 248, 167, 1), rgba(93, 16, 244, 0.5), rgba(108, 248, 167, 1)) 1 1;
                backdrop-filter: blur(16px);
                z-index: 0;
                .down_cyberpop{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 200px;
                    height: 42px;
                    margin-bottom: 40px;
                    font-size: 18px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    font-weight: bold;
                    line-height: 25px;
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/down_button2-2.png');
                    background-size: 100% 100%;
                    transition: all .1s ease-in;
                    position: relative;
                    .media{
                        margin-right: 10px;
                        width: 22px;
                        height: 22px;
                    }
                }
                .not-error{
                    cursor:not-allowed !important;
                }
            }
        }
    }
</style>