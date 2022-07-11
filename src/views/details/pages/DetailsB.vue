<template>
    <header-b path="/details" :type="2"></header-b>
    <div class="details">
        <div class="box" v-if="data.info">
            <div class="video">
                <img :src="data.info.image" v-if="!data.info.animation_url" alt="">
                <video autoplay loop muted v-else>
                    <source :src="data.info.animation_url" type="video/mp4">
                </video>
            </div>
            <div class="title">{{ data.info.name }}</div>
            <div class="left">
                <div class="text1">{{$t('message.details.box_price')}} ≈ $4545</div>
                <div class="text2">
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/eth_icon.png" alt="">
                    <div>0.36 <span>{{$t('message.details.box_eth')}}</span></div>
                </div>
                <div class="text2"><div>{{$t('message.details.box_have')}} : <b style="color: #A81BFF;"> &nbsp;{{ ownerNumber }}</b></div></div>
            </div>
            <div class="right">
                <div class="text1">
                    <div>{{$t('message.details.box_remain')}}</div> 
                    <div><span v-if="data.Remaining > 0">{{ data.Remaining + '/2000'}}</span><span v-else>0/2000</span></div>
                </div>
                <div class="line"></div>
                <div class="text2">
                    <div>{{$t('message.details.box_sale')}}</div>
                    <!-- <div>21<span>H</span>:33<span>M</span>:48<span>S</span></div> -->
                    <div>00<span>H</span>:00<span>M</span>:00<span>S</span></div>
                </div>
            </div>
            <div class="btn">
                <!-- <div class="purchase" :class="{'not-allowed': data.Remaining == 0 || isProduction }" @click="purchase">{{$t('message.details.box_btn_pur')}}</div> -->
                <div class="unpack" :class="{'not-allowed': ownerNumber == 0 || chainId == 56 }" @click="open">{{$t('message.details.box_btn_open')}}</div>
                <div class="view" :class="{'not-allowed': chainId == 56 }" @click="opensea">{{$t('message.details.box_btn_view')}}</div>
            </div>
        </div>
        <div class="changeMenu flex_centent_center">
            <div class="content" :class="exMenu == 0 ? 'active':''" @click="intClick(0)">{{$t('message.details.exMenu1')}}</div>
            <div class="intro" :class="exMenu == 1 ? 'active':''" @click="intClick(1)">{{$t('message.details.exMenu2')}}</div>
            <!-- <div class="terms" :class="exMenu == 2 ? 'active':''" @click="intClick(2)">{{$t('message.details.exMenu3')}}</div> -->
        </div>
        <div class="list">
            <ul class="content" v-show="exMenu == 0">
                <li v-if="index == 1">
                    <ul>
                        <li class="desc_wrap">
                            <div>
                                <div class="pic">
                                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/head_rander.png" alt="">
                                </div>
                                <div class="data">
                                    <div class="prob">
                                        <div class="prince">{{$t('message.details.list.prince2')}}</div>
                                        <div class="num">100%</div>
                                    </div>
                                    <div class="attr">
                                        <div class="name">{{$t('message.details.list.name1')}}</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li v-if="index == 2">
                    <ul>
                        <li class="desc_wrap">
                            <div class="wrap">
                                <div class="pic">
                                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/HP.png" alt="">
                                </div>
                                <div class="data">
                                    <div class="prob">
                                        <div class="prince">{{$t('message.details.list.prince3')}}</div>
                                        <div class="num">50%</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="attr">
                                        <div class="attr">
                                            <div class="name">{{$t('message.details.list.name1')}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> 
                        <li class="desc_wrap">
                            <div class="wrap">
                                <div class="pic">
                                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/sandtime.png" alt="">
                                </div>
                                <div class="data">
                                    <div class="prob">
                                        <div class="prince">{{$t('message.details.list.prince4')}}</div>
                                        <div class="num">50%</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="attr">
                                        <div class="name">{{$t('message.details.list.name1')}}</div>
                                    </div>
                                </div>
                            </div>
                            
                        </li>
                    </ul>
                </li> 
                <li v-if="index == 9">
                    <ul>
                        <li class="desc_wrap">
                            <div class="wrap">
                                <div class="pic">
                                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/box9_icon.png" alt="">
                                </div>
                                <div class="data">
                                    <div class="prob">
                                        <div class="prince">{{$t('message.details.list.name1')}}</div>
                                        <div class="num">100%</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="attr">
                                        <div class="name">{{$t('message.details.list.name2')}}</div>
                                        <div class="txt">
                                            {{ $t('message.details.list.HeroText') }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> 
                    </ul>
                </li>
                <li v-if="index == 3">
                    <ul>
                        <li class="attr_warp">
                            <div class="image">
                                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhomePhone/news-img1.png" alt="">
                            </div>
                            <div class="title">{{$t('message.details.list.prince_b')}}</div>
                            <div class="prob">
                                <div class="name1">{{$t('message.details.list.name1')}}</div>
                                <div class="num">50<span>%</span></div>
                            </div>
                            <div class="name2">{{$t('message.details.list.name2')}}</div>
                            <div class="item">
                                <div>{{$t('message.details.list.name2_item1')}}<div>5~<span class="yell">12</span></div></div>
                                <div>{{$t('message.details.list.name2_item2')}}<div>5~<span class="yell">12</span></div></div>
                                <div>{{$t('message.details.list.name2_item3')}}<div>5~<span>12</span></div></div>
                                <div>{{$t('message.details.list.name2_item4')}}<div>5~<span>12</span></div></div>
                                <div>{{$t('message.details.list.name2_item5')}}<div>5~<span>12</span></div></div>
                            </div>
                        </li>
                        <li class="attr_warp">
                            <div class="image">
                                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/person2.png" alt="">
                            </div>
                            <div class="title">{{$t('message.details.list.name2')}}</div>
                            <div class="prob">
                                <div class="name1">{{$t('message.details.list.name1')}}</div>
                                <div class="num">50<span>%</span></div>
                            </div>
                            <div class="name2">{{$t('message.details.list.name2')}}</div>
                            <div class="item">
                                <div>{{$t('message.details.list.name2_item1')}}<div>-5~<span class="yell">8</span></div></div>
                                <div>{{$t('message.details.list.name2_item3')}}<div>-3~<span class="yell">6</span></div></div>
                                <div>{{$t('message.details.list.name2_item5')}}<div>-3~<span>8</span></div></div>
                                <div>{{$t('message.details.list.name2_item4')}}<div>-3~<span>6</span></div></div>
                                <div>{{$t('message.details.list.name2_item2')}}<div>-4~<span>8</span></div></div>
                                <div>{{$t('message.details.list.name2_item6')}}<div>-3~<span>6</span></div></div>
                            </div>
                        </li> 
                        <li class="attr_warp">
                            <div class="image">
                                <img src="https://d2cimmz3cflrbm.cloudfront.net/nwbox/person1.png" alt="">
                            </div>
                            <div class="title">{{$t('message.details.list.name2')}}</div>
                            <div class="prob">
                                <div class="name1">{{$t('message.details.list.name1')}}</div>
                                <div class="num">50<span>%</span></div>
                            </div>
                            <div class="name2">{{$t('message.details.list.name2')}}</div>
                            <div class="item">
                                <div>{{$t('message.details.list.name2_item1')}}<div>-5~<span class="yell">8</span></div></div>
                                <div>{{$t('message.details.list.name2_item3')}}<div>-3~<span class="yell">6</span></div></div>
                                <div>{{$t('message.details.list.name2_item5')}}<div>-3~<span>8</span></div></div>
                                <div>{{$t('message.details.list.name2_item4')}}<div>-3~<span>6</span></div></div>
                                <div>{{$t('message.details.list.name2_item2')}}<div>-4~<span>8</span></div></div>
                                <div>{{$t('message.details.list.name2_item6')}}<div>-3~<span>6</span></div></div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="introduction" v-show="exMenu == 1" v-if="data.info">
                <div v-if="index == 1">
                    <ul>
                        <li>
                            <div class="title">{{ data.info.name }}</div>
                            <div class="desc">
                                <!-- {{ locale == 'us' ? data.info.description : data.info.description_zh }} -->
                                {{$t('message.details.intro.type1_desc')}}
                            </div>
                        </li>
                    </ul>
                </div>
                <div v-if="index == 2">
                    <ul>
                        <li>
                            <div class="title">{{ data.info.name }}</div>
                            <div class="desc">
                                <!-- {{ locale == 'us' ? data.info.description : data.info.description_zh }} -->
                                {{$t('message.details.intro.type2_desc')}}
                            </div>
                        </li>
                        <li>
                            <div class="title">{{ $t('message.details.intro.title5') }}</div>
                            <div class="desc">
                                {{ $t('message.details.intro.desc6') }}
                            </div>
                        </li>
                        <li>
                            <div class="title">{{ $t('message.details.intro.title6') }}</div>
                            <div class="desc">
                                {{ $t('message.details.intro.desc7') }}
                            </div>
                        </li>
                    </ul>
                </div>
                <div v-if="index == 3">
                    <ul>
                        <li>
                            <div class="title">{{ data.info.name }}</div>
                            <div class="desc">
                                <!-- {{ locale == 'us' ? data.info.description : data.info.description_zh }} -->
                                {{$t('message.details.intro.type3_desc')}}
                            </div>
                        </li>
                        <li>
                            <div class="title">{{ $t('message.details.intro.title2')}}</div>
                            <div class="desc">
                                {{ $t('message.details.intro.desc3') }}
                            </div>
                        </li>
                        <li>
                            <div class="title">{{ $t('message.details.intro.title3')}}</div>
                            <div class="desc">
                                {{ $t('message.details.intro.desc4') }}
                            </div>
                        </li>
                        <li>
                            <div class="title">{{ $t('message.details.intro.title4')}}</div>
                            <div class="desc">
                                {{ $t('message.details.intro.desc5') }}
                            </div>
                        </li>
                    </ul>
                </div>
                <div v-if="index == 9">
                    <ul>
                        <li>
                            <div class="title">{{ data.info.name }}</div>
                            <div class="desc" v-html="locale == 'cn' ? data.info.description_zh : data.info.description"></div>
                        </li>
                    </ul>
                </div>
            </ul>
            <!-- <div class="terms" v-show="exMenu == 2"></div>
            <div class="link">
                <div class="title">{{$t('message.details.share_link')}}</div>
                <div class="wrap">
                    <a :href="copyText">{{copyText}}</a>
                    <div class="copy" @click="copyUrl(copyText)">{{$t('message.details.link_b')}}</div>
                </div>
            </div> -->
        </div>
    </div>
    <footer-b></footer-b>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted, watch } from 'vue'

import store from '@/store'
import {  useRouter, useRoute } from 'vue-router'
import Web3 from '@/tools/web3' 
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
const router = useRouter()
const Route = useRoute() //获取到值
const { proxy } = getCurrentInstance() as any;
const { GiftBox, LootBox, MarketV2, cyt, Cyborg, Cyborg_Fuji, cyberClub, cyberClub_Fuji, lootBox_Bsc } = Web3.contracts;
const index: any = Route.query.type || 1; //Current box type
const isProduction = ref(true);

// changeMenu
let exMenu:any = ref(0) 
const intClick = (type:any) => {
    exMenu.value = type    
}

// video
let thirdVideo:any = ref(null)
let videoUrlType:any = ref('https://d2cimmz3cflrbm.cloudfront.net/nwbox/blindbox1.mp4');
const videoUrl = () => {
    const type:any = proxy.$route.params.type;
    switch (type){
        case '1':
            videoUrlType.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwbox/blindbox1.mp4';
            break;
        case '2':
            videoUrlType.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwbox/blindbox2.mp4';
            break;
        case '3':
            thirdVideo.value.classList.add('third')
            videoUrlType.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwbox/blindbox3.mp4';
            break;
        default:
            videoUrlType.value = 'https://d2cimmz3cflrbm.cloudfront.net/nwbox/blindbox4.mp4';
            break;
    }
}

const opensea = () => {
    // window.open('https://opensea.io/');
    // if(chainid)
    return
    window.open(`https://testnets.nftrade.com/assets/fuji/${chainId.value == 43113 ? '0x55eFD6D4cF31F925E36d268C12353848c9e782fD' : ''}`)
}


// data
const data = ref({} as any);

const ownerNumber = ref(0);

const getBalance = async (chainid: number) => {
    if(chainid == 80001){
        var result: any = await Web3.balanceOfBatch(LootBox.abi, LootBox.address, store.state.myBox?.box);
    }else if(chainid == 43113){
        var result: any = await Web3.balanceOfBatch(GiftBox.abi, GiftBox.address, store.state.myBox?.box);
    }else if(chainid == 56){
        var result: any = await Web3.balanceOfBatch(lootBox_Bsc.abi, lootBox_Bsc.address, store.state.myBox?.box);
        let LootBox_result: any = await Web3.balanceOfBatch(lootBox_Bsc.abi, lootBox_Bsc.address, store.state.myBox?.box, MarketV2.address); // 查询已上架的资产
        console.log(LootBox_result, 'LootBox_result');
        console.log(LootBox_result[index-1]);
        data.value.Remaining = LootBox_result[index-1];
    }else{
        var result: any = store.state.myBox?.box
    }

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

        data.value.info = result;
        data.value.Remaining = 0;
    })

    ownerNumber.value = result[index]
}



const chainId: any = computed(() => store.state.user?.chainId);
watch(chainId, (newVal, oldVal) => {
    if(!oldVal) return;
}, {immediate:true,deep:true});

const readyAssetsF: any = computed(() => {
    console.log(store?.state.myAssets?.readyAssets, 'store?.state.myAssets?.readyAssets');
    getBalance(chainId.value)
    data.value = {}
    return store.state.myAssets?.readyAssets
});
watch(readyAssetsF, (newVal, oldVal) => {
    if(!oldVal) return;
}, {immediate:true,deep:true});


const copyText:any = 'https://cyberpop.online/'
const copyUrl = (e:any) => {
    const input = document.createElement("input");
    document.body.appendChild(input);
    input.setAttribute("value", e);
    input.select();
    if (document.execCommand("copy")) {
        document.execCommand("copy");
        store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.common.mess_succ')}})
    }else{
        store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.common.mess_copy_err')}})
    }
    //删除这个节点
    document.body.removeChild(input);
}

const getData = async (result: any) => {
    ownerNumber.value = result[index-1];
    proxy.$api.get(`https://api.cyberpop.online/box/${index-1}`).then((boxData: any) => {
        data.value.info = boxData;
    })
    if(chainId.value != 80001) {
        data.value.Remaining = 0;
        return;
    };
    let LootBox_result: any = await Web3.balanceOfBatch(LootBox.abi, LootBox.address, store.state.myBox?.box, MarketV2.address); // Query assets on the shelves
    console.log(LootBox_result, 'LootBox_result');
    console.log(LootBox_result[index-1]);
    data.value.Remaining = LootBox_result[index-1];
}



const getNFTData: any = async (res: any) => {
    proxy.$api.get(`https://api.cyberpop.online/${'role'}`).then((result:any) => {
         console.log(result);
         
    }).catch((err:any) => {
        console.log(err); 
    })
}

// Open the box
const open = async () => {
    if(ownerNumber.value == 0 || isProduction.value || chainId.value == 56) return;
    store.dispatch('user/xplanChangeAni', true);
    store.dispatch('user/TipsState', {show: true, info: { hasLoading: false, hasClose: true, title: t('message.box.opening'), content: t('message.box.open_text'), addNetwork: false, boxId: index - 1, haveNFT: ownerNumber.value }});
}

// Buy box
const purchase = async () => {
    // let result = Web3.balanceOfBatch(MarketV2.abi, MarketV2.address, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], true);
    if(data.value.Remaining == 0 || isProduction.value) return;
    store.dispatch('myBox/purchaseState', { show: true, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 0, boxId: index-1, haveNFT: data.value.Remaining }});

}


onMounted( () => {
    window.scrollTo(0,0);
    store.dispatch('user/showDialog',{show: false, info: {}});// close message dialog
    videoUrl();
    if(process.env.NODE_ENV == 'development') isProduction.value = false; //判断开发 生产环境
})


</script>
<style lang="less" scoped>
    .details{
        padding: 0 36px;
        color: #ffffff;
        background-color: #000000;
        overflow: hidden;
        .box{
            margin-top: 44px;
            overflow: hidden;
            .video{
                position: relative;
                width: 100%;
                height: 303px;
                margin: 32px auto;
                border-radius: 10px;
                overflow: hidden;
                video{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    width: 133%;
                    // height: 303px;
                }
                video.third{
                    width: 176%;
                }
            }
            .title{
                font-size: 36px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                line-height: 42px;
            }
            .left{
                margin: 8px 0 16px;
                .text1{
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 16px;
                }
                .text2{
                    display: flex;
                    height: 50px;
                    align-items: center;
                    img{
                        width: 5vw;
                        height: 8vw;
                        margin-right: 2vw;
                    }
                    div{
                        height: 50px;
                        font-size: 36px;
                        font-family: Oswald-Regular;
                        font-weight: 400;
                        line-height: 50px;
                        span{
                            // margin-left: .4vw;
                            // margin-bottom: .1vw;
                            font-size: 18px;
                        }
                    }
                }
            }
            .right{
                display: flex;
                height: 57px;
                .text1,.text2{
                    width: 62px;
                    height: 16px;
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    line-height: 16px;
                    color: rgba(255, 255, 255, 0.7);
                    div:nth-child(2){
                        height: 40px;
                        font-size: 28px;
                        font-family: Oswald-Regular;
                        font-weight: 400;
                        color: #A81BFF;
                        line-height: 40px;
                        span{
                            font-size: 20px;
                        }
                    }
                }
                .line{
                    width: 1px;
                    height: 48px;
                    margin: auto 24px;
                    background: rgba(168, 27, 255, 0.5);
                }
                .text2{
                    width: 192px;
                }
            }
            .btn{
                margin-top: 25px;
                font-size: 16px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                line-height: 48px;
                text-align: center;
                .not-allowed{
                    opacity: .4;
                }
                div:not(:last-child){
                    width: 100%;
                    height: 48px;
                    margin-bottom: 20px;
                    background: linear-gradient(300deg, #EDFF00 0%, #CB33DF 58%);
                    clip-path: polygon(0 0, 86% 0, 100% 26%,100% 65%, 100% 100%, 0 100%, 8% 100%, 0% 82%);
                    cursor: pointer;
                }
                div:last-child{
                    width: 100%;
                    height: 48px;
                    color: #DE2DCF;
                    white-space: nowrap;
                    background-image: url('../../../assets/nwbox/viewBorder.png');
                    background-size: 100% 100%;
                    cursor: pointer;
                }
            }
        }
        .changeMenu{
            height: 30px;
            margin: 40px 0 24px;
            font-size: 16px;
            font-family: AlibabaPuHuiTi_2_115_Black;
            line-height: 16px;
            text-align: center;
            .content{
                margin-right: 5vw;
            }
            div{
                cursor: pointer;
            }
            a{
                text-decoration: none;
                color: #ffffff;
            }
            div.active{
                color: #DE2DCF;
                a{
                    color: #DE2DCF;
                }
            }
            div.active:after{
                content: '';
                display: inline-block;
                width: 100%;
                height: 6px;
                background: linear-gradient(90deg, rgba(222, 45, 207, 0) 0%, #DE2DCF 51%, rgba(222, 45, 207, 0) 100%);
            }
        }
        .list{
            padding-bottom: 40px;
            .content{
                .attr_warp{
                    width: 100%;
                    // height: 450px;
                    padding: 16px 16px 20px;
                    background: linear-gradient(110deg, rgba(8, 6, 19, 0.22) 0%, rgba(132, 120, 255, 0.38) 100%),
                                linear-gradient(100deg, rgba(4, 255, 162, 0.1) 0%, rgba(27, 54, 44, 0) 100%);
                    border: 2px solid;
                    border-image: linear-gradient(270deg, rgba(176, 65, 216, 1), rgba(139, 255, 178, 0.5)) 2 2;
                    .image{
                        position: relative;
                        width: 100%;
                        height: 270px;
                        background: #000000;
                        img{
                            position: absolute;
                            bottom: 0;
                            width: 100%;
                        }
                    }
                    .title{
                        height: 28px;
                        font-size: 20px;
                        margin: 20px 0;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        line-height: 23px;
                        text-align: center;
                    }
                    .prob{
                        text-align: center;
                        .name1{
                            height: 16px;
                            font-size: 12px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: rgba(255, 255, 255, 0.7);
                            line-height: 16px;
                        }
                        .num{
                            height: 53px;
                            font-size: 36px;
                            font-family: Oswald-Regular;
                            font-weight: 400;
                            color: #04FFA2;
                            line-height: 50px;
                            span{
                                font-size: 12px;
                            }
                        }
                    }
                    .name2{
                        height: 16px;
                        margin: 18px 0;
                        font-size: 12px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: rgba(255, 255, 255, 0.7);
                        line-height: 16px;
                        text-align: center;
                    }
                    .item{
                        color: rgba(255, 255, 255, 0.7);
                        & > div{
                            display: flex;
                            justify-content: space-between;
                            width: 80%;
                            margin: 10px auto;
                            font-size: 14px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            line-height: 16px;
                            div{
                                color: #ffffff;
                                font-size: 16px;
                                font-family: Oswald-Regular;
                                font-weight: bold;
                                span.yell{
                                    color: #EDFF00;
                                }
                            }
                        }
                    }
                }
                .desc_wrap{
                    width: 100%;
                    // height: 450px;
                    padding: 16px 16px 20px;
                    background: linear-gradient(110deg, rgba(8, 6, 19, 0.22) 0%, rgba(132, 120, 255, 0.38) 100%),
                                linear-gradient(100deg, rgba(4, 255, 162, 0.1) 0%, rgba(27, 54, 44, 0) 100%);
                    border: 2px solid;
                    border-image: linear-gradient(270deg, rgba(176, 65, 216, 1), rgba(139, 255, 178, 0.5)) 2 2;
                    .pic{
                        text-align: center;
                    }
                    .data{
                        .prob{
                            margin: 20px 0;
                            text-align: center;
                            .prince{
                                font-size: 20px;
                                font-family: AlibabaPuHuiTi_2_115_Black;
                                font-weight: normal;
                                color: #FFFFFF;
                                line-height: 23px;
                            }
                            .num{
                                font-size: 32px;
                                font-family: Oswald-Regular, Oswald;
                                font-weight: 400;
                                color: #04FFA2;
                                line-height: 38px;
                            }
                        }
                        .attr{
                            text-align: center;
                        }
                    }
                }
                li + li{
                    margin-top: 24px;
                }
            }
            .introduction{
                width: 100%;
                margin-top: 24px;
                padding: 24px 16px;
                background: linear-gradient(110deg, rgba(8, 6, 19, 0.22) 0%, rgba(132, 120, 255, 0.38) 100%),
                            linear-gradient(100deg, rgba(4, 255, 162, 0.1) 0%, rgba(27, 54, 44, 0) 100%);
                border: 2px solid;
                border-image: linear-gradient(270deg, rgba(176, 65, 216, 1), rgba(139, 255, 178, 0.5)) 2 2;
                li{
                    .title{
                        margin-bottom: 16px;
                        font-size: 16px;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #04FFA2;
                        line-height: 20px;
                    }
                    .desc{
                        width: 271px;
                        font-size: 14px;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        font-weight: normal;
                        color: #FFFFFF;
                        line-height: 20px;
                    }
                }
                li + li{
                    margin-top: 36px;
                }
            }
        }
        .link{
            margin: 40px 0 60px;
            .title{
                height: 17px;
                font-size: 12px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 14px;
            }
            .wrap{
                display: flex;
                width: 100%;
                height: 40px;
                margin: 8px 0;
                font-size: 14px;
                line-height: 40px;
                text-align: center;
                clip-path: polygon(0 0, 97% 0%, 100% 18%, 100% 100%, 0% 100%);
                a{
                    flex: 1;
                    height: 100%;
                    text-decoration: none;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #DE2DCF;
                    border: 2px solid #DE2DCF;
                }
                div{
                    width: 86px;
                    height: 100%;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    background: linear-gradient(213deg, #B041D8 0%, #DE2DCF 100%);
                    cursor: pointer;
                }
            }
        }
    }
</style>
