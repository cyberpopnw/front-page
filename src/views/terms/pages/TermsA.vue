<template>
    <header-a path="/terms" :type="0"></header-a>
    <div class="termas">
        <div class="termas-wrap">
            <div class="title">{{$t('message.terms.title')}}</div>
            <ul>
                <li>
                    <div class="subtitle">1. {{$t('message.terms.subt1')}}</div>
                    <div class="content">
                        {{$t('message.terms.subt1_txt1')}}
                    </div>
                </li>
                <li>
                    <div class="subtitle">2. {{$t('message.terms.subt2')}}</div>
                    <div class="content">
                        {{$t('message.terms.subt2_txt1')}}
                    </div>
                </li>
                <li>
                    <div class="subtitle">3. {{$t('message.terms.subt3')}}</div>
                    <div class="content">
                        {{$t('message.terms.subt3_txt1')}}
                    </div>
                </li>
                <li>
                    <div class="subtitle">4. {{$t('message.terms.subt4')}}</div>
                    <div class="content">
                        {{$t('message.terms.subt4_txt1')}}<br/>

                        {{$t('message.terms.subt4_txt2')}}<br/>
                        {{$t('message.terms.subt4_txt3')}}<br/>
                        {{$t('message.terms.subt4_txt4')}}<br/>
                        {{$t('message.terms.subt4_txt5')}}<br/>
                        {{$t('message.terms.subt4_txt6')}}<br/>
                        {{$t('message.terms.subt4_txt7')}}admin@cyberpop.online.<br/>
                    </div>
                    <div class="content">
                        {{$t('message.terms.subt4_txt8')}}<br/>
                        {{$t('message.terms.subt4_txt9')}}<br/>
                        {{$t('message.terms.subt4_txt10')}}
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <footer-a></footer-a>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
const router = useRouter()




onMounted(() => {
    window.scrollTo(0,0);
    store.dispatch('user/showDialog',{show: false, info: {}});// close message dialog
    store.dispatch('user/metaChange',false);
})

</script>
<style lang="less" scoped>
   @keyframes submitAnimation {
        0%{
            left: -13vw;
        }
        100%{
            left: -1.4vw;
        }
    }
    @keyframes stopSubmitAnimation {
        0%{
            left: -1.4vw;
        }
        100%{
            left: -13vw;
        }
    }
    a {
    text-decoration: none;
    }
    
    .router-link-active {
    text-decoration: none;
    }
    .home{
        position: relative;
        width: 100%;
        header{
            z-index: 9;
            position: fixed;
            top: 0;
            width: 100%;
            height: 5.5vw;
            opacity: .86;
            color: #fff;
            background-color: #000000;
            .content{
                height: 100%;
                margin: 0 2.91vw 0 0vw;
                display: flex;
                justify-content: space-between;
                position: relative;
                .logo{
                    width: 20.20vw;
                    height: 100%;
                    overflow: hidden;
                    img{
                        width: 100.2%;
                        height: 100.2%;
                        border: none;
                        margin: -.1vw;
                    }
                    img[src=""],img:not([src]){
                        opacity:0;
                    }
                }
                .user{
                    display: flex;
                    .xplan{
                        width: 2.39vw;
                        height: 2.34vw;
                        margin-top: 1.2vw;
                        margin-right: 4px;
                        cursor: pointer;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .login_in{
                        position: relative;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 10.3vw;
                        height: 2.3vw;
                        margin-top: 1.1vw;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-loginBg.svg');
                        background-size: 102% 100%;
                        background-position: -.1vw top;
                        overflow: hidden;
                        cursor: pointer;
                        .txt{
                            z-index: 2;
                            color: #000000;
                            font-size: 1vw;
                            transform: scale(.8);
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            // line-height: 2.3vw;
                            font-weight: bold;
                            white-space: nowrap;
                        }
                        .mask{
                            // z-index: -1;
                            position: absolute;
                            top: 0;
                            left: -13vw;
                            width: 12vw;
                            height: 100%;
                            background-color: #EDFF00;
                            transform: skewX(-38deg);
                        }
                        .submitAnimation{
                            animation: submitAnimation 0.15s linear;
                            animation-fill-mode: forwards;
                        }
                        .stopSubmitAnimation{
                            animation: stopSubmitAnimation 0.15s linear;
                            animation-fill-mode: forwards;
                        }
                    }
                    .logged_in{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                        // width: 12.13vw;
                        height: 2.3vw;
                        margin-top: 1.3vw;
                        .wallet{
                            width: 1.4vw;
                            height: .98vw;
                        }
                        .idtxt{
                            // width: 8vw;
                            margin: 0 .6vw;
                            height: 1.56vw;
                            font-size: .98vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #C8C4C4;
                            line-height: 1.56vw;
                            text-align: center;
                        }
                        .portrait{
                            width: 2.6vw;
                            height: 2.6vw;
                        }
                    }  
                    .language{
                        position: relative;
                        margin-top: 1.46vw;
                        margin-right: 1.4vw;
                        img{
                            width: 1.56vw;
                            height: 1.56vw;
                        }
                        ul{
                            display: none;
                            position: absolute;
                            top: 3vw;
                            left: -4.22vw;
                            width: 10vw;
                            height: 8vw;
                            padding: 1vw 1.3vw;
                            border-radius: .2vw;
                            background-color: #000000;
                            text-align: left;
                            li{
                                color: #8F8F8F;
                                font-size: .72vw;
                                font-family: AlibabaPuHuiTi_2_55_Regular;
                                font-weight: 400;
                                line-height: 2vw;
                            }
                            li:hover{
                                color: #fff;
                            }
                            li.active{
                                color: #fff;
                                font-weight: 600;
                            }
                        }
                        ul::before{
                            position: absolute;
                            top: -1.4vw;
                            left: 4.3vw;
                            content: '';
                            display: inline-block;
                            width: 0;
                            height: 0;
                            border-width: .7vw;
                            border-style: solid;
                            border-color: transparent transparent #000 transparent;
                        }
                        .showLang{
                            display: block;
                        }
                    }
                }
                .menu{
                    position: absolute;
                    top: 0;
                    left: 23.5vw;
                    width: 43.6vw;
                    height: 100%;
                    ul{
                        width: 100%;
                        height: 100%;
                    }
                    ul > li{
                        float: left;
                        width: 8.3vw;
                        height: 100%;
                        padding-top: 1.6vw;
                        padding-right: .8vw;
                        text-align: center;
                        font-size: 1.04vw;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        color: #FFFFFF;
                        line-height: 1.45vw;
                        cursor: pointer;
                        transform: skew(-18deg);
                        span{
                            display: inline-block;
                            transform: skew(18deg);
                        }
                    }
                    li:nth-child(3){
                        width: 9.8vw;
                    }
                    li:last-child > span{
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                    }
                    .active{
                        // background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/header-titleBg.svg');
                        // background-repeat: no-repeat;
                        // background-size: 180% 120%;
                        // background-position: -3vw bottom;
                        background: linear-gradient(180deg, rgba(0,0,0,0),rgba(255, 24, 255, 0) 65%, rgba(255, 24, 255, 0.62) 100%);
                    }  
                }
            }
        }
    }
    .doc_menu{
        z-index: 9;
        position: fixed;
        top: 5.2vw;
        left: 49vw;
        .wrap{
            position: relative;
            width: 8.3vw;
            // height: 7.96vw;
            height: 5.1vw;
            margin-top: .6vw;
            background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
            border: .15vw solid;
            border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 3 3;
            clip-path: polygon(0 0, 100% 0, 100% 82%, 88% 100%, 0 100%);
            .cover{
                position: absolute;
                top: 0vw;
                width: 100%;
                height: 100%;
                background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
                clip-path: polygon(0 0, 100% 0, 100% 82%, 88% 100%, 0 100%);
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
            a{
                display: inline-block;
                text-decoration: none;
                position: absolute;
                right: 0;
                width: 7vw;
                height: 1.3vw;
                padding-right: .8vw;
                margin-right: .49vw;
                font-size: .93vw;
                font-family: AlibabaPuHuiTi_2_75_SemiBold;
                text-align: right;
                color: #fff;
                white-space: nowrap;
            }
            a:nth-child(3){
                top: .8vw;
                cursor: pointer;
            }
            a:nth-child(4){
                top: 2.4vw;
                padding-top: .5vw;
                cursor: pointer;
            }
            a:nth-child(5){
                top: 4.6vw;
                padding-top: .5vw;
                cursor: pointer;
            }
            a + a{
                border-top: 2px solid #534968;
            }
            a:hover{
                color: rgb(255, 24, 255);
            }
        }
    }
    .logged_menu{
        z-index: 9;
        position: fixed;
        top: 3.8vw;
        right: 1.8vw;
        .wrap{
            width: 9.27vw;
            height: 5.1vw;
            margin-top: 2vw;
            background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
            border: .15vw solid;
            border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 3 3;
            clip-path: polygon(0 0, 100% 0, 100% 75%, 93% 100%, 0 100%);

            .cover{
                position: absolute;
                top: 0vw;
                width: 100%;
                height: 100%;
                background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
                clip-path: polygon(0 0, 100% 0, 100% 75%, 93% 100%, 0 100%);
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
            div:nth-child(3){
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                width: 8.43vw;
                height: 1.3vw;
                padding-right: .8vw;
                margin: 1vw auto .4vw;
                font-size: .93vw;
                font-family: AlibabaPuHuiTi_2_75_SemiBold;
                color: #FFFFFF;
                line-height: .4vw;
                text-align: right;
                border-bottom: .15vw solid #534968;
                cursor: pointer;
            }
            div:nth-child(4){
                position: absolute;
                right: 1.1vw;
                bottom: .9vw;
                width: 8.43vw;
                height: 1.3vw;
                font-size: .93vw;
                font-family: AlibabaPuHuiTi_2_75_SemiBold;
                color: rgb(255, 24, 255);
                line-height: 1.3vw;
                text-align: right;
                cursor: pointer;
            }
        }
    }
    .termas{
        padding-top: 5.5vw;
        background-color: #000000;
        color: #fff;
        .termas-wrap{
            padding: 2.7vw 19.375vw 4.11vw;
            .title{
                line-height: 2.5vw;
                font-size: 1.77vw;
                color: #FFFFFF;
                font-family: AlibabaPuHuiTi_2_115_Black;
                text-align: center;
            }
            .subtitle{
                margin-bottom: .9vw;
                font-size: .88vw;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 2.5vw;
            }
            .content{
                margin-bottom: 1.2vw;
                font-size: .88vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                line-height: 1.4vw;
                color: #FFFFFF;
            }
        }
    }
    .footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 5.54vw;
        // padding-left: 2.23vw;
        padding-right: 6vw;
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
            // width: 12vw;
            height: 5.54vw;
        }
        .policy{
            margin-left: 22vw;
            margin-right: 3vw;
            white-space: nowrap;
        }
        .policy > a:hover{
            color: #04FF55;
        }
        .terms{
            white-space: nowrap;
        }
        .terms > a:hover{
            color: #04FF55;
        }
        .desc{
            margin-left: 4vw;
        }
        .icon{
            margin-left: 8vw;
            white-space: nowrap;
            img{
                width: 2.13vw;
                height: 2.13vw;
                margin-left: 1.14vw;
                margin-top: .5vw;
            }
            img:hover{
                transform: scale(1.2);
            }
        }
    }
</style>
