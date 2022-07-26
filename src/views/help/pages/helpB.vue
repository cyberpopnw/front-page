<template>
    <header-b path="/" :type="0"></header-b>

    <div class="container" :style="{'padding-top': warning ? '28.6666667vw' : '14.6666667vw'}">
        <div class="select_pages">
            <img class="bk" src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/mobile_bk.png" alt="">
            <div class="box">
                <swiper
                    class="mySwiper swiper-no-swiping"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
                    :loop="false"
                    :speed="200"
                    :navigation="{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}"
                    :modules="modules"
                    :autoplay="false"
                    :mousewheel="false"
                    :scrollbar="{el: '.swiper-scr ollbar', draggable: true}"
                    ref="mySwiper"
                >
                    <swiper-slide v-for="(item, i) in select_title" :key="i">
                        <div class="warp">
                            <h2>{{'Step' + ( i + 1 )}}</h2>
                            <img :src="item.selectImg" alt="">
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="line"></div>
            <div class="point left_point" @click="swiperTo(0)" :class="{'shouldCheck': immediate.leftPoint}"></div>
            <div class="point right_point" @click="swiperTo(1)" :class="{'shouldCheck': immediate.rightPoint}"></div>
        </div>
        <div class="center_title" v-for="(item, i) in select_title" :key="i" v-show="siderIndex == i">
            <h2 class="title" v-if="siderIndex == i">{{ item.bigTitle }}</h2>
            <h5 class="des" v-if="siderIndex == i">{{ item.des || '&nbsp' }}</h5>
        </div>
        <div class="content" v-show="siderIndex == 0">
            <div class="title">
                <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/fix_icon.png" alt="">
                <span>Download & setup</span>
            </div>
            <div class="content_chunk">
                <h2 class="content_title">Extension</h2>
                <a href="https://metamask.io" target="view_window">
                    <div class="content_button">
                        <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/chrome_icon.png" alt="">
                        <b>Chrome</b>
                    </div>
                </a>
            </div>
        </div>
        <div class="content" v-show="siderIndex == 0">
            <div class="title">
                <span>Create your address</span>
            </div>
            <div class="content_chunk">
                <h2 class="text_title">What is Wallet for?</h2>
                <p class="des">This means that you have full ownership of these assets in your wallet</p>
                <p class="des">We recommend that you create a new wallet to start your journey, or you can create this after downloading our game</p>
            </div>
        </div>
        <div class="content" v-show="siderIndex == 1">
            <div class="title">
                <span>Buy exclusive BD NFT in our market</span>
            </div>
            <div class="content_chunk">
                <h2 class="text_title">Deposit CYT on MetaMask and Cyberpop official market to purchase exclusive BD NFT</h2>
                <h2 class="text_title">Buy CYT directly from the Cyberpop market</h2>
                <div class="buttons">   
                    <div class="getBD_button" @click="getBD">
                        <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/market_icon.png" alt="">
                        <span>Get BD NFT</span>
                    </div>
                    <!-- <div class="getCYT_button">
                        <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/market_icon.png" alt="">
                        <span>Get CYT</span>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="content" v-show="siderIndex == 1">
            <div class="title">
                <span>Apply for reward</span>
            </div>
            <div class="content_chunk">
                <h2 class="text_title">Join the Cyberpop Discord community to apply for rewards and start your adventure</h2>
                <div class="buttons">
                    <a href="https://discord.gg/y9b8p5C9TR" target="view_window">
                        <div class="getCYT_button">
                            <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/dc_icon.png" alt="">
                            <span>Join the Cyberpop Discord</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="notLineContent" v-show="siderIndex == 2">
            <div class="imgs">
                <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwhome/alen.png" alt="">
                <p>Download</p>
                <span>Cyberpop Metaverse</span>
            </div>
            <div class="buttons">
                <div class="button_group">
                    <div>
                        <div class="button_title">
                            <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/desktop.png" alt="">
                            <span>Desktop</span>
                        </div>
                        <div class="dowload">
                            <a href="https://d3bhixjyozyk2o.cloudfront.net/Cyberpop_1.1.0_2022_07_25_18_15_47_V25_Dev.false_Symbols.USE_NFT_ASSETS.exe" target="view_window">
                                <div class="button">
                                    <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/windows_icon.png" alt="">
                                    <span>Windows</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="button_group" style="margin-bottom: 0;">
                    <div>
                        <div class="button_title">
                            <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/phone.png" alt="">
                            <span>Mobile</span>
                        </div>
                        <div class="dowload">
                            <a href="https://d3bhixjyozyk2o.cloudfront.net/Cyberpop_1.1.0_2022_07_25_18_11_13_V25_Dev.false_Symbols.USE_NFT_ASSETS.apk" target="view_window">
                                <div class="button">
                                    <img style="filter: invert(100%)" src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/and_icon.png" alt="">
                                    <span>Android</span>
                                </div>
                            </a>
                            <a href="https://apps.apple.com/app/cyberpop/id1613478998" target="view_window">
                                <div class="button">
                                    <img style="filter: invert(100%)" src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/apple_icon.png" alt="">
                                    <span>iOS</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content" v-show="siderIndex == 3">
            <div class="title" style="height: 90px">
                <span>Login Mode</span>
            </div>
            <div class="content_chunk">
                <h2 class="text_title">Click the link wallet button, select the wallet to be linked, and enter the game after relevant authorization</h2>
                <div class="wallet_box">
                    <h2 class="wallet_title">Connect Wallet</h2>
                    <div class="wallet_button"><span>Wallet Connect</span></div>
                    <div class="wallet_button"><span>wallet login</span></div>
                    <img class="point" src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/white_point.png" alt="">
                </div>
                <div class="position"></div>
            </div>
        </div>
        <div class="content" v-show="siderIndex == 3">
            <div class="title" style="height: 90px">
                <span>Import Secret Recove</span>
            </div>
            <div class="content_chunk">
                <h2 class="text_title">Create an account, obtain your Secret Recovery Phrase, and keep it safe</h2>
                <h2 class="text_title">Log in the game using Secret Recovery Phrase</h2>
                <div class="wallet_box">
                    <h2 class="wallet_title">Connect Wallet</h2>
                    <div class="wallet_button" style="width: 182px"><span>Create Wallet</span></div>
                    <div class="wallet_button" style="width: 182px"><span>Import Secret Recove</span></div>
                    <img class="point" src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/white_point.png" alt="">
                </div>
                <div class="position"></div>
            </div>
        </div>
        <div class="elements">
            <div class="buttons">
                <button class="swiper-button-prev-error left" @click="swiperTo(0)">
                    <img :src="immediate.leftPoint ? pointImgLeftHover : pointImgLeft" alt="">
                    <span :class="immediate.leftPoint ? 'hoverIn' : ''">Prev</span>
                </button>
                <button class="swiper-button-next-error right" @click="swiperTo(1)">
                    <span :class="immediate.rightPoint ? 'hoverIn' : ''">Next</span>
                    <img :src="immediate.rightPoint ? pointImgRightHover : pointImgRight" alt="">
                </button>
            </div>
        </div>
    </div>
    <footer-b></footer-b>

    <GetBDB v-if="GetBDAlert" :isShowTips="GetBDAlert" @closeGetBD="closeGetBD"/>
</template>
<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { EffectFade, EffectCreative, Mousewheel, Autoplay, Navigation, Keyboard, Pagination, Scrollbar} from "swiper";
// import SwiperType from 'swiper/types'
import 'swiper/css';
import GetBDB from '@/components/Guide/getBdB.vue'

const warning: any = computed(() => store.state.common?.warning )

SwiperCore.use([EffectFade, EffectCreative, Mousewheel, Autoplay, Navigation]);

const modules = [Navigation, Keyboard, Mousewheel, Pagination, Scrollbar];

const mySwiper: any = ref(null);

const swiperEvent: any = ref(null) 

const siderIndex: any = ref(0)

const onSwiper = (swiper: any) => {
    // swiper.slideTo(1);
    swiperEvent.value = swiper
};
const onSlideChange = (e: any) => {
    console.log('slide change', e.realIndex);
    if(!swiperEvent.value) return
    siderIndex.value = e.realIndex
    immediate.value = { leftPoint: select_title.value[e.realIndex].leftPoint, rightPoint: select_title.value[e.realIndex].rightPoint }
};




const router = useRouter()
const select_title = ref([
    {
        title: 'Create MetaMask wall',
        selectImg: 'https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/mobile_selectPage1.svg',
        select: false,
        leftPoint: false,
        rightPoint: true,
        bigTitle: 'Prepare the metamask wallet',
        des: 'Wallet is your boarding pass to our digital nation',
    },
    {
        title: 'In Cyberpop website',
        selectImg: 'https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/mobile_selectPage2.svg',
        select: false,
        leftPoint: true,
        rightPoint: true,
        bigTitle: 'Get Cyberpop BD NFT',
        des: 'Cyberpop BD NFT can be obtained in a number of ways',
    },
    {
        title: 'Get Cyberpop NFT',
        selectImg: 'https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/mobile_selectPage4.png',
        select: false,
        leftPoint: true,
        rightPoint: true,
        bigTitle: 'Download Cyberpop',
        des: '',
    },
    {
        title: 'Download & Play',
        selectImg: 'https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/mobile_selectPage3.svg',
        select: false,
        leftPoint: true,
        rightPoint: false,
        bigTitle: 'Login Cyberpop',
        des: 'Log in to the game and earn with BD',
    },
])
const icons = [
    {
        img: 'https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/chrome_icon.png'
    },
    {
        img: 'https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/firefox_icon.png'
    },
    {
        img: 'https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/edge_icon.png'
    },
    {
        img: 'https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/google_icon.png'
    },
    {
        img: 'https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/apple_icon.png'
    },
    {
        img: 'https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/and_icon.png'
    },
]

const immediate: any = ref({ leftPoint: select_title.value[0].leftPoint, rightPoint: select_title.value[0].rightPoint })
const swiperTo = (type: number) => {
    select_title.value.forEach(object => object.select = false)
    siderIndex.value = swiperEvent.value.realIndex
    type ? swiperEvent.value.slideTo(siderIndex.value + 1) : swiperEvent.value.slideTo(siderIndex.value - 1)
}

const hoverIn: any = ref(false)

let pointImgLeft: any = ref(''); 
let pointImgRight: any = ref(''); 
let pointImgLeftHover: any = ref(''); 
let pointImgRightHover: any = ref(''); 

const logoHImport = async() => {
    const a: any = await import('@/assets/nwGuide/point_icon_left.png');
    const b: any = await import('@/assets/nwGuide/point_icon_right.png');
    const c: any = await import('@/assets/nwGuide/point_left_hover.png');
    const d: any = await import('@/assets/nwGuide/point_icon_right_hover.png');
    pointImgLeft.value = a.default;
    pointImgRight.value = b.default;
    pointImgLeftHover.value = c.default;
    pointImgRightHover.value = d.default
}



const getBD = () => {
    GetBDAlert.value = true;
    store.dispatch('user/xplanChangeAni', true);
}

const closeGetBD = () => {
    store.dispatch('user/xplanChangeAni', false);
    setTimeout(() => {
        GetBDAlert.value = false
    }, 300);
}

const GetBDAlert: any = ref(false)
onMounted(() => {
    logoHImport()
})

</script>
<style lang="less" scoped>
    .container{
        // height: 1253px;
        background: #080808;
        color: #fff;
        a{
            text-decoration: none;
            color: #fff; 
        }
        .select_pages{
            position: relative;
            .bk{
                width: 100%;
                height: auto;
                position: absolute;
                top: -2.2vw;
                left: 0;
            }
            .point{
                position: absolute;
                width: 0;
                height: 0;
                border: 20px solid #818486;
                top: 50%;
                transform: translateY(-50%);
                opacity: .7;
            }
            .left_point{
                left: 1px;
                border-bottom-color: transparent;
                border-left-color: transparent;
                border-top-color: transparent;
            }
            .right_point{
                right: 1px;
                border-bottom-color: transparent;
                border-right-color: transparent;
                border-top-color: transparent;
            }
            .shouldCheck{
                filter: invert(50%) sepia(42%) saturate(1116%) hue-rotate(124deg) brightness(99.8155%) contrast(327%);
                opacity: 1;
            }
            .line{
                width: 260px;
                height: 4px;
                background: #00EDF9;
                position: relative;
                margin: 0 auto;
            }
            .box{
                width: 100%;
                width: 260px;
                margin: 0 auto;
                height: 270px;
                .mySwiper{
                    width: 100%;
                    height: 100%;
                    .warp{
                        width: 100%;
                        height: 100%;
                        text-align: center;
                        h2{
                            text-align: center;
                            font-size: 22px;
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            color: #FFFFFF;
                            line-height: 30px;
                            margin-top: 16px;
                        }
                        img{
                            width: 216px;
                            height: 216px;
                        }
                    }
                }
            }
        }
        .center_title{
            margin-top: 24px;
            margin-bottom: 20px;
            text-align: center;
            height: 48px;
            position: relative;
            .title{
                font-size: 22px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #35F1C8;
                line-height: 30px;
            }
            .des{
                font-size: 13px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: 18px;
                opacity: .5;
            }
        }
        .content, .notLineContent{
            background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/mobile_bk3.png');
            background-size: 100% 100%;
            width: 355px;
            min-height: 290px;
            margin: 0 auto;
            position: relative;
            margin-bottom: 30px;
            .title{
                img{
                    width: 29px;
                    height: 29px;
                    margin-right: 14px;
                }
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                height: 69px;
            }
            .content_chunk{
                margin-top: 30px;
                .content_title{
                    font-size: 18px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #FFFFFF;
                    line-height: 25px;
                    text-align: center;
                }
                .text_title{
                    width: 338px;
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #FFFFFF;
                    line-height: 22px;
                    text-align: center;
                    margin: auto;
                    margin-bottom: 15px;
                }
                .des{
                    width: 336px;
                    text-align: center;
                    font-size: 14px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 21px;
                    margin: 0 auto;
                    margin-bottom: 10px;
                    opacity: .8;
                }
                .wallet_box{
                    width: 231px;
                    // height: 131px;
                    padding-bottom: 5px;
                    background: rgba(12, 11, 11, 0.2);
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    padding-top: .73vw;
                    // display: flex;
                    // justify-content: center;
                    // flex-wrap: wrap;
                    position: relative;
                    margin: 0 auto;
                    margin-top: 1.04vw;
                    .point{
                        width: 14px;
                        height: 14px;
                        position: absolute;
                        right: 50px;
                        bottom: 10px;
                    }
                    .wallet_title{
                        font-size: 14px;
                        font-family: AlibabaPuHuiTi_2_85_Bold;
                        color: #FFFFFF;
                        line-height: 20px;
                        text-align: center;
                        margin-bottom: 14px;
                        margin-top: 14px;
                        position: relative;
                    }
                    .wallet_title::before{
                        content: " ";
                        position: absolute;
                        width: 24px;
                        height: 1px;
                        background: #FFFFFF;
                        opacity: 0.5;
                        left: 30px;
                        top: 9px;
                    }
                    .wallet_title::after{
                        content: " ";
                        position: absolute;
                        width: 24px;
                        height: 1px;
                        opacity: 0.5;
                        background: #FFFFFF;
                        right: 30px;
                        top: 9px;
                    }
                    .wallet_button{
                        margin: auto;
                        width: 117px;
                        height: 27px;
                        border: 1px solid rgba(255,255,255,0.5000);
                        margin-bottom: 12px;
                        text-align: center;
                        span{
                            font-size: 11px;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #FFFFFF;
                            line-height: 27px;
                        }
                    }
                }
                .position{
                    height: 47px;
                }
                .buttons{
                    margin-top: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .getBD_button{
                        background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/rainbow.png');
                        background-size: 100% 100%;
                        height: 50px;
                        width: 220px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        transition: all .2s ease-in-out;
                        margin-bottom: 64px;
                        img{
                            width: 28px;
                            height: 28px;
                            filter: invert(100%);
                            margin-right: 16px;
                        }
                        span{
                            font-size: 18px;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            color: #000000;
                        }
                    }
                    .getBD_button:hover{
                        opacity: .7;
                    }
                    .getCYT_button{
                        background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/big_white_broder.svg');
                        background-size: 100% 100%;
                        height: 50px;
                        width: 319px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        margin-top: 15px;
                        img{
                            width: 28px;
                            height: 28px;
                            margin-right: 15px;
                        }
                        span{
                            font-size: 18px;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                        }
                    }
                }

                .content_button{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 220px;
                    height: 50px;
                    border: 1px solid #FFFFFF;
                    font-size: 18px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #FFFFFF;
                    margin: 20px auto;
                    img{
                        width: 28px;
                        height: 28px;
                        margin-right: 15px;
                    }
                }
            }
        }
        .notLineContent{
            background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/mobile_bk4.png');
            height: 600px;
            .imgs{
                margin-top: 29px;
                margin: 0 auto;
                position: relative;
                text-align: center;
                margin-bottom: 40px;
                img{
                    width: 124px;
                    height: 124px;
                }
                p{
                    font-size: 24px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 46px;
                    // position: absolute;
                    margin-top: -50px;
                }
                span{
                    display: inline-block;
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #35F1C8;
                    margin-top: -40px;
                }
            }
            .buttons{
                .button_group{
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: center;
                    margin-bottom: 40px;
                    .button_title{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-bottom: 20px;
                        img{
                            width: 32px;
                            height: 32px;
                        }
                        span{
                            font-size: 18px;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #FFFFFF;
                            opacity: .5;
                        }
                    }
                    .dowload{
                        margin: 1;
                        .button{
                            background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwGuide/rainbow.png');
                            width: 220px;
                            height: 50px;
                            background-size: 100% 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 18px;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            color: #000000;
                            margin-bottom: 30px;
                            img{
                                width: 28px;
                                margin-right: 28px;
                            }
                        }
                    }
                }
            }
        }
        .elements{
            margin-top: 30px;
            position: relative;
            padding-bottom: 60px;
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
                    span{
                        color: #fff;
                        font-size: 20px;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #FFFFFF;
                        line-height: 28px;
                        opacity: 0.7;
                    }
                }
                button:first-child{
                    margin-right: 40px;
                }
                .hoverIn{
                    color: #35F1C8;
                    opacity: 1;
                }
                .left{
                    img{
                        width: 29px;
                        height: 17px;
                        margin-right: 20px;
                    }
                }
                .right{
                    img{
                        width: 29px;
                        height: 17px;
                        margin-left: 20px;
                    }
                }
            }
        }
    }
</style>
