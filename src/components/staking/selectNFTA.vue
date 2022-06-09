<template>
    <div class="container">
        <div class="mask" :class="isShowTips && (xplanAni ? 'bounceShow' : 'bounceHide')">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <img class="close" src="@/assets/nwhome/close.svg" alt=""  @click="closeDialog">
            <div class="content">
                <div class="title">SELECT NFT</div>
                <table>
                    <thead>
                        <div class="thead">
                            <div class="name">Name</div>
                            <div class="id">ID</div>
                            <div class="HashRate">HashRate</div>
                            <div class="Operate">Operate</div>
                        </div>
                    </thead>
                    <div class="tbody" v-if="1">
                        <div class="item" v-for="item in 6" :key="item">
                            <div class="name">
                                <img src="https://cyberpop.mypinata.cloud/ipfs/QmPx82XhgdmkgEy1C8t2zivFZfySn7krCv3wSdfLeKwZfS" alt="">
                                <span>Kakulupia</span>
                            </div>
                            <div class="id">{{ item }}</div>
                            <div class="HashRate">HashRate</div>
                            <div class="Operate">
                                <div class="stak">STAKE</div>
                            </div>
                        </div>
                    </div>
                    <div class="nothing" v-else>
                    <!-- <div class="nothing" v-if="true"> -->
                        <img src="@/assets/nwAssets/nothing.svg" alt="">
                        <div>No data yet-</div>
                    </div>
                </table>
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
            width: 40.41vw;
            height: 29.16vw;
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
                    font-size: 1.45vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    font-weight: normal;
                    line-height: 2.08vw;
                    text-align: center;
                    margin-bottom: 0.72vw;
                }
                table{
                    // text-align: left;
                    font-size: 1.04vw;
                    width: 100%;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    font-weight: normal;
                    color: #FFFFFF;
                    .thead{
                        display: flex;
                        line-height: 2.08vw;
                        margin-bottom: 1.04vw;
                    }
                    .tbody{
                        line-height: 1.56vw;
                        width: 100%;
                        height: 16.4vw;
                        padding-right: 1.4vw;
                        overflow-y: scroll;
                        .item{
                            display: flex;
                            margin-bottom: 2.08vw;
                            position: relative;
                        }
                        .item:not(:last-child)::after{
                            content: " ";
                            position: absolute;
                            width: 100%;
                            height: 1px;
                            bottom: -1.04vw;
                            background: rgba(182, 156, 199, 0.17);
                        }
                    }
                    .tbody::-webkit-scrollbar{
                        width: 1px;
                        background: #fff;
                    }
                    .tbody::-webkit-scrollbar-track-piece{
                        background:#f8f9fa;
                    }
                    .tbody::-webkit-scrollbar-thumb{
                        background: #DE2DCF;
                    }
                    .nothing{
                        text-align: center;
                        font-size: 0.83vw;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        font-weight: normal;
                        color: #C4C4C4;
                        margin-top: 3.07vw;
                        line-height: 2.08vw;
                        -webkit-background-clip: text;
                        img{
                            width: 8.3vw;
                            height: 8.95vw;
                            margin-bottom: 1.04vw;
                        }
                    }
                    .name{
                        width: 13.43vw;
                        display: flex;
                        align-items: center;
                        img{
                            margin-right: 1.3vw;
                            width: 3.85vw;
                        }
                    }
                    .id{
                        width: 5.57vw;
                        display: flex;
                        align-items: center;
                    }
                    .HashRate{
                        width: 8.02vw;
                        display: flex;
                        align-items: center;
                    }
                    .Operate{
                        display: flex;
                        align-items: center;
                        .stak{
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwStaking/confirm_button.png');
                            background-size: 100% 100%;
                            width: 8.54vw;
                            line-height: 2.91vw;
                            text-align: center;
                        }
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
