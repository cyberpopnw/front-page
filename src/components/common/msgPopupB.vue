<template>
    <div class="container" v-show="isShowTips">
        <div class="mask" :class="isShowTips && (xplanAni ? 'bounceShow' : 'bounceHide') ">
            <img class="close" v-if="props.isClose" src="@/assets/nwhome/close.svg" alt=""  @click="close">
            <div class="content">
                <div class="title">{{ props.title }}</div>
                <!-- <div class="text">{{ props.content == 'netWork' ? $t('message.common.metamask.switch') : props.content }} <a v-if="props.addNetwork" href="https://chainlist.org/" target="_blank">{{ $t('message.common.metamask.add1') }}</a> </div> -->
                <div class="text" v-if="props.addNetwork">{{ $t('message.common.metamask.switch') }} <br/>
                    <div class="buttons">
                        <span @click="changeChain(97)">{{ $t('message.common.metamask.switchBSC') }}</span>
                        <span @click="changeChain(43113)">{{ $t('message.common.metamask.switchFuji') }}</span> 
                        <span @click="changeChain(80001)">{{ $t('message.common.metamask.switchMumbai') }}</span>    
                        <span @click="changeChain(85)">{{ $t('message.common.metamask.switchGate') }}</span>  
                    </div>
                </div>
                <!-- 開啟盒子 -->
                <div v-if="boxId != undefined">
                    <div class="tips" v-show="numState == ''">{{$t('message.assets.pop.tips')}}</div>
                    <div class="tips" v-show="numState == 'error'">{{$t('message.assets.pop.tips_err')}}</div>
                    <div class="number">
                        <div class="add" @click="addNft()" :class="canAdd == 'disable' ? 'disableNum':''">+</div>
                        <input id="inputNum" type="text" :value="valueIn" @input="inputNumber($event)">
                        <div class="reduce" @click="reduceNft()" :class="canReduce == 'disable' ? 'disableNum':''">—</div>
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
                <!-- 轉帳狀態 -->
                <div v-if="boxId == undefined && isLoading">
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
const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;
const numState = ref('');
const canAdd = ref('');
let canReduce:any = ref('disable')
let canTransfer:any = ref('disable')
const xplanAni = computed(() => store?.state.user?.xplanAni);
const chainId: any = computed(() => store.state.user?.chainId); // vuex state狀態管理器中獲取chain狀態
const { GiftBox, LootBox } = Web3.contracts;
const readyAssetsF: any = computed(() => store.state.user?.readyAssets ); // 连接的状态值

//
const isUnpack: any = ref(false)
// 開盒子
const unpack = async () => {
    // getLast(); //    
    if(numState.value == 'error') return;
    isUnpack.value = true;
    console.log(props.boxId, valueIn.value);
    const { abi, address } = chainId.value == 43113 ? GiftBox : LootBox;
    let result = await Web3.unpack(abi, address, props.boxId, valueIn.value);
    console.log(result, 'result');
    store.dispatch('user/TipsState', {show: false, info: { }});
    if(result) {
        store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}})
        store.dispatch('user/dataSumSearch', { flag: readyAssetsF.value + 1 }); // 操作成功 页面监听到，再刷新数据
        store.dispatch('user/boxOpened', true);
        store.dispatch('user/xplanChangeAni', true);
        store.dispatch('user/boxId', props.boxId);
    }else{
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.reject_transaction')}})
    }
}

const props: any = defineProps({
    content: String, // 文案内容
    isLoading: {
        type: Boolean,
        default: false,
    },
    isClose: Boolean,  // 现实叉叉按钮
    title: String,  // 标题
    isShowTips: Boolean, //是否显示
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

const valueIn: any = ref(1)

// input state
const active: any = ref(0)
watch(active, (newVal: any, oldVal) => {
    console.log(newVal, 'newVal');
    if(newVal == 0){
        valueIn.value = 1;
        canReduce.value = 'disable';
        canAdd.value = '';
    }else{
        valueIn.value = props.haveNFT;
        canReduce.value = '';
        canAdd.value = 'disable';
    }
    numState.value = ''
}, {immediate:true,deep:true});


let regExp = /^[0-9]+$/; // 驗證是否為正整數
let inputState:any = ref('')
const inputNumber = (e:any) => {
    valueIn.value = e.target.value
    if (e.target.value && !(regExp.test(e.target.value)) || Number(valueIn.value) > Number(props.haveNFT)) {
        numState.value = 'error'
        canReduce.value = 'disable'
        canAdd.value = 'disable'
        canTransfer.value = 'disable'
        // e.target.value = valueIn.value
    } else if( !e.target.value ){
        numState.value = 'error'
        canReduce.value = 'disable'
        canAdd.value = 'disable'
        canTransfer.value = 'disable'
    }else{
        numState.value = ''
        canReduce.value = ''
        canAdd.value = ''
        valueIn.value = e.target.value
        if( inputState.value == 'success' ){
            canTransfer.value = ''
        }
    }
}


const addNft = () => {
    valueIn.value = parseInt(valueIn.value) + 1;
    if( valueIn.value >= props.haveNFT ) {
        valueIn.value = props.haveNFT;
        canAdd.value = 'disable'
    };
    if( valueIn.value == 1 ) {
        canAdd.value = 'disable'
        canReduce.value = 'disable'
    }else{
        canReduce.value = ''
    }
}


const reduceNft = () => {
    valueIn.value = parseInt(valueIn.value) - 1;
    if( valueIn.value <= 1 ) valueIn.value = 1;
    if( valueIn.value == 1 ) {
        canReduce.value = 'disable'
        canAdd.value = ''
    }else{
        canReduce.value = ''
        canAdd.value = ''
    }
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
                .title{
                    font-size: 28px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    font-weight: normal;
                    color: #FFFFFF;
                    line-height: 39px;
                }
                .number{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    height: 40px;
                    .add.disableNum,.reduce.disableNum,.transfer.disableNum{
                        opacity: 0.5;
                        pointer-events: none;
                    }
                    .add,.reduce{
                        width: 96px;
                        height: 40px;
                        font-size: 24px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #FFFFFF;
                        line-height: 40px;
                        text-align: center;
                        background-color: #8478FF;
                        cursor: pointer;
                    }
                    input{
                        width: 95px;
                        height: 34px;
                        font-size: 24px;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        color: #FFFFFF;
                        line-height: 34px;
                        text-align: center;
                        background: transparent;
                        border: none;
                        outline: none;
                    }
                    input::-webkit-outer-spin-button,
                    input::-webkit-inner-spin-button {
                        -webkit-appearance: none !important;
                        margin: 0;
                    }
                }
                .btns{
                    display: flex;
                    margin: 5vw 0;
                    div{
                        margin-right: 2vw;
                        padding: 2vw 3vw;
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
                    width: 100%;
                    padding: 3vw 0;                    
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    font-size: 7.64vw;
                    display: flex;
                    justify-content: center;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                }
                .text{
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: normal;
                    line-height: 20px;
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
                    .buttons{
                        display: flex;
                        justify-content: space-between;
                    }
                    a{
                        color: #fff;
                    }
                }
                .loading{
                    margin-top: 1.3vw;
                    text-align: center;
                    img{
                        width: 60px;
                        height: 60px;
                        animation: loadingAni 1s linear infinite;
                    }
                }
            }
        }
    }
</style>
