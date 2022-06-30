<template>
    <div class="warp flex_center" v-show="isShowTips">
        <div class="mask" :class="isShowTips && (xplanAni ? 'bounceShow' : 'bounceHide') ">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <div class="close">
                <img src="@/assets/nwhome/close.svg" alt="" @click="close()">
                <div class="closebg"></div>
            </div>
            <div class="content">
                <div class="title">{{ $t('message.common.metamask.opened') }}</div>
                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/opened.png" class="opened" alt="">
                <div class="text"> <span v-if="nftID > 0"> {{ $t('message.common.metamask.openedText1')}}</span><span v-if="nftID > 0">{{ nftID }}</span> {{ $t('message.common.metamask.openedText2') }}</div>
            </div>
            <div class="btns">
                <div class="btn" @click="toMyassets">{{ $t('message.common.metamask.viewAsset') }}</div>
                <div class="btn" @click="viewTrade" :class="{'not-allowed': true}">{{ $t('message.common.metamask.viewTrade') }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, getCurrentInstance } from 'vue'
import store from '@/store/index'
import { useI18n } from 'vue-i18n';
import Web3 from '@/tools/web3' 
import {  useRouter } from 'vue-router'

const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;

const { arms, cyberClub, cyberClub_Fuji, Cyborg, Cyborg_Fuji, game_Fuji } = Web3.contracts
const router = useRouter()
const chainId: any = computed(() => store.state.user?.chainId );
const emit = defineEmits(['changeSwitch']);
const props = defineProps({
    isShowTips: {
        type: Boolean,
        default: false,
    },
    boxId: {
        type: Number,
        default: 0,
    }
})

const xplanAni = computed(() => store?.state.user?.xplanAni);

const close = () => {
    store.dispatch('user/xplanChangeAni', false);
    setTimeout(() => {
        store.dispatch('myAssets/boxOpened', false);
    }, 300);
}



// NFT
const nftID = ref(0)
const lastNFT = async () => {
    let boxId = props.boxId;
    console.log(boxId ,'boxId');
    if(boxId > 2 || boxId == 1) return;   // undefind box
    if(chainId.value == 80001){
        let result: any = boxId == 0 ? await Web3.tokensOfOwner(cyberClub.abi, cyberClub.address) : boxId == 1 ? await Web3.balanceOfBatch(game_Fuji.abi, game_Fuji.address, store.state.myBox?.game) : await Web3.tokensOfOwner(Cyborg.abi, Cyborg.address);
        nftID.value = result[result.length-1]
    }else if(chainId.value == 43113){
        let result: any = boxId == 0 ? await Web3.tokensOfOwner(cyberClub_Fuji.abi, cyberClub_Fuji.address) : boxId == 1 ? await Web3.balanceOfBatch(game_Fuji.abi, game_Fuji.address, store.state.myBox?.game) : await Web3.tokensOfOwner(Cyborg_Fuji.abi, Cyborg_Fuji.address);
        nftID.value = result[result.length-1]
    }
}

// router
const toMyassets = () => {
    router.push({ path: '/knapsack' })
    close();
}
const viewTrade = () => {
    return;
    window.open(`https://testnets.nftrade.com/assets/fuji/${chainId.value == 43113 ? '0x55eFD6D4cF31F925E36d268C12353848c9e782fD' : '0xC5FE394692a469BD5789D8247F281403e064E576'}/`)
    close();
}


onMounted(() => {
    setTimeout(() => {
        lastNFT();
    }, 1000);
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

    .warp{
        z-index: 9;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,.4);
        .mask{
            position: relative;
            width: 350px;
            height: 250px;
            padding: 2.5vw;
            z-index: 999;
            color: #fff;
            box-shadow: -20px 20px 20px 10px rgba(0, 0, 0, 0.4);
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
                width: 20vw;
                height: 20vw;
                background-color: #2d2942;
            }
            .close{
                position: absolute;
                right: 1vw;
                top: 1vw;
                z-index: 11;
                width: 40px;
                height: 40px;
                img{
                    width: 100%;
                }
            }
            .content{
                position: absolute;
                left: 0;
                right: 0;
                padding: 0 2.5vw;
                // margin-bottom: 2.7vw;
                .title{
                    font-size: 20px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    font-weight: normal;
                    line-height: 2.08vw;
                    margin-top: 10px;
                }
                .opened{
                    width: 50px;
                    margin: 20px;
                }
                span{
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFF;
                    font-size: 16px;
                    font-weight: bold;
                }
                .text{
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: normal;
                }
            }
            .btns{
                width: 100%;
                position: absolute;
                top: 180px;
                right: 30px;
                display: flex;
                justify-content: flex-end;
                .not-allowed{
                    cursor: not-allowed !important;
                    opacity: .4;
                }
                .btn{
                    padding: 12px 16px;
                    transition: all 0.2s ease;
                    cursor: pointer;
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    font-weight: normal;
                    color: #FFFFFF;
                }
                .btn:first-child{
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwAssets/withBorder.png');
                    background-size: 100% 100%;
                    margin-right: 1.25vw;
                }
                .btn:last-child{
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/purchase.png');
                    background-size: 100% 100%;
                }
                .btn:hover{
                    filter: drop-shadow(0 0 0.4vw #fff);
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
