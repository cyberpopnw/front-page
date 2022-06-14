<template>
    <div class="container" :class="isShowTips && (xplanAni ? 'bounceShow' : 'bounceHide')">
        <div class="content"  ref="cursor">
            <div class="title">{{$t('message.mining.selectNFT.title')}}</div>
            <table v-if="1">
                <thead>
                    <div class="thead">
                        <div class="name">{{$t('message.mining.selectNFT.name')}}</div>
                        <div class="id">{{$t('message.mining.selectNFT.id')}}</div>
                        <div class="HashRate">{{$t('message.mining.selectNFT.hashRate')}}</div>
                        <div class="Operate">{{$t('message.mining.selectNFT.operate')}}</div>
                    </div>
                </thead>
                <div class="tbody">
                    <div class="item" v-for="item in 6" :key="item">
                        <div class="name">
                            <img src="https://cyberpop.mypinata.cloud/ipfs/QmPx82XhgdmkgEy1C8t2zivFZfySn7krCv3wSdfLeKwZfS" alt="">
                            <span>Kakulupia</span>
                        </div>
                        <div class="id">{{ item }}</div>
                        <div class="HashRate">HashRate</div>
                        <div class="Operate">
                            <div class="stak">{{$t('message.mining.STAKE')}}</div>
                        </div>
                    </div>
                </div>
            </table>
            <div class="nothing" v-else>
            <!-- <div class="nothing" v-if="true"> -->
                <img src="@/assets/nwAssets/nothing.svg" alt="">
                <div>{{$t('message.mining.selectNFT.nodata')}}-</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted,onUnmounted, computed, getCurrentInstance, watch, VueElement } from 'vue'
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
            height: 408px;
            padding: 24px 12px 34px 24px;
            color: #FFFFFF;
            background: linear-gradient(221deg, rgba(132, 120, 255, .8) 0%, rgba(12, 9, 17, .8) 100%),
                        linear-gradient(81deg, rgba(45, 222, 211, .6) 0%, rgba(12, 9, 17, 1) 100%);
            box-shadow: inset 0px 4px 0px 1px #5A5685;
            .title{
                font-size: 28px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                font-weight: normal;
                line-height: 40px;
                margin-bottom: 24px;
            }
            table{
                // text-align: left;
                width: 100%;
                height: 40px;
                font-size: 14px;
                font-family: AlibabaPuHuiTi_2_85_Bold;
                font-weight: normal;
                color: #FFFFFF;
                .thead{
                    display: flex;
                    line-height: 40px;
                    margin-bottom: 10px;
                    div:last-child{
                        padding-left: 15px;
                    }
                }
                .tbody{
                    line-height: 1.56vw;
                    width: 100%;
                    height: 234px;
                    overflow-y: scroll;
                    .item{
                        display: flex;
                        margin-right: 20px;
                        margin-bottom: 20px;
                        position: relative;
                    }
                    .item:not(:last-child)::after{
                        content: " ";
                        position: absolute;
                        width: 100%;
                        height: 1px;
                        bottom: -10px;
                        background: rgba(182, 156, 199, 0.17);
                    }
                }
                .tbody::-webkit-scrollbar{
                    width: 4px;
                    background: #fff;
                }
                .tbody::-webkit-scrollbar-track-piece{
                    background:#f8f9fa;
                }
                .tbody::-webkit-scrollbar-thumb{
                    background: #DE2DCF;
                }
                .name{
                    width: 128px;
                    display: flex;
                    align-items: center;
                    img{
                        margin-right: 5px;
                        width: 44px;
                    }
                }
                .id{
                    width: 49px;
                    display: flex;
                    align-items: center;
                }
                .HashRate{
                    width: 66px;
                    display: flex;
                    align-items: center;
                }
                .Operate{
                    display: flex;
                    align-items: center;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    font-weight: bold;
                    .stak{
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwStaking/confirm_button.png');
                        background-size: 100% 100%;
                        width: 72px;
                        line-height: 24px;
                        text-align: center;
                    }
                }
            }
            .nothing{
                text-align: center;
                font-size: 16px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                font-weight: normal;
                color: #C4C4C4;
                margin-top: 60px;
                line-height: 40px;
                img{
                    width: 159px;
                    height: 172px;
                    margin-bottom: 20px;
                }
            }
            .btn{
                .CONFIRM{    
                    width: 13.9vw;
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
</style>
