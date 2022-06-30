<template>
    <div class="container flex_center">
        <div class="mask" :class="isShowTips && (xplanAni ? 'bounceShow' : 'bounceHide')">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <img class="close" src="@/assets/nwhome/close.svg" alt=""  @click="closeDialog">
            <div class="content">
                <div class="title">{{$t('message.mining.STAKE')}}</div>
                <div class="nav flex_align_center">
                    <div class="multiple" :class="switchFlag ? 'activePink': ''" @click="switchFlag = false">{{$t('message.mining.stakingA.add')}}</div>
                    <div class="alone" :class="!switchFlag ? 'activePink': ''" @click="switchFlag = false">{{$t('message.mining.stakingA.solo')}}</div>
                </div>
                <div class="card-wrap">
                    <div class="card1" v-if="switchFlag">
                        <div class="item">
                            <div class="border flex_between">
                                <div class="number" :class="numState == 'error' ? 'error':''">
                                    <div class="name">{{$t('message.mining.stakingA.input')}}</div>
                                    <input id="inputNum" type="text" @input="inputNumber($event)" :value="valueIn">
                                </div>
                                <div class="btns">
                                    <div class="balance">{{$t('message.mining.cancel.balance')}}:0</div>
                                    <div class="icon">
                                        <!-- <div :class="{'active': active == 0}" @click="active = 0">Mix</div> -->
                                        <div class="max" @click="active = 1">{{$t('message.mining.cancel.max')}}</div>
                                        <div class="desc flex_align_center">
                                            <div></div>
                                            COIN
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tips">{{$t('message.mining.stakingA.insuff_cyt')}},<span>Get COIN.</span></div>
                        </div>
                        <img class="addicon" src="https://d2cimmz3cflrbm.cloudfront.net/nwStaking/stake_addicon.svg" alt="">
                        <div class="item">
                            <div class="border flex_between">
                                <div class="number" :class="numState == 'error' ? 'error':''">
                                    <div class="name">{{$t('message.mining.stakingA.input')}}</div>
                                    <input id="inputNum" type="text" @input="inputNumber($event)" :value="valueIn">
                                </div>
                                <div class="btns">
                                    <div class="balance">{{$t('message.mining.cancel.balance')}}:0</div>
                                    <div class="icon flex_align_center">
                                        <!-- <div :class="{'active': active == 0}" @click="active = 0">Mix</div> -->
                                        <div class="max" @click="active = 1">{{$t('message.mining.cancel.max')}}</div>
                                        <div class="desc flex_align_center">
                                            <div></div>
                                            YOOSHI
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tips">{{$t('message.mining.stakingA.insuff_yooshi')}},<span>Get YOOSHI.</span></div>
                        </div>
                        <div class="staking" :class="{'not-allowed': numState == 'error'}"  @click="stakingCYT">
                            <span>{{ numState == 'error' ? $t('message.mining.stakingA.enter_token') : $t('message.mining.STAKE') }}</span>
                        </div>
                    </div>
                    <div class="card2" v-else>
                        <div class="item">
                            <div class="border flex_between">
                                <div class="number" :class="numState == 'error' ? 'error':''">
                                    <div class="name">{{$t('message.mining.stakingA.input')}}</div>
                                    <input id="inputNum" type="text" @input="inputNumber($event)" :value="valueIn" :placeholder="valueIn">
                                    <div class="err_tips" v-show="numState == 'error'">{{$t('message.assets.pop.tips_err')}}</div>
                                </div>
                                <div class="btns">
                                    <div class="balance">{{$t('message.mining.cancel.balance')}}:{{haveCTY}}</div>
                                    <div class="icon flex_align_center">
                                        <!-- <div :class="{'active': active == 0}" @click="active = 0">Mix</div> -->
                                        <!-- <div class="max" @click="active = 1">MAX</div> -->
                                        <div class="max" @click="maxActive">{{$t('message.mining.cancel.max')}}</div>
                                        <div class="desc flex_align_center">
                                            COIN
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tips" v-if="!Number(haveCTY)">{{$t('message.mining.stakingA.insuff_lp')}},<span>Get COIN.</span></div>
                        </div>
                        <div class="staking" :class="{'not-allowed': numState == 'error'}"  @click="stakingCYT">
                            <span>{{ numState == 'error' ? $t('message.mining.stakingA.enter_lp') : $t('message.mining.STAKE') }}</span>
                        </div>
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
const { MarketV2, cytV2, staking, CYTStakingRewards } = Web3.contracts;

const props: any = defineProps({
    isShowTips: Boolean,
    haveCTY: Number,
    state: {
        type: Number,
        default: 0
    },
});

const readyAssetsF: any = computed(() => store.state.myAssets?.readyAssets ); // Status value of the connection
const readyAssetsCoin: any = computed(() => store.state.staking?.readyAssetsCoin ); 
const xplanAni = computed(() => store?.state.user?.xplanAni);
// switch type
const switchFlag: any = ref(false);



// input
let valueIn:any = ref(1)
const numState: any = ref('')
const active: any = ref(0)
// watch(active, (newVal: any, oldVal) => {
//     if(newVal == 0){
//         valueIn.value = 1;
//     }else{
//         valueIn.value = parseInt(props.haveCTY) || 1;
//     }
//     numState.value = ''
// }, {immediate:true,deep:true});

const maxActive = () => {
    valueIn.value = parseInt(props.haveCTY) || 0;
    numState.value = ''
}



const inputNumber = (e:any) => {
    console.log(e.target.value);
    let regExp = /^[0-9]+$/; // Verify that is a positive integer
    valueIn.value = e.target.value
    if (!e.target.value || !(regExp.test(valueIn.value)) || Number(valueIn.value) > Number(props.haveCTY)) {
        numState.value = 'error' 
    }else{
        numState.value = ''
    }
}



const closeDialog = () => {
    store.dispatch('user/xplanChangeAni', false);
    setTimeout(() => {
        store.dispatch('staking/stakingState', { show: false, info: { } });
    }, 300);
}

let resultAbi:any = ref([]);
let resultAddr:any = ref('');
const stakingCYT =  async () => {
    if( numState.value == 'error' || !Number(valueIn.value) || !Number(props.haveCTY) ) return;
    store.dispatch('staking/waitingShow', true);
    store.dispatch('staking/waitingChangeAni', {ani: true,info: {desc: t('message.mining.stakingA.auth_prog')}});
    let result = await Web3.approve(cytV2.abi, cytV2.address, resultAddr.value, valueIn.value);
    if(result) {
        store.dispatch('staking/waitingChangeAni', {ani: true,info: {desc:t('message.mining.stakingA.staking')}});
        let stake_result = await Web3.stake(resultAbi.value, resultAddr.value, valueIn.value);
        console.log(stake_result);
        if(stake_result) {
            closeWaitDialog();
            store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}})
            if( props.state == 2 ){
                store.dispatch('staking/readyAssetsCoin',  readyAssetsCoin.value + 1);
            }else{
                store.dispatch('myAssets/dataSumSearch', { flag: readyAssetsF.value + 1 }); // After the operation is successful, the page listens and refreshes the data
            }
            closeDialog();
            return;
        }
        closeWaitDialog();
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.tran_stop')}})
    }else{
        closeWaitDialog();
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.tran_stop')}})
    }
}

const closeWaitDialog = () => {
    store.dispatch('staking/waitingChangeAni', {ani: false ,info:{}});
    setTimeout(() => {
        store.dispatch('staking/waitingShow', false);
    }, 300);
}

onMounted(() => {
    console.log(props);
    if( !Number(props.haveCTY) ) valueIn.value= 0;

    if( props.state == 2 ){
        resultAbi.value = CYTStakingRewards.abi;
        resultAddr.value = CYTStakingRewards.address;
    }else{
        resultAbi.value = staking.abi;
        resultAddr.value = staking.address;
    }
})


</script>

<style scoped lang="less">
    .container{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 187;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        color: #fff;
        display: grid; 
        justify-content: center;
        .mask{
            position: relative;
            width: 31.51vw;
            min-width: 380px;
            padding: 2.5vw 2.08vw;
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
                position: relative;
                .title{
                    margin-bottom: 1.3vw;
                    font-size: 1.45vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    font-weight: normal;
                    line-height: 2.08vw;
                    text-align: center;
                }
                .nav{
                    width: 23.75vw;
                    height: 2.5vw;
                    margin: 0 auto 1.56vw;
                    font-size: 1.04vw;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    font-weight: normal;
                    line-height: 2.5vw;
                    text-align: center;
                    background: rgba(182, 156, 199, 0.17);
                    cursor: pointer;
                    .multiple{
                        flex: 1;
                        height: 100%;
                        transition: all 0.2s ease-in-out
                    }
                    .alone{
                        width: 8.9vw;
                        height: 100%;
                        transition: all 0.2s ease-in-out;
                    }
                    .activePink{
                        background: linear-gradient(213deg, #B041D8 0%, #DE2DCF 100%);
                    }
                }
                .card-wrap{
                    .card1,.card2{
                        .item{
                            .border{
                                position: relative;
                                width: 100%;
                                height: 6.14vw;
                                padding: 1.09vw 1.56vw;
                                border: 2px solid rgba(255, 0, 255, 0.3);
                                font-size: 1.04vw;
                                font-family: AlibabaPuHuiTi_2_55_Regular;
                                color: #B3B3B3;
                                line-height: 1.61vw;
                                .number,.btns{
                                    flex: 1;
                                    input{
                                        width: 80%;
                                        font-size: 1.61vw;
                                        line-height: 1.61vw;
                                        font-family: AlibabaPuHuiTi_2_85_Bold;
                                        color: #ffffff;
                                        border: none;
                                        outline: none;
                                        background: transparent;
                                        &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                                            color: rgba(255, 255, 255, 0.4);
                                        }
                                        &::-webkit-input-placeholder{
                                            color: rgba(255, 255, 255, 0.4);
                                        }
                                        &::-moz-placeholder{   /* Mozilla Firefox 19+ */
                                            color: rgba(255, 255, 255, 0.4);
                                        }
                                        &:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
                                            color: rgba(255, 255, 255, 0.4);
                                        }
                                        &:-ms-input-placeholder { /* Internet Explorer 10-11 */
                                            color: rgba(255, 255, 255, 0.4);
                                        }
                                        &::-ms-input-placeholder { /* Microsoft Edge */
                                            color: rgba(255, 255, 255, 0.4);
                                        }
                                    }
                                    input::-webkit-outer-spin-button,
                                    input::-webkit-inner-spin-button {
                                        -webkit-appearance: none !important;
                                        margin: 0;
                                    }
                                    .balance{
                                        margin-bottom: .4vw;
                                    }
                                    .icon{
                                        justify-content: flex-end;
                                        .max{
                                            width: 4.47vw;
                                            height: 1.87vw;
                                            margin-right: 1.04vw;
                                            text-align: center;
                                            font-size: .93vw;
                                            line-height: 1.87vw;
                                            color: #FF00FF;
                                            font-family: AlibabaPuHuiTi_2_65_Medium;
                                            border: 1px solid;
                                            border-image: linear-gradient(45deg, rgba(255, 0, 255, 1), rgba(176, 65, 216, 1)) 1 1;
                                            cursor: pointer;
                                        }
                                        .desc{
                                            font-size: 1.25vw;
                                            font-family: AlibabaPuHuiTi_2_85_Bold;
                                            color: #ffffff;
                                            & > div{
                                                width: 1.87vw;
                                                height: 1.87vw;
                                                margin-right: .52vw;
                                                border-radius: 50%;
                                                background: #C4C4C4;
                                            }
                                        }
                                    }

                                }
                                .number.error{
                                    input{
                                        color: #FF5CA1 !important;
                                    }
                                }
                                .btns{
                                    text-align: right;
                                }
                                .number{
                                    .err_tips{
                                        position: absolute;
                                        left: 1.56vw;
                                        bottom: 0;
                                        font-size: .83vw;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #FF5CA1;
                                        line-height: .83vw;
                                        white-space: nowrap;
                                    }
                                }
                            }
                            .tips{
                                margin-top: .4vw;
                                font-size: .73vw;
                                font-family: AlibabaPuHuiTi_2_55_Regular;
                                color: #FF2F2F;
                                line-height: .83vw;
                                span{
                                    text-decoration: underline;
                                    color: #ffffff;
                                    cursor: pointer;
                                }
                            }
                        }
                        .addicon{
                            display: block;
                            width: 1.09vw;
                            height: 1.09vw;
                            margin: .4vw auto 1.04vw;
                        }
                        .staking{
                            position: relative;
                            width: 17.29vw;
                            height: 2.91vw;
                            margin: .78vw auto 0;
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            font-weight: bold;
                            line-height: 2.91vw;
                            text-align: center;
                            cursor: pointer;
                            transition: all .2s ease-in-out;
                            span{
                                position: absolute;
                                left: 0;
                                width: 100%;
                                z-index: 2;
                            }
                            &::before {   
                                content: "";
                                background-image: url(https://d2cimmz3cflrbm.cloudfront.net/nwStaking/stakingA_bthbg.png);
                                background-size: 100% 100%;
                                position: absolute;  
                                top: 0;
                                left: 0;
                                bottom: 0;
                                right: 0;
                                z-index: 1;
                            }
                        }
                        .not-allowed{
                            &::before{
                                opacity: 0.6;
                            }
                            cursor: not-allowed !important;
                        }
                        .not-allowed:hover{
                            opacity: .6;
                        }
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
