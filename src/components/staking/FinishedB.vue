<template>
    <div class="container">
        <div class="mask" :class="isShowTips && (xplanAni ? 'bounceShow' : 'bounceHide')">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <img class="close" src="@/assets/nwhome/close.svg" alt=""  @click="closeDialog">
            <div class="content">
                <div class="title">Finished</div>
                <div class="text">Staking accomplished,you can choose CTY or NFT as a reward</div>
                <div class="reward_chunks">
                    <div class="item" :class="{'selected': selected == 0}" @click="selected = 0">
                        <div class="chunk">
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwStaking/CYTIcon.png" alt="">
                        </div>
                        <p>CYT</p>
                    </div>
                    <div class="item" :class="{'selected': selected == 1}" @click="selected = 1">
                        <div class="chunk">
                            <img src="https://cyberpop.mypinata.cloud/ipfs/QmRVeBntXA1wgakGCSD6BpyGyXjTsShqUyb6dNooHXwDEr" alt="">
                        </div>
                        <p>NFT</p>
                    </div>
                </div>
                <div class="btn">
                    <div class="btn-wrap">
                        <div class="CONFIRM" @click="confirm">CONFIRM</div>
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



const readyAssetsF: any = computed(() => store.state.myAssets?.readyAssets ); // Status value of the connection
const xplanAni = computed(() => store?.state.user?.xplanAni);

//state
const selected = ref(0 as number);


const closeDialog = () => {
    store.dispatch('user/xplanChangeAni', false);
    setTimeout(() => {
        emit('closeFinshed')
    }, 300);
}

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
            width: 31.51vw;
            height: 23.43vw;
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
                    text-align: center;
                    margin-bottom: 0.72vw;
                }
                .text{
                    font-size: 0.83vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: normal;
                    line-height: 1vw;
                    margin-bottom: 1.87vw;
                    text-align: center;
                }
                .reward_chunks{
                    display: flex;
                    justify-content: center;
                    margin-bottom: 1.97vw;
                    .item{
                        .chunk{
                            width: 4.58vw;
                            height: 4.58vw;
                            border-radius: 0px 0px 0px 0px;
                            border: 0.104vw solid #464360;
                            padding: 0.83vw;
                            background: linear-gradient(45deg, rgba(4, 255, 162, 0.1) 0%, rgba(27, 54, 44, .1) 50%, rgba(27, 54, 44, 0) 100%);
                            opacity: 1;
                            img{
                                width: 100%;
                            }
                        }
                        .selected{
                            box-shadow: 0 0 15px #8478fc;
                            border: 0.104vw solid #8478fc;
                        }
                        p{
                            font-size: 0.83vw;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            font-weight: normal;
                            color: #464360;
                            line-height: 2.08vw;
                            -webkit-background-clip: text;
                            text-align: center;
                        }
                    }
                    .selected{
                        .chunk{
                            box-shadow: 0 0 15px #8478fc;
                            border: 0.104vw solid #8478fc;
                        }
                        p{
                            color: #8478FF;
                        }
                    }
                    .item:first-child{
                        margin-right: 7.29vw;
                    }
                }
                .btn{
                    .CONFIRM{    
                        width: 13.9vw;
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
