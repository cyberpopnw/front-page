<template>
    <header-a path="/mystery" :type="2"></header-a>
    <!-- <div class="section">
        <div class="title">{{$t('message.mining.coming')}}</div>
    </div> -->
    <div class="boxBg">
        <div class="video">
            <video-bg 
id="videobg" :sources="[`https://d2cimmz3cflrbm.cloudfront.net/nwbox/boxbanner.mp4`]">
            </video-bg>
            <div class="titles"> 
                <div class="titles-wrap">
                    <div class="title">{{$t('message.box.title_1')}}<br/>{{$t('message.box.title_2')}}</div>
                    <div class="round">
                        <div>{{$t('message.box.round_1')}} #1</div> 
                        <div>{{$t('message.box.round_2')}}</div>
                    </div>
                    <div class="subtitle">{{$t('message.box.subtitle')}}</div>
                    <div class="desc">
                        {{$t('message.box.desc')}}
                    </div>
                </div>
            </div>
            <div class="maskBlur"></div>
        </div>
        <!-- There must be this in the element, otherwise listening to readyasassetsf will not take effect -->
        <div class="blind" v-if="data.length > 0">
            <div class="title">{{ $t('message.box.type_title_1') }} <span>{{ $t('message.box.type_title_2') }} </span> </div>
            <ul>
                <li>
                    <div class="boxVideo" @click="toDetails(9)">
                        <img :src="data[0].info.image" v-if="!data[0].info.animation_url" alt="">
                        <video class="third" autoplay muted loop v-else>
                            <source :src="data[0].info.animation_url" type="video/mp4">
                        </video>
                    </div>
                    <div class="weapon">
                        <div class="name"><span class="name-content">{{ data[0].info.name }}</span></div>
                        <div class="left_over">Left: <span class="number">{{ Remaining[0] + '/2000'}}</span></div>
                        <div class="introduce" v-html="locale == 'cn' ? data[0].info.description_zh : data[0].info.description"></div>
                        <div class="price">
                            <!-- <img src="@/assets/nwbox/nfts-icon.svg" alt="">
                            <div class="num">100.00</div>
                            <div class="exchange">≈$49.00</div> -->
                            <div class="num">$49.00</div>
                        </div>
                        <div class="btn">
                            <div class="purchase" :class="{'not-allowed': Remaining[0] == 0 || isProduction}" @click="purchase(0, Remaining[0])">{{$t('message.details.box_btn_pur')}}</div>
                            <div class="open" :class="{'not-allowed': data[0].number == 0 || chainId == 56}" @click="open(0, data[0].number)">{{$t('message.box.open')}}</div>
                            <div class="details" @click="toDetails(9)">
                                <span class="details-text">{{$t('message.box.btn_det')}}</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="nothing" v-else>
            <!-- <div class="nothing" v-if="true"> -->
            <loading v-if="true" :show="true" :index="0.5" v-show="data.length == 0" />
            <div class="txt">{{$t('message.assets.nothing')}}<a href="/">{{$t('message.assets.nothing_home')}}</a></div>
            <img src="@/assets/nwAssets/nothing.svg" alt="">
        </div>
        <footer-a></footer-a>
    </div>
</template> 
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted, watch } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import router from '@/router';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

const { GiftBox, LootBox, Cyborg, MarketV2, cyt } = Web3.contracts;

const { proxy } = getCurrentInstance() as any;

const Remaining = ref([0, 0, 0]);

const isProduction: any = ref(true);
const chainId: any = computed(() => store.state.user?.chainId);
const idTemp: any = computed(() => store?.state.wallet?.idTemp);  // Full address
watch(chainId, (newVal, oldVal: any) => {
    if(!oldVal || oldVal == -1) return;
    window.scrollTo(0,0);
    data.value = [];
    getBalance(chainId.value)
}, {immediate:true,deep:true});

watch(idTemp, (newVal, oldVal) => {
    if(!oldVal) return;
    window.scrollTo(0,0);
    data.value = [];
    getBalance(chainId.value)
}, {immediate:true,deep:true});

const data: any = ref([]);
const loadingState: any = ref(true)


const getBalance = async (chainid: number) => {
    if(chainid == 80001){
        var result: any = await Web3.balanceOfBatch(LootBox.abi, LootBox.address, store.state.myBox?.box);
    }else if(chainid == 43113){
        var result: any = await Web3.balanceOfBatch(GiftBox.abi, GiftBox.address, store.state.myBox?.box);
    }else{
        var result: any = store.state.myBox?.box
    }
    console.log(result, 'result');
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
        console.log(chainId.value, 'chainId');
        
        temp.push({
            id: 9,
            number: chainId.value != 56 ? 0 : 0, // not bsc
            info: result,
        })
        loadingState.value = false;
        data.value = temp;
    })
}

// open box
const open = (boxId: any, number: any) => {
    if(number == 0 || chainId.value == 56) return;
    // getLast(); // Query the last asset opened immediately in the asset contract
    store.dispatch('user/xplanChangeAni', true);
    store.dispatch('user/TipsState', {show: true, info: { hasLoading: true, hasClose: true, title: t('message.box.opening'), content: t('message.box.open_text'), addNetwork: false, boxId: boxId, haveNFT: number }});
}

const getData = async (boxData: any[]) => {
    let temp: any = [];
    data.value = [];
    (function loop(index){
        if(index > 2){
             console.log('over!');
             data.value = temp;
             return;
        }
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
                loadingState.value = false;
                console.log("over1!!!!!");
            }
        })
    })(0)
    if(chainId.value != 80001 || chainId.value != 56) {
        Remaining.value = [0, 0, 0]
        return; // At present, only Mumbai can buy boxes with
    }
    let LootBox_result: any = await Web3.balanceOfBatch(LootBox.abi, LootBox.address, store.state.myBox?.box, MarketV2.address); // Query assets on the shelves
    Remaining.value = LootBox_result;
    console.log(Remaining.value, 'RemainingRemainingv');
}


const toDetails = (type:any) => {
    console.log(type, 'type');
    router.push({ name: 'details', query: { type }})
}

const purchase = async (boxId: number, number: any) => {
    if(number == 0 || isProduction.value) return;
    store.dispatch('myBox/purchaseState', { show: true, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 0, boxId, haveNFT: number || 1 }});
}

const getNFTData: any = async (res: any) => {
    proxy.$api.get(`https://api.cyberpop.online/${'role'}`).then((result:any) => {
         console.log(result);
         
    }).catch((err:any) => {
        console.log(err); 
    })
}


onMounted(() => {
    window.scrollTo(0,0);
    setTimeout(() => {
        getBalance(chainId.value)
    }, 1000);
    store.dispatch('user/showDialog',{show: false, info: {}});// close message dialog
    store.dispatch('wallet/metaChange',false);
    if(process.env.NODE_ENV == 'development') isProduction.value = false; //Judge the environment
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
        background: #080707;
        .VideoBg{
            height: 100% !important;
        }
        .video{
            position: relative;
            width: 100%;
            height: 33.64vw;
            margin-top: 5.5vw;
            background-color: #000000;
            .titles{
                display: flex;
                align-items: center;
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                .titles-wrap{
                    width: 100%;
                    margin-left: 19.16vw;
                    overflow: hidden;
                    .title{
                        margin-top: 5.46vw;
                        // font-size: 2.6vw;
                        font-size: 4.11vw;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #FFFFFF;
                        // line-height: 3vw;
                        line-height: 4.37vw;
                        animation: fadeInUp .8s linear;
                    }
                    .round{
                        display: flex;
                        align-items: flex-end;
                        height: 4.58vw;
                        margin-top: .625vw;
                        div:nth-child(1){
                            width: 6.77vw;
                            height: 1.92vw;
                            margin-right: 1.77vw;
                            font-size: .98vw;
                            font-family: AlibabaPuHuiTi_2_75_SemiBold;
                            color: #000000;
                            line-height: 2vw;
                            text-align: center;
                            background-color: #04FFA2;
                            clip-path: polygon(0 0, 100% 0, 100% 65%, 92% 100%, 0 100%);
                        }
                        div:nth-child(2){
                            font-size: 5.78vw;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            line-height: 4.58vw;
                            background: linear-gradient(76deg, #8900FF 0%, #FFFFFF 30%, #00FFBF 46%, #9C3DFF 100%);
                            background-clip: text;
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                        }
                    }
                    .subtitle{
                        margin: .78vw 0 1.14vw;
                        font-size: 1.45vw;
                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                        color: #04FFA2;
                        line-height: 1.87vw;
                    }
                    .desc{
                        width: 27.86vw;
                        margin-bottom: 7.03vw;
                        font-size: .88vw;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #FFFFFF;
                        line-height: 1.71vw;
                    }
                }
            }
            .maskBlur{
                position: absolute;
                bottom: -1vw;
                width: 100%;
                height: 4vw;
                background: linear-gradient(180deg, rgba(8, 7, 7,0) 0, rgba(8, 7, 7, 1) 50%);
            }
        }
        .blind{
            background: #080707;
            .title{
                margin-top: 1.35vw;
                font-size: 1.77vw;
                color: #ffffff;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 4.06vw;
                text-align: center;
                span{
                    background: linear-gradient(254deg, #04FFA2 0%, #37D4BA 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
            ul{
                padding: .3vw 0 2.91vw;
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/boxBg.png');
                background-repeat: no-repeat;
                background-position: center bottom;
                background-size: 100% auto;
                li{
                    display: flex;
                    width: 54.84vw;
                    // height: 23.64vw;
                    margin: 0 auto 2.03vw;
                    padding: 2.16vw 1.97vw;
                    background: #1A1728;
                    border-radius: .42vw;
                    border: .2vw solid #1A1728;
                    transition: all 0.2s ease;
                    .boxVideo{
                        position: relative;
                        width: 19.32vw;
                        height: 19.32vw;
                        margin-right: 3.2vw;
                        border-radius: 1vw;
                        overflow: hidden;
                        video{
                            position: absolute;
                            top: 50.2%;
                            left: 50%;
                            width: 100%;
                            transform: translate(-50%,-50%);
                        }
                        img{
                            width: 100%;
                            height: 100%;
                        }
                        .third{
                            width: 100%;
                        }
                    }
                    .weapon{
                        width: 27.86vw;
                        flex-direction: column;
                        color: #ffffff;
                        .name{
                            height: 1.77vw;
                            margin-bottom: 1.77vw;
                            font-size: 1.77vw;
                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                            line-height: 1.77vw;
                            position: relative;
                            .number{
                                position: absolute;
                                right: 0;
                            }
                        }
                        .left_over{
                            margin-bottom: 1.77vw;
                        }
                        .introduce{
                            // flex: 1;
                            width: 25.1vw;
                            min-height: 7.5vw;
                            font-size: .88vw;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            line-height: 1.35vw;  
                        }
                        .price{
                            display: flex;
                            align-items: center;
                            margin-top: 1vw;
                            img{
                                width: 1.71vw;
                                height: 1.71vw;
                            }
                            .num{
                                // width: 6.3vw;
                                width: 5.4vw;
                                margin-right: .8vw;
                                font-size: 1.71vw;
                                font-family: Oswald-Regular;
                                font-weight: 900;
                                color: #F1BF34;
                                line-height: 2.39vw;
                                text-align: right;
                            }
                            .exchange{
                                font-size: .98vw;
                                font-family: Oswald-Regular;
                                color: #B3B3B3;
                                line-height: 1.35vw;
                            }
                        }
                        .btn{
                            display: flex;
                            justify-content: space-between;
                            width: 100%;
                            height: 2.81vw;
                            margin-top: 2.08vw;
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            line-height: 2.81vw;
                            text-align: center;
                            position: relative;
                            .purchase{
                                width: 11.09vw;
                                height: 2.81vw;
                                margin-right: 1.25vw;
                                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/purchase.png');
                                background-size: 100% 100%;
                                cursor: pointer;
                                transition: all 0.2s ease;
                            }
                            .not-allowed{
                                cursor:not-allowed !important;
                                opacity: .4;
                            }
                            .purchase:hover,
                            .open:hover{
                                opacity: .8;
                            }
                            .not-allowed:hover{
                                opacity: .4;
                            }
                            .open{
                                width: 11.09vw;
                                height: 2.81vw;
                                margin-right: 0; 
                                margin-right: 1.25vw;
                                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/purchase.png');
                                background-size: 100% 100%;
                                cursor: pointer;
                                transition: all 0.2s ease;
                            }
                            .details{
                                position: relative;
                                width: 9.89vw;
                                height: 2.81vw;
                                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwAssets/withboder.png');
                                background-size: 100% 100%;
                                z-index: 5;
                                transition: all 0.2s ease;
                                cursor: pointer;
                                &-border{
                                    width: 100%;
                                    height: 100%;
                                }
                                &-text{
                                    position: absolute;
                                    top: 0;
                                    right: 0;
                                     width: 100%;
                                    height: 100%;
                                    z-index: 0;
                                }
                            }
                            .details:hover{
                                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwbox/details.png');
                            }
                        }
                    }
                }
                li:hover{
                    border: .2vw solid #434248; 
                }
            }
        }
        .nothing{
            height: 80vh;
            text-align: center;
            padding: 3vw 0 7.55vw 0;
            .txt{
                width: 47.5vw;
                height: 1.04vw;
                margin: -1vw auto 7.65vw;
                font-size: .83vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #B1B5C3;
                line-height: 1.04vw;
                text-align: center;
                a{
                    color: #04FFA2;
                    text-decoration: none;
                    cursor: pointer;
                }
            }
            img{
                width: 11.71vw;
                height: 12.5vw;
            }
        }
    }
</style>
