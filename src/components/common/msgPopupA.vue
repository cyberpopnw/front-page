<template>
    <div class="container" v-show="isShowTips">
        <div class="mask" :style="{'height': boxId != undefined ? '27vw' : '16vw'}" :class="isShowTips && (xplanAni ? 'bounceShow' : 'bounceHide') ">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <img class="close" v-if="props.isClose" src="@/assets/nwhome/close.svg" alt=""  @click="close">
            <div class="content">
                <div class="title">{{ props.title }}</div>
                <div class="icon">
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/metaMask.svg" alt="">
                    <div class="subtitle">{{t('message.common.metamask.logoText')}}</div>
                </div>
                <!-- <div class="text">{{ props.content == 'netWork' ? $t('message.common.metamask.switch') : props.content }} <a v-if="props.addNetwork" href="https://chainlist.org/" target="_blank">{{ $t('message.common.metamask.add1') }}</a> </div> -->
                <div class="text" v-if="props.addNetwork">{{ $t('message.common.metamask.switch') }} <br/>
                    <div class="buttons">
                        <span @click="changeChain(97)">{{ $t('message.common.metamask.switchBSC') }}</span>
                        <span @click="changeChain(43113)">{{ $t('message.common.metamask.switchFuji') }}</span> 
                        <span @click="changeChain(80001)">{{ $t('message.common.metamask.switchMumbai') }}</span>    
                        <span @click="changeChain(85)">{{ $t('message.common.metamask.switchGate') }}</span>  
                    </div>
                </div>
                <!-- Open the box -->
                <div v-if="boxId != undefined">
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
                    <div class="unpack" v-if="!isUnpack" @click="unpack">{{ $t('message.details.box_btn_open') }}</div>
                    <div v-if="props.content && isUnpack" class="text">{{ props.content }}</div>
                    <div v-if="props.content && isUnpack" class="loading">
                        <img src="@/assets/nwhomePhone/loading-phone.svg" alt="">
                    </div>
                </div>
                <!-- Open the boxTransfer status -->
                <div v-if="boxId == undefined && props.isLoading">
                    <div v-if="props.content" class="text">{{ props.content }}</div>
                    <div v-if="props.content" class="loading">
                        <img src="@/assets/nwhomePhone/loading-phone.svg" alt="">
                    </div>
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
import router from '@/router';


const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;
const chainId: any = computed(() => store.state.user?.chainId); // vuex state Get chain status from status manager
const { GiftBox, LootBox, Cyborg, MarketV2, cyt } = Web3.contracts;
const readyAssetsF: any = computed(() => store.state.myAssets?.readyAssets ); // Status value of the connection
const xplanAni = computed(() => store?.state.user?.xplanAni);

//unpack
const isUnpack: any = ref(false)
// Open the box
const unpack = async () => {
    // getLast(); // Query the last asset opened immediately in the asset contract
    if(numState.value == 'error') return;
    isUnpack.value = true;
    console.log(props.boxId, valueIn.value);
    const { abi, address } = chainId.value == 43113 ? GiftBox : LootBox;
    let result = await Web3.unpack(abi, address, props.boxId, valueIn.value);
    console.log(result, 'result');
    store.dispatch('user/TipsState', {show: false, info: { }});
    if(result) {
        store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}})
        store.dispatch('myAssets/dataSumSearch', { flag: readyAssetsF.value + 1 }); //After the operation is successful, the page listens and refreshes the data
        store.dispatch('myAssets/boxOpened', true);
        store.dispatch('user/xplanChangeAni', true);
        store.dispatch('myAssets/boxId', props.boxId);
    }else{
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.reject_transaction')}})
    }
}



// input
let valueIn:any = ref(1)
let haveNFT:any = ref(1)
const numState: any = ref('')
const active: any = ref(0)
watch(active, (newVal: any, oldVal) => {
    console.log(newVal, 'newVal');
    if(newVal == 0){
        valueIn.value = 1;
    }else{
        valueIn.value = haveNFT.value;
    }
    numState.value = ''
}, {immediate:true,deep:true});


const inputNumber = (e:any) => {
    console.log(e.target.value);
    // console.log(e.target.value,regExp.test(e.target.value));
    let regExp = /^[0-9]+$/; // Verify that is a positive integer
    valueIn.value = e.target.value
    if ( e.target.value && !(regExp.test(e.target.value)) || Number(valueIn.value) > Number(haveNFT.value)) {
        numState.value = 'error' 
    } else if( !e.target.value ){
        numState.value = 'error'
    }else{
        numState.value = ''
    }
}

const addNft = () => {
    if( valueIn.value < 1 || valueIn.value > haveNFT.value ){
        valueIn.value = 1 ;
        numState.value = '';
    }else if( valueIn.value == haveNFT.value ){
        valueIn.value = haveNFT.value
    }else{
        valueIn.value = parseInt(valueIn.value) + 1;
    }
}
const reduceNft = () => {
    if( valueIn.value <= 1 || valueIn.value > haveNFT.value){
        valueIn.value = 1 ;
        numState.value = '';
    }else{
        valueIn.value = parseInt(valueIn.value) - 1;
    }
}

// props
const props = defineProps({
    content: String, // Copy content
    isLoading: {
        type: Boolean,
        default: false,
    },
    isClose: Boolean,  // Realistic fork button
    title: String,  // title
    isShowTips: Boolean, //Whether to display
    addNetwork: Boolean,
    boxId: {
        type: Number,
        default: undefined,
    },
    haveNFT: String,
})


const close = () => {
    store.dispatch('user/xplanChangeAni', false);
    setTimeout(() => {
        store.dispatch('user/TipsState', {show: false, info: { }})
    }, 300);
}

const changeChain = async (value?: any) => {
    let a: any = await Web3.addChain(value)
    if(a){
        store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}})
    }else{
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.tran_stop')}})
    }
}

onMounted(() => {
    haveNFT.value = props.haveNFT || 1;
    console.log(haveNFT.value, 'haveNFT.value');
    
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
            width: 31.51vw;
            min-width: 380px;
            min-height: 280px;
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
            }
            .content{
                position: absolute;
                left: 0;
                right: 0;
                padding: 0 2.5vw;
                .title{
                    font-size: 1.45vw;
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
                .text{
                    font-size: 0.83vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: normal;
                    line-height: 1vw;
                    .buttons{
                        display: flex;
                        justify-content: flex-end;
                        span{
                            float: right;
                            display: inline-block;
                            padding: .46vw 1.04vw;
                            margin: 1.4vw 0 0 .72vw;
                            font-size: 1.04vw;
                            color: #FFFFFF;
                            line-height: 1.04vw;
                            border: 1px solid #FFFFFF;
                            -webkit-background-clip: text;
                            cursor: pointer;
                        }
                        span:hover{
                            color: rgb(255, 24, 255);
                            border: 1px solid rgb(255, 24, 255);
                            filter: drop-shadow(0 0 1px rgb(255, 24, 255));
                        }
                        span:last-child{
                            margin-right: 0;
                        }
                    }
                    a{
                        color: #fff;
                    }
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
                .unpack{
                    background-image: url(https://d2cimmz3cflrbm.cloudfront.net/nwbox/details2.png);
                    width: 11.94vw;
                    height: 3.125vw;
                    float: right;
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    cursor: pointer;
                    font-size: 1.64vw;
                    display: flex;
                    justify-content: center;
                    cursor: pointer;
                    align-items: center;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                }
                .unpack:hover{
                    opacity: .7;
                }
                .loading{
                    margin-top: 1.3vw;
                    text-align: center;
                    img{
                        width: 4vw;
                        height: 4vw;
                        animation: loadingAni 1s linear infinite;
                    }
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
