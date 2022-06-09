<template>
    <div class="metamask" :class="metaMaskActive && (metaAni ? 'bounceShow' : 'bounceHide') ">
        <div class="mask">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <img class="close" src="@/assets/nwhome/close.svg" alt="" v-if="isInstall" @click="store.dispatch('wallet/metaChangeAni',false);">
            <div class="content">
                <div class="title" v-if="!isInstall">{{$t('message.common.metamask.title')}}</div>
                <div class="title" v-if="isInstall">{{$t('message.common.metamask.title1')}}</div>
                <div class="icon">
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/metaMask.svg" alt="">
                    <div class="subtitle">{{$t('message.common.metamask.logoText')}}</div>
                </div>
                <div class="desc" v-if="!isInstall">{{$t('message.common.metamask.descBef')}}<strong>{{$t('message.common.metamask.logoText')}}</strong>{{$t('message.common.metamask.descNAft')}}</div>
                <div class="desc" v-if="isInstall">{{$t('message.common.metamask.descIns')}}</div>
                <div class="btn" v-if="!isInstall">
                    <div class="cancel" @click="closePopUp()">
                        <div>{{$t('message.common.metamask.cancel')}}</div>
                        <div class="bg"></div>
                    </div>
                    <div class="open"><a @click="closePopUp()" href="https://metamask.io/" target="view_window">{{$t('message.common.metamask.open')}}</a></div>
                </div>
                <div class="loading" v-else>
                    <img src="@/assets/nwhomePhone/loading-phone.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed, readonly, ref } from 'vue'
import store from '@/store'


const isInstall = computed(() => store?.state.wallet?.isInstall);
const metaMaskActive = computed(() => store?.state.wallet?.metaMaskActive);
const metaAni = computed(() => store?.state.wallet?.metaAni);

const closePopUp = () => {
    store.dispatch('wallet/metaChangeAni',false);
} 

</script>

<style lang="less" scoped>
@keyframes loadingAni {
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
}
.metamask{
    z-index: 13;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.4);
    .mask{
        position: absolute;
        top: 3.8vw;
        left: 0;
        right: 0;
        bottom: 0;
        width: 31.51vw;
        height: 22vw;
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
            width: 1.8vw;
            height: 1.8vw;
        }
        .content{
            position: absolute;
            .title{
                height: 2.08vw;
                font-size: 1.45vw;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                line-height: 2.08vw;
                letter-spacing: .05vw;
            }
            .icon{
                display: flex;
                margin: .46vw 0 .46vw 0;
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
            .desc{
                width: 26.19vw;
                height: 2.29vw;
                font-size: .83vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: 1.04vw;
                letter-spacing: .02vw;
                strong{
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                }
            }
            .btn{
                display: flex;
                justify-content: space-between;
                width: 23.68vw;
                height: 2.91vw;
                margin: 2.91vw 0 0 2.91vw;
                font-size: 1.04vw;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                line-height: 2.91vw;
                text-align: center;
                .cancel{
                    position: relative;
                    width: 8.54vw;
                    height: 100%;
                    cursor: pointer;
                    .bg{
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/meta-cancle.svg');
                        background-size: 100% 100%; 
                        &:hover{
                            filter: drop-shadow(0 0 .3vw #ffffff);
                        }
                    }
                }
                .open{
                    width: 13.9vw;
                    height: 100%;
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/meta-open.svg');
                    background-size: 100% 100%;
                    cursor: pointer;
                    a{
                        color: #ffffff;
                        text-decoration: none;
                    }
                    &:hover{
                        filter: drop-shadow(0 0 .3vw #d530d0);
                    }
                }
            }
            .loading{
                margin-top: 1.3vw;
                text-align: center;
                img{
                    width: 4vw;
                    height: 4vw;
                    animation: loadingAni .6s linear infinite;
                }
            }
        }
    }
}
</style>
