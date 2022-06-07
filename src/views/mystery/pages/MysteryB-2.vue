<template>
    <header-b path="/mystery" :type="2"></header-b>
    <!-- <div class="section">
        <div class="title">{{$t('message.mining.coming')}}</div>
    </div> -->
    <div class="boxBg">
        <div class="titles">
            <div class="title">{{$t('message.box.title_1')}}<br/>{{$t('message.box.title_2')}}</div>
            <div class="round">
                <div>{{$t('message.box.round_2')}}</div>
                <div>{{$t('message.box.round_1')}} #1</div> 
            </div>
            <div class="subtitle">{{$t('message.box.subtitle')}}</div>
            <div class="desc">
                {{$t('message.box.desc')}}
            </div>
        </div>
        <div class="vBg">
            <video-bg 
id="videobg" :sources="[`https://d2cimmz3cflrbm.cloudfront.net/nwbox/boxbanner.mp4`]">
            </video-bg>
            <div class="maskBlur"></div>
        </div>
        <!-- There must be this in the element, otherwise listening to readyasassetsf will not take effect -->
        <!-- <span style="color: #000">{{ readyAssetsF }} </span> -->
        <div class="blind" v-if="data.length > 0">
            <div class="title">{{ $t('message.box.type_title_1') }} <span>{{ $t('message.box.type_title_2') }}</span>({{ $t('message.box.testnet') }}) </div>
            <ul>
                <li>
                    <div class="boxVideo">
                        <img :src="data[0].info.image" v-if="!data[0].info.animation_url" alt="">
                        <video autoplay muted loop v-else>
                            <source :src="data[0].info.animation_url" type="video/mp4">
                        </video>
                    </div>
                    <div class="name">{{ data[0].info.name }} </div>
                    <div class="introduce" v-html="locale == 'cn' ? data[0].info.description_zh : data[0].info.description"></div>
                    <div class="price">
                        <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                        <!-- <div class="num">100.00</div> -->
                        <!-- <div class="exchange">≈$20</div> -->
                        <div class="num">$49.00</div>
                    </div>
                    <div class="btn">
                        <div class="purchase" :class="{'not-allowed': Remaining[0] == 0 || isProduction}" @click="purchase(0, Remaining[0])">{{$t('message.details.box_btn_pur')}}</div>
                        <div class="open" :class="{'not-allowed': data[0].number == 0}" @click="open(0, data[0].number)">{{$t('message.box.open')}}</div>
                        <div class="details" @click="toDetails(1)">{{$t('message.box.btn_det')}}</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="nothing" v-else>
            <!-- <div class="nothing" v-if="true"> -->
            <div class="txt">{{$t('message.assets.nothing')}}<a href="/">{{$t('message.assets.nothing_home')}}</a></div>
            <img src="@/assets/nwAssets/nothing.svg" alt="">
        </div>
        <footer-b></footer-b>
    </div>    
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted, watch } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
const router = useRouter()


const { proxy } = getCurrentInstance() as any;

const { LootBox, GiftBox, cyt, MarketV2 } = Web3.contracts;

const chainId: any = computed(() => store.state.user?.chainId);

const isProduction = ref(true);

const data: any = ref([]);
const idTemp: any = computed(() => store?.state.wallet?.idTemp);  // Full address
const Remaining: any = ref([0, 0, 0]);
watch(chainId, (newVal, oldVal: any) => {
    if(!oldVal || oldVal == -1) return;
    window.scrollTo(0,0);
    getBalance(chainId.value)
}, {immediate:true,deep:true});

watch(idTemp, (newVal, oldVal) => {
    if(!oldVal) return;
    getBalance(chainId.value)
    window.scrollTo(0,0);
}, {immediate:true,deep:true});



const getBalance = async (chainid: number) => {
    console.log('进来了');
    data.value = []; // 清空
    if(chainid == 80001){
        var result: any = await Web3.balanceOfBatch(LootBox.abi, LootBox.address, store.state.myBox?.box);
    }else if(chainid == 43113){
        var result: any = await Web3.balanceOfBatch(GiftBox.abi, GiftBox.address, store.state.myBox?.box);
    }else{
        var result: any = [0, 0, 0]
    }
    console.log(result, 'result');
    console.log(chainId.value);
    // getData(result)
    proxy.$api.get(`https://api.cyberpop.online/box/${9}`).then((result: any) => {
        let str: any = JSON.stringify(result.description);
        str = str.slice(0, str.length - 1);
        str = str.slice(1);
        str = str.replace(/\\n/g, "<br/>");
        console.log('str', str);
        
        let str_zh: any = JSON.stringify(result.description_zh);
        str_zh = str_zh.slice(0, str_zh.length - 1);
        str_zh = str_zh.slice(1);
        str_zh = str_zh.replace(/\\n/g, "<br/>");
        console.log('str_zh', str_zh);
        
        result.description = str;
        result.description_zh = str_zh;
        
        let temp = [];
        temp.push({
            id: 9,
            number: 0,
            info: result,
        })
        data.value = temp;
    })
}

const getData = async (boxData: any[]) => {
    console.log(boxData);
    let temp: any = [];
    data.value = [];
    (function loop(index){
        proxy.$api.get(`https://api.cyberpop.online/box/${index}`).then((result: any) => {
            temp.push({
                id: index,
                number: boxData[index],
                info: result,
            })
            if (++index < boxData.length) {
                loop(index);
            } else {
                data.value = temp;
                console.log(data._rawValue);
                console.log("over1!!!!!");
            }
        })
    })(0)
    if(chainId.value != 80001 || chainId.value == 56) {
        Remaining.value = [0, 0, 0];
        return; // At present, only Mumbai can buy boxes with
    }
    let LootBox_result: any = await Web3.balanceOfBatch(LootBox.abi, LootBox.address, store.state.myBox?.box, MarketV2.address); // 查询已上架的资产
    Remaining.value = [1, 0, 0] || LootBox_result;
    console.log(Remaining.value, 'Remaining.valueRemaining.valueRemaining.valueRemaining.value');
}
const toDetails = (type:any) => {
    router.push({ name: 'details', query:{ type }})
}

// 開盒子
const open = async (boxId: any, number: any) => {
    // getLast(); // Query the last asset opened immediately in the asset contract
    if(number == 0) return;
    store.dispatch('user/xplanChangeAni', true);
    store.dispatch('user/TipsState', {show: true, info: { hasLoading: false, hasClose: true, title: t('message.box.opening'), content: t('message.box.open_text'), addNetwork: false, boxId: boxId, haveNFT: number }});
}

const purchase = async (boxId: number, number: any) => {
    // let result = Web3.balanceOfBatch(MarketV2.abi, MarketV2.address, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], true);
    // console.log(result);
    if(number == 0 || isProduction.value) return;
    store.dispatch('user/xplanChangeAni', true);
    store.dispatch('myBox/purchaseState', { show: true, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 0, boxId, haveNFT: number || 1 }});
}

onMounted(() => {
    window.scrollTo(0,0);
    setTimeout(() => {
        getBalance(chainId.value)
    }, 1000);
    if(process.env.NODE_ENV == 'development') isProduction.value = false; 
})

</script>
<style lang="less" scoped>
    .section{
        z-index: 8;
        position: fixed;
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
        display: flex;
        flex-direction: column;
        color: #FFFFFF;
        background-color: #000000;
        overflow: hidden;
        .titles{
            z-index: 1;
            margin-left: 31px;
            .title{
                margin-top: 61px;
                height: 95px;
                font-size: 40px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 47px;
                animation: fadeInUp .8s linear;
            }
            .round{
                display: flex;
                align-items: flex-end;
                height: 53px;
                margin-top: 8px;
                div:nth-child(1){
                    width: 140px;
                    font-size: 67px;
                    font-family: AlibabaPuHuiTi_2_105_Heavy;
                    line-height: 53px;
                    background: linear-gradient(76deg, #8900FF 0%, #FFFFFF 30%, #00FFBF 46%, #9C3DFF 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                div:nth-child(2){
                    width: 94px;
                    height: 28px;
                    font-size: 14px;
                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                    color: #000000;
                    line-height: 30px;
                    text-align: center;
                    background-color: #04FFA2;
                    clip-path: polygon(0 0, 100% 0, 100% 65%, 92% 100%, 0 100%);
                }
            }
            .subtitle{
                width: 273px;
                height: 60px;
                margin: 14px 0 17px;
                font-size: 18px;
                color: #04FFA2;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 30px;
                letter-spacing: 2px;
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
        .vBg{
            position: relative;
            height: 348px;
            margin-top: -116px;
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
            .maskBlur{
                position: absolute;
                bottom: -50px;
                width: 100%;
                height: 77px;
                background: linear-gradient(180deg, rgba(0, 0, 0,0) 0, rgba(0, 0, 0, 1) 60%);
            }
        }
        .blind{
            position: relative;
            background: #000000;
            .title{
                margin-bottom: 8px;
                font-size: 27px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 63px;
                text-align: center;
                span{
                    background: linear-gradient(254deg, #04FFA2 0%, #37D4BA 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
            ul{
                padding-bottom: 55px;
                background-image: url('../../../assets/nwbox/boxBg-phone.png');
                background-repeat: no-repeat;
                background-position: center bottom;
                background-size: 100% auto;
                li{
                    // display: flex;
                    width: 334px;
                    // height: 708px;
                    margin: 0 auto 31px;
                    padding: 24px 30px 27px;
                    background: #1A1728;
                    border-radius: 2px;
                    border: 2px solid #434248;
                    text-align: center;
                    .boxVideo{
                        position: relative;
                        width: 274px;
                        height: 274px;
                        border-radius: 10px;
                        overflow: hidden;
                        video{
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%,-50%);
                            width: 134%;
                        }
                        .third{
                            width: 176%;
                        }
                    }
                    .name{
                        margin: 14px 0 8px;
                        font-size: 22px;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        line-height: 39px;
                    }
                    .introduce{
                        // flex: 1;
                        width: 283px;
                        min-height: 126px;
                        font-size: 14px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #FFFFFF;
                        line-height: 18px;
                    }
                    .price{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 10px 0 17px;
                        img{
                            width: 35px;
                            height: 35px;
                        }
                        .num{
                            // width: 102px;
                            font-size: 33px;
                            // font-family: AlibabaPuHuiTi_2_105_Heavy;
                            font-family: Oswald-Regular;
                            font-weight: 900;
                            color: #F1BF34;
                            line-height: 46px;
                            text-align: right;
                        }
                        .exchange{
                            margin-left: 16px;
                            font-size: 19px;
                            // font-family: AlibabaPuHuiTi_2_55_Regular;
                            font-family: Oswald-Regular;
                            font-weight: 900;
                            color: #B3B3B3;
                            line-height: 26px;
                        }
                    }
                    .btn{
                        width: 214px;
                        margin: 0 auto;
                        font-size: 20px;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        line-height: 54px;
                        .purchase, .open{
                            width: 100%;
                            height: 54px;
                            margin-bottom: 17px;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/purchase.png');
                            background-size: 100% 100%;
                            cursor: pointer;
                        }
                        .details{
                            width: 100%;
                            height: 54px;
                            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/cancle.png');
                            background-size: 100% 100%;
                            cursor: pointer;
                        }
                        .not-allowed{
                            cursor:not-allowed;
                            opacity: .4;
                        }
                    }
                }
            }
        }
        .nothing{
            height: 80vh;
            text-align: center;
            padding-bottom: 7.55vw;
            .txt{
                height: 1.04vw;
                font-size: .83vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #B1B5C3;
                line-height: 1.04vw;
                text-align: center;
                margin-top: 70px;
                a{
                    color: #04FFA2;
                    text-decoration: none;
                    cursor: pointer;
                }
            }
            img{
                margin-top: 10vw;
                width: 40.75vw;
            }
        }
    }
</style>
