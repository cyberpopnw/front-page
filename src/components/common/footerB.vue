<template>
    <div class="footer">
        <div class="footer-wrap">
            <img class="logo" :src="'https://d2cimmz3cflrbm.cloudfront.net/nwAssets/logo.png'" alt="">
            <div class="email_box">
                <div class="title">{{$t('message.common.footer_email_title')}}</div>
                <div class="des">{{$t('message.common.footer_email_desc')}}</div>
                <div class="email_botton flex_center" @click="openEmail">
                    <!-- <a href="mailto:business@cyberpop.online">{{$t('message.common.footer_email_title')}}</a><img src="https://d2cimmz3cflrbm.cloudfront.net/nwAssets/hand.png" alt=""> -->
                    <div>{{$t('message.common.footer_email_title')}}</div><img src="https://d2cimmz3cflrbm.cloudfront.net/nwAssets/hand.png" alt="">
                </div>
            </div>
            <div class="clause">
                <div class="policy"><router-link to="/privacy">{{$t('message.common.footer_policy')}}</router-link></div>
                <div class="terms"><router-link to="/terms">{{$t('message.common.footer_terms')}}</router-link></div>
            </div>
            <div class="icon flex_centent_center">
                <a href="https://medium.com/@Cyberpopmetaverse" target="view_window">
                    <img class="first" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/medium_1.png" alt="">
                </a>
                <a href="https://t.me/cyberpopnw" target="view_window">
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/medium-footer.svg" alt="">
                </a>
                <a href="https://discord.gg/y9b8p5C9TR" target="view_window">
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/discord-footer.svg" alt="" class="navLogo2">
                </a>
                <a href="https://twitter.com/cyberpopnw" target="view_window">
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/twitter-footer0.svg" alt="">
                </a>
            </div>
            <div class="desc">{{$t('message.common.footer_desc')}}</div>
        </div>
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
    .footer{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 400px;
        background-color: #121122;
        // background-color: #000000;
        align-items: center;
        overflow: hidden;
        a{
            color: #ffffff;
            text-decoration: none;
        }
       .footer-wrap{
           position: absolute;
           width: 100%;
           height: 100%;
           text-align: center;
           margin-top: 30px;
            .logo{
                width: 181px;
                height: 49px;
                margin-top: 10px;
                margin-bottom: 15px;
            }
            .email_box{
                margin-bottom: 26px;
                .title{
                    font-size: 14px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 21px;
                    margin-bottom: 4px;
                }
                .des{
                    color: #918d8d;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 18px;
                    margin-bottom: 22px;
                }
                .email_botton{
                    width: 220px;
                    height: 42px;
                    border: 1px solid #04FF55;
                    margin: 0 auto;
                    font-size: 14px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 21px;
                    img{
                        width: 20px;
                        height: 15px;
                        margin-left: 11px;
                    }
                }
                .email_botton:hover{
                    opacity: .7;
                }
            }
            .clause{
                display: flex;
                justify-content: center;
                margin-bottom: 27px;
                font-size: 14px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 21px;
                .policy{
                    width: 101px;
                    margin-right: 14px;
                    white-space: nowrap;
                }
                .policy > a:hover{
                    color: #04FF55;
                }
                .terms{
                    width: 145px;
                    white-space: nowrap;
                }
                .terms > a:hover{
                    color: #04FF55;
                }
            }
            .icon{
                width: 100%;
                margin-bottom: 22px;
                img{
                    width: 41px;
                    height: 41px;
                }
                img:not(.first){
                    margin-left: 31px;
                }
                img:hover{
                    transform: scale(1.1);
                }
            }
            .desc{
                height: 13px;
                font-size: 8px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 13px;
            }
       }
    }
</style>
