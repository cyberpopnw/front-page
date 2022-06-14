<template>
    <div class="container">
        <div class="mask" :class="isShowTips && (xplanAni ? 'bounceShow' : 'bounceHide')">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <img class="close" src="@/assets/nwhome/close.svg" alt=""  @click="closeDialog">
            <div class="content">
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
                        <div class="errmsg" v-show="Number(myStakCyt) && numState == 'error'">{{$t('message.assets.pop.tips_err')}}</div>
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
                        <div class="text">{{$t('message.mining.cancel.warn_tips')}}</div>
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
import { ref, onMounted, computed, getCurrentInstance, watch, VueElement } from 'vue'
import store from '@/store/index'
import { useI18n, VueI18nOptions } from 'vue-i18n';
import Web3 from '@/tools/web3'

const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;
const { staking } = Web3.contracts;
const myStakCyt: any = ref(0)
const emit = defineEmits(['closeFinshed']);
const props: any = defineProps({
    isShowTips: Boolean,
    haveCTY: Number,
})


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

// input
let valueIn:any = ref(1)
const numState: any = ref('')
const inputNumber = (e:any) => {
    console.log(e.target.value, myStakCyt.value);
    // let regExp = /^[0-9]+$/; // Verify that is a positive integer
    let regExp = /^[1-9]\d*(\.\d{1,11})?$|^0(\.\d{1,11})?$/; // Verify that is a Positive integer and 11 decimal places
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
        valueIn.value = (Math.floor(myStakCyt.value * 100000000000) / 100000000000).toFixed(11);
    }
    numState.value = ''
}



// Confirm selection
const confirm = async () => {
    console.log(myStakCyt.value, 'myStakCyt.vlaue');
    if( numState.value == 'error' || !Number(myStakCyt.value) ) return;
    // let result = await Web3.withdraw(staking.abi, staking.address, selected.value == 0 ? valueIn.value : myStakCyt.value);
    let result = await Web3.withdraw(staking.abi, staking.address, valueIn.value );
    console.log(result);
    store.dispatch('myAssets/dataSumSearch', { flag: readyAssetsF.value + 1 }); // After the operation is successful, the page listens and refreshes the data
    closeDialog();
}


const init = async () => {
    myStakCyt.value = await Web3.getBalanceOf(staking.abi, staking.address)
    console.log(myStakCyt.value, 'myStakCyt.value');
}


onMounted(() => {
    init();
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
            // height: 32.81vw;
            height: 26.81vw;
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
                padding: 0 2.13vw;
                .title{
                    font-size: 1.45vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    font-weight: normal;
                    line-height: 2.08vw;
                    text-align: center;
                    margin-bottom: 1.3vw;
                }
                .chunks{
                    .withdraw_wrap{
                        .errmsg{
                            padding-left: 1.04vw;
                            font-size: .73vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #FF2F2F;
                            line-height: .83vw;
                        }
                    }
                    .withdraw, .reward{
                        // width: 27.3vw;
                        height: 6.4vw;
                        padding: 0 1.04vw;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        position: relative;
                        .left,.right{
                            color: #FFFFFF;
                            p,.balance{
                                font-size: 1.04vw;
                                margin-bottom: .6vw;
                                font-family: AlibabaPuHuiTi_2_55_Regular;
                                font-weight: normal;
                                line-height: 1.04vw;
                            }
                            input{
                                width: 100%;
                                border: none;
                                outline: none;
                                background: transparent;
                                font-size: 1.61vw;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                line-height: 1.04vw;
                                color: #FFFFFF;
                            }
                             .txt{
                                padding-top: .6vw;
                                font-size: 1.61vw;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                line-height: 1.04vw;
                            }
                            .icon{
                                display: flex;
                                align-items: center;
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
                                .bull{
                                    display: flex;
                                    align-items: center;
                                    div{
                                        width: 1.97vw;
                                        height: 1.97vw;
                                        background: #C4C4C4;
                                        opacity: 1;
                                        border: 2px solid #464360;
                                        border-radius: 50%;
                                    }
                                    div:last-child{
                                        margin-left: -0.5vw;
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
                        margin-top: 3.5vw;
                        .bull{
                            width: 1.97vw;
                            height: 1.97vw;
                            margin: 0 0 .2vw .2vw;
                            background: #C4C4C4;
                            border: 1px solid #464360;
                            border-radius: 50%;
                        }
                    }
                    .select{
                        background: rgba(182, 156, 199, 0.17);
                    }
                    .tips{
                        height: 4.79vw;
                        border: 1px solid #FFE154;
                        margin: 1vw 0 1.97vw;
                        display: flex;
                        align-items: center;
                        padding-left: 1.04vw;
                        padding-right: 2.39vw;
                        img{
                            width: 2.135vw;
                            height: 1.97vw;
                            margin-right: 1.04vw;
                        }
                        .text{
                            font-size: 0.83vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            font-weight: normal;
                            color: #FFE154;
                            line-height: 1.25vw !important;
                            margin-bottom: 0;
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
                        width: 17.29vw;
                        height: 2.91vw;
                        font-size: 1.04vw;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        font-weight: bold;
                        color: #FFFFFF;
                        line-height: 2.91vw;
                        text-align: center;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwStaking/confirm_button.png');
                        background-size: 100% 100%;
                        cursor: pointer;
                        margin: 0 auto;
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
