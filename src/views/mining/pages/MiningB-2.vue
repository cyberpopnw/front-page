<template>
    <header-b path="/mining" :type="1"></header-b>
    <div class="section flex_centent_center">
        <div class="title">{{$t('message.mining.coming')}}</div>
    </div>
    <div class="mining">
        <div class="banner">
            <div class="titles">
                <div class="title">{{$t('message.mining.title')}}</div>
                <div class="subtitle">{{$t('message.mining.subtitle')}}</div>     
            </div>
        </div>
        <div class="total">
            <div class="progressBall">
                <img class="ballBorder" src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwminingPhone/ballBorder.svg" alt="">
                <div class="ball-inner"></div>
            </div>
            <div class="right">
                <div class="right_content">
                    <div class="total-title">{{$t('message.mining.pool_amount')}} </div>
                    <div class="price">-- --</div>
                    <!-- <div class="price">{{ Number(getTotalSupplyCoin) + Number(getTotalSupply) }}</div> -->
                    <!-- <div class="total-subtitle">{{$t('message.mining.pool')}}:{{ getTotalSupply }}</div> -->
                </div>
            </div>
        </div>
        <div class="myAssets">
            <div class="myAssets-wrap">
                <div class="item1">
                    <div class="left">{{$t('message.mining.mycyt')}} <br/><span>{{ mycyt }}</span></div>
                    <div class="button">
                        {{$t('message.mining.getcyt')}}
                    </div>
                </div>
                <div class="line"></div>
                <div class="item2">
                    <div class="left">{{$t('message.mining.mycoin')}} <br/><span>{{ mycoin }}</span></div>
                </div>
                <!-- <div class="coin_logo">
                    <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin9.png" alt="">
                </div> -->
            </div>
        </div>
        <div class="Operation">
            <div class="owrap">
                <ul>
                    <li>
                        <div class="txt">{{$t('message.mining.total_staked')}}</div>
                        <div class="number">{{ getTotalSupply }}</div>
                    </li>
                    <li>
                        <div class="txt">{{$t('message.mining.percyt_earn')}}</div>
                        <div class="number">{{ rewardPerToken.toFixed(6) }}/s</div>
                    </li>
                    <li>
                        <div class="txt">{{$t('message.mining.your_staked')}}</div>
                        <div class="number">{{ myStakCyt }}</div>
                    </li>
                </ul>
                <div class="btns btnfont stake" @click="stakingCyt">
                    {{$t('message.mining.Stake_btn')}}
                </div>
                <div class="btns btnfont" @click="cancelStake(1)">
                    {{$t('message.mining.Cancel')}}
                </div>
                <div class="btns btnfont" @click="harvest">
                    {{$t('message.mining.Harvest_btn')}}
                </div>
            </div>
        </div>
        <!-- <div class="data-wrap">
            <ul class="data">
                <li>
                    <div>
                        <div class="txt">{{$t('message.mining.total_power')}} <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin5.png" alt=""> </div>
                        <div class="percent">{{ getTotalSupply }}</div>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="txt">{{$t('message.mining.total_staked')}}</div>
                        <div class="percent">{{ getTotalSupply }}</div>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="txt">{{$t('message.mining.percyt_earn')}}</div>
                        <div class="percent">{{ rewardPerToken.toFixed(6) }}/s</div>
                    </div>
                </li>
                <li>
                    <div>
                        <div class="txt lastTxt">{{$t('message.mining.total_Tokens')}} ≈ $5,278,606</div>
                        <div class="percent lastPer">$19,432,500,000,000</div>
                    </div>
                </li>
            </ul>
            <div class="mystaked">
                <ul>
                    <li>
                        <p class="title">{{$t('message.mining.my_power')}}</p>
                        <p class="flex_align_center"> <span class="number">0</span> <span class="dollar">≈ $0.278</span></p>
                    </li>
                    <li>
                        <p class="title">{{$t('message.mining.my_staked')}}</p>
                        <p> <span class="number">{{ myStakCyt }}</span></p>
                    </li>
                    <li>
                        <p class="title">{{$t('message.mining.my_Prop')}}</p>
                        <p> <span class="number">≈ {{ floorTofixed((myStakCyt / getTotalSupply * 100),2) }}%</span></p>
                    </li>
                    <li>
                        <div id="Chart"></div>
                    </li>
                    <li>
                        <p class="title">{{$t('message.mining.my_tokens')}}<br/>≈ $0</p>
                        <p> <span class="number">0</span></p>
                    </li>
                </ul>
                <div class="Harvest">
                    <div class="texts">
                        <div class="exchange">{{ $t('message.mining.you_earn') }} (COIN)</div>
                        <div class="price">{{ earned }}</div>
                    </div>
                    <div class="button" @click="harvest">{{$t('message.mining.Harvest_btn')}}</div>
                </div>
            </div>
        </div> -->
        <div class="more">
            <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin2.png" alt="">
        </div>
        <!-- <div class="pledge">
            <div class="title">{{$t('message.mining.pledge_title')}}<span>2/4</span></div>
            <ul>
                <li>
                    <div class="not-stak" v-if="myStakCyt == 0">
                        <div class="img-wrap" @click="stakingCyt">
                            <img class="pledge-img" :src="whiteImgSrc" alt="">
                        </div>
                        <div class="top-txt">{{$t('message.mining.pledge_top_txt')}}</div>
                        <div class="bot-txt whiteNft">
                            <div>{{$t('message.mining.pledge_bot_txt2_1')}}</div>
                            <img :src="whiteBorderSrc" alt="">
                        </div>
                    </div>
                    <div class="have-stak"  @click="stakingCyt" v-else>
                        <p>{{$t('message.mining.your_staking')}}: {{ myStakCyt }} <br/> {{$t('message.mining.current_pro')}}：{{floorTofixed(progress,2)}}%</p>
                        <div class="bot-txt whiteNft" @click.stop="cancelStake(1)">
                            <div>{{$t('message.mining.cancel_staking')}}</div>
                            <img :src="whiteBorderSrc" alt="">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="not-stak" v-if="myStakeNFT == 0">
                        <div class="img-wrap" @click="stakingNFT">
                            <img class="pledge-img" :src="whiteImgSrc" alt="">
                        </div>
                        <div class="top-txt">{{$t('message.mining.pledge_top_txt')}}</div>
                        <div class="bot-txt whiteNft">
                            <div>{{$t('message.mining.pledge_bot_txt2')}}</div>
                            <img :src="whiteBorderSrc" alt="">
                        </div>
                    </div>
                    <div class="have-stak"  @click="myStakeNFT" v-else>
                        <p>{{$t('message.mining.your_staking')}}: {{ myStakCyt }} <br> {{$t('message.mining.current_day')}}: {{ myTime > 0 ? myTime : $t('message.mining.finish_receive') }}</p>
                    </div>
                </li>
                <li>
                    <div class="img-wrap">
                        <img class="pledge-img lockedImg" :src="lockedImgSrc" alt="">
                    </div>
                    <div class="top-txt">{{$t('message.mining.pledge_top_txt')}}</div>
                    <div class="bot-txt grayNft">
                        <div>{{$t('message.mining.pledge_bot_txt3')}}</div>
                        <img :src="lockedBorderSrc" alt="">
                    </div>
                </li>
                <li>
                    <div class="img-wrap">
                        <img class="pledge-img lockedImg" :src="lockedImgSrc" alt="">
                    </div>
                    <div class="top-txt">{{$t('message.mining.pledge_top_txt')}}</div>
                    <div class="bot-txt grayNft">
                        <div>{{$t('message.mining.pledge_bot_txt3')}}</div>
                        <img :src="lockedBorderSrc" alt="">
                    </div>
                </li>
            </ul>
        </div> -->

       <div class="days">
            <div class="title">{{$t('message.mining.Days')}}</div>
            <div class="total_day">{{$t('message.mining.cycle_days')}}: <span>30{{$t('message.mining.day')}}</span></div>
            <div class="content flex_align_center">
                <div :style="{'width': progress + '%'}"></div>
            </div>
            <div class="total_day">{{$t('message.mining.current_pro')}}：<span class="white">{{floorTofixed(progress,2)}}%</span></div>
        </div>
        <div class="farms">
            <div class="background">
                <div class="title">
                    <p>{{$t('message.mining.farms')}}</p>
                    <p>{{$t('message.mining.farms_subtitle')}}</p>
                </div>
                <div class="texts flex_align_center">
                    <div class="texts-img"></div>
                    <div class="texts-info">
                        <p>{{$t('message.mining.total_lp')}}</p>
                        <p>{{ getTotalSupplyCoin }}</p>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="item" v-for="item in 1" :key="item">
                    <div class="top flex_align_center">
                        <div class="top_element1"></div>
                        <div class="top_element2"></div>
                        <div class="title">COIN</div>
                    </div>
                    <div class="middle">
                        <!-- <div class="table">
                            <div class="title">{{$t('message.mining.TVL')}}</div>
                            <div class="desc">$29,393,229</div>
                        </div> -->
                        <div class="table">
                            <div class="title">{{$t('message.mining.APR')}}</div>
                            <div class="desc">{{ floorTofixed((myStakCytCoin / getTotalSupplyCoin * 100),2) }}%</div>
                        </div>
                        <div class="table top_element5">
                            <div class="title">{{$t('message.mining.rewards_in')}}</div>
                            <div class="desc">
                                <p>{{ rewardPerTokenCoin.toFixed(6) }} COIN <span>/s</span> </p>
                            </div>
                        </div>
                        <div class="table">
                            <div class="title">{{$t('message.mining.your_staked')}}</div>
                            <div class="desc">{{ myStakCytCoin }} <span class="tag">COIN</span> </div>
                        </div>
                        <div class="table cancelStake btnfont" @click="cancelStake(2)">{{$t('message.mining.Cancel')}}</div>
                    </div>
                    <div class="bottom">
                        <div class="bottom-item flex_between_center">
                            <div class="table bottom_element2">
                                <div class="title">{{$t('message.mining.Harvest_cyt')}} ≈ $0</div>
                                <div class="desc">{{ earnedCoin }}</div>
                            </div>
                            <div class="harvest btnfont" @click="stakingCoin(2)">{{$t('message.mining.Harvest_btn')}}</div>
                        </div>
                        <div class="line"></div>
                        <div class="bottom-item flex_between_center">
                            <div class="table staked">
                                <p class="title">{{$t('message.mining.Staked_cyt')}}</p>
                                <div class="desc">{{ myStakCytCoin }}</div>
                            </div>
                            <div class="stake btnfont" @click="stakingCoin(1)">{{$t('message.mining.Stake_btn')}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer-b></footer-b>
    <!-- 质押完成领取奖励 -->
    <FinishedB ref="Finished" v-if="isShowFinished" :isShowTips="isShowFinished" :isCoin="stakingCoinType" :amount="finishGetNFT"  @closeFinshed="isShowFinished = false"></FinishedB>
    <!-- 取消质押弹窗 -->
    <CancelStakeB ref="SelectNFT" v-if="isShowCancelStake" :isShowTips="isShowCancelStake" :isCoin="stakingCoinType" @closeFinshed="isShowCancelStake = false"></CancelStakeB>
    <!-- 选择NFT质押 -->
    <SelectNFTB ref="SelectNFT" v-if="isShowSelectNFT" :isShowTips="isShowSelectNFT" @closeFinshed="isShowSelectNFT = false"></SelectNFTB>
    <!-- 切换网络弹窗 -->
    <!-- <wrongNetWorkA :isShowTips="isShowTips" @changeSwitch="changeSwitch"></wrongNetWorkA> -->
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted, watch } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import { useI18n } from 'vue-i18n';
import FinishedB from '@/components/staking/FinishedB.vue';
import SelectNFTB from '@/components/staking/selectNFTB.vue';
import CancelStakeB from '@/components/staking/cancelStakeB.vue';
import * as echarts from 'echarts';

const { staking, cytV2, CYTStakingRewards } = Web3.contracts;
const { t, locale } = useI18n();
const router = useRouter()
const realId = computed(() => store?.state.wallet?.realId);  // Asterisk address
const chainId: any = computed(() => store.state.user?.chainId);
const readyAssetsF: any = computed(() => store.state.myAssets?.readyAssets ); // Status value of the connection
const readyAssetsCoin: any = computed(() => store.state.staking?.readyAssetsCoin );
watch(readyAssetsF, (newVal: number, oldVal: any) => {
    console.log(newVal, oldVal, 'readyAssetsF');
    if(newVal <= 0 || oldVal == -1) return;
    init()
    console.log('her1');
}, {immediate:true,deep:true});

const mountedInit: any = ref(false);
watch(readyAssetsCoin, (newVal: number, oldVal: any) => {
    console.log(newVal, oldVal, 'readyAssetsCoin');
    // if(newVal <= 0 || oldVal == -1) return;
    if( !mountedInit.value ) return
    initCoin()
    console.log('her3');
}, {immediate:true,deep:true});


watch(chainId, (newVal: any, oldVal: any) => {
    console.log(newVal, oldVal, 'newVal');
    console.log(!oldVal);
    if(newVal != 43113){
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.mining.chainId_msg')}})
        return;
    }
    if( !mountedInit.value ) return
    // if(!oldVal || oldVal == -1) return;
    init()
    initCoin()
    console.log('her2');
}, {immediate:true,deep:true});


watch(realId, (newVal, oldVal: any) => {
    console.log(newVal, oldVal, 'realId');
    if(!oldVal || oldVal == -1) return;
    init()
    initCoin()
    console.log('her3');
}, {immediate:true,deep:true});


// Sub component finished (pledge completed to receive reward)
const Finished = ref(null);
const isShowFinished = ref(false as boolean);
console.log(Finished, 'Finished');


//Subcomponents SelectNFT
const SelectNFT = ref(null);
const isShowSelectNFT = ref(false as boolean);


// Sub assembly cancel pledge pop-up
const isShowCancelStake = ref(false) as any;


// progress
const progress = ref(0) as any;
const finishGetNFT = ref(0) as any;

// pool
const getTotalSupply: any = ref(0) // staking coin get NFT
const getTotalSupplyCoin: any = ref(0) // staking coin get COIN

// card filp
const flipMove = () => {
    const pledgeImg = document.getElementById('pledgeImg') as HTMLElement;
    pledgeImg.classList.add('pledgeAni')
}
const flipEnd = () => {
    const pledgeImg = document.getElementById('pledgeImg') as HTMLElement;
    pledgeImg.classList.remove('pledgeAni')
}


// pledge
let greenImgSrc:any = ref('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwminingPhone/whiteImg.png')
let whiteImgSrc:any = ref('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwminingPhone/whiteImg.png')
let lockedImgSrc:any = ref('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwminingPhone/locked.svg')

let greenBorderSrc:any = ref('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwminingPhone/pledge-border1.svg')
let whiteBorderSrc:any = ref('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwminingPhone/pledge-border2.svg')
let lockedBorderSrc:any = ref('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwminingPhone/pledge-border3.svg')


//  my balance
const poolAmount: any = ref(0);
const earned: any = ref(0);
const earnedCoin: any = ref(0);
const rewardPerToken: any = ref(0);
const rewardPerTokenCoin: any = ref(0);
const mycyt: any = ref(0);
const mycoin: any = ref(0)
const myStakCyt: any = ref(0);
const myStakCytCoin: any = ref(0);
const myTime: any = ref(0);
const myStakeNFT: any = ref(0);
const test = ref(0) as any


// harvest btn
const harvest = () => {
    stakingCoinType.value = false; 
    if(myTime.value > 0 || progress.value < 100) { // You can continue to pledge before the time is up
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.mining.getMsg')}})
        return;
    }
    store.dispatch('user/xplanChangeAni', true);
    isShowFinished.value = true;
}

// start staking
const stakingCyt = async () => {
    console.log(progress.value, 'progress.value');
    console.log(myTime.value, 'myTime');
    stakingCoinType.value = false; 
    if(myTime.value > 0 || progress.value < 100) { // You can continue to pledge before the time is up
        store.dispatch('staking/stakingState', { show: true, info: { state: 1, haveCTY: mycoin.value }});
        store.dispatch('user/xplanChangeAni', true);
        return;
    }
    store.dispatch('user/xplanChangeAni', true);
    isShowFinished.value = true;
}
const stakingCoin = async (type: any) => { // type 1:stake 2:havest
    stakingCoinType.value = true; 
    if( type == 1 ) { // You can continue to pledge before the time is up
        store.dispatch('staking/stakingState', { show: true, info: { state: 2, haveCTY: mycoin.value }});
        store.dispatch('user/xplanChangeAni', true);
        return;
    }
    if( !Number(earnedCoin.value) ){
        return
    }
    store.dispatch('user/xplanChangeAni', true);
    isShowFinished.value = true;
}

const stakingNFT = async () => {
    store.dispatch('user/xplanChangeAni', true);
    isShowSelectNFT.value = true;
}


// cancel stake
const stakingCoinType = ref(false) as any; // cancel staking coin (staking coin get coin)
const cancelStake = (type: any) => { // type 1:(get NFT) 2:(get coin)
    if( type === 2 ){
        stakingCoinType.value = true
    }else{
        stakingCoinType.value = false
    }
    store.dispatch('user/xplanChangeAni', true);
    isShowCancelStake.value = true;
}




// init data
const init = async () => {
    getTotalSupply.value = await Web3.getTotalSupply(staking.abi, staking.address)
    // poolAmount.value = await Web3.notifyrewardamount(staking.abi, staking.address)
    // console.log(poolAmount.value, 'poolAmount')
    mycoin.value = await Web3.ERC20balanceOf(cytV2.abi, cytV2.address);
    console.log(mycoin, 'mycoin');
    myStakCyt.value = await Web3.getBalanceOf(staking.abi, staking.address)
    console.log(myStakCyt.value, 'myStakCyt.value');
    let DaysResult: any = await Web3.DaysRemaining(staking.abi, staking.address, 3) as number;
    console.log(DaysResult, 'DaysResult');
    earned.value = DaysResult.earned;
    rewardPerToken.value =  Number( DaysResult.rewardPerToken);
    myTime.value = DaysResult.result.toFixed(2);
    console.log(myTime.value , 'myTime.value');
    let oResult: any = await Web3.progress(staking.abi, staking.address);
    progress.value = oResult.progressVal;
    finishGetNFT.value = oResult.finishGetNFT;
    console.log(progress.value, finishGetNFT.value, 'progress.value,finishGetNFT.value');
    const myRatio: any = floorTofixed((myStakCyt.value / getTotalSupply.value * 100),2);
    // const option: any = {
    //     //   title: {
    //     //     text: t('message.mining.my_Prop'),
    //     //     left: 'center',
    //     //     textStyle: {
    //     //         color: '#B3B3B3',
    //     //         fontSize: 16,
    //     //         fontFamily: 'AlibabaPuHuiTi_2_55_Regular',
    //     //     }
    //     //   },
    //     color: ['#5470c7', '#a4f238'],
    //     series: [
    //         {
    //             name: 'Pledge proportion',
    //             type: 'pie',
    //             radius: '50%',
    //             center: ['50%', '50%'],
    //             data: [
    //                 { value: getTotalSupply.value - myStakCyt.value, name: t('message.mining.pie_ratio') },
    //                 { value: myStakCyt.value, name: t('message.mining.pie_me_ratio')},
    //             ],
    //             label:{  
    //                 show: true, 
    //                 formatter: '{b}',
    //                 fontSize: '16',
    //                 color:'#ffffff',
    //             }, 
    //             labelLine :{
    //                 show: true
    //             } 
    //         },
    //         {
    //             name: 'Pledge proportion1',
    //             type: 'pie',
    //             avoidLabelOverlap: true,
    //             radius: '50%',
    //             center: ['50%', '50%'],
    //             data: [
    //                 { value: getTotalSupply.value - myStakCyt.value, name: floorTofixed((100 - myRatio),2)  + '%' },
    //                 { value: myStakCyt.value, name: myRatio + '%' },
    //             ],
    //             label:{  
    //                 show: true, 
    //                 position: 'inside',
    //                 formatter: '{b}',
    //                 fontSize: '16',
    //                 color:'#ffffff',
    //             }, 
    //             labelLine :{
    //                 show: true
    //             } 
    //         }
    //     ]
    // };
    // myChart.setOption(option);
}

// let myChart: any = ref(null);


// staking coin get coin
const initCoin = async () => {
    getTotalSupplyCoin.value = await Web3.getTotalSupply(CYTStakingRewards.abi, CYTStakingRewards.address)
    myStakCytCoin.value = await Web3.getBalanceOf(CYTStakingRewards.abi, CYTStakingRewards.address) // you have stake
    console.log(myStakCytCoin.value, 'myStakCytCoin.value');
    let DaysResult: any = await Web3.DaysRemainingCoin(CYTStakingRewards.abi, CYTStakingRewards.address) as number;
    console.log(DaysResult, 'DaysResult');
    earnedCoin.value = DaysResult.earned;
    rewardPerTokenCoin.value =  Number( DaysResult.rewardPerToken);
    console.log(DaysResult , 'DaysRemainingCoin');
}


// tofixed math.floor
const floorTofixed = (number: any, pow: any) => {
    if( !number || !pow ) return 0
    return (Math.floor(number * Math.pow(10, pow)) / 100).toFixed(pow);
}

onMounted(async () => {
    // myChart = echarts.init(document.getElementById("Chart") as HTMLElement)
    // myChart.setOption(option);
    setTimeout(() => {
        if(chainId.value != 43113){
            mountedInit.value = true
            return;
        }
        init()
        initCoin()
    }, 1000);
    

    window.scrollTo(0,0);
    store.dispatch('user/showDialog',{show: false, info: {}});// close message dialog
})


</script>
<style lang="less" scoped>
    @keyframes wave{
        from {
            -webkit-transform: rotateZ(0deg) ;
            transform: rotateZ(0deg);
        }
        to {
            -webkit-transform: rotateZ(360deg);
            transform: rotateZ(360deg);
        }
    }
    @keyframes arrow{
        0% {
            transform: translateY(0);
        }
        25% {
            transform: translateY(10px);
        }
        50% {
            transform: translateY(0px);
        }
        75% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0px);
        }
    }
    .btnfont{
        width: 100px;
        height: 38px;
        font-size: 16px;
        font-family: AlibabaPuHuiTi_2_85_Bold;
        line-height: 38px;
        text-align: center;
    }
    .section{
        z-index: 8;
        position: fixed;
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
    .mining{
        width: 100%;
        padding-top: 55px;
        background-color: #000000;
        overflow: hidden;
        .banner{
            position: relative;
            width: 100%;
            // height: 387px;
            height: 272px;
            background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/banner-home-b.png');
            background-repeat: no-repeat;
            background-position: -409px top;
            background-size: auto 100%; 
            text-align: center;
            overflow: hidden;
            .titles{
                position: absolute;
                bottom: 0;
                width: 100%;
                text-align: center;
                .title{
                    height: 44px;
                    font-size: 32px;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    color: #FFFFFF;
                    line-height: 44px;
                    letter-spacing: 3px;
                    animation: fadeInUp .8s linear;
                }
                .subtitle{
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                    color: #FFFFFF;
                }
            }
        }
        .total{
            display: flex;
            height: 108px;
            margin-top: 26px;
            .progressBall{
                display: inline-block;
                position: relative;
                z-index: 3;
                width: 109px;
                height: 110px;
                margin-left: 20px;
                background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwminingPhone/ballBg.svg');
                background-repeat: no-repeat;
                background-position: left bottom;
                background-size: 100% 100%; 
                border-radius: 50%;
                overflow: hidden;
                transform-style: preserve-3d;
                .ballBorder{
                    position: absolute;
                    margin-top: 2px;
                    width: 100%;
                    height: 100%;
                }
                .ball-inner{
                    width: 218px;
                    height: 220px;    
                    border-radius: 38%;
                    background: radial-gradient(circle,  #9537FF 1%,#1939F1 40%, #00FF49 80%);
                    filter: blur(2px);
                    position:relative;
                    top: 28%;
                    left: -48%;
                    -webkit-animation: wave 5s linear infinite;
                    z-index:66;
                }
            }
            .right{
                margin-left: 10px;
                .total-title{
                    margin-top: 14px;
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    color: #FFFFFF;
                    line-height: 17px;
                }
                .total-subtitle{
                    height: 15px;
                    font-size: 10px;
                    font-family: AlibabaPuHuiTi_2_65_Medium;
                    color: #B4B4B4;
                    line-height: 15px;
                }
                .price{
                    font-size: 30px;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    color: #04FF55;
                    line-height: 42px;
                }
            }
        }
        .data-wrap{
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            height: 620px;
            .data{
                z-index: 2;
                position: absolute;
                top: 0;
                width: 338px;
                // height: 370px;
                height: 240px;
                margin: 0 auto;
                margin-top: -12px;
                background: #171C28;
                box-shadow: 0px 12px 12px 0px rgba(0, 0, 0, 0.5);
                border: 1px solid #27E37C;
                overflow: hidden;
                li{
                    margin-top: 41px;
                    text-align: center;
                    .txt{
                        display: flex;
                        justify-content: center;
                        font-size: 14px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #B3B3B3;
                        line-height: 20px;
                        img{
                            height: 20px;
                            margin-left: 6px;
                        }
                    }
                    .lastTxt{
                        width: 168px;
                        margin: 0 auto;
                        word-break: break-all;
                    }
                    .percent{
                        margin: 6px auto 20px;
                        font-size: 28px;
                        font-family: AlibabaPuHuiTi_2_85_Bold;
                        color: #04FF55;
                        line-height: 40px;
                    }
                    .lastPer{
                        width: 210px;
                        word-break: break-all;
                    }
                }
                li + li{
                    margin-top: 7px;
                }
            }
            .mystaked{
                position: absolute;
                top: 220px;
                overflow: hidden;
                ul{
                    width: 328px;
                    // height: 358px;
                    height: 260px;
                    padding-top: 60px;
                    margin: auto;
                    background: #3F16A7;
                    li{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        color: #B3B3B3;
                        .title{
                            font-size: 14px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            line-height: 20px;
                            text-align: center;
                        }
                        .number{
                            margin-top: 6px;
                            font-size: 28px;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #FFFFFF;
                            line-height: 40px;
                        }
                        .dollar{
                            display: inline-block;
                            height: 17px;
                            padding-top: 0.2vw;
                            margin-left: 6px;
                            font-size: 12px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #B3B3B3;
                            line-height: 17px;
                        }
                    }
                    li + li {
                        margin-top: 20px;
                    }
                    li > #Chart{
                        width: 100%; 
                        height: 150px;
                        margin-top: -20px;
                    }
                }
                .Harvest{
                    bottom: -102px;
                    width: 100%;
                    height: 102px;
                    background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin3.png'); 
                    background-size: 100% 100%;
                    padding-left: 1.56vw;
                    padding-right: 1.30vw;
                    display: flex;
                    .texts{
                        margin: 18px 45px 0 40px;
                        .exchange{
                            font-size: 14px;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #2C1469;
                            line-height: 20px;
                        }
                        .price{
                            margin-top: 8px;
                            font-size: 31px;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            color: #3F16A7;
                            line-height: 44px;
                        }
                    }
                    .button{
                        width: 108px;
                        height: 46px;
                        margin-top: 46px;
                        font-size: 16px;
                        font-family: AlibabaPuHuiTi_2_85_Bold;
                        color: #FFFFFF;
                        line-height: 46px;
                        text-align: center;
                        background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin8.png'); 
                        background-size: 100% 100%;
                    }
                }
            }
        }
        .more{
            width: 33px;
            height: 22px;
            margin: 30px auto 60px;
            img{
                width: 100%;
                -webkit-animation: arrow 2s linear infinite;
            }
        }
        .days{
            // margin: 0 18px;
            margin: 15px 18px 40px;
            .title{
                height: 28px;
                margin-bottom: 20px;
                font-size: 20px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                color: #FFFFFF;
                line-height: 28px;
                text-align: center;
            }
            .total_day{
                height: 20px;
                font-size: 12px;
                font-family: AlibabaPuHuiTi_2_85_Bold;
                color: #B3B3B3;
                line-height: 17px;
                text-align: right;
                span{
                    color: #EDFF00;
                }
                .white{
                    color: #ffffff;
                }
            }
            .content{
                width: 100%;
                height: 8px;
                margin: 26px 0;
                background: #212737;
                & > div{
                    line-height: 8px;
                    width: 1%;
                    height: 100%;
                    text-align: center;
                    background: #A4F238;
                    position: relative;
                    transition: all 0.5s ease-in-out;
                }
                &::after{
                    content: '';
                    display: inline-block;
                    width: 6px;
                    height: 20px;
                    background: #A4F238;
                }
            }
        }
        .pledge{
            overflow: hidden;
            .title{
                height: 28px;
                margin: 80px auto 30px;
                font-size: 20px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                color: #FFFFFF;
                line-height: 28px;
                text-align: center;
                span{
                    color: #EDFF00;
                }
            }
            ul{
                display: flex;
                flex-direction: column;
                align-items: center;
                li{
                    position: relative;
                    width: 226px;
                    height: 260px;
                    margin-bottom: 34px;
                    background: linear-gradient(61deg, rgba(105, 0, 255, .43) 0%, rgba(88, 0, 255, 0) 100%);
                    border: 2px solid rgba(62, 65, 68, .43);
                    .not-stak{
                    }
                    .have-stak{
                        height: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        color: #DFF;
                        p{
                            font-size: 16px;
                            line-height: 18px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                        }
                        .cancelStakin{
                            color: #fff;
                            position: absolute;
                            bottom: 0;
                        }
                    }
                    .img-wrap{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                        img:hover{
                            transform: scale(1.2);
                        }
                        .lockedImg{
                            width: 97px;
                            height: 108px;
                            margin-bottom: 30px;
                        }
                    }
                    .top-txt{
                        height: 16px;
                        margin-top: 10px;
                        font-size: 12px;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        color: #FFFFFF;
                        line-height: 16px;
                        text-align: center;
                    }
                    .bot-txt{
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: 52px;
                        font-size: 16px;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #04FF55;
                        line-height: 52px;
                        text-align: center;
                        img{
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            width: 101%;
                            opacity: 0.46;
                            // height: 100%;
                        }
                    }
                    .greenNft > img:hover{
                        filter: drop-shadow(0 0 5px #04FF55);
                    }
                    .whiteNft > img:hover{
                        filter: drop-shadow(0 0 .5vw #ffffff);
                    }
                    .grayNft > img:hover{
                        filter: drop-shadow(0 0 .5vw #7E52FF);
                    }
                    .greenNft{
                        color: #04FF55;
                    }
                    .whiteNft{
                        color: #ffffff;
                    }
                    .grayNft{
                        color: #7E52FF;
                    }
                }
            }
        }
        .myAssets{
            width: 338px;
            height: 342px;
            margin: 0 auto;
            margin-top: -12px;
            background: #171C28;
            border: 2px solid;
            border-image: linear-gradient(45deg, rgba(35, 71, 54, 1), rgba(51, 32, 91, 1)) 2 2;
            box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.69);
            background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin9.png');
            background-position: right bottom;
            background-repeat: no-repeat;
            background-size: 90px auto;
            .myAssets-wrap{
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                background: linear-gradient(133deg, rgba(88, 0, 255, 0) 0%, rgba(105, 0, 255, 0.6) 100%);
                .item1, .item2{
                    .left{
                        font-size: 14px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #B3B3B3;
                        line-height: 20px;
                        text-align: center;
                        span{
                            display: inline-block;
                            margin: 6px auto 14px;
                            font-size: 28px;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            color: #04FF55;
                            line-height: 40px;
                        }
                    }
                    .button{
                        width: 130px;
                        height: 50px;
                        font-size: 16px;
                        font-family: AlibabaPuHuiTi_2_85_Bold;
                        color: #FFFFFF;
                        line-height: 50px;
                        text-align: center;
                        background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin10.png');
                        background-size: 100% 100%;
                    }
                }
                .coin_logo{
                    position: absolute;
                    right: 4px;
                    bottom: 0px;
                    width: 90px;
                    height: 84px;
                    img{
                        width: 100%;
                        margin-right: 1.61vw;
                    }
                }
                .line{
                    width: 60px;
                    height: 2px;
                    margin: 24px auto 30px;
                    background: #59647E;
                }
            }
        }
        .farms{
            .background{
                color: #ffffff;
                background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin6-b.png');
                background-size: 100% auto;
                overflow: hidden;
                .title{
                    margin: 39px auto 23px;
                    text-align: center;
                    p:first-child{
                        font-size: 32px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        line-height: 44px;
                        letter-spacing: 3px;
                    }
                    p:last-child{
                        font-size: 12px;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        line-height: 17px;
                    }
                }
                .texts{
                    &-img{
                        width: 115px;
                        height: 98px;
                        margin: 0 23px 0 18px;
                        background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin1-b.png');
                        background-size: 100% 100%;
                    }
                    &-info{
                        margin-top: 6px;
                        font-size: 12px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        line-height: 17px;
                        p:last-child{
                            font-size: 30px;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            color: #04FF55;
                            line-height: 42px;
                        }
                    }
                }
            }
            .content{
                width: 338px;
                margin: 0 auto;
                position: relative;
                .item{
                    width: 338px;
                    // height: 843px;
                    height: 720px;
                    margin: -6px 0 30px 0;
                    color: #ffffff;
                    border: 2px solid;
                    border-image: linear-gradient(45deg, rgba(35, 71, 54, 1), rgba(51, 32, 91, 1)) 2 2;
                    background: #171C28;
                    box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.69);
                    position: relative;
                    .top{
                        height: 82px;
                        padding-left: 10px;
                        .top_element1, .top_element2{
                            width: 42px;
                            height: 42px;
                            background: #FEE476;
                            border: 2px solid #171C28;
                            border-radius: 50%;
                        }
                        .top_element2{
                            background: #EFB90B;
                            border: 0.104vw solid #000 !important;
                            margin-left: -10px;
                        }
                        .title{
                            margin-left: 12px;
                            font-size: 20px;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            line-height: 28px;
                        }
                        
                    }
                    .middle{
                        width: 318px;
                        padding: 10px 0 30px;
                        margin: 0 auto;
                        text-align: center;
                        background: #1D2332;
                        .table{
                            margin-top: 20px;
                            .title{
                                font-size: 14px;
                                font-family: AlibabaPuHuiTi_2_55_Regular;
                                color: #B3B3B3;
                                line-height: 20px;
                            }
                            .desc{
                                margin-top: 4px;
                                font-size: 28px;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                line-height: 40px;
                                span{
                                    font-size: 12px;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                    color: #B3B3B3;
                                    line-height: 12px;
                                }
                            }
                        }
                        .cancelStake{
                            margin: 0 auto;
                            margin-top: 30px;
                            color: #A4F238;
                            background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin4.png');
                            background-repeat: no-repeat;
                            background-size: 100% 100%; 
                        }
                    }
                    .bottom{
                        display: flex;
                        flex-direction: column;
                        &-item{
                            height: 132px;
                            padding: 0 15px 0 10px;
                            .table{
                                .title{
                                    font-size: 14px;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                    color: #B3B3B3;
                                    line-height: 20px;
                                }
                                .desc{
                                    margin-top: 4px;
                                    font-size: 28px;
                                    font-family: AlibabaPuHuiTi_2_85_Bold;
                                    line-height: 40px;
                                    span{
                                        font-size: 12px;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #B3B3B3;
                                        line-height: 12px;
                                    }
                                }
                            }
                            .harvest, .stake{
                                margin-top: 30px;
                                color: #A4F238;
                                background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin4.png');
                                background-repeat: no-repeat;
                                background-size: 100% 100%; 
                            }
                            .stake{
                                color: #363A54;
                                background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin12.png');
                            }
                        }
                        .line{
                            width: 318px;
                            height: 1px;
                            margin: 0 auto;
                            background: #59647E;
                        }
                    }
                }
            }
        }
        .Operation{
            width: 338px;
            margin: -2px auto 40px;
            padding: 40px 0;
            background: #171C28;
            border: 2px solid;
            border-image: linear-gradient(45deg, rgba(35, 71, 54, 1), rgba(51, 32, 91, 1)) 2 2;
            box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.69);
            .owrap{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;
                .btns{
                    color: #A4F238;
                    background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin4.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%; 
                }
                .btns.stake{
                    color: #363A54;
                    background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin12.png');
                }
                .btns + .btns{
                    margin-top: 24px;
                }
                ul{
                    li{
                        text-align: center;
                        .txt{
                            display: flex;
                            justify-content: center;
                            font-size: 14px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #B3B3B3;
                            line-height: 20px;
                        }
                        .number{
                            margin: 6px auto 20px;
                            font-size: 28px;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #04FF55;
                            line-height: 40px;
                        }
                    }
                    li + li{
                        margin-top: 7px;
                    }
                }
            }
            
        }
    }
</style>
