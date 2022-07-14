<template>
    <header-a path="/" :type="0"></header-a>
    <my-video v-if="isPlay" @touchmove.prevent :videotype="type2" @click="playVideo"></my-video>

    <div class="banner">
        <section>
            <video-bg 
id="videobg" :sources="[`https://d3bhixjyozyk2o.cloudfront.net/5c64797a7cb8b72ed6255c8406b7294d.mp4`]" img="https://d2cimmz3cflrbm.cloudfront.net/nwhome/videobg3.png">
            </video-bg>
            <div class="titles"> 
                <div class="title-wrap flex_center">
                    <div class="title1">{{$t('message.home.banner_title1Bef')}}<br/>{{$t('message.home.banner_title1Aft')}}</div>
                    <div class="title2">
                        {{$t('message.home.banner_title2')}}
                    </div>
                    <div class="btnbox">
                        <div class="btn-register" @click="playToEarn()">{{$t('message.home.banner_btn1')}}</div>
                        <div class="btn-video flex_center" @click="playVideo(5)">
                            <div>{{$t('message.home.banner_btn2')}}</div>
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/section-btnPlay.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="botm">#0 <span class="txt1">{{$t('message.home.banner_botmBef')}}</span><span class="txt2">{{$t('message.home.banner_botmAft')}}</span></div>
        </section>
        <footer>
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/section_buttom.svg" alt="" class="buttom">
        </footer>
    </div>
    <!-- <div class="download" v-show="showDown" :class="!isOut ? 'bounceShow' : 'bounceHide'">
        <div class="download-mask">
            <div class="close">
                <img src="@/assets/nwhome/close.svg" alt="" @click="showDown = false,isOut = true">
                <div class="closebg"></div>
            </div>
            <div class="wrap">
                <form action="#" onsubmit="">
                    <div class="button" style="margin-top: 2.6vw;margin-bottom: 5.4vw;">
                        <input type="text" v-model="emailAddress" placeholder="Email address"/>
                    </div>
                    <div class="button" style="margin-top: 1.87vw;margin-bottom: 0.4vw;">
                        <input type="text" v-model="emailCode" placeholder="Email verification code"/>
                        <span>Send code</span>
                    </div>
                    <p class="tips">Account will be automatically registered</p>
                    <button type="button" @click="register">REGISTER</button>
                </form>
            </div>
            <div class="down_button" @click="downloadGame">
                <div class="down_cyberpop flex_center">
                    <img class="media" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/android.png" alt="">
                    <b>DOWNLOAD CYBERPOP</b>
                </div>
            </div>
        </div>
    </div> -->
    <div class="nav-logos" ref="myNav">
        <a href="#" target="view_window">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/joinus.svg" alt="" class="joinus">
            <div>{{$t('message.home.nav_logos_join')}}</div>
        </a>
        <a href="https://discord.gg/y9b8p5C9TR" target="view_window">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/discordlogo.svg" alt="" class="nav-img1">
        </a>
        <a href="https://twitter.com/cyberpopnw" target="view_window">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/twitter.svg" alt="" class="nav-img2">
        </a>
        <a href="https://t.me/cyberpopnw" target="view_window">
            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/dianbao.svg" alt="" class="nav-img3">
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
                   <div class="start">01</div>
                   <div class="pList">
                        <img id="lImg1" :src="imgIndex == 0 ? imgSrc : imgSrc0" alt="">
                        <img id="lImg2" :src="imgIndex == 1 ? imgSrc : imgSrc0" alt="">
                        <img id="lImg3" :src="imgIndex == 2 ? imgSrc : imgSrc0" alt="">
                        <img id="lImg4" :src="imgIndex == 3 ? imgSrc : imgSrc0" alt="">
                   </div>
                   <div class="end">/04</div>
                </div>
                <div class="swiper1">
                    <div class="swiper-bg">
                        <img :class="imgIndex == 0 ? 'show' : ''" src="@/assets/nwhome/vSwiper_1.png" alt="">
                        <img :class="imgIndex == 1 ? 'show' : ''" src="@/assets/nwhome/vSwiper_2.png" alt="">
                        <img :class="imgIndex == 2 ? 'show' : ''" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/moonlightCentury3.png" alt="">
                        <img :class="imgIndex == 3 ? 'show' : ''" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/futureCity3.png" alt="">
                    </div>
                    <div class="swiper-bg2">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/swiper-bg2.png" alt="">
                    </div>
                    <div class="swiper-leftTop">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/swiper-leftTop.svg" alt="">
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
        <div class="nobody-img"></div>
        <div class="nobody-wrap">
            <div class="nobody-left">
                <!-- <img id="role" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/nobody-leftBg3.png" alt="">
                <div class="nobody-left-tip">
                    <div>{{$t('message.home.nobody_role_tipBef')}}</div>
                </div> -->
                <swiper
                    class="mySwiper"
                    :loop="true"
                    :speed="200"
                    :navigation="true"
                    :modules="leftModules"
                    :autoplay="true"
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
                        <div class="box">
                            <img class="role" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/nobody-leftBg3.png" alt="">
                            <div class="nobody-left-tip">
                                <div>{{$t('message.home.nobody_role_tipBef_1')}}</div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="box">
                            <img class="role" src="@/assets/nwhome/lSwiper_1.png" alt="">
                            <div class="nobody-left-tip">
                                <div>{{$t('message.home.nobody_role_tipBef_2')}}</div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="box">
                            <img class="role" src="@/assets/nwhome/lSwiper_2.png" alt="">
                            <div class="nobody-left-tip">
                                <div>{{$t('message.home.nobody_role_tipBef_3')}}</div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="nobody-right">
                <div class="title" id="ele2">{{$t('message.home.nobody_r_titleBef')}}<br/>{{$t('message.home.nobody_r_titleAft')}}</div>
                <div class="subtitle">{{$t('message.home.nobody_r_subtitle')}}</div>
                <div class="desc">
                    {{$t('message.home.nobody_r_desc1')}}
                </div>
                <div class="video">
                    <img class="videoBg" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/yellowBg-r.svg" alt="">
                    <img class="banner" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/nobody-playBg.png" alt="">
                    <div class="video-wrap">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/nobody-controls.svg" alt="" @click="playVideo(4)">
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
            <div class="title" id="ele3">{{$t('message.home.make_titleBef')}}<br/>{{$t('message.home.make_titleAft')}}</div>
            <div class="subtitle">{{$t('message.home.make_subtitle')}}</div>
            <div class="desc">
                {{$t('message.home.make_desc')}}
            </div>
            <div class="icon">
                <div class="txt">{{$t('message.home.make_cross')}}</div>
                <div class="icon-img flex_align_center">
                    <img src="@/assets/nwhome/make-avala.svg" alt="">
                    <!-- <img src="@/assets/nwhome/make-flow.svg" alt=""> -->
                    <img src="@/assets/nwhome/make-ethernet.png" alt="">
                    <img src="@/assets/nwhome/make-polygon.svg" alt="">
                </div>
            </div>
            <div class="make-img">
                <ul>
                    <li>
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/make-img1.png" alt="">
                        <div>{{$t('message.home.make_img_txt1')}}</div>
                    </li>
                    <li>
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/make-img2.png" alt="">
                        <div>{{$t('message.home.make_img_txt2')}}</div>
                    </li>
                    <li>
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/make-img3.png" alt="">
                        <div>{{$t('message.home.make_img_txt3')}}</div>
                    </li>
                    <li>
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/make-img4.png" alt="">
                        <div>{{$t('message.home.make_img_txt4')}}</div>
                    </li>
                </ul>
                <div class="mask"></div>
            </div>
            <!-- <div class="opensea" @mouseenter="openseaEnter()" @mouseleave="openseaLeave()"> -->
            <div class="opensea">
                <div class="opensea-title">{{$t('message.home.make_opensea_title')}}</div>
                <div class="openUrl flex_center" target="view_window">
                    <!-- <a href=""> -->
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/openSea.png" alt="">
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/make-rightArrow.svg" alt="">
                    <!-- </a> -->
                </div>
                <div id="openMask" class="mask"></div>
            </div>  
        </div>
    </div>
    <div class="news">
        <div class="news-wrap flex_center">
            <div class="title" id="ele4">{{$t('message.home.news_title')}}</div>
            <div class="content" @click="newsActiveSrc()">
                <div class="hover-img">
                    <img :class="{'newsShow': showNewsImg == 0}" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/news-bg-3.png" alt="">
                    <img :class="{'newsShow': showNewsImg == 1}" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/news-bg2-3.png" alt="">
                </div>
                <div class="news-left">
                    <div class="news-top" @click="toYoutube($event)">
                        <div class="news-logo">
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/news-logo.png" alt="">
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/youtube-play.svg" alt="">
                        </div>
                        <div>
                            <div class="channel">{{$t('message.home.news_lt_channel')}}</div>
                            <div class="arrival">{{$t('message.home.news_lt_arrival')}}</div>
                        </div>
                    </div>
                    <ul>
                        <li @mouseover="newsHover(0,newsStatictxt1)" @click="newsActive(0,newsStatictxt1)">
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/news-img1.png" id="myNews1" class="myNews" alt="">
                            <div class="read">
                                <div class="txt">{{$t('message.home.news_lcard1_txt')}}</div>
                                <div class="date">{{$t('message.home.news_lcard1_date')}}</div>
                                <div class="toRead">{{$t('message.home.news_lcard1_toRead')}} ></div>
                            </div>
                        </li>
                        <li @mouseover="newsHover(1,newsStatictxt2)" @click="newsActive(1,newsStatictxt2)" >
                            <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/news-img2.png" id="myNews2" class="myNews" alt="">
                            <div class="read">
                                <div class="txt">{{$t('message.home.news_lcard2_txt')}}</div>
                                <div class="date">{{$t('message.home.news_lcard1_date')}}</div>
                                <div class="toRead">{{$t('message.home.news_lcard1_toRead')}} ></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="news-right">
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/news-rightBg.png" alt="">
                    <div class="desc">
                        <div>{{ $t(newsTitle1) }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="roadmap">
        <div class="roadmap-bg">
            <img class="roadmap-bg1" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/roadmap-bg1.png" alt="">
            <div class="roadmap-center">
                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/roadmap-icon.svg" alt="">
                <div></div>
            </div>
            <img class="roadmap-bg2" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/roadmap-bg2.svg" alt="">
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
                    <span class="incomplete">{{ $t('message.home.roadmap_s1_d3_e3') }}</span> <br/>
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
    <div class="team">
        <div class="title" id="ele7">{{ $t('message.home.team_title') }}</div>
        <div class="wrap">
            <ul>
                <li v-for="(item,index) in teamInfo" :key="index" class="flex_center" @click="teamCard(index)">
                    <div class="avator"><img :src="item.img" alt=""></div>
                    <div class="msg">
                        <div>{{ item.name }}</div>
                        <span>{{ item.desc }}</span>
                    </div>
                    <div v-show="showTeamCard == index" class="card">
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
    <!-- <div class="new-team">
        <div class="title" id="ele7">{{ $t('message.home.team_title') }}</div>
        <div class="content">
            <ul>
                <li v-for="(item,index) in teamInfo" :key="index" :class="{'flex_center': true, 'top': item.hover}" @mouseover="item.hover = true" @mouseleave="item.hover = false">
                    <div class="warp">
                        <img src="@/assets/nwhome/team_icon.png" class="icon" alt="">
                        <div class="avator"><img :src="item.img" alt=""></div>
                        <div class="msg" @click="item.card = true">
                            <p></p>
                            <div>{{ item.name }}</div>
                            <span>{{ item.desc }}</span>
                            <img src="@/assets/nwhome/point.png" alt="">
                        </div>
                    </div>
                    <div :class="{'card': 1, 'showCard': item.card}" @click="item.card = false">
                        <div class="msg">
                            <div>{{ item.name }}</div>
                            <span>{{ item.desc }}</span>
                        </div>
                        <div class="text" v-html="$t(item.info)"></div>
                    </div>
                </li>
            </ul>
        </div>
    </div> -->
    <div class="partners">
        <div class="title flex_center" id="ele6">{{ $t('message.home.part_title') }}
            <img class="xplan" @click="showxplan()" src="@/assets/nwhome/xplan.svg" alt="" >
        </div>
        <div class="logo flex_centent_center">
            <div class="line1 flex_centent_center">
                <a href="https://www.ubisoft.com/en-us/" target="view_window">
                    <img class="logo10" src="@/assets/nwhome/UBISOFT.png" alt="">
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
            </div>
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
                <img class="logo10" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/partners3.png" alt="">
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
                <img class="logo13" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alpha_tofu.png" alt="">
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
            <a href="https://chain.link/" target="view_window">
                <img class="logo12" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/chain_link.png" alt="">
            </a>
            <div>
                <img class="logo11" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alpha_richmeta.png" alt="">
            </div>
            <a href="https://coinmarketcap.com/" target="view_window">
                <img class="logo14" src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/alpha_coinMarkrt.png" alt="">
            </a>
        </div>
    </div>
    <div class="will">
        <div class="title" id="ele6">{{ $t('message.home.will_title') }}</div>
        <ul class="logo flex_centent_center">
            <li>
                <img class="wlogo1" src="@/assets/nwhome/googleplay.svg" alt="">
                <div class="googleplay">{{ $t('message.home.will_logo3_txt') }}</div>
            </li>
            <li>
                <img class="wlogo2" src="@/assets/nwhome/apple.svg" alt="">
                <div class="store">{{ $t('message.home.will_logo4_txt') }}</div>
            </li>
            <li>
                <img class="wlogo3" src="@/assets/nwhome/windows-fill.svg" alt="">
                <div>{{ $t('message.home.will_logo1_txt') }}</div>
            </li>
            <li>
                <img class="wlogo4" src="@/assets/nwhome/steam.svg" alt="">
                <div>{{ $t('message.home.will_logo2_txt') }}</div>
            </li>
        </ul>
    </div>
    <div class="register flex_align_center">
        <div class="title">{{ $t('message.home.reg_title') }}</div>
        <div class="subtitle">{{ $t('message.home.reg_subtitle') }}</div>
        <div class="email">
            <div class="email-wrap">
                <input id="email" class="email-input" type="text" v-model="email" :placeholder="$t('message.home.reg_Email')">
            </div>
            <div class="sub" @click="submit()">{{ $t('message.home.reg_submit') }}</div>
        </div>
        <a class="link" href="https://forms.gle/VvU8nZymrikgFipR7" target="view_window">{{ $t('message.home.reg_link') }}</a>
    </div>
    <footer-a></footer-a>
    <xplanpro-a v-if="xplanActive"></xplanpro-a>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted, isMemoSame } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 

import { useI18n } from 'vue-i18n';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { EffectFade, EffectCreative, Mousewheel, Autoplay, Navigation} from "swiper";

SwiperCore.use([EffectFade, EffectCreative, Mousewheel, Autoplay, Navigation]);
const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;


const leftModules:any = [Navigation];
const teamInfo: any = ref([
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/mem_jie.png',
        name: 'JIE',
        desc: 'Art Director',
        info: 'message.home.team_mem_jie',
    },
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/team2.jpg',
        name: 'Yeldar Botabayev',
        desc: 'Market manager',
        info: 'message.home.team_mem_YuSonEn',
    },
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/team1.jpg',
        name: 'Yu Vitalik ',
        desc: 'Co-Founder',
        info: 'message.home.team_mem_frank',
    },
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/mem_nick.png',
        name: 'Nick',
        desc: 'Back-end Developer',
        info: 'message.home.team_mem_nick',
    },
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/team4.jpg',
        name: 'Eunji Park',
        desc: 'Framework Designer',
        info: 'message.home.team_mem_EunjiPark',
    },
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/team7.png',
        name: 'Emran Malik',
        desc: 'Marketing Director',
        info: 'message.home.team_mem_EmranMalik',
    },
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/team5.jpg',
        name: 'Heewon Kwak',
        desc: 'Chief Back-end',
        info: 'message.home.team_mem_HeewonKwak',
    },
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/team3.jpg',
        name: 'Cheyun Lim',
        desc: 'Technical Director',
        info: 'message.home.team_mem_CheyunLim',
    },
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/mem_john.png',
        name: 'John',
        desc: 'Technical Director',
        info: 'message.home.team_mem_john',
    },
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/team6.jpg',
        name: 'Haeka',
        desc: 'CMO',
        info: 'message.home.team_mem_hason',
    },
    {
        img: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/mem_ice.png',
        name: 'ICE',
        desc: 'Back-end Developer',
        info: 'message.home.team_mem_ice',
    }
])

const showTeamCard:any = ref(-1);
const teamCard = (index: any) =>  {
    if( showTeamCard.value == index ){
        showTeamCard.value = -1;
    }else{
        showTeamCard.value = index;
    }
}


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
            store.dispatch('user/xplanChangeAni', true);
            store.dispatch('user/TipsState', {show: true, info: { hasLoading: false, hasClose: true, title: 'Network Error', content: t('message.common.metamask.switch'), addNetwork: true}});
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.common.mess_xplan_err')}})
        }
    }else{
        connect()
    }
}




// register
const isOut = ref(false);
let showDown:any = ref(false);
const playToEarn = () => {
    router.push({ path: '/download', query: { code: router.currentRoute.value.query.code, isClick: 1 } })
    return;
    // if( realId.value != -1 ){
    //     showDown.value = true;
    //     isOut.value = false;
    // }else{
    //     connect()
    // }
}

const id: any = ref(0)
const loggined = computed(() => store?.state.wallet?.loggined);

const connect: any = async () => {
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



// coming soon
let showComingFlag:any = ref(false)
const ctimer:any = ref(null)

const showComing = () => {
    clearTimeout(ctimer.value);
    // default animation
    store.dispatch('user/addComingOut', false)
    // show coming view
    showComingFlag.value = true;
    ctimer.value = setTimeout(() => {
        // change animation
        store.dispatch('user/addComingOut', true)
    },3000)
}



// swiper
let imgSrc0: any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwhome/welcome-leftGray.svg');
let imgSrc: any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwhome/welcome-leftYellow.svg');
let imgIndex: any = ref(0);


const onSlideChangeEnd = (swiper: any) => {
    imgSrc.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/welcome-leftYellow.svg';
    imgIndex.value = swiper.realIndex;
};


// let videoControls: any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwhome/section-btnPlay.svg') 
// let playFlag: any = ref(false);
// const stopPlay = () => {
//     let videobg = document.querySelector("#videobg") as HTMLElement;
//     let relVideo = <HTMLVideoElement>videobg.querySelector("video");
//     if( playFlag.value == false ){
//         relVideo.pause();
//         playFlag.value = !playFlag.value;
//         videoControls.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/zanting.svg';
//     }else if( playFlag.value == true ){
//         relVideo.play();
//         playFlag.value = !playFlag.value;
//         videoControls.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/section-btnPlay.svg';
//     }
// }
 

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



const router = useRouter()

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
    // let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/; //regular
    let reg = /@/;
    if(email.value === ""){ //Input cannot be empty
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.home.mess_register_null')}})
　　　　return false;
　　 }else if(!reg.test(email.value)){ //The regular validation failed. The format is incorrect
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


const checkScrollHeightAndLoadAnimation: any = () => {
        const windowHeight: Number = window.innerHeight;

        let ele1 = document.getElementById("ele1") as HTMLElement;
        let ele2 = document.getElementById("ele2") as HTMLElement;
        let ele3 = document.getElementById("ele3") as HTMLElement;
        let ele4 = document.getElementById("ele4") as HTMLElement;
        let ele5 = document.getElementById("ele5") as HTMLElement;
        let ele6 = document.getElementById("ele6") as HTMLElement;
        let ele7 = document.getElementById("ele7") as HTMLElement;
        let mapList = document.getElementsByClassName('maptime');
        const mapListLen = mapList.length;
        // let role = document.getElementById("role") as HTMLElement;
        let roles = document.getElementsByClassName("role");
        const roleListLen = roles.length;
        const ele1Top: Number = ele1.getBoundingClientRect().top; //Distance from top of screen
        const ele2Top: Number = ele2.getBoundingClientRect().top; 
        const ele3Top: Number = ele3.getBoundingClientRect().top; 
        const ele4Top: Number = ele4.getBoundingClientRect().top; 
        const ele5Top: Number = ele5.getBoundingClientRect().top; 
        const ele6Top: Number = ele6.getBoundingClientRect().top; 
        const ele7Top: Number = ele7.getBoundingClientRect().top; 
        const roleTop: Number = roles[0].getBoundingClientRect().top; 

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
            {
                el: ele7,
                top: ele7Top
            },
            {
                el: roles[0],
                top: roleTop
            },
            {
                el: roles[1],
                top: roleTop
            },
            {
                el: roles[2],
                top: roleTop
            },
        ]
        for(let i = 0; i < arr.length; i++){
            if(arr[i].top < windowHeight){
                arr[i].el.classList.add('fadeInUp');
            }
        }
        if( timeTop.timeTop0 < windowHeight) mapList[0].classList.add('bounceInRight')
        if( timeTop.timeTop2 < windowHeight) mapList[2].classList.add('bounceInRight')
        if( timeTop.timeTop3 < windowHeight) mapList[4].classList.add('bounceInRight')
        if( timeTop.timeTop6 < windowHeight) mapList[6].classList.add('bounceInRight')
        if( timeTop.timeTop1 < windowHeight) mapList[1].classList.add('bounceInLeft')
        if( timeTop.timeTop3 < windowHeight) mapList[3].classList.add('bounceInLeft')
        if( timeTop.timeTop5 < windowHeight) mapList[5].classList.add('bounceInLeft')
        if( timeTop.timeTop7 < windowHeight) mapList[7].classList.add('bounceInLeft')
        for( let k = 0; k < roleListLen; k++ ){
            if(roleTop < windowHeight){
                roles[k].classList.add('fadeInUp');
            }
            if(roles[k].className == 'role fadeInUp'){
                setTimeout(() => {
                    if(roles[k].className == 'role fadeInUp') roles[k].classList.add('fadeInDown')
                },1000)
            }
        }
}

// const stopPlay = () => {
//     let videobg = document.querySelector("#videobg") as HTMLElement;
//     let relVideo = <HTMLVideoElement>videobg.querySelector("video");
//     relVideo.play();
// }

onUnmounted(() => {
    window.removeEventListener("scroll", checkScrollHeightAndLoadAnimation, true);
    window.removeEventListener('scroll', windowScroll, true);
    clearInterval(timer);
})

onMounted(() => {
    store.dispatch('user/changeXplan',false);
    window.addEventListener('scroll', checkScrollHeightAndLoadAnimation, true);
    window.addEventListener('scroll', windowScroll, true);
    store.dispatch('user/showDialog',{show: false, info: {}});// close message dialog
    window.scrollTo(0,0);
})

</script>
<style lang="less" scoped>
    @keyframes teamCardAni {
        0%{
            top: 1.4vw;
        }
        100%{
            top: 0;
        }
    }

    @keyframes downloadAni {
        0%{
            left: -22vw;
        }
        100%{
            left: -2vw;
        }
    }
    @keyframes stopDownloadAni {
        0%{
            left: -2vw;
        }
        100%{
            left: -22vw;
        }
    }
    @keyframes openAnimation {
        0%{
            left: -53vw;
        }
        100%{
            left: -5vw;
        }
    }
    @keyframes stopOpenAnimation {
        0%{
            left: -5vw;
        }
        100%{
            left: -53vw;
        }
    }
    html,
    body {
        height: 100%;
        overflow-x: hidden;
    }
    .banner{
        position: relative;
        width: 100%;
        height: 100vh;
        section{
            width: 100%;
            height: 100vh;
            background-color: #000000;
            .titles{
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                background-image: url('../../../assets/nwhome/section-cover.png');
                background-size: 100% 103%;
                background-position: left top;
                .title-wrap{
                    height: 100%;
                    flex-direction: column;            
                    .title1{
                        // width: 64.84vw;
                        height: 10.41vw;
                        margin-top: 9vw;
                        font-size: 4.32vw;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #FFFFFF;
                        line-height: 5.205vw;
                        letter-spacing: .26vw;
                        text-align: center;
                        font-weight: 900;
                        filter: drop-shadow( .155vw 0 0 #D236A5 )
                                drop-shadow( -.15vw 0 0.05rem #72F0D9 );
                    }
                    .title2{
                        margin-bottom: 5vw;
                        color: #FFFFFF;
                        font-size: 1.09vw;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        line-height: 1.51vw;
                        // animation: fadeInUp .8s linear;
                    }
                    .btnbox{
                        display: flex;
                        margin-bottom: 6vw;
                        .btn-register{
                            width: 16.56vw;
                            height: 4.21vw;
                            margin: 2.1vw -4vw 0 2.6vw;
                            padding-right: 1.1vw;
                            line-height: 3.2vw;
                            color: #fff;
                            text-align: center;
                            font-size: 1.04vw;
                            font-weight: bold;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/section-btn1.svg');
                            background-position: center;
                            background-size: 100% auto;
                            cursor: pointer;
                        }
                        .btn-video{
                            width: 18.75vw;
                            height: 7.24vw;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/section-btn2.svg');
                            background-position: center;
                            background-size: 100% auto;
                            cursor: pointer;
                            div{
                                margin-top: .3vw;
                                margin-left: .7vw;
                                color: #000;
                                font-size: 1.04vw;
                                font-weight: bold;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                // z-index: 1;
                            }
                            img{
                                margin-top: .2vw;
                                margin-left: .5vw;
                                width: 1vw;
                                height: 1vw;
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
                bottom: 2.8vw;
                width: 100%;
                text-align: center;
                font-size: 1.4vw;
                color: #04FFA2;
                line-height: 1.61vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                font-weight: 400;
                .txt1{
                    font-size: 1vw;
                    font-weight: 400;
                    color: #04FFA2;
                }
                .txt2{
                    font-size: .85vw;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    color: #fff;
                }
            }
        }
        .buttom{
            position: absolute;
            bottom: .8vw;
            width: 2vw;
            left: 0;
            right: 0;
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
        background: rgba(0,0,0,.4);
        .download-mask{
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
            width: 43.95vw;
            height: 35vw;
            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/down_background_pc.png');
            background-size: 100% 100%;
            .close{
                position: absolute;
                width: 2.65vw;
                height: 2.65vw;
                top: 3vw;
                right: 3vw;
            }
            .wrap{
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                width: 34.4vw;
                height: 21.35vw;
                margin: auto;
                background: rgba(0, 0, 0, 0.8);
                backdrop-filter: blur(4px);
                .button{
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/withborder.png');
                    width: 25.02vw;
                    height: 3.75vw;
                    background-size: 100% 100%;
                    font-size: 0.93vw;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #FFFFFF;
                    line-height: 1.3vw;
                    margin: 0 auto;
                    position: relative;
                    input{
                        line-height: 1.3vw;
                        border: none;
                        outline: none;
                        width: 100%;
                        height: 100%;
                        background: none;
                        padding: 1.25vw 1.66vw;
                        color: #fff;
                        font-family: AlibabaPuHuiTi_2_85_Bold;
                    }
                    span{
                        position: absolute;
                        right: 0;
                        font-size: 1.14vw;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #A6F779;
                        top: 50%;
                        transform: translateY(-50%);
                        margin-right: 1.40vw;
                    }
                }
                .tips{
                    font-size: 0.83vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 1.3vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    margin-top: 0.53vw;
                    margin-bottom: 1.14vw;
                    text-align: center;
                }
                button{
                    border: none;
                    background: transparent;
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/greenButton.png');
                    background-size: 100% 100%;
                    width: 17.5vw;
                    height: 4.37vw;
                    margin: 0 auto;
                    display: block;
                    font-size: 1.25vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #000000;
                    line-height: 4.37vw;
                }
            }
            .down_button{
                position: absolute;
                width: 20.84vw;
                height: 3.83vw;
                left: 0;
                right: 0;
                bottom: 2.23vw;
                margin: 0 auto;
                transition: all .2s ease-in-out;
                cursor: pointer;
                .down_cyberpop{
                    width: 100%;
                    height: 100%;
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/down_button2.png');
                    background-size: 100% 100%;
                    font-size: 1.14vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 1.56vw;
                    .media{
                        margin-right: 0.52vw;
                        width: 1.4vw;
                        height: 1.66vw;
                    }
                }

            }
            .down_button:hover{
                opacity: .7;
            }
        }
    }
    .nav-logos{
        z-index: 8;
        position: absolute;
        top: 25vw;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 4.4vw;
        height: 29vw;
        padding-bottom: 5.2vw;
        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/nav-logoBg.svg');
        background-position: right bottom;
        background-repeat: no-repeat;
        background-size: auto 100%;
        a{
            text-decoration: none;
            text-align: center;
            img{
                margin-top: 1.3vw;
            }
            div{
                font-size: .8vw;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                color: #FFFFFF;
                line-height: 1.45vw;
            }
            .joinus{
                width: 2.3vw;
                height: 2vw;
            }
            .nav-img1{
                width: 2.27vw;
                height: 2.24vw;
            }
            .nav-img2{
                width: 2.45vw;
                height: 1.99vw;
            }
            .nav-img3{
                width: 2.26vw;
                height: 1.9vw;
            }
            img:not(.joinus):hover{
                filter: drop-shadow(0 0 .5vw #00FF9C);
            }
        }
        a + a::before{
            display: inline-block;
            content: '';
            width: 3.6vw;
            height: 1px;
            border-top: 1px solid #8147FF;
            transform: rotateX(180deg);
        }
        
    }
    .welcome{
        position: relative;
        width: 100%;
        height: 100vh;
        margin-top: -.1vw;
        background-color: #0C0A0A;
        z-index: -1;
        .warp{
            z-index: -1;
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: 100%;
            .title{
                height: 6.25vw;
                line-height: 3vw;
                margin-top: 4vw;
                margin-left: 19.6vw;
                margin-right: auto;
                color: #04FFA2;
                font-size: 2.6vw;
                font-weight: bold;
                font-family: AlibabaPuHuiTi_2_115_Black;
                .white{
                    color: #fff;
                }
            }
            .desc{
                width: 37vw;
                height: 3.75vw;
                margin-top: .2vw;
                margin-left: 19.58vw;
                color: #fff;
                font-size: 1.04vw;
                line-height: 1.45vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
            }
            .content{
                display: flex;
                width: 100%;
                height: 37.6vw;
                z-index: -1;
                .left{
                    z-index: 1;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 6vw 4vw 0vw 15.2vw;
                    color: #FFFFFF;
                    font-size: 1.3vw;
                    .start{
                        position: absolute;
                        top: .9vw;
                        left: -1.1vw;
                    }
                    .end{
                        position: absolute;
                        // top: 16.4vw;
                        top: 21.6vw;
                        left: -1.8vw;
                    }
                    .pList{
                        margin-top: 2.4vw;
                        display: flex;
                        flex-direction: column;
                        img{
                            height: 4.47vw;
                            margin-bottom: .35vw;
                        }

                        .active{
                            width: .3vw;
                            background-color: #EDFF00;
                        }
                    }
                    
                    
                }
                .swiper1{
                    z-index: 1;
                    position: relative;
                    width: 78vw;
                    height: 37.6vw;
                    // height: 37.6vw;
                    margin-top: -2.6vw;
                    .swiper-bg{
                        position: absolute;
                        top: 2.8vw;
                        left: 6vw;
                        width: 66vw;
                        height: 80%;
                        filter: blur(2vw);
                        -webkit-filter: blur(2vw);
                        -moz-filter: blur(2vw);
                        -ms-filter: blur(2vw);   
                        -o-filter: blur(2vw);   
                        img{
                            width: 100%;
                            height: 100%;
                            display: none;
                        }
                        img.show{
                            display: block;
                        }

                    }
                    .swiper-bg2{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 69.58vw;
                        height: 32vw;
                        img{
                            width: 100%;
                            z-index: -1;
                        }
                    }
                    .swiper-leftTop{
                        z-index: 2;
                        position: absolute;
                        top: 4.8vw;
                        left: .25vw;
                        width: 17.39vw;
                        height: 3.75vw;
                        img{
                            width: 100%;
                        }
                        ul{
                            position: absolute;
                            top: .6vw;
                            width: 100%;
                            text-align: center;
                            li{
                                font-size: 1.67vw;
                                color: #000000;
                                line-height: 3.02vw;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                                font-weight: bold;
                                display: none;
                            }
                            .show{
                                display: block;
                            }
                        }
                    }
                    .swiper-img{
                        position: relative;//
                        width: 56.4vw;
                        height: 24.33vw;
                        margin-top: 6.9vw;
                        margin-left: 2.5vw;
                        .swiper-bg3{
                            overflow: hidden;//
                            width: 56.4vw;
                            height: 24.33vw;
                            img{
                                width: 100.1%;
                                height: 24.33vw;
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
        position: relative;
        width: 100%;
        height: 100vh;
        background-color: #000;
        display: flex;
        .nobody-img{
            z-index: 2;
            pointer-events: none;
            position: absolute;
            top: 0;
            right: 0;
            width: 67%;
            height: 100%;
            background: linear-gradient(90deg, rgba(111, 38, 190, 0) 0%, rgba(156, 0, 248, 0.64) 64%, #7A00F8 100%);
        }
        .nobody-wrap{
            width: 100%;
            height: 100%;
            padding-top: 1vw;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .nobody-left{
                width: 49vw;
                height: 44vw;
                padding-left: 8vw;
                :deep( .swiper){
                    position: relative;
                    .swiper-button-prev, .swiper-button-next{
                        z-index: 4;
                        display: flex;
                        align-items: center;
                        position: absolute;
                        width: 10px;
                        height: 14px;
                        width: 50%;
                        height: 100%;
                    }
                    .swiper-button-next{
                        right: 0;
                    }
                }
                .box{
                    position: relative;
                    width: 100%;
                    height: 44vw;
                    padding-left: 1vw;
                    background: #000000;
                    img{
                        height: 95%;
                        margin-top: 2vw;
                        margin-left: 1vw;
                    }
                    .nobody-left-tip{
                        z-index: 2;
                        position: absolute;
                        bottom: 7.3vw;
                        right: 10.8vw;
                        div{
                            width: 16vw;
                            height: 2vw;
                            padding-right: 1vw;
                            font-size: 1.04vw;
                            text-align: right;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            color: #FFFFFF;
                            line-height: 2vw;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/nobody-leftYellow.svg');
                            background-repeat: no-repeat;
                            background-position: right center;
                            background-size: 20% auto;
                        }
                    }
                }
            }
            .nobody-right{
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                z-index: 2;
                width: 40vw;
                margin-right: 18vw;
                text-align: right;
                .title{
                    line-height: 3.7vw;
                    font-size: 2.6vw;
                    font-weight: bold;
                    color: #FFFFFF;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                }
                .subtitle{
                    font-size: 1.45vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #04FFA2;
                    line-height: 2.8vw;
                }
                .desc{
                    width: 30vw;
                    font-size: 1.04vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 1.56vw;
                }
                .video{
                    position: relative;
                    width: 25.31vw;
                    height: 13.54vw;
                    padding: .2vw;
                    margin-top: 2vw;
                    background-color: #0F0F10;
                    .videoBg{
                        position: absolute;
                        right: -.45vw;
                        bottom: -.6vw;
                        width: 13.96vw;
                        height: 2.81vw;
                    }
                    .banner{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        padding: .2vw;
                    }
                    .video-wrap{
                        position: relative;
                        width: 100%;
                        height: 9.38vw;
                        line-height: 11vw;
                        text-align: center;
                        background-color: rgba(0,0,0,.65);
                        img{
                            z-index: 1;
                            position: absolute;
                            left: 0;
                            right: 0;
                            top: 3vw;
                            margin: 0 auto;
                            width: 2.91vw;
                            height: 2.91vw;
                            cursor: pointer;
                        }
                    }
                    .content{
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 24.91vw;
                        height: 3.86vw;
                        margin: 0 .2vw .3vw;
                        background-color: #000000;
                        .video-title{
                            margin-top: .3vw;
                            margin-right: 1.1vw;
                            font-size: 1.3vw;
                            line-height: 1.56vw;
                            font-family: AlibabaPuHuiTi_2_95_ExtraBold;
                            color: #EDFF00;
                            .yellow{
                                color: #fff;
                            }
                        }
                        .video-title:before{
                            display: inline-block;
                            content: '';
                            width: 1px;
                            height: .3vw;
                            margin-right: 1vw;
                            margin-bottom: .1vw;
                            border: .2vw solid #EDFF00;
                            background-color: #EDFF00;
                            transform: skew(-10deg);
                            z-index: 1;
                        }
                        .video-subtitle{
                            margin-right: 1.6vw;
                            color: #FFFFFF;
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            line-height: 1.56vw;
                        }
                    }
                }
                .getNft-wrap{
                    position: relative;
                    width: 18.9vw;
                    height: 4.4vw;
                    margin-top: 2.3vw;
                    margin-right: -.3vw;
                    .getNft{
                        position: absolute;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/white-border.svg');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;  
                        background-position: left top;
                        // clip-path: polygon(0 0, 100% 0, 100% 67%, 95% 100%, 0 100%);
                        cursor: pointer;
                    }
                    .txt{
                        line-height: 4.4vw;
                        font-size: 1.4vw;
                        text-align: center;
                        color: #FFFFFF;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        cursor: pointer;
                    }
                }
                .getNft:hover{
                    filter: drop-shadow(0 0 .4vw #ffffff);
                }
            }
        }
    }
    .make{
        position: relative;
        width: 100%;
        min-height: 130vh;
        height: 130vh;
        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/make-bg3.png');
        background-repeat: no-repeat;
        background-position: right -.4vw;
        background-size: 88% 101%;
        background-color: #000000;
        .make-wrap{
            display: flex;
            flex-direction: column;            
            justify-content: center;
            height: 100%;
            margin-left: 19.53vw;
            .title{
                height: 7.38vw;
                margin-right: auto;
                font-size: 2.6vw;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                line-height: 3.69vw;
                font-weight: bold;
            }
            .subtitle{
                font-size: 1.66vw;
                font-family: AlibabaPuHuiTi_2_115_Black;
                font-weight: 900;
                color: #04FFA2;
                line-height: 3.12vw;
            }
            .desc{
                width: 32vw;
                font-size: 1.04vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                font-weight: normal;
                color: #FFFFFF;
                line-height: 1.61vw;
            }
            .icon{
                margin-top: .6vw;
                .txt{
                    width: 27.7vw;
                    height: 3.125vw;
                    font-size: 1.04vw;
                    font-family: AlibabaPuHuiTi_2_95_ExtraBold;
                    font-weight: 900;
                    color: #FFFFFF;
                    line-height: 3.125vw;
                }
                .icon-img{
                    margin-bottom: 1vw;
                    img:nth-child(1){
                        width: 9vw;
                        margin-right: 2.8vw;
                    }
                    img:nth-child(2){
                        height: 2.6vw;
                        margin-right: 1.6vw;
                    }
                    img:nth-child(3){
                        width: 8.85vw;
                        height: 1.92vw;
                    }
                }
            }
            .make-img{
                position: relative;
                width: 42.42vw;
                height: 14.58vw;
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/make-imgBg.png');
                background-size: 100% 100%;
                ul{
                    display: flex;
                    position: relative;
                    li{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    li:nth-child(1){
                        width: 7.91vw;
                        height: 10.3vw;
                        margin: 2.7vw 4vw 0 1.9vw;
                    }
                    li:nth-child(2){
                        width: 5.05vw;
                        height: 12.1vw;
                        margin-top: 1vw;
                        margin-right: 1vw;
                    }
                    li:nth-child(3){
                        width: 12.5vw;
                        height: 12.76vw;
                        margin-top: 1.2vw;
                    }
                    li:nth-child(4){
                        width: 5.31vw;
                        height: 16vw;
                        margin-top: -2vw;
                        margin-left: 1.4vw;
                    }
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    img:hover{
                        filter: drop-shadow(0 0 .5vw #ccc);
                    }
                    div{
                        position: absolute;
                        bottom: .7vw;
                        font-size: 1.04vw;
                        font-family: AlibabaPuHuiTi_2_95_ExtraBold;
                        color: #EDFF00;
                        line-height: 1.56vw;
                        z-index: 1;
                        cursor: pointer;
                    }
                }
                .mask{
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: .7vw;
                    margin: 0 auto;
                    width: 98.8%;
                    height: 2.7vw;
                    background: #000;
                    opacity: 0.64;
                }
            }
            .opensea{
                // z-index: 1;
                position: relative;
                width: 42.1vw;
                height: 7.76vw;
                margin-top: .41vw;
                // background: #EDFF00;
                background-color: #565656;
                clip-path: polygon(0 0, 100% 0, 100% 65%, 93% 100%, 0 100%);
                .opensea-title{
                    height: 1.97vw;
                    margin: .625vw 0;
                    font-size: 1.25vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: normal;
                    color: #000000;
                    line-height: 1.97vw;
                    text-align: center;
                }
                .openUrl{
                    height: 3.38vw;
                    img:nth-child(1){
                        width: 14.58vw;
                        height: 3.38vw;
                    }
                    img:nth-child(2){
                        height: 1.92vw;
                        margin-left: 1.51vw;
                        margin-bottom: 0.5vw;
                    }
                    // img:nth-child(2):hover{
                    //     filter: drop-shadow(0 0 .1vw #373d41);
                    // }
                }
                .mask{
                    z-index: -1;
                    position: absolute;
                    top: 0;
                    left: -53vw;
                    // left: -5vw;
                    width: 48vw;
                    height: 7.76vw;
                    background-color: #29fdfe;
                    opacity: .6;
                    transform: skewX(-46deg);
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
        height: 100vh;
        background-color: #000000;
        .news-wrap{
            flex-direction: column;            
            height: 100%;
            .title{
                font-size: 2.6vw;
                font-weight: bold;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                line-height: 3.69vw;
                margin-bottom: 1.4vw;
            }
            .content{
                position: relative;
                width: 58.125vw;
                height: 34vw;
                .hover-img{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    img{
                        width: 100%;
                        height: 100%;
                        display: none;
                    }
                    img.newsShow{
                        display: block;
                    }
                }
                .news-left{
                    position: absolute;
                    height: 100%;
                    margin-left: 2.08vw;
                    .news-top{
                        display: flex;
                        .news-logo{
                            display: flex;
                            flex-direction: column;
                            cursor: pointer;
                            img:nth-child(1){
                                width: 6.51vw;
                                height: 5.05vw;
                                margin-top: 2.76vw;
                            }
                            img:nth-child(1):hover{
                                transform: scale(1.1);
                            }
                            img:nth-child(2){
                                z-index: 2;
                                width: 2.18vw;
                                height: 2.18vw;
                                margin-top: -1vw;
                                margin-left: 2vw;
                            }
                        }
                        .channel{
                            margin-top: 3.2vw;
                            margin-bottom: .4vw;
                            color: #FFFFFF;
                            font-size: 1.35vw;
                            font-weight: bold;
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            line-height: 2.34vw;
                        }
                        .arrival{
                            width: 12.18vw;
                            height: 1.09vw;
                            line-height: 1.09vw;
                            text-align: center;
                            color: #000000;
                            font-size: .78vw;
                            font-weight: bold;
                            background-color: #04FFA2;
                            font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        }
                    }
                    ul{
                        li{
                            display: flex;
                            width: 10vw;
                            height: 10vw;
                            margin-top: 1.5vw;
                            background-color: #000000;
                            border: .14vw solid #C434B2;
                            img{
                                width: 10vw;
                                height: 10vw;
                            }
                            .read{
                                margin-left: .9vw;
                                .txt{
                                    width: 10.93vw;
                                    color: #FFFFFF;
                                    font-size: 1.35vw;
                                    line-height: 1.77vw;
                                    font-weight: bold;
                                    font-family: AlibabaPuHuiTi_2_115_Black;
                                }
                                .date{
                                    margin-bottom: 1.45vw;
                                    color: #FFFFFF;
                                    line-height: 1.45vw;
                                    font-size: 1.04vw;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                }
                                .toRead{
                                    color: #FF21FF;
                                    line-height: 1.45vw;
                                    font-size: 1.04vw;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
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
                .news-right{
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: 38vw;
                    height: 7.91vw;
                    text-align: right;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    .desc{
                        position: absolute;
                        top: 1.35vw;
                        right: 1.77vw;
                        font-size: 1.48vw;
                        font-weight: bold;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #FFFFFF;
                        line-height: 2.34vw;
                        div{
                            width: 34.68vw;
                        }
                    }
                }
            }
        }

    }

    .roadmap{
        position: relative;
        width: 100%;
        background-color: #000000;
        overflow: hidden;
        .roadmap-bg{
            position: absolute;
            width: 100%;
            height: 100%;
            .roadmap-bg1{
                position: absolute;
                top: 14.4vw;
                left: 19.21vw;
                width: 26.92vw;
                height: 26.71vw;
            }
            .roadmap-bg2{
                position: absolute;
                top: 36.4vw;
                right: 28.8vw;
                width: 13.9vw;
                height: 12.29vw;
            }
            .roadmap-center{
                position: absolute;
                margin-top: 14vw;
                width: 100%;
                text-align: center;
                img{
                    width: 2.13vw;
                    height: 2.13vw;
                }
                div{
                    position: absolute;
                    top: 2.2vw;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    width: 1px;
                    height: 102vw;
                    background-color: #C689FF;
                    border: 1px solid #C689FF;
                }
            }
        }
        .roadmap-wrap{
            position: relative;
            overflow: hidden;
            margin-top: 3.9vw;
            .title{
                width: 30vw;
                height: 3.69vw;
                margin: 0 auto;
                margin-top: 1vw;
                margin-bottom: 11.66vw;
                color: #FFFFFF;
                font-size: 2.6vw;
                line-height: 3.69vw;
                font-weight: bold;
                font-family: AlibabaPuHuiTi_2_115_Black;
                text-align: center;
            }
            .timeWidth-l{
                width: 50%;
                text-align: right;
                padding-right: 3vw;
            }
            .timeWidth-r{
                width: 50%;
                margin-left: 50%;
                padding-left: 3vw;
                text-align: left;
            }
            .span-l{
                position: absolute;
                top: 1.3vw;
                left: -2.9vw;
                display: inline-block;
                width: 1.25vw;
                height: .1vw;
                background-color: #C689FF;
                border: 1px solid #C689FF;
            }
             .span-r{
                position: absolute;
                top: 1.3vw;
                right: -2.9vw;
                display: inline-block;
                width: 1.25vw;
                height: .1vw;
                background-color: #C689FF;
                border: 1px solid #C689FF;
            }
            .time1,.time2,.time3,.time4,.time5,.time6,.time7,.time8{
                margin-top: -1vw;
                position: relative;
                .stage{
                    margin-bottom: .57vw;
                    font-size: 2.6vw;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #ffffff;
                    line-height: 2.6vw;
                }  
                .date{
                    position: relative;
                    font-size: 2.2vw;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #04FFA2;
                    line-height: 2.65vw;
                }
                .event-l{
                    width: 34.94vw;
                    padding: .46vw .8vw .46vw 0;
                    margin-top: 1.66vw;
                    margin-left: 12vw;
                    font-size: 1.04vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 1.56vw;
                    background: #141314;
                }
                .event-r{
                    width: 34.94vw;
                    padding: .46vw 0 .46vw .8vw;
                    margin-top: 1.66vw;
                    margin-left: -.6vw;
                    font-size: 1.04vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 1.56vw;
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
                top: 8.1vw;
                left: 1.3vw;
                width: 1.02vw;
                height: 1vw;
            }
            .time2 > .check{
                position: absolute;
                top: 5vw;
                right: 1.4vw;
                width: 1.02vw;
                height: 1vw;
            }
            .time1{
                margin-top: 0;
            }
            .time8{
                margin-bottom: 8vw;
            }
            .time5,.time6,.time7,.time8{
                // margin-top: -3.5vw;
            }
        }
    }
    .team{
        width: 100%;
        height: 55vw;
        background-color: #000000;
        .title{
            height: 5vw;
            margin: 0 auto;
            font-size: 2.08vw;
            font-family: AlibabaPuHuiTi_2_115_Black;
            color: #FFFFFF;
            line-height: 3.69vw;
            text-align: center;
        }
        .wrap{
            width: 100%;
            height: 50vw;
            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/teamBg.png');
            background-size: 100% 100%;
            ul{
                position: relative;
                width: 100%;
                height: 100%;
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/teamLogo.png');
                background-size: auto 5.2vw;
                background-position: center 18vw;
                background-repeat: no-repeat;
                li{
                    position: absolute;
                    width: 15vw;
                    height: 4.4vw;
                    padding: .46vw 0vw;
                    background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/membersBg.png');
                    background-size: 100% 100%;
                    transition: all .2s ease;
                    -moz-transition: all .2s ease;
                    -webkit-transition: all .2s ease;
                    cursor: pointer;
                    .avator{
                        height: 100%;
                        margin-right: 1.04vw;
                        img{
                            height: 100%;
                            border-radius: 50%;
                        }
                    }
                    .msg{
                        font-size: 1.14vw;
                        font-family: AlibabaPuHuiTi_2_85_Bold;
                        color: #FFFFFF;
                        line-height: 1.25vw;
                        white-space: nowrap;
                        span:last-child{
                            font-size: .73vw;
                            color: #ffffff;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            line-height: 1.04vw;
                        }
                    }
                    .card{
                        position: absolute;
                        top: 0;
                        width: 20.46vw;
                        padding: .625vw 1.04vw 1.25vw;
                        background: rgba(40, 38, 38,.9);
                        transform: translate(0,-114%);
                        animation: teamCardAni 0.1s ease-in;
                        animation-fill-mode: forwards;
                        .msg{
                            display: flex;
                            align-items: flex-end;
                            span{
                                color: #979797;
                                margin-left: 2px;
                            }
                        }
                        .text{
                            margin-top: .6vw;
                            font-size: .73vw;
                            color: #CDCDCD;
                            line-height: 1.09vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                        }
                        &::after{
                            position: absolute;
                            left: 50%;
                            bottom: .0546vw;
                            content: '';
                            display: inline-block;
                            width: 0;
                            height: 0;
                            border: solid .83vw transparent;
                            border-top-color: rgba(40, 38, 38,.9);
                            transform: translate(-50%,100%);
                        }
                    }
                }
                li:nth-child(1){
                    top: 5vw;
                    left: 31vw;
                }
                li:nth-child(2){
                    top: 6.6vw;
                    left: 55.8vw;
                    width: 19.54vw;
                    height: 5.2vw;
                    .msg > div{
                        color: #04FFA2;
                    }
                }
                li:nth-child(3){
                    top: 12.6vw;
                    left: 19vw;
                    width: 13.75vw;
                    height: 5.41vw;
                    .msg > div{
                        color: #04FFA2;
                    }
                }
                li:nth-child(4){
                    top: 11.6vw;
                    left: 40.8vw;
                    width: 14.66vw;
                    height: 3.95vw;
                }
                li:nth-child(5){
                    top: 13.6vw;
                    left: 65.4vw;
                    width: 13.75vw;
                    height: 3.95vw;
                }
                li:nth-child(6){
                    top: 20.5vw;
                    left: 27.7vw;
                    width: 14.14vw;
                    height: 3.95vw;
                }
                li:nth-child(7){
                    top: 19.2vw;
                    left: 58.1vw;
                    width: 18vw;
                }
                li:nth-child(8){
                    top: 26.6vw;
                    left: 19.6vw;
                }
                li:nth-child(9){
                    top: 25.4vw;
                    left: 52.2vw;
                    width: 14.58vw;
                    height: 4.16vw;
                }
                li:nth-child(10){
                    top: 30.3vw;
                    left: 38.3vw;
                    width: 13.54vw;
                    height: 5.2vw;
                    .msg > div{
                        color: #04FFA2;
                    }
                }
                li:nth-child(11){
                    top: 30.2vw;
                    left: 66.5vw;
                    width: 14.66vw;
                    height: 3.95vw;
                }
                li:hover{
                    transform: translate(0, -10px);
                }
            }
        }
    }
    .new-team{
        background-color: #000000;
        color: #FFFFFF;
        padding-bottom: 5vw;
        .title{
            font-size: 2.6vw;
            font-family: AlibabaPuHuiTi_2_115_Black;
            line-height: 3.64vw;
            text-align: center;
            margin-bottom: 2.81vw;
        }
        .content{
            width: 61.25vw;
            margin: 0 auto;
            ul{
                overflow: hidden;
                padding-top: 2px;
                height: calc(40.75vw + 2px);
                .top{
                    top: -2px;
                }
                li{
                    float: left;
                    width: 18.75vw;
                    height: 18.75vw;
                    background: linear-gradient(180deg, rgba(143, 131, 255, 0.24) 0%, rgba(143, 131, 255, 0) 41%, rgba(143, 131, 255, 0) 56%, rgba(143, 131, 255, 0.24) 100%);
                    border: 1px solid;
                    border-image: linear-gradient(180deg, rgba(60, 57, 218, 1), rgba(198, 137, 255, 1)) 1 1;
                    margin-bottom: 2.5vw;
                    padding: 0.52vw;
                    position: relative;
                    cursor: pointer;
                    overflow: hidden;
                    transition: all .1s ease;
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
                            height: 3.9vw;
                            padding: 0.52vw 0 0.52vw 1.04vw;
                            div{
                                font-size: 1.25vw;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                                color: #FFFFFF;
                                line-height: 1.71vw;
                                position: absolute;

                            }
                            span{
                                font-size: 0.83vw;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                color: #fff;
                                line-height: 1.14vw;
                                opacity: .5;
                                position: absolute;
                                top: 2.3vw;
                            }
                            p{
                                width: 5.67vw;
                                height: 1.61vw;
                                background: linear-gradient(270deg, rgba(4, 255, 162, 0) 0%, #04FFA2 100%);
                                opacity: 0.5;
                                position: absolute;
                                left: 0;
                                z-index: 0;
                            }
                            img{
                                width: 1.51vw;
                                position: absolute;
                                top: .781vw;
                                right: 1.61vw;
                            }
                        }
                    }
                    .card{
                        left: -20vw;
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
                                line-height: 1.71vw;
                                font-size: 1.25vw;
                            }
                            span{
                                font-size: 0.73vw;
                                font-family: AlibabaPuHuiTi_2_65_Medium;
                                line-height: 1.04vw;
                                opacity: .4;
                            }
                        }
                        .text{
                            font-size: 0.83vw;
                            font-family: AlibabaPuHuiTi_2_65_Medium;
                            color: #FFFFFF;
                            line-height: 1.14vw;
                            opacity: .7;
                            margin-top: 0.52vw;
                            max-height: 12vw;
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
                li:not(:nth-child(3n+3)){
                    margin-right: 2.5vw;
                    
                }
            }
        }
    }
    .partners{
        width: 100%;
        background-color: #000000;
        // overflow: hidden;
        border: 1px solid #000;
        .title{
            height: 3.69vw;
            font-size: 2.6vw;
            font-family: AlibabaPuHuiTi_2_115_Black;
            color: #FFFFFF;
            line-height: 3.69vw;
            .xplan{
                width: 4.06vw;
                height: 2.6vw;
                margin-left: 1.5vw;
                cursor: pointer;
            }
            .xplan:hover{
                filter: drop-shadow(0 0 .1vw #776fe5);
            }
        }
        .logo{
            flex-wrap: wrap;
            // width: 54.24vw;
            width: 60vw;
            margin: 4vw auto 6vw;
            overflow: hidden;
            .line1{
                width: 100%;
                border-bottom: 2px solid rgb(34, 33, 33);
                margin-bottom: 1.56vw;
            }
            a,div:not(.line1){
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                // width: 12vw;
                // height: 5.8vw;
                width: 10vw;
                height: 5vw;
                margin: 0 1vw 1.8vw;
                background: #282626;
                border-radius: .88vw;
                .logo1{
                    width: 4vw;
                }
                .logo2{
                    width: 3.8vw;
                }
                .logo3{
                    height: 2.8vw;
                    margin-right: .4vw;
                }
                .logo5{
                    width: 6.2vw;
                }
                .logo6{
                    width: 4.2vw;
                }
                .logo7{
                    width: 4.8vw;
                }
                .logo8{
                    width: 7.8vw;
                }
                .logo10{
                    width: 6.2vw;
                }
                .logo11{
                    height: 3.2vw;
                }
                .logo12{
                    width: 7.6vw;
                }
                .logo13{
                    height: 3vw;
                }
                .logo14{
                    width: 8vw;
                }
                
            }
            a:hover,div:not(.line1):hover{
                background: rgba(40, 38, 38,.6);
            }
        }
    }
    .will{
        width: 100%;
        background-color: #000;
        overflow: hidden;
        .title{
            width: 60vw;
            margin: 0 auto;
            font-size: 2.08vw;
            font-family: AlibabaPuHuiTi_2_115_Black;
            color: #FFFFFF;
            line-height: 3.69vw;
            text-align: center;
        }
        .logo{
            margin-top: 3.8vw;
            margin-bottom: 7vw;
            overflow: hidden;  
            li{
                display: flex;
                align-items: center;
                margin-right: 1.4vw;
                font-size: 1.56vw;
                font-family: AlibabaPuHuiTi_2_75_SemiBold;
                color: #FFFFFF;
                line-height: 1.56vw;
                img{
                    margin-right: .4vw;
                }
                .wlogo3{
                    height: 1.97vw;
                }
                .wlogo4{
                    height: 2.6vw;
                }
                .wlogo1{
                    height: 2.39vw;
                }
                .wlogo2{
                    height: 2.6vw;
                }
                div{
                    width: 8vw;
                }
                .googleplay{
                    width: 10.36vw;
                }
            }
            li:nth-child(1){
                margin-left: 3vw;
            }
        }
    }
    .register{
        width: 100%;
        height: 27.44vw;
        background-color: #04FF55;
        overflow: hidden;
        flex-direction: column;
        .title{
            margin-top: 4.73vw;
            font-size: 2.86vw;
            font-weight: bold;
            font-family: AlibabaPuHuiTi_2_115_Black;
            color: #000000;
            line-height: 3.69vw;
        }
        .subtitle{
            font-size: 2.08vw;
            font-weight: bold;
            font-family: AlibabaPuHuiTi_2_115_Black;
            color: #000000;
            line-height: 3.69vw;
        }
        .email{
            display: flex;
            width: 33.8vw;
            height: 3.69vw;
            margin-top: 1.61vw;
            .email-wrap{
                position: relative;
                width: 69%;
                height: 3.69vw;
                input{
                    width: 100%;
                    height: 100%;
                    padding-right: 1.25vw;
                    font-size: 1.04vw;
                    color: #565656; 
                    text-indent: 1.25vw;
                    line-height: 1.56vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    background-color: #FFFFFF;
                    border: 1px solid #979797;
                    outline: none;
                    text-align: left;
                }
                // input:focus::-webkit-input-placeholder {
                //     font-size: .8vw;
                //     text-align: right;
                // }
            }
            .sub{
                width: 31%;
                height: 3.69vw;
                line-height: 3.69vw;
                background-color: #0C0A0A;
                font-size: .98vw;
                font-weight: bold;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #04FF84;
                text-align: center;
                cursor: pointer;
            }
        }
        .email:hover{
            filter: drop-shadow(0 0 0.7vw #000000);
        }
        .email:focus-within {
            filter: drop-shadow(0 0 0.7vw #000000);
        }
        .link{
            margin-top: 2vw;
            font-size: 1.25vw;
            font-family: AlibabaPuHuiTi_2_55_Regular;
            color: #000000;
            line-height: 1.25vw;
        }
        .link:hover{
            color: #ff18ff;
        }
    }
    @media screen {
        @media (max-width: 1015px){
            .download-mask{
                height: 32vw !important;
            }
        }
    }
</style>