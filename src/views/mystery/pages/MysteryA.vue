<template>
    <header-a path="/mystery" :type="2"></header-a>
    <!-- <div class="section">
        <div class="title">COMING SOON</div>
    </div> -->
    <div class="boxBg">
        <div class="video">
            <video-bg 
id="videobg" :sources="[`https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/boxbanner.mp4`]">
            </video-bg>
            <div class="titles"> 
                <div class="titles-wrap">
                    <div class="left">
                        <div class="title">
                            CYBERPOP <span class="purple">NFT</span><br/>MYSTERY BOX
                            <div class="round">ROUND #1</div>
                        </div>
                        <div class="subtitle">INCLUDES SUPER VALUE FOR LIMITED TIME</div>
                        <div class="desc">
                            The mystery box of promotional NFTs that have been minted by the Cyberpop DAO which mark the beginning of our journey.
                        </div>
                        <div class="type">
                            <div class="type-title">TYPE</div>
                            <ul>
                                <li class="type-common">
                                    <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/type-common.png" alt="">
                                    <img class="border" src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/type-commonBorder.svg" alt="">
                                    <div class="mask">Common</div>
                                </li>
                                <li class="type-rare">
                                    <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/type-rare.png" alt="">
                                    <img class="border" src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/type-rareBorder.svg" alt="">
                                    <div class="mask">Rare</div>
                                </li>
                                <li class="type-epic">
                                    <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/type-epic.png" alt="">
                                    <img class="border" src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/type-rareBorder.svg" alt="">
                                    <div class="mask">Epic</div>
                                </li>
                            </ul>
                        </div>
                        <div class="button">
                            <div class="purchase">Purchase</div>
                            <div class="detailbtn">
                                Detail
                                <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/detailb.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="title">Sale Start time</div>
                        <div class="countDown">
                            <div class="hour">- -H</div>:
                            <div class="minute">- -M</div>:
                            <div class="millisecond">- -S</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="line"></div>
        <div class="nfts">
            <div class="nfts-wrap">
                <div class="top">
                    <div class="title">Featured NFTS</div>
                    <div class="rights">
                        <select name="" class="select">
                            <option value="All">All</option>
                            <option value="Out">Out</option>
                        </select>
                        <div class="search">
                            <img src="@/assets/nwbox/search.svg" alt="">
                            <input type="text" placeholder="Search">
                        </div>
                    </div>
                </div>
                <ul class="sale">
                    <li class="sale-active">
                        <div class="showarea">
                            <img src="" alt="">
                            <div class="sold">SOLD OUT</div>
                            <div class="legen">LEGENDARY</div>
                            <div class="id">#54o454</div>
                            <div class="countdown">
                                <div class="name">Count down</div>
                                <div class="ctime">01h : 25m : 29s</div>
                            </div>
                        </div>
                        <div class="intro">
                            <div class="starttime">Sale Start time</div>
                            <div class="desc">
                                <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                                <div class="price">
                                    204,30 <br/>
                                    <span>≈$20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="showarea">
                            <img src="" alt="">
                            <div class="sold">SOLD OUT</div>
                            <div class="legen">LEGENDARY</div>
                            <div class="id">#54o454</div>
                            <div class="countdown">
                                <div class="name">Count down</div>
                                <div class="ctime">01h : 25m : 29s</div>
                            </div>
                        </div>
                        <div class="intro">
                            <div class="starttime">Sale Start time</div>
                            <div class="desc">
                                <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                                <div class="price">
                                    204,30 <br/>
                                    <span>≈$20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="showarea">
                            <img src="" alt="">
                            <div class="sold">SOLD OUT</div>
                            <div class="legen">LEGENDARY</div>
                            <div class="id">#54o454</div>
                            <div class="countdown">
                                <div class="name">Count down</div>
                                <div class="ctime">01h : 25m : 29s</div>
                            </div>
                        </div>
                        <div class="intro">
                            <div class="starttime">Sale Start time</div>
                            <div class="desc">
                                <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                                <div class="price">
                                    204,30 <br/>
                                    <span>≈$20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="showarea">
                            <img src="" alt="">
                            <div class="sold">SOLD OUT</div>
                            <div class="legen">LEGENDARY</div>
                            <div class="id">#54o454</div>
                            <div class="countdown">
                                <div class="name">Count down</div>
                                <div class="ctime">01h : 25m : 29s</div>
                            </div>
                        </div>
                        <div class="intro">
                            <div class="starttime">Sale Start time</div>
                            <div class="desc">
                                <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                                <div class="price">
                                    204,30 <br/>
                                    <span>≈$20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="showarea">
                            <img src="" alt="">
                            <div class="sold">SOLD OUT</div>
                            <div class="legen">LEGENDARY</div>
                            <div class="id">#54o454</div>
                            <div class="countdown">
                                <div class="name">Count down</div>
                                <div class="ctime">01h : 25m : 29s</div>
                            </div>
                        </div>
                        <div class="intro">
                            <div class="starttime">Sale Start time</div>
                            <div class="desc">
                                <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                                <div class="price">
                                    204,30 <br/>
                                    <span>≈$20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="showarea">
                            <img src="" alt="">
                            <div class="sold">SOLD OUT</div>
                            <div class="legen">LEGENDARY</div>
                            <div class="id">#54o454</div>
                            <div class="countdown">
                                <div class="name">Count down</div>
                                <div class="ctime">01h : 25m : 29s</div>
                            </div>
                        </div>
                        <div class="intro">
                            <div class="starttime">Sale Start time</div>
                            <div class="desc">
                                <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                                <div class="price">
                                    204,30 <br/>
                                    <span>≈$20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="line"></div>
        <div class="recent">
            <div class="recent-wrap">
                <div class="title">Recent Sold</div>
                <ul>
                    <li>
                        <div class="left">
                            <div class="icon"><img src="" alt=""></div>
                            <div class="text">
                                <div class="saletime">Sale Start time <span>| #45o454</span></div>
                                <div class="participant">
                                    <div class="buyer">Buyer <span>0x3434...34de</span></div>
                                    <div class="seller">Seller <span>0x3434...34de</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                            <div class="price">
                                304,30
                                <span>≈$20</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <div class="icon"><img src="" alt=""></div>
                            <div class="text">
                                <div class="saletime">Sale Start time <span>| #45o454</span></div>
                                <div class="participant">
                                    <div class="buyer">Buyer <span>0x3434...34de</span></div>
                                    <div class="seller">Seller <span>0x3434...34de</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                            <div class="price">
                                304,30
                                <span>≈$20</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer">
            <div class="policy"><router-link to="/privacy">Privacy policy</router-link></div>
            <div class="terms"><router-link to="/terms">Terms of servce</router-link></div>
            <div class="desc">Cyberpop Labs Ltd. Games, Inc. ALL Rights Reserved.</div>
            <div class="icon">
                <a href="https://t.me/cyberpopnw" target="view_window">
                    <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwhome/medium.svg" alt="">
                </a>
            <a href="https://discord.gg/y9b8p5C9TR" target="view_window">
                <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwhome/discord.svg" alt="" class="navLogo2">
                </a>
                <a href="https://twitter.com/cyberpopnw" target="view_window">
                    <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwhome/twitter-footer.svg" alt="">
                </a>
            </div>
        </div> -->
    </div>
    <coming-a v-show="showComingFlag"></coming-a>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 


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




onMounted(() => {
    window.scrollTo(0,0);
    store.dispatch('user/showDialog',{show: false, info: {}});// close message dialog
    store.dispatch('wallet/metaChange',false);
})

</script>
<style lang="less" scoped>
    a {
    text-decoration: none;
    }
    
    .section{
        z-index: 8;
        position: fixed;
        display: flex;
        justify-content: center;
        top: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0,0,0,.5);
        overflow: hidden;
        .title{
            width: 39.58vw;
            height: 8.85vw;
            margin-top: 17.4vw;
            font-size: 2.08vw;
            font-family: AlibabaPuHuiTi_2_75_SemiBold;
            color: #FFFFFF;
            line-height: 8.85vw;
            letter-spacing: 1.04vw;
            text-align: center;
            background-image: url('../../../assets/nwmining/coming-bg.png');
            background-position: center;
            background-size: auto 100%;
        }
    }
    .boxBg{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000;
        .video{
            position: relative;
            width: 100%;
            height: 100vh;
            background-color: #000000;
            overflow: hidden;
            .titles{
                display: flex;
                align-items: center;
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                .titles-wrap{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    // margin-left: 20.98vw;
                    margin-right: 24.37vw;
                    margin-left: 22vw;
                    .left{
                        .title{
                            position: relative;
                            margin-top: 9.71vw;
                            font-size: 2.6vw;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            color: #FFFFFF;
                            // line-height: 2.81vw;
                            line-height: 3vw;
                            animation: fadeInUp .8s linear;
                            .purple{
                                font-size: 2.6vw;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                color: #FFFFFF;
                                line-height: 2.81vw;
                                background: linear-gradient(163deg, #FB52FC 0%, #8953FF 100%);
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                            }
                            .round{
                                position: absolute;
                                top: 4.3vw;
                                left: 18.7vw;
                                width: 5.83vw;
                                height: 1.14vw;
                                font-size: .78vw;
                                font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                color: #000000;
                                line-height: 1.14vw;
                                text-align: center;
                                background-color: #FFFFFF;
                            }
                        }
                        .subtitle{
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            letter-spacing: .08vw;
                            font-weight: 900;
                            color: #04FFA2;
                            // line-height: 2.08vw;
                            line-height: 2.2vw;
                        }
                        .desc{
                            width: 25.57vw;
                            font-size: .83vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #FFFFFF;
                            line-height: 1.14vw;
                        }
                        .type{
                            .type-title{
                                width: 20.36vw;
                                height: 1.35vw;
                                // margin: 3.17vw 0 .2vw .36vw;
                                margin: 4vw 0 .2vw .36vw;
                                font-size: .98vw;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                color: #B3B3B3;
                                line-height: 1.35vw;
                            }
                        ul{
                            display: flex;
                                li{
                                    position: relative;
                                    width: 5.67vw;
                                    height: 5.31vw;
                                    margin-right: .625vw;
                                    img{
                                        width: 100%;
                                        height: 100%;
                                    }
                                    .border{
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                    }
                                    .mask{
                                        position: absolute;
                                        bottom: 0;
                                        width: 100%;
                                        height: 1.14vw;
                                        font-size: .83vw;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #FFFFFF;
                                        line-height: 1.14vw;
                                        text-align: center;
                                        background-color: rgba(255,255,255,.1);
                                    }
                                }
                        }
                        }
                        .button{
                            display: flex;
                            // margin-top: 2.96vw;
                            margin-top: 4vw;
                            margin-bottom: 5.625vw;
                            text-align: center;
                            .purchase{
                                width: 11.25vw;
                                height: 2.55vw;
                                margin-right: .67vw;
                                font-size: .93vw;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                                color: #FFFFFF;
                                line-height: 2.55vw;
                                background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/purchase.svg');
                                background-repeat: no-repeat;
                                background-size: 100% auto;
                                background-position: left top;
                            }
                            .detailbtn{
                                position: relative;
                                width: 11.51vw;
                                height: 2.65vw;
                                font-size: .83vw;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                                color: #FFFFFF;
                                line-height: 2.65vw;
                                // background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/detailb.svg');
                                // background-repeat: no-repeat;
                                // background-size: 100% auto;
                                // background-position: left top;
                                img{
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .purchase:hover{
                                filter: drop-shadow(0 0 0.3rem #AA31DF);
                            }
                            .detailbtn > img:hover{
                                filter: drop-shadow(0 0 0.3rem #ffffff);
                            }
                        }
                    }   
                    .right{
                        position: relative;
                        .title{
                            position: absolute;
                            right: 0;
                            bottom: 8vw;
                            width: 14.68vw;
                            height: 1.51vw;
                            font-size: 1.09vw;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #FFFFFF;
                            line-height: 1.51vw;
                            text-align: right;
                        }
                        .countDown{
                            display: flex;
                            position: absolute;
                            right: -.7vw;
                            bottom: 5.6vw;
                            width: 12.55vw;
                            height: 2.44vw;
                            font-size: 1.51vw;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #FFFFFF;
                            line-height: 2.13vw;
                            div{
                                width: 3.43vw;
                                height: 2.44vw;
                                margin: 0 .2vw;
                                text-align: center;
                                line-height: 2.44vw;
                                background-color: #171C28;
                                white-space: nowrap;
                            }
                        }
                    }
                }
            }
        }
        .line{
            width: 90vw;
            height: .1vw;
            margin: 2.03vw auto 4.06vw;
            background: linear-gradient(90deg, rgba(111, 38, 190, 0) 0%, rgba(156, 0, 248, 0.33) 38%, #7A00F8 50%,rgba(156, 0, 248, 0.33) 88%,rgba(111, 38, 190, 0) 100%);
            opacity: 0.71;
        }
        .nfts{
            .nfts-wrap{
                margin-left: 21.45vw;
                margin-right: 22.13vw;
                .top{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-left: .93vw;
                    .title{
                        height: 2.18vw;
                        font-size: 1.56vw;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #FFFFFF;
                        line-height: 2.18vw;
                    }
                    .rights{
                        display: flex;
                        align-items: center;
                        .select{
                            width: 7.76vw;
                            height: 2.03vw;
                            margin-right: .88vw;
                            font-size: .88vw;
                            text-indent: .2vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #FFFFFF;
                            line-height: 2.03vw;
                            background: #171C28;
                            border-radius: .1vw;
                            border: 1px solid #3F4043;
                            outline: none;
                        }
                        .search{
                            display: flex;
                            align-items: center;
                            width: 19.06vw;
                            height: 2.03vw;
                            background: #171C28;
                            border-radius: .1vw;
                            border: 1px solid #3F4043;
                            img{
                                width: 1.09vw;
                                height: 1.14vw;
                                margin: 0 .4vw;
                            }
                            input{
                                width: 16.4vw;
                                height: 100%;
                                color: #ffffff;
                                font-size: .88vw;
                                font-family: AlibabaPuHuiTi_2_55_Regular;
                                color: #B3B3B3;
                                line-height: 2.03vw;
                                background-color: transparent;
                                border: none;
                                outline: none;
                            }
                        }
                    }

                }
                .sale{
                    display: flex;
                    flex-wrap: wrap;
                    width: 58vw;
                    margin-top: 2.29vw;
                    li{
                        width: 17.86vw;
                        height: 22.81vw;
                        margin-bottom: .83vw;
                        margin-right: 1.4vw;
                        padding: .41vw 1.66vw;
                        background-image: url('../../../assets/nwbox/nfts-cardbg.svg');
                        background-size: 100% 100%;
                        overflow: hidden;
                        .showarea{
                            position: relative;
                            width: 14.53vw;
                            height: 15.05vw;
                            background: #0F0B17;
                            overflow: hidden;
                            img{
                                position: absolute;
                                top: 0;
                                left: 0;
                                right: 0;
                                height: 100%;
                                margin: 0 auto;
                            }
                            .sold{
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%,-50%);
                                width: 11.14vw;
                                height: 2.81vw;
                                font-size: 2.08vw;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                color: #A09EFB;
                                line-height: 2.81vw;
                                text-align: center;
                            }
                            .legen{
                                margin-left: -.77vw;
                                margin-top: -.8vw;
                                width: 7.39vw;
                                height: 2.7vw;
                                padding-top: .9vw;
                                font-size: .78vw;
                                font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                color: #000000;
                                line-height: 1.09vw;
                                text-align: center;
                                background-image: url('../../../assets/nwbox/nfts-legen.svg');
                                background-size: 100% 100%;
                                // display: none;
                            }
                            .id{
                                width: .39vw;
                                height: 1,19vw;
                                margin: .46vw;
                                font-size: .83vw;
                                font-family: AlibabaPuHuiTi_2_55_Regular;
                                color: #6D4AFF;
                                line-height: 1,19vw;
                            }
                            .countdown{
                                width: 7.39vw;
                                height: 2.65vw;
                                margin-top: 8.6vw;
                                margin-left: 6.6vw;
                                padding: .46vw .26vw .31vw 0;
                                background: rgba(64, 64, 64, 0.33);
                                border-radius: 4p.2vw;
                                backdrop-filter: blur(2px);
                                text-align: right;
                                .name{
                                    height: .93vw;
                                    font-size: .67vw;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                    color: #B3B3B3;
                                    line-height: .93vw;
                                }
                                .ctime{
                                    height: .46vw;
                                    margin-top: .4vw;
                                    font-size: .67vw;
                                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                                    color: #FFFFFF;
                                    line-height: .46vw;
                                }
                            }
                        }
                        .intro{
                            .starttime{
                                height: 1.19vw;
                                margin-top: .46vw;
                                margin-left: .1vw;
                                font-size: .83vw;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                color: #FFFFFF;
                                line-height: 1.19vw;
                            }
                            .desc{
                                display: flex;
                                align-items: center;
                                img{
                                    width: 1.45vw;
                                    height: 1.45vw;
                                    margin-top: .2vw;
                                    margin-right: .2vw;
                                }
                                .price{
                                    position: relative;
                                    margin-top: .1vw;
                                    height: 1.97vw;
                                    font-size: 1.4vw;
                                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                                    color: #35F1C8;
                                    line-height: 1.97vw;
                                    span{
                                        position: absolute;
                                        top: 2vw;
                                        height: 1.19vw;
                                        font-size: .83vw;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #B3B3B3;
                                        line-height: 1.19vw;
                                    }
                                }
                            }
                        }
                    }
                    li.sale-active{
                        filter: drop-shadow(0 0 .3vw #8BDDFF);
                    }
                }
            }
        }
        .recent{
            background: linear-gradient(180deg, rgba(111, 38, 190, 0) 0%, rgba(156, 0, 248, 0.33) 58%, rgba(122, 0, 248,.71) 100%);
            overflow: hidden;
            .recent-wrap{
                margin-left: 21.45vw;
                margin-right: 22.13vw;
                .title{
                    height: 2.18vw;
                    margin-bottom: 3.12vw;
                    margin-left: .8vw;
                    font-size: 1.56vw;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    color: #FFFFFF;
                    line-height: 2.18vw;
                }
                ul{
                    margin-bottom: 7vw;
                    li{
                        display: flex;
                        justify-content: space-between;
                        width: 53.48vw;
                        height: 6.45vw;
                        margin: 0 auto 2.03vw;
                        padding: .98vw 2.13vw 0 .88vw;
                        background: #1A1728;
                        .left{
                            display: flex;
                            .icon{
                                width: 4.63vw;
                                height: 4.73vw;   
                                margin-right: .93vw;
                                background: #0F0B17;
                                img{
                                    height: 100%;
                                    margin: 0 auto;
                                }
                            }
                            .text{
                                .saletime{
                                    width: 30vw;
                                    height: 1.82vw;
                                    margin-bottom: .98vw;
                                    font-size: 1.19vw;
                                    font-family: AlibabaPuHuiTi_2_85_Bold;
                                    color: #FFFFFF;
                                    line-height: 1.66vw;
                                    span{
                                        margin: .6vw;
                                        height: 1.66vw;
                                        font-size: 1.19vw;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #B3B3B3;
                                        line-height: 1.66vw;
                                    }
                                }
                                .participant{
                                    display: flex;
                                    .buyer{
                                        width: 14.2vw;
                                        height: 1.4vw;
                                        font-size: .93vw;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #35F1C8;
                                        line-height: 1.3vw;
                                        span{
                                            width: 8.54vw;
                                            height: 1.4vw;
                                            margin-left: .36vw;
                                            font-size: .93vw;
                                            font-family: AlibabaPuHuiTi_2_55_Regular;
                                            color: #B3B3B3;
                                            line-height: 1.3vw;
                                        }
                                    }
                                    .seller{
                                        width: 14vw;
                                        height: 1.4vw;
                                        font-size: .93vw;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #6D4AFF;
                                        line-height: 1.3vw;
                                        span{
                                            width: 8.54vw;
                                            height: 1.4vw;
                                            margin-left: .36vw;
                                            font-size: .93vw;
                                            font-family: AlibabaPuHuiTi_2_55_Regular;
                                            color: #B3B3B3;
                                            line-height: 1.3vw;
                                        }
                                    }
                                }
                            }
                        }
                        .right{
                            display: flex;
                            img{
                                width: 1.61vw;
                                height: 1.61vw;
                                margin-top: .83vw;
                                margin-right: .3vw;
                            }
                            .price{
                                position: relative;
                                width: 5.83vw;
                                height: 2.18vw;
                                margin-top: .52vw;
                                font-size: 1.56vw;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                color: #FFFFFF;
                                line-height: 2.18vw;
                                text-align: right;
                                span{
                                    position: absolute;
                                    top: 2.6vw;
                                    right: 0;
                                    height: 1.3vw;
                                    font-size: .93vw;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                    color: #B3B3B3;
                                    line-height: 1.3vw;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
