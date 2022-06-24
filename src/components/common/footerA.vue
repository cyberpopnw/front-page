<template>
    <div class="footer">
        <img class="logo" :src="'https://d2cimmz3cflrbm.cloudfront.net/nwAssets/logo.png'" alt="">
        <!-- <img class="logo" v-show="logoFlag" :src="logoHSrcG" @mouseleave="logoFlag = false" alt=""> -->
        <div class="policy"><router-link to="/privacy">{{$t('message.common.footer_policy')}}</router-link></div>
        <div class="terms"><router-link to="/terms">{{$t('message.common.footer_terms')}}</router-link></div>
        <div class="icon">
            <a href="https://medium.com/@Cyberpopmetaverse" target="view_window">
                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/medium_1.svg" alt="">
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
            <div class="title">Become a partner</div>
            <div class="des">Simple, rewarding, collaborative.</div>
            <div class="email_botton"><a href="mailto:business@cyberpop.online">Become a partner</a><img src="https://d2cimmz3cflrbm.cloudfront.net/nwAssets/hand.png" alt=""></div>
        </div>
    </div>
    <div class="bottom">
            <div class="desc">{{$t('message.common.footer_desc')}}</div>
            <div class="email_botton">
                <div class="border"></div>
                <div class="content">
                    <a href="mailto:business@cyberpop.online">Become a partner</a> <img src="https://d2cimmz3cflrbm.cloudfront.net/nwAssets/hand.png" alt="">
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, computed, readonly, ref } from 'vue'
import store from '@/store'
import Web3 from '@/tools/web3' 
import {  useRouter } from 'vue-router'



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
            // margin-left: 22vw;
            margin-right: 3.64vw;
            white-space: nowrap;
            transition: all .2s ease-in-out;
        }
        .policy > a:hover{
            color: #04FF55;
        }
        .terms{
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
                width: 14.42vw;
                height: 2.55vw;
                border: 1px solid #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all .2s ease-in-out;
                cursor: pointer;
                img{
                    width: 1.25vw;
                    height: 0.93vw;
                    margin-left: 0.5vw;
                }
            }
            .email_botton:hover{
                opacity: .7;
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
            margin-left: 4vw;
            color: #fff;
            font-size: 1.09vw;
            font-weight: 400;
            color: #FFFFFF;
        }
        .email_botton{
            margin-left: 14.32vw;
            width: 14.42vw;
            height: 2.55vw;
            position: absolute;
            right: 6.72vw;
            cursor: pointer;
            transition: all .2s ease-in-out;
            .border{
                border: 0.104vw solid #CB1FFF;
                filter: blur(2px);
                width: 100%;
                height: 100%;
            }
            .content{
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.09vw;
                color: #fff;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                img{
                    width: 1.25vw;
                    height: 0.93vw;
                    margin-left: 0.5vw;
                    cursor: pointer;
                }
            }
        }
        .email_botton:hover{
            opacity: .7;
        }
}
</style>
