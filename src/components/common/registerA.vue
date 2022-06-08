<template>
    <div class="container">
        <div class="mask" :class="register && (registerTrans ? 'bounceShow' : 'bounceHide')">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <img class="close" src="@/assets/nwhome/close.svg" alt="" @click="closeDialog">
            <form action="#">
                <div class="content">
                    <div class="title">{{$t('message.common.register.REGISTER')}}</div>
                    <p class="level" v-if="props.level > 0">{{$t('message.common.register.level')}}: {{ props.level }}</p>
                    <!-- <div class="item">
                        <label for="nickname">NickName</label>
                        <div class="content1" :class="{'error': nicknameErr}">
                            <input type="text" id="nickname" placeholder="input your nickname" @input="input" @blur="blur(0)" v-model="nickname">
                        </div>
                    </div> -->
                    <div class="item">
                        <label for="Email">{{ $t('message.common.register.Email') }}</label>
                        <div class="content1" :class="{'error': emailErr}">
                            <input type="text" id="Email" :placeholder="$t('message.common.register.placeholder')" @input="emailInput" @blur="blur(1)" v-model="email">
                            <!-- <div class="send" :class="{'error': emailErr}" @click="send" v-if="Sended == 60">Send</div>
                            <div class="send timer" v-else>{{ Sended }}</div> -->
                        </div>
                        <div class="automsg">{{ $t('message.common.register.tips0') }}</div>
                    </div>
                    <!-- <div class="item">
                        <label for="Email">Email Code</label>
                        <div class="content1" :class="{'error': emailCodeErr}">
                            <input type="text" id="Email" placeholder="input your email 6 code" @input="emailCodeInput" @blur="blur(2)" v-model="emailCode">
                        </div>
                    </div> -->
                    <!-- <div class="item">
                        <label for="Email">Referral Code (option)</label>
                        <div class="content1" :class="{'error': ReferralCodeErr}">
                            <input type="text" id="Email" readonly placeholder="Not ReferralCode" @blur="blur(5)" v-model="ReferralCode">
                        </div>
                    </div> -->
                </div>
                <div class="btn">
                    <div class="btn-wrap">
                        <div class="cancel" @click="submit()">{{$t('message.assets.pop.btn_submit')}}</div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance, computed, onUnmounted } from 'vue'
import store from '@/store'
import { useI18n } from 'vue-i18n';
import { log } from 'console';

const { t } = useI18n()
const emit = defineEmits(['closeRegister']);
const { proxy } = getCurrentInstance() as any;
const props = defineProps({
    register: {  //Whether to display
        type: Boolean,
        default: false
    }, 
    registerTrans: {
        type: Boolean,
        default: false
    },
    code: {
        type: String,
        default: ''
    },
    level: {
        type: Number,
        default: ''
    }
})
const idTemp = computed(() => store?.state.wallet?.idTemp);

//input
const nickname = ref('');
const email = ref('');
const emailCode = ref('')
const ReferralCode = ref('Not ReferralCode')

// state
const nicknameErr = ref(false);
const emailErr = ref(false);
const emailCodeErr = ref(false);
const ReferralCodeErr = ref(false);
const Sended = ref(60); 

//REACT_APP_BACKEND_URL=http://13.250.39.184:8612
const getPublicAddress = (email: any,  referralCode?: any,  publicAddress?: string) => {
    proxy.$api.post(`/code/business/invuser?address=${publicAddress || 0}&icode=${referralCode || 0}&email=${email}&nickname=${0}`).then((res: any) => {
        if(res.data.code == 514) {
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.common.register.tips4')}})
            return;
        }
        if(res.data.code == 510) {
            addressInfo()
            return;
        }
        if(res.data.code == 506) {
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.common.register.tips6') }})
            return;
        }
        
        if(res.data.code != 55555) {
            store.dispatch('wallet/messSing', props.code);
            store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}});
            closeDialog()
            return
        }
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.reject_transaction')}})
        // messgSing(publicsAddress)
    }).catch( (err: any) => {
        console.log(err)
    })
}

// Get address binding information
const addressInfo = () => {
    proxy.$api.get(`/code/user/baddress?address=${idTemp.value}`).then((result: any) => {
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: "You're bound: " + result.data }})
    }).catch((err: any) => {
        console.log(err); 
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
            getPublicAddress(email.value, props.code, idTemp.value);
            resolveAcount.value = idTemp.value;
        }else{
             store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.reject_transaction')}})
        }
    } catch (err) {
        throw new Error(
            'You need to sign the message to be able to log in.'
        );
    }
}

//Verify that the mailbox has been registered
const verification = () => {
    return new Promise((resolve, reject) => {
        proxy.$api.get(`/code/user/bemail?email=${email.value}`).then((res: any) => {
            if(res.data === true) { // This mailbox has not been registered
                const ethereum = (window as any).ethereum // Get fox instance
                console.log(ethereum, 'ethereum');
                if(!ethereum){
                    getPublicAddress(email.value, props.code, '')
                    return;
                }
                messgSing(idTemp.value)
                resolve(1)
            }else{
                store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.common.register.tips5') }});
                resolve(0)
            }
        }).catch( (err: any) => {
            const ethereum = (window as any).ethereum // Get fox instance
            if(!ethereum) getPublicAddress(email.value, props.code, '');
        })
    })
}


const submit = async () => {
    console.log(emailInput(), 'emailInput');
    if(emailInput()){
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.common.register.tips4') }})
        return;
    }
    await verification();
    // if(emailInput() && emailCodeInput()){
    //     proxy.$api.get(`/game/verify_email?email=${email.value}&verify_code=${emailCode.value}`).then((res: any) => {
    //         if(res.error == 'ok'){
    //             const ethereum = (window as any).ethereum // Get fox instance
    //             console.log(ethereum, 'ethereum');
    //             if(!ethereum){
    //                 getPublicAddress(email.value, props.code, '')
    //             }
    //             messgSing(idTemp.value)
    //         }else{
    //             store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: 'Code error' }})
    //         }
    //     })
    // }else{
    //     store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: 'Please enter complete' }})
    // }
}

const closeDialog = () => {
    emit('closeRegister')
}   


const blur = (type: any) => {
    if(!type){
        nicknameErr.value = false;
        if(nickname.value.trim().length == 0 || nickname.value.trim().length > 50) nicknameErr.value = true;
    }else if(type == 1){
        // let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/; 
        // emailErr.value = false;
        // if(!reg.test(email.value)) emailErr.value = true;
    }else if(type == 2){
        console.log(type, 'type');
        emailCodeInput()
    }
}

const input = (e: any) => {
    let result = e.target.value
    nicknameErr.value = false;
    if(result.trim().length == 0 || result.trim().length > 50) nicknameErr.value = true;
}

let timer: any = null;
const send = () => {
    if(!emailInput()){
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.common.register.tips4')}})
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
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: 'Code error'}})
        }
    }).catch((err: any) => {
         store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: 'Code error'}})
    })
}

const emailInput = () => {
    let reg = /@/; //正则
    emailErr.value = false;
    if(!reg.test(email.value.trim())) {
        emailErr.value = true;
        return !reg.test(email.value.trim())
    }
    return !reg.test(email.value.trim())
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
    ReferralCode.value = props.code;
})


</script>

<style scoped lang="less">
    @keyframes loadingAni {
        0%{
            transform: rotate(0);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .container{
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        top: 0;
        z-index: 187;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        color: #fff;
        .mask{
            position: absolute;
            top: 3.8vw;
            left: 0;
            right: 0;
            bottom: 0;
            width: 32.51vw;
            min-width: 380px;
            // height: 30vw;
            height: 20vw;
            min-height: 180px;
            margin: auto;
            padding: 2.5vw;
            box-shadow: -1.51vw .83vw .2vw .05vw rgba(0, 0, 0, 0.4);
            background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
            border: .15vw solid;
            border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 3 3;
            clip-path: polygon(0 0, 100% 0, 100% 89%, 90% 100%, 0 100%);
            .cover{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
                clip-path: polygon(0 0, 100% 0, 100% 89%, 90% 100%, 0 100%);
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
            .close{
                position: absolute;
                right: 1vw;
                top: 1vw;
                z-index: 11;
                width: 2.8vw;
                cursor: pointer;
                transition: all .2s ease-in-out;
            }
            .close:hover{
                opacity: .7;
            }
            .content{
                position: absolute;
                left: 0;
                right: 0;
                padding: 0 2.5vw;
                .level{
                    margin: .7vw 0;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                }
                .title{
                    font-size: 1.95vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    font-weight: normal;
                    line-height: 2.08vw;
                }
                .icon{
                    display: flex;
                    margin: .46vw 0;
                    img{
                        width: 2.81vw;
                        height: 3.28vw;
                        margin-right: .46vw;
                    }
                    .subtitle{
                        height: 3.28vw;
                        font-size: 1.35vw;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #E6E8EC;
                        line-height: 3.28vw;
                    }
                }
                .item{
                    margin: .6vw 0;
                    label{
                        display: inline-block;
                        margin: 1vw 0 .5vw;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                    }
                    .content1, .content2{
                        border: 1px solid #fff;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        height: 3vw;
                        box-sizing: border-box;
                        input{
                            width: 100%;
                            height: 100%;
                            outline: none;
                            border: none;
                            background: transparent;
                            padding: 0 1vw;
                            color: #fff;
                        }
                        input::-webkit-input-placeholder{
                            color: #fff;
                            opacity: .5;
                        }
                        .send{
                            border: 1px solid;
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            padding: 0 .6vw;
                            cursor: pointer;
                            line-height: 2.4vw;
                            height: 100%;
                        }
                        .send:hover{
                            filter: drop-shadow(0 0 0.4vw #fff);
                        }
                    }
                    .automsg{
                        margin-top: .5vw;
                        font-size: .73vw;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #D8D8D8;
                        line-height: 1.04vw;
                    }
                    .error{
                        border: 1px solid #FF5CA1 !important;
                        color: #FF5CA1;
                        input{
                            color: #FF5CA1 !important;
                        }
                        input::-webkit-input-placeholder{
                            color: #FF5CA1;
                            opacity: .5;
                        }
                    }
                    .error:hover{
                        filter: none !important;
                        pointer-events: none;
                    }
                    .ok{
                        color: #8478FF;
                    }
                    .Nok{
                        color: #FF5CA1;
                    }
                    .success{
                        border: 1px solid #8478FF;
                        color: #8478FF;
                    }
                    .reject{
                        border: 1px solid #FF5CA1;
                        color: #FF5CA1;
                    }
                    .tips{
                        height: 1.14vw;
                        margin: 1.25vw 0;
                        font-size: .83vw;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #FFFFFF;
                        line-height: .98vw;
                    }
                    .number{
                        position: relative;
                        width: 8.47vw;
                        height: 2.81vw;
                        padding: .4vw .6vw;
                        margin-bottom: 1vw;
                        border: 1px solid #8478FF;
                        input{
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            padding: 0 1.2vw 0 .4vw;
                            font-size: .83vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: rgba(255, 255, 255, 0.35);
                            line-height: .98vw;
                            border: none;
                            outline: none;
                            background: transparent;
                        }
                        input::-webkit-outer-spin-button,
                        input::-webkit-inner-spin-button {
                            -webkit-appearance: none !important;
                            margin: 0;
                        }
                        div{
                            position: absolute;
                            right: .7vw;
                            width: 0;
                            height: 0;
                            border-left: .3vw solid transparent;
                            border-right: .3vw solid transparent;
                        }
                        .add{
                            top: .6vw;
                            border-bottom: .6vw solid #8478FF;
                            cursor: pointer;
                        }
                        .reduce{
                            bottom: .6vw;
                            border-top: .6vw solid #8478FF;
                            cursor: pointer;
                        }
                    }
                    .number.error{
                        border: 1px solid #FF5CA1 !important;
                        input{
                            color: #FF5CA1 !important;
                        }
                        .add{
                            border-bottom: .6vw solid #FF5CA1 !important;
                        }
                        .reduce{
                            border-top: .6vw solid #FF5CA1 !important;
                        }
                    }
                }
                .text{
                    font-size: 0.83vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: normal;
                    line-height: 1vw;
                    span{
                        float: right;
                        display: inline-block;
                        padding: 1.4px 3px;
                        margin: 1.4vw .8vw 0 0;
                        background: #30304D;
                        cursor: pointer;
                    }
                    span:hover{
                        color: rgb(255, 24, 255);
                    }
                    a{
                        color: #fff;
                    }
                }
            }
            .btn{
                position: absolute;
                bottom: 3vw;
                right: 3vw;
                .cancel{    
                    width: 10.54vw;
                    height: 2.91vw;
                    font-size: 1.54vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 2.91vw;
                    text-align: center;
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/purchase.png');
                    background-size: 100% 100%;
                    cursor: pointer;
                    transition: all .2s ease-in-out;
                }
                .cancel:hover{
                    opacity: .7;
                }
                .not-allowed{
                    cursor: not-allowed !important;
                    opacity: .4;
                }
                .not-allowed:hover{
                    opacity: .4;
                }
            }
        }
    }

    @media screen {
        @media (max-width: 900px) {
            .mask{
                padding: 4vw !important;
                .icon{
                    margin: 1vw 0 !important;
                }
            }
        }
    }
</style>