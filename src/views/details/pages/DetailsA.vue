<template>
    <header-a path="/details" :type="2"></header-a>
    <!-- <div class="section flex_centent_center">
        <div class="title">{{$t('message.mining.coming')}}</div>
    </div> -->
    <div class="details">
        <div class="box flex_center" v-if="data.info">
            <div class="video">
                <img :src="data.info.image" v-if="!data.info.animation_url" alt="">
                <video autoplay loop muted v-else>
                    <source :src="data.info.animation_url" type="video/mp4">
                </video>
            </div>
            <div class="desc">
                <div class="title flex_between"><span class="title-content">{{ data.info.name }}</span></div>
                <div class="price flex_align_center">
                    <div class="left flex_between">
                        <div class="text1">{{$t('message.details.box_price')}}: $49.00</div>
                        <div class="text2 flex_align_center">
                            <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/eth_icon.png" alt="">
                            <div>0.03<span>{{$t('message.details.box_eth')}}</span></div>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="right flex_between">
                        <!-- <div class="text1 flex_align_center">{{$t('message.details.box_remain')}} <span v-if="data.Remaining">{{ data.Remaining + '/2000'}}</span><span v-else>0/2000</span></div> -->
                        <div class="text1 flex_align_center">{{$t('message.details.box_have')}} <span>{{ ownerNumber }}</span></div>
                       
                        <!-- <div class="text2 flex_align_center">{{$t('message.details.box_sale')}} <div>21<span>H</span>:33<span>M</span>:48<span>S</span></div></div> -->
                    </div>
                </div>
                <div class="btn">
                    <div class="purchase" :class="{'not-allowed': data.Remaining == 0 || isProduction}" @click="purchase">{{$t('message.details.box_btn_pur')}}</div>
                    <div class="unpack" :class="{'not-allowed': ownerNumber == 0 || chainId == 56}" @click="open">{{$t('message.details.box_btn_open')}}</div>
                    <div class="view" :class="{'not-allowed':  chainId == 56}" @click="opensea">{{$t('message.details.box_btn_view')}}</div>
                </div>
            </div>
        </div>
        <div v-else class="loadingState flex_align_center"><loading v-if="true" :show="true" :index="0.5"/></div>
        <div class="changeMenu flex_centent_center">
            <!-- <div class="content" :class="!exMenu ? 'active':''" @click="exMenu = false">CONTENT</div>
            <div class="intro" :class="exMenu ? 'active':''" @click="exMenu = true">INTRODUCTION</div>
            <div class="intro" :class="exMenu ? 'active':''" @click="exMenu = true">INTRODUCTION</div> -->

            <div class="content" :class="exMenu == 0 ? 'active':''" @click="intClick(0)">{{$t('message.details.exMenu1')}}</div>
            <div class="intro" :class="exMenu == 1 ? 'active':''" @click="intClick(1)">{{$t('message.details.exMenu2')}}</div>
            <!-- <div class="terms" :class="exMenu == 2 ? 'active':''" @click="intClick(2)">{{$t('message.details.exMenu3')}}</div> -->
        </div>
        <div class="list">
            <ul class="content" v-show="exMenu == 0">
                <li v-if="index == 1"> 
                    <ul class="list_box">
                        <li>
                            <div class="wrap">
                                <div class="pic">
                                    <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/head_rander.png" alt="">
                                </div>
                                <div class="data">
                                    <div class="prob">
                                        <div class="name">{{$t('message.details.list.name1')}}</div>
                                        <div class="num">100%</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="attr">
                                        <div class="name">{{$t('message.details.list.name3')}}</div>
                                        <div class="txt">
                                            {{ $t('message.details.list.headContent') }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="prince">{{$t('message.details.list.prince2')}}</div>
                        </li>
                    </ul>    
                </li>
                <li v-if="index == 2">
                    <ul class="list_box">
                        <li>
                            <div class="wrap">
                                <div class="pic">
                                    <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/HP.png" alt="">
                                </div>
                                <div class="data">
                                    <div class="prob">
                                        <div class="name">{{$t('message.details.list.name1')}}</div>
                                        <div class="num">50%</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="attr">
                                        <div class="name">{{$t('message.details.list.name2')}}</div>
                                        <div class="txt">
                                            {{ $t('message.details.list.HP') }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="prince">{{$t('message.details.list.prince3')}}</div>
                        </li> 
                        <li>
                            <div class="wrap">
                                <div class="pic">
                                    <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/sandtime.png" alt="">
                                </div>
                                <div class="data">
                                    <div class="prob">
                                        <div class="name">{{$t('message.details.list.name1')}}</div>
                                        <div class="num">50%</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="attr">
                                        <div class="name">{{$t('message.details.list.name2')}}</div>
                                        <div class="txt">
                                            {{ $t('message.details.list.Time') }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="prince">{{$t('message.details.list.prince4')}}</div>
                        </li>
                    </ul>    
                </li>
                <li v-if="index == 9">
                    <ul class="list_box">
                        <li>
                            <div class="wrap">
                                <div class="pic">
                                    <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/box9_icon.png" alt="">
                                </div>
                                <div class="data">
                                    <div class="prob">
                                        <div class="name">{{$t('message.details.list.name1')}}</div>
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
                            <div class="prince">{{$t('message.details.list.prince5')}}</div>
                        </li> 
                    </ul>    
                </li>
                <li v-if="index == 3">
                    <ul class="list_box">
                        <li>
                            <div class="wrap">
                                <div class="pic">
                                    <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/person2.png" alt="">
                                </div>
                                <div class="data">
                                    <div class="prob">
                                        <div class="name">{{$t('message.details.list.name1')}}</div>
                                        <div class="num">50%</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="attr">
                                        <div class="name">{{$t('message.details.list.name2')}}</div>
                                        <div class="item">
                                            <div>{{$t('message.details.list.name2_item1')}}</div>
                                            <div>-5~<span class="yell">8</span></div>
                                            <div>{{$t('message.details.list.name2_item3')}}</div>
                                            <div>-3~<span class="yell">6</span></div>
                                        </div>
                                        <div class="item">
                                            <div>{{$t('message.details.list.name2_item5')}}</div>
                                            <div>-3~<span>8</span></div>
                                            <div>{{$t('message.details.list.name2_item4')}}</div>
                                            <div>-3~<span>6</span></div>
                                        </div>
                                        <div class="item">
                                            <div>{{$t('message.details.list.name2_item2')}}</div>
                                            <div>-4~<span>8</span></div>
                                            <div>{{$t('message.details.list.name2_item6')}}</div>
                                            <div>-3~<span>6</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="prince">{{$t('message.details.list.prince')}}</div>
                        </li> 
                        <li>
                            <div class="wrap">
                                <div class="pic">
                                    <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/person1.png" alt="">
                                </div>
                                <div class="data">
                                    <div class="prob">
                                        <div class="name">{{$t('message.details.list.name1')}}</div>
                                        <div class="num">50%</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="attr">
                                        <div class="name">{{$t('message.details.list.name2')}}</div>
                                        <div class="item">
                                            <div>{{$t('message.details.list.name2_item1')}}</div>
                                            <div>-5~<span class="yell">8</span></div>
                                            <div>{{$t('message.details.list.name2_item3')}}</div>
                                            <div>-3~<span class="yell">6</span></div>
                                        </div>
                                        <div class="item">
                                            <div>{{$t('message.details.list.name2_item5')}}</div>
                                            <div>-3~<span>8</span></div>
                                            <div>{{$t('message.details.list.name2_item4')}}</div>
                                            <div>-3~<span>6</span></div>
                                        </div>
                                        <div class="item">
                                            <div>{{$t('message.details.list.name2_item2')}}</div>
                                            <div>-4~<span>8</span></div>
                                            <div>{{$t('message.details.list.name2_item6')}}</div>
                                            <div>-3~<span>6</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="prince">{{$t('message.details.list.prince0')}}</div>
                        </li> 
                    </ul>    
                </li>
                <li v-if="index == 11">
                    <ul class="list_box">
                        <li>
                            <div class="wrap">
                                <div class="pic">
                                    <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/person2.png" alt="">
                                </div>
                                <div class="data">
                                    <div class="prob">
                                        <div class="name">{{$t('message.details.list.name1')}}</div>
                                        <div class="num">50%</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="attr">
                                        <div class="name">{{$t('message.details.list.name2')}}</div>
                                        <div class="item">
                                            <div>{{$t('message.details.list.name2_item1')}}</div>
                                            <div>-5~<span class="yell">8</span></div>
                                            <div>{{$t('message.details.list.name2_item3')}}</div>
                                            <div>-3~<span class="yell">6</span></div>
                                        </div>
                                        <div class="item">
                                            <div>{{$t('message.details.list.name2_item5')}}</div>
                                            <div>-3~<span>8</span></div>
                                            <div>{{$t('message.details.list.name2_item4')}}</div>
                                            <div>-3~<span>6</span></div>
                                        </div>
                                        <div class="item">
                                            <div>{{$t('message.details.list.name2_item2')}}</div>
                                            <div>-4~<span>8</span></div>
                                            <div>{{$t('message.details.list.name2_item6')}}</div>
                                            <div>-3~<span>6</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="prince">{{$t('message.details.list.prince')}}</div>
                        </li> 
                        <li>
                            <div class="wrap">
                                <div class="pic">
                                    <img src="https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/person1.png" alt="">
                                </div>
                                <div class="data">
                                    <div class="prob">
                                        <div class="name">{{$t('message.details.list.name1')}}</div>
                                        <div class="num">50%</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="attr">
                                        <div class="name">{{$t('message.details.list.name2')}}</div>
                                        <div class="item">
                                            <div>{{$t('message.details.list.name2_item1')}}</div>
                                            <div>-5~<span class="yell">8</span></div>
                                            <div>{{$t('message.details.list.name2_item3')}}</div>
                                            <div>-3~<span class="yell">6</span></div>
                                        </div>
                                        <div class="item">
                                            <div>{{$t('message.details.list.name2_item5')}}</div>
                                            <div>-3~<span>8</span></div>
                                            <div>{{$t('message.details.list.name2_item4')}}</div>
                                            <div>-3~<span>6</span></div>
                                        </div>
                                        <div class="item">
                                            <div>{{$t('message.details.list.name2_item2')}}</div>
                                            <div>-4~<span>8</span></div>
                                            <div>{{$t('message.details.list.name2_item6')}}</div>
                                            <div>-3~<span>6</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="prince">{{$t('message.details.list.prince0')}}</div>
                        </li> 
                    </ul>    
                </li>
            </ul>
            <div class="introduction" v-show="exMenu == 1" v-if="data.info">
                <div v-if="index == 1">
                    <ul>
                        <li>
                            <div class="title">{{ data.info.name }}</div>
                            <div class="desc">
                                {{$t('message.details.intro.type1_desc')}}
                                <!-- {{ locale == 'cn' ? data.info.description_zh : data.info.description }} -->
                            </div>
                        </li>
                    </ul>
                </div>
                <div v-if="index == 2">
                    <ul>
                        <li>
                            <div class="title">{{ data.info.name }}</div>
                            <div class="desc">
                                <!-- {{ locale == 'cn' ? data.info.description_zh : data.info.description }} -->
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
                                <!-- {{ locale == 'cn' ? data.info.description_zh : data.info.description }} -->
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
                <!-- <li>
                    <div class="title">{{$t('message.details.intro.title1')}} 2</div>
                    <div class="desc">
                        {{$t('message.details.intro.desc2')}}
                    </div>
                </li> -->
            </div>
            <div class="terms" v-show="exMenu == 2"></div>
            <div class="link">
                <a :href="copyText">{{copyText}}</a>
                <div class="copy" @click="copyUrl(copyText)">{{$t('message.details.link')}}</div>
            </div>
        </div>
    </div>
    <footer-a></footer-a>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted, watch } from 'vue'
import Web3 from '@/tools/web3'
import store from '@/store'
import {  useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
const router = useRouter()
const Route = useRoute() //Get value
const { proxy } = getCurrentInstance() as any
const { GiftBox, LootBox, MarketV2, cyt, Cyborg, Cyborg_Fuji, cyberClub, cyberClub_Fuji, lootBox_Bsc } = Web3.contracts;
const index: any = Route.query.type || 9; //Current box type
const isProduction = ref(true);

// changeMenu
let exMenu:any = ref(0) 
const intClick = (type:any) => {
    exMenu.value = type    
}

// video
let thirdVideo:any = ref(null)


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


// data
const data = ref({} as any);

const opensea = () => {
    if(chainId.value == 43113){
        window.open(`https://testnets.nftrade.com/assets/fuji/0x55eFD6D4cF31F925E36d268C12353848c9e782fD/${index}`)
    }else if(chainId.value == 80001){
        window.open(`https://testnets.nftrade.com/assets/fuji/0xC5FE394692a469BD5789D8247F281403e064E576/${index}`)
    }else{
        return
        window.open(`https://nftrade.com/assets/bsc/0x10fde59432d1d6ee7ad25448e3d8b9b3d2c08b89/9`)
    }
}

const ownerNumber = ref(0);



const getData = async (result: any) => {
    ownerNumber.value = result[index-1];
    await proxy.$api.get(`https://api.cyberpop.online/box/${index-1}`).then((boxData: any) => {
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


const getBalance = async (chainid: number) => {
    console.log(chainid, 'chainid');
    
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
    console.log(result, 'result', store.state.myBox?.box);
    // getData(result)
    proxy.$api.get(`https://api.cyberpop.online/box/${9}`).then((result: any) => {
        let str: any = JSON.stringify(result.description);
        str = str.slice(0, str.length - 1);
        str = str.slice(1);
        str = str.replace(/\\n/g, "<br/>");

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


// Open the box
const open = () => {
    if(ownerNumber.value == 0 || isProduction.value || chainId.value == 56) return;
    store.dispatch('user/xplanChangeAni', true);
    store.dispatch('user/TipsState', {show: true, info: { hasLoading: true, hasClose: true, title: t('message.box.opening'), content: t('message.box.open_text'), addNetwork: false, boxId: index-1, haveNFT: ownerNumber.value }});
}

// Get the open items
const getLast = async () => {
    if(chainId.value == 80001){
        if(index == 1){
            let cyberClub_result: any = await Web3.tokensOfOwner(cyberClub.abi, cyberClub.address);
            console.log(cyberClub_result);
            await getNFTData(cyberClub_result[cyberClub_result - 1], 'head_mumbai');
        }else if(index == 2){
            
        }else if(index == 3){
            let result: any = await Web3.tokensOfOwner(Cyborg.abi, Cyborg.address);
            console.log(result, 'result');
            await getNFTData(result[result.length-1], 'role');
        }

    }else if(chainId.value == 43113){
        if(index == 1){
            let cyberClub_result: any = await Web3.tokensOfOwner(cyberClub_Fuji.abi, cyberClub_Fuji.address);
            console.log(cyberClub_result);
            await getNFTData(cyberClub_result[cyberClub_result.length - 1], 'head_fuji');
        }else if(index == 2){

        }else if(index == 3){
            let result: any = await Web3.tokensOfOwner(Cyborg_Fuji.abi, Cyborg_Fuji.address);
            console.log(result, 'result');
            await getNFTData(result[result.length-1], 'role');
        }
    }
}

const getNFTData: any = async (res: any, path: any) => {
    return new Promise((resolve, reject)=>{
        proxy.$api.get(`https://api.cyberpop.online/${path}/${res}`).then((result:any) => {
            console.log(result);
            resolve(result)
        }).catch((err:any) => {
            console.log(err); 
        })
    })
}

const purchase = async () => {
    // let result = Web3.balanceOfBatch(MarketV2.abi, MarketV2.address, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], true);
    if(data.value.Remaining == 0) return;
    store.dispatch('myBox/purchaseState', { show: true, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 0, boxId: index-1,  haveNFT: data.value.Remaining} });
}


onMounted(() => {
    window.scrollTo(0,0);
    store.dispatch('user/showDialog', { show: false, info: {} });// close message dialog
    store.dispatch('wallet/metaChange', false);
    // purchase()
    if(process.env.NODE_ENV == 'development') isProduction.value = false;
})

</script>
<style lang="less" scoped>
    .section{
        z-index: 8;
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
            background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwmining/coming-bg.png');
            background-position: center;
            background-size: auto 100%;
        }
    }
    .details{
        padding-top: 7.6vw;
        color: #ffffff;
        background-color: #080707;
        background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwAssets/bodyBg.png');
        background-repeat: no-repeat;
        background-position: left top;
        background-size: 100% auto;
        overflow: hidden;
        .box{
            // margin-left: 24.47vw;
            height: 16.97vw;
            .video{
                position: relative;
                width: 16.97vw;
                height: 16.97vw;
                margin-right: 3.125vw;
                border-radius: 1vw;
                overflow: hidden;
                video{
                    position: absolute;
                    top: 50.4%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    width: 100%;
                }
                video.third{
                    top: 49.9%;
                    width: 177%;
                }
            }
            .desc{
                // width: 29.37vw;
                width: 31vw;
                height: 15.98vw;
                .title{
                    height: 3.48vw;
                    font-size: 2.5vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    line-height: 3.48vw;
                }
                .title-content{
                    width: 100%;
                    display: inline-block;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .price{
                    height: 7.08vw;
                    margin: .41vw 0 1.87vw;
                    .left{
                        flex-direction: column;
                        width: 10.36vw;
                        height: 100%;
                        .text1{
                            height: 1.45vw;
                            margin-top: 1.04vw;
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_75_SemiBold;
                            line-height: 1.45vw;
                            color: rgba(255, 255, 255, 0.7);
                        }
                        .text2{
                            height: 4.37vw;
                            img{
                                width: 1.2vw;
                                height: 1.98vw;
                                margin-right: 1.04vw;
                            }
                            div{
                                display: flex;
                                align-items: flex-end;
                                font-size: 2.91vw;
                                font-family: Oswald-Regular;
                                span{
                                    margin-left: .4vw;
                                    margin-bottom: .1vw;
                                    font-size: 2vw;
                                }
                            }
                        }
                    }
                    .line{
                        width: .05vw;
                        height: 5.2vw;
                        margin: 0 1.45vw;
                        background: #A81BFF;
                    }
                    .right{
                        flex-direction: column;
                        // width: 16.04vw;
                        height: 100%;
                        padding: .4vw 0;
                        .text1{
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_75_SemiBold;
                            line-height: 1.04vw;
                            color: rgba(255, 255, 255, 0.7);
                            span{
                                height: 2.76vw;
                                margin-left: .7vw;
                                font-size: 1.87vw;
                                font-family: Oswald-Regular;
                                color: #A81BFF;
                                line-height: 2.76vw;
                            }
                        }
                        .text2{
                            height: 2.76vw;
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_75_SemiBold;
                            // line-height: 1.04vw;
                            line-height: 2.76vw;
                            color: rgba(255, 255, 255, 0.7);
                            white-space: nowrap;
                            div{
                                margin-left: .7vw;
                                font-size: 1.87vw;
                                font-family: Oswald-Regular;
                                color: #A81BFF;
                                span{
                                    font-size: 1.25vw;
                                }
                            }
                        }
                    }
                }
            }
            .btn{
                display: flex;
                font-size: 1.04vw;
                font-family: AlibabaPuHuiTi_2_115_Black;
                line-height: 3.125vw;
                text-align: center;
                .purchase{
                    background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/details2.png');
                }
                .unpack{
                    background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/details1.png');
                    margin-right: 1.66vw;
                }
                .purchase:hover,
                .unpack:hover{
                    opacity: .7;
                    transition: all 0.2s ease-in;
                }
                .view:hover{
                    filter: drop-shadow(0 0 0.92vw #DE2DCF);
                }
                .not-allowed{
                    cursor: not-allowed !important;
                    opacity: .4;
                }
                .not-allowed:hover{
                    opacity: .4;
                }
                
                div:not(:last-child){
                    width: 9.94vw;
                    height: 3.125vw;
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    cursor: pointer;
                }
                div:last-child{
                    width: 13.54vw;
                    height: 3.125vw;
                    color: #DE2DCF;
                    white-space: nowrap;
                    background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/viewBorder.png');
                    background-size: 100% 100%;
                    cursor: pointer;
                }
            }
        }
        .loadingState{
            height: 16.97vw;
        }
        .changeMenu{
            height: 1.45vw;
            margin: 4.27vw 0 1.87vw;
            font-size: 1.04vw;
            font-family: AlibabaPuHuiTi_2_75_SemiBold;
            line-height: 1.45vw;
            text-align: center;
            div{
                margin: 0 .935vw;
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
                height: .5vw;
                background: linear-gradient(90deg, rgba(222, 45, 207, 0) 0%, #DE2DCF 51%, rgba(222, 45, 207, 0) 100%);
            }
        }
        .list{
            .content{
                .list_box{
                    li{
                        position: relative;
                        width: 47.91vw;
                        height: 8.48vw;
                        margin: 0 auto;
                        background-size: 100% 100%;
                        background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/contentBg-nohover.png');
                        transition: all 0.2s ease-in-out;
                        .prince{
                            z-index: 6;
                            position: relative;
                            top: -1vw;
                            display: inline-block;
                            padding: 0 2vw 0 1vw;
                            height: 1.77vw;
                            margin-top: -1.2vw;
                            font-size: 1.25vw;
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            line-height: 1.77vw;
                            background: #8478FF;
                            text-align: center;
                            clip-path: polygon(0 0, 100% 0%, 80% 0%, 100% 100%, 0% 100%);
                            box-sizing: border-box;
                        }
                        .wrap{
                            display: flex;
                            position: relative;
                            .pic{
                                position: relative;
                                width: 6.875vw;
                                height: 6.875vw;
                                margin: .83vw 3.22vw .78vw .83vw;
                                background: #140F16;
                                clip-path: polygon(0% 18%, 18% 0%, 100% 0%, 100% 100%, 0% 100%);
                                img{
                                    position: absolute;
                                    bottom: 0;
                                    width: 100%;
                                }
                            }
                            .data{
                                display: flex;
                                .prob{
                                    width: 5.52vw;
                                    margin-top: 1.19vw;
                                    text-align: center;
                                    .name{
                                        height: 2.39vw;
                                        font-size: 1.04vw;
                                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                        color: #A81BFF;
                                        line-height: 1.19vw;
                                    }
                                    .num{
                                        height: 3.69vw;
                                        margin-top: .2vw;
                                        font-size: 2.5vw;
                                        font-family: Oswald-Regular;
                                        color: #04FFA2;
                                        line-height: 2.91vw;
                                        letter-spacing: .2vw;
                                    }
                                }
                                .line{
                                    width: .05vw;
                                    height: 3.95vw;
                                    margin: auto 1.66vw;
                                    background: #A81BFF;
                                }
                                .attr{
                                    margin-top: 1.19vw;
                                    height: 1.45vw;
                                    font-size: 1.04vw;
                                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                    line-height: 1.19vw;
                                    .name{
                                        margin-bottom: .26vw;
                                        color: #A81BFF;
                                    }
                                    .txt{
                                        width: 26.46vw;
                                        font-size: 1.04vw;
                                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                        font-weight: normal;
                                        color: rgba(255, 255, 255, 0.7);
                                        line-height: 1.2vw;
                                    }
                                    .item{
                                        display: flex;
                                        height: 1.56vw;
                                        color: rgba(255, 255, 255, 0.7);
                                        div:nth-child(1),div:nth-child(3){
                                            width: 6.66vw;
                                            margin-right: .83vw;
                                        }
                                        div:nth-child(2),div:nth-child(4){
                                            width: 1.97vw;
                                            height: 1.56vw;
                                            margin-right: 1.25vw;
                                            color: #ffffff;
                                            font-family: Oswald-Regular;
                                            font-weight: bold;
                                            span.yell{
                                                color: #EDFF00;
                                            }
                                        }
                                        div:nth-child(4){
                                            margin-right: 0;
                                        }
                                    }
                                }
                            }   
                        }
                    }
                    li:hover{
                        background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwbox/contentBg.png');
                    }
                    li + li{
                        margin-top: 1.66vw;
                    }
                }

            }
            .introduction{
                width: 58vw;
                min-height: 22.6vw;
                margin: 2.6vw auto 0;
                padding: 2.08vw;
                background: linear-gradient(110deg, rgba(8, 6, 19, 0.22) 0%, rgba(132, 120, 255, 0.38) 100%),
                            linear-gradient(100deg, rgba(4, 255, 162, 0.1) 0%, rgba(27, 54, 44, 0) 100%);
                border: 2px solid;
                border-image: linear-gradient(270deg, rgba(176, 65, 216, 1), rgba(139, 255, 178, 0.5)) 2 2;
                li{
                    .title{
                        height: 1.77vw;
                        margin-bottom: 1.25vw;
                        font-size: 1.25vw;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #04FFA2;
                        line-height: 1.45vw;
                    }
                    .desc{
                        font-size: .83vw;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        color: #FFFFFF;
                        line-height: 1.04vw;
                    }
                }
                li + li{
                    margin-top: 2.08vw;
                }
            }
            .terms{
                
            }
        }
        .link{
            visibility:hidden;
            display: flex;
            width: 47.91vw;
            height: 3.75vw;
            // margin: 2.86vw auto 16.51vw;
            margin: 2.86vw auto 46vh;
            line-height: 3.75vw;
            text-align: center;
            clip-path: polygon(0 0, 98% 0%, 100% 20%, 100% 100%, 0% 100%);
            a{
                flex: 1;
                height: 100%;
                text-decoration: none;
                font-size: 1.04vw;
                font-family: AlibabaPuHuiTi_2_75_SemiBold;
                color: #DE2DCF;
                border: .11vw solid #DE2DCF;
            }
            div{
                width: 14.47vw;
                height: 100%;
                font-size: 1.04vw;
                font-family: AlibabaPuHuiTi_2_115_Black;
                background: linear-gradient(213deg, #B041D8 0%, #DE2DCF 100%);
                cursor: pointer;
            }
        }
    }
    @media screen {
        @media (max-width: 1000px) {
            .details{
                padding-top: 12vw !important;
            }
            .content > li{
                width: 60vw !important;
                .wrap{
                    .data{
                        .prob{
                            width: 8vw !important;
                        }
                        .attr{
                            .item{
                                margin-left: -1vw;
                                div:nth-child(1),div:nth-child(3){
                                    width: 10vw !important;
                                    transform: scale(.8) !important;
                                }
                                div:nth-child(2),div:nth-child(4){
                                    width: 4vw !important;
                                    transform: scale(.8) !important;
                                }
                            }
                        }
                    }   
                }
            } 
            .introduction{
                width: 60vw !important;
                li{
                    .desc{
                        width: 55.9vw !important;
                    }
                }
            }
            .btn {
                margin-left: -1vw;
                .purchase{
                    width: 11.93vw !important;
                    height: 3.75vw !important;
                    line-height: 3.75vw !important;
                    transform: scale(.8);
                    transition: all 0.2s ease;
                }
                .view{
                    width: 16.248vw !important;
                    height: 3.75vw !important;
                    line-height: 3.75vw !important;
                    transform: scale(.8);
                }  
            }
            .link{
                width: 60vw !important;
                div{
                    width: 18vw !important;
                }
            }
        }
    }
</style>
