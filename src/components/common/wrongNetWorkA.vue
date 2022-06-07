<template>
    <div class="warp" v-show="isShowTips">
        <div class="container" @click="close">
        </div>
        <div class="mask" :class="isShowTips && (xplanAni ? 'bounceShow' : 'bounceHide') ">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <img class="close" src="@/assets/nwhome/close.svg" alt="" @click="close">
            <div class="content">
                <div class="title">{{ $t('message.common.metamask.wrongNetwork') }}</div>
                <div class="text">{{ $t('message.common.metamask.wrongContent') }}</div>
            </div>
            <div class="btns">
                <span class="btn" @click="changeChain(56)">{{ $t('message.common.metamask.switchBSC') }}</span>
                <span class="btn" @click="changeChain(43113)">{{ $t('message.common.metamask.switchFuji') }}</span> 
                <span class="btn" @click="changeChain(80001)">{{ $t('message.common.metamask.switchMumbai') }}</span>    
                <span class="btn" @click="changeChain(85)">{{ $t('message.common.metamask.switchGate') }}</span>  
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, getCurrentInstance } from 'vue'
import store from '@/store/index'
import { useI18n } from 'vue-i18n';
import NFT from '@/tools/web3' 
const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;
const xplanAni = computed(() => store?.state.user?.xplanAni);
const emit = defineEmits(['changeSwitch']);
const props = defineProps({
    isShowTips: {
        type: Boolean,
        default: false,
    }
})

const close = () => {
    store.dispatch('user/xplanChangeAni', false);
    setTimeout(() => {
        emit('changeSwitch')
    }, 300);
}

const changeChain = async (value?: any) => {
    let a: any = await NFT.addChain(value)
    if(a){
        store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}})
        close()
    }else{
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.tran_stop')}})
    }
}


onMounted(() => {

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
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left: 0;
        z-index: 187;
        top: 0;
        .container{
            position: fixed;
            left: 0;
            top: 0;
            z-index: 187;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .5);
            color: #fff;
        }
        .mask{
            position: relative;
            // width: 31.51vw;
            width: 36vw;
            height: 16.72vw;
            padding: 2.5vw;
            z-index: 999;
            color: #fff;
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
                }
                .icon{
                    display: flex;
                    margin: .46vw 0;
                    img{
                        width: 2.81vw;
                        height: 3.28vw;
                        margin-right: .46vw;
                    }
                    .subtitle{
                        height: 3.28vw;
                        font-size: 1.35vw;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #E6E8EC;
                        line-height: 3.28vw;
                    }
                }
                .text{
                    font-size: 0.83vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: normal;
                    line-height: 1vw;
                    margin-top: 0.63vw;
                }
            }
            .btns{
                width: 100%;
                max-width: 31vw;
                position: absolute;
                bottom: 3vw;
                right: 2vw;
                display: flex;
                justify-content: flex-end;
                .btn{
                    // padding: 0.73vw 1.75vw;
                    padding: .46vw 1.04vw;
                    margin-left: .72vw;
                    font-size: 1.04vw;
                    color: #FFFFFF;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    line-height: 1.04vw;
                    border: 1px solid #FFFFFF;
                    -webkit-background-clip: text;
                    transition: all 0.2s ease;
                    cursor: pointer;
                }
                // .btn:first-child{
                //     background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwAssets/withBorder.png');
                //     background-size: 100% 100%;
                //     margin-right: 1.25vw;
                // }
                // .btn:nth-child(2){
                //     background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwAssets/withBorder.png');
                //     background-size: 100% 100%;
                //     margin-right: 1.25vw;
                // }
                // .btn:nth-child(3){
                //     background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwAssets/withBorder.png');
                //     background-size: 100% 100%;
                //     margin-right: 1.25vw;
                // }
                // .btn:last-child{
                //     background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/purchase.png');
                //     background-size: 100% 100%;
                // }
                .btn:hover{
                    // filter: drop-shadow(0 0 0.4vw #fff);
                    color: rgb(255, 24, 255);
                    border: 1px solid rgb(255, 24, 255);
                    filter: drop-shadow(0 0 1px rgb(255, 24, 255));
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
