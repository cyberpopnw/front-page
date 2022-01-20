<template>
    <div class="home">
        <header>
            <div class="content">
                <img class="logo" src="https://d1td2c8hf7fv9k.cloudfront.net/LOGO.png" alt="logo">
                <div class="user" @click="connect()">
                    <div class="login_in Aideep">{{ id || "LOG IN" }}</div>
                    <img src="https://d1td2c8hf7fv9k.cloudfront.net/user.png" alt="" v-if="!id">
                </div>
                <div class="menu">
                    <ul>
                        <li @click="changeMenu(0, '/')" :class="{'active': active == 0}">HOME</li>
                        <li @click="changeMenu(1, '/about')" :class="{'active': active == 1}">STORY</li>
                        <li @click="changeMenu(2)" :class="{'active': active == 2}">NEWS</li>
                        <li @click="changeMenu(3, '/support')" :class="{'active': active == 3}">SUPPORT</li>
                        <li @click="changeMenu(4, '/about')" :class="{'active': active == 4}">ABOUT</li>
                    </ul>
                </div>
            </div>
        </header>
        <section>
            <div class="titles"> 
                <div class="title1">
                    <img src="https://d1td2c8hf7fv9k.cloudfront.net/section1_2.png" alt="">
                </div>
                <div class="title2">
                    <img src="https://d1td2c8hf7fv9k.cloudfront.net/section1_1.png" alt="">
                </div>
                <div class="title3">
                    ECONOMIC MODELS
                </div>
            </div>
        </section>
        <footer>
            <img src="https://d1td2c8hf7fv9k.cloudfront.net/section1_buttom.png" alt="" class="buttom">
        </footer>
    </div>
    <div class="welcome">
        <div class="cover_up"></div>
        <img src="@/assets/support/section2-1.png" class="section2-1 bgimg" alt="">
        <img src="@/assets/support/section2-2.png" class="section2-2 bgimg" alt="">
        <img src="@/assets/support/section3-1.png" class="section3-1 bgimg" alt="">
        <img src="@/assets/support/section3-2.png" class="section3-2 bgimg" alt="">
        <div class="section4">
            <div>
                <img src="@/assets/support/section4-1.png" alt="">
            </div>
            <div>
                <img src="@/assets/support/section3-3.png" alt="">
                <img src="@/assets/support/section4-2.png" alt="">
            </div>
        </div>
        <div class="section5"></div>
        <!-- <div class="content">
            <div class="models">
                <div class="left-img"></div>
                <div class="center-models">
                    <img class="section2-img2" src="@/assets/support/models-c.png" alt="">
                    <div>ECONOMIC MODELS</div>
                </div>
                <div class="right-img"></div>
            </div>
            <div class="round">
                <ul class="round-wrap">
                    <li>
                        <div class="round-title">Round A</div>
                        <div class="round-price">$0.13</div>
                        <div class="round-month">7 month</div>
                        <div class="round-schedule">
                            <div class="schedule-line">
                                <img src="@/assets/support/yellow.png" alt="">
                            </div>
                            <div>100%</div>
                            <img class="schedule-locking" src="@/assets/support/locking1.png" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="round-title">Round B</div>
                        <div class="round-price">$0.25</div>
                        <div class="round-month">8 month</div>
                        <div class="round-schedule">
                            <div class="schedule-line">
                                <div class="wrap">
                                    <img class="schedule-bg" src="@/assets/support/green1.png" alt="">
                                    <span></span>
                                </div>
                            </div>
                            <div>80%</div>
                            <img class="schedule-locking locking2" src="@/assets/support/locking2.png" alt="">
                        </div>
                    </li>
                    <li>
                        <div class="round-title">Round C</div>
                        <div class="round-price">$0.42</div>
                        <div class="round-month">3 month</div>
                        <div class="round-schedule">
                            <div>0%</div>
                            <img class="schedule-locking" src="@/assets/support/locking1.png" alt="">
                        </div>
                    </li>
                </ul>
            </div>
            <div class="ratio">
                <div class="ratio-wrap">
                    <div class="ratio-left">
                        <div class="title">
                            <img src="@/assets/support/ratio-leftArrow.png" alt="">
                            <img src="@/assets/support/ratio-leftTitle.png" alt="">
                            <div class="title-txt">DISTRIBUTION RATIO</div>
                            <div class="title-tips">CYBER POP
                                <img src="@/assets/support/ratio-leftLine.png" alt="">
                            </div>
                            <img class="title-imgRotateY" src="@/assets/support/ratio-leftTitle.png" alt="">
                        </div>
                        <div class="pie">
                            <div class="pie-main">
                                <div>
                                    <img src="@/assets/support/ratio-leftPie15.png" alt="">
                                    <img src="@/assets/support/ratio-leftPie15-text.png" alt="">
                                </div>
                                <div class="percent">18%</div>
                            </div>
                            <img class="pie-rest" src="@/assets/support/ratio-leftPie.png" alt="">
                            <div class="total">Total supply 120,000,000 CYT</div>
                        </div>
                    </div>
                    <div class="ratio-right">
                        <ul>
                            <li>
                                <img src="@/assets/support/ratio-block1.png" alt="">
                                <a href="">private investment</a>
                            </li>
                            <li>
                                <img src="@/assets/support/ratio-block2.png" alt="">
                                <a href="">consultants and legal services</a>
                            </li>
                            <li>
                                <img src="@/assets/support/ratio-block3.png" alt="">
                                <a href="">investment institution</a>
                            </li>
                            <li>
                                <img src="@/assets/support/ratio-block4.png" alt="">
                                <a href="">community building and airdrop</a>
                            </li>
                            <li>
                                <img src="@/assets/support/ratio-block5.png" alt="">
                                <a href="">public offering</a>
                            </li>
                            <li>
                                <img src="@/assets/support/ratio-block6.png" alt="">
                                <a href="">cological construction fund</a>
                            </li>
                            <li>
                                <img src="@/assets/support/ratio-block7.png" alt="">
                                <a href="">1n-game output</a>
                            </li>
                            <li>
                                <img src="@/assets/support/ratio-block8.png" alt="">
                                <a href="">team</a>
                            </li>
                            <li>
                                <img src="@/assets/support/ratio-block9.png" alt="">
                                <a href="">pledge and interest payment</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="category">
                <div class="category-wrap">
                    <img class="category-info" src="@/assets/support/category-info.png" alt="">
                    <img class="category-arrow1" src="@/assets/support/category-arrow1.png" alt="">
                    <img class="category-arrow2" src="@/assets/support/category-arrow2.png" alt="">
                    <img class="category-arrow3" src="@/assets/support/category-arrow3.png" alt="">
                </div>
            </div>
            <div class="rordmap">
                <div class="rordmap-left">
                    <div class="time1">
                        <div class="time1-date">
                            <div class="time1-txt">
                                <img src="@/assets/support/2021.03.png" alt="">
                                <img src="@/assets/support/time1-yellow.png" alt="">
                                <img src="@/assets/support/time1-orange.png" alt="">
                            </div>
                            <div class="time1-h">1</div>
                        </div>
                        <div class="time1-content">
                            <ul>
                                <li class="txt1">PROJECT CONCEPT</li>
                                <li class="txt2">BASIC GAMEPLAY DESIGN</li>
                                <li class="txt3">GAME SCENE DEVELOPMENT</li>
                                <li class="txt4">GAME ART MODELING</li>
                            </ul>
                        </div>
                    </div>
                    <div class="time3">
                        <img class="time3-bg" src="@/assets/support/time3-bg.png" alt="">
                        <div class="time3-date">
                            <div class="time3-txt">
                                <img src="@/assets/support/2022.03.png" alt="">
                                <img src="@/assets/support/time1-yellow.png" alt="">
                                <img src="@/assets/support/time1-orange.png" alt="">
                            </div>
                            <div class="time3-h">3</div>
                        </div>
                        <div class="time3-content">
                            <ul>
                                <li class="txt1">GAME TRIAL LAUNCH</li>
                                <li class="txt2">GAME NET MALL</li>
                                <li class="txt3">RELEASE UGC TOOLCHAIN</li>
                                <li class="txt4">TOKEN CYT RELEASED</li>
                            </ul>
                        </div>
                    </div>
                    <div class="time4">
                        <div class="time4-date">
                            <div class="time4-txt">
                                <img src="@/assets/support/2022.06.png" alt="">
                                <img src="@/assets/support/time4-arrow.png" alt="">
                            </div>
                            <div class="time4-h">4</div>
                        </div>
                        <div class="time4-content">
                            <div class="wrap">
                                <div>THE SOCIALFI MECHANISM</div>
                                <div>GAME UNIONS SYSTEM</div>
                            </div>
                        </div>
                        <img class="time4-lastImg" src="@/assets/support/time4-bottom.png" alt="">
                    </div>
                </div>
                <div class="rordmap-timeLine">
                    <div class="title">RORD&nbsp;&nbsp;MAP</div>
                    <img class="location" src="@/assets/support/rordmap-timeLine1.png" alt="">
                    <img class="line" src="@/assets/support/rordmap-timeLine2.png" alt="">
                    <img class="arrow" src="@/assets/support/rordmap-timeLine3.png" alt="">
                </div>
                <div class="rordmap-right">
                    <div class="time2">
                        <div class="time2-date">
                            <div class="time2-h">2</div>
                            <img src="@/assets/support/2021.10.png" alt="">
                        </div>
                        <div class="time2-content">
                            <ul>
                                <li>UGC PROJECT APPROVAL</li>
                                <li>WEBSITE LAUNCHED</li>
                                <li>GAME DEMO ONLING</li>
                                <li>CHARACTER MODELING</li>
                            </ul>
                        </div>
                    </div>
                    <div class="time5">
                        <img class="time5-bg" src="@/assets/support/time5-bg.png" alt="">
                        <div class="time5-date">
                            <div class="time5-h">5</div>
                            <img src="@/assets/support/2022.10.png" alt="">
                        </div>
                        <div class="time5-content">
                            <ul>
                                <li>GAME TRIAL LAUNCH</li>
                                <li>GAME NFT MALL</li>
                                <li>RELEASE UGC TOOLCHAIN</li>
                                <li>TOKEN CYT RELEASED</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="supported">
                <div class="wrap">
                    <img src="" alt="">
                </div>
            </div>
        </div> -->
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 

const router = useRouter()

const active = computed(() => store?.state.user?.active);

const changeMenu = (type: any, route?: any) => {
    // active.value = type;
    if(type == 2) {
        window.open('https://medium.com/@Cyberpopnewworld')
        return
    }
    store.dispatch('user/changeActive', type)
    if(route) router.push({ path: `${route}`})
}

const id: any = ref(0)

const connect: any = async () => {
    const [accounts]: any = await Web3.login().then((res: any) => {
        return res;
    })
    id.value = accounts;
    let len = id.value.length-1;
    id.value = id.value[0]+id.value[1]+id.value[2]+id.value[3]+id.value[4]+"*****"+id.value[len-3]+id.value[len-2]+id.value[len-1]+id.value[len];
}


onMounted(() => {
    connect()
})

</script>
<style lang="less" scoped>
    @keyframes springtimeAniamtScale2 {
        0% {
            bottom: 2.5vw;
        }
        25% {
            bottom: 0vw;
        }
        50% {
            bottom: -2vw;
        }
        75%{
            bottom: 0vw;
        }
        100% {
            bottom: 2.5vw;
        }
    }
    a {
        text-decoration: none;
    }
    
    .router-link-active {
        text-decoration: none;
    }
    .home{
        background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/BK1.jpg');
        height: 100vh;
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: 20% top;
        animation: home 10s linear;
        header{
            height: 14.5px;
            color: #fff;
            animation: fadeInDown .8s linear;
            .content{
                width: 80%;
                height: 100%;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                position: relative;
                .logo{
                    width: 8vw;
                }
                .user{
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    .login_in{
                        background-color: #fbec35;
                        padding: 0.5vw 0.5vw;
                        color: #333;
                        border-radius: 8px;
                        font-size: 0.6vw;
                        margin-right: 0.5vw;
                    }
                    img{
                        width: 1.5vw;
                    }
                }
                .menu{
                    position: absolute;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    width: 50vw;
                    background-image: url('../../../assets/icon/header_menu.png');
                    background-size: 100% 100%;
                    height: 100%;
                    ul{
                        width: 100%;
                        overflow: hidden;
                    }
                    ul > li{
                        width: 20%;
                        float: left;
                        font-family: Aideep;
                        font-size: 1.3vw;
                        text-align: center;
                        line-height: 3.8vw;
                        cursor: pointer;
                    }
                    li:last-child{
                        background-size: 98% 99% !important;
                    }
                    .active{
                        background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/active_menu.png');
                        background-size: 108% 100%;
                        background-position: left top;
                    }
                }
            }
        }
        section{
            height: 140px;
            position: absolute;
            top: 50%;
            width: 100%;
            transform: translateY(-50%);
            .titles{
                position: absolute;
                right: 10vw;
                text-align: center;
                top: 50%;
                transform: translateY(-50%);
                .title1{
                    margin-bottom: 2vw;
                    animation: fadeInRight .5s linear;
                    img{
                        width: 80px;
                    }
                }
                .title2{
                    animation: fadeInRight .5s linear;
                    img{
                        width: 200px;
                    }
                }
                .title3{
                    animation: fadeInRight .5s linear;
                    font-family: Aideep;
                    margin: 0 auto;
                    margin-top: 2vw;
                    background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/section1_3.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    display: inline-block;
                    // width: 100px;
                    // height: 20px;
                    color: #fff;
                    font-size: 2.5vw;
                }
            }
        }
        .buttom{
            animation: springtimeAniamtScale2 1.6s linear infinite;
            position: absolute;
            bottom: 2vw;
            width: 4vw;
            left: 0;
            right: 0;
            margin: 0 auto;
            z-index: 99;
        }
    }
    .welcome{
        position: relative;
        width: 100%;
        // height: 50vw;
        box-shadow: 0px -37px 29px #000;
        margin-top: 2px;
        overflow: hidden;
        .cover_up{
            width: 100%;
            height: 100%;
            position: absolute;
            background: #000;
            opacity: 1;
            z-index: -1;
        }
        .bgimg{
            width: 50%;
            vertical-align: middle;
            // vertical-align: top;            
        }
        .section2-1{
        }
        .section2-2{
        }
        .section3-1{
            height: 53vw;
        }
        .section3-2{
            height: 46vw;
        }
        .section4{
            display: flex;
            align-items: center;
            height: 101.1vw;
            div{
                // align-items: center;
            }
            div:first-child{

            }
            img{
                width: 50vw;
            }
        }
        .section5{
            background-image: url('../../../assets/support/section5.png');
            background-size: 100% 100%;
            height: 50vw;
        }
        // .content{
        //     position: absolute;
        //     top:0;
        //     left: 0;
        //     width: 100%;
        //     .models{
        //         display: flex;
        //         justify-content: space-between;
        //         .left-img,.right-img{
        //             width:37.5vw;
        //             height: 22vw;
        //             background-image: url('@/assets/support/models-l.png');
        //             background-position: -11vw -1.4vw;
        //             background-size: 100% auto;
        //             background-repeat: no-repeat;
        //         }
        //         .right-img{
        //             transform: rotateY(180deg);
        //         }
        //         .center-models{
        //             display: flex;
        //             flex-direction: column;
        //             align-items: center;
        //             width: 12vw;
        //             img{
        //                 width: 12vw;
        //                 margin-top: .6vw;
        //                 margin-bottom: 3vw;
        //             }
        //             div{
        //                 color:#fff;
        //                 font-size: 3.8vw;
        //                 font-family: EDIX;
        //                 white-space: nowrap;
        //             }
        //         }
        //     }
        //     .round{
        //         .round-wrap{
        //             margin: 10vw 17vw 0;
        //             li{
        //                 display: flex;
        //                 justify-content: space-between;
        //                 align-items: center;
        //                 margin-bottom: 3vw;
        //                 color:#fff;
        //                 font-family: OPPOSans;
        //                 div:not(:nth-child(4)){
        //                     font-size: 2vw;
        //                 }
        //                 .round-price{
        //                     opacity: .8;
        //                 }
        //                 .round-month{
        //                     margin: 0 1vw;
        //                     opacity: .6;
        //                 }
        //                 .round-schedule{
        //                     position: relative;
        //                     width: 35.5vw;
        //                     height: 3.4vw;
        //                     padding: .4vw;
        //                     color: #fc4857;
        //                     line-height: 2vw;
        //                     border: .3vw solid #ff593d;
        //                     .schedule-line{
        //                         position: absolute;
        //                         left: .4vw;
        //                         width: 34.1vw;
        //                         height: 2vw;
        //                         img{
        //                             width: 100%;
        //                             height: 100%;
        //                         }
        //                         .wrap{
        //                             position: relative;
        //                             height: 2vw;
        //                             width: 80%; // 控制进度
        //                             .schedule-bg{
        //                                 width: 100%;
        //                             }
        //                             span{
        //                                 position: absolute;
        //                                 top: 0;
        //                                 right: .5vw;
        //                                 width: .4vw;
        //                                 height: 100%;
        //                                 background: #060709;
        //                             }
        //                         }
        //                     }
        //                     div:nth-child(2){
        //                         position: absolute;
        //                         left: .6vw;
        //                     }
        //                     .schedule-locking{
        //                         position: absolute;
        //                         top: -1.3vw;
        //                         right: -1.5vw;
        //                         width:6vw;
        //                     }
        //                     .locking2{
        //                         top: -1.15vw;
        //                     }
        //                 }
        //             }
        //         }
        //     }
        //     .ratio{
        //         .ratio-wrap{
        //             display: flex;
        //             justify-content: space-between;
        //             margin: 0 14vw;
        //             .ratio-left{
        //                 width: 35vw;
        //                 height: 26vw;
        //                 margin-top: 2vw;
        //                 color:#fff;
        //                 background-image: url('@/assets/support/ratio-leftBg.png');
        //                 background-size: auto 100%;
        //                 background-repeat: no-repeat;
        //                 .title{
        //                     position: relative;
        //                     height: 8.2vw;
        //                     img:nth-child(1){
        //                         position: absolute;
        //                         top: .4vw;
        //                         left: 8.4vw;
        //                         width: 2.6vw;
        //                     }
        //                     img:nth-child(2){
        //                         position: absolute;
        //                         top: 3.2vw;
        //                         left: .5vw;
        //                         width: 7.8vw;
        //                     }
        //                     .title-txt{
        //                         position: absolute;
        //                         top: 3.8vw;
        //                         left: 8.6vw;
        //                         font-size: 1.5vw;
        //                         letter-spacing:.1vw;
        //                     }
        //                     .title-tips{
        //                         position: absolute;
        //                         top: 6vw;
        //                         left: 12.3vw;
        //                         color: #7a7a78;
        //                         font-size: 1vw;
        //                         transform: scale(.5);
        //                         img{
        //                             position: absolute;
        //                             left:7vw;
        //                             top:.1vw;
        //                             width: 16vw;
        //                         }
        //                     }
        //                     .title-imgRotateY{
        //                         position: absolute;
        //                         top: 3.2vw;
        //                         right: .4vw;
        //                         width: 7.8vw;
        //                         transform: rotateY(180deg);
        //                     }
        //                 }
        //                 .pie{
        //                     height: 16.8vw;
        //                     position: relative;
        //                     .pie-main{
        //                         img:first-child{
        //                             z-index: -1;
        //                             position: absolute;
        //                             top: .8vw;
        //                             right: 7.9vw;
        //                             width: 10.5vw;
        //                         }
        //                         img:last-child{
        //                             position: absolute;
        //                             top: .1vw;
        //                             right: 6.2vw;
        //                             width: 6vw;
        //                         }
        //                         .percent{
        //                             position: absolute;
        //                             top: .5vw;
        //                             right: 7.3vw;
        //                             color: #6655d5;
        //                             font-family: EDIX;
        //                             font-size: .9vw;
        //                         }

        //                     }
        //                     .pie-rest{
        //                         z-index: 1;
        //                         width: 21.4vw;
        //                         margin: .4vw 0 0 4.8vw;
        //                     }
        //                     .total{
        //                         margin-top: .9vw;
        //                         margin-left: 4vw;
        //                         font-size: 1.24vw;
        //                         font-family: OPPOSans;
        //                     }
        //                 }
                        
        //             }
        //             .ratio-right{
        //                 width: 29vw;
        //                 height: 32vw;
        //                 color:#fff;
        //                 background-image: url('@/assets/support/ratio-rightBg.png');
        //                 background-position: 85% center;
        //                 background-size: auto 100%;
        //                 background-repeat: no-repeat;
        //                 ul{
        //                     width: 20vw;
        //                     height: 23vw;
        //                     // background: pink;
        //                     margin: 5.4vw 0 5.4vw 7.6vw;
        //                     background-image: url('@/assets/support/ratio-stop.png');
        //                     background-position: 11.7vw 14.2vw;
        //                     background-size: 28% 29%;
        //                     background-repeat: no-repeat;
        //                     li{
        //                         display: flex;
        //                         img{
        //                             width: 2.5vw;
        //                             height: 2.5vw;
        //                         }
        //                         a{
        //                             margin-top: .6vw;
        //                             color: #fff;
        //                             font-size: .95vw;
        //                             font-family: OPPOSans;
        //                             opacity: .8;
        //                             text-decoration: none;
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //     }
        //     .category{
        //         .category-wrap{
        //             position: relative;
        //             height: 27vw;
        //             margin: 0 14vw;
        //             .category-info{
        //                 position: absolute;
        //                 top: -2vw;
        //                 width: 100%;
        //             }
        //             .category-arrow1{
        //                 position: absolute;
        //                 top: 8.4vw;
        //                 left: 27vw;
        //                 width: 5vw;
        //             }
        //             .category-arrow2{
        //                 position: absolute;
        //                 top: 13.8vw;
        //                 left: 27.8vw;
        //                 width: 5vw;
        //             }
        //             .category-arrow3{
        //                 position: absolute;
        //                 top: 13.9vw;
        //                 right: 11vw;
        //                 width: 10vw;
        //             }
        //         }
        //     }
        //     .rordmap{
        //         display: flex;
        //         justify-content: space-between;
        //         margin-top:3vw;
        //         .rordmap-left{
        //             width: 47vw;
        //             padding-top:20vw;
        //             color:#fff;
        //             background-image: url('@/assets/support/rordmap-leftBg.png');
        //             background-position: -11.2vw 0vw;
        //             background-size: 50% auto;
        //             background-repeat: no-repeat;
        //             .time1{
        //                 .time1-date{
        //                     position: relative;
        //                     width: 100%;
        //                     height: 8vw;
        //                     background-image: url('@/assets/support/time1-dateBg.png');
        //                     background-position: 2vw bottom;
        //                     background-size: 91% auto;
        //                     background-repeat: no-repeat;
        //                     .time1-txt{
        //                         position: relative;
        //                         img:first-child{
        //                             position: absolute;
        //                             top: 1.3vw;
        //                             right: 7.4vw;
        //                             width: 9vw;
        //                         }
        //                         img:nth-child(2){
        //                             position: absolute;
        //                             top: 3.5vw;
        //                             right: 8.6vw;
        //                             width: 21.6vw;
        //                         }
        //                         img:last-child{
        //                             position: absolute;
        //                             top: 4vw;
        //                             right: 5.9vw;
        //                             width: 2.4vw;
        //                         }
        //                     }
        //                     .time1-h{
        //                         position: absolute;
        //                         top: -.2vw;
        //                         right: .6vw;
        //                         width: 5vw;
        //                         height: 5vw;
        //                         line-height: 5vw;
        //                         text-align: center;
        //                         font-size: 2.8vw;
        //                         font-family: Aideep;
        //                         background-image: url('@/assets/support/time1-circle.png');
        //                         background-size: 100% auto;
        //                         background-repeat: no-repeat;
        //                     }
        //                 }
        //                 .time1-content{
        //                     width: 100%;
        //                     height: 22vw;
        //                     background-image: url('@/assets/support/time1-contentBg.png');
        //                     background-position: 9vw 5.5vw;
        //                     background-size: 30% auto;
        //                     background-repeat: no-repeat;
        //                     ul{
        //                         padding: 3.7vw 1.1vw 0 25.7vw;
        //                         li{
        //                             font-size: 1.3vw;
        //                             padding: .67vw;
        //                             color: #067966;
        //                         }
        //                         .txt1{
        //                             color:#fefbc6;
        //                         }
        //                         .txt2{
        //                         }
        //                         .txt3{
        //                         }
        //                         .txt4{
        //                             color: #f2ec8a;
        //                             background-color: #332e0c;
        //                         }
        //                     }
        //                 }
        //             }
        //             .time3{
        //                 position: relative;
        //                 .time3-bg{
        //                     position: absolute;
        //                     top: -.8vw;
        //                     right: 1vw;
        //                     width: 34vw;
        //                 }
        //                 .time3-date{
        //                     position: relative;
        //                     width: 100%;
        //                     height: 6.2vw;
        //                     .time3-txt{
        //                         position: relative;
        //                         img:first-child{
        //                             position: absolute;
        //                             top: 1.1vw;
        //                             right: 7.8vw;
        //                             width: 9vw;
        //                         }
        //                         img:nth-child(2){
        //                             position: absolute;
        //                             top: 3.5vw;
        //                             right: 8.6vw;
        //                             width: 21.6vw;
        //                         }
        //                         img:last-child{
        //                             position: absolute;
        //                             top: 4vw;
        //                             right: 5.9vw;
        //                             width: 2.4vw;
        //                         }
        //                     }
        //                     .time3-h{
        //                         position: absolute;
        //                         top: -.2vw;
        //                         right: .6vw;
        //                         width: 5vw;
        //                         height: 5vw;
        //                         line-height: 5vw;
        //                         text-align: center;
        //                         font-size: 2.8vw;
        //                         font-family: Aideep;
        //                         background-image: url('@/assets/support/time3-circle.png');
        //                         background-size: 100% auto;
        //                         background-repeat: no-repeat;
        //                     }
        //                 }
        //                 .time3-content{
        //                     width: 100%;
        //                     height: 18vw;
        //                     ul{
        //                         // padding: 2vw 1.1vw 0 25.7vw;
        //                         padding-left: 16vw;
        //                         li{
        //                             font-size: 1.3vw;
        //                             padding: .67vw;
        //                             color: #e2489e;
        //                         }
        //                     }
        //                 }
        //             }
        //             .time4{
        //                 .time4-date{
        //                     position: relative;
        //                     width: 100%;
        //                     height: 8vw;
        //                     margin-top: 1vw;
        //                     .time4-txt{
        //                         position: relative;
        //                         img:first-child{
        //                             position: absolute;
        //                             top: 2.1vw;
        //                             right: 7.4vw;
        //                             width: 9vw;
        //                         }
        //                         img:last-child{
        //                             position: absolute;
        //                             top: 4.4vw;
        //                             right: -2vw;
        //                             width: 41vw;
        //                         }
        //                     }
        //                     .time4-h{
        //                         position: absolute;
        //                         top: -.2vw;
        //                         right: .6vw;
        //                         width: 5vw;
        //                         height: 5vw;
        //                         line-height: 5vw;
        //                         text-align: center;
        //                         font-size: 2.8vw;
        //                         font-family: Aideep;
        //                         background-image: url('@/assets/support/time4-circle.png');
        //                         background-size: 100% auto;
        //                         background-repeat: no-repeat;
        //                     }
        //                 }
        //                 .time4-content{
        //                     width: 100%;
        //                     height: 20vw;
        //                     // background-color: rgba(222, 22, 222, .3);
        //                     background-image: url('@/assets/support/time4-contentBg.png');
        //                     background-position: 12.1vw 5.5vw;
        //                     background-size: auto 34%;
        //                     background-repeat: no-repeat;
        //                     .wrap{
        //                         padding-top: 1.6vw;
        //                         padding-right: 3vw;
        //                         color:#11FFDF;
        //                         font-size: 1.4vw;
        //                         text-align: right;
        //                         div{
        //                             margin-bottom: 1.1vw;
        //                         }
        //                     }
        //                 }
        //                 .time4-lastImg{
        //                     margin-left: 7.5vw;
        //                     width: 37.3vw;
        //                 }
        //             }

        //         }
        //         .rordmap-timeLine{
        //             position: relative;
        //             width: 7vw;
        //             .title{
        //                 position: absolute;
        //                 top: 8.6vw;
        //                 left: -20vw;
        //                 color:#fff;
        //                 font-size: 4.8vw;
        //                 font-family: EDIX;
        //                 white-space: nowrap;
        //             }
        //             .location{
        //                 position: absolute;
        //                 top: 2vw;
        //                 left: 0;
        //                 width: 11vw;
        //             }
        //             .line{
        //                 position: absolute;
        //                 top: 11vw;
        //                 left: 3.4vw;
        //                 height: 88.4vw;
        //             }
        //             .arrow{
        //                 position: absolute;
        //                 left: .9vw;
        //                 bottom: 10vw;
        //                 width: 5.4vw;
        //             }
        //         }
        //         .rordmap-right{
        //             width: 46vw;
        //             color:#fff;
        //             background-image: url('@/assets/support/rordmap-rightBg.png');
        //             background-position: right 6vw;
        //             background-size: 90% auto;
        //             background-repeat: no-repeat;
        //             .time2{
        //                 position: relative;
        //                 height: 36vw;
        //                 margin-top: 39vw;
        //                 background-image: url('@/assets/support/time2-bg.png');
        //                 background-position: 5.6vw .5vw;
        //                 background-size: auto 78.4%;
        //                 background-repeat: no-repeat;
        //                 .time2-date{
        //                     .time2-h{
        //                         position: absolute;
        //                         top: .65vw;
        //                         left: -.8vw;
        //                         width: 5vw;
        //                         height: 5vw;
        //                         line-height: 5vw;
        //                         text-align: center;
        //                         font-size: 2.8vw;
        //                         font-family: Aideep;
        //                         background-image: url('@/assets/support/time2-circle.png');
        //                         background-size: 100% auto;
        //                         background-repeat: no-repeat;
        //                     }
        //                     img{
        //                         position: absolute;
        //                         top: 2vw;
        //                         left: 12vw;
        //                         width: 9vw;
        //                     }
        //                 }
        //                 .time2-content{
        //                     ul{
        //                         padding-top: 6.9vw;
        //                         padding-left: 10.4vw;
        //                         font-size: 1.35vw;
        //                         li{
        //                             margin-bottom: 1.6vw;
        //                             color: #F6F9B5;
        //                         }
        //                     }
        //                 }
        //             }
        //             .time5{
        //                 position: relative;
        //                 height: 36vw;
        //                 .time5-bg{
        //                     position: absolute;
        //                     top: 1.2vw;
        //                     left: -1.4vw;
        //                     width: 35.6vw;
        //                 }
        //                 .time5-date{
        //                     .time5-h{
        //                         position: absolute;
        //                         top: 3.4vw;
        //                         left: .2vw;
        //                         width: 5vw;
        //                         height: 5vw;
        //                         line-height: 5vw;
        //                         text-align: center;
        //                         font-size: 2.8vw;
        //                         font-family: Aideep;
        //                         background-image: url('@/assets/support/time5-circle.png');
        //                         background-size: 100% auto;
        //                         background-repeat: no-repeat;
        //                     }
        //                     img{
        //                         position: absolute;
        //                         top: 12vw;
        //                         left: 11.2vw;
        //                         width: 9vw;
        //                     }
        //                 }
        //                 .time5-content{
        //                     ul{
        //                         padding-top: 17vw;
        //                         padding-left: 12vw;
        //                         li{
        //                             margin-bottom: 1.4vw;
        //                             color: #DFE007;
        //                             font-size: 1.3vw;
        //                             letter-spacing:.1vw;

        //                         }
        //                     }
        //                 }
        //             }
        //         }

        //     }
        //     .supported{
        //         .wrap{
                    
        //         }
        //     }
        // }
    }
</style>
