<template>
    <div class="container flex_center">
        <div class="mask" :class="isShowTips && (xplanAni ? 'bounceShow' : 'bounceHide')">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <img class="close" src="@/assets/nwhome/close.svg" alt=""  @click="closeDialog">
            <div class="content">
                <div class="title">{{$t('message.mining.finish.finished')}}</div>
                <div class="text">{{$t('message.mining.finish.text')}}</div>
                <div class="reward_chunks flex_centent_center">
                    <div class="item selected" v-if="isCoin">
                        <div class="chunk">
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwStaking/CYTIcon.png" alt="">
                        </div>
                        <p>COIN</p>
                    </div>
                    <div class="item selected" v-else>
                        <div class="chunk">
                            <img src="https://cyberpop.mypinata.cloud/ipfs/QmRVeBntXA1wgakGCSD6BpyGyXjTsShqUyb6dNooHXwDEr" alt="">
                        </div>
                        <p>NFT</p>
                    </div>
                </div>
                <div class="btn">
                    <div class="btn-wrap">
                        <div class="CONFIRM" @click="confirm">{{$t('message.mining.finish.btn')}}</div>
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
const { staking, CYTStakingRewards } = Web3.contracts;
const emit = defineEmits(['closeFinshed']);
const props: any = defineProps({
    isShowTips: Boolean,
    amount: Number,
    isCoin: {
        type: Boolean,
        default: false
    }
})


const fn=()=>{'hello'}
defineExpose({
  fn,
});



const readyAssetsF: any = computed(() => store.state.myAssets?.readyAssets ); // Status value of the connection
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


const confirm = async () => {
    if(selected.value == 0){
        let result = await Web3.getReward(CYTStakingRewards.abi, CYTStakingRewards.address)
        console.log(result);
        if( result == 0 ){
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.tran_stop')}})
            return;
        }
        store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}})
        store.dispatch('staking/readyAssetsCoin',  readyAssetsCoin.value + 1);
        closeDialog();
    }else{
        let result = await Web3.getNFT(staking.abi, staking.address, props.amount);
        console.log(result);
        if( result == 0 ){
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.tran_stop')}})
            return;
        }
        store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}})
        store.dispatch('myAssets/dataSumSearch', { flag: readyAssetsF.value + 1 }); // After the operation is successful, the page listens and refreshes the data
        closeDialog();
    }
}


onMounted(() => {
    console.log(props);
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
            width: 314px;
            padding: 20px;
            box-shadow: -1.51vw .83vw .2vw .05vw rgba(0, 0, 0, 0.4);
            background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
            border: 3px solid;
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
                width: 22px;
                height: 22px;
                z-index: 11;
            }
            .content{
                position: relative;
                padding: 6px 0;
                .title{
                    margin-bottom: 14px;
                    font-size: 18px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    font-weight: bold;
                    line-height: 20px;
                    text-align: center;
                }
                .text{
                    margin-bottom: 36px;
                    height: 30px;
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    line-height: 16px;
                    text-align: center;
                }
                .reward_chunks{
                    margin-bottom: 28px;
                    .item{
                        .chunk{
                            width: 66px;
                            height: 66px;
                            border: 0.104vw solid #464360;
                            padding: 10px;
                            background: linear-gradient(45deg, rgba(4, 255, 162, 0.1) 0%, rgba(27, 54, 44, .1) 50%, rgba(27, 54, 44, 0) 100%);
                            img{
                                width: 100%;
                            }
                        }
                        .selected{
                            box-shadow: 0 0 15px #8478fc;
                            border: 0.104vw solid #8478fc;
                        }
                        p{
                            margin-top: 4px;
                            font-size: 12px;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #464360;
                            line-height: 20px;
                            text-align: center;
                        }
                    }
                    .selected{
                        .chunk{
                            box-shadow: 0 0 15px #8478fc;
                            border: 2px solid #8478fc;
                        }
                        p{
                            color: #8478FF;
                        }
                    }
                    .item:first-child{
                        // margin-right: 48px;
                    }
                }
                .btn{
                    .CONFIRM{    
                        width: 140px;
                        height: 38px;
                        font-size: 12px;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        font-weight: bold;
                        color: #FFFFFF;
                        line-height: 38px;
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
