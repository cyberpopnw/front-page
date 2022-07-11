<template>
    <header-b path="/" :type="0" />
    <div class="download bounceShow">
        <div class="download-mask">
            <div class="wrap">
                <form action="#" onsubmit="">
                    <div class="logo">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/logo.png" alt="">
                    </div>
                    <div class="button">
                        <input type="text" v-model="email"  @input="emailInput()" :placeholder="$t('message.download.inputEmail')"/>
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
        </div>
        <div class="down_button">
            <img class="person" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alen.png" alt="">
            <div class="tips">DOWNLOAD CYBERPOP</div>
            <div class="buttons flex_between">
                <div class="down_cyberpop flex_center" @click="downloadGame(0)">
                    <img class="media" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/android.png" alt="">
                </div>
                <div class="down_cyberpop flex_center" @click="downloadGame(1)">
                    <img class="media" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/ios.png" alt="">
                    <div class="version">{{ $t('message.download.version') }}</div>
                </div>
                <div class="down_cyberpop flex_center" @click="downloadGame(2)">
                    <img class="media" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/windows.png" alt="">
                </div>
            </div>
        </div>
    </div>
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

    const idTemp = computed(() => store?.state.wallet?.idTemp);
    const isClick = ref(false as any);

    // download
    const isDonload: any = ref(false);
    const downloadGame = (type: number) => {
        if(type == 1) {
            store.dispatch('user/showDialog',{ show: true, info: { state: 0, txt: t('message.download.tips2') } });
            return;
        };
        if(!isDonload.value){
            store.dispatch('user/showDialog',{ show: true, info: { state: 0, txt: t('message.download.tips3') } });
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
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.reject_transaction')}})
            // messgSing(publicAddress)
        }).catch( (err: any) => {
            console.log(err)
        })
    }


    // login
    const resolveAcount = ref('' as any)
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
                getPublicAddress(email.value, code.value, idTemp.value);
                resolveAcount.value = idTemp.value;
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
            console.log(err)
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
        // let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/; //正则
        let reg = /@/;
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
    .download{
        z-index: 6;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/down_backgournd2.png');
        background-size: auto 100%;
        background-position: center top;
        background-color: rgba(0, 0, 0, 0.9);
        .download-mask{
            position: absolute;
            top: 0;
            right: 0;
            bottom: 150px;
            left: 0;
            margin: auto;
            width: 332px;
            height: 291px;
            background: #000000;
            .wrap{
                .logo{
                    width: 310px;
                    height: 82px;
                    margin: 0 auto;
                    margin-top: 10px;
                    margin-bottom: 19px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .button{
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/withborder.png');
                    width: 302px;
                    height: 44px;
                    background-size: 100% 100%;
                    font-size: 13px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #FFFFFF;
                    line-height: 18px;
                    margin: 0 auto;
                    position: relative;
                    .tip{
                        position: absolute;
                        color: #FF5CA1;
                        bottom: -25px;
                        text-align: center;
                        margin: auto;
                        left: 0;
                        right: 0;
                    }
                    input{
                        line-height: 18px;
                        border: none;
                        outline: none;
                        width: 100%;
                        height: 100%;
                        background: none;
                        padding: 0 16px;
                        color: #fff;
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
                }
                .tips{
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 17px;
                    margin-top: 30px;
                    margin-bottom: 17px;
                    text-align: center;
                }
                button{
                    border: none;
                    background: transparent;
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/greenButton.png');
                    background-size: 100% 100%;
                    width: 210px;
                    height: 52px;
                    margin: 0 auto;
                    display: block;
                    font-size: 18px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #000000;
                }
            }
        }
        .down_button{
            position: absolute;
            width: 314px;
            bottom: 100px;
            z-index: -1;
            left: 0;
            right: 0;
            margin: 0 auto;
            .person{
                width: 114px;
                height: 115px;
                position: absolute;
                left: 0;
                right: 0;
                top: -80px;
                margin: auto;
            }
            .tips{
                position: absolute;
                left: 0;
                right: 0;
                top: -8px;
                margin: 0 auto;
                text-align: center;
                font-size: 16px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                line-height: 22px;
            }
            .buttons{
                margin-top: 40px;
                .down_cyberpop{
                    width: 58px;
                    height: 58px;
                    border: 1px solid #FFFFFF;
                    border-radius: 50%;
                    background-size: 100% 100%;
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    position: relative;
                    .media{
                        width: 22px;
                        height: 26px;
                    }
                    .version{
                        position: absolute;
                        top: -30px;
                        width: 100vw;
                        text-align: center;
                    }
                }
                .not-error{
                    cursor:not-allowed !important;
                }
            }
        }
    }
</style>
