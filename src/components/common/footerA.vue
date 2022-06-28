<template>
    <div class="footer">
        <img class="logo" :src="'https://d2cimmz3cflrbm.cloudfront.net/nwAssets/logo.png'" alt="">
        <!-- <img class="logo" v-show="logoFlag" :src="logoHSrcG" @mouseleave="logoFlag = false" alt=""> -->
        <div class="policy"><router-link to="/privacy">{{$t('message.common.footer_policy')}}</router-link></div>
        <div class="terms"><router-link to="/terms">{{$t('message.common.footer_terms')}}</router-link></div>
        <div class="icon">
            <a href="https://medium.com/@Cyberpopmetaverse" target="view_window">
                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/medium_1.png" alt="">
            </a>
            <a href="https://t.me/cyberpopnw" target="view_window">
                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/medium.svg" alt="">
            </a>
            <a href="https://discord.gg/y9b8p5C9TR" target="view_window">
                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/discord.svg" alt="" class="navLogo2">
            </a>
            <a href="https://twitter.com/cyberpopnw" target="view_window">
                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/twitter-footer.svg" alt="">
            </a>
        </div>
        <div class="line"></div>
        <div class="email_box">
            <div class="title">{{$t('message.common.footer_email_title')}}</div>
            <div class="des">{{$t('message.common.footer_email_desc')}}</div>
            <div class="email_botton" @click="openEmail">
                <div class="border"></div>
                <div>{{$t('message.common.footer_email_title')}}</div><img src="https://d2cimmz3cflrbm.cloudfront.net/nwAssets/hand.png" alt="">
            </div>
        </div>
    </div>
    <div class="bottom">
        <div class="desc">{{$t('message.common.footer_desc')}}</div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, computed, readonly, ref } from 'vue'
import store from '@/store'
import Web3 from '@/tools/web3' 
import {  useRouter } from 'vue-router'

const openEmail = () => {
    window.location.href='mailto:business@cyberpop.online'
}

onMounted(() => {

})
</script>

<style lang="less" scoped>
    a{
        text-decoration: none; /*  */
        color: #fff;    /*  */
    }
    .footer{
        display: flex;
        // justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 8.44vw;
        // padding-right: 6vw;
        // padding-left: 18.9vw;
        font-size: 1.09vw;
        font-family: AlibabaPuHuiTi_2_55_Regular;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 1.82vw;
        // background-color: #000000;
        background-color: #121122;
        a{
            color: #ffffff;
            text-decoration: none;
        }
        .logo{
            width: 14.84vw;
            height: 3.125vw;
            margin-right: 6.875vw;
            margin-left: 5.729vw;
        }
        .policy{
            width: 7.7vw;
            // margin-left: 22vw;
            margin-right: 3.64vw;
            white-space: nowrap;
            transition: all .2s ease-in-out;
        }
        .policy > a:hover{
            color: #04FF55;
        }
        .terms{
            width: 8.85vw;
            margin-right: 3.64vw;
            white-space: nowrap;
        }
        .terms > a:hover{
            color: #04FF55;
        }
        .icon{
            // margin-left: 8vw;
            margin-right: 4.25vw;
            white-space: nowrap;

            img{
                width: 2.13vw;
                height: 2.13vw;
                margin-left: 1.14vw;
                margin-top: .5vw;
                transition: all .2s ease-in-out;
            }
            img:hover{
                transform: scale(1.2);
            }
        }
        .line{
            width: 1px;
            height: 4.27vw;
            background: #FFFFFF;
            opacity: 0.5;
            margin-right: 5.81vw;
        }
        .email_box{
            padding-bottom: 0.312vw;
            .title{
                font-size: 1.09vw;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 1.61vw;
                margin-bottom: 0.3vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;

            }
            .des{
                font-size: 0.93vw;
                font-weight: 400;
                color: #918d8d;
                line-height: 1.40vw;
                margin-bottom: 0.5vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
            }
            .email_botton{
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: .3vw .8vw;
                transition: all .2s ease-in-out;
                cursor: pointer;
                img{
                    width: 1.25vw;
                    height: 0.93vw;
                    margin-left: .5vw;
                }
                .border{
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    border: 1px solid #FFFFFF;
                    opacity: .7;
                }
            }
            .email_botton:hover .border{
                opacity: 1;
                filter: drop-shadow(0 0 .1rem #CB1FFF) drop-shadow(0 0 0.1rem #CB1FFF)
            }
        }
    }
    .bottom{
        height: 3.59vw;
        border-top: 1px solid #544E96;
        background: #121122;
        box-shadow: inset 0px 1px 3px 0px rgba(49, 41, 41, 0.5);
        display: flex;
        // justify-content: space-between;
        align-items: center;
        justify-content: center;
        .desc{
            color: #fff;
            font-size: 1.09vw;
            font-weight: 400;
        }
}
</style>
