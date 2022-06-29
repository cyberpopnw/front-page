<template>
    <header-a path="vote" :type="6"></header-a>
    <div class="container">
        <div class="back">Back</div>
        <div class="content">
            <div class="left">
                <div class="title">[EP14] [Social] Dissolve Community Working Group</div>
                <div class="card">
                    <div class="top">
                        <div class="state sActive"><div>Active</div></div>
                        <img class="logo" src="https://cdn.stamp.fyi/space/cyberpoponline.eth?s=160&cb=1e775ba9559d9a9d" alt="">
                        <div class="space">Cyberpop by <span>game</span></div>
                        <div class="share" @mouseleave="hoverShare = false">
                            <div class="sbtn" @click="showShare = !showShare,hoverShare = false" @mouseenter="hoverShare = true">
                                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwvote/share-icon.svg" alt="">
                                <span>Share</span>
                            </div>
                            <ul v-show="showShare || hoverShare">
                                <li><img src="https://d2cimmz3cflrbm.cloudfront.net/nwvote/twitter-w.svg" alt="">Twitter</li>
                                <li><img src="https://d2cimmz3cflrbm.cloudfront.net/nwvote/copy-icon.svg" alt="">Copy link</li>
                            </ul>
                        </div>
                    </div>
                    <div class="other">
                        <div class="description">
                            <div class="text hideHeight">
                                This vote proposes to dissolve the Community Working Group at the conclusion of the First Term of 2022.
                                Description
                                This is a proposal to dissolve the Community Working Group at the conclusio
                                n of the First Term of 2022 in accordance with rule 3.1 of the working group 
                                rules passed under EP 4.
                                If this proposal is passed, the Community Working Group will be dissolved at
                                the conclusion of the First Term of 2022, leaving three
                                This is a proposal to dissolve the Community Working Group at the conclusio
                                n of the First Term of 2022 in accordance with rule 3.1 of the working group 
                                rules passed under EP 4.
                                If this proposal is passed, the Community Working Group will be dissolved at
                                the conclusion of the First Term of 2022, leaving three
                                This is a proposal to dissolve the Community Working Group at the conclusio
                                n of the First Term of 2022 in accordance with rule 3.1 of the working group 
                                rules passed under EP 4.
                                If this proposal is passed, the Community Working Group will be dissolved at 
                                the conclusion of the First Term of 2022, leaving three
                            </div>
                            <div class="more"><div>Show more</div></div>
                        </div>
                        <div class="discussion">
                            <div class="name">Discussion</div>
                            <div class="disc">
                                <div>[EP14][Social] Dissolve Community Working Group</div>
                                <div>I just hope when it goes to vote, it clearly explains what will happen to those of us...</div>
                            </div>
                        </div>
                        <div class="castvote">
                            <div class="name">Cast your vote</div>
                            <div class="options">
                                <ul class="single">
                                    <li>For</li>
                                    <li>Against</li>
                                    <li>Abstain</li>
                                </ul>
                                <div class="votebtn">Vote</div>
                            </div>
                        </div>
                        <div class="votes">
                            <div class="name">Votes <span>408</span></div>
                            <div>
                                <ul>
                                    <li>
                                        <div><img src="" alt=""><span>brantly.eth</span></div>
                                        <div>For</div>
                                        <div><span>260k ENS</span><img src="" alt=""></div>
                                    </li>
                                </ul>
                                <div class="more"><div>Show more</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="info">
                    <div class="name">Information</div>
                    <ul>
                        <li>
                            <span>Strategie(s)</span>
                            <img src="" alt="">
                        </li>
                        <li>
                            <span>IPFS</span>
                            <div>#QmdUWNW <img src="" alt=""></div>
                        </li>
                        <li>
                            <span>Voting system</span>
                            <span>Single choice voting</span>
                        </li>
                        <li>
                            <span>Start date</span>
                            <span>Jun 10, 2022, 9:00 PM</span>
                        </li>
                        <li>
                            <span>End date</span>
                            <span>Jun 15, 2022, 9:00 PM</span>
                        </li>
                        <li>
                            <span>Snapshot</span>
                            <div>14,938,370 <img src="" alt=""></div>
                        </li>
                    </ul>
                </div>
                <div class="result">
                    <div class="name">Current results</div>
                    <ul>
                        <li>
                            <div><span>for</span><span>1.8M ENS 95.71%</span></div>
                            <div class="progress"><div :style="{'width': 10 + '%'}"></div></div>
                        </li>
                        <li>
                            <div><span>Against</span><span>1.8M ENS 95.71%</span></div>
                            <div class="progress"><div :style="{'width': 10 + '%'}"></div></div>
                        </li>
                        <li>
                            <div><span>Abstain</span><span>1.8M ENS 95.71%</span></div>
                            <div class="progress"><div :style="{'width': 10 + '%'}"></div></div>
                        </li>
                    </ul>
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
const thisAcounts = ref(0);
const router = useRouter()
const showShare = ref(false as any);
const hoverShare = ref(false as any);


onMounted(() => {

})

</script>

<style lang="less" scoped>
.container{
    position: relative;
    width: 100%;
    min-height: calc(100vh - 12.03vw);
    padding-top: 5.5vw;
    background: #080808;
    color: #fff;
    .back{
        position: absolute;
    }
    .content{
        display: flex;
        justify-content: center;
        .left{
            width: 39.47vw;
            margin-top: 3.64vw;
            .title{
                font-size: 1.87vw;
                font-family: AlibabaPuHuiTi_2_85_Bold;
                line-height: 2.6vw;
            }
            .card{
                position: relative;
                &::before{
                    content: '';
                    display: inline-block;
                    position: absolute;
                    width: 6.8vw;
                    height: 10vw;
                    background: linear-gradient(135deg, #403F3F 0%, rgba(0, 0, 0, 1) 60%);
                    filter: blur(2px);
                }
                .top{
                    display: flex;
                    align-items: center;
                    .state{
                        width: 6.77vw;
                        height: 2.23vw;
                        margin-left: -.7vw;
                        font-size: .93vw;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        line-height: 2.23vw;
                        text-align: center;
                        transform: rotateY(180deg);
                        div{
                            transform: rotateY(180deg);
                        }
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
                    .logo{
                        width: 1.87vw;
                        height: 1.87vw;
                        margin: 0 .54vw 0 1.04vw;
                    }
                    .space{
                        font-size: .93vw;
                        font-family: AlibabaPuHuiTi_2_65_Medium;
                        color: rgba(255, 255, 255, 0.5);
                        line-height: 1.3vw;
                        span{
                            color: #fff;
                        }
                    }
                    .share{
                        flex: 1;
                        position: relative;
                        font-size: .93vw;
                        font-family: AlibabaPuHuiTi_2_65_Medium;
                        color: rgba(255, 255, 255, 0.5);
                        line-height: 1.3vw;
                        text-align: right;
                        span{
                            cursor: pointer;
                        }
                        img{
                            width: .93vw;
                            margin-right: .52vw;
                            cursor: pointer;
                        }
                        ul{
                            z-index: 4;
                            position: absolute;
                            top: 1.8vw;
                            right: 0;
                            padding: .57vw .78vw 1.14vw;
                            background: #080808;
                            box-shadow: 0px 0px 2px 0px rgba(255, 255, 255, 0.5);
                            text-align: left;
                            li{
                                display: flex;
                                align-items: center;
                                font-size: .93vw;
                                font-family: AlibabaPuHuiTi_2_65_Medium;
                                color: #FFFFFF;
                                line-height: 1.3vw;
                                opacity: .5;
                                cursor: pointer;
                                img{
                                    width: 1.14vw;
                                }
                                &:hover{
                                    opacity: 1;
                                }
                            }
                            li + li{
                                margin-top: .52vw;
                            }
                        }
                    }
                }
                .other{
                    padding: 2.5vw 0 0 1.5vw;
                    .description{
                        position: relative;
                        margin-bottom: 2.6vw;
                        .text{
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            line-height: 1.56vw;
                            &.hideHeight{
                                height: 15.625vw;
                                overflow: hidden;
                            }
                        }
                        .more{
                            position: absolute;
                            bottom: 0;
                            width: 100%;
                            height: 3.95vw;
                            background: linear-gradient(180deg, rgba(8, 8, 8, 0) 0%, #080808 100%);
                            text-align: center;
                            div{
                                display: inline-block;
                                padding: .78vw 1.04vw;
                                margin-top: .6vw;
                                font-size: .93vw;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                                line-height: 1.3vw;
                                border: 1px solid #FFFFFF;
                                // filter: blur(3px);
                                cursor: pointer;
                            }
                        }
                    }
                    .discussion{
                        .name{
                            font-size: 1.25vw;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            line-height: 1.71vw;
                        }
                        .disc{
                            width: 37.9vw;
                            height: 5.36vw;
                            margin: 1.04vw 0 2.6vw;
                            padding: 1.25vw 1.04vw;
                            background: linear-gradient(170deg, rgba(63, 22, 175, 0.48) 0%, rgba(30, 24, 52, 0.81) 100%);
                            opacity: 0.9;
                            border: 2px solid;
                            border-image: linear-gradient(180deg, rgba(151, 151, 151, 0), rgba(94, 47, 253, 1)) 2 2;
                            div:first-child{
                                margin-bottom: .52vw;
                                font-size: .93vw;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                line-height: 1.3vw;
                            }
                            div:last-child{
                                font-size: .72vw;
                                font-family: AlibabaPuHuiTi_2_65_Medium;
                                color: rgba(255, 255, 255, 0.5);
                                line-height: 1.04vw;
                            }
                        }
                    }
                    .castvote{
                        .name{
                            font-size: 1.25vw;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            line-height: 1.71vw;
                        }
                        .options{
                            margin: 1.04vw 0 2.6vw;
                            padding: 1.56vw 3.33vw 2.29vw;
                            background: linear-gradient(154deg, rgba(63, 22, 175, 0.48) 0%, rgba(30, 24, 52, 0.81) 100%);
                            opacity: 0.9;
                            border: 2px solid;
                            border-image: linear-gradient(180deg, rgba(151, 151, 151, 0), rgba(94, 47, 253, 1)) 2 2;
                            .single{
                                li{
                                    height: 2.81vw;
                                    opacity: 0.5;
                                    margin-bottom: .83vw;
                                    line-height: 2.81vw;
                                    text-align: center;
                                    border: 1px solid #FFFFFF;
                                    cursor: pointer;
                                    &:hover{
                                        opacity: 1;
                                    }
                                    &.active{
                                        opacity: 1;
                                    }
                                }
                            }
                            .votebtn{
                                width: 100%;
                                height: 2.81vw;
                                margin-top: 1.56vw;
                                background: linear-gradient(7deg, #A1FF3F 0%, #EFFF41 100%);
                                font-size: 1.04vw;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                                color: #000000;
                                line-height: 2.81vw;
                                text-align: center;
                            }
                        }
                    }
                    .votes{
                        
                    }
                }
            }
        }   
    }
}
</style>