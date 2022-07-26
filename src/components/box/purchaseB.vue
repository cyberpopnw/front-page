<template>
    <div class="container flex_center">
        <div class="mask" :class="isShowTips && (xplanAni ? 'bounceShow' : 'bounceHide') ">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <img class="close" src="@/assets/nwhome/close.svg" alt=""  @click="closeDialog">
            <div class="content">
                <div class="title">{{ props.title }}</div>
                <!-- <div class="icon">
                    <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwhome/metaMask.svg" alt="">
                    <div class="subtitle">{{t('message.common.metamask.logoText')}}</div>
                </div> -->
                <div class="item">
                    <p>step1</p>
                    <div>
                        <div class="tips" v-show="numState == ''">{{$t('message.assets.pop.tips')}}</div>
                        <div class="tips" v-show="numState == 'error'">{{$t('message.assets.pop.tips_err')}}</div>
                        <div class="number" :class="numState == 'error' ? 'error':''">
                            <input id="inputNum" type="text" @input="inputNumber($event)" :value="valueIn">
                            <div class="add" @click="addNft()"></div>
                            <div class="reduce" @click="reduceNft()"></div>
                        </div>
                        <div class="btns">
                            <div :class="{'active': active == 0}" @click="active = 0">Mix</div>
                            <div :class="{'active': active == 1}" @click="active = 1">Max</div>
                        </div>
                        <div class="purchase" :class="{'not-allowed': numState == 'error'}"  @click="purchase">{{ $t('message.details.box_btn_pur') }}</div>
                    </div>
                </div>
                <div class="item">
                    <p>step2</p>
                    <div class="content1 flex_between_center" :class="{'success': state >= 4 && state != 5, 'reject': state == 5}">
                        <span>{{ content1 }}</span>
                        <div class="loading" v-if="state == 3">
                            <img src="@/assets/nwhomePhone/loading-phone.svg" alt="">
                        </div>
                    </div>
                    <p v-if="state >= 4 && state != 5" class="ok">success</p>
                    <p v-if="state == 5" class="Nok">reject</p>
                </div>
                <div class="item">
                    <p>step3</p>
                    <div class="content1 flex_between_center" :class="{'success': state >= 7 && state != 8, 'reject': state == 8}">
                        <span>{{ content2 }}</span>
                        <div class="loading" v-if="state == 6">
                            <img src="@/assets/nwhomePhone/loading-phone.svg" alt="">
                        </div>
                    </div>
                    <p v-if="state >= 7 && state != 8" class="ok">success</p>
                    <p v-if="state == 8" class="Nok">reject</p>
                </div>
            </div>
            <div class="btn">
                <div class="btn-wrap">
                    <div class="cancel" @click="closeDialog()">{{$t('message.assets.pop.btn_cancel')}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, getCurrentInstance, watch } from 'vue'
import store from '@/store/index'
import { useI18n } from 'vue-i18n';
import Web3 from '@/tools/web3'
const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;
const { MarketV2, cyt } = Web3.contracts;
const xplanAni = computed(() => store?.state.user?.xplanAni);
const props = defineProps({
    content1: String, // Copy content
    content2: String, // Copy content
    title: String,  // title
    isShowTips: Boolean, //Whether to display
    boxId: Number,
    state: {
        type: Number,
        default: 0
    },
    haveNFT: {
        type: Number,
        default: 1,
    },
})

const readyAssetsF: any = computed(() => store.state.myAssets?.readyAssets ); // Status value of the connection


// input
let valueIn:any = ref(1)
const numState: any = ref('')
const active: any = ref(0)
watch(active, (newVal: any, oldVal) => {
    if(newVal == 0){
        valueIn.value = 1;
    }else{
        valueIn.value = props.haveNFT;
    }
    console.log(props.haveNFT);
    
    numState.value = ''
}, {immediate:true,deep:true});


const inputNumber = (e:any) => {
    console.log(e.target.value);
    // console.log(e.target.value,regExp.test(e.target.value));
    let regExp = /^[0-9]+$/; // Verify that is a positive integer
    valueIn.value = e.target.value
    if ( e.target.value && !(regExp.test(e.target.value)) || Number(valueIn.value) > Number(props.haveNFT)) {
        numState.value = 'error' 
    } else if( !e.target.value ){
        numState.value = 'error'
    }else{
        numState.value = ''
    }
}

const addNft = () => {
    if( valueIn.value < 1 || valueIn.value > props.haveNFT ){
        valueIn.value = 1 ;
        numState.value = '';
    }else if( valueIn.value == props.haveNFT ){
        valueIn.value = props.haveNFT
    }else{
        valueIn.value = parseInt(valueIn.value) + 1;
    }
}
const reduceNft = () => {
    if( valueIn.value <= 1 || valueIn.value > props.haveNFT ){
        valueIn.value = 1 ;
        numState.value = '';
    }else{
        valueIn.value = parseInt(valueIn.value) - 1;
    }
}

const closeDialog = () => {
    store.dispatch('user/xplanChangeAni', false);
    setTimeout(() => {
        store.dispatch('myBox/purchaseState', { show: false, info: { } });
    }, 300);
}

// Purchase buried point
const logined = (accounts: any) => {
    proxy.$api.post(`/code/connection/general`, {
        "action": "buyBox",
        "address": accounts,
        "time":"1",
        "parameter1": "",
        "parameter2": "",
        "parameter3": ""
    }).then((res: any) => {
        console.log(res);
    }).catch( (err: any) => {
        console.log(err)
    })
}

const purchase =  async () => {
    if( numState.value == 'error') return;

    // Check whether it is authorized or under authorization
    store.dispatch('myBox/purchaseState', { show: true, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 3, haveNFT: props.haveNFT, boxId: props.boxId }});

    let allowance_res: any = await Web3.allowance(cyt.abi, cyt.address, MarketV2.address); //Use your own cyt to authorize the number of authorized market contracts
    console.log(allowance_res, 'allowance_res');
    
    if(allowance_res < 30 * valueIn.value){
        let approve_res = await Web3.approve(cyt.abi, cyt.address, MarketV2.address, 30 * valueIn.value + 1);
        if(!approve_res) { // privilege grant failed
            store.dispatch('myBox/purchaseState', { show: true, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 5, haveNFT: props.haveNFT, boxId: props.boxId }});
            return;
        }
    }

    // Normal process
    store.dispatch('myBox/purchaseState', { show: true, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 6, haveNFT: props.haveNFT, boxId: props.boxId }});
    console.log(props.boxId, 'props.boxId');
    
    let reuslt = await Web3.buyLootBox(MarketV2.abi, MarketV2.address, props.boxId, 30, valueIn.value);
    if(reuslt){ //Purchase success
        store.dispatch('myBox/purchaseState', { show: false, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 7, haveNFT: props.haveNFT, boxId: props.boxId }});
        store.dispatch('myAssets/dataSumSearch', { flag: readyAssetsF.value + 1 }); // After the operation is successful, the page listens and refreshes the data
        logined(store.state.wallet?.idTemp)
    }else{ // Purchase rejection
        store.dispatch('myBox/purchaseState', { show: true, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 8, haveNFT: props.haveNFT, boxId: props.boxId }});
    }
}


onMounted(() => {
    console.log(props);
    
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
        left: 0;
        top: 0;
        z-index: 187;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        color: #fff;
        .tips{
            margin: 5vw 0;
        }
        .mask{
            position: absolute;
            width: 320px;
            min-height: 200px;
            z-index: 9;
            bottom: 0;
            width: 100%;
            height: 397px;
            padding: 24px;
            background: linear-gradient(221deg, rgba(132, 120, 255, .8) 0%, rgba(12, 9, 17, .8) 100%),
                        linear-gradient(81deg, rgba(45, 222, 211, .6) 0%, rgba(12, 9, 17, 1) 100%);
            box-shadow: inset 0px 4px 0px 1px #5A5685;
            .close{
                right: 1vw;
                z-index: 11;
                width: 40px;
                margin-left: 300px;
            }
            .content{
                position: absolute;
                left: 0;
                right: 0;
                padding: 0 2.5vw;
                .title{
                    font-size: 20px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    font-weight: normal;
                    line-height: 2.08vw;
                    margin-top: 10px;
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
                    margin: 1.5vw 0;
                    p{
                        margin: 0.5vw 0;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                    }
                    .content1, .content2{
                        padding: 0.4vw;
                        border: 1px solid #fff;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        height: 3vw;
                        box-sizing: border-box;
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
                    .btns{
                        display: flex;
                        margin-bottom: 1vw;
                        div{
                            margin-right: 1vw;
                            padding: 0.7vw 1.5vw;
                            border: 1px solid rgba(83, 77, 126, 1);
                            border-radius: 5px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            cursor: pointer;
                        }
                        .active{
                            color: rgb(22, 19, 19);
                            background-color: rgb(145, 138, 202);

                        }
                    }
                    .purchase{
                        background-image: url(https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/details2.png);
                        width: 11.94vw;
                        height: 3.125vw;
                        background-size: 100% 100%;
                        background-repeat: no-repeat;
                        cursor: pointer;
                        font-size: 1.64vw;
                        display: flex;
                        justify-content: center;
                        cursor: pointer;
                        align-items: center;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        transition: all .2s ease-in-out;
                    }
                    .purchase:hover{
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
                .loading{
                    img{
                        width: 2vw;
                        height: 2vw;
                        animation: loadingAni 1s linear infinite;
                    }
                }
            }
            .btn{
                position: absolute;
                bottom: 1vw;
                right: 3vw;
                .cancel{    
                    width: 8.54vw;
                    height: 2.91vw;
                    font-size: 1.04vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 2.91vw;
                    text-align: center;
                    background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwhome/meta-cancle.svg');
                    background-size: 100% 100%;
                    cursor: pointer;
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
