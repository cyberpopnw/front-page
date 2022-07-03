<template>
    <header-b path="/" :type="0"></header-b>
    <my-video v-if="isPlay" @touchmove.prevent :mobel="true" :videotype="type2" @click="playVideo"></my-video>

    <!-- <div class="white-list flex_center" v-show="close">
        <div class="name">IDO WHITELISTS OPEN</div>
        <div class="total">Total Raise：<span>$750,000</span></div>
        <div class="desc">
            Limited to <span>2500</span> whitelists <br/> 
            Basic quota per person: <span>$300</span> <br/>
            Reach <span>4000</span> points to get a whitelist!
        </div>
        <img class="close" src="@/assets/nwhome/close.svg" alt="" @click="close = false">
    </div> -->
    <div class="banner">
        <section>
            <video-bg 
id="videobg" :sources="[`https://d3bhixjyozyk2o.cloudfront.net/5c64797a7cb8b72ed6255c8406b7294d.mp4`]" img="https://d2cimmz3cflrbm.cloudfront.net/nwhome/videobg3.png">
            </video-bg>
            <div class="titles"> 
                <div class="title-wrap flex_center">
                    <div class="title1" id="title1">{{$t('message.home.banner_title1Bef')}}<br/>{{$t('message.home.banner_title1Aft')}}</div>
                    <div class="title2">
                        {{$t('message.home.banner_title2')}}
                    </div>
                    <div class="btnbox flex_centent_center">
                        <div class="btn-register flex_center" @click="playToEarn()"><div>{{$t('message.home.banner_btn1')}}</div></div>
                        <div class="btn-video flex_center" @click="playVideo(5)">
                            <div>{{$t('message.home.banner_btn2')}}</div>
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/section-btnPlay.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="botm">#0 <span class="txt1">{{$t('message.home.banner_botmBef')}}</span><span class="txt2">{{$t('message.home.banner_botmAft')}}</span></div>
        </section>
        <footer>
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/section_buttom.svg" alt="" class="buttom">
        </footer>
    </div>
    <div class="download" v-show="showDown" :class="!isOut ? 'bounceShow' : 'bounceHide'">
        <div class="download-mask">
            <div class="wrap">
                <form action="#" onsubmit="">
                    <div class="button" style="margin-top: 48px;">
                        <input type="text" v-model="emailAddress" placeholder="Email address"/>
                    </div>
                    <div class="button" style="margin-top: 28px;margin-bottom: 9px;">
                        <input type="text" v-model="emailCode" placeholder="Email verification code"/>
                        <span>Send code</span>
                    </div>
                    <p class="tips">Account will be automatically registered</p>
                    <button type="button">LOGIN</button>
                </form>
            </div>
        </div>
        <div class="down_button" @click="downloadGame">
            <img class="person" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alen.png" alt="">
            <div class="down_cyberpop flex_center">
                <img class="media" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/android.png" alt="">
                <b>DOWNLOAD CYBERPOP</b>
            </div>
        </div>
    </div>
    <div class="nav-logos" ref="myNav">
        <a href="#">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/joinus.svg" alt="" class="joinus">
            <div>{{$t('message.home.nav_logos_join')}}</div>
        </a>
        <a href="https://discord.gg/y9b8p5C9TR" target="view_window">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/discordlogo.svg" alt="" class="nav-img1">
        </a>
        <a href="https://twitter.com/cyberpopnw" target="view_window">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/twitter.svg" alt="" class="nav-img2">
        </a>
        <a href="https://t.me/cyberpopnw" target="view_window">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/dianbao.svg" alt="" class="nav-img3">
        </a>
    </div>
    <div class="welcome">
        <div class="warp">
            <div class="title" id="ele1">{{$t('message.home.wel_titleBef')}}<p class="white">{{$t('message.home.wel_titleAft')}}</p></div>
            <div class="desc">
                {{$t('message.home.wel_desc1')}}
            </div>
            <div class="content">
                <div class="left">
                   <!-- <div class="start">01</div> -->
                   <img class="start" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/01-icon.svg" alt="">
                   <div class="pList">
                        <img id="lImg1" :src="imgIndex == 0 ? imgSrc : imgSrc0" alt="">
                        <img id="lImg2" :src="imgIndex == 1 ? imgSrc : imgSrc0" alt="">
                        <img id="lImg3" :src="imgIndex == 2 ? imgSrc : imgSrc0" alt="">
                        <img id="lImg4" :src="imgIndex == 3 ? imgSrc : imgSrc0" alt="">
                   </div>
                   <!-- <div class="end">/04</div> -->
                   <img class="end" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/04-icon.svg" alt="">
                </div>
                <div class="swiper1">
                    <div class="swiper-bg">
                        <div>
                            <img :class="imgIndex == 0 ? 'show' : ''" src="@/assets/nwhome/vSwiper_1.png" alt="">
                        </div>
                        <div>
                            <img :class="imgIndex == 1 ? 'show' : ''" src="@/assets/nwhome/vSwiper_2.png" alt="">
                        </div>
                        <div>
                            <img :class="imgIndex == 2 ? 'show' : ''" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/moonlightCentury3.png" alt="">
                        </div>
                        <div>
                            <img :class="imgIndex == 3 ? 'show' : ''" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/futureCity3.png" alt="">
                        </div>
                    </div>
                    <div class="swiper-bg2">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/swiper-bgBlack.png" alt="">
                    </div>
                    <div class="swiper-leftTop">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/swiper-leftTop.svg" alt="">
                        <ul>
                            <li :class="imgIndex == 0 ? 'show' : ''">{{$t('message.home.wel_swiper_title1')}}</li>
                            <li :class="imgIndex == 1 ? 'show' : ''">{{$t('message.home.wel_swiper_title2')}}</li>
                            <li :class="imgIndex == 2 ? 'show' : ''">{{$t('message.home.wel_swiper_title3')}}</li>
                            <li :class="imgIndex == 3 ? 'show' : ''">{{$t('message.home.wel_swiper_title4')}}</li>
                        </ul>
                    </div>
                    <div class="swiper-img">
                        <swiper
                            class="swiper-bg3"
                            direction="vertical"
                            :slides-per-view="1"
                            :mousewheel="true" 
                            @slideChangeTransitionEnd="onSlideChangeEnd"
                            :loop="true"
                            :speed="200"
                            :autoplay="true"
                        >
                            <swiper-slide><img src="@/assets/nwhome/vSwiper_1.png" alt=""></swiper-slide>
                            <swiper-slide><img src="@/assets/nwhome/vSwiper_2.png" alt=""></swiper-slide>
                            <swiper-slide><img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/moonlightCentury3.png" alt=""></swiper-slide>
                            <swiper-slide><img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/futureCity3.png"  alt=""></swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="nobody">
        <div class="nobody-wrap flex_align_center">
            <div class="nobody-left">
                <div class="nobody-img"></div>
                <!-- <img id="role" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/nobody-leftBg3.png" alt="">
                <div class="nobody-left-tip">
                    <div>{{$t('message.home.nobody_role_tipBef')}}</div>
                </div> -->
                <div class="nobody-left-tip">
                    <div v-if="tipIndex == 0">{{$t('message.home.nobody_role_tipBef_1')}}</div>
                    <div v-else-if="tipIndex == 1">{{$t('message.home.nobody_role_tipBef_2')}}</div>
                    <div v-else>{{$t('message.home.nobody_role_tipBef_3')}}</div>
                </div>
                <swiper
                    class="mySwiper"
                    :loop="true"
                    :speed="200"
                    :autoplay="true"
                    @slideChangeTransitionEnd="onSlideLeft"
                    :effect="'creative'"
                    :creativeEffect="{
                        prev: {
                            shadow: true,
                            translate: ['-120%', 0, -500],
                        },
                        next: {
                            shadow: true,
                            translate: ['120%', 0, -500],
                        },
                    }"
                >
                    <swiper-slide>
                        <img class="role" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/nobody-leftBg3.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="role" src="@/assets/nwhome/lSwiper_1.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="role" src="@/assets/nwhome/lSwiper_2.png" alt="">
                    </swiper-slide>
                </swiper>
            </div>
            <div class="nobody-right flex_align_center">
                <div class="title" id="ele2">{{$t('message.home.nobody_r_titleBef')}}<br/>{{$t('message.home.nobody_r_titleAft')}}</div>
                <div class="subtitle">{{$t('message.home.nobody_r_subtitle')}}</div>
                <div class="desc">
                    {{$t('message.home.nobody_r_desc1')}}
                </div>
                <div class="video">
                    <img class="videoBg" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/yellowBg-r.svg" alt="">
                    <img class="banner" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/nobody-videoBg.png" alt="">
                    <div class="video-wrap flex_center">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/nobody-controls.svg" alt="" @click="playVideo(4)">
                    </div>
                    <div class="content">
                        <div class="video-title">#0 {{$t('message.home.nobody_r_video_txtBef')}}<span class="yellow">{{$t('message.home.nobody_r_video_txtAft')}}</span></div>
                        <div class="video-subtitle">{{$t('message.home.nobody_r_video_subtxt')}}</div>
                    </div>
                </div>
                <div class="getNft-wrap">
                    <div class="getNft"></div>
                    <div class="txt">{{$t('message.home.nobody_r_getBft')}}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="make">
        <div class="make-wrap">
            <!-- <img class="title-bg" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/title-bg.png" alt=""> -->
            <div class="title" id="ele3">{{$t('message.home.make_title_b')}}</div>
            <div class="subtitle">{{$t('message.home.make_subtitle')}}</div>
            <div class="desc">
                {{$t('message.home.make_desc')}}
            </div>
            <div class="icon">
                <div class="txt">{{$t('message.home.make_cross')}}</div>
                <div class="icon-img">
                    <div>
                        <img class="icon4" src="@/assets/nwhome/make-avala.svg" alt="">
                        <!-- <img class="icon1" src="@/assets/nwhome/make-flow.svg" alt=""> -->
                        <img class="icon3" src="@/assets/nwhome/make-ethernet.png" alt="">
                    </div>
                    <div>
                        <img class="icon2" src="@/assets/nwhome/make-polygon.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="make-img">
                <img class="yellowBg-r" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/yellowBg-r.svg" alt="">
                <img class="yellowBg-l" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/yellowBg-l.svg" alt="">
                <ul>
                    <li>
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/make-img1.png" alt="">
                        <div>{{$t('message.home.make_img_txt1')}}</div>
                    </li>
                    <li>
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/make-img2.png" alt="">
                        <div>{{$t('message.home.make_img_txt2')}}</div>
                    </li>
                    <li>
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/make-img3.png" alt="">
                        <div>{{$t('message.home.make_img_txt3')}}</div>
                    </li>
                    <li>
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/make-img4.png" alt="">
                        <div class="tech">{{$t('message.home.make_img_txt4')}}</div>
                    </li>
                </ul>
            </div>
            <!-- <div class="opensea" @mouseenter="openseaEnter()" @mouseleave="openseaLeave()"> -->
            <div class="opensea">
                <div class="opensea-title">{{$t('message.home.make_opensea_title')}}</div>
                <div class="openUrl" target="view_window">
                    <!-- <a href=""> -->
                    <div>
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/openSea.png" alt="">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/make-rightArrow.svg" alt="">
                    </div>
                    <!-- </a> -->
                </div>
                <div id="openMask" class="mask"></div>
            </div>  
        </div>
    </div>
    <div class="news">
        <div class="news-wrap">
            <div class="title" id="ele4">{{$t('message.home.news_title')}}</div>
            <div class="news-top flex_align_center" @click="toYoutube($event)">
                <div class="channel">{{$t('message.home.news_lt_channel')}}</div>
                <div class="arrival">{{$t('message.home.news_lt_arrival')}}</div>
                <div class="news-logo flex_align_center">
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/news-logo.svg" alt="">
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/youtube-play.svg" alt="">
                </div>
            </div>
            <div class="news-img" @click="newsActiveSrc()">
                <img :class="{'newsShow': showNewsImg == 0}" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/news-bg-3.png" alt="">
                <img :class="{'newsShow': showNewsImg == 1}" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/news-bg2-3.png" alt="">
                <div class="desc">
                    <div>{{ $t(newsTitle1) }}</div>
                </div>
            </div>
            <ul @click="newsActiveSrc()">
                <li>
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/news-img1.png" id="myNews1" class="myNews" @mouseover="newsHover(0,newsStatictxt1)" @click="newsActive(0,newsStatictxt1)" alt="">
                    <div class="read">
                        <div class="txt">{{$t('message.home.news_lcard1_txt')}}</div>
                        <div class="date">{{$t('message.home.news_lcard1_date')}}</div>
                        <div class="toRead">{{$t('message.home.news_lcard1_toRead')}} ></div>
                    </div>
                </li>
                <li>
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/news-img2.png" id="myNews2" class="myNews" @mouseover="newsHover(1,newsStatictxt2)" @click="newsActive(1,newsStatictxt2)" alt="">
                    <div class="read">
                        <div class="txt">{{$t('message.home.news_lcard2_txt')}}</div>
                        <div class="date">{{$t('message.home.news_lcard1_date')}}</div>
                        <div class="toRead">{{$t('message.home.news_lcard1_toRead')}} ></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="roadmap">
        <div class="roadmap-bg">
            <img class="roadmap-bg1" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/roadmap-bg1.png" alt="">
            <div class="roadmap-center">
                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/roadmap-icon.svg" alt="">
                <div></div>
            </div>
            <img class="roadmap-bg2" src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/roadmap-bg2.svg" alt="">
        </div>
        <div class="roadmap-wrap">
            <div class="title" id="ele5">{{ $t('message.home.roadmap_title') }}</div>
            <div class="time1 timeWidth-r maptime" id="time1">
                <div class="stage">{{ $t('message.home.roadmap_s1') }}</div>
                <div class="date"><span class="span-l"></span>2021.03</div>
                <img class="check" src="@/assets/nwhome/check-circle-fill.svg" alt="">
                <div class="event-r checkgreen">
                    {{ $t('message.home.roadmap_s1_d1_e1') }} <br/>
                    {{ $t('message.home.roadmap_s1_d1_e2') }} <br/>
                    {{ $t('message.home.roadmap_s1_d1_e3') }} 
                </div>
            </div>
            <div class="time2 timeWidth-l maptime" id="time2">
                <div class="date">2021.10<span class="span-r"></span></div>
                <img class="check" src="@/assets/nwhome/check-circle-fill.svg" alt="">
                <div class="event-l checkgreen">
                    {{ $t('message.home.roadmap_s1_d2_e1') }} <br/>
                    {{ $t('message.home.roadmap_s1_d2_e2') }} <br/>
                    {{ $t('message.home.roadmap_s1_d2_e3') }} <br/>
                    {{ $t('message.home.roadmap_s1_d2_e4') }}
                </div>
            </div>
            <div class="time3 timeWidth-r maptime" id="time3">
                <div class="date"><span class="span-l"></span>2022.04</div>
                <div class="event-r checkgreen">
                    {{ $t('message.home.roadmap_s1_d3_e1') }} <br/>
                    {{ $t('message.home.roadmap_s1_d3_e2') }} <br/>
                    <span class="incomplete">{{ $t('message.home.roadmap_s1_d3_e3') }} </span> <br/>
                    {{ $t('message.home.roadmap_s1_d3_e4') }}
                </div>
            </div>
            <div class="time4 timeWidth-l maptime" id="time4">
                <div class="stage">{{ $t('message.home.roadmap_s2') }}</div>
                <div class="date">2022.06<span class="span-r"></span></div>
                <div class="event-l">
                    {{ $t('message.home.roadmap_s2_d1_e1') }} <br/>
                    {{ $t('message.home.roadmap_s2_d1_e2') }} <br/>
                    {{ $t('message.home.roadmap_s2_d1_e3') }} <br/>
                    {{ $t('message.home.roadmap_s2_d1_e4') }} <br/>
                    {{ $t('message.home.roadmap_s2_d1_e5') }}
                </div>
            </div>
            <div class="time5 timeWidth-r maptime" id="time5">
                <div class="date"><span class="span-l"></span>2022.10</div>
                <div class="event-r">
                    {{ $t('message.home.roadmap_s2_d2_e1') }} <br/>
                    {{ $t('message.home.roadmap_s2_d2_e2') }} <br/>
                    {{ $t('message.home.roadmap_s2_d2_e4') }} <br/>
                    {{ $t('message.home.roadmap_s2_d2_e6') }}
                </div>
            </div>
            <div class="time6 timeWidth-l maptime" id="time6">
                <div class="stage">{{ $t('message.home.roadmap_s3') }}</div>
                <div class="date"><span class="span-r"></span>2023.01</div>
                <div class="event-l">
                    {{ $t('message.home.roadmap_s3_d1_e1') }} <br/>
                    {{ $t('message.home.roadmap_s3_d1_e2') }} <br/>
                    {{ $t('message.home.roadmap_s3_d1_e3') }} <br/>
                    {{ $t('message.home.roadmap_s3_d1_e4') }}  <br/>
                    {{ $t('message.home.roadmap_s3_d1_e5') }}
                </div>
            </div>
            <div class="time7 timeWidth-r maptime" id="time7">
                <div class="date"><span class="span-l"></span>2023.06</div>
                <div class="event-r">
                    {{ $t('message.home.roadmap_s3_d2_e1') }}  <br/>
                    {{ $t('message.home.roadmap_s3_d2_e2') }}  <br/>
                    {{ $t('message.home.roadmap_s3_d2_e4') }}
                </div>
            </div>
            <div class="time8 timeWidth-l maptime" id="time8">
                <div class="date"><span class="span-r"></span>2023.12</div>
                <div class="event-l">
                    {{ $t('message.home.roadmap_s3_d3_e1') }} <br/>
                    {{ $t('message.home.roadmap_s3_d3_e2') }} <br/>
                    {{ $t('message.home.roadmap_s3_d3_e3') }}  <br/>
                    {{ $t('message.home.roadmap_s3_d3_e4') }}
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="team">
        <div class="title" id="ele7">{{ $t('message.home.team_title') }}</div>
        <div class="wrap">
            <ul>
                <li v-for="(item,index) in teamInfo" :key="index">
                    <div class="avator"><img :src="item.img" alt=""></div>
                    <div class="msg">
                        <div>{{ item.name }}</div>
                        <span>{{ item.desc }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div> -->
    <div class="new-team">
        <div class="title" id="ele7">{{ $t('message.home.team_title') }}</div>
        <div class="content">
            <ul>
                <li v-for="(item,index) in teamInfo" :key="index" class="flex_center">
                    <div class="warp"  @click="item.card = !item.card">
                        <img src="@/assets/nwhome/team_icon.png" class="icon" alt="">
                        <div class="avator"><img :src="item.img" alt=""></div>
                        <div class="msg">
                            <p></p>
                            <div>{{ item.name }}</div>
                            <span>{{ item.desc }}</span>
                            <img src="@/assets/nwhome/point.png" alt="">
                        </div>
                    </div>
                    <div :class="{'card': 1, 'showCard': item.card}"  @click="item.card = !item.card">
                        <div class="msg">
                            <div>{{ item.name }}</div>
                            <span>{{ item.desc }}</span>
                        </div>
                        <div class="text" v-html="$t(item.info)"></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
   <div class="partners">
        <div class="title flex_center" id="ele6">{{ $t('message.home.part_title') }}
            <img class="xplan" @click="showxplan()" src="@/assets/nwhome/xplan.svg" alt="" >
        </div>
        <div class="logo flex_between">
            <a href="https://www.ubisoft.com/en-us/" target="view_window">
                <img class="logo9" src="@/assets/nwhome/UBISOFT.png" alt="">
            </a>
            <a href="https://aws.amazon.com/" target="view_window">
                <img class="logo2" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/aws.png" alt="">
            </a>
            <a href="https://www.avax.network/" target="view_window">
                <img class="logo8" src="@/assets/nwhome/make-avala.svg" alt="">
            </a>
            <a href="https://www.mexc.com/pioneer" target="view_window">
                <img class="logo12" src="@/assets/nwhome/pioneerlogo.png" alt="">
            </a>
            <a href="https://www.mexc.com/" target="view_window">
                <img class="logo12" src="@/assets/nwhome/mexc.png" alt="">
            </a>
            <a href="https://www.gate.io" target="view_window">
                <img class="logo10" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alpha_gate.png" alt="">
            </a>
            <div>
                <img class="logo8" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/hashshareBank.png" alt="">
            </div>
            <a href="https://consensys.net/" target="view_window">
                <img class="logo7" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/consensys-logo.svg" alt="">
            </a>
            <div>
                <img class="logo1" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/partners4.png" alt="">
            </div>
            <a href="https://skywater.vc/" target="view_window">
                <img class="logo3" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/skywater2.png" alt="">
            </a>
            <a href="https://www.jinance.org/" target="view_window">
                <img class="logo4" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/partners3.png" alt="">
            </a>
            <a href="https://t3e.vc/" target="view_window">
                <img class="logo5" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/T3E-Logo.png" alt="">
            </a>
            <a href="https://polygon.technology/" target="view_window">
                <img class="logo12" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alpha_polygon.png" alt="">
            </a>
            <div>
                <img class="logo6" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/partners5-2.png" alt="">
            </div>
            <a href="http://www.abga.asia/" target="view_window">
                <img class="logo10" src="@/assets/nwhome/ABGA.svg" alt="">
            </a>
            <a href="https://www.earnguild.io/" target="view_window">
                <img class="logo11" src="@/assets/nwhome/Earn-Guild.png" alt="">
            </a>
            <!-- <a href="https://ethereum.org/en/" target="view_window">
                <img class="logo12" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alpha_eth.png" alt="">
            </a> -->
            <!-- <a href="https://www.binance.com/" target="view_window">
                <img class="logo12" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alpha_binan.png" alt="">
            </a> -->
            <a href="https://pancakeswap.finance/" target="view_window">
                <img class="logo12" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alpha_pancake.png" alt="">
            </a>
            <a href="https://metamask.io/" target="view_window">
                <img class="logo12" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alpha_metamask.png" alt="">
            </a>
            <a href="https://www.tokenpocket.pro/" target="view_window">
                <img class="logo12" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alpha_tokenpocket.png" alt="">
            </a>
            <a href="https://opensea.io/" target="view_window">
                <img class="logo12" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alpha_opensea.png" alt="">
            </a>
            <a href="https://tofunft.com/" target="view_window">
                <img class="logo11" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alpha_tofu.png" alt="">
            </a>
            <a href="https://chain.link/" target="view_window">
                <img class="logo12" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/chain_link.png" alt="">
            </a>
            <!-- <a href="https://www.bybit.com/en-US/" target="view_window">
                <img class="logo10" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alpha_bybit.png" alt="">
            </a> -->
            <div>
                <img class="logo12" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alpha_jdventures.png" alt="">
            </div>
            <a href="https://www.nsguild.net/guild" target="view_window">
                <img class="logo12" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alpha_nsguild.png" alt="">
            </a>
            <div>
                <img class="logo11" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alpha_richmeta.png" alt="">
            </div>
            <a href="https://coinmarketcap.com/" target="view_window">
                <img class="logo12" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alpha_coinMarkrt.png" alt="">
            </a>
        </div>
    </div>
    <div class="will">
        <div class="title" id="ele6">{{ $t('message.home.will_title') }}</div>
        <ul class="logo flex_centent_center">
            <li>
                <img class="logo3" src="@/assets/nwhome/googleplay.svg" alt="">
                <div class="googleplay">{{ $t('message.home.will_logo3_txt') }}</div>
            </li>
            <li>
                <img class="logo4" src="@/assets/nwhome/apple.svg" alt="">
                <div class="store">{{ $t('message.home.will_logo4_txt') }}</div>
            </li>
            <li>
                <img class="logo1" src="@/assets/nwhome/windows-fill.svg" alt="">
                <div class="window">{{ $t('message.home.will_logo1_txt') }}</div>
            </li>
            <li>
                <img class="logo2" src="@/assets/nwhome/steam.svg" alt="">
                <div class="steam">{{ $t('message.home.will_logo2_txt') }}</div>
            </li>
        </ul>
    </div>
    <div class="register flex_align_center">
        <div class="title">{{ $t('message.home.reg_title') }}</div>
        <div class="subtitle">{{ $t('message.home.reg_subtitle') }}</div>
        <div class="email">
            <div class="email-wrap">
                <input class="email-input" type="text" v-model="email" :placeholder="$t('message.home.reg_Email')">
            </div>
            <div class="sub" @click="submit()">{{ $t('message.home.reg_submit') }}</div>
        </div>
        <a class="link" href="https://forms.gle/VvU8nZymrikgFipR7" target="view_window">{{ $t('message.home.reg_link') }}</a>
    </div>
    <footer-b></footer-b>
    <xplanpro-b v-if="xplanActive"></xplanpro-b>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 

import { useI18n } from 'vue-i18n';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { EffectFade, EffectCreative, Mousewheel, Autoplay} from "swiper";
import { clear } from 'console';
SwiperCore.use([EffectFade, EffectCreative, Mousewheel, Autoplay]);
const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;
const router = useRouter()
let close:any = ref(true)
const teamInfo: any = ref([
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/teme2.png',
        name: 'Yu Vitalik ',
        desc: 'CMO',
        info: 'message.home.team_mem_frank',
        card: false,
    },
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/teme1.png',
        name: 'Yeldar Botabayev',
        desc: 'Co-Founder',
        info: 'message.home.team_mem_YuSonEn',
        card: false,
    },
])




// xplan
const realId = computed(() => store?.state.wallet?.realId);
const idTemp = computed(() => store?.state.wallet?.idTemp);
const xplanActive = computed(() => store?.state.user?.xplanActive);
const chainId: any = computed(() => store.state.user?.chainId );
const showxplan = () => {
    if( realId.value != -1 ){
        if( chainId.value == 80001 ){
            Web3.getBalance(idTemp.value).then((res: any) => {
                token0Number.value = res[0];
                if(token0Number.value <= 0){
                    store.dispatch('user/changeXplan',true);
                    store.dispatch('user/xplanChangeAni',true);
                }else{
                    window.open('https://xplan.cyberpop.online');
                }
            })
        }else{
            store.dispatch('user/TipsState', {show: true, info: { hasLoading: false, hasClose: true, title: 'Network Error', content: t('message.common.metamask.switch'), addNetwork: true}});
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.common.mess_xplan_err')}})
        }
    }else{
        connect()
    }
}

// register
let showDown:any = ref(false);

const playToEarn = () => {
    router.push({ path: '/download', query: { code: router.currentRoute.value.query.code, isClick: 1 } })
    return;
    if( realId.value != -1 ){
        showDown.value = true; 
        isOut.value = false;
    }else{
        connect()
    }
}


const id: any = ref(0)
const connect: any = async () => {
    store.dispatch('wallet/walletMenuAni', false)
    const ismessage: any = await Web3.hasMetaMask()

    if( ismessage == 'No install' ){
        store.dispatch('wallet/metaChange',true);
        store.dispatch('wallet/metaChangeAni',true);
        store.dispatch('wallet/checkInstall',false);
    }else{
        store.dispatch('wallet/metaChange',true);
        store.dispatch('wallet/metaChangeAni',true);
        store.dispatch('wallet/checkInstall',true);
        const [accounts]: any = await Web3.login().then((res: any) => {
            store.dispatch('wallet/metaChange',false);
            store.dispatch('wallet/metaChangeAni',false);
            store.dispatch('wallet/walletloggined',true);
            return res;
        })
        id.value = accounts;
        let len = id.value.length-1;
        id.value = id.value[0]+id.value[1]+id.value[2]+id.value[3]+id.value[4]+"*****"+id.value[len-3]+id.value[len-2]+id.value[len-1]+id.value[len];
        store.dispatch('wallet/connectWallet',{realId:id.value, idTemp:accounts});// include * id、all number id
        store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.common.mess_succ')}})
    }
}

// download
let isOut:any = ref(false)
const emailAddress: any = ref('');
const emailCode: any = ref('');
const downloadGame = () => {
    window.location.href = 'https://d3bhixjyozyk2o.cloudfront.net/Cyberpop_1.0.0_2022_04_27_23_38_36_V25_Dev.false_Symbols.AWS%40USE_NFT_ASSETS.apk'
    proxy.$api.post(`/code/user/download?address=${idTemp.value}`).then((res: any) => {
        console.log(res);
    }).catch( (err: any) => {
        console.log(err)
    })
}



// swiper
let imgSrc0: any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwhome/welcome-leftGray.svg');
let imgSrc: any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwhome/welcome-leftYellow.svg');
let imgIndex: any = ref(0);

const onSwiper = (swiper: any) => {
    console.log('swiper',swiper.activeInde);
};

const onSlideChangeEnd = (swiper: any) => {
    imgSrc.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/welcome-leftYellow.svg';
    imgIndex.value = swiper.realIndex;
};

let tipIndex: any = ref(0);
const onSlideLeft = (swiper: any) => {
    tipIndex.value = swiper.realIndex;
};
 

// Right icon scroll
const myNav:any = ref(null);
const windowScroll: any = () => {
    const navHeight: number = myNav.value.offsetHeight;
    const cHeight: number = document.documentElement.clientHeight;
    const scrollHeight: number = document.documentElement.scrollTop;
    startMove(Math.ceil((cHeight - navHeight - 130) + scrollHeight));
}

let timer: any = null;
const startMove = (target : any) => {
    clearInterval(timer);
    timer = setInterval(() => {
        let speed = (target - myNav.value.offsetTop) / 30;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if( target === myNav.value.offsetTop ){
            clearInterval(timer);
        }else{
            myNav.value.style.top = myNav.value.offsetTop + speed + 'px';
        }
    },5 )
}



// news
let showNewsImg: any = ref(0);
let newsStatictxt1:any = ref( 'message.home.news_rtitle1' );
let newsStatictxt2:any = ref( 'message.home.news_rtitle2' );


let newsTitle1:any = ref( 'message.home.news_rtitle1' );
const newsHover = (index: any, txt1:any) => {
    showNewsImg.value = index;
    newsTitle1.value = txt1;

    let myNews = document.getElementsByClassName('myNews');
    let myNewsLen = myNews.length;
    for(let i = 0; i< myNewsLen;i++){
        myNews[i].addEventListener('mouseout',() => {
            showNewsImg.value = newsFlag.value;
            newsTitle1.value = clickTitle1.value;
        })
    } 
}
let newsFlag:any = ref(0);
let clickTitle1:any = ref( 'message.home.news_rtitle1' );
const newsActive = (index: any, txt1:any) => {
    showNewsImg.value = index;
    newsFlag.value = index;
    clickTitle1.value = txt1;


    let myNews = document.getElementsByClassName('myNews');
    let myNewsLen = myNews.length;
    for(let i = 0; i< myNewsLen;i++){
        myNews[i].addEventListener('mouseout',() => {
            showNewsImg.value = index;
            newsTitle1.value = txt1;
        })
    } 
}

const newsActiveSrc = () => {
    if(showNewsImg.value === 0){
        window.open('https://finance.yahoo.com/news/cyber-world-launched-three-maps-172500987.html');
    }else if(showNewsImg.value === 1){
        window.open('https://cyberbump.net/cyber-pop-new-blockchain-game-new-world/');
    }
}

const toYoutube= (event:any) => {
    event.stopPropagation();
    window.open('https://www.youtube.com/channel/UCtVpocr6cpS7Ub-WxRSJ3mQ');
}



// openSea
const openseaEnter = () => {
    const openMask = document.getElementById("openMask") as HTMLElement;
    openMask.classList.add('openAnimation');
    openMask.classList.remove('stopOpenAnimation');
}

const openseaLeave = () => {
    const openMask = document.getElementById("openMask") as HTMLElement;
    openMask.classList.add('stopOpenAnimation');
    openMask.classList.remove('openAnimation');
}




const email: any = ref("");


// play video
const token0Number:any = ref(0)

let type2: any = ref(1);
let isPlay: any = ref(false);
const playVideo = (type: any) => {
    type2.value = type
    isPlay.value = !isPlay.value;
}



const submit = () => {
    // let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/; //正则
    let reg = /@/;
    if(email.value === ""){ // Input cannot be empty
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.home.mess_register_null')}})
        return false;
     }else if(!reg.test(email.value)){ // The regular validation failed. The format is incorrect
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.home.mess_register_regtest')}})
        return false;
    }


    proxy.$api.get('/api/setEmail?email=' + email.value ).then((res: any) => {
        if(res.data){
            email.value = "";
            store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.home.mess_register_succ')}})
        }else{
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.home.mess_register_else')}})
        }
    }).catch( (err: any) => {
        console.log(err)
    })
}



let submitMove: any = ref(false);
const mouseEnter = () => {
    submitMove.value = true;
}

const mouseLeave = () => {
    submitMove.value = false;
}

const checkScrollHeightAndLoadAnimation: any = () => {
        const windowHeight: Number = window.innerHeight;

        let ele1 = document.getElementById("ele1") as HTMLElement;
        let ele2 = document.getElementById("ele2") as HTMLElement;
        let ele3 = document.getElementById("ele3") as HTMLElement;
        let ele4 = document.getElementById("ele4") as HTMLElement;
        let ele5 = document.getElementById("ele5") as HTMLElement;
        let ele6 = document.getElementById("ele6") as HTMLElement;
        let mapList = document.getElementsByClassName('maptime');
        const mapListLen = mapList.length;
        const ele1Top: Number = ele1.getBoundingClientRect().top; // Distance from top of screen
        const ele2Top: Number = ele2.getBoundingClientRect().top; 
        const ele3Top: Number = ele3.getBoundingClientRect().top; 
        const ele4Top: Number = ele4.getBoundingClientRect().top; 
        const ele5Top: Number = ele5.getBoundingClientRect().top; 
        const ele6Top: Number = ele6.getBoundingClientRect().top; 
        let timeTop:any = {};
        for( let t = 0; t < mapListLen; t++){
            timeTop['timeTop' + t] = mapList[t].getBoundingClientRect().top;
        }

        let arr = [
            {
                el: ele1,
                top: ele1Top
            },
            {
                el: ele2,
                top: ele2Top
            },
            {
                el: ele3,
                top: ele3Top
            },
            {
                el: ele4,
                top: ele4Top
            },
            {
                el: ele5,
                top: ele5Top
            },
            {
                el: ele6,
                top: ele6Top
            },
        ]
        for(let i = 0; i < arr.length; i++){
            if(arr[i].top < windowHeight){
                arr[i].el.classList.add('fadeInUp')
            }
            
        }
        if( timeTop.timeTop0 < windowHeight) mapList[0].classList.add('fadeInRight')
        if( timeTop.timeTop2 < windowHeight) mapList[2].classList.add('fadeInRight')
        if( timeTop.timeTop3 < windowHeight) mapList[4].classList.add('fadeInRight')
        if( timeTop.timeTop6 < windowHeight) mapList[6].classList.add('fadeInRight')
        if( timeTop.timeTop1 < windowHeight) mapList[1].classList.add('fadeInLeft')
        if( timeTop.timeTop3 < windowHeight) mapList[3].classList.add('fadeInLeft')
        if( timeTop.timeTop5 < windowHeight) mapList[5].classList.add('fadeInLeft')
        if( timeTop.timeTop7 < windowHeight) mapList[7].classList.add('fadeInLeft')
}


onUnmounted(() => {
    window.removeEventListener("scroll", checkScrollHeightAndLoadAnimation, true);
    window.removeEventListener('scroll', windowScroll, true);
})

onMounted(() => {
    store.dispatch('user/changeXplan',false);
    window.addEventListener('scroll', checkScrollHeightAndLoadAnimation, true);
    window.addEventListener('scroll', windowScroll, true);
    store.dispatch('user/showDialog',{show: false, info: {}});
    window.scrollTo(0,0);
    console.log(router.currentRoute.value.query.code, 'router.currentRoute.value.query.code');
})

</script>
<style lang="less" scoped>
    @keyframes openAnimation {
        0%{
            left: -500px;
        }
        100%{
            left: -80px;
        }
    }
    @keyframes stopOpenAnimation {
        0%{
            left: -80px;
        }
        100%{
            left: -920px;
        }
    }

    .white-list{
        z-index: 9;
        position: fixed;
        top: 0px;
        flex-direction: column;
        width: 100%;
        height: 192px;
        margin: 55px 0 0;
        color: #ffffff;
        background-image: url('../../../assets/nwhome/whitelist_banner_phone.png');
        background-size: 100% 100%;
        .name{
            font-size: 28px;
            font-family: AlibabaPuHuiTi_2_105_Heavy;
            line-height: 40px;
        }
        .total{
            margin: 4px 0;
            font-size: 16px;
            font-family: AlibabaPuHuiTi_2_105_Heavy;
            line-height: 22px;
            span{
                color: #12FD00; 
                font-size: 28px;
            }
        }
        .desc{
            width: 254px;
            font-size: 14px;
            font-family: AlibabaPuHuiTi_2_85_Bold;
            line-height: 24px;
            text-align: center;
            span{
                color: #12FD00;
                font-size: 16px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
            }
        }
        .close{
            position: absolute;
            top: 3px;
            right: 3px;
            width: 32px;
            height: 32px;
        }
    }
    .banner{
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        section{
            width: 100%;
            height: 100vh;
            overflow: hidden;
            .titles{
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                background-image: url('../../../assets/nwhome/section-cover.png');
                background-size: 101% 101%;
                background-position: -1vw 1vw;
                .title-wrap{
                    height: 100%;
                    flex-direction: column;  
                    .title1{
                        // width: 273px;
                        // height: 47px;
                        font-size: 26px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #FFFFFF;
                        line-height: 26px;
                        text-align: center;
                        font-weight: 900;
                        filter: drop-shadow( .4vw 0 0 #D236A5 )
                                drop-shadow( -.4vw 0 0 #72F0D9 );
                    }
                    .title2{
                        width: 227px;
                        height: 34px;
                        margin-top: 11px;
                        margin-bottom: 24px;
                        font-size: 12px;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        color: #FFFFFF;
                        line-height: 17px;
                        text-align: center;
                    }
                    .btnbox{
                        .btn-register{
                            width: 213px;
                            height: 75px;
                            margin-right: -6%;
                            color: #fff;
                            text-align: center;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/section-btn1.svg');
                            background-position: center;
                            background-size: 100% auto;
                            cursor: pointer;
                            div{
                                font-size: 12px;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                color: #FFFFFF;
                            }
                        }
                        .btn-video{
                            width: 213px;
                            height: 75px;
                            margin-left: -6%;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/section-btn2.svg');
                            background-position: center;
                            background-size: 100% auto;
                            cursor: pointer;
                            div{
                                font-size: 12px;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                color: #000000;
                                line-height: 17px;
                            }
                            img{
                                margin-left: 4px;
                                width: 12px;
                                height: 12px;
                            }
                        }
                        .btn-register:hover{
                            filter: drop-shadow(0 0 0.75rem #c42edb);
                        }
                        .btn-video:hover{
                            filter: drop-shadow(0 0 0.75rem #c42edb);
                        }
                    }
                }
            }
            .botm{
                position: absolute;
                bottom: 38px;
                width: 100%;
                text-align: center;
                font-size: 14px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                font-weight: 400;
                color: #04FFA2;
                line-height: 16px;
                .txt1{
                }
                .txt2{
                    font-size: 12px;
                    color: #ffffff;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                }
            }
        }
        .buttom{
            position: absolute;
            bottom: 7px;
            left: 0;
            right: 0;
            width: 18px;
            height: 18px;
            margin: 0 auto;
        }
    }
    .download{
        z-index: 9;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/down_backgournd.png');
        background-size: auto 100%;
        background-position: center top;
        .download-mask{
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
            width: 332px;
            height: 300px;
            background: #000000;
            .wrap{
                .button{
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/withborder.png');
                    width: 302px;
                    height: 44px;
                    background-size: 100% 100%;
                    font-size: 13px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #FFFFFF;
                    line-height: 18px;
                    margin: 0 auto;
                    position: relative;
                    
                    input{
                        line-height: 18px;
                        border: none;
                        outline: none;
                        width: 100%;
                        height: 100%;
                        background: none;
                        padding: 0 16px;
                        color: #fff;
                        font-family: AlibabaPuHuiTi_2_85_Bold;
                    }
                    span{
                        position: absolute;
                        right: 0;
                        font-size: 14px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #A6F779;
                        line-height: 20px;
                        top: 50%;
                        transform: translateY(-50%);
                        margin-right: 16px;
                    }
                }
                .tips{
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 17px;
                    margin-top: 9px;
                    margin-bottom: 27px;
                    text-align: center;
                }
                button{
                    border: none;
                    background: transparent;
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/greenButton.png');
                    background-size: 100% 100%;
                    width: 210px;
                    height: 52px;
                    margin: 0 auto;
                    display: block;
                    font-size: 18px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #000000;
                }
            }
        }
        .down_button{
            position: absolute;
            width: 270px;
            bottom: 70px;
            left: 0;
            right: 0;
            margin: 0 auto;
            .person{
                width: 114px;
                height: 115px;
                position: absolute;
                left: 0;
                right: 0;
                top: -80px;
                margin: auto;
            }
            .down_cyberpop{
                width: 270px;
                height: 60px;
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/down_button2.png');
                background-size: 100% 100%;
                font-size: 16px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                .media{
                    margin-right: 9px;
                    width: 22px;
                    height: 26px;
                }
            }
        }
    }
    .nav-logos{
        z-index: 3;
        position: absolute;
        top: 580px;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 47px;
        height: 280px;
        padding-bottom: 40px;
        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/nav-logoBg.svg');
        background-position: right bottom;
        background-repeat: no-repeat;
        background-size: auto 100%;
        a{
            text-decoration: none;
            text-align: center;
            img{
                margin-top: 3vw;
            }
            div{
                font-size: 10px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                color: #FFFFFF;
                line-height: 14px;
            }
            .joinus{
                width: 24px;
                height: 21px;
            }
            .nav-img1{
                width: 22px;
                height: 16px;
            }
            .nav-img2{
                width: 24px;
                height: 19px;
            }
            .nav-img3{
                width: 22px;
                height: 19px;
            }
            img:not(.joinus):hover{
                filter: drop-shadow(0 0 .5vw #00FF9C);
            }
        }
        a + a::before{
            display: inline-block;
            content: '';
            width: 40px;
            height: 1px;
            border-top: 1px solid #8147FF;
            transform: rotateX(180deg);
        }
        
    }
    .welcome{
        position: relative;
        width: 100%;
        height: 472px;
        background-color: #000000;
        z-index: -1;
        .warp{
            z-index: -1;
            position: absolute;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            .title{
                height: 67px;
                margin-top: 38px;
                font-size: 22px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #04FFA2;
                line-height: 33px;
                text-align: center;
                .white{
                    color: #fff;
                }
            }
            .desc{
                width: 86vw;
                margin-top: 17px;
                margin: 17px auto 0;
                font-size: 12px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: 17px;
                text-align: center;
            }
            .content{
                display: flex;
                width: 100%;
                height: 265px;
                z-index: -1;
                .left{
                    z-index: 1;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 74px 5px 0vw 24px;
                    .start{
                        position: absolute;
                        top: 7px;
                        left: -9px;
                        width: 10px;
                        height: 7px;
                    }
                    .end{
                        position: absolute;
                        top: 117px;
                        left: -13px;
                        width: 14px;
                        height: 8px;
                    }
                    .pList{
                        margin-top: 15px;
                        display: flex;
                        flex-direction: column;
                        img{
                            width: 2px;
                            height: 24px;
                            margin-bottom: .35vw;
                        }

                        .active{
                            width: 3px;
                            background-color: #EDFF00;
                        }
                    }
                    
                    
                }
                .swiper1{
                    z-index: 1;
                    position: relative;
                    height: 265px;
                    width: 340px;
                    overflow: hidden;
                    .swiper-bg{
                        position: absolute;
                        top: 40px;
                        left: 32px;
                        width: 326px;
                        height: 164px;
                        div{
                            filter: blur(4vw);
                            -webkit-filter: blur(4vw);
                            -moz-filter: blur(4vw);
                            -ms-filter: blur(4vw);   
                            -o-filter: blur(4vw);
                            img{
                                width: 100%;
                                height: 100%;
                                display: none;
                            }
                            img.show{
                                display: block;
                            }
                        }

                    }
                    .swiper-bg2{
                        position: absolute;
                        top: 34px;
                        width: 326px;
                        height: 170px;
                        overflow: hidden;
                        img{
                            width: 108%;
                            height: 106%;
                            z-index: -1;
                        }
                    }
                    .swiper-leftTop{
                        z-index: 2;
                        position: absolute;
                        top: 58px;
                        width: 93px;
                        height: 20px;
                        img{
                            width: 100%;
                        }
                        ul{
                            position: absolute;
                            top: 7px;
                            width: 100%;
                            text-align: center;
                            li{
                                font-size: 8px;
                                color: #000000;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                                display: none;
                            }
                            .show{
                                display: block;
                            }
                        }
                    }
                    .swiper-img{
                        width: 290px;
                        height: 125.6px;
                        margin-top: 68px;
                        margin-left: 12px;
                        .swiper-bg3{
                            width: 290px;
                            height: 125.6px;
                            img{
                                width: 100.1%;
                                height: 100%;
                                margin-left: -.1vw;
                            }
                        }
                        :deep(.swiper-vertical > .swiper-wrapper){
                            transition-timing-function: ease-in !important;
                        }
                    }
                }
            }
        }
    }
    .nobody{
        width: 100%;
        height: 881px;
        margin-top: -1px;
        background-color: #000000;
        display: flex;
        .nobody-wrap{
            width: 100%;
            height: 100%;
            flex-direction: column;
            .nobody-left{
                position: relative;
                width: 100%;
                height: 321px;
                .nobody-img{
                    z-index: 2;
                    pointer-events: none;
                    position: absolute;
                    top: 39px;
                    right: 0;
                    width: 146px;
                    height: 235px;
                    background: linear-gradient(90deg, rgba(111, 38, 190, 0) 0%, rgba(156, 0, 248, 0.64) 64%, #7A00F8 100%);
                }
                .nobody-left-tip{
                    z-index: 2;
                    pointer-events: none;
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    div{
                        position: absolute;
                        top: 160px;
                        right: 40px;
                        padding-right: 9px;
                        width: 145px;
                        height: 29px;
                        font-size: 12px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #FFFFFF;
                        line-height: 29px;
                        text-align: right;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/nobody-leftYellow.svg');
                        background-repeat: no-repeat;
                        background-position: right top;
                        background-size: 64px 64px;
                    }
                }
                .swiper{
                    width: 100%;
                    height: 321px;
                    .role{
                        height: 100%;
                    }
                }
            }
            .nobody-right{
                flex-direction: column;
                z-index: 0;
                width: 100%;
                height: 560px;
                .title{
                    width: 340px;
                    height: 67px;
                    font-size: 22px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 33px;
                    text-align: center;
                }
                .subtitle{
                    font-size: 14px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #04FFA2;
                    line-height: 12px;
                }
                .desc{
                    width: 86vw;
                    margin-top: 32px;
                    margin-bottom: 33px;
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 17px;
                    text-align: center;
                }
                .video{
                    position: relative;
                    width: 284px;
                    height: 149px;
                    padding: 2px;
                    background-color: #0F0F10;
                    .videoBg{
                        position: absolute;
                        right: -4.4px;
                        bottom: -6px;
                        width: 157px;
                        height: 31px;
                    }
                    .banner{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        padding: 2px;
                    }
                    .video-wrap{
                        width: 100%;
                        height: 105px;
                        background: #000000;
                        opacity: 0.65;
                        img{
                            z-index: 1;
                            width: 33px;
                            height: 33px;
                            cursor: pointer;
                        }
                    }
                    .content{
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 280px;
                        height: 41px;
                        margin: 0 2px 3px;
                        background-color: #000000;
                        text-align: right;
                        .video-title{
                            margin-top: 3px;
                            margin-right: 12px;
                            font-size: 15px;
                            font-family: AlibabaPuHuiTi_2_95_ExtraBold;
                            color: #EDFF00;
                            line-height: 18px;
                            .yellow{
                                color: #fff;
                            }
                        }
                        .video-title:before{
                            display: inline-block;
                            content: '';
                            width: 2px;
                            height: 5px;
                            margin-right: 10px;
                            margin-bottom: 2px;
                            border: 1px solid #EDFF00;
                            background-color: #EDFF00;
                            transform: skew(-10deg);
                            z-index: 1;
                        }
                        .video-subtitle{
                            margin-right: 15px;
                            font-size: 12px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #FFFFFF;
                            line-height: 18px;
                        }
                    }
                }
                .getNft-wrap{
                    position: relative;
                    width: 173px;
                    height: 40px;
                    margin-top: 31px;
                    margin-bottom: 85px;
                    .getNft{
                        position: absolute;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/white-border.svg');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;  
                        background-position: left top;
                        cursor: pointer;
                    }
                    .txt{
                        font-size: 13px;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #FFFFFF;
                        line-height: 40px;
                        text-align: center;
                        cursor: pointer;
                    }
                }
                .getNft:hover{
                    filter: drop-shadow(0 0 4px #fff);
                }
            }
        }
    }
    .make{
        position: relative;
        width: 100%;
        // height: 1391px;
        height: 1760px;
        // background-image: url('../../../assets/nwhomePhone/make-bg.png');
        // background-position: -1346px -2px;
        // // background-position: left top;
        // background-size: auto 100.1%;
        background-color: #000000;
        overflow: hidden;
        .make-wrap{
            position: relative;
            display: flex;
            flex-direction: column;            
            align-items: center;
            text-align: center;
            width: 100%;
            height: 88%;
            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/make-bg3.png');
            // background-position: -1210px -2px;
            background-position: center top;
            background-size: auto 100%;
            .title-bg{
                z-index: 0;
                position: absolute;
                top: -4px;
                width: 100%;
                height: 450px;
            }
            .title{
                z-index: 1;
                width: 330px;
                height: 66px;
                margin-top: 32px;
                font-size: 22px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                line-height: 33px;
            }
            .subtitle{
                z-index: 1;
                width: 338px;
                height: 15px;
                margin-bottom: 34px;
                font-size: 14px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #04FFA2;
                line-height: 12px;
            }
            .desc{
                z-index: 1;
                width: 332px;
                height: 118px;
                font-size: 14px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: 20px;
            }
            .icon{
                z-index: 1;
                margin-top: 66px;
                margin-bottom: 90px;
                .txt{
                    width: 100%;
                    height: 24px;
                    margin-bottom: 24px;
                    font-size: 14px;
                    font-family: AlibabaPuHuiTi_2_95_ExtraBold;
                    font-weight: 900;
                    color: #FFFFFF;
                    line-height: 24px;
                }
                .icon-img{
                    display: flex;
                    flex-direction: column;
                    div{
                        display: flex;
                        align-items: center;
                        margin-bottom: 18px;
                    }
                    .icon1{
                        width: 60px;
                        margin-right: 38px;
                        margin-left: 10px;
                    }
                    .icon2{
                        width: 96px;
                    }
                    .icon3{
                        width: 96px;
                    }
                    .icon4{
                        width: 100px;
                        margin-right: 38px;
                    }
                }
            }
            .make-img{
                position: relative;
                width: 319px;
                padding-bottom: 38px;
                background: linear-gradient(90deg, #000000 0%, #000000 100%);
                opacity: 0.83;
                .yellowBg-r{
                    position: absolute;
                    top: -3px;
                    right: -5px;
                    width: 115px;
                    height: 22px;
                    transform: rotateX(180deg);
                }
                .yellowBg-l{
                    position: absolute;
                    bottom: -2px;
                    left: -3px;
                    width: 115px;
                    height: 22px;
                }
                ul{
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    height: 100%;
                    li{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 14px;
                    }
                    li:nth-child(1){
                        width: 131px;
                        height: 150px;
                    }
                    li:nth-child(2){
                        width: 84px;
                        height: 199px;
                    }
                    li:nth-child(3){
                        width: 205px;
                        height: 180px;
                        margin-bottom: 38px;
                    }
                    li:nth-child(4){
                        width: 89px;
                        height: 200px;
                    }
                    img{
                        width: 100%;
                        height: 100%;
                        margin: 10px 0;
                    }
                    img:hover{
                        filter: drop-shadow(0 0 6px #ffffff);
                    }
                    img:active{
                        filter: drop-shadow(0 0 6px #ffffff);
                    }
                    div{
                        width: 200px;
                        height: 13px;
                        font-size: 16px;
                        font-family: AlibabaPuHuiTi_2_95_ExtraBold;
                        color: #EDFF00;
                        line-height: 13px;
                        z-index: 1;
                        cursor: pointer;
                    }
                }
            }
            .opensea{
                position: relative;
                width: 357px;
                height: 175px;
                margin-top: 70px;
                background-color: #565656;
                clip-path: polygon(0 0, 100% 0, 100% 66%, 94% 100%, 0 100%);
                .opensea-title{
                    height: 26px;
                    margin-top: 18px;
                    margin-bottom: 12px;
                    font-size: 17px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: normal;
                    color: #000000;
                    line-height: 26px;
                    text-align: center;
                }
                .openUrl{
                    div{
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        img:nth-child(1){
                            width: 276px;
                            height: 63px;
                        }
                        img:nth-child(2){
                            width: 41px;
                            height: 42px;
                            margin-top: 4px;
                        }
                        img:nth-child(2):hover{
                            filter: drop-shadow(0 0 2px #373d41);
                        }
                    }
                }
                .mask{
                    z-index: -1;
                    position: absolute;
                    top: 0;
                    left: -500px;
                    width: 450px;
                    height: 175px;
                    background-color: #29fdfe;
                    opacity: .6;
                    transform: skewX(-20deg);
                }
                .openAnimation{
                    animation: openAnimation 0.2s linear;
                    animation-fill-mode: forwards;
                }
                .stopOpenAnimation{
                    animation: stopOpenAnimation 0.2s linear;
                    animation-fill-mode: forwards;
                }
            }
        }
    }
    .news{
        width: 100%;
        height: 1170px;
        margin-top: -2px;
        margin-bottom: -2px;
        background-color: #000000;
        overflow: hidden;
        .news-wrap{
            height: 100%;
            .title{
                height: 14px;
                margin-top: 73px;
                margin-bottom: 41px;
                font-size: 30px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                line-height: 14px;
                text-align: center;
            }
            .news-top{
                text-align: center;
                flex-direction: column;
                .channel{
                    height: 28px;
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 28px;
                }
                .arrival{
                    width: 86px;
                    height: 17px;
                    margin: 8px 0 20px 0;
                    line-height: 1.09vw;
                    font-size: 9px;
                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                    color: #000000;
                    line-height: 17px;
                    text-align: center;
                    background: #04FFA2;
                }
                .news-logo{
                    flex-direction: column;
                    img:nth-child(1){
                        width: 157px;
                        height: 120px;
                    }
                    img:nth-child(2){
                        width: 53px;
                        height: 52px;
                        margin-top: -20px;
                        margin-bottom: 58px;
                        cursor: pointer;
                    }
                }
            }
            .news-img{
                position: relative;
                width: 100%;
                height: 463px;
                img{
                    position: absolute;
                    right: -6px;
                    height: 421px;
                    display: none;
                }
                img.newsShow{
                    display: block;
                }
                .desc{
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    height: 76px;
                    padding-top: 14px;
                    padding-right: 11px;
                    background: linear-gradient(81deg, rgba(200, 53, 185, 0) 0%, rgba(199, 53, 183, 0.7) 33%, #C635B4 100%);
                    font-size: 15px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 22px;
                    text-align: right;
                }
            }
            ul{
                li{
                    display: flex;
                    width: 124px;
                    height: 124px;
                    margin: 21px 0 21px 43px;
                    border: 2px solid #C434B2;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    .read{
                        margin-left: 10px;
                        margin-top: 2px;
                        .txt{
                            width: 131px;
                            height: 44px;
                            font-size: 16px;
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            color: #FFFFFF;
                            line-height: 21px;
                        }
                        .date{
                            width: 167px;
                            height: 17px;
                            margin-top: 2px;
                            margin-bottom: 17px;
                            font-size: 12px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #FFFFFF;
                            line-height: 17px;
                        }
                        .toRead{
                            font-size: 12px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #FF21FF;
                            line-height: 17px;
                            text-decoration: none;
                            cursor: pointer;
                        }
                        .toRead:hover{
                            text-decoration: underline;
                        }
                    }
                }
            }
        }

    }
    .roadmap{
        width: 100%;
        height: 1420px;
        background-color: #000000;
        overflow: hidden;
        .roadmap-bg{
            position: absolute;
            width: 100%;
            height: 100%;
            .roadmap-bg1{
                position: absolute;
                top: 185px;
                left: 0;
                width: 177px;
                height: 201px;
            }
            .roadmap-bg2{
                position: absolute;
                top: 344px;
                right: 27px;
                width: 106px;
                height: 94px;
            }
            .roadmap-center{
                position: absolute;
                top: 178px;
                width: 100%;
                text-align: center;
                img{
                    width: 17px;
                    height: 16px;
                }
                div{
                    position: absolute;
                    top: 16px;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    width: 1px;
                    height: 1050px;
                    background-color: #C689FF;
                    border: 1px solid #C689FF;
                }
            }
        }
        .roadmap-wrap{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            .title{
                width: 100%;
                height: 16px;
                margin-top: 99px;
                margin-bottom: 63px;
                font-size: 26px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                line-height: 14px;
                text-align: center;
            }
            .timeWidth-l{
                width: 50%;
                text-align: right;
                padding-right: 17px;
            }
            .timeWidth-r{
                width: 50%;
                margin-left: 50%;
                padding-left: 17px;
                text-align: left;
            }
            .span-l{
                position: absolute;
                top: 8px;
                left: -16px;
                display: inline-block;
                width: 9px;
                height: 0px;
                background-color: #C689FF;
                border: 1px solid #C689FF;
            }
             .span-r{
                position: absolute;
                top: 8px;
                right: -16px;
                display: inline-block;
                width: 9px;
                height: 0px;
                background-color: #C689FF;
                border: 1px solid #C689FF;
            }
            .time1,.time2,.time3,.time4,.time5,.time6,.time7,.time8{
                margin-top: -10px;
                position: relative;
                .stage{
                    margin-bottom: 6px;
                    font-size: 20px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #ffffff;
                    line-height: 22px;
                }  
                .date{
                    position: relative;
                    font-size: 18px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    font-weight: bold;
                    color: #04FFA2;
                    line-height: 18px;
                }
                .event-l{
                    width: 40vw;
                    padding: 5px 7px 5px 0;
                    margin-top: 16px;
                    margin-left: 5.2vw;
                    font-size: 10px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 14px;
                    background: #141314;
                }
                .event-r{
                    width: 40vw;
                    padding: 5px 0 5px 7px;
                    margin-top: 16px;
                    margin-left: -5px;
                    font-size: 10px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 14px;
                    background: #141314;
                }
            }
            .checkgreen{
                color: #04ffa2 !important;
                .incomplete{
                    color: yellow;
                }
            }
            .time1 > .check{
                position: absolute;
                top: 69px;
                left: 3px;
                width: 10px;
                height: 10px;
            }
            .time2 > .check{
                position: absolute;
                top: 39px;
                right: 3px;
                width: 10px;
                height: 10px;
            }
            .time1{
                margin-top: 47px;
            }
            .time5,.time6,.time7,.time8{
                margin-top: -25px;
            }
        }
    }
    .team{
        width: 100%;
        height: 618px;
        background-color: #000000;
        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/teamBg_phone.png');
        background-size: auto 100%;
        background-position: 718px top;
        overflow: hidden;
        .title{
            height: 37px;
            margin-top: 18px;
            font-size: 22px;
            font-family: AlibabaPuHuiTi_2_115_Black;
            color: #FFFFFF;
            line-height: 28px;
            text-align: center;
        }
        .wrap{
            width: 100%;
            height: 563px;
            ul{
                position: relative;
                width: 100%;
                height: 100%;
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/teamLogo_phone.png');
                background-size: auto 52px;
                background-position: 206px 177px;
                background-repeat: no-repeat;
                li{
                    position: absolute;
                    display: flex;
                    align-items: center;
                    transition: all .3s ease;
                    -moz-transition: all .3s ease;
                    -webkit-transition: all .3s ease;

                    .avator{
                        height: 42px;
                        margin-right: 10px;
                        img{
                            height: 100%;
                        }
                    }
                    .msg{
                        font-size: 14px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #ffffff;
                        line-height: 14px;
                        white-space: nowrap;
                        span:last-child{
                            font-size: 10px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #CDCDCD;
                            line-height: 14px;
                            zoom: .9;
                        }
                    }
                }
                li:nth-child(1){
                    top: 40px;
                    left: 196px;
                    .msg > div{
                        color: #04FFA2;
                    }
                }
                li:nth-child(2){
                    top: 78px;
                    left: 50px;
                }
                li:nth-child(3){
                    top: 146px;
                    left: 20px;
                    .msg > div{
                        color: #04FFA2;
                    }
                }
                li:nth-child(4){
                    top: 134px;
                    left: 148px;
                    .avator{
                        height:34px;
                    }
                }
                li:nth-child(5){
                    top: 116px;
                    right: 9px;
                    .avator{
                        height: 38px;
                    }
                }
                li:nth-child(6){
                    top: 202px;
                    left: 130px;
                }
                li:nth-child(7){
                    top: 240px;
                    left: 20px;
                    .avator{
                        height: 38px;
                    }
                }   
                li:nth-child(8){
                    top: 240px;
                    right: 29px;
                    .msg > div{
                        color: #04FFA2;
                    }
                }
                li:nth-child(9){
                    top: 338px;
                    left: 54px;
                }
                li:nth-child(10){
                    top: 290px;
                    left: 150px;
                }
                li:nth-child(11){
                    top: 336px;
                    right: 24px;
                    .avator{
                        height: 38px;
                    }
                }   
                li:hover{
                    transform: translate(0,-10px);
                }
            }
        }
    }
    .new-team{
        background-color: #000000;
        color: #FFFFFF;
        .title{
            font-size: 2.6vw;
            font-family: AlibabaPuHuiTi_2_115_Black;
            line-height: 3.64vw;
            text-align: center;
            margin-bottom: 2.81vw;
        }
        .content{
            ul{
                overflow: hidden;
                li{
                    width: 250px;
                    height: 250px;
                    background: linear-gradient(180deg, rgba(143, 131, 255, 0.24) 0%, rgba(143, 131, 255, 0) 41%, rgba(143, 131, 255, 0) 56%, rgba(143, 131, 255, 0.24) 100%);
                    border: 1px solid;
                    border-image: linear-gradient(180deg, rgba(60, 57, 218, 1), rgba(198, 137, 255, 1)) 1 1;
                    margin-bottom: 2.5vw;
                    padding: 8px;
                    position: relative;
                    cursor: pointer;
                    overflow: hidden;
                    margin: 0 auto;
                    margin-bottom: 16px;

                    .warp{
                        width: 100%;
                        height: 100%;
                        position: relative;
                        .icon{
                            width: 1.875vw;
                            height: 8.33vw;
                            position: absolute;
                            left: 0;
                            top: 3.125vw;
                        }
                        .avator{
                            width: 100%;
                            height: 100%;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .msg{
                            position: absolute;
                            bottom: 0;
                            width: 100%;
                            background-image: url('@/assets/nwhome/team_tag.png');
                            background-size: 100% 100%;
                            height: 30px;
                            padding: 8px 0 8px 16px;
                            div{
                                font-size: 12px;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                                color: #FFFFFF;
                                line-height: 1.71vw;
                            }
                            span{
                                font-size: 0.83vw;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                color: #fff;
                                line-height: 1.14vw;
                                opacity: .5;
                            }
                            p{
                                width: 26px;
                                height: 14px;
                                background: linear-gradient(270deg, rgba(4, 255, 162, 0) 0%, #04FFA2 100%);
                                opacity: 0.5;
                                position: absolute;
                                left: 0;
                                top: 4px;
                            }
                            img{
                                width: 16px;
                                position: absolute;
                                top: 4px;
                                right: 16px;
                            }
                        }
                    }
                    .card{
                        left: -500px;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        /* 主要内容 */
                        background: rgba(0, 0, 0, .5);
                        /* 模糊大小就是靠的blur这个函数中的数值大小 */
                        backdrop-filter: blur(10px);
                        transition: all .15s ease-in-out;
                        overflow: hidden;
                        padding: 1.56vw 1.04vw;
                        .msg{
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            div{
                                line-height: 40px;
                                font-size: 16px;
                            }
                            span{
                                font-size: 10px;
                                font-family: AlibabaPuHuiTi_2_65_Medium;
                                line-height: 1.04vw;
                                opacity: .4;
                            }
                        }
                        .text{
                            font-size: 10px;
                            font-family: AlibabaPuHuiTi_2_65_Medium;
                            color: #FFFFFF;
                            line-height: 14px;
                            opacity: .7;
                            margin-top: 8px;
                            max-height: 250px;
                            overflow-y: scroll;
                            -ms-overflow-style: none;
                            overflow: -moz-scrollbars-none;
                        }
                        .text::-webkit-scrollbar { width: 0 !important }
                    }
                    .showCard{
                        left: 0;
                    }
                }
            }
        }
    }
    .partners{
        width: 100%;
        height: 1340px;
        margin: -2px 0;
        margin-top: -60px;
        background-color: #000000;
        overflow: hidden;
        .title{
            height: 31px;
            margin-bottom: 36px;
            font-size: 22px;
            font-family: AlibabaPuHuiTi_2_115_Black;
            color: #FFFFFF;
            line-height: 28px;
            text-align: center;
            .xplan{
                width: 38px;
                margin-left: 12px;
            }
            .xplan:hover{
                filter: drop-shadow(0 0 .6vw #776fe5);
            }
        }
        .logo{
            flex-wrap: wrap;
            width: 100%;   
            padding: 0 38px;
            a,div{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 140px;
                // height: 87.5px;
                height: 68px;
                margin-bottom: 20px;
                background: #282626;
                border-radius: 7px;
                .logo1{
                    height: 50px;
                }
                .logo2{
                    height: 40px;
                }
                .logo3{
                    width: 120px;
                    margin-right: 6px;
                }
                .logo4{
                    width: 80px;
                }
                .logo5{
                    width: 84px;
                }
                .logo6{
                    height: 54px;
                }
                .logo7{
                    height: 48px;
                }
                .logo8{
                    width: 110px;
                }
                .logo9{
                    width: 86px;
                }
                .logo10{
                    width: 82px;
                }
                .logo11{
                    height: 44px;
                }
                .logo12{
                    width: 110px;
                }
            }
            a:hover, div:hover{
                background: rgba(40, 38, 38,.6);
            }
        }
    }
    .will{
        width: 100%;
        height: 270px;
        background-color: #000000;
        overflow: hidden;
        .title{
            margin-bottom: 8px;
            font-size: 22px;
            font-family: AlibabaPuHuiTi_2_115_Black;
            color: #FFFFFF;
            line-height: 28px;
            text-align: center;
        }
        .logo{
            flex-wrap: wrap;
            margin: 30px 0;
            li{
                display: flex;
                align-items: center;
                height: 45px;
                margin-bottom: 8px;
                font-size: 16px;
                font-family: AlibabaPuHuiTi_2_75_SemiBold;
                color: #FFFFFF;
                line-height: 45px;
                img{
                    width: 26px;
                    margin-right: 8px;
                }
                div{
                    width: 90px;
                }
                .googleplay{
                    width: 120px;
                }
                .store{
                    width: 100px;
                }
            }
            li:nth-child(1){
                margin-left: 15px;
            }
            li:nth-child(3){
                margin-right: 20px;
                margin-left: 6px;
            }
            li:nth-child(4){
                margin-left: 10px;
            }
        }
    }
    .register{
        flex-direction: column;
        height: 222px;
        background: #04FF55;
        .title{
            // height: 28px;
            margin-top: 30px;
            margin-bottom: 3px;
            font-size: 22px;
            font-family: AlibabaPuHuiTi_2_115_Black;
            color: #000000;
            line-height: 28px;
            text-align: center;
        }
        .subtitle{
            height: 14px;
            margin-bottom: 34px;
            font-size: 16px;
            font-family: AlibabaPuHuiTi_2_115_Black;
            color: #000000;
            line-height: 14px;
        }
        .email{
            display: flex;
            width: 342px;
            height: 37px;
            .email-wrap{
                width: 69%;
                height: 100%;
                input{
                    width: 100%;
                    height: 100%;
                    padding-right: 10px;
                    text-indent: 12px;
                    font-size: 11px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #565656;
                    line-height: 16px;
                    background-color: #FFFFFF;
                    border: 1px solid #979797;;
                    outline: none;
                    text-align: left;

                }
                // input:focus::-webkit-input-placeholder {
                //     font-size: 9px;
                //     text-align: right;
                // }
            }
            .sub{
                width: 31%;
                height: 100%;
                background-color: #0C0A0A;
                font-size: 10px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #04FF84;
                line-height: 35px;
                text-align: center;
                cursor: pointer;
            }
        }
        .email:hover{
            filter: drop-shadow(0 0 6px #000000);
            -webkit-filter: drop-shadow(0 0 6px #000000);
            -moz-filter: drop-shadow(0 0 6px #000000);
            -ms-filter: drop-shadow(0 0 6px #000000);
            -o-filter: drop-shadow(0 0 6px #000000);
        }
        .email:focus-within {
            filter: drop-shadow(0 0 6px #000000);
            -webkit-filter: drop-shadow(0 0 6px #000000);
            -moz-filter: drop-shadow(0 0 6px #000000);
            -ms-filter: drop-shadow(0 0 6px #000000);
            -o-filter: drop-shadow(0 0 6px #000000);
        }
        .link{
            margin-top: 20px;
            font-size: 16px;
            font-family: AlibabaPuHuiTi_2_55_Regular;
            color: #000000;
            line-height: 16px;
        }
        .link:hover{
            color: #ff18ff;
        }
    }

</style>
