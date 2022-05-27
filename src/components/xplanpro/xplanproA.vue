<template>
    <div class="xplanpro" :class="xplanActive && (xplanAni ? 'bounceShow' : 'bounceHide') ">
        <div class="wrap">
            <div class="close">
                <img src="@/assets/nwhome/close.svg" alt="" @click="closexplan()">
                <div class="closebg"></div>
            </div>
            <div class="title1">
                {{$t('message.home.xplan_title1')}}
            </div>
            <div class="title2">
                {{$t('message.home.xplan_title2')}}
            </div>
            <div class="title3">
                {{$t('message.home.xplan_title3')}}
                <div class="desc">
                    '{{$t('message.home.xplan_desc1')}}<br/>
        <span></span>{{$t('message.home.xplan_desc2')}}'
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, readonly, ref } from 'vue'
import store from '@/store'

const xplanAni = computed(() => store?.state.user?.xplanAni);
const xplanActive = computed(() => store?.state.user?.xplanActive);


const closexplan = () => {
    store.dispatch('user/xplanChangeAni',false);
}


</script>

<style lang="less" scoped>
.xplanpro{
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.4);
    .wrap{ 
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 59.68vw;
        height: 33.12vw;
        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/xplanpro2-home.png');
        background-size: 100% 100%;
        overflow: hidden;
        .close{
            position: absolute;
            top: 2vw;
            right: 0vw;
            width: 10vw;
            height: 10vw;
            img{
                z-index: 2;
                width: 2.4vw;
                height: 2.4vw;
                position: absolute;
                top: 1.5vw;
                right: 1.8vw;
            }
            div{
                width: 100%;
                height: 100%;
                position: absolute;
                top: -2vw;
                right: -2.1vw;
            }
            img:hover + .closebg{
                background-image: url('../../assets/nwhome/closeBg.svg');
                background-position: center center;
                background-repeat: no-repeat;
                background-size: 100% 100%;
            }
        }
        .title1{
            width: 28.12vw;
            height: 2.91vw;
            margin-top: 9.73vw;
            margin-left: 5.2vw;
            font-size: .93vw;
            font-family: AlibabaPuHuiTi_2_105_Heavy;
            color: #04FFA2;
            line-height: 1.45vw;
        }
        .title2{
            width: 26.6vw;
            height: 2.18vw;
            margin-top: 1.4vw;
            margin-left: 5.6vw;
            font-size: .78vw;
            font-family: AlibabaPuHuiTi_2_55_Regular;
            color: #FFFFFF;
            line-height: 1.04vw;
        }
        .title3{
            // width: 28.12vw;
            width: 26.6vw;
            margin: 1.25vw 0 .5vw 5.6vw;
            font-size: .93vw;
            font-family: AlibabaPuHuiTi_2_105_Heavy;
            color: #FFFFFF;
            line-height: 1.45vw;
            .desc{
                width: 100%;
                height: 6.56vw;
                font-size: .78vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #C8BBFF;
                line-height: 1.04vw;
                span{
                    display: inline-block;
                    width: 1.4vw;
                }
            }
        }
    }
}
@media screen {
    @media (max-width: 1235px){
        .wrap{
            width: 68vw !important;
            height: 37.77vw !important;
            .title1{
                width: 32vw !important;
                margin-top: 10.2vw !important;
            }
            .title2{
                width: 30vw !important;
                margin-top: 2.6vw !important;
            }
            .title3{
                width: 30vw !important;
            }
        }
    }
}
</style>
