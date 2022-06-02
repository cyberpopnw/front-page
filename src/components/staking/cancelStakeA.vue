<template>
    <div class="container">
        <div class="mask" :class="isShowTips && (xplanAni ? 'bounceShow' : 'bounceHide')">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <img class="close" src="@/assets/nwhome/close.svg" alt=""  @click="closeDialog">
            <div class="content">
                <div class="title">UNSTAKE</div>
                <div class="chunks">
                    <div class="withdraw">
                        <div class="texts"> 
                            <p>You Will Withdraw</p>
                            <p>0.00092210891</p>
                        </div>
                        <div class="bull">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div class="reward">
                        <p>With Unclaimed reward</p>
                        <div>0.00092210891<div class="bull"></div> </div>
                        <p>CYT</p>
                    </div>
                    <div class="tips">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwStaking/stakin13.png" alt="">
                        <div class="text">When you withdraw, your NETT is claimed and your METIS- m.USDT is returned to you. You will no longer earn NETT rewards on this pool</div>
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
import { ref, onMounted, computed, getCurrentInstance, watch, VueElement } from 'vue'
import store from '@/store/index'
import { useI18n, VueI18nOptions } from 'vue-i18n';
import Web3 from '@/tools/web3'

const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;
const { staking } = Web3.contracts;
const emit = defineEmits(['closeFinshed']);
const props = defineProps({
    isShowTips: Boolean,
})


const fn=()=>{'hello'}
defineExpose({
  fn,
});



const readyAssetsF: any = computed(() => store.state.user?.readyAssets ); 
const xplanAni = computed(() => store?.state.user?.xplanAni);

//state
const selected = ref(0 as number);


const closeDialog = () => {
    store.dispatch('user/xplanChangeAni', false);
    setTimeout(() => {
        emit('closeFinshed')
    }, 300);
}

// 确认选择
const confirm = async () => {
    if(selected.value == 0){
        let result = await Web3.getReward(staking.abi, staking.address)
        console.log(result);
        
    }else{
        let result = await Web3.getNFT(staking.abi, staking.address);
        console.log(result);
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
            width: 35.38vw;
            height: 32.81vw;
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
                    font-size: 1.95vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    font-weight: normal;
                    line-height: 2.08vw;
                    text-align: center;
                    margin-bottom: 1.3vw;
                }
                .chunks{
                    .withdraw{
                        // width: 27.3vw;
                        height: 6.4vw;
                        background: rgba(182, 156, 199, 0.17);
                        border-radius: 0px 0px 0px 0px;
                        opacity: 1;
                        display: flex;
                        align-items: center;
                        position: relative;
                        .texts{
                            padding-left: 1.04vw;
                            p:first-child{
                                font-size: 1.04vw;
                                margin-bottom: 1.25vw;
                                font-family: AlibabaPuHuiTi_2_55_Regular;
                                font-weight: normal;
                                color: #FFFFFF;
                                line-height: 1.04vw;
                                -webkit-background-clip: text;
                            }
                            p:last-child{
                                font-size: 1.61vw;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                font-weight: normal;
                                color: #FFFFFF;
                                line-height: 1.04vw;
                                -webkit-background-clip: text;
                            }
                        }
                        .bull{
                            display: flex;
                            align-items: center;
                            position: absolute;
                            right: 13.5vw;
                            bottom: 1vw;
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
                    .reward{
                        padding: 1.56vw 0;
                        padding-left: 1.04vw;
                        p:first-child{
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            font-weight: normal;
                            color: #FFFFFF;
                            line-height: 1.04vw;
                            margin-bottom: 1.19vw;
                            -webkit-background-clip: text;
                        }
                        div:nth-child(2){
                            font-size: 1.61vw;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            font-weight: normal;
                            color: #FFFFFF;
                            line-height: 1.04vw;
                            margin-bottom: 0.93vw;
                            -webkit-background-clip: text;
                            display: flex;
                            align-items: center;
                        }
                        p:last-child{
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            font-weight: normal;
                            color: #FFFFFF;
                            line-height: 1.04vw;
                            -webkit-background-clip: text;
                        }
                        .bull{
                            width: 1.87vw;
                            height: 1.87vw;
                            background: #C4C4C4;
                            opacity: 1;
                            border-radius: 50%;
                            margin-left: 1.04vw;
                        }
                    }
                    .tips{
                        height: 4.79vw;
                        border-radius: 0px 0px 0px 0px;
                        opacity: 1;
                        border: 1px solid #FFE154;
                        margin-bottom: 1.97vw;
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
                            -webkit-background-clip: text;
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
