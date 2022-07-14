<template>
    <header-a path="/help" :type="0"></header-a>
    <div class="container">
        <div class="select_pages">
            <div class="bk1"></div>
            <div class="warp">
                <div class="item" v-for="(item, i) in select_title" :key="i" @click="selectpage(i)">
                    <div class="selected" v-show="item.select">
                        <img :style="{'margin-left': i == 3 ? '-1.2vw':''}" :src="item.selectImg" alt="">
                    </div>
                    <div class="Unselected" v-show="!item.select" >
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/help/Unselected.png" alt="">
                        <span class="index">{{ '0' + (i + 1) }}</span>
                        <p class="title">{{ item.title }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="center_title">
            <h2 class="title">Create Your MetaMask wallet</h2>
            <h5 class="des">Wallet is your boarding pass to our digital nation</h5>
        </div>
        <div class="swiper_box">
            <swiper
                class="mySwiper swiper-no-swiping"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :loop="true"
                :speed="200"
                :navigation="{nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev'}"
                :modules="modules"
                :autoplay="false"
                :mousewheel="false"
                :scrollbar="{el: '.swiper-scr ollbar', draggable: true}"
                ref="mySwiper"
            >
                <swiper-slide>
                    <div class="box">
                        <div class="chunk1">
                            <div class="title">
                                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/fix_icon.png" alt="">
                                <span>Download & setup</span>
                            </div>
                            <div class="content">
                                <div class="content_chunk">
                                    <h2 class="content_title">Extension</h2>
                                    <a href="https://metamask.io" target="view_window">
                                        <div class="content_button">
                                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/chrome_icon.png" alt="">
                                            <b>Chrome</b>
                                        </div>
                                    </a>
                                    <a href="https://metamask.io" target="view_window">
                                        <div class="content_button">
                                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/firefox_icon.png" alt="">
                                            <b>Firefox</b>
                                        </div>
                                    </a>
                                    <a href="https://metamask.io" target="view_window">
                                        <div class="content_button">
                                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/edge_icon.png" alt="">
                                            <b>Edge</b>
                                        </div>
                                    </a>
                                </div>
                                <div class="content_chunk">
                                    <h2 class="content_title">Mobile App</h2>
                                    <a href="https://play.google.com/store/apps/details?id=io.metamask&hl=zh&gl=US" target="view_window">
                                        <div class="content_button">
                                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/google_icon.png" alt="">
                                            <b>Google Play</b>
                                        </div>
                                    </a>
                                    <a href="https://metamask.io" target="view_window">
                                        <div class="content_button">
                                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/apple_icon.png" alt="">
                                            <b>App Store</b>
                                        </div>
                                    </a>
                                    <a href="https://metamask.io" target="view_window">
                                        <div class="content_button">
                                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/and_icon.png" alt="">
                                            <b>Android</b>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="chunk1">
                            <div class="title">
                                <span>Create your address</span>
                            </div>
                            <div class="content">
                                <div class="text_chunk">
                                    <h2 class="content_title">What is Wallet for?</h2>
                                    <p class="des">Storing digital assets such as Cyberpop assets and other tokens</p>
                                    <p class="des">Support multi-chain transaction, convenient cross-platform</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="box">
                        <div class="chunk1">
                            <div class="title">
                                <span>Buy exclusive BD NFT in our market</span>
                            </div>
                            <div class="content">
                                <div class="text_chunk">
                                    <h2 class="content_title" style="margin-bottom: 1.3vw">Deposit CYT on MetaMask and Cyberpop official market to purchase exclusive BD NFT</h2>
                                    <h2 class="content_title" style="margin-bottom: 1.04vw">Buy CYT directly from the Cyberpop market</h2>
                                    <div class="buttons">   
                                        <a href="https://market.cyberpop.online/#/list" target="view_window">
                                            <div class="getBD_button">
                                                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/market_icon.png" alt="">
                                                <span>Get BD NFT</span>
                                            </div>
                                        </a>
                                        <div class="getCYT_button">
                                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/market_icon.png" alt="">
                                            <span>Get CYT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chunk1">
                            <div class="title">
                                <span>Apply for reward</span>
                            </div>
                            <div class="content">
                                <div class="text_chunk">
                                    <h2 class="content_title" style="margin-bottom: 1.04vw">Join the Cyberpop Discord community to apply for rewards and start your adventure</h2>
                                    <div class="buttons">
                                        <a href="https://discord.gg/y9b8p5C9TR" target="view_window">
                                            <div class="getCYT_button" style="width: 15.6vw; margin-left: 0; background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwGuide/big_white_broder.svg')">
                                                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/dc_icon.png" alt="">
                                                <span>Join the Cyberpop Discord</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="box">
                        <div class="chunk2">
                            <div class="imgs">
                                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alen.png" alt="">
                                <p>Download</p>
                                <span>Cyberpop Metaverse</span>
                            </div>
                            <div class="line"></div>
                            <div class="buttons">
                                <div class="button_group">
                                    <div class="button_title">
                                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/desktop.png" alt="">
                                        <span>Desktop</span>
                                    </div>
                                    <div class="dowload">
                                        <a href="https://zengeon-cos-assets-1259788321.cos.ap-shanghai.myqcloud.com/PrinceOfPersia/Jenkins/AppFiles/Cyberpop_1.0.5_2022_07_07_18_11_53_V25_Dev.false_Symbols.USE_NFT_ASSETS.exe" target="view_window">
                                            <div class="button">
                                                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/windows_icon.png" alt="">
                                                <span>Windows</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="button_group" style="margin-bottom: 0;">
                                    <div class="button_title">
                                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/phone.png" alt="">
                                        <span>Mobile</span>
                                    </div>
                                    <div class="dowload">
                                        <a href="https://zengeon-cos-assets-1259788321.cos.ap-shanghai.myqcloud.com/PrinceOfPersia/Jenkins/AppFiles/Cyberpop_1.0.5_2022_07_07_19_09_40_V25_Dev.false_Symbols.USE_NFT_ASSETS.apk" target="view_window">
                                            <div class="button">
                                                <img style="filter: invert(100%)" src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/and_icon.png" alt="">
                                                <span>Android</span>
                                            </div>
                                        </a>
                                        <a href="https://apps.apple.com/app/cyberpop/id1613478998" target="view_window">
                                            <div class="button">
                                                <img style="filter: invert(100%)" src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/apple_icon.png" alt="">
                                                <span>iOS</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="box">
                        <div class="chunk1">
                            <div class="title">
                                <span>Login Mode</span>
                            </div>
                            <div class="content">
                                <div class="text_chunk">
                                    <h2 class="des" style="margin-top: 0;">Click the link wallet button, select the wallet to be linked, and enter the game after relevant authorization</h2>
                                    <div class="wallet_box">
                                        <h2 class="wallet_title">Connect Wallet</h2>
                                        <div class="wallet_button"><span>Wallet Connect</span></div>
                                        <div class="wallet_button"><span>Cyberpop Wallet</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chunk1">
                            <div class="title">
                                <span>Import Secret Recove</span>
                            </div>
                            <div class="content">
                                <div class="text_chunk">
                                    <h2 class="des" style="margin-top: 0">Create an account, obtain your Secret Recovery Phrase, and keep it safe</h2>
                                    <h2 class="des">Log in the game using Secret Recovery Phrase</h2>
                                    <div class="wallet_box">
                                        <h2 class="wallet_title">Cyberpop Wallet</h2>
                                        <div class="wallet_button"  style="width: 10.03vw"><span>Create Wallet</span></div>
                                        <div class="wallet_button"  style="width: 10.03vw"><span>Import Secret Recove</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="elements">
            <div class="icons">
                <ul>
                    <li v-for="(item, i) in icons" :key="i">
                        <a :href="i == 3 ? 'https://play.google.com/store/apps/details?id=io.metamask&hl=zh&gl=US' : 'https://metamask.io'" target="view_window">
                            <img :src="item.img" alt="">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="buttons">
                <button class="swiper-button-prev left" @mousemove="hoverIn = 0" @mouseout="hoverIn = false">
                    <img :src="hoverIn === 0 ? 'https://d2cimmz3cflrbm.cloudfront.net/nwGuide/point_left_hover.png' : 'https://d2cimmz3cflrbm.cloudfront.net/nwGuide/point_icon_left.png'" alt="">
                    <span :class="hoverIn === 0 ? 'hoverIn' : ''">Prev</span>
                </button>
                <button class="swiper-button-next right" @mousemove="hoverIn = 1" @mouseout="hoverIn = false">
                    <span :class="hoverIn === 1 ? 'hoverIn' : ''">Next</span>
                    <img :src="hoverIn === 1 ? 'https://d2cimmz3cflrbm.cloudfront.net/nwGuide/point_icon_right_hover.png' : 'https://d2cimmz3cflrbm.cloudfront.net/nwGuide/point_icon_right.png'" alt="">
                </button>
            </div>
        </div>
    </div>
    <footer-a></footer-a>
</template>
<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { EffectFade, EffectCreative, Mousewheel, Autoplay, Navigation, Keyboard, Pagination, Scrollbar} from "swiper";
import SwiperType from 'swiper/types'
import 'swiper/css';

SwiperCore.use([EffectFade, EffectCreative, Mousewheel, Autoplay, Navigation]);

const modules = [Navigation, Keyboard, Mousewheel, Pagination, Scrollbar];

const mySwiper: any = ref(null);

const swiperEvent: any = ref(null) 

const onSwiper = (swiper: SwiperType.Swiper) => {
    // swiper.slideTo(1);
    swiperEvent.value = swiper
};
const onSlideChange = (e: any) => {
    console.log('slide change', e.realIndex);
    if(!swiperEvent.value) return
    selectpage(e.realIndex)
};

const router = useRouter()
const select_title = ref([
    {
        title: 'Create MetaMask wall',
        selectImg: 'https://d2cimmz3cflrbm.cloudfront.net/help/select_title1.png',
        select: true,
    },
    {
        title: 'In Cyberpop website',
        selectImg: 'https://d2cimmz3cflrbm.cloudfront.net/help/select_title2.png',
        select: false,

    },
    {
        title: 'Get Cyberpop NFT',
        selectImg: 'https://d2cimmz3cflrbm.cloudfront.net/help/select_title3.png',
        select: false,

    },
    {
        title: 'Download & Play',
        selectImg: 'https://d2cimmz3cflrbm.cloudfront.net/help/select_title4.png',
        select: false,

    },
])
const icons = [
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwGuide/chrome_icon.png'
    },
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwGuide/firefox_icon.png'
    },
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwGuide/edge_icon.png'
    },
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwGuide/google_icon.png'
    },
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwGuide/apple_icon.png'
    },
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwGuide/and_icon.png'
    },
]
const hoverIn: any = ref(false)

const next = () => {
    console.log(swiperEvent);
    swiperEvent.value.slideTo(2)
}

const selectpage = (index: number) => {
    select_title.value.forEach(object => {
        object.select = false
    })
    select_title.value[index].select = true
    swiperEvent.value.slideTo(index + 1)
}

onMounted(() => {
})

</script>
<style lang="less" scoped>
    .container{
        // height: 1253px;
        background: #080808;
        padding-top: 6vw;
        padding-bottom: 6vw;
        .select_pages{
            .warp{
                width: 64.06vw;
                height: 18.92vw;
                // background-image: url('https://d2cimmz3cflrbm.cloudfront.net/help/bk4.png');
                // background-size: 100% 100%;
                margin: 0 auto;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;
                position: relative;
                .item{
                    width: 11.25vw;
                    height: 11.25vw;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    transition: all .2s ease-in-out;
                    .Unselected{
                        display: flex;
                        justify-content: center;
                        position: relative;
                        width: 100%;
                        img{
                            width: 6.25vw;
                            height: 5.2vw;
                            margin-bottom: 2.5vw;
                        }
                        .index{
                            font-size: 1.56vw;
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            color: #FFFFFF;
                            line-height: 2.18vw;
                            position: absolute;
                            top: 2vw;
                        }
                        .title{
                            position: absolute;
                            font-size: 0.93vw;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #FFFFFF;
                            line-height: 1.3vw;
                            top: 6.5vw;
                            width: 100%;
                            text-align: center;
                        }
                    }
                    .selected{
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(180deg, rgba(53,241,200,0.2500) 0%, rgba(53,241,200,0) 100%);
                        img{
                            width: 100%;
                            height: 100%;
                            transform: scale(1.5);
                        }
                    }
                }
                .item:hover{
                    // width: 11.45vw;
                    // height: 3.85vw;
                    background: linear-gradient(180deg, rgba(53,241,200,0) 0%, rgba(53,241,200,0.2500) 100%);
                    background-size: 100% 3.85vw;
                    background-repeat: no-repeat;
                    background-position: center bottom;
                }
                .item:not(:last-child){
                    margin-right: 4.43vw;
                }
            }
            .bk1{
                width: 83.07vw;
                height: 33.69vw;
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/help/new_bk1.png');
                background-size: 100% 100%;
                position: absolute;
                right: 0;
                // opacity: .5;
                z-index: 0;
            }
        }
        .center_title{
            color: #fff;
            position: relative;
            z-index: 1;
            text-align: center;
            margin-bottom: 2.08vw;
            .title{
                font-size: 1.97vw;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #35F1C8;
                line-height: 2.76vw;
            }
            .des{
                font-size: 1.04vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: 1.45vw;
                opacity: .4;
            }
        }
        .swiper_box{
            position: relative;
            width: 62.5vw;
            height: 20.52vw;
            margin: 0 auto;
            color: #FFFFFF;
            a{
                text-decoration: none;
                color: #fff; 
            }
            .mySwiper{
                width: 100%;
                height: 100%;
                .box{
                    width: 100%;
                    height: 100%;
                    color: #fff;
                    display: flex;
                    justify-content: space-between;
                    .chunk1{
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwGuide/swiper_chunk1.png');
                        background-size: 100% 100%;
                        height: 100%;
                        width: 30.2vw;
                        .title{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 4.3vw;
                            width: 100%;
                            img{
                                width: 1.82vw;
                                margin-right: 1.04vw;
                            }
                            span{
                                font-size: 1.25vw;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                            }
                        }
                        .content{
                            width: 100%;
                            display: flex;
                            padding: 1.56vw;
                            .content_chunk{ 
                                width: 50%;
                                .content_title{
                                    text-align: center;
                                    font-size: 1.04vw;
                                    font-family: AlibabaPuHuiTi_2_85_Bold;
                                    color: #FFFFFF;
                                    line-height: 1.45vw;
                                }
                                .content_button{
                                    width: 10.41vw;
                                    height: 2.5vw;
                                    border: 1px solid #FFFFFF;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    cursor: pointer;
                                    margin: auto;
                                    margin-top: 1.04vw;
                                    transition: all .2s ease-in-out;
                                    font-size: 0.93vw;
                                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                                    img{
                                        width: 1.45vw;
                                        height: 1.45vw;
                                        margin-right: .78vw;
                                        transition: all .2s ease-in-out;
                                    }
                                }
                                .content_button:hover > img{
                                    filter: invert(50%) sepia(42%) saturate(1116%) hue-rotate(124deg) brightness(99.8155%) contrast(327%);
                                }
                                .content_button:hover{
                                    color: #35F1C8;
                                    border: 2px solid #35F1C8;
                                    box-shadow: 0 0 5px 1px #35F1C8; 
                                }
                            }
                            .text_chunk{
                                .content_title{
                                    font-size: 1.04vw;
                                    font-family: AlibabaPuHuiTi_2_85_Bold;
                                    color: #FFFFFF;
                                    line-height: 1.45vw;
                                }
                                .des{
                                    font-size: 0.93vw;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                    color: #FFFFFF;
                                    line-height: 1.45vw;
                                    margin-top: 0.78vw;
                                    opacity: .7;
                                }
                                .des:not(:last-child){
                                    margin-top: 1.04vw;
                                }
                                .getBD_button{
                                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwGuide/rainbow.png');
                                    background-size: 100% 100%;
                                    height: 2.7vw;
                                    width: 9.79vw;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    cursor: pointer;
                                    img{
                                        width: 1.45vw;
                                        height: 1.45vw;
                                        filter: invert(100%);
                                        margin-right: 0.83vw;
                                    }
                                    span{
                                        font-size: 0.93vw;
                                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                                        color: #000000;
                                    }
                                }
                                .buttons{
                                    display: flex;
                                    align-items: center;
                                }
                                .getCYT_button{
                                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwGuide/white_broder.svg');
                                    background-size: 100% 100%;
                                    height: 2.7vw;
                                    width: 8.22vw;
                                    display: flex;
                                    margin-left: 1.56vw;
                                    justify-content: center;
                                    align-items: center;
                                    cursor: pointer;
                                    transition: all .1s ease;
                                    img{
                                        width: 1.45vw;
                                        height: 1.45vw;
                                        margin-right: 0.83vw;
                                    }
                                    span{
                                        font-size: 0.93vw;
                                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                                        color: #fff;
                                    }
                                }
                                .getCYT_button:hover{
                                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwGuide/white_broder_hover.svg');
                                    filter: invert(50%) sepia(42%) saturate(1116%) hue-rotate(124deg) brightness(99.8155%) contrast(327%);
                                }
                                .wallet_box{
                                    width: 12.03vw;
                                    height: 6.92vw;
                                    background: rgba(12, 11, 11, 0.06);
                                    border: 1.5px solid rgba(255, 255, 255, 0.3);
                                    margin-top: 1.04vw;
                                    padding-top: .73vw;
                                    display: flex;
                                    justify-content: center;
                                    flex-wrap: wrap;
                                    .wallet_title{
                                        font-size: .73vw;
                                        font-family: AlibabaPuHuiTi_2_85_Bold;
                                        color: #FFFFFF;
                                        line-height: 1.04vw;
                                        opacity: .8;
                                        position: relative;
                                        margin-right: 0.73vw;
                                        margin-bottom: 0.73vw;
                                    }
                                    .wallet_title::before{
                                        content: " ";
                                        position: absolute;
                                        width: 1.25vw;
                                        height: 0.12vw;
                                        background: #FFFFFF;
                                        opacity: 0.5;
                                        left: -1.5vw;
                                        top: .4vw;
                                    }
                                    .wallet_title::after{
                                        content: " ";
                                        position: absolute;
                                        width: 1.25vw;
                                        height: 0.12vw;
                                        background: #FFFFFF;
                                        opacity: 0.5;
                                        right: -1.5vw;
                                        top: .4vw;
                                    }
                                    .wallet_button{
                                        margin-bottom: 0.73vw;
                                        width: 8.09vw;
                                        text-align: center;
                                        border: 1.5px solid rgba(255,255,255,0.5000);
                                        span{
                                            display: inline-block;
                                            font-size: 0.57vw;
                                            font-family: AlibabaPuHuiTi_2_85_Bold;
                                            color: #FFFFFF;
                                            transform: scale(0.7);
                                            line-height: 0.8vw;
                                            opacity: .9;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .chunk2{
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwGuide/chunk2_bk.png');
                        background-size: 100% 100%;
                        height: 100%;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        .imgs{
                            text-align: center;
                            margin-left: 3.17vw;
                            margin-right: 3.75vw;
                            img{
                                width: 8.1vw;
                                height: 8.1vw;
                                transform: scale(1.5);
                            }
                            p{
                                font-size: 1.87vw;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                                color: #FFFFFF;
                                line-height: 2.39vw;
                                margin-top: -2.5vw;
                                position: relative;
                                z-index: 1;
                            }
                            span{
                                font-size: 1.25vw;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                color: #35F1C8;
                                line-height: 1.71vw;
                            }

                        }
                        .line{
                            width: 0.104vw;
                            height: 10.73vw;
                            background: rgba(255,255,255,0.5000);
                            margin-right: 5.73vw;
                        }
                        .buttons{
                            .button_group{
                                margin-bottom: 3.125vw;
                                .button_title{
                                    display: flex;
                                    align-items: center;
                                    margin-bottom: 0.57vw;
                                    img{
                                        width: 1.66vw;
                                        height: 1.66vw;
                                    }
                                    span{
                                        font-size: 1.04vw;
                                        font-family: AlibabaPuHuiTi_2_85_Bold;
                                        color: #FFFFFF;
                                        line-height: 1.45vw;
                                        opacity: .5;
                                    }
                                }
                            }
                            .dowload{
                                display: flex;
                                align-items: center;
                                .button{
                                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwGuide/rainbow.png');
                                    width: 13.02vw;
                                    height: 2.7vw;
                                    background-size: 100% 100%;
                                    margin-right: 3.64vw;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    font-size: 1.25vw;
                                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                                    color: #000000;
                                    cursor: pointer;
                                    transition: all .2s ease-in-out;
                                    img{
                                        width: 1.77vw;
                                        margin-right: 1.04vw;
                                    }
                                }
                                .button:hover{
                                    opacity: .7;
                                }
                            }
                        }
                    }
                }
            }

        }
        .elements{
            width: 62.5vw;
            position: relative;
            margin: 0 auto;
            margin-top: 1.45vw;
            .icons{
                padding-left: 4.06vw;
                ul{
                    overflow: hidden;
                    li{
                        float: left;
                        img{
                            width: 1.45vw;
                            margin-right: 1.3vw;
                            cursor: pointer;
                            transition: all .2s ease-in-out;
                        }
                        img:hover{
                            filter: invert(50%) sepia(42%) saturate(1116%) hue-rotate(124deg) brightness(99.8155%) contrast(327%);
                        }
                    }
                }
            }
            .buttons{
                display: flex;
                justify-content: center;
                align-items: center;
                button{
                    background: none;
                    border: none;
                    outline: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    margin-right: 2.08vw;
                    span{
                        color: #fff;
                        font-size: 1.04vw;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #FFFFFF;
                        line-height: 1.45vw;
                        opacity: 0.7;
                    }
                }
                .hoverIn{
                    color: #35F1C8;
                    opacity: 1;
                }
                .left{
                    img{
                        width: 1.51vw;
                        height: 0.88vw;
                        margin-right: 1.04vw;
                    }
                }
                .right{
                    img{
                        width: 1.51vw;
                        height: 0.88vw;
                        margin-left: 1.04vw;
                    }
                }
        }
        }

    }
</style>
