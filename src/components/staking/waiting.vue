<template>
    <div class="container">
        <div class="mask" :class="isShowWaiting && (waitingAni ? 'bounceShow' : 'bounceHide')">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <img class="close" src="@/assets/nwhome/close.svg" alt=""  @click="closeDialog">
            <div class="content">
                <div class="title">{{loadInfo.title }}</div>
                <div class="subtitle">{{loadInfo.subtitle}}</div>
                <div class="desc">{{loadInfo.desc}}</div>
                <div class="icon">
                    <img class="load-icon" src="@/assets/nwhomePhone/loading-phone.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed, readonly, ref } from 'vue'
import store from '@/store'

const props: any = defineProps({
    isShowWaiting: Boolean,
    loadInfo: {
        type: Object,
        default: {
            title: 'WAITING FOR CONFIRMATION',
            subtitle: '',
            desc: 'Please confirm this transaction in your wallet'
        }
    }
});

const waitingAni = computed(() => store?.state.staking?.waitingAni);

const closeDialog = () => {
    store.dispatch('staking/waitingChangeAni', false);
    setTimeout(() => {
        store.dispatch('staking/waitingShow', false);
    }, 300);
}

onMounted(()=>{
    console.log(props.loadInfo)
})
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
    display: grid; 
    justify-content: center;
    .mask{
        position: relative;
        width: 31.51vw;
        height: 19.01vw;
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
            position: relative;
            color: #FFFFFF;
            line-height: 2.08vw;
            .title{
                font-size: 1.45vw;
                font-family: AlibabaPuHuiTi_2_115_Black;
            }
            .subtitle{
                margin-bottom: 1vw;
                font-size: 1.04vw;
                font-family: AlibabaPuHuiTi_2_85_Bold;
                color: #99FFEB;
            }
            .desc{
                font-size: .83vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
            }
            .icon{
                margin-top: 2.23vw;
                text-align: center;
                img{
                    width: 3.125vw;
                    height: 3.125vw;
                    animation: loadingAni .6s linear infinite;
                }
            }
        }
    }
}

@media screen {
    @media (max-width: 599px) {
        .container{
            .mask{
                width: calc(100vw - 61px);
                max-width: 314px;
                height: 230px;
                padding: 20px;
                box-shadow: -1.51vw .83vw .2vw .05vw rgba(0, 0, 0, 0.4);
                border: 3px solid;
                border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 3 3;
                .close{
                    width: 26px;
                }
                .content{
                    line-height: 26px;
                    .title{
                        font-size: 18px;
                    }
                    .subtitle{
                        margin-bottom: 9px;
                        font-size: 16px;
                    }
                    .desc{
                        font-size: 14px;
                    }
                    .icon{
                        margin-top: 8px;
                        text-align: center;
                        img{
                            width: 50px;
                            height: 50px;
                        }
                    }
                }
            }
        }
    }
}
</style>
