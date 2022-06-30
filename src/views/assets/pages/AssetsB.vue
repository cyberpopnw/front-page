<template>
    <header-b path="javascript:scrollTo(0,0);" :type="0"></header-b>
    <!-- <div class="section flex_centent_center">
        <div class="title">COMING SOON</div>
    </div> -->
    <div class="assets">
        <div class="wrap">
            <div class="welcome">
                <div class="icon">
                    <img src="@/assets/nwAssets/portrait.svg" alt="">
                </div>
                <div class="title" v-if="email">Hi, {{ email }}</div>
                <div class="title" v-else>{{$t('message.assets.wel_name')}}</div>
                <div class="id">{{realId == -1? '':realId}}</div>
                <div class="desc">
                    {{$t('message.assets.wel_desc')}}
                </div>
                <div class="whiteList">
                    <p v-if="bobabrewery">{{ bobabrewery }}</p>
                    <p v-else>
                        <span v-if="whiteList" @click="whiteListWindows">{{ $t('message.assets.haveWhite')}} <img src="https://d2cimmz3cflrbm.cloudfront.net/nwAssets/whitelist.png" alt=""></span>
                        <span v-else-if="boxId9" @click="whiteListWindows">{{ $t('message.assets.box9HaveWhite')}} <img src="https://d2cimmz3cflrbm.cloudfront.net/nwAssets/whitelist.png" alt=""></span>
                        <span v-else>{{ $t('message.assets.notHaveWhite') }}</span>
                    </p>
                </div>
                <div class="myAssets">
                    <div class="item">
                        <p>{{$t('message.assets.my_cyt')}}: </p>
                        <p>{{ myAssets.cyt || 0 }}</p>
                        <div class="button">{{$t('message.assets.get_cyt')}}</div>
                    </div>
                    <div class="item">
                        <p>{{$t('message.assets.my_coin')}}: </p>
                        <p>{{ myAssets.coin || 0}}</p>
                    </div>
                    <div class="line"></div>
                </div>
                <div class="search">
                    <div class="input" :class="inputShow ? 'actived' : ''">
                        <input v-model="inputValue" @focus="inputShow = true" ref="myInput" type="text" :placeholder="$t('message.assets.input_pla')">
                        <img v-show="inputShow" @click="clearInput()" class="clear" src="@/assets/nwAssets/clear-input.svg" alt="">
                        <img v-show="!inputShow" src="@/assets/nwAssets/search-icon.svg" alt="">
                        <img v-show="inputShow" @click="searchSubmit()" src="@/assets/nwAssets/search-iconActived.svg" alt="">
                    </div>
                    <div class="menuSelect">
                        <div class="wrapbox">
                            <ul class="token">
                                <li @click="showSelect(1)"><div>ALL</div></li>
                                <li v-show="showItem1" class="item" @click="selectItem($event)">
                                    <div class="ecrA selected" @click="changeType(0)">ALL</div>
                                    <div class="ecr7" @click="changeType(1)">ERC 721</div>
                                    <div class="ecr1" @click="changeType(2)">ERC 1155</div>
                                </li>
                            </ul>
                            <ul class="type">
                                <li @click="showSelect(2)"><div>{{$t('message.assets.type1')}}</div></li>
                                <li v-show="showItem2" class="item" @click="selectItem($event)">
                                    <div data-name="All types" class="selected">{{$t('message.assets.type1_item_b')}}</div>
                                    <div data-name="Game">{{$t('message.assets.type1_item6')}}</div>
                                    <div data-name="Badge">{{$t('message.assets.type1_item7')}}</div>
                                    <div data-name="role">{{$t('message.assets.type1_item8')}}</div>
                                    <div data-name="head">{{$t('message.assets.type1_item9')}}</div>
                                    <div data-name="LootBox">{{$t('message.assets.type1_item10')}}</div>
                                    <div class="btn">
                                        <div class="cancel">{{$t('message.assets.btn_cancel_b')}}</div>
                                        <div class="ok">{{$t('message.assets.btn_ok_b')}}</div>
                                    </div>
                                </li>
                            </ul>
                            <ul class="quality">
                                <li @click="showSelect(3)"><div>{{$t('message.assets.type2')}}</div></li>
                                <li v-show="showItem3" class="item" @click="selectItem($event)">
                                    <div class="selected">{{$t('message.assets.type2_item_b')}}</div>
                                    <div>{{$t('message.assets.type2_item1')}}</div>
                                    <div>{{$t('message.assets.type2_item2')}}</div>
                                    <div>{{$t('message.assets.type2_item3')}}</div>
                                    <div>{{$t('message.assets.type2_item4')}}</div>
                                    <div class="btn">
                                        <div class="cancel">{{$t('message.assets.btn_cancel_b')}}</div>
                                        <div class="ok">{{$t('message.assets.btn_ok_b')}}</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <loading v-if="loadingState != 2" :show="true" :index="0.5"/>
            <div class="ecr" v-if="readyAssetsF !== -1">
            <!-- <div class="ecr" v-if="false"> -->
                <div class="ecrchange" :style="{'padding-top': loadingState != 2 ? '12vw' : '0'}" >
                    <div class="ecrAll"  v-show="!ecrType">
                        <ul class="prince" v-if="data.length > 0">
                            <li v-for="(item, index) in data" :key="index">
                                <img :src="item.data.image" alt="">
                                <div class="name">{{item.data.name}}<span>x{{item.number}}</span></div>
                                <div class="btn" v-if="item.type != 'box_mumbai' && item.type != 'box_fuji' && item.type != 'box_bsc'">
                                    <div class="transfer" :class="{'not-allowed': item.isLoading}" @click="transferPopup(item)">{{$t('message.assets.btn_tran')}}</div>
                                    <div class="sell not-allowed">{{$t('message.assets.btn_sell')}}</div>
                                </div>
                                <div class="btn" v-if="item.type != 'box_mumbai' && item.type != 'box_fuji' && false">
                                    <div class="load" :class="{'not-allowed': item.isLoading}" @click="loadPool(item)">{{$t('message.assets.btn_load')}}</div>
                                    <div class="claim" :class="{'not-allowed': !item.isLoading}" @click="withdrawRole(item)">&nbsp;&nbsp;{{$t('message.assets.but_claim')}}</div>
                                </div>
                                <div class="btn" v-if="item.type == 'box_mumbai' || item.type == 'box_fuji' || item.type == 'box_bsc'">
                                    <div class="transfer" @click="transferPopup(item)">{{$t('message.assets.btn_tran')}}</div>
                                    <div class="sell" :class="{'not-allowed': item.tyoe == 'box_bsc'}" @click="open(item)">{{$t('message.assets.btn_unpack')}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="ecr721" v-show="ecrType == 1">
                        <ul class="prince" v-if="data.length > 0">
                            <li v-for="(item, index) in data" :key="index">
                                <img :src="item.data.image" alt="">
                                <div class="name">{{item.data.name}}<span>x{{item.number}}</span></div>
                                <div class="btn" v-if="item.type != 'box_mumbai' && item.type != 'box_fuji' && item.type != 'box_bsc'">
                                    <div class="transfer" :class="{'not-allowed': item.isLoading}" @click="transferPopup(item)">{{$t('message.assets.btn_tran')}}</div>
                                    <div class="sell not-allowed">{{$t('message.assets.btn_sell')}}</div>
                                </div>
                                <div class="btn" v-if="item.type != 'box_mumbai' && item.type != 'box_fuji' && false">
                                    <div class="load" :class="{'not-allowed': item.isLoading}" @click="loadPool(item)">{{$t('message.assets.btn_load')}}</div>
                                    <div class="claim" :class="{'not-allowed': !item.isLoading}" @click="withdrawRole(item)">&nbsp;&nbsp;{{$t('message.assets.but_claim')}}</div>
                                </div>
                                <div class="btn" v-if="item.type == 'box_mumbai' || item.type == 'box_fuji' || item.type == 'box_bsc'">
                                    <div class="transfer" @click="transferPopup(item)">{{$t('message.assets.btn_tran')}}</div>
                                    <div class="sell" :class="{'not-allowed': item.tyoe == 'box_bsc'}" @click="open(item)">{{$t('message.assets.btn_unpack')}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="ecr115" v-show="ecrType == 2">
                        <ul class="prince" v-if="data.length > 0">
                            <li v-for="(item, index) in data" :key="index">
                                <img :src="item.data.image" alt="">
                                <div class="name">{{item.data.name}}<span>x{{item.number}}</span></div>
                                <div class="btn" v-if="item.type != 'box_mumbai' && item.type != 'box_fuji' && item.type != 'box_bsc'">
                                    <div class="transfer" :class="{'not-allowed': item.isLoading}" @click="transferPopup(item)">{{$t('message.assets.btn_tran')}}</div>
                                    <div class="sell not-allowed">{{$t('message.assets.btn_sell')}}</div>
                                </div>
                                <div class="btn" v-if="item.type != 'box_mumbai' && item.type != 'box_fuji' && false">
                                    <div class="load" :class="{'not-allowed': item.isLoading}" @click="loadPool(item)">{{$t('message.assets.btn_load')}}</div>
                                    <div class="claim" :class="{'not-allowed': !item.isLoading}" @click="withdrawRole(item)">&nbsp;&nbsp;{{$t('message.assets.but_claim')}}</div>
                                </div>
                                <div class="btn" v-if="item.type == 'box_mumbai' || item.type == 'box_fuji' || item.type == 'box_bsc'">
                                    <div class="transfer" @click="transferPopup(item)">{{$t('message.assets.btn_tran')}}</div>
                                    <div class="sell" :class="{'not-allowed': item.tyoe == 'box_bsc'}" @click="open(item)">{{$t('message.assets.btn_unpack')}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="noting" v-if="loadingState == 2 && data.length == 0">
                        <p>{{$t('message.assets.not_data')}}</p>
                        <img src="@/assets/nwAssets/nothing.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="nothing" v-if="readyAssetsF == -1">
                <img src="@/assets/nwAssets/nothing.svg" alt="">
            </div>
            <div class="contract" @click="copyUrl($event)">
                <div class="col th">
                    <div class="name">Contract</div>
                    <div class="Fuji">Fuji</div>
                    <div class="Mumbai">BSC</div>
                </div>
                <!-- <div class="col td">
                    <div class="name">Badge</div>
                    <div class="Fuji">-----</div>
                    <div class="Mumbai">0x82cCB2FE8f4d07702f7c2F4200f0FBF630C52406</div>
                </div>
                <div class="col td">
                    <div class="name">weapons</div>
                    <div class="Fuji">-----</div>
                    <div class="Mumbai">0x8c7afbc6cabb0f97d71a0775b062b333c654fb5b</div>
                </div> -->
                <div class="col td">
                    <div class="name">Badge</div>
                    <div class="Fuji">0x586eba6be3ffc2499df154aef81b6d3a342c8e34</div>
                    <!-- <div class="Mumbai">0x82cCB2FE8f4d07702f7c2F4200f0FBF630C52406</div> -->
                    <div class="Mumbai">-----</div>
                </div>
                <div class="col td">
                    <div class="name">Game</div>
                    <div class="Fuji">0xD4c27B5A5c15B1524FC909F0FE0d191C4e893695</div>
                    <div class="Mumbai">0x79B73BdEFCD3C8417b01a2Ba73702BD1a7a650E1</div>
                </div>
                <div class="col td">
                    <div class="name">role</div>
                    <div class="Fuji">0x78F66E37e9fE077d2F0126E3a26e6FB0D14F2BB0</div>
                    <div class="Mumbai">-----</div>
                </div>
                <div class="col td">
                    <div class="name">head</div>
                    <div class="Fuji">0x4B4cbe55125B48e868AA68E08b7527524C46E8AC</div>
                    <div class="Mumbai">-----</div>
                </div>
                <div class="col td">
                    <div class="name">LootBox</div>
                    <div class="Fuji">0x55eFD6D4cF31F925E36d268C12353848c9e782fD</div>
                    <div class="Mumbai">0x10fdE59432D1d6eE7aD25448e3D8B9b3D2c08b89</div>
                </div>
                <!-- <div class="col td">
                    <div class="name">UGC</div>
                    <div class="Fuji">0xB79Be4aF9990304b8b68679c599e5A38a80F5000</div>
                    <div class="Mumbai">-----</div>
                </div> -->
            </div>
        </div>
    </div>
    <footer-b></footer-b>
    <popup-b v-show="transferActive" :transferInfo="transferItem" :abi="abiSelect" :address="addressSelect"></popup-b>
    <WhiteList :isShowTips="haveWhiteWindow" :whiteList="whiteList" :isBoxId9="boxId9" v-if="haveWhiteWindow" @closeFinshed="haveWhiteWindow = false"/> 
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted, watch } from 'vue'
import Web3 from '@/tools/web3'
import store from '@/store'
import {  useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n';
import WhiteList from '@/components/assets/whiteListB.vue'

const { t } = useI18n();
const router = useRouter()
const { proxy } = getCurrentInstance() as any;
const realId = computed(() => store?.state.wallet?.realId);  // Asterisk address
const idTemp: any = computed(() => store?.state.wallet?.idTemp);  // Full address
const tokenId = ref(1);
const loadAddress: any = ref(0)
const loadAbi: any = ref(0);
const TipsState: any = ref(false as any)  // has popup-a 
const transition = ref(true);
const email: any = ref('')


const copyUrl = (e:any) => {
    if( e.target.innerText.length > 10 ){
        const input = document.createElement("input");
        document.body.appendChild(input);
        input.setAttribute("value", e.target.innerText);
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
}

// Get address binding information
const addressInfo = () => {
    proxy.$api.get(`/code/user/baddress?address=${idTemp.value}`).then((result: any) => {
        email.value = result.data;
    }).catch((err: any) => {
        console.log(err); 
    })
}


// ----------
let data:any = ref([]);
const loadingState: any = ref(0);
const chainId: any = computed(() => store.state.user?.chainId );
const readyAssetsF = computed(() => store.state.myAssets?.readyAssets );
const transferSuccess = computed(() => store.state.myAssets?.transferSuccess);

watch(chainId, (newVal, oldVal: any) => {
    if(!oldVal || oldVal == -1) return;
    console.log('her2');
    // initMyAssetes()
	getData(ecrType.value)
}, {immediate:true,deep:true});

watch(realId, (newVal, oldVal) => {
    if(oldVal == -1 || !oldVal) return;
    console.log(2, newVal);
    addressInfo()
    initMyAssetes()
	getData(ecrType.value)
}, {immediate:true,deep:true});

watch(transferSuccess, (newVal, oldVal) => {
    if(!oldVal) return;
    console.log(3, newVal);
    addressInfo()
    initMyAssetes()
    getData(ecrType.value)
}, {immediate:true,deep:true});


// select
let abiSelect:any = ref(null);
const addressSelect:any = ref(null);




// input actived
const myInput:any = ref(null)
let inputShow:any = ref(false)
let inputValue:any = ref('')
const clearInput = () => {
    inputValue.value = ''
    myInput.value.focus()
}
const inputOtherClick = (e:any) => {
    if( myInput.value.contains(e.target) ){
        return
    }else{
        inputValue.value = ''
        inputShow.value = false;
    }
}


const typeArr: any = ref([]); // type checkbox array 
const changeText = (parentLi:any, cancel?: boolean) => {
    typeArr.value = [];
    let longString:string = ''
    let firstLi:string = ''
    const selectedArr = parentLi.querySelectorAll('.selected')
    let selectArrLen = selectedArr.length
    if( cancel ){
        for( let i = 0;i < selectArrLen; i++ ){
            selectedArr[i].classList.remove('selected');
        }
        selectArrLen = 0;
    }
    if( selectArrLen == 0 ){
        // When not selected, the first item is checked by default
        firstLi = parentLi.parentElement.querySelectorAll('li')[1].querySelector('div').innerText;
        (parentLi.parentElement.querySelector('li').querySelector('div') as HTMLElement).innerText = firstLi;
        parentLi.parentElement.querySelectorAll('li')[1].querySelector('div').classList.add('selected');
    }else{
        let index = 0;
        if( selectedArr[0].getAttribute('data-name') == 'All types' && selectArrLen > 1 ){
            selectedArr[0].classList.remove('selected');
            index = 1;
        }
        if( selectedArr[0].getAttribute('data-name') == 'All types' && selectArrLen === 1 ){
            typeArr.value = []
            selectArrLen = 0
            longString = selectedArr[0].innerText
        }
        for( let i = index;i < selectArrLen; i++ ){
            typeArr.value.push(selectedArr[i].getAttribute('data-name'));
            if( i == selectArrLen-1 ){
                longString += selectedArr[i].innerText
            }else{
                longString += selectedArr[i].innerText + ', '
            }
        }
        (parentLi.parentElement.querySelector('li').querySelector('div') as HTMLElement).innerText = longString;
    }
}

watch(() => typeArr.value, (now, old) => {
    console.log(now, 'now'); //Proxy {0: 'Game'}
    if(now.length == 0 || !now[0]) {
        getData(ecrType.value);
        return; 
    };

    console.log(loadingState.value, 'loadingState');
    
    if(loadingState.value == 1) return;
    (async function loop(index){
        if( index == 0 ) {
            data.value = [];
            window.scrollTo(0,0);
        }
        await getData(ecrType.value, now[index]); 
        console.log(9999);
        console.log(loadingState.value, 'loadingState.value');
        console.log(now);
        if (++index<now.length) {
            setTimeout(() => {
                loop(index)
            }, 400);
        } else {
            loadingState.value = 2; // Loading complete
            console.log(loadingState.value, 'loadingState filter Loading complete');
        }
    })(0)
})


// select
let showItem1:any = ref(false)
let showItem2:any = ref(false)
let showItem3:any = ref(false)
const showSelect = (index:any) => {
    switch (index){
        case 1:
            showItem1.value = !showItem1.value;
            showItem2.value = false;
            showItem3.value = false;
            break;
        case 2:
            showItem2.value = !showItem2.value;
            showItem1.value = false;
            showItem3.value = false;
            break;
        default:
            showItem3.value = !showItem3.value;
            showItem1.value = false;
            showItem2.value = false;
            break;
    }
}
const selectItem = (e:any) => {    
    const parentLi = e.target.parentElement.parentElement
    if( e.target.className == 'ok' ){
        changeText(parentLi);
        showItem1.value = false;
        showItem2.value = false;
        showItem3.value = false;
    }else if( e.target.className == 'cancel' ){
        changeText(parentLi, true);
        showItem1.value = false;
        showItem2.value = false;
        showItem3.value = false;
    }else{
        (e.target as HTMLElement).classList.toggle('selected')
        if( e.target.innerText == 'ALL' || e.target.innerText == 'ERC 721' || e.target.innerText == 'ERC 1155' ){
            // changeText(parentLi);
            (parentLi.parentElement.querySelector('li').querySelector('div') as HTMLElement).innerText = e.target.innerText;
            var eDiv = e.target.parentNode.children;//Get all subset elements of parent
            for (var i = 0, elen = eDiv.length; i < elen; i++) {
                if ( eDiv[i] !== e.target) {           //Exclude yourself
                    eDiv[i].classList.remove('selected')
                }
            }
            showItem1.value = false;
            showItem2.value = false;
            showItem3.value = false;
        }
    }
}

// switch erc button
const changeType = (type: Number) => {
    if(loadingState.value == 2 || loadingState.value == 0){
        ecrType.value = type;
        getData(type)
    }
}

//  game pool
const getGamePool = (address: string) => {
    return new Promise((resolve, reject) => {
        proxy.$api.get(`/game/query?addr=${address}`).then((result: any) => {
            console.log(result.data, 'gamepool');
            resolve(result.data)
        }).catch(( err: any ) => {
            resolve(0) 
        })
    })
}


const loadPool = async (item: any) => {
    console.log(item);
    if(item.isLoading) return;
    if(item.type == "head_mumbai" || item.type == "head_fuji"){
        loadAddress.value = item.type == "head_fuji" ? cyberClub_Fuji.address : cyberClub.address;
        loadAbi.value = cyberClub_Fuji.abi;
    }else if(item.type == "role_mumbai" || item.type == "role_fuji"){
        loadAddress.value = item.type == "role_fuji" ? Cyborg_Fuji.address : Cyborg.address;
        loadAbi.value = Cyborg_Fuji.abi;
    }else if(item.type == "game_mumbai" || item.type == "game_fuji"){
        loadAddress.value = item.type == "role_fuji" ? game_Fuji.address : arms.address;
        loadAbi.value = game_Fuji.abi;
    }
    tokenId.value = item.id;
    TipsState.value = true;
    transition.value = true;
    return;
}


// Withdrawal and withdrawal
const withdrawRole =  async (item: any) => {
    if(chainId.value != 80001 || !item.isLoading) return;
    console.log(item);
    let result = await Web3.withdrawRole(gamePool.abi, gamePool.address, Number(item.id));
    console.log(result);
}


const initLoad = () => {
    transition.value = false
    setTimeout(() => {
        TipsState.value = false
    }, 300);
}

const { nft, nft_fuji, arms, gamePool, GiftBox, cyberClub, cyberClub_Fuji, Cyborg, Cyborg_Fuji, game_Fuji, LootBox, lootBox_Bsc, cytV2, coin, game_bsc } = Web3.contracts;

const getData: any = async (type: Number, filter?: any) => {
    if(!filter) data.value = [];
    if(!filter) {
        data.value = [];
        window.scrollTo(0,0);
    }
    if(loadingState.value == 1) return;
    loadingState.value = 1; // Initialize to 0. 1 means loading. 2 means loading is complete
    let result: any = await getGamePool(idTemp.value)
    boxId9.value = false;
    let weapons = [];
    let role = [];
    let badge = [];
    for (const iterator in result) {
        if(iterator.length == 6){ // arms id
            let key = iterator 
            let val = result[iterator]
            weapons.push({
                [ key ]: val
            })
        }else if(iterator.length == 11){ // role id
            role.push(iterator)
        }else if(iterator.length == 7){ //bagel id
            let key = iterator 
            let val = result[iterator]
            badge.push({
                [ key[ key.length-1 ] ]: val
            })
        }
    }

    console.log(weapons, role, badge, '====>gamepool');
    return new Promise(async (resolve, reject) => {
            if(chainId.value == 80001){  //mumbai
                if(!type){
                    if(filter){ // Left column filter
                        console.log(filter, 'filter');
                        
                        if(filter == 'Game'){
                            let game_resulte = await Web3.balanceOfBatch(arms.abi , arms.address, store.state.myBox?.game);
                            await getNFTData(game_resulte, 'game', 'game_mumbai', store.state.myBox?.game);
                        }else if(filter == 'Badge'){
                            // let nft = await Web3.batchBalanceOf(nft.abi , nft.address, store.state.myBox?.badge);
                            // await getNFTData(nft, 'server', 'server_mumbai', store.state.myBox?.badge);
                        }else if(filter == 'role'){
                            let role_result = await Web3.tokensOfOwner(Cyborg.abi, Cyborg.address);
                            await getHead(role_result, 'role', 'role_mumbai');
                        }else if(filter == 'head'){
                            let game_resulte = await Web3.tokensOfOwner(cyberClub.abi , cyberClub.address);
                            await getHead(game_resulte, 'head', 'head_mumbai');
                        }else{
                            let box_result = await Web3.balanceOfBatch(LootBox.abi, LootBox.address, store.state.myBox?.box);
                            await getNFTData(box_result, 'box', 'box_mumbai', store.state.myBox?.box);
                        }
                        resolve(1)
                        return;
                    }
                    // await getHead(role, 'role', 'role_mumbai', 'isLoading');
                    // // await getNFTData(weapons, 'weapons', 'weapons_mumbai', false, true);
                    // await getNFTData(badge, 'badge', 'badge_mumbai', store.state.myBox?.badge);
                    let game_resulte = await Web3.balanceOfBatch(arms.abi , arms.address, store.state.myBox?.game);
                    await getNFTData(game_resulte, 'game', 'game_mumbai', store.state.myBox?.game);
                    let role_result = await Web3.tokensOfOwner(Cyborg.abi, Cyborg.address);
                    await getHead(role_result, 'role', 'role_mumbai');
                    let cyberClub_result = await Web3.tokensOfOwner(cyberClub.abi, cyberClub.address);
                    await getHead(cyberClub_result, 'head', 'head_mumbai');
                    let box_result = await Web3.balanceOfBatch(LootBox.abi, LootBox.address, store.state.myBox?.box);
                    await getNFTData(box_result, 'box', 'box_mumbai', store.state.myBox?.box);
                }else if(type == 1){
                    if(filter){ // Left column filter
                        if(filter == 'role'){
                            let role_result = await Web3.tokensOfOwner(Cyborg.abi, Cyborg.address);
                            await getHead(role_result, 'role', 'role_mumbai');
                        }else if(filter == 'head'){
                            let cyberClub_result = await Web3.tokensOfOwner(cyberClub.abi , cyberClub.address);
                            await getHead(cyberClub_result, 'head', 'head_mumbai');
                        }
                        resolve(1)
                        return;
                    }
                    let role_result = await Web3.tokensOfOwner(Cyborg.abi, Cyborg.address);
                    await getHead(role_result, 'role', 'role_mumbai');
                    let cyberClub_result = await Web3.tokensOfOwner(cyberClub.abi , cyberClub.address);
                    await getHead(cyberClub_result, 'head', 'head_mumbai');
                }else{
                    // let result = await Web3.batchBalanceOf(nft.abi, nft.address);
                    // await getNFTData(result, 'server', 'server_mumbai');
                    if(filter){ // Left column filter
                        if(filter == 'Game'){
                            let game_resulte = await Web3.balanceOfBatch(arms.abi , arms.address, store.state.myBox?.game);
                            await getNFTData(game_resulte, 'game', 'game_mumbai', store.state.myBox?.game);
                        }else if(filter == 'Badge'){
                            // let badge = await Web3.balanceOfBatch(arms.abi , arms.address, store.state.myBox?.game);
                            // await getNFTData(badge, 'server', 'server_mumbai');
                        }else{
                            let box_result = await Web3.balanceOfBatch(LootBox.abi, LootBox.address, store.state.myBox?.box);
                            await getNFTData(box_result, 'box', 'box_mumbai', store.state.myBox?.box);
                        }
                        resolve(1)
                        return;
                    }
                    // await getNFTData(weapons, 'weapons', 'weapons_mumbai');
                    let game_resulte = await Web3.balanceOfBatch(arms.abi , arms.address, store.state.myBox?.game);
                    await getNFTData(game_resulte, 'game', 'game_mumbai', store.state.myBox?.game);
                    let box_result = await Web3.balanceOfBatch(LootBox.abi, LootBox.address, store.state.myBox?.box);
                    await getNFTData(box_result, 'box', 'box_mumbai', store.state.myBox?.box);
                }
            }
            if(chainId.value == 43113){ // fuji
                if(!type){
                    if(filter){ // Loading complete
                        if(filter == 'Game'){
                            let game_result: any = await Web3.balanceOfBatch(game_Fuji.abi, game_Fuji.address, store.state.myBox?.game);
                            await getNFTData(game_result, 'game', 'game_fuji', store.state.myBox?.game)
                        }else if(filter == 'Badge'){
                            let result = await Web3.balanceOfBatch(nft_fuji.abi, nft_fuji.address, store.state.myBox?.badge);
                            await getNFTData(result, 'badge', 'badge_fuji', store.state.myBox?.badge);
                        }else if(filter == 'role'){
                            let Cyborg_result = await Web3.tokensOfOwner(Cyborg_Fuji.abi, Cyborg_Fuji.address);
                            await getHead(Cyborg_result, 'role', 'role_fuji');
                        }else if(filter == 'head'){
                            let cyberClub_result = await Web3.tokensOfOwner(cyberClub_Fuji.abi, cyberClub_Fuji.address);
                            await getHead(cyberClub_result, 'head', 'head_fuji');
                        }else{
                            let box_result: any = await Web3.balanceOfBatch(GiftBox.abi, GiftBox.address, store.state.myBox?.box);
                            await getNFTData(box_result, 'box', 'box_fuji', store.state.myBox?.box);
                        }
                        resolve(1)
                        return;
                    }
                    let result = await Web3.balanceOfBatch(nft_fuji.abi, nft_fuji.address, store.state.myBox?.badge);
                    await getNFTData(result, 'badge', 'badge_fuji', store.state.myBox?.badge);
                    let game_result: any = await Web3.balanceOfBatch(game_Fuji.abi, game_Fuji.address, store.state.myBox?.game);
                    await getNFTData(game_result, 'game', 'game_fuji', store.state.myBox?.game)
                    let Cyborg_result = await Web3.tokensOfOwner(Cyborg_Fuji.abi, Cyborg_Fuji.address);
                    await getHead(Cyborg_result, 'role', 'role_fuji');
                    let cyberClub_result = await Web3.tokensOfOwner(cyberClub_Fuji.abi, cyberClub_Fuji.address);
                    await getHead(cyberClub_result, 'head', 'head_fuji');
                    let box_result: any = await Web3.balanceOfBatch(GiftBox.abi, GiftBox.address, store.state.myBox?.box);
                    await getNFTData(box_result, 'box', 'box_fuji', store.state.myBox?.box);
                    
                }else if(type == 1){
                    if(filter){ // Left column filter
                        if(filter == 'role'){
                            let Cyborg_result = await Web3.tokensOfOwner(Cyborg_Fuji.abi, Cyborg_Fuji.address);
                            await getHead(Cyborg_result, 'role', 'role_fuji');
                        }else if(filter == 'head'){
                            let cyberClub_result = await Web3.tokensOfOwner(cyberClub_Fuji.abi, cyberClub_Fuji.address);
                            await getHead(cyberClub_result, 'head', 'head_fuji');
                        }
                        resolve(1)
                        return;
                    }
                    let Cyborg_result = await Web3.tokensOfOwner(Cyborg_Fuji.abi, Cyborg_Fuji.address);
                    await getHead(Cyborg_result, 'role', 'role_fuji');
                    let cyberClub_result = await Web3.tokensOfOwner(cyberClub_Fuji.abi, cyberClub_Fuji.address);
                    await getHead(cyberClub_result, 'head', 'head_fuji');
                }else{
                    if(filter){ // Left column filter
                        if(filter == 'Game'){
                            let game_result: any = await Web3.balanceOfBatch(game_Fuji.abi, game_Fuji.address, store.state.myBox?.game);
                            await getNFTData(game_result, 'game', 'game_fuji', store.state.myBox?.game)
                        }else if(filter == 'Badge'){
                            let result = await Web3.balanceOfBatch(nft_fuji.abi, nft_fuji.address, store.state.myBox?.badge);
                            await getNFTData(result, 'badge', 'badge_fuji', store.state.myBox?.badge);
                        }else{
                            let box_result: any = await Web3.balanceOfBatch(GiftBox.abi, GiftBox.address, store.state.myBox?.box);
                            await getNFTData(box_result, 'box', 'box_fuji', store.state.myBox?.box);
                        }
                        resolve(1)
                        return;
                    }
                    let result = await Web3.balanceOfBatch(nft_fuji.abi, nft_fuji.address, store.state.myBox?.badge);
                    await getNFTData(result, 'badge', 'badge_fuji', store.state.myBox?.badge);
                    let game_result: any = await Web3.balanceOfBatch(game_Fuji.abi, game_Fuji.address, store.state.myBox?.game);
                    await getNFTData(game_result, 'game', 'game_fuji', store.state.myBox?.game)
                    let box_result: any = await Web3.balanceOfBatch(GiftBox.abi, GiftBox.address, store.state.myBox?.box);
                    await getNFTData(box_result, 'box', 'box_fuji', store.state.myBox?.box);
                }
            }
            if(chainId.value == 56){
                if(!type){
                    let game_result: any = await Web3.balanceOfBatch(game_bsc.abi, game_bsc.address, store.state.myBox?.game);
                    await getNFTData(game_result, 'game', 'game_bsc', store.state.myBox?.game)
                    let box_result: any = await Web3.balanceOfBatch(lootBox_Bsc.abi, lootBox_Bsc.address, store.state.myBox?.box);
                    if(box_result[9] > 0) boxId9.value = true;
                    await getNFTData(box_result, 'box', 'box_bsc', store.state.myBox?.box);
                }else if(type == 1){

                }else{
                    let game_result: any = await Web3.balanceOfBatch(game_bsc.abi, game_bsc.address, store.state.myBox?.game);
                    await getNFTData(game_result, 'game', 'game_bsc', store.state.myBox?.game)
                    let box_result: any = await Web3.balanceOfBatch(lootBox_Bsc.abi, lootBox_Bsc.address, store.state.myBox?.box);
                    if(box_result[9] > 0) boxId9.value = true;
                    await getNFTData(box_result, 'box', 'box_bsc', store.state.myBox?.box);
                }
            }

            loadingState.value = 2; // Left column filter
            resolve(1);
    })

}

// array [0, 1] Indicates that there are two NFT assets with IDS 0 and 1 respectively
const getHead: any = async (res: any, path: any, type: any, isLoading?: any) => {
    return new Promise((resolve, reject) => {
        if(res.length == 0) {
            resolve(1);
            return;
        }
         (function loop(index){
             proxy.$api.get(`https://api.cyberpop.online/${path}/${res[index]}`).then((result:any) => {
                data.value.push({
                    id: res[index],
                    type: type,
                    isLoading: isLoading || false,
                    number: 1,
                    data: result || { name: res[index], image: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/ba5fcf2b4854eebdc64dc80089f2cc26.png' },
                })
                if (++index<res.length) {
                    loop(index);
                } else {
                    resolve(1)
                }
            }).catch((err:any) => {
                console.log(err); 
            })
         })(0)
    })
}

// The array [0,1] indicates that the NFT with ID 0 has no assets, and the NTF asset with ID 1 is 1
const getNFTData: any = async (res: any, path: any, type: any, ids?: any, isLoading?: any) => {
    return new Promise((resolve, reject) => {
         (function loop(index){
             if(res[index] == 0) { //To reduce unnecessary requests
                 if (++index<res.length) {
                    loop(index);
                } else {
                    resolve(1);
                }
                return;
             }
             proxy.$api.get(`https://api.cyberpop.online/${path}/${ids[index]}`).then((result:any) => {
                if(res[index] > 0 || index == 101101){
                    data.value.push({
                        id: ids[index],
                        type: type,
                        isLoading: isLoading || false,
                        number: res[index],
                        data: result || { name: res[index], image: 'https://d2cimmz3cflrbm.cloudfront.net/nwhome/ba5fcf2b4854eebdc64dc80089f2cc26.png' },
                    })
                }
                if (++index<res.length) {
                    loop(index);
                } else {
                    resolve(1)
                }
            }).catch((err:any) => {
                console.log(err); 
            })
         })(0)
    })
}

// ecr exchange
let ecrType:any = ref(0);


// NFT transfer
const transferActive = computed(() => store?.state.myAssets?.transferActive)
const transferItem:any = ref(null)
const transferPopup = (item:any) => {
    store.dispatch('myAssets/transferChange',true)
    store.dispatch('myAssets/transferChangeAni',true)
    transferItem.value = JSON.parse(JSON.stringify(item));
    if( item.type == 'server_mumbai' ){
        abiSelect.value = Web3.contracts.nft.abi;
        addressSelect.value = Web3.contracts.nft.address
    }else if( item.type == 'game_mumbai' ){
        abiSelect.value = Web3.contracts.arms.abi
        addressSelect.value = Web3.contracts.arms.address
    }else if( item.type == 'role_mumbai'){
        abiSelect.value = Web3.contracts.erc721.abi
        addressSelect.value = Web3.contracts.erc721.address
    }else if( item.type == 'game_mumbai'){
        abiSelect.value = Web3.contracts.arms.abi
        addressSelect.value = Web3.contracts.arms.address
    }else if ( item.type == 'game_fuji'){
        abiSelect.value = Web3.contracts.game_Fuji.abi
        addressSelect.value = Web3.contracts.game_Fuji.address
    }else if( item.type == 'role_fuji'){
        abiSelect.value = Web3.contracts.Cyborg_Fuji.abi
        addressSelect.value = Web3.contracts.Cyborg_Fuji.address
    }else if( item.type == 'box_fuji'){
        abiSelect.value = Web3.contracts.GiftBox.abi
        addressSelect.value = Web3.contracts.GiftBox.address
    }else if( item.type == 'head_fuji'){
        abiSelect.value = Web3.contracts.cyberClub_Fuji.abi
        addressSelect.value = Web3.contracts.cyberClub_Fuji.address
    }else if( item.type == 'head_mumbai'){
        abiSelect.value = Web3.contracts.cyberClub.abi
        addressSelect.value = Web3.contracts.cyberClub.address
    }else if( item.type == 'box_mumbai'){
        abiSelect.value = Web3.contracts.LootBox.abi
        addressSelect.value = Web3.contracts.LootBox.address
    }else if( item.type == 'badge_fuji'){
        abiSelect.value = Web3.contracts.nft_fuji.abi
        addressSelect.value = Web3.contracts.nft_fuji.address
    }else if( item.type == 'box_bsc'){
        abiSelect.value = Web3.contracts.lootBox_Bsc.abi
        addressSelect.value = Web3.contracts.lootBox_Bsc.address
    }else if( item.type == 'game_bsc'){
        abiSelect.value = Web3.contracts.game_bsc.abi
        addressSelect.value = Web3.contracts.game_bsc.address
    }
    console.log(item.type, 'item.type');
    console.log(transferItem.value , 'transferItem.value ');
}


// search submit
const searchSubmit = () => {
    inputShow.value = false
}

//myAssets 
const myAssets = ref({}) as any;
const whiteList: any = ref(false);
const boxId9: any = ref(false);
const bobabrewery = ref('') as any;
const haveWhiteWindow: any = ref(false);
const initMyAssetes = async () => {
    if(chainId.value == 43113){
        var a = await Web3.ERC20balanceOf(cytV2.abi, cytV2.address);
        var b = await Web3.ERC20balanceOf(coin.abi, coin.address);
    }
    myAssets.value.cyt = a || 0;
    myAssets.value.coin = b || 0;
    console.log(myAssets.value, 'cyt');
        // Have you purchased a white paper
    proxy.$api.post(`/bobabrewery/boba/api/v1/cyberpop?walletAddress=${idTemp.value}`).then((res: any) => {
        console.log(res.data, 'data');
        res.data?.code != 200 ? bobabrewery.value = 'request fail' : bobabrewery.value = '';
        res.data?.data ? whiteList.value = true : whiteList.value = false;
    }).catch( (err: any) => {
        console.log(err)
    })

}
const whiteListWindows = (isBoxId9?: any) => {
    store.dispatch('user/xplanChangeAni', true);
    haveWhiteWindow.value = true;
}




// Open the box
const open = async (item: any) => {
    if(item.number == 0 || item.type == 'box_bsc') return;
    store.dispatch('user/xplanChangeAni', true);
    store.dispatch('user/TipsState', {show: true, info: { hasLoading: false, hasClose: true, title: t('message.box.opening'), content: t('message.box.open_text'), addNetwork: false, boxId: item.id, haveNFT: item.number }});
}


onUnmounted(() => {
    window.removeEventListener('click', inputOtherClick, true);
})

watch(readyAssetsF, (newVal: any, oldVal: any) => {
    if(newVal == -1) return;
    console.log('her1', newVal);
    setTimeout(() => {
        getData(ecrType.value)
        addressInfo()
        initMyAssetes()
    }, 500);
}, {immediate:true,deep:true});


onMounted(async () => {
    setTimeout(() => {
        if( realId.value == -1 && proxy.$route.path == '/knapsack' ){
            router.push('/')
        }
    }, 2000);
    window.scrollTo(0,0);
    window.addEventListener('click', inputOtherClick, true);
    store.dispatch('myAssets/transferChange',false)
    store.dispatch('myAssets/transferChangeAni',false)
    console.log(store.state.myAssets?.readyAssets , 'store.state.myAssets?.readyAssets ');
    
    if(store.state.myAssets?.readyAssets !== -1){
        // data.value = JSON.parse(JSON.stringify(store.state.myAssets?.dataSum));
        getData(ecrType.value)
        initMyAssetes()
        addressInfo()
    }
        
})


</script>
<style lang="less" scoped>
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
    .assets{
        width: 100%;
        background-color: #121122;
        padding-bottom: 20px;
        .wrap{
            width: 100%;
            padding-top: 55px;
            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwAssets/bodybg-phone.png');
            background-repeat: no-repeat;
            background-position: left top;
            background-size: 100% auto;
            .welcome{
                text-align: center;
                .icon{
                    width: 81px;
                    height: 72px;
                    margin: 36px auto 0;
                    text-align: center;
                    background-image: url('../../../assets/nwAssets/portraitBg.svg');
                    background-size: 100% auto;
                    img{
                        width: 58px;
                        height: 58px;
                        margin: 5px 12px 0 11px;
                    }
                }
                .title{
                    // width: 151px;
                    height: 20px;
                    margin: 12px 0;
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 20px;
                    white-space: nowrap;
                }
                .id{
                    // width: 184px;
                    height: 20px;
                    font-size: 14px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 16px;
                }
                .desc{
                    width: 303px;
                    min-height: 64px;
                    margin: 12px auto 28px;
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #B1B5C3;
                    line-height: 16px;
                }
                .myAssets, .whiteList{
                    color: #8478FF;
                    margin: 15px 0;
                    font-size: 10px;
                    img{
                        vertical-align: middle;
                    }
                    .item{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        p{
                            margin-right: 10px;
                        }
                        .button{
                            background: #8478FF;
                            color: #fff;
                            padding: 5px 10px;
                            font-size: 12px;
                            border-radius: 5px;
                        }
                    }
                    .item:not(:last-child){
                        margin-right: 10px;
                        margin-bottom: 20px;
                    }
                }
                .search{
                    margin-bottom: 96px;
                    .input{
                        position: relative;
                        width: 303px;
                        height: 40px;
                        margin-left: 36px;
                        border-radius: 2px 2px 2px 2px;
                        border: 2px solid #8478FF;
                        input[type='text']{
                            width: 253px;
                            height: 100%;
                            font-size: 14px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                            color: #8478FF;
                            line-height: 16px;
                            background-color: transparent;
                            border: none;
                            outline: none;
                        }
                        input::-webkit-input-placeholder { 
                            color: #8478FF;
                        }
                        input:-moz-placeholder { 
                            color: #8478FF;
                        }
                        input::-moz-placeholder {
                            color: #8478FF;
                        }
                        input:-ms-input-placeholder {
                            color: #8478FF;
                        }
                        img:not(.clear){
                            width: 16px;
                            height: 16px;
                            margin-left: 10px;
                            vertical-align: middle;
                        }
                    }
                    .input.actived{
                        border: 2px solid #ffffff;
                        input[type='text']{
                            color: #ffffff;
                        }
                        input::-webkit-input-placeholder { 
                            color: #ffffff;
                        }
                        input:-moz-placeholder { 
                            color: #ffffff;
                        }
                        input::-moz-placeholder {
                            color: #ffffff;
                        }
                        input:-ms-input-placeholder {
                            color: #ffffff;
                        }
                        .clear{
                            position: absolute;
                            top: 0;
                            bottom: 0;
                            right: 40px;
                            margin: auto 0;
                        }
                    }
                    .menuSelect{
                        position: absolute;
                        width: 100%;
                        margin: 0 0 32px 0;
                        padding-top: 24px;
                        .wrapbox{
                            display: flex;
                            height: 440px;
                            overflow-x: scroll;
                            overflow-y: hidden;
                            white-space: nowrap;
                            .token,.type,.quality{
                                display: inline-block;
                                margin-right: 16px;
                                li{
                                    height: 40px;
                                    font-size: 14px;
                                    font-family: AlibabaPuHuiTi_2_115_Black;
                                    color: #FFFFFF;
                                    line-height: 40px;
                                    text-align: left;
                                    text-indent: 12px;
                                }
                                li:first-child{
                                    background: #8478FF;
                                    position: relative;
                                }
                                li:first-child::after{
                                    position: absolute;
                                    top: 3vw;
                                    right: 3vw;
                                    display: inline-block;
                                    content: "";
                                    width: 8px;
                                    height: 8px;
                                    border: .8vw solid #fff;
                                    border-top: none;
                                    border-left: none;
                                    transform: rotate(45deg);
                                }
                                li:last-child{
                                    z-index: 3;
                                    position: absolute;
                                    display: flex;
                                    flex-direction: column;
                                    align-items: left;
                                    width: 148px;
                                    height: 132px;
                                    padding: 20px;
                                    margin-top: 8px;
                                    background: linear-gradient(221deg, rgba(132, 120, 255, .85) 0%, rgba(12, 9, 17, 0) 100%),
                                                linear-gradient(77deg, rgba(120, 90, 187, .85) 0%, rgba(12, 9, 17, .9) 100%);
                                    box-shadow: -4px 4px 2px 1px rgba(0, 0, 0, 0.25);
                                    border-radius: 2px 2px 2px 2px;
                                    div:not(.btn){
                                        position: relative;
                                        height: 46px;
                                        padding-left: 20px;
                                        font-size: 14px;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #FFFFFF;
                                        line-height: 46px;
                                        cursor: pointer;
                                    }
                                    div.selected{
                                        font-family: AlibabaPuHuiTi_2_105_Heavy;
                                    }
                                    div.selected::before{
                                        display: inline-block;
                                        content: '';
                                        position: absolute;
                                        top: 4.2vw;
                                        left: 2vw;
                                        width: 1vw;
                                        height: 2vw;
                                        border: 2px solid #fff;
                                        border-top: none;
                                        border-left: none;
                                        transform: rotate(45deg);
                                    }
                                    .btn{
                                        display: flex;
                                        justify-content: flex-end;
                                        width: 100%;
                                        div{
                                            width: 88px;
                                            height: 42px;
                                            padding: 0;
                                            font-size: 14px;
                                            text-indent: 0;
                                            text-align: center;
                                            font-family: AlibabaPuHuiTi_2_105_Heavy;
                                            background: #8478FF;
                                            border-radius: 2px 2px 2px 2px;
                                            cursor: pointer;
                                        }
                                        div + div{
                                            margin-left: 12px;
                                        }
                                    }
                                }
                            }
                            .token{
                                width: 109px;
                                margin-left: 36px;
                                li:first-child{
                                    width: 109px;
                                    div{
                                        width: 75%;
                                        letter-spacing: .04vw;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                    }
                                }
                                li:last-child{
                                    left: 36px;
                                    height: 176px;
                                }
                            }
                            .type{
                                width: 288px;
                                li:first-child{
                                    width: 288px;
                                    div{
                                        width: 90%;
                                        letter-spacing: .04vw;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                    }
                                }
                                li:last-child{
                                    right: 0px;
                                    width: 288px;
                                    height: 386px;
                                }
                            }
                            .quality{
                                width: 143px;
                                li:first-child{
                                    width: 143px;
                                    div{
                                        width: 80%;
                                        letter-spacing: .04vw;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                    }
                                }
                                li:last-child{
                                    right: 0px;
                                    width: 228px;
                                    height: 316px;
                                }
                            }
                        }
                        .wrapbox::-webkit-scrollbar {
                            width: 0;
                            height: 0;
                            color: transparent;
                        }
                    }
                }
            }
            .ecr{
                margin-bottom: -2px;
                .ecrchange{
                    min-height: 300px;
                    transition: all 430ms ease-out;
                    .ecr721, .ecr115, .ecrAll{
                        ul{
                            display: flex;
                            align-items: center;
                            flex-direction: column;
                            li{
                                width: 303px;
                                height: 387px;
                                padding: 16px;
                                margin-bottom: 35px;
                                background: linear-gradient(110deg, rgba(8, 6, 19, 0.22) 0%, rgba(132, 120, 255, 0.38) 100%),
                                            linear-gradient(100deg, rgba(4, 255, 162, 0.1) 0%, rgba(27, 54, 44, 0) 100%);
                                border: 2px solid;
                                border-image: linear-gradient(206deg, rgba(132, 120, 255, 0.48), rgba(71, 57, 128, 1)) 2 2;
                                img{
                                    width: 100%;
                                    height: 270px;
                                }
                                .name{
                                    height: 24px;
                                    margin: 20px 0 24px 0;
                                    font-size: 18px;
                                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                    color: #FFFFFF;
                                    line-height: 24px;
                                    span{
                                        float: right;
                                        height: 24px;
                                        font-size: 24px;
                                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                        line-height: 24px;
                                    }
                                }
                                .btn{
                                    display: flex;
                                    justify-content: center;
                                    div{
                                        height: 48px;
                                        font-size: 16px;
                                        font-family: AlibabaPuHuiTi_2_115_Black;
                                        color: #FFFFFF;
                                        line-height: 48px;
                                        text-align: center;
                                        cursor: pointer;
                                    }
                                    .transfer{
                                        width: 134px;
                                        background-image: url('../../../assets/nwAssets/blackbg.svg');
                                        background-position: left top;
                                        background-size: 100% 100%;
                                    }
                                    .sell{
                                        width: 136px;
                                        background-image: url('../../../assets/nwAssets/purplebg.svg');
                                        background-position: left top;
                                        background-size: 100% 100%;
                                    }
                                    .not-allowed{
                                        cursor: not-allowed !important;
                                        opacity: .5;
                                    }
                                    .unpack{
                                        width: 271px;
                                        height: 48px;
                                        margin-top: -2px;
                                        background-image: url('../../../assets/nwAssets/unpackbg-phone.png');
                                        background-position: left top;
                                        background-size: 100% 100%;
                                    }
                                }
                            }
                        }
                    }
                    .noting{
                        text-align: center;
                        overflow: hidden;
                        p{
                            display: block;
                            margin: 20px 0;
                            color: #B1B5C3;
                            font-size: 14px;
                            font-family: AlibabaPuHuiTi_2_55_Regular;
                        }
                        img{
                            width: 120px;
                            height: 128px;
                            margin: 10px auto 30px;
                        }
                    }
                }
            }
            .nothing{
                text-align: center;
                margin-bottom: -2px;
                img{
                    width: 120px;
                    height: 128px;
                    margin: 80px auto;
                }
            }
        }
        .contract{
            color: #333;
            margin: 20px 10px;
            border: 2px solid;
            background-color: rgba(255, 0, 0, 0); /* 不支持线性的时候显示 */
            background-image: linear-gradient(to right, rgba(81, 105, 139, 0.027) , rgba(77, 122, 165, 0.582));
            border: 2px solid;
            border-image: linear-gradient(206deg, rgb(255, 255, 255), rgba(139, 255, 178, 0.31)) 2 2;
            .th{
                // background: rgba(16, 76, 165, 0.5) !important;
                color: #fff;
                border-bottom: 1px solid #0C0911;
                div{
                    line-height: 40px !important;
                }
                .Fuji, .Mumbai{
                    padding: 0 4px !important;
                }
            }
            .col{
                padding: 0 10px;
                display: flex;
                align-items: center;
                .name{
                    width: 20%;
                    color: #FFFFFF;
                    font-family: AlibabaPuHuiTi_2_55_Regular;   
                    font-size: 14px;
                    text-align: left;
                    line-height: 32px;
                    margin: 0.83vw 0;
                }
                .Fuji, .Mumbai{
                    width: 40%;
                    padding: 6px 4px 0;
                    color: #FFFFFF;
                    font-family: AlibabaPuHuiTi_2_55_Regular;   
                    font-size: 14px;
                    text-align: left;
                    line-height: 20px;
                    word-break: break-all;
                }
            }
            .td{
                div:active{
                    cursor: pointer;
                    color: red;
                }   
            }
        }
    }
</style>
