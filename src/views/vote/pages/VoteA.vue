<template>
    <header-a path="vote" :type="6"></header-a>
    <div class="container">
        <!-- <div class="bgIm"></div> -->
        <div class="wrap">
            <div class="chat">
                <ul ref="bullet"></ul>
            </div>
            <div class="content">
                <div class="left">
                    <div class="left-wrap">
                        <div class="img-top"><img src="https://d2cimmz3cflrbm.cloudfront.net/nwvote/vote-top.png" alt=""></div>
                        <div class="padding">
                            <div class="title">Vote Community</div>
                            <div class="desc">
                                This is a cyberpop decentralized voting
                                community. Uses Quadratic voting
                                techniques to make voting Fairness. 
                                Simply connect your wallet, and it will 
                                allow a vote to be cast on any open 
                                proposals to make the Cyberpop 
                                metaverse more fantasy.
                            </div>
                            <div class="genesis"># Genesis</div>
                            <div class="search">
                                <input type="text" placeholder="search">
                                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwvote/search-w.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="top">
                        <div class="name">Proposals</div>
                        <div class="select">
                            <ul>
                                <li class="one" @click="showSelect1 = !showSelect1"><div>Random</div></li>
                                <li class="items" v-show="showSelect1">
                                    <div>Random</div>
                                    <div>Hot</div>
                                    <div>New</div>
                                </li>
                            </ul>
                            <ul>
                                <li class="one" @click="showSelect2 = !showSelect2"><div>Pending</div></li>
                                <li class="items" v-show="showSelect2">
                                    <div>All</div>
                                    <div>Active</div>
                                    <div>Pending</div>
                                    <div>Closed</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="card">
                        <div class="state sActive">Active</div>
                        <div class="name">
                            <img src="https://cdn.stamp.fyi/space/cyberpoponline.eth?s=160&cb=1e775ba9559d9a9d" alt="">
                            <div>Cyberpop by <span>operation</span></div>
                        </div>
                        <div class="ep">[EP14] [Social) Dissolve Community Working Group</div>
                        <div class="text">This vote proposes to dissolve the Community Working Group at the conclusion of the First Term of 2022. Description  the conclusion of the First Ter</div>
                        <div class="data">
                            <img src="" alt="">
                            start in 2 wk.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer-a></footer-a>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;
const router = useRouter()
const showSelect1:any = ref(false);
const showSelect2:any = ref(false);



onMounted(() => {

})

</script>

<style lang="less" scoped>
    .container{
        position: relative;
        width: 100%;
        padding-top: 5.5vw;
        background: #080808;
        color: #fff;
        .wrap{
            .content{
                display: flex;
                justify-content: center;
                margin-top: 2.6vw;
                .left{
                    margin: 0 3.125vw 5.83vw 0;
                    width: 20vw;
                    background: #1A1728;
                    &-wrap{
                        background: linear-gradient(90deg, rgba(63, 22, 175, .25) 0%, rgba(63, 22, 175, 0) 100%);
                        .img-top{
                            width: 100%;
                            height: 8.85vw;
                            position: relative;
                            overflow: hidden;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                            &::after{
                                position: absolute;
                                left: 50%;
                                bottom: -.8vw;
                                margin-left: -3vw;
                                display: block;
                                width: 6vw;
                                height: .83vw;
                                border-radius: 50%;
                                background: #A1FF3F;
                                filter: blur(.4vw);
                                content: '';
                            }
                        }
                        .padding{
                            padding: 0 1.04vw 2.08vw;
                            .title{
                                margin: 1.66vw 0 1.04vw;
                                font-size: 2.4vw;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                                font-weight: bold;
                                line-height: 3.125vw;
                            }
                            .desc{
                                margin-bottom: 1.56vw;
                                font-size: .93vw;
                                font-family: AlibabaPuHuiTi_2_65_Medium;
                                color: rgba(255, 255, 255, 0.5);
                                line-height: 1.3vw;
                            }
                            .genesis{
                                margin-bottom: 2.5vw;
                                font-size: .93vw;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                color: #A1FF3F;
                                line-height: 1.3vw;
                            }
                            .search{
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                width: 100%;
                                height: 2.5vw;
                                padding: .625vw .88vw;
                                border: 1px solid #FFFFFF;
                                input{
                                    color: #fff;
                                    font-size: .93vw;
                                    font-family: AlibabaPuHuiTi_2_65_Medium;
                                    color: rgba(255, 255, 255, 0.5);
                                    background: transparent;
                                    border: none;
                                    outline: none;
                                }
                                img{
                                    height: 100%;
                                }
                            }
                        }
                    }
                }
                .right{
                    width: 38vw;
                    .top{
                        display: flex;
                        justify-content: space-between;
                        .name{
                            margin: .625vw 0 1.35vw;
                            font-size: 1.56vw;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            font-weight: bold;
                            line-height: 2.18vw;
                        }
                        .select{
                            ul{
                                display: inline-block;
                                position: relative;
                                margin-left: .52vw;
                                .one{
                                    padding: .1vw;
                                    clip-path: polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%);
                                    background-color: rgba(255, 255, 255, .5);
                                    transition: all .2s ease-in;
                                    cursor: pointer;
                                    div{
                                        position: relative;
                                        padding: .3vw .78vw;
                                        padding-right: 1.61vw;
                                        font-size: .88vw;
                                        font-family: AlibabaPuHuiTi_2_85_Bold;
                                        line-height: 1.25vw;
                                        background: #080808;
                                        clip-path: polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%);
                                        &::after{
                                            position: absolute;
                                            top: 50%;
                                            content: '';
                                            display: inline-block;
                                            width: .4vw;
                                            height: .4vw;
                                            margin-left: .4vw;
                                            margin-top: -.32vw;
                                            border: 2px solid #fff;
                                            border-left: transparent;
                                            border-top: transparent;
                                            transform: rotateZ(45deg);
                                        }
                                    }
                                    &:hover{
                                        background-color: rgba(255, 255, 255, 1);
                                    }
                                }
                                .items{
                                    position: absolute;
                                    top: 2.6vw;
                                    right: 0;
                                    padding: .52vw .78vw 1.04vw;
                                    background: #080808;
                                    box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.5);
                                    transition: all .2s ease;
                                    div{
                                        font-size: .88vw;
                                        font-family: AlibabaPuHuiTi_2_65_Medium;
                                        line-height: 1.25vw;
                                        opacity: .6;
                                        cursor: pointer;
                                        &:hover{
                                            opacity: 1;
                                        }
                                    }
                                    div + div{
                                        margin-top: .52vw;
                                    }
                                }
                            }
                        }
                    }
                    .card{
                        position: relative;
                        width: 100%;
                        padding: 1.25vw;
                        background: linear-gradient(168deg, rgba(63, 22, 175, 0.38) 0%, rgba(30, 24, 52, 0.71) 100%);
                        border: 2px solid;
                        border-image: linear-gradient(180deg, rgba(151, 151, 151, 0), rgba(94, 47, 253, 1)) 2 2;
                        .name{
                            display: flex;
                            align-items: center;
                            img{
                                width: 1.87vw;
                                height: 1.87vw;
                            }
                            div{
                                margin-left: .52vw;
                                font-size: 1.04vw;
                                font-family: AlibabaPuHuiTi_2_65_Medium;
                                color: rgba(255, 255, 255, 0.5);
                                line-height: 1.45vw;
                                span{
                                    color: #fff;
                                }
                            }
                        }
                        .ep{
                            margin: .52vw 0 .73vw;
                            font-size: 1.25vw;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            line-height: 1.71vw;
                        }
                        .text{
                            width: 100%;
                            margin-right: 1vw;
                            margin-bottom: .93vw;
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_65_Medium;
                            line-height: 1.56vw;
                            color: rgba(255, 255, 255, 0.5);
                            display:-webkit-box;
                            -webkit-box-orient:vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                            &::before{
                                content: '';
                                // display: inline;
                                width: 6vw;
                                height: 1.56vw;
                                margin-top: 1.56vw;
                                float: right;
                                shape-outside: circle();
                                // background: #fff;
                            }
                        }
                        .data{
                            font-size: .83vw;
                            font-family: AlibabaPuHuiTi_2_65_Medium;
                            line-height: 1.14vw;
                            color: rgba(255, 255, 255, 0.5);
                        }
                        .state{
                            position: absolute;
                            top: 1.04vw;
                            right: -.73vw;
                            width: 6.77vw;
                            height: 2.23vw;
                            font-size: .93vw;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            line-height: 2.23vw;
                            text-align: center;
                            &.sActive{
                                color: #000;
                                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwvote/state-active.svg');
                                background-size: 100% auto;
                            }
                            &.sPending{
                                color: #fff;
                                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwvote/state-pending.svg');
                                background-size: 100% auto;
                            }
                            &.sClosed{
                                color: #fff;
                                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwvote/state-closed.svg');
                                background-size: 100% auto;
                            }
                        }
                    }
                }
            }
        }
    }
</style>