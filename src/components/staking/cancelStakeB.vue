<template>
    <div>
        <div class="popup" :class="isShowTips && (xplanAni ? 'bounceShow' : 'bounceHide') ">
            <div class="content" ref="cursor">
                <div class="title">{{$t('message.mining.cancel.unstake')}}</div>
                <div class="chunks">
                    <div class="withdraw_wrap">
                        <div class="withdraw" :class="{'select': selected == 0}" @click="selected = 0">
                            <div class="left" :class="numState == 'error' ? 'error':''"> 
                                <p>{{$t('message.mining.cancel.will_withdraw')}}</p>
                                <!-- <p>{{ myStakCyt / 2}}</p> -->
                                <input id="inputNum" type="text" @input="inputNumber($event)" :value="valueIn">
                            </div>
                            <div class="right">
                                <div class="balance">{{$t('message.mining.cancel.balance')}}:{{myStakCyt}}</div>
                                <div class="icon">
                                    <div class="max" @click="maxActive">{{$t('message.mining.cancel.max')}}</div>
                                    <div class="bull">
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="errmsg" v-if="!Number(myStakCyt)">{{$t('message.mining.cancel.tips')}}</div>
                        <div class="errmsg" v-if="Number(myStakCyt) && numState == 'error'">{{$t('message.assets.pop.tips_err')}}</div>
                    </div>
                    <!-- <div class="reward" :class="{'select': selected == 1}" @click="selected = 1">
                        <div class="left">
                            <p>{{$t('message.mining.cancel.Unclaimed')}}</p>
                            <div class="txt">0</div>
                        </div>
                        <div class="right">
                            <div class="bull"></div> 
                            <p>NETT</p>
                        </div>
                    </div> -->
                    <div class="tips">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwStaking/stakin13.png" alt="">
                        <div class="texts">{{$t('message.mining.cancel.warn_tips')}}</div>
                    </div>
                </div>
                <div class="btn">
                    <div class="btn-wrap">
                        <div class="CONFIRM" @click="confirm">{{$t('message.mining.cancel.btn')}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, getCurrentInstance, watch, VueElement, onUnmounted } from 'vue'
import store from '@/store/index'
import { useI18n, VueI18nOptions } from 'vue-i18n';
import Web3 from '@/tools/web3'

const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;
const { staking,CYTStakingRewards } = Web3.contracts;
const myStakCyt: any = ref(0)
const emit = defineEmits(['closeFinshed']);
const props = defineProps({
    isShowTips: Boolean,
    isCoin: {
        type: Boolean,
        default: false
    }
})


const fn=()=>{'hello'}
defineExpose({
  fn,
});


const readyAssetsF: any = computed(() => store.state.myAssets?.readyAssets ); 
const readyAssetsCoin: any = computed(() => store.state.staking?.readyAssetsCoin );
const xplanAni = computed(() => store?.state.user?.xplanAni);

//state
const selected = ref(0 as number);


const closeDialog = () => {
    store.dispatch('user/xplanChangeAni', false);
    setTimeout(() => {
        emit('closeFinshed')
    }, 300);
}


// input
let valueIn:any = ref(1)
const numState: any = ref('')
const inputNumber = (e:any) => {
    console.log(e.target.value, myStakCyt.value);
    let regExp = /^[0-9]+$/; // Verify that is a positive integer
    valueIn.value = e.target.value
    if (!e.target.value || !(regExp.test(valueIn.value)) || Number(valueIn.value) > Number(myStakCyt.value)) {
        numState.value = 'error' 
    }else{
        numState.value = ''
    }
}
const maxActive = () => {
    if( !Number(myStakCyt.value) ){
        valueIn.value = 0;
    }else{
        // valueIn.value = (Math.floor(myStakCyt.value * 100000000000) / 100000000000).toFixed(11);
        valueIn.value = myStakCyt.value;
    }
    numState.value = ''
}

// Confirm selection
const confirm = async () => {
    console.log(myStakCyt.value, 'myStakCyt.vlaue');
    if( numState.value == 'error' || !Number(myStakCyt.value) ) return;
    if( props.isCoin ){
        let result = await Web3.withdraw(CYTStakingRewards.abi, CYTStakingRewards.address, valueIn.value );
        store.dispatch('staking/readyAssetsCoin',  readyAssetsCoin.value + 1);
        console.log(result);
    }else{
        let result = await Web3.withdraw(staking.abi, staking.address, valueIn.value );
        store.dispatch('myAssets/dataSumSearch', { flag: readyAssetsF.value + 1 }); // After the operation is successful, the page listens and refreshes the data
        console.log(result);
    }
    // let result = await Web3.withdraw(staking.abi, staking.address, selected.value == 0 ? valueIn.value : myStakCyt.value);
    closeDialog();
}


const init = async () => {
    if( props.isCoin ){
        myStakCyt.value = await Web3.getBalanceOf(CYTStakingRewards.abi, CYTStakingRewards.address) // you have stake
        if( !Number(myStakCyt.value) ) valueIn.value= 0;
        console.log(myStakCyt.value, 'myStakCyt.value');
        return
    }
    myStakCyt.value = await Web3.getBalanceOf(staking.abi, staking.address)
    console.log(myStakCyt.value, 'myStakCyt.value');
    if( !Number(myStakCyt.value) ) valueIn.value= 0;
}


const cursor:any = ref(null)
const handleOtherClick = (e:any) => { 
    if( cursor.value.contains(e.target) ){
        return
    }else{
        closeDialog();
    }
}


onUnmounted(() => {
    window.removeEventListener('click', handleOtherClick, true);
})


onMounted(() => {
    window.addEventListener('click', handleOtherClick, true);
    init();
})
</script>

<style lang="less" scoped>
    .popup{
        z-index: 9;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        background: rgba(35, 38, 47, 0.9);
        .content{
            position: absolute;
            bottom: 0;
            width: 100%;
            padding: 24px 20px;
            color: #FFFFFF;
            background: linear-gradient(221deg, rgba(132, 120, 255, .8) 0%, rgba(12, 9, 17, .8) 100%),
                        linear-gradient(81deg, rgba(45, 222, 211, .6) 0%, rgba(12, 9, 17, 1) 100%);
            box-shadow: inset 0px 4px 0px 1px #5A5685;
            .title{
                margin-bottom: 24px;
                font-size: 28px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                line-height: 40px;
            }
            .chunks{
                .withdraw_wrap{
                    .errmsg{
                        font-size: 14px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #FF2F2F;
                        line-height: 16px;
                    }
                }
                .withdraw, .reward{
                    height: 84px;
                    padding: 0 14px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    .left,.right{
                        p,.balance{
                            margin-bottom: 10px;
                            font-size: 16px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #C4C4C4;
                            line-height: 20px;
                        }
                        input{
                            width: 100%;
                            border: none;
                            outline: none;
                            background: transparent;
                            font-size: 24px;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #FFFFFF;
                            line-height: 20px;
                        }
                        .txt{
                            font-size: 24px;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #FFFFFF;
                            line-height: 20px;
                        }
                        .icon{
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;
                            .max{
                                width: 57px;
                                height: 22px;
                                margin-right: 10px;
                                text-align: center;
                                font-size: 12px;
                                line-height: 22px;
                                color: #FF00FF;
                                font-family: AlibabaPuHuiTi_2_65_Medium;
                                border: 1px solid;
                                border-image: linear-gradient(45deg, rgba(255, 0, 255, 1), rgba(176, 65, 216, 1)) 1 1;
                            }
                            .bull{
                                display: flex;
                                align-items: center;
                                div{
                                    width: 24px;
                                    height: 24px;
                                    background: #C4C4C4;
                                    border: 1px solid #464360;
                                    border-radius: 50%;
                                }
                                div:last-child{
                                    margin-left: -6px;
                                }
                            }
                        }
                    }
                    .left.error{
                        input{
                            color: #FF5CA1 !important;
                        }
                    }
                    .right{
                        text-align: right;
                    }
                }
                .reward > .right{
                    text-align: center;
                    margin-top: 50px;
                    .bull{
                        margin-left: 6px;
                        width: 24px;
                        height: 24px;
                        background: #C4C4C4;
                        border: 1px solid #464360;
                        border-radius: 50%;
                    }
                }
                .select{
                    background: rgba(182, 156, 199, 0.17);
                }
                .tips{
                    display: flex;
                    align-items: center;
                    // width: 355px;
                    margin: 10px 0 14px;
                    padding: 8px 14px;
                    border: 1px solid #FFE154;
                    img{
                        width: 29px;
                        height: 27px;
                        margin-right: 26px;
                    }
                    .texts{
                        font-size: 12px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #FFE154;
                        line-height: 18px;
                        text-align: left;
                    }
                }
            }
            .text{
                font-size: 0.83vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                font-weight: normal;
                line-height: 1vw;
                margin-bottom: 1.87vw;
                text-align: center;
                word-break:break-all;
            }

            .btn{
                .CONFIRM{    
                    width: calc(100% - 24px);
                    height: 48px;
                    margin: 0 auto;
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    font-weight: bold;
                    line-height: 48px;
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwStaking/confirm_button.png');
                    background-size: 100% 100%;
                    text-align: center;
                    cursor: pointer;
                }
            }
        }
    }
</style>
