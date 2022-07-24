<template>
    <header-a path="/" :type="0"></header-a>
    <div class="container">
        <div class="select_pages">
            <div class="bk1"></div>
            <div class="warp">
                <div class="item" v-for="(item, i) in select_title" :key="i" @click="selectpage(i)" @mousemove="item.hover = true" @mouseout="item.hover = false">
                    <div class="selected" v-show="item.select">
                        <img :style="{'margin-left': i == 3 ? '-1.2vw':''}" :src="item.selectImg" alt="">
                        <p class="title">{{ item.title }}</p>
                    </div>
                    <div class="Unselected" v-show="!item.select" >
                        <img :src="item.hover ? UnselectedHover : Unselected" alt="">
                        <span class="index">{{ '0' + (i + 1) }}</span>
                        <p class="title" :style="{'opacity': item.hover == true ? '1' : '0.7'}">{{ item.title }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="center_title" v-for="(item, i) in select_title" :key="i" v-show="siderIndex == i">
            <h2 class="title" v-if="siderIndex == i">{{ item.bigTitle }}</h2>
            <h5 class="des" v-if="siderIndex == i">{{ item.des || '&nbsp' }}</h5>
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
                                <span>{{ $t('message.guide.page1ContentTitle1') }}</span>
                            </div>
                            <div class="content">
                                <div class="content_chunk">
                                    <h2 class="content_title">{{ $t('message.guide.page1Content1') }}</h2>
                                    <a href="https://metamask.io" target="view_window">
                                        <div class="content_button">
                                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/chrome_icon.png" alt="">
                                            <b>Chrome</b>
                                        </div>
                                    </a>
                                    <!-- <a href="https://metamask.io" target="view_window">
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
                                    </a> -->
                                </div>
                                <div class="content_chunk">
                                    <!-- <h2 class="content_title">Mobile App</h2>
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
                                    </a> -->
                                </div>
                            </div>
                        </div>
                        <div class="chunk1">
                            <div class="title">
                                <span>{{ $t('message.guide.page1ContentTitle2') }}</span>
                            </div>
                            <div class="content">
                                <div class="text_chunk">
                                    <h2 class="content_title">{{ $t('message.guide.page1Content2') }}</h2>
                                    <!-- <p class="des">Storing digital assets such as Cyberpop assets and other tokens</p>
                                    <p class="des">Support multi-chain transaction, convenient cross-platform</p> -->
                                    <p class="des">{{ $t('message.guide.page1Content3') }}</p>
                                    <p class="des">{{ $t('message.guide.page1Content4') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="box">
                        <div class="chunk1">
                            <div class="title">
                                <span>{{ $t('message.guide.page2ContentTitle1') }}</span>
                            </div>
                            <div class="content">
                                <div class="text_chunk">
                                    <h2 class="content_title" style="margin-bottom: 1.3vw">{{ $t('message.guide.page2Content1') }}</h2>
                                    <h2 class="content_title" style="margin-bottom: 1.04vw">{{ $t('message.guide.page2Content2') }}</h2>
                                    <div class="buttons">   
                                        <div class="getBD_button" @click="getBD">
                                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/market_icon.png" alt="">
                                            <span>{{ $t('message.guide.page2Content3') }}</span>
                                        </div>
                                        <!-- <div class="getCYT_button">
                                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/market_icon.png" alt="">
                                            <span>Get CYT</span>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chunk1">
                            <div class="title">
                                <span>{{ $t('message.guide.page2ContentTitle2') }}</span>
                            </div>
                            <div class="content">
                                <div class="text_chunk">
                                    <h2 class="content_title" style="margin-bottom: 1.04vw">{{ $t('message.guide.page2Content4') }}</h2>
                                    <div class="buttons">
                                        <a href="https://discord.gg/y9b8p5C9TR" target="view_window">
                                            <div class="getCYT_button" style="width: 15.6vw; margin-left: 0; background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwGuide/big_white_broder.svg')">
                                                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/dc_icon.png" alt="">
                                                <span>{{ $t('message.guide.page2Content5') }}</span>
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
                                <p>{{ $t('message.guide.page3ContentTitle1') }}</p>
                                <span>{{ $t('message.guide.page3ContentTitle2') }}</span>
                            </div>
                            <div class="line"></div>
                            <div class="buttons">
                                <div class="button_group">
                                    <div class="button_title">
                                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/desktop.png" alt="">
                                        <span>{{ $t('message.guide.page3Content1') }}</span>
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
                                        <span>{{ $t('message.guide.page3Content2') }}</span>
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
                                <span>{{ $t('message.guide.page4ContentTitle1') }}</span>
                            </div>
                            <div class="content">
                                <div class="text_chunk">
                                    <h2 class="des" style="margin-top: 0;">{{ $t('message.guide.page4Content1') }}</h2>
                                    <div class="wallet_box">
                                        <h2 class="wallet_title">{{ $t('message.guide.page4Content2') }}</h2>
                                        <div class="wallet_button"><span>{{ $t('message.guide.page4Content3') }}</span></div>
                                        <div class="wallet_button"><span>{{ $t('message.guide.page4Content4') }}</span></div>
                                        <img class="point" src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/white_point.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chunk1">
                            <div class="title">
                                <span>{{ $t('message.guide.page4ContentTitle2') }}</span>
                            </div>
                            <div class="content">
                                <div class="text_chunk">
                                    <h2 class="des" style="margin-top: 0">{{ $t('message.guide.page4Content5') }}</h2>
                                    <h2 class="des">{{ $t('message.guide.page4Content6') }}</h2>
                                    <div class="wallet_box">
                                        <h2 class="wallet_title">{{ $t('message.guide.page4Content7') }}</h2>
                                        <div class="wallet_button"  style="width: 10.03vw"><span>{{ $t('message.guide.page4Content8') }}</span></div>
                                        <div class="wallet_button"  style="width: 10.03vw"><span>{{ $t('message.guide.page4Content9') }}</span></div>
                                        <img class="point" src="https://d2cimmz3cflrbm.cloudfront.net/nwGuide/white_point.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="elements">
            <!-- <div class="icons">
                <ul>
                    <li v-for="(item, i) in icons" :key="i">
                        <a :href="i == 3 ? 'https://play.google.com/store/apps/details?id=io.metamask&hl=zh&gl=US' : 'https://metamask.io'" target="view_window">
                            <img :src="item.img" alt="">
                        </a>
                    </li>
                </ul>
            </div> -->
            <div class="buttons">
                <button class="swiper-button-prev left" @mousemove="hoverIn = 0" @mouseout="hoverIn = false">
                    <img :src="hoverIn === 0 ? pointImgLeftHover : pointImgLeft" alt="">
                    <span :class="hoverIn === 0 ? 'hoverIn' : ''">{{ $t('message.guide.prev') }}</span>
                </button>
                <button class="swiper-button-next right" @mousemove="hoverIn = 1" @mouseout="hoverIn = false">
                    <span :class="hoverIn === 1 ? 'hoverIn' : ''">{{ $t('message.guide.next') }}</span>
                    <img :src="hoverIn === 1 ? pointImgRightHover : pointImgRight" alt="">
                </button>
            </div>
        </div>
    </div>
    <footer-a></footer-a>
    <GetBD v-if="GetBDAlert" :isShowTips="GetBDAlert" @closeGetBD="closeGetBD"/>
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
import GetBD from '@/components/Guide/getBd.vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n(); 

SwiperCore.use([EffectFade, EffectCreative, Mousewheel, Autoplay, Navigation]);

const modules = [Navigation, Keyboard, Mousewheel, Pagination, Scrollbar];

const mySwiper: any = ref(null);

const swiperEvent: any = ref(null) 

const siderIndex: any = ref(0)

const onSwiper = (swiper: SwiperType.Swiper) => {
    // swiper.slideTo(1);
    swiperEvent.value = swiper
};
const onSlideChange = (e: any) => {
    console.log('slide change', e.realIndex);
    if(!swiperEvent.value) return
    selectpage(e.realIndex)
    siderIndex.value = e.realIndex
};

const router = useRouter()
const select_title = ref([
    {
        title: t('message.guide.selecPageTitle1'),
        selectImg: 'https://d2cimmz3cflrbm.cloudfront.net/help/select_title1.png',
        select: true,
        hover: false,
        bigTitle: t('message.guide.pageTitle1'),
        des:  t('message.guide.pageDes1'),
    },
    {
        title: t('message.guide.selecPageTitle2'),
        selectImg: 'https://d2cimmz3cflrbm.cloudfront.net/help/select_title2.png',
        select: false,
        hover: false,
        bigTitle: t('message.guide.pageTitle2'),
        des: t('message.guide.pageDes2'),
    },
    {
        title: t('message.guide.selecPageTitle3'),
        selectImg: 'https://d2cimmz3cflrbm.cloudfront.net/help/select_title3.png',
        select: false,
        hover: false,
        bigTitle: t('message.guide.pageTitle3'),
        des: '',
    },
    {
        title: t('message.guide.selecPageTitle4'),
        selectImg: 'https://d2cimmz3cflrbm.cloudfront.net/help/select_title4.png',
        select: false,
        hover: false,
        bigTitle: t('message.guide.pageTitle4'),
        des:  t('message.guide.pageDes4'),
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

let pointImgLeft: any = ref(''); 
let pointImgRight: any = ref(''); 
let pointImgLeftHover: any = ref(''); 
let pointImgRightHover: any = ref(''); 
let Unselected: any = ref('');
let UnselectedHover: any = ref('');
const logoHImport = async() => {
    const a: any = await import('@/assets/nwGuide/point_icon_left.png');
    const b: any = await import('@/assets/nwGuide/point_icon_right.png');
    const c: any = await import('@/assets/nwGuide/point_left_hover.png');
    const d: any = await import('@/assets/nwGuide/point_icon_right_hover.png');
    const e: any = await import('@/assets/nwGuide/Unselected.png');
    const f: any = await import('@/assets/nwGuide/Unselected_hover.png');

    pointImgLeft.value = a.default;
    pointImgRight.value = b.default;
    pointImgLeftHover.value = c.default;
    pointImgRightHover.value = d.default;
    Unselected.value = e.default;
    UnselectedHover.value = f.default;
}




const next = () => {
    console.log(swiperEvent);
    swiperEvent.value.slideTo(2)
}

const getBD = () => {
    GetBDAlert.value = true;
    store.dispatch('user/xplanChangeAni', true);
}

const closeGetBD = () => {
    console.log(11);
    store.dispatch('user/xplanChangeAni', false);
    setTimeout(() => {
        GetBDAlert.value = false
    }, 300);
}

const GetBDAlert: any = ref(false)

const selectpage = (index: number) => {
    select_title.value.forEach(object => {
        object.select = false
    })
    select_title.value[index].select = true
    swiperEvent.value.slideTo(index + 1)
}

onMounted(() => {
    logoHImport()
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
                        position: relative;
                        img{
                            width: 100%;
                            height: 100%;
                            transform: scale(1.5);
                        }
                        .title{
                            position: absolute;
                            font-size: 0.83vw;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #FFFFFF;
                            line-height: 1.3vw;
                            top: 9.5vw;
                            width: 100%;
                            text-align: center;
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
                                    transition: all .2s ease-in-out;
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
                                .getBD_button:hover{
                                    opacity: .7;
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
                                    padding-top: .73vw;
                                    display: flex;
                                    justify-content: center;
                                    flex-wrap: wrap;
                                    position: relative;
                                    margin: 0 auto;
                                    margin-top: 1.04vw;
                                    .point{
                                        width: 0.78vw;
                                        height: 0.78vw;
                                        position: absolute;
                                        right: 2vw;
                                        bottom: 0;
                                    }
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
            margin-top: 2.9vw;
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
