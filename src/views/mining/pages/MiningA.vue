<template>
    <header-a path="/mining" :type="1"></header-a>
    <div class="section flex_centent_center">
        <div class="title">{{$t('message.mining.coming')}}</div>
    </div>
    <div class="mining">
        <div class="banner">
            <div class="titles">
                <div class="title">{{$t('message.mining.title')}}</div>
                <div class="subtitle">{{$t('message.mining.subtitle')}}</div>     
            </div>
            <div class="total">
                <div class="progressBall">
                    <img class="ballBorder" src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwmining/ballBorder.svg" alt="">
                    <div class="ball-inner"></div>
                </div>
                <div class="right flex_center">
                    <div class="right_content">
                        <div class="total-title">{{$t('message.mining.pool_amount')}}</div>
                        <div class="price">-- --</div>
                        <!-- <div class="price">{{ Number(getTotalSupplyCoin) + Number(getTotalSupply) }}</div> -->
                        <!-- <div class="total-subtitle">{{$t('message.mining.pool')}}:{{ getTotalSupply }}</div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="myAssets">
            <div class="item1">
                <div class="left">
                    {{$t('message.mining.mycyt')}} <span>{{ mycyt }}</span>
                </div>
                <div class="right button getcytbtn">
                    {{$t('message.mining.getcyt')}}
                </div>
            </div>
            <div class="line"></div>
            <div class="item2">
                <div class="left">
                    {{$t('message.mining.mycoin')}} <span>{{ mycoin }}</span>
                </div>
                <div class="right coin_logo">
                    <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin9.png" alt="">
                </div>
            </div>
        </div>
        <div class="Operation">
            <div class="owrap">
                <ul class="flex_align_center">
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
                    <div class="bg"></div>
                    <div class="button">{{$t('message.mining.Cancel')}}</div>
                </div>
                <div class="btns btnfont" @click="harvest">
                    <div class="bg"></div>
                    <div class="button">{{$t('message.mining.Harvest_btn')}}</div>
                </div>
            </div>
        </div>
        <!-- <ul class="data">   
            <li>
                <div>
                    <div class="txt">{{$t('message.mining.total_power')}} <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin5.png" alt=""> </div>
                    <div class="percent">--</div>
                </div>
            </li>
            <div class="line"></div>
            <li>
                <div>
                    <div class="txt">{{$t('message.mining.total_staked')}}</div>
                    <div class="percent">{{ getTotalSupply }}</div>
                </div>
            </li>
            <div class="line"></div>
            <li>
                <div>
                    <div class="txt">{{$t('message.mining.percyt_earn')}}</div>
                    <div class="percent">{{ rewardPerToken.toFixed(6) }}/s</div>
                </div>
            </li>
            <div class="line"></div>
            <li>
                <div>
                    <div class="txt">{{$t('message.mining.total_Tokens')}} ≈ $5,278,606</div>
                    <div class="percent">$--</div>
                </div>
            </li>
            <div class="element1"></div>
            <div class="element2"></div>
            <div class="element3"></div>
        </ul> -->
        <!-- <div class="mystaked">
            <ul>
                <li>
                    <div>
                        <p class="title">{{$t('message.mining.my_staked')}}</p>
                        <p> <span class="number">{{ myStakCyt }}</span></p>
                    </div>
                </li>
                <div class="line"></div>
                <li>
                    <div>
                        <p class="title">{{$t('message.mining.my_Prop')}}</p>
                        <p> <span class="number">≈ {{ floorTofixed((myStakCyt / getTotalSupply * 100),2) }}%</span></p>
                    </div>
                </li>
                <li>
                    <div id="Chart" style="width:100%; height: 100%;"></div>
                </li>
                <li>
                    <div>
                        <p class="title">{{$t('message.mining.my_tokens')}}≈ $0</p>
                        <p> <span class="number">--</span></p>
                    </div>
                </li>
            </ul>
            <div class="Harvest flex_between_center">
                <div class="texts">
                    <div class="exchange">{{ $t('message.mining.you_earn') }} (COIN)</div>
                    <div class="price">{{ earned }}</div>
                </div>
                <div class="button" @click="harvest">{{$t('message.mining.Harvest_btn')}}</div>
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
                    <div class="have-stak" @click="stakingCyt" v-else>
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
                        <p>{{$t('message.mining.your_staking')}}: {{ myStakCyt }} <br> {{$t('message.mining.current_day')}}: {{ myTime > 0 ? myTime : $t('message.mining.finish_receive')}}</p>
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
            <!-- <div class="title">{{$t('message.mining.Days')}}</div> -->
            <div class="progress flex_align_center">
                <div class="cwrap">
                    <div class="content">
                        <div :style="{'width': progress + '%'}"></div>
                    </div>
                    <div class="date flex_between">
                        <div class="total_day">{{$t('message.mining.current_pro')}}：<span class="white">{{floorTofixed(progress,2)}}%</span></div>
                        <div class="total_day">{{$t('message.mining.cycle_days')}}: <span>30{{$t('message.mining.day')}}</span></div>
                    </div>
                </div>
                <!-- <div id="Chart"></div> -->
            </div>
        </div>
        <div class="farms">
            <div class="background">
                <div class="elements flex_between">
                    <div class="left flex_align_center">
                        <div class="img_title"></div>
                        <div class="texts">
                            <p class="title">{{$t('message.mining.total_lp')}}</p>
                            <p class="price">{{ getTotalSupplyCoin }}</p>
                        </div>
                    </div>
                    <div class="right">
                        <div>
                            <div>
                                <p>{{$t('message.mining.farms')}}</p>
                                <p>{{$t('message.mining.farms_subtitle')}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="item" v-for="item in 1" :key="item">
                    <div class="top flex_align_center">
                        <div class="top_element1"></div>
                        <div class="top_element2"></div>
                        <!-- <div class="table">
                            <div class="title">{{$t('message.mining.Stake_LP')}}</div>
                            <div class="desc">CYT-YOOSHI</div>
                        </div>
                        <div class="table">
                            <div class="title">{{$t('message.mining.TVL')}}</div>
                            <div class="desc">$--</div>
                        </div> -->
                        <div class="table">
                            <div class="title">{{$t('message.mining.APR')}}</div>
                            <div class="desc">{{ floorTofixed((myStakCytCoin / getTotalSupplyCoin * 100),2) }}%</div>
                        </div>
                        <div class="table">
                            <div class="title">{{$t('message.mining.your_staked')}}</div>
                            <div class="desc">{{ myStakCytCoin }} <span class="tag">COIN</span> </div>
                        </div>
                        <div class="table">
                            <div class="title">{{$t('message.mining.rewards_in')}}</div>
                            <div class="desc">
                                <p>{{ rewardPerTokenCoin.toFixed(6) }} COIN <span>/s</span> </p>
                                <!-- <p>318 CYT<span>/{{$t('message.mining.DAY')}}</span> </p>
                                <p>318 BNB<span>/{{$t('message.mining.DAY')}}</span> </p> -->
                            </div>
                        </div>
                        <div class="table cancelStake btnfont" @click="cancelStake(2)">
                            <div class="bg"></div>
                            <div>{{$t('message.mining.Cancel')}}</div>
                        </div>
                    </div>
                    <div class="bottom flex_align_center">
                        <div class="table">
                            <div class="title">{{$t('message.mining.Earned')}}</div>
                            <div class="desc">≈ {{ earnedCoin }}</div>
                        </div>
                        <div class="Harvest harvestbtn btnfont" @click="stakingCoin(2)">
                            <div class="bg"></div>
                            <div>{{$t('message.mining.Harvest_btn')}}</div>
                        </div>
                        <div class="stake">
                            <div class="staked">
                                <p class="title">{{$t('message.mining.Staked_cyt')}}</p>
                                <div class="desc">{{ myStakCytCoin }}</div>
                            </div>
                            <div class="button stakebtn btnfont" @click="stakingCoin(1)">
                                {{$t('message.mining.Stake_btn')}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer-a></footer-a>
    <!-- 质押完成领取奖励 -->
    <FinishedA ref="Finished" v-if="isShowFinished" :isShowTips="isShowFinished" :isCoin="stakingCoinType" :amount="finishGetNFT" @closeFinshed="isShowFinished = false"></FinishedA>
    <!-- 取消质押弹窗 -->
    <CancelStakeA ref="SelectNFT" v-if="isShowCancelStake" :isShowTips="isShowCancelStake" :isCoin="stakingCoinType" @closeFinshed="isShowCancelStake = false"></CancelStakeA>
    <!-- 选择NFT质押 -->
    <SelectNFTA ref="SelectNFT" v-if="isShowSelectNFT" :isShowTips="isShowSelectNFT"  @closeFinshed="isShowSelectNFT = false"></SelectNFTA>
    <!-- Switch network Popup -->
    <!-- <wrongNetWorkA :isShowTips="isShowTips" @changeSwitch="changeSwitch"></wrongNetWorkA> -->
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted, watch } from 'vue'


import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import { useI18n } from 'vue-i18n';
import FinishedA from '@/components/staking/FinishedA.vue';
import SelectNFTA from '@/components/staking/selectNFTA.vue';
import CancelStakeA from '@/components/staking/cancelStakeA.vue';
import * as echarts from 'echarts';
import { value } from 'dom7';

const { staking, cytV2, CYTStakingRewards } = Web3.contracts;
const { t, locale } = useI18n();
const router = useRouter()
const realId = computed(() => store?.state.wallet?.realId);  // Asterisk address
const chainId: any = computed(() => store.state.user?.chainId);
const readyAssets: any = computed(() => store.state.myAssets?.readyAssets ); // Status value of the connection
const readyAssetsCoin: any = computed(() => store.state.staking?.readyAssetsCoin ); // Status value of the connection
const mountedInit: any = ref(false);
watch(readyAssets, (newVal: number, oldVal: any) => {
    console.log(newVal, oldVal, 'readyAssets');
    if(newVal <= 0 || oldVal == -1) return;
    init()
    console.log('her3');
}, {immediate:true,deep:true});


watch(readyAssetsCoin, (newVal: number, oldVal: any) => {
    console.log(newVal, oldVal, 'readyAssetsCoin');
    if(newVal <= 0 || oldVal == -1) return;
    initCoin()
    console.log('her3');
}, {immediate:true,deep:true});


watch(chainId, (newVal: any, oldVal: any) => {
    console.log(newVal, oldVal, 'chainId');
    if(newVal != 43113){
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.mining.chainId_msg')}})
        return;
    }
    if( !mountedInit.value ) return
    // if(!oldVal || oldVal == -1) return;
    init()
    initCoin()
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
console.log(Finished.value, 'Finished');


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
let greenImgSrc:any = ref('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwmining/whiteImg.png')
let whiteImgSrc:any = ref('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwmining/whiteImg.png')
let lockedImgSrc:any = ref('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwmining/locked.svg')

let greenBorderSrc:any = ref('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwmining/pledge-border1.svg')
let whiteBorderSrc:any = ref('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwmining/pledge-border2.svg')
let lockedBorderSrc:any = ref('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwmining/pledge-border3.svg')

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


// earn havrest

// init data
// staking coin get NFT
const init = async () => {
    getTotalSupply.value = await Web3.getTotalSupply(staking.abi, staking.address)
    // poolAmount.value = await Web3.notifyrewardamount(staking.abi, staking.address)
    // console.log(poolAmount.value, 'poolAmount')
    mycoin.value = await Web3.ERC20balanceOf(cytV2.abi, cytV2.address); // you have
    console.log(mycoin.value, 'mycoin');
    myStakCyt.value = await Web3.getBalanceOf(staking.abi, staking.address) // you have stake
    console.log(myStakCyt.value, 'myStakCyt.value');
    let DaysResult: any = await Web3.DaysRemaining(staking.abi, staking.address, 3) as number;
    earned.value = DaysResult.earned;
    rewardPerToken.value =  Number( DaysResult.rewardPerToken);
    myTime.value = DaysResult.result.toFixed(2);
    console.log(DaysResult, 'DaysResult');
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
    //                 fontSize: '14',
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
    //                 { value: getTotalSupply.value - myStakCyt.value, name:floorTofixed((100 - myRatio),2) + '%' },
    //                 { value: myStakCyt.value, name: myRatio + '%' },
    //             ],
    //             label:{  
    //                 show: true, 
    //                 position: 'inside',
    //                 formatter: '{b}',
    //                 fontSize: '14',
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
    earnedCoin.value = DaysResult.earned;
    rewardPerTokenCoin.value =  Number( DaysResult.rewardPerToken);
    console.log(DaysResult , 'DaysResultCoin');
}


// tofixed math.floor
const floorTofixed = (number: any, pow: any) => {
    if( !number || !pow ) return 0
    return (Math.floor(number * Math.pow(10, pow)) / 100).toFixed(pow);
}

onMounted(async () => {
    // myChart = echarts.init(document.getElementById("Chart") as HTMLElement)
    // let a = await Web3.rewards(staking.abi, staking.address)
    // let b = await Web3.rewards(CYTStakingRewards.abi, CYTStakingRewards.address)
    // console.log(a,b,'------------------')

    setTimeout(() => {
        if(chainId.value != 43113){
            mountedInit.value = true
            return;
        }
        init()
        initCoin()
    }, 1000);
    
    window.scrollTo(0,0);
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
    @keyframes pledgeAni{
        0% {
            transform: rotatYX(0deg);
        }
        100% {
            transform: rotateY(180deg);
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
    a {
        text-decoration: none;
    }
    .btnfont{
        width: 6.4vw;
        line-height: 2.08vw;
        text-align: center;
        font-size: 0.93vw;
        font-family: AlibabaPuHuiTi_2_85_Bold;
        cursor: pointer;
        .bg{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
    }
    .line{
        width: 0.104vw;
        height: 2.08vw;
        margin-top: 2vw;
        background: #59647E;
    }
    .section{
        z-index: 12;
        position: fixed;
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
    .mining{
        width: 100%;
        padding-top: 5.5vw;
        background-color: #000000;
        overflow: hidden;
        .banner{
            width: 100%;
            height: 25.78vw;
            background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwmining/banner-home.png');
            background-repeat: no-repeat;
            background-position: left top;
            background-size: 100% 100%; 
            padding-top: 12.01vw;
            // position: absolute;
            .titles{
                position: absolute;
                right: 0;
                right: 18.65vw;
                top: 23vw;
                text-align: right;
                .title{
                    font-size: 3.33vw;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    color: #FFFFFF;
                    line-height: 4.63vw;
                    letter-spacing: 6px;
                    filter: drop-shadow(0.155vw 0 0 #D236A5) drop-shadow(-0.15vw 0 0.05rem #72F0D9);
                }
                .subtitle{
                    font-size: 1.19vw;
                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                    color: #FFFFFF;
                    line-height: 1.66vw;
                    margin-right: 0.5vw;
                }
            }
            .total{
                display: flex;
                margin-top: 2.96vw;
                margin-left: 14.78vw;
                position: relative;
                z-index: 2;
                .progressBall{
                    display:inline-block;
                    position: relative;
                    z-index: 1;
                    width: 11.30vw;
                    height: 11.45vw;
                    background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwmining/ballBg.svg');
                    background-repeat: no-repeat;
                    background-position: left bottom;
                    background-size: 100% 100%; 
                    border-radius: 50%;
                    overflow: hidden;
                    transform-style:preserve-3d;
                    .ballBorder{
                        position: absolute;
                        margin-top: .2vw;
                        width: 100%;
                        height: 100%;
                    }
                    .ball-inner{
                        width: 22vw;
                        height: 22vw;    
                        border-radius:38%;
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
                    margin-left: 2.13vw;
                    .right_content{
                        .total-title{
                            height: 1.71vw;
                            font-size: 1.25vw;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            color: #FFFFFF;
                            line-height: 1.71vw;
                        }
                        .total-subtitle{
                            height: 1.45vw;
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #B4B4B4;
                            line-height: 1.45vw;
                        }
                        .price{
                                font-size: 3.07vw;
                            // font-family: AlibabaPuHuiTi_2_105_Heavy;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            font-weight: 900;
                            color: #04FF55;
                            line-height: 3.6vw;
                        }
                    }
                }
            }
        }
        .banner:before,.banner:after {
            content:"";
            display: table;
            clear:both;
        }
        .data{
            width: 60.78vw;
            height: 6.14vw;
            left: 0;
            right: 0;
            margin: 0 auto;
            position: absolute;
            display: flex;
            background: #171C28;
            box-shadow: 0px 12px 20px 0px rgba(0,0,0,.65);
            border: 2px solid #27E37C;
            z-index: 1;
            .element1{
                width: 1px;
                height: 1.82vw;
                background: #27E37C;
                position: absolute;
                right: -0.416vw;
                bottom: -0.416vw;
            }
            .element2{
                width: 6.56vw;
                height: 1px;
                background: #27E37C;
                position: absolute;
                right: -0.416vw;
                bottom: -0.416vw;
            }
            .element3{
                width: 3.12vw;
                height: 1px;
                background: #27E37C;
                position: absolute;
                left: 0;
                bottom: -0.416vw;
            }
            li{
                margin-top: 1.05vw;
                padding: 0 3.6vw;
                display: flex;
                justify-content: center;
                white-space: nowrap;
                .txt{
                    font-size: .98vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #B3B3B3;
                    line-height: 1.35vw;
                    display: flex;
                    align-items: center;
                    img{
                        margin-left: 0.5vw;
                        width: 1.04vw;
                    }
                }
                .percent{
                    font-size: 1.61vw;
                    line-height: 2.29vw;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #04FF55;
                }
            }
            li:first-child{
                // width: 16.87vw;
            }
            li:nth-child(3){
                // width: 17.13vw;
            }
            li:nth-child(5){
                // width: 26.56vw;
            }
        }
        .mystaked{
            width: 59.74vw;
            height: 6.66vw;
            margin: auto;
            margin-top: 6.14vw;
            background: #3F16A7;
            border: 1px solid #3F4043;
            position: relative;
            ul{
                display: flex;
                width: 100%;
                height: 100%;
                li{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    float: left;
                    height: 100%;
                    padding: 0 1.6vw;
                    color: #B3B3B3;
                    .title{
                        font-size: 0.98vw;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        line-height: 1.35vw;
                    }
                    .number_list{
                        display: flex;
                        align-items: center;
                    }
                    .number{
                        font-size: 1.61vw;
                        font-family: AlibabaPuHuiTi_2_85_Bold;
                        color: #FFFFFF;
                        line-height: 2.29vw;
                    }
                    .dollar{
                        display: inline-block;
                        padding-top: 0.2vw;
                        margin-left: 0.5vw;
                        font-size: 0.625vw;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        line-height: 0.88vw;
                    }
                }
                li:nth-child(1){
                    // width: 11.97vw;
                }
                li:nth-child(2){
                    // width: 11.91vw;
                }
                li:nth-child(4){
                    width: 17.29vw;
                    #Chart{
                        width: 100%;
                        height: 100%;
                        margin-left: -10vw;
                    }
                }
            }
            .Harvest{
                position: absolute;
                right: 0;
                top: 0;
                width: 19.11vw;
                height: 7.18vw;
                padding: 0 1.30vw .6vw 1.56vw;
                background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin3.png'); 
                background-size: 100% 100%;
                .texts{
                    .exchange{
                        font-size: 0.98vw;
                        font-family: AlibabaPuHuiTi_2_85_Bold;
                        color: #2C1469;
                        line-height: 1.35vw;
                        white-space: nowrap;
                    }
                    .price{
                        font-size: 1.61vw;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #3F16A7;
                        line-height: 2.29vw;
                    }
                }
                .button{
                    background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin8.png'); 
                    background-size: 100% 100%;
                    width: 6.92vw;
                    line-height: 2.55vw;
                    text-align: center;
                    font-size: 0.93vw;
                    font-family: AlibabaPuHuiTi_2_85_Bold;
                    color: #FFFFFF;
                    margin-top: 2vw;
                    cursor: pointer;
                    &:hover{
                        filter: drop-shadow(0 0 .2vw #7E52FF);
                    }
                }
            }
        }
        .more{
            text-align: center;
            margin-top: 2.08vw;
            img{
                width: 1.66vw;
                height: 1.04vw;
                -webkit-animation: arrow 2s linear infinite;
            }
        }
        .days{
            width: 60.78vw;
            height: 5.1vw;
            height: 12vw;
            margin: 0 auto;
            color: #fff;
            font-family: AlibabaPuHuiTi_2_85_Bold;;
            .title{
                margin: 2vw 0;
                font-size: 1.3vw;
                text-align: right;
            }
            .progress{
                position: relative;
                height: 10vw;
                .cwrap{
                    width: 100%;
                    margin-top: 3vw;
                }
                .content{
                    width: 100%;
                    height: 0.625vw;
                    display: flex;
                    font-size: 1vw;
                    background: #212737;
                    & > div{
                        width: 713px;
                        height: 100%;
                        background: #A4F238;
                        transition: all 0.5s ease-in-out;
                        position: relative;
                    }
                    & > div::after{
                        content: " ";
                        position: absolute;
                        background: #A4F238;
                        height: 200%;
                        width: 0.31vw;
                        right: 0;
                        top: -0.3vw;
    
                    }
                }
                .date{
                    margin-top: 1.4vw;
                    color: #B3B3B3;
                    font-size: 1.04vw;
                    span{
                        color: #fff;
                    }
                }
                #Chart{
                    position: absolute;
                    right: -20vw;
                    width: 80%;
                    height: 17vw;
                }
            }
            .date{
                margin-top: 1.4vw;
                color: #B3B3B3;
                font-size: 1.04vw;
                span{
                    color: #fff;
                }
            }
        }
        .pledge{
            width: 60.78vw;
            margin: 0 auto;
            .title{
                width: 100%;
                margin-top: 4.53vw;
                padding-right: .625vw;
                height: 1.77vw;
                font-size: 1.45vw;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                color: #FFFFFF;
                line-height: 1.77vw;
                text-align: right;
                span{
                    color: #EDFF00;
                    // font-family: Oswald-Regular;
                    // font-weight: 900;
                }
            }
            ul{
                width: 100%;
                margin-top: 2.76vw;
                display: flex;
                li{
                    position: relative;
                    width: 13.17vw;
                    height: 15.15vw;
                    background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwmining/pledgeBg.png');
                    background-repeat: no-repeat;
                    background-position: left top;
                    background-size: 100% 100%; 
                    .not-stak{
                    }
                    .have-stak{
                        height: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
                        color: #DFF;
                        text-align: center;
                        cursor: pointer;
                        p{
                            font-size: 1.04vw;
                            line-height: 1.3vw;
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
                            width: 5.62vw;
                            height: 6.19vw;
                            margin-bottom: 1vw;
                        }
                    }
                    .pledgeAni{
                        // animation: pledgeAni 0.2s linear;
                        // animation-fill-mode: forwards;
                    }
                    .top-txt{
                        width: 100%;
                        margin-top: .8vw;
                        font-size: .67vw;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        color: #FFFFFF;
                        line-height: .93vw;
                        text-align: center;
                        white-space: nowrap;
                    }
                    .bot-txt{
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: 3vw;
                        font-size: .93vw;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #FFFFFF;
                        line-height: 3vw;
                        text-align: center;
                        white-space: nowrap;
                        img{
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            width: 100%;
                            opacity: 0.46;
                            // height: 100%;
                        }
                    }
                    .greenNft > img:hover{
                        filter: drop-shadow(0 0 .2vw #04FF55);
                    }
                    .whiteNft > img:hover{
                        filter: drop-shadow(0 0 .2vw #ffffff);
                    }
                    .grayNft > img:hover{
                        filter: drop-shadow(0 0 .2vw #7E52FF);
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
                li + li{
                    margin-left: 2.76vw;
                }
            }
        }
        .myAssets{
            width: 60.78vw;
            height: 6.14vw;
            background: #171C28;
            box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.69);
            border: 2px solid;
            // margin: 5.78vw auto 1.56vw;
            margin: 0 auto;
            border-image: linear-gradient(45deg, rgba(35, 71, 54, 1), rgba(51, 32, 91, 1)) 2 2;
            display: flex;
            .item1, .item2{
                width: 50%;
                height: 100%;
                padding-left: 2.6vw;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 0.98vw;
                font-family: AlibabaPuHuiTi_2_85_Bold;
                color: #FFFFFF;
                .left{
                    display: flex;
                    align-items: center;
                }
                .right{

                }
                .button{
                    width: 7.03vw;
                    line-height: 2.7vw;
                    background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin10.png');
                    background-size: 100% 100%;
                    text-align: center;
                    font-size: 0.93vw;
                    margin-right: 2.29vw;
                    cursor: pointer;
                }
                .getcytbtn:hover{
                    filter: drop-shadow(0 0 .2vw #3f16a7);
                }
                .coin_logo{
                    width: 14.79vw;
                    height: 100%;
                    background: linear-gradient(90deg, rgba(88, 0, 255, 0) 0%, rgba(105, 0, 255, 0.6) 100%);
                    text-align: right;
                    img{
                        width: 5.78vw;
                        margin-right: 1.61vw;
                        margin-top: 0.4vw;
                    }
                }
                span{
                    font-size: 1.61vw;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    color: #04FF55;
                    margin-left: 1.04vw;
                }
            }
        }
        .farms{
            margin-bottom: 7.91vw;
            .background{
                height: 35.156vw;
                background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin6.png');
                background-size: auto 100%;
                .elements{
                    margin: 0 auto;
                    width: 61.3vw;
                    padding-top: 4.73vw;
                    .left{
                        height: 15.26vw;
                        .img_title{
                            background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin1.png');
                            background-size: auto 100%;
                            width: 17.23vw;
                            height: 100%;
                        }
                        .texts{
                            .title{
                                font-size: 1.25vw;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                color: #FFFFFF;
                                line-height: 1.71vw;
                            }
                            .price{
                                font-size: 3.07vw;
                                font-family: AlibabaPuHuiTi_2_105_Heavy;
                                color: #04FF55;
                                line-height: 4.32vw;
                            }
                        }
                    }
                    .right{
                        & > div{
                            height: 100%;
                            display: flex;
                            align-items: center;
                            flex-wrap: wrap-reverse;
                            color: #FFFFFF;
                            div{
                                & > :first-child{
                                    font-size: 3.33vw;
                                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                                    line-height: 4.63vw;
                                    text-align: right;
                                    filter: drop-shadow(0.155vw 0 0 #D236A5) drop-shadow(-0.15vw 0 0.05rem #72F0D9);
                                }
                                & > :last-child{
                                    font-size: 1.19vw;
                                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                    line-height: 1.66vw;
                                }
                            }
                        }
                    }
                }
            }
            .content{
                margin: 0 auto;
                width: 61.3vw;
                margin-top: -18.75vw;
                position: relative;
                .item{
                    background: #171C28;
                    border: 2px solid;
                    border-image: linear-gradient(45deg, rgba(35, 71, 54, 1), rgba(51, 32, 91, 1)) 2 2;
                    height: 12.81vw;
                    margin-bottom: 2.08vw;
                    position: relative;
                    .top{
                        height: 6.14vw;
                        background: #171C28;
                        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.69);
                        padding-left: 1.56vw;
                        position: relative;
                        z-index: 11;
                        .top_element1, .top_element2{
                            width: 2.7vw;
                            height: 2.7vw;
                            background: #FEE476;
                            border: 0.104vw solid #171C28;
                            border-radius: 50%;
                        }
                        .top_element2{
                            background: #EFB90B;
                            border: 0.104vw solid #000 !important;
                            margin-left: -0.704vw;
                        }
                        .table{
                            margin-left: 3.2vw;
                            .title{
                                font-size: 0.98vw;
                                font-family: AlibabaPuHuiTi_2_55_Regular;
                                color: #B3B3B3;
                                line-height: 1.35vw;
                            }
                            .desc{
                                font-size: 1.35vw;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                color: #FFFFFF;
                                line-height: 1.92vw;
                            }
                        }
                        .table + .table{
                            margin-left: 4vw;
                        }
                        .cancelStake{
                            color: #A4F238;
                            position: absolute;
                            right: 2vw;
                            bottom: 1.3vw;
                            .bg{
                                background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin4.png');
                                background-size: 100%; 
                                &:hover{
                                    filter: drop-shadow(0 0 .2vw #A4F238);
                                }
                            }
                        }
                        .top_element5{
                            padding-top: 1vw;
                            p{
                                font-size: 0.93vw;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                color: #FFFFFF;
                                line-height: 1.3vw;
                                span{
                                    color: #B3B3B3;
                                    font-size: 0.83vw;
                                }
                            }
                        }
                    }
                    .bottom{
                        padding-left: 9.4vw;
                        height: 6.66vw;
                        .table{
                            .title{
                                font-size: 0.98vw;
                                font-family: AlibabaPuHuiTi_2_55_Regular;
                                color: #B3B3B3;
                                line-height: 1.35vw;
                            }
                            .desc{
                                font-size: 1.61vw;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                color: #FFFFFF;
                                line-height: 2.29vw;
                            }
                        }
                        .bottom_element2{
                            position: absolute;
                            left: 18vw;
                        }
                        .Harvest{
                            color: #A4F238;
                            position: absolute;
                            left: 28.5vw;
                            bottom: 1.3vw;
                            .bg{
                                background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin4.png');
                                background-size: 100%; 
                                &:hover{
                                    filter: drop-shadow(0 0 .2vw #A4F238);
                                }
                            }
                        }
                        .stake{
                            position: absolute;
                            right: 0;
                            z-index: 0;
                            bottom: 0;
                            width: 21.92vw;
                            height: 6.66vw;
                            background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin11.png');
                            background-size: 100%; 
                            .staked{
                                position: absolute;
                                top: 1.8vw;
                                left: 3.5vw;
                                .title{
                                    font-size: 0.98vw;
                                    font-family: AlibabaPuHuiTi_2_55_Regular;
                                    color: #B3B3B3;
                                    line-height: 1.35vw;
                                }
                                .desc{
                                    font-size: 1.61vw;
                                    font-family: AlibabaPuHuiTi_2_85_Bold;
                                    color: #FFFFFF;
                                    line-height: 2.29vw;
                                }
                            }
                            .button{
                                position: absolute;
                                right: 2vw;
                                bottom: 1.3vw;
                                color: #363A54;
                                background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin12.png');
                                background-size: 100%; 
                                &:hover{
                                    filter: drop-shadow(0 0 .2vw #A4F238);
                                }
                            }
                        }
                    }
                }
            }
        }
        .Operation{
            width: 60.78vw;
            height: 6.14vw;
            background: #171C28;
            box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.69);
            border: 2px solid;
            margin: -.1vw auto 1.56vw;
            border-image: linear-gradient(-45deg, rgba(35, 71, 54, 1), rgba(51, 32, 91, 1)) 2 2;
            .owrap{
                width: 100%;
                height: 100%;
                padding: 0 1.8vw 0 2.6vw;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                background: linear-gradient(-90deg, rgba(88, 0, 255, 0) 70%, rgba(105, 0, 255, 0.6) 100%);
                .btns{
                    position: relative;
                    color: #A4F238;
                    .bg{
                        background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin4.png');
                        background-size: 100% 100%; 
                        &:hover{
                            filter: drop-shadow(0 0 .2vw #A4F238);
                        }
                    }
                }
                .btns.stake{
                    color: #363A54;
                    background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwStaking/stakin12.png');
                    background-size: 100% 100%; 
                    &:hover{
                        filter: drop-shadow(0 0 .2vw #A4F238);
                    }
                }
                .btns + .btns{
                    margin-left: 2vw;
                }
                ul{
                    flex: 1;
                    li{
                        flex: 1;
                        .txt{
                            font-size: .98vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #B3B3B3;
                            line-height: 1.35vw;
                        }
                        .number{
                            font-size: 1.61vw;
                            line-height: 2.29vw;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #04FF55;
                        }
                    }
                }
            }
            
        }
    }

    @media screen {
        @media (max-width: 1020px) {
            .data{
                height: 6.8vw !important;
            }
            .top-txt{
                transform: scale(.8);
            }
            .bot-txt > div{
                transform: scale(.8);
            }
        }
    }
</style>
