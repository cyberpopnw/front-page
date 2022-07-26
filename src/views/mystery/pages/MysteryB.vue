<template>
    <header-b path="/mystery" :type="2"></header-b>
    <div class="section">
        <div class="title">COMING SOON</div>
    </div>
    <div class="boxBg">
        <div class="titles"> 
            <div class="left">
                <div class="title">
                    CYBERPOP <span class="purple">NFT</span><br/>MYSTERY BOX
                </div>
                <div class="round">ROUND #1</div>
                <div class="subtitle">INCLUDES SUPER VALUE FOR LIMITED TIME</div>
                <div class="desc">
                    The mystery box of promotional NFTs that have been minted by the Cyberpop DAO which mark the beginning of our journey.
                </div>
            </div>
            <div class="right">
                <video-bg 
id="videobg" :sources="[`https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/boxbanner.mp4`]">
                </video-bg>
                <div class="title">Sale Start time</div>
                <div class="countDown">
                    <div class="hour">- -H</div>:
                    <div class="minute">- -M</div>:
                    <div class="millisecond">- -S</div>
                </div>
            </div>
            <div class="nftCard">
                <ul class="type">
                    <li class="type-common">
                        <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwboxPhone/type-common.png" alt="">
                        <img class="border" src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwboxPhone/type-commonBorder0.svg" alt="">
                        <div class="mask">Common</div>
                    </li>
                    <li class="type-rare">
                        <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwboxPhone/type-rare.png" alt="">
                        <img class="border" src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwboxPhone/type-rareBorder0.svg" alt="">
                        <div class="mask">Rare</div>
                    </li>
                    <li class="type-epic">
                        <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwboxPhone/type-epic.png" alt="">
                        <img class="border" src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwboxPhone/type-rareBorder0.svg" alt="">
                        <div class="mask">Epic</div>
                    </li>
                </ul>
                <div class="button">
                    <div class="purchase"><div>Purchase</div></div>
                    <div class="detailbtn">Detail</div>
                </div>
            </div>
            <div class="tline"></div>
        </div>
        <!-- <div class="nfts">
            <div class="nfts-wrap">
                <div class="top">
                    <div class="title">Featured NFTS</div>
                    <div class="rights">
                        <select name="" class="select">
                            <option value="All">All</option>
                            <option value="Out">Out</option>
                        </select>
                        <div class="search">
                            <img src="@/assets/nwboxPhone/search.svg" alt="">
                            <input type="text" placeholder="Search">
                        </div>
                    </div>
                </div>
                <ul class="sale">
                    <li class="sale-active">
                        <div class="showarea">
                            <img src="" alt="">
                            <div class="sold">SOLD OUT</div>
                            <div class="legen">
                                <div class="bg"></div>
                                <div>LEGENDARY</div>
                            </div>
                            <div class="id">#54o454</div>
                            <div class="countdown">
                                <div class="name">Count down</div>
                                <div class="ctime">01h : 25m : 29s</div>
                            </div>
                        </div>
                        <div class="intro">
                            <div class="starttime">Sale Start time</div>
                            <div class="desc">
                                <img src="@/assets/nwboxPhone/nfts-icon.svg" alt="">
                                <div class="price">
                                    204,30 <br/>
                                    <span>≈$20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="sale-active">
                        <div class="showarea">
                            <img src="" alt="">
                            <div class="sold">SOLD OUT</div>
                            <div class="legen">
                                <div class="bg"></div>
                                <div>LEGENDARY</div>
                            </div>
                            <div class="id">#54o454</div>
                            <div class="countdown">
                                <div class="name">Count down</div>
                                <div class="ctime">01h : 25m : 29s</div>
                            </div>
                        </div>
                        <div class="intro">
                            <div class="starttime">Sale Start time</div>
                            <div class="desc">
                                <img src="@/assets/nwboxPhone/nfts-icon.svg" alt="">
                                <div class="price">
                                    204,30 <br/>
                                    <span>≈$20</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="line"></div>
        </div>
        <div class="recent">
            <div class="recent-wrap">
                <div class="title">Recent Sold</div>
                <ul>
                    <li>
                        <div class="left">
                            <div class="icon"><img src="" alt=""></div>
                            <div class="text">
                                <div class="saletime">Sale Start time <span>| #45o454</span></div>
                                <div class="buyer">Buyer <span>0x3434...34de</span></div>
                                <div class="seller">Seller <span>0x3434...34de</span></div>
                                <div class="right bot">
                                    <img src="@/assets/nwboxPhone/nfts-icon.svg" alt="">
                                    <div class="price">
                                        304,30
                                        <span>≈$20</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="left">
                            <div class="icon"><img src="" alt=""></div>
                            <div class="text">
                                <div class="saletime">Sale Start time <span>| #45o454</span></div>
                                <div class="buyer">Buyer <span>0x3434...34de</span></div>
                                <div class="seller">Seller <span>0x3434...34de</span></div>
                                <div class="right bot">
                                    <img src="@/assets/nwboxPhone/nfts-icon.svg" alt="">
                                    <div class="price">
                                        304,30
                                        <span>≈$20</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div> -->
        <footer-b></footer-b>
    </div>
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
})

</script>
<style lang="less" scoped>
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
    .boxBg{
        position: absolute;
        top: 0;
        width: 100%;
        background-color: #000000;
        height: 1361px;
        .titles{
            display: flex;
            flex-direction: column;
            .left{
                z-index: 1;
                margin-left: 31px;
                .title{
                    position: relative;
                    margin-top: 112px;
                    font-size: 40px;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    color: #FFFFFF;
                    line-height: 54px;
                    animation: fadeInUp .8s linear;
                    .purple{
                        height: 68px;
                        font-size: 40px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #FFFFFF;
                        line-height: 68px;
                        background: linear-gradient(163deg, #FB52FC 0%, #8953FF 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
                .round{
                    width: 112px;
                    height: 22px;
                    margin-top: 7px;
                    font-size: 15px;
                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                    text-align: center;
                    line-height: 22px;
                    background-color: #FFFFFF;
                }
                .subtitle{
                    width: 326px;
                    height: 60px;
                    margin: 6px 0 33px 0;
                    font-size: 20px;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    letter-spacing: 1px;
                    font-weight: 900;
                    color: #04FFA2;
                    line-height: 30px;
                }
                .desc{
                    width: 188px;
                    height: 132px;
                    font-size: 14px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 22px;
                }
            }   
            .right{
                position: relative;
                height: 348px;
                margin-top: -42px;
                :deep(.VideoBg){
                    height: 348px !important;
                }
                :deep(.VideoBg video){
                    height: 348px !important;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    visibility: hidden;
                    transform: translate(-67%,-50%);
                }
                .title{
                    position: absolute;
                    right: 27px;
                    bottom: 53px;
                    width: 197px;
                    height: 20px;
                    font-size: 15px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #FFFFFF;
                    line-height: 20px;
                    text-align: right;
                }
                .countDown{
                    display: flex;
                    position: absolute;
                    right: 21px;
                    bottom: 20px;
                    width: 168px;
                    height: 32px;
                    font-size: 20px;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #FFFFFF;
                    line-height: 32px;
                    div{
                        width: 47px;
                        height: 32px;
                        margin: 0 2px;
                        background: #171C28;
                        border-radius: 1px;
                        text-align: center;
                        white-space: nowrap;
                    }
                }
            }
            .nftCard{
                height: 352px;
                ul{
                    display: flex;
                    justify-content: center;
                    margin-bottom: 38px;
                    li{
                        position: relative;
                        width: 94px;
                        height: 89px;
                        margin-right: 9px;
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
                            height: 20px;
                            font-size: 14px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #FFFFFF;
                            line-height: 20px;
                            text-align: center;
                            background-color: rgba(255,255,255,.1);
                        }
                    }
                    li:last-child{
                        margin-right: 0;
                    }
                }
                .button{
                    text-align: center;
                    .purchase{
                        width: 100%;
                        height: 74px;
                        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0A0A0A 100%);
                        div{
                            width: 283px;
                            height: 50px;
                            margin: 0 auto;
                            margin-top: 7px;
                            font-size: 18px;
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            color: #FFFFFF;
                            line-height: 50px;
                            background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwboxPhone/purchase.svg');
                            background-repeat: no-repeat;
                            background-size: 100% auto;
                            background-position: left top;
                        }
                    }
                    .detailbtn{
                        width: 281px;
                        height: 51px;
                        margin: 0 auto ;
                        margin-top: 14px;
                        font-size: 16px;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #FFFFFF;
                        line-height: 51px;
                        background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwboxPhone/detailb.svg');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: left top;
                    }
                    .purchase > div:hover{
                        filter: drop-shadow(0 0 0.3rem #AA31DF);
                    }
                    .detailbtn:hover{
                        filter: drop-shadow(0 0 0.3rem #ffffff);
                    }
                }
            }
            .tline{
                width: 100%;
                height: 3px;
                border: 1px solid;
                background: linear-gradient(to right, rgba(50, 211, 123, 0), rgba(40, 18, 69, 1), rgba(6, 255, 161, 0));;
                // border-image: linear-gradient(135deg, rgba(50, 211, 123, 0), rgba(40, 18, 69, 1), rgba(6, 255, 161, 0)) 1 1;
            }
        }
        .nfts{
            background-color: #000000;
            .nfts-wrap{
                .top{
                    height: 170px;
                    background-color: #000000;
                    .title{
                        width: 215px;
                        height: 28px;
                        margin: 17px auto 31px;
                        font-size: 20px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #FFFFFF;
                        line-height: 28px;
                        text-align: center;
                    }
                    .rights{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .select{
                            width: 144px;
                            height: 39px;
                            margin-right: 17px;
                            padding: 0 9px 0 20px;
                            font-size: 17px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #FFFFFF;
                            line-height: 39px;
                            background: #171C28;
                            border-radius: 2px;
                            border: 1px solid #3F4043;
                            outline: none;
                        }
                        .search{
                            display: flex;
                            align-items: center;
                            width: 177px;
                            height: 39px;
                            background: #171C28;
                            border-radius: 2px;
                            border: 1px solid #3F4043;
                            img{
                                width: 21px;
                                height: 22px;
                                margin: 0 7px;
                            }
                            input{
                                width: 140px;
                                height: 24px;
                                font-size: 17px;
                                font-family: AlibabaPuHuiTi_2_55_Regular;
                                color: #B3B3B3;
                                line-height: 24px;
                                background-color: transparent;
                                border: none;
                                outline: none;
                            }
                        }
                    }

                }
                .sale{
                    background-color: #000000;
                    li{
                        width: 349px;
                        height: 443px;
                        margin-bottom: 11px;
                        padding: 8px 33px;
                        background-image: url('../../../assets/nwboxPhone/nfts-cardbg.svg');
                        background-size: 100% 100%;
                        overflow: hidden;
                        .showarea{
                            position: relative;
                            width: 281px;
                            height: 287px;
                            background: #0F0B17;
                            border: 1px solid #0F0B17;
                            // overflow: hidden;
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
                                width: 200px;
                                height: 30px;
                                font-size: 40px;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                color: #A09EFB;
                                line-height: 30px;
                                text-align: center;
                            }
                            .legen{
                                position: absolute;
                                top: -10px;
                                left: -9px;
                                width: 113px;
                                height: 21px;
                                .bg{
                                    width: 113px;
                                    height: 21px;
                                    background: linear-gradient(224deg, #A240FF 0%, #35FFAD 33%, #D9E1FF 75%, #691EFF 100%);
                                    filter: blur(2px);
                                    clip-path: polygon(0 0, 100% 0, 100% 52%, 92% 100%, 0 100%);
                                }
                                div:nth-child(2){
                                    position: absolute;
                                    top: 0;
                                    width: 113px;
                                    font-size: 15px;
                                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                    color: #000000;
                                    line-height: 22px;
                                    text-align: center;
                                }
                            }
                            .id{
                                width: 134px;
                                height: 30px;
                                margin-top: 12px;
                                margin-left: 5px;
                                font-size: 21px;
                                font-family: AlibabaPuHuiTi_2_55_Regular;
                                color: #6D4AFF;
                                line-height: 30px;
                            }
                            .countdown{
                                width: 158px;
                                height: 56px;
                                margin-top: 182px;
                                margin-left: 116px;
                                padding: 10px 4px 6px 0;
                                background: rgba(64, 64, 64, 0.33);
                                border-radius: 4px;
                                backdrop-filter: blur(2.2308000000000003px);
                                text-align: right;
                                .name{
                                    height: 20px;
                                    font-size: 15px;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                    color: #B3B3B3;
                                    line-height: 20px;
                                }
                                .ctime{
                                    height: 20px;
                                    font-size: 15px;
                                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                                    color: #FFFFFF;
                                    line-height: 20px;
                                }
                            }
                        }
                        .intro{
                            .starttime{
                                height: 28px;
                                margin: 11px 0 12px 5px;
                                font-size: 20px;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                color: #FFFFFF;
                                line-height: 28px;
                            }
                            .desc{
                                display: flex;
                                align-items: center;
                                img{
                                    width: 33px;
                                    height: 33px;
                                    margin-top: 2px;
                                    margin-right: 11px;
                                    margin: 2px 11px 0 3px;
                                }
                                .price{
                                    position: relative;
                                    width: 122px;
                                    height: 46px;
                                    font-size: 33px;
                                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                                    color: #35F1C8;
                                    line-height: 46px;
                                    span{
                                        position: absolute;
                                        top: 40px;
                                        height: 28px;
                                        font-size: 20px;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #B3B3B3;
                                        line-height: 28px;
                                    }
                                }
                            }
                        }
                    }
                    li.sale-active{
                        filter: drop-shadow(0 0 7px #8BDDFF);
                    }
                }
            }
            .line{
                width: 100%;
                height: 3px;
                border: 1px solid;
                background: linear-gradient(to right, rgba(50, 211, 123, 0), rgba(40, 18, 69, 1), rgba(6, 255, 161, 0));;
            }
        }
        .recent{
            background-color: #000000;
            overflow: hidden;
            .recent-wrap{
                .title{
                    height: 28px;
                    margin: 26px 0 18px 0;
                    font-size: 20px;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    color: #FFFFFF;
                    line-height: 28px;
                    text-align: center;
                }
                ul{
                    margin-bottom: 19px;
                    overflow: hidden;
                    li{
                        display: flex;
                        justify-content: space-between;
                        margin: 0 auto;
                        padding: 16px;
                        width: 315px;
                        height: 133px;
                        margin-bottom: 18px;
                        background: #1A1728;
                        .left{
                            display: flex;
                            .icon{
                                width: 69px;
                                height: 70px;
                                margin-right: 11px;
                                background: #0F0B17;
                                img{
                                    height: 100%;
                                    margin: 0 auto;
                                }
                            }
                            .text{
                                .saletime{
                                    width: 180px;
                                    margin-bottom: 7px;
                                    height: 21px;
                                    font-size: 14px;
                                    font-family: AlibabaPuHuiTi_2_85_Bold;
                                    color: #FFFFFF;
                                    line-height: 20px;
                                    span{
                                        margin-left: 8px;
                                        height: 20px;
                                        font-size: 14px;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #B3B3B3;
                                        line-height: 20px;
                                    }
                                }
                                .buyer{
                                    width: 120px;
                                    height: 18px;
                                    margin-bottom: 6px;
                                    font-size: 11px;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                    color: #35F1C8;
                                    line-height: 16px;
                                    span{
                                        height: 18px;
                                        font-size: 11px;
                                        margin-left: 5px;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #B3B3B3;
                                        line-height: 16px;
                                    }
                                }
                                .seller{
                                    width: 120px;
                                    height: 18px;
                                    margin-bottom: 6px;
                                    font-size: 11px;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                    color: #6D4AFF;
                                    line-height: 16px;
                                    span{
                                        height: 18px;
                                        font-size: 11px;
                                        margin-left: 5px;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #B3B3B3;
                                        line-height: 16px;
                                    }
                                }
                                .right{
                                    display: flex;
                                    img{
                                        width: 20px;
                                        height: 20px;
                                        margin-top: 4px;
                                        margin-right: 3px;
                                    }
                                    .price{
                                        position: relative;
                                        width: 67px;
                                        height: 25px;
                                        margin-top: 3px;
                                        font-size: 18px;
                                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                                        color: #FFFFFF;
                                        line-height: 25px;
                                        text-align: right;
                                        span{
                                            position: absolute;
                                            top: 6px;
                                            right: -40px;
                                            height: 15px;
                                            font-size: 11px;
                                            font-family: AlibabaPuHuiTi_2_55_Regular;
                                            color: #B3B3B3;
                                            line-height: 15px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
