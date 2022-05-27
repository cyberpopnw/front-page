<template>
    <div class="container">
        <div class="mask" :class="isShowTips && (transition ? 'bounceShow' : 'bounceHide')">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <img class="close" src="@/assets/nwhome/close.svg" alt=""  @click="closeDialog">
            <div class="content">
                <div class="title">{{ 'Load to Game' }}</div>
                <!-- <div class="icon">
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/metaMask.svg" alt="">
                    <div class="subtitle">{{t('message.common.metamask.logoText')}}</div>
                </div> -->
                <div class="item">
                    <p>step1</p>
                    <div class="content1" :class="{'success': state >= 1 && state != 2, 'reject': state == 2}">
                        <span>{{ 'Authorization in progress....' }}</span>
                        <div class="loading" v-if="state == 0">
                            <img src="@/assets/nwhomePhone/loading-phone.svg" alt="">
                        </div>
                    </div>
                    <p v-if="state >= 1 && state != 2" class="ok">success</p>
                    <p v-if="state == 2" class="Nok">reject</p>
                </div>
                <div class="item">
                    <p>step2</p>
                    <div class="content1" :class="{'success': state >= 4 && state != 5, 'reject': state == 5}">
                        <span>{{ 'Loading....' }}</span>
                        <div class="loading" v-if="state == 3">
                            <img src="@/assets/nwhomePhone/loading-phone.svg" alt="">
                        </div>
                    </div>
                    <p v-if="state >= 4 && state != 5" class="ok">success</p>
                    <p v-if="state == 5" class="Nok">reject</p>
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
const emit = defineEmits(['initLoad']);

const { proxy } = getCurrentInstance() as any;
const { MarketV2, cyt, Cyborg, gamePool } = Web3.contracts;
const state = ref(0) // 状态值
const props = defineProps({
    isShowTips: {  //是否显示
        type: Boolean,
        default: false
    }, 
    transition: {
        type: Boolean,
        default: false
    },
    tokenId: {
        type: Number,
        default: 0
    },
    loadAddress: {
        type: String,
        default: '222'
    },
    loadAbi: {
        type: Array,
        default: []
    },
    number: {
        type: Number,
        default: 0
    }
})

const readyAssetsF: any = computed(() => store.state.user?.readyAssets ); // 连接的状态值


// input
let valueIn:any = ref(1)
const numState: any = ref('')
const active: any = ref(0)
watch(active, (newVal: any, oldVal) => {

}, {immediate:true,deep:true});


const closeDialog = () => {
    emit('initLoad')
}

const initLoadGame = async () => {
    console.log( props.number, ' props.number');
    
    let result = props.number ? await Web3.isApprovedForAll(props.loadAbi, props.loadAddress, gamePool.address) : await Web3.getApproved(props.loadAbi, props.loadAddress, props.tokenId);
    console.log(result);
    if(!Number(result)) { //没有授权
        let res = props.number ? await Web3.setApprovalForAll(props.loadAbi, props.loadAddress) : Web3.approvePool(props.loadAbi, props.loadAddress, props.tokenId);
        if(!res) { // 如果放弃授权
            state.value = 2;
            return;
        }
    }

    state.value = 3;

    let load_result = props.number ? await Web3.loadingErc1155(gamePool.abi, gamePool.address, props.tokenId, 1) : await Web3.loadingNft(gamePool.abi, gamePool.address, props.tokenId)
    
    if(!load_result) {
        state.value = 5;
    }else{
        state.value = 4;
        store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}});
        store.dispatch('user/dataSumSearch', { flag: readyAssetsF.value + 1 }); // 操作成功 页面监听到，再刷新数据
        emit('initLoad');
    }
}

onMounted(() => {
    console.log(props);
    initLoadGame()
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
            width: 37.51vw;
            min-width: 380px;
            height: 25vw;
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
            }
            .content{
                position: absolute;
                left: 0;
                right: 0;
                padding: 0 2.5vw;
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
                    margin: 1.5vw 0;
                    p{
                        margin: 0.5vw 0;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                    }
                    .content1, .content2{
                        padding: 0.4vw;
                        border: 1px solid #fff;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
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
                        background-image: url(https://d2cimmz3cflrbm.cloudfront.net/nwbox/details2.png);
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
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/meta-cancle.svg');
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

function loadAbi(loadAbi: any, loadAddress: any, tokenId: number) {
  throw new Error('Function not implemented.');
}

function loadAbi(loadAbi: any, loadAddress: any, tokenId: number) {
  throw new Error('Function not implemented.');
}

function loadAddress(loadAbi: any, loadAddress: any, tokenId: number) {
  throw new Error('Function not implemented.');
}
