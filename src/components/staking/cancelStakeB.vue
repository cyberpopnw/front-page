<template>
    <div>
        <div class="popup" :class="isShowTips && (xplanAni ? 'bounceShow' : 'bounceHide') ">
            <div class="content" ref="cursor">
                <div class="title">UNSTAKE</div>
                <div class="chunks">
                    <div class="withdraw_wrap">
                        <div class="withdraw" :class="{'select': selected == 0}" @click="selected = 0">
                            <div class="left"> 
                                <p>You Will Withdraw</p>
                                <!-- <p>{{ myStakCyt / 2}}</p> -->
                                <input id="inputNum" type="text" @input="inputNumber($event)" :value="valueIn">
                            </div>
                            <div class="right">
                                <div class="balance">Balance:0</div>
                                <div class="icon">
                                    <div class="max">MAX</div>
                                    <div class="bull">
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tips">Insufficient CYT Balance</div>
                    </div>
                    <div class="reward" :class="{'select': selected == 1}" @click="selected = 1">
                        <div class="left">
                            <p>With Unclaimed reward</p>
                            <div>{{ myStakCyt }}</div>
                        </div>
                        <div class="right">
                            <div class="bull"></div> 
                            <p>NETT</p>
                        </div>
                    </div>
                    <div class="tips">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwStaking/stakin13.png" alt="">
                        <div class="texts">When you withdraw, your NETT is claimed and your METIS- m.USDT is returned to you. You will no longer earn NETT rewards on this pool</div>
                    </div>
                </div>
                <div class="btn">
                    <div class="btn-wrap">
                        <div class="CONFIRM" @click="confirm">Withdraw & Claim</div>
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
const { staking } = Web3.contracts;
const myStakCyt: any = ref(0)
const emit = defineEmits(['closeFinshed']);
const props = defineProps({
    isShowTips: Boolean,
    haveCTY: Number,
})

// input
let valueIn:any = ref(1)
const numState: any = ref('')
const inputNumber = (e:any) => {
    console.log(e.target.value, props.haveCTY);
    let regExp = /^[0-9]+$/; // Verify that is a positive integer
    valueIn.value = e.target.value
    if (!e.target.value || !(regExp.test(valueIn.value)) || Number(valueIn.value) > Number(props.haveCTY)) {
        numState.value = 'error' 
    }else{
        numState.value = ''
    }
}



const fn=()=>{'hello'}
defineExpose({
  fn,
});



const readyAssetsF: any = computed(() => store.state.myAssets?.readyAssets ); 
const xplanAni = computed(() => store?.state.user?.xplanAni);

//state
const selected = ref(0 as number);


const closeDialog = () => {
    store.dispatch('user/xplanChangeAni', false);
    setTimeout(() => {
        emit('closeFinshed')
    }, 300);
}


// Confirm selection
const confirm = async () => {
    console.log(myStakCyt.value, 'myStakCyt.vlaue');
    let result = await Web3.withdraw(staking.abi, staking.address, selected.value == 0 ? myStakCyt.value / 2 : myStakCyt.value);
    console.log(result);
    store.dispatch('myAssets/dataSumSearch', { flag: readyAssetsF.value + 1 }); // After the operation is successful, the page listens and refreshes the data
}


const init = async () => {
    myStakCyt.value = await Web3.getBalanceOf(staking.abi, staking.address)
    console.log(myStakCyt.value, 'myStakCyt.value');
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
                    .tips{
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
                    align-items: center;
                    position: relative;
                    .left{
                        p{
                            margin-bottom: 10px;
                            font-size: 16px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #C4C4C4;
                            line-height: 20px;
                        }
                        input{
                            width: 50%;
                            border: none;
                            outline: none;
                            background: transparent;
                            font-size: 24px;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #FFFFFF;
                            line-height: 20px;
                        }
                    }
                    .bull{
                        display: flex;
                        align-items: center;
                        margin-top: 30px;
                        margin-left: 10px;
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
                .select{
                    background: rgba(182, 156, 199, 0.17);
                }
                .tips{
                    display: flex;
                    align-items: center;
                    width: 355px;
                    height: 74px;
                    margin: 10px 0 14px;
                    padding: 0 14px;
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
