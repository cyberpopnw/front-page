<template>
    <header-b path="/mining" :type="1"></header-b>
    <div class="section">
        <div class="title">{{$t('message.mining.coming')}}</div>
    </div>
    <div class="mining">
        <div class="banner">
            <div class="titles">
                <div class="title">NFT MINING</div>
                <div class="subtitle">{{$t('message.mining.subtitle')}}</div>     
            </div>
        </div>
        <div class="total">
            <div class="progressBall">
                <img class="ballBorder" src="https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/ballBorder.svg" alt="">
                <div class="ball-inner"></div>
            </div>
            <div class="right">
                <div class="right_content">
                    <div class="total-title">Mining PooL Amount (CYT) </div>
                    <div class="price">$3,441,130</div>
                    <div class="total-subtitle">Mining PooL:1,092,37</div>
                </div>
            </div>
        </div>
        <div class="data-wrap">
            <ul class="data">
                <li>
                    <div>
                        <div class="txt">Total Mining Power <img src="https://d2cimmz3cflrbm.cloudfront.net/nwStaking/stakin5.png" alt=""> </div>
                        <div class="percent">{{ getTotalSupply }}</div>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="txt">Total Staked Amount</div>
                        <div class="percent">10,199</div>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="txt lastTxt">Total Staked Tokens(CYT) ≈ $5,278,606</div>
                        <div class="percent lastPer">$19,432,500,000,000</div>
                    </div>
                </li>
            </ul>
            <div class="mystaked">
                <ul>
                    <li>
                        <p class="title">My Mining Power</p>
                        <p class="number_list"> <span class="number">0</span> <span class="dollar">≈ $0.278</span></p>
                    </li>
                    <li>
                        <p class="title">My Staked Amount</p>
                        <p> <span class="number">0</span></p>
                    </li>
                    <li>
                        <p class="title">My Staked Tokens(CYT)<br/>≈ $0</p>
                        <p> <span class="number">0</span></p>
                    </li>
                </ul>
                <div class="Harvest">
                    <div class="texts">
                        <div class="exchange">(CYT) ≈ $0.34566</div>
                        <div class="price">114,514</div>
                    </div>
                    <div class="button">Harvest</div>
                </div>
            </div>
        </div>
        <div class="more">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwStaking/stakin2.png" alt="">
        </div>
        <div class="days">
            <div class="title">Days</div>
            <div class="total_day">Cycle days: <span>30day</span></div>
            <div class="content">
                <div :style="{'width': progress + '%'}"></div>
            </div>
            <div class="total_day">Current progress：<span class="white">15 days 2 hours</span></div>
        </div>
        <div class="pledge">
            <div class="title">{{$t('message.mining.pledge_title')}}<span>2/4</span></div>
            <ul>
                <!-- <li>
                    <div class="img-wrap">
                        <img class="pledge-img" :src="greenImgSrc" alt="">
                    </div>
                    <div class="top-txt">{{$t('message.mining.pledge_top_txt')}}</div>
                    <div class="bot-txt greenNft">
                        <div>{{$t('message.mining.pledge_bot_txt1')}}</div>
                        <img :src="greenBorderSrc" alt="">
                    </div>
                </li> -->
                <li>
                    <div class="img-wrap">
                        <img class="pledge-img" :src="whiteImgSrc" alt="">
                    </div>
                    <div class="top-txt">{{$t('message.mining.pledge_top_txt')}}</div>
                    <div class="bot-txt whiteNft">
                        <div>{{$t('message.mining.pledge_bot_txt2')}}</div>
                        <img :src="whiteBorderSrc" alt="">
                    </div>
                </li>
                <li>
                    <div class="img-wrap">
                        <img class="pledge-img" :src="whiteImgSrc" alt="">
                    </div>
                    <div class="top-txt">{{$t('message.mining.pledge_top_txt')}}</div>
                    <div class="bot-txt whiteNft">
                        <div>{{$t('message.mining.pledge_bot_txt2')}}</div>
                        <img :src="whiteBorderSrc" alt="">
                    </div>
                </li>
                <li>
                    <div class="img-wrap">
                        <img class="pledge-img lockedImg" :src="lockedImgSrc" alt="">
                    </div>
                    <div class="top-txt">{{$t('message.mining.pledge_top_txt')}}</div>
                    <div class="bot-txt grayNft">
                        <div>{{$t('message.mining.pledge_bot_txt3')}}</div>
                        <img :src="lockedBorderSrc" alt="">
                    </div>
                </li>
                <li>
                    <div class="img-wrap">
                        <img class="pledge-img lockedImg" :src="lockedImgSrc" alt="">
                    </div>
                    <div class="top-txt">{{$t('message.mining.pledge_top_txt')}}</div>
                    <div class="bot-txt grayNft">
                        <div>{{$t('message.mining.pledge_bot_txt3')}}</div>
                        <img :src="lockedBorderSrc" alt="">
                    </div>
                </li>
            </ul>
        </div>
        <div class="myAssets">
            <div class="myAssets-wrap">
                <div class="item1">
                    <div class="left">My CYT <br/><span>{{ mycyt }}</span></div>
                    <div class="button">
                        GET CYT
                    </div>
                </div>
                <div class="line"></div>
                <div class="item2">
                    <div class="left">My COIN <br/><span>{{ mycoin }}</span></div>
                </div>
                <!-- <div class="coin_logo">
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwStaking/stakin9.png" alt="">
                </div> -->
            </div>
        </div>
        <div class="farms">
            <div class="background">
                <div class="title">
                    <p>FARMS</p>
                    <p>STAKE LP TOKEN TO EARN</p>
                </div>
                <div class="texts">
                    <div class="texts-img"></div>
                    <div class="texts-info">
                        <p>Total LP Locked</p>
                        <p>$10,009,923</p>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="item" v-for="item in 2" :key="item">
                    <div class="top">
                        <div class="top_element1"></div>
                        <div class="top_element2"></div>
                        <div class="title">CYT-YOOSHI</div>
                    </div>
                    <div class="middle">
                        <div class="table">
                            <div class="title">TVL</div>
                            <div class="desc">$29,393,229</div>
                        </div>
                        <div class="table">
                            <div class="title">APR</div>
                            <div class="desc">489.09%</div>
                        </div>
                        <div class="table top_element5">
                            <div class="title">Rewards in</div>
                            <div class="desc">
                                <p>318 CYT<span>/DAY</span> </p>
                                <p>318 BNB<span>/DAY</span> </p>
                            </div>
                        </div>
                        <div class="table">
                            <div class="title">Your staked</div>
                            <div class="desc">12,323 <span class="tag">LP</span> </div>
                        </div>
                        <div class="table">
                            <div class="title">Earned (CYT)</div>
                            <div class="desc">≈ $123,222.00</div>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="bottom-item">
                            <div class="table bottom_element2">
                                <div class="title">Harvest (CYT) ≈ $0</div>
                                <div class="desc">0</div>
                            </div>
                            <div class="harvest">Harvest</div>
                        </div>
                        <div class="line"></div>
                        <div class="bottom-item">
                            <div class="table staked">
                                <p class="title">Staked (CYT/BNB)</p>
                                <div class="desc">0</div>
                            </div>
                            <div class="stake">Stake</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer-b></footer-b>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
const router = useRouter()

// pledge
let greenImgSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/whiteImg.png')
let whiteImgSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/whiteImg.png')
let lockedImgSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/locked.svg')

let greenBorderSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/pledge-border1.svg')
let whiteBorderSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/pledge-border2.svg')
let lockedBorderSrc:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/pledge-border3.svg')


//  my balance
const mycyt: any = ref(0);
const mycoin: any = ref(0)
const myStakCyt: any = ref(0);
const myTime: any = ref(0);
const myStakeNFT: any = ref(0);
const test = ref(0) as any

// pool
const getTotalSupply: any = ref(0)
// progress
const progress = ref(0) as any;

onMounted(() => {
    window.scrollTo(0,0);
    store.dispatch('user/showDialog',{show: false, info: {}});// close message dialog
})


</script>
<style lang="less" scoped>
    @keyframes wave{
        from {
            -webkit-transform: rotateZ(0deg) ;
            transform: rotateZ(0deg);
        }
        to {
            -webkit-transform: rotateZ(360deg);
            transform: rotateZ(360deg);
        }
    }
    @keyframes arrow{
        0% {
            transform: translateY(0);
        }
        25% {
            transform: translateY(10px);
        }
        50% {
            transform: translateY(0px);
        }
        75% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0px);
        }
    }
    .section{
        z-index: 8;
        position: fixed;
        display: flex;
        justify-content: center;
        top: 0;
        width: 100%;
        height: 120vh;
        background: rgba(0,0,0,.5);
        overflow: hidden;
        .title{
            width: 100%;
            height: 90px;
            margin-top: 200px;
            font-size: 18px;
            font-family: AlibabaPuHuiTi_2_75_SemiBold;
            color: #FFFFFF;
            line-height: 90px;
            letter-spacing: 18px;
            text-align: center;
            text-indent: 14px;
            background-image: url('../../../assets/nwmining/coming-bg.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 110% auto;
        }
    }
    .mining{
        width: 100%;
        padding-top: 55px;
        background-color: #000000;
        overflow: hidden;
        .banner{
            position: relative;
            width: 100%;
            // height: 387px;
            height: 272px;
            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwStaking/banner-home-b.png');
            background-repeat: no-repeat;
            background-position: -409px top;
            background-size: auto 100%; 
            text-align: center;
            overflow: hidden;
            .titles{
                position: absolute;
                bottom: 0;
                width: 100%;
                text-align: center;
                .title{
                    height: 44px;
                    font-size: 32px;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    color: #FFFFFF;
                    line-height: 44px;
                    letter-spacing: 3px;
                    animation: fadeInUp .8s linear;
                }
                .subtitle{
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                    color: #FFFFFF;
                }
            }
        }
        .total{
            display: flex;
            height: 108px;
            margin-top: 26px;
            .progressBall{
                display: inline-block;
                position: relative;
                z-index: 3;
                width: 109px;
                height: 110px;
                margin-left: 20px;
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwminingPhone/ballBg.svg');
                background-repeat: no-repeat;
                background-position: left bottom;
                background-size: 100% 100%; 
                border-radius: 50%;
                overflow: hidden;
                transform-style: preserve-3d;
                .ballBorder{
                    position: absolute;
                    margin-top: 2px;
                    width: 100%;
                    height: 100%;
                }
                .ball-inner{
                    width: 218px;
                    height: 220px;    
                    border-radius: 38%;
                    background: radial-gradient(circle,  #9537FF 1%,#1939F1 40%, #00FF49 80%);
                    filter: blur(2px);
                    position:relative;
                    top: 28%;
                    left: -48%;
                    -webkit-animation: wave 5s linear infinite;
                    z-index:66;
                }
            }
            .right{
                margin-left: 10px;
                .total-title{
                    margin-top: 14px;
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    color: #FFFFFF;
                    line-height: 17px;
                }
                .total-subtitle{
                    height: 15px;
                    font-size: 10px;
                    font-family: AlibabaPuHuiTi_2_65_Medium;
                    color: #B4B4B4;
                    line-height: 15px;
                }
                .price{
                    font-size: 30px;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    color: #04FF55;
                    line-height: 42px;
                }
            }
        }
        .data-wrap{
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            height: 830px;
            .data{
                z-index: 2;
                position: absolute;
                top: 0;
                width: 338px;
                height: 370px;
                margin: 0 auto;
                margin-top: -12px;
                background: #171C28;
                box-shadow: 0px 12px 12px 0px rgba(0, 0, 0, 0.5);
                border: 1px solid #27E37C;
                overflow: hidden;
                li{
                    margin-top: 41px;
                    text-align: center;
                    .txt{
                        display: flex;
                        justify-content: center;
                        font-size: 14px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #B3B3B3;
                        line-height: 20px;
                        img{
                            height: 20px;
                            margin-left: 6px;
                        }
                    }
                    .lastTxt{
                        width: 168px;
                        margin: 0 auto;
                        word-break: break-all;
                    }
                    .percent{
                        margin: 6px auto 20px;
                        font-size: 28px;
                        font-family: AlibabaPuHuiTi_2_85_Bold;
                        color: #04FF55;
                        line-height: 40px;
                    }
                    .lastPer{
                        width: 210px;
                        word-break: break-all;
                    }
                }
                li + li{
                    margin-top: 7px;
                }
            }
            .mystaked{
                position: absolute;
                top: 350px;
                overflow: hidden;
                ul{
                    width: 328px;
                    height: 358px;
                    padding-top: 60px;
                    margin: auto;
                    background: #3F16A7;
                    li{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        color: #B3B3B3;
                        .title{
                            font-size: 14px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            line-height: 20px;
                            text-align: center;
                        }
                        .number_list{
                            display: flex;
                            align-items: center;
                        }
                        .number{
                            margin-top: 6px;
                            font-size: 28px;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #FFFFFF;
                            line-height: 40px;
                        }
                        .dollar{
                            display: inline-block;
                            height: 17px;
                            padding-top: 0.2vw;
                            margin-left: 6px;
                            font-size: 12px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #B3B3B3;
                            line-height: 17px;
                        }
                    }
                    li + li {
                        margin-top: 20px;
                    }
                }
                .Harvest{
                    bottom: -102px;
                    width: 100%;
                    height: 102px;
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwStaking/stakin3.png'); 
                    background-size: 100% 100%;
                    padding-left: 1.56vw;
                    padding-right: 1.30vw;
                    display: flex;
                    .texts{
                        margin: 18px 45px 0 40px;
                        .exchange{
                            font-size: 14px;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #2C1469;
                            line-height: 20px;
                        }
                        .price{
                            margin-top: 8px;
                            font-size: 31px;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            color: #3F16A7;
                            line-height: 44px;
                        }
                    }
                    .button{
                        width: 108px;
                        height: 46px;
                        margin-top: 46px;
                        font-size: 16px;
                        font-family: AlibabaPuHuiTi_2_85_Bold;
                        color: #FFFFFF;
                        line-height: 46px;
                        text-align: center;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwStaking/stakin8.png'); 
                        background-size: 100% 100%;
                    }
                }
            }
        }
        .more{
            width: 33px;
            height: 22px;
            margin: 30px auto 60px;
            img{
                width: 100%;
                -webkit-animation: arrow 2s linear infinite;
            }
        }
        .days{
            margin: 0 18px;
            .title{
                height: 28px;
                margin-bottom: 20px;
                font-size: 20px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                color: #FFFFFF;
                line-height: 28px;
                text-align: center;
            }
            .total_day{
                height: 20px;
                font-size: 12px;
                font-family: AlibabaPuHuiTi_2_85_Bold;
                color: #B3B3B3;
                line-height: 17px;
                text-align: right;
                span{
                    color: #EDFF00;
                }
                .white{
                    color: #ffffff;
                }
            }
            .content{
                display: flex;
                align-items: center;
                width: 100%;
                height: 8px;
                margin: 26px 0;
                background: #212737;
                & > div{
                    line-height: 8px;
                    width: 1%;
                    height: 100%;
                    text-align: center;
                    background: #A4F238;
                    position: relative;
                    transition: all 0.5s ease-in-out;
                }
                &::after{
                    content: '';
                    display: inline-block;
                    width: 6px;
                    height: 20px;
                    background: #A4F238;
                }
            }
        }
        .pledge{
            overflow: hidden;
            .title{
                height: 28px;
                margin: 80px auto 30px;
                font-size: 20px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                color: #FFFFFF;
                line-height: 28px;
                text-align: center;
                span{
                    color: #EDFF00;
                }
            }
            ul{
                display: flex;
                flex-direction: column;
                align-items: center;
                li{
                    position: relative;
                    width: 226px;
                    height: 260px;
                    margin-bottom: 34px;
                    background: linear-gradient(61deg, rgba(105, 0, 255, .43) 0%, rgba(88, 0, 255, 0) 100%);
                    border: 2px solid rgba(62, 65, 68, .43);
                    .img-wrap{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                        img:hover{
                            transform: scale(1.2);
                        }
                        .lockedImg{
                            width: 97px;
                            height: 108px;
                            margin-bottom: 30px;
                        }
                    }
                    .top-txt{
                        height: 16px;
                        margin-top: 10px;
                        font-size: 12px;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        color: #FFFFFF;
                        line-height: 16px;
                        text-align: center;
                    }
                    .bot-txt{
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: 52px;
                        font-size: 16px;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #04FF55;
                        line-height: 52px;
                        text-align: center;
                        img{
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            width: 101%;
                            opacity: 0.46;
                            // height: 100%;
                        }
                    }
                    .greenNft > img:hover{
                        filter: drop-shadow(0 0 5px #04FF55);
                    }
                    .whiteNft > img:hover{
                        filter: drop-shadow(0 0 .5vw #ffffff);
                    }
                    .grayNft > img:hover{
                        filter: drop-shadow(0 0 .5vw #7E52FF);
                    }
                    .greenNft{
                        color: #04FF55;
                    }
                    .whiteNft{
                        color: #ffffff;
                    }
                    .grayNft{
                        color: #7E52FF;
                    }
                }
            }
        }
        .myAssets{
            width: 338px;
            height: 342px;
            margin: 15px auto 40px;
            background: #171C28;
            border: 2px solid;
            border-image: linear-gradient(45deg, rgba(35, 71, 54, 1), rgba(51, 32, 91, 1)) 2 2;
            box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.69);
            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwStaking/stakin9.png');
            background-position: right bottom;
            background-repeat: no-repeat;
            background-size: 90px auto;
            .myAssets-wrap{
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                background: linear-gradient(133deg, rgba(88, 0, 255, 0) 0%, rgba(105, 0, 255, 0.6) 100%);
                .item1, .item2{
                    .left{
                        font-size: 14px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #B3B3B3;
                        line-height: 20px;
                        text-align: center;
                        span{
                            display: inline-block;
                            margin: 6px auto 14px;
                            font-size: 28px;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            color: #04FF55;
                            line-height: 40px;
                        }
                    }
                    .button{
                        width: 130px;
                        height: 50px;
                        font-size: 16px;
                        font-family: AlibabaPuHuiTi_2_85_Bold;
                        color: #FFFFFF;
                        line-height: 50px;
                        text-align: center;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwStaking/stakin10.png');
                        background-size: 100% 100%;
                    }
                }
                .coin_logo{
                    position: absolute;
                    right: 4px;
                    bottom: 0px;
                    width: 90px;
                    height: 84px;
                    img{
                        width: 100%;
                        margin-right: 1.61vw;
                    }
                }
                .line{
                    width: 60px;
                    height: 2px;
                    margin: 24px auto 30px;
                    background: #59647E;
                }
            }
        }
        .farms{
            .background{
                color: #ffffff;
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwStaking/stakin6-b.png');
                background-size: 100% auto;
                overflow: hidden;
                .title{
                    margin: 39px auto 23px;
                    text-align: center;
                    p:first-child{
                        font-size: 32px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        line-height: 44px;
                        letter-spacing: 3px;
                    }
                    p:last-child{
                        font-size: 12px;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        line-height: 17px;
                    }
                }
                .texts{
                    display: flex;
                    align-items: center;
                    &-img{
                        width: 115px;
                        height: 98px;
                        margin: 0 23px 0 18px;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwStaking/stakin1-b.png');
                        background-size: 100% 100%;
                    }
                    &-info{
                        margin-top: 6px;
                        font-size: 12px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        line-height: 17px;
                        p:last-child{
                            font-size: 30px;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            color: #04FF55;
                            line-height: 42px;
                        }
                    }
                }
            }
            .content{
                width: 338px;
                margin: 0 auto;
                position: relative;
                .item{
                    width: 338px;
                    height: 843px;
                    margin: -6px 0 30px 0;
                    color: #ffffff;
                    border: 2px solid;
                    border-image: linear-gradient(45deg, rgba(35, 71, 54, 1), rgba(51, 32, 91, 1)) 2 2;
                    background: #171C28;
                    box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.69);
                    position: relative;
                    .top{
                        height: 82px;
                        display: flex;
                        align-items: center;
                        padding-left: 10px;
                        .top_element1, .top_element2{
                            width: 42px;
                            height: 42px;
                            background: #FEE476;
                            border: 2px solid #171C28;
                            border-radius: 50%;
                        }
                        .top_element2{
                            background: #EFB90B;
                            border: 0.104vw solid #000 !important;
                            margin-left: -10px;
                        }
                        .title{
                            margin-left: 12px;
                            font-size: 20px;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            line-height: 28px;
                        }
                        
                    }
                    .middle{
                        width: 318px;
                        padding: 10px 0 30px;
                        margin: 0 auto;
                        text-align: center;
                        background: #1D2332;
                        .table{
                            margin-top: 20px;
                            .title{
                                font-size: 14px;
                                font-family: AlibabaPuHuiTi_2_55_Regular;
                                color: #B3B3B3;
                                line-height: 20px;
                            }
                            .desc{
                                margin-top: 4px;
                                font-size: 28px;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                line-height: 40px;
                                span{
                                    font-size: 12px;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                    color: #B3B3B3;
                                    line-height: 12px;
                                }
                            }
                        }
                    }
                    .bottom{
                        display: flex;
                        flex-direction: column;
                        &-item{
                            height: 132px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 0 15px 0 10px;
                            .table{
                                .title{
                                    font-size: 14px;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                    color: #B3B3B3;
                                    line-height: 20px;
                                }
                                .desc{
                                    margin-top: 4px;
                                    font-size: 28px;
                                    font-family: AlibabaPuHuiTi_2_85_Bold;
                                    line-height: 40px;
                                    span{
                                        font-size: 12px;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #B3B3B3;
                                        line-height: 12px;
                                    }
                                }
                            }
                            .harvest, .stake{
                                width: 100px;
                                height: 38px;
                                margin-top: 30px;
                                font-size: 16px;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                color: #A4F238;
                                line-height: 38px;
                                text-align: center;
                                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwStaking/stakin4.png');
                                background-repeat: no-repeat;
                                background-size: 100% 100%; 
                            }
                            .stake{
                                color: #363A54;
                                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwStaking/stakin12.png');
                            }
                        }
                        .line{
                            width: 318px;
                            height: 1px;
                            margin: 0 auto;
                            background: #59647E;
                        }
                    }
                }
            }
        }
    }
</style>
