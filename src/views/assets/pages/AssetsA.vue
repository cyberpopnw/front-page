<template>
    <header-a path="javascript:scrollTo(0,0);" :type="0" ref="header"></header-a>
    <!-- <div class="section">
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
                <div class="id">{{realId == -1 ? '' : realId}}</div>
                <div class="desc">
                    {{$t('message.assets.wel_desc')}}
                </div>
            </div>
            <div class="ecr" v-if="readyAssetsF != -1" ref="ecrchange">
                <!-- <div class="ecr" v-if="false"> -->
                <div class="search" ref="myNav">
                    <div class="whiteList">
                        <p v-if="bobabrewery">{{ bobabrewery }}</p>
                        <p v-else>
                            <span v-if="whiteList" @click="whiteListWindows">{{ $t('message.assets.haveWhite')}} <img src="https://d2cimmz3cflrbm.cloudfront.net/nwAssets/whitelist.png" alt=""></span>
                            <span v-else>{{ $t('message.assets.notHaveWhite') }}</span>
                        </p>
                    </div>
                    <div class="line"></div>
                    <div class="myAssets">
                        <div class="item">
                            <p>{{$t('message.assets.my_cyt')}}</p>
                            <p>{{ myAssets.cyt || 0 }}</p>
                            <div class="getCoin">{{$t('message.assets.get_cyt')}}</div>
                        </div>
                        <div class="item">
                            <p>{{$t('message.assets.my_coin')}}</p>
                            <p>{{ myAssets.coin || 0}}</p>
                        </div>
                        <div class="line"></div>
                    </div>
                    <div class="title">{{t('message.assets.search_title')}}</div>
                    <div class="input">
                        <input type="text" :placeholder="t('message.assets.input_pla')">
                    </div>
                    <div class="type">
                        <!-- <div class="name" @click="checkall(1)">Type</div> -->
                        <div class="name" @click="checkall(1)">{{t('message.assets.type1')}}</div>
                        <div class="check">
                            <form action="" class="check">
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" v-model="hobby2" name="type" id="type1" value="Game">
                                    <label for="type1"><span>{{t('message.assets.type1_item6')}}</span></label>
                                </div>
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" v-model="hobby2" name="type" id="type2" value="Badge">
                                    <label for="type2"><span>{{t('message.assets.type1_item7')}}</span></label>
                                </div>
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" v-model="hobby2" name="type" id="type3" value="role">
                                    <label for="type3"><span>{{t('message.assets.type1_item8')}}</span></label>
                                </div>
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" v-model="hobby2" name="type" id="type4" value="head">
                                    <label for="type4"><span>{{t('message.assets.type1_item9')}}</span></label>
                                </div>
                                <div>
                                    <input :ref="typeItem" :checked="tbool" type="checkbox" v-model="hobby2" name="type" id="type5" value="LootBox">
                                    <label for="type5"><span>{{t('message.assets.type1_item10')}}</span></label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="quality">
                        <!-- <div class="name" @click="checkall(2)">Quality</div> -->
                        <div class="name" @click="checkall(2)">{{$t('message.assets.type2')}}</div>
                        <form action="" class="check">
                            <div>
                                <input :ref="qualityItem" :checked="qbool" type="checkbox" name="quality" id="quality1" value="Legend">
                                <label for="quality1"><span>{{t('message.assets.type2_item1')}}</span></label>
                            </div>
                            <div>
                                <input :ref="qualityItem" :checked="qbool" type="checkbox" name="quality" id="quality2" value="Epic">
                                <label for="quality2"><span>{{t('message.assets.type2_item2')}}</span></label>
                            </div>
                            <div>
                                <input :ref="qualityItem" :checked="qbool" type="checkbox" name="quality" id="quality3" value="Rare">
                                <label for="quality3"><span>{{t('message.assets.type2_item3')}}</span></label>
                            </div>
                            <div>
                                <input :ref="qualityItem" :checked="qbool" type="checkbox" name="quality" id="quality4" value="Common">
                                <label for="quality4"><span>{{t('message.assets.type2_item4')}}</span></label>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="ecrchange">
                    <div class="top">
                        <div class="typeALL" :class="!ecrType ? 'active' : ''" @click="changeType(0)">ALL</div>
                        <div class="type1" :class="ecrType == 1? 'active' : ''" @click="changeType(1)">ERC 721</div>
                        <div class="type2" :class="ecrType == 2 ? 'active' : ''" @click="changeType(2)">ERC 1155</div>
                    </div>
                    <loading v-if="loadingState != 2" :show="true" :index="0.5"/>
                    <div class="ercType" :style="{'margin-top': loadingState != 2 ? '12vw' : '0'}" v-show="!ecrType">
                        <ul class="prince" v-if="data.length > 0">
                            <li v-for="(item, index) in data" :key="index">
                                <div class="boxVideo">
                                    <img :src="item.data.image" v-if="item.data.image" alt="">
                                    <video class="third" autoplay muted loop v-else>
                                        <source :src="item.data.animation_url" type="video/mp4">
                                    </video>
                                </div>
                                <div class="name"><div class="loadName" v-if="item.isLoading"></div>{{item.data.name}}<span>x{{item.number}}</span></div>
                                <div class="btn" v-if="item.type != 'box_mumbai' && item.type != 'box_fuji'">
                                    <div class="transfer" :class="{'not-allowed': item.isLoading}" @click="transferPopup(item)">{{$t('message.assets.btn_tran')}}</div>
                                    <div class="sell not-allowed">{{$t('message.assets.btn_sell')}}</div>
                                </div>
                                <div class="btn" v-if="item.type != 'box_mumbai' && item.type != 'box_fuji' && false">
                                    <div class="load" :class="{'not-allowed': item.isLoading}" @click="loadPool(item)">{{$t('message.assets.btn_load')}}</div>
                                    <div class="claim" :class="{'not-allowed': !item.isLoading}" @click="withdrawRole(item)">&nbsp;&nbsp;{{$t('message.assets.but_claim')}}</div>
                                </div>
                                <div class="btn" v-if="item.type == 'box_mumbai' || item.type == 'box_fuji'">
                                    <div class="transfer" @click="transferPopup(item)">{{$t('message.assets.btn_tran')}}</div>
                                    <div class="sell" @click="open(item)">{{$t('message.assets.btn_unpack')}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="ercType" :style="{'margin-top': loadingState != 2 ? '12vw' : '0'}" v-show="ecrType == 1">
                        <ul class="prince" v-if="data.length > 0">
                            <li v-for="(item, index) in data" :key="index">
                                <img :src="item.data.image" alt="">
                                <div class="name"><div class="loadName" v-if="item.isLoading"></div>{{item.data.name}}<span>x{{item.number}}</span></div>
                                <div class="btn" v-if="item.type != 'box_mumbai' && item.type != 'box_fuji'">
                                    <div class="transfer" :class="{'not-allowed': item.isLoading}" @click="transferPopup(item)">{{$t('message.assets.btn_tran')}}</div>
                                    <div class="sell not-allowed">{{$t('message.assets.btn_sell')}}</div>
                                </div>
                                <div class="btn" v-if="item.type != 'box_mumbai' && item.type != 'box_fuji' && false">
                                    <div class="load" :class="{'not-allowed': item.isLoading}" @click="loadPool(item)">{{$t('message.assets.btn_load')}}</div>
                                    <div class="claim" :class="{'not-allowed': !item.isLoading}" @click="withdrawRole(item)">&nbsp;&nbsp;{{$t('message.assets.but_claim')}}</div>
                                </div>
                                <div class="btn" v-if="item.type == 'box_mumbai' || item.type == 'box_fuji'">
                                    <div class="transfer" @click="transferPopup(item)">{{$t('message.assets.btn_tran')}}</div>
                                    <div class="sell" @click="open(item)">{{$t('message.assets.btn_unpack')}}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="ercType" :style="{'margin-top': loadingState != 2 ? '12vw' : '0'}" v-show="ecrType == 2">
                        <ul class="prince" v-if="data.length > 0">
                            <li v-for="(item, index) in data" :key="index">
                                <img :src="item.data.image" alt="">
                                <div class="name"><div class="loadName" v-if="item.isLoading"></div>{{item.data.name}}<span>x{{item.number}}</span></div>
                                <div class="btn" v-if="item.type != 'box_mumbai' && item.type != 'box_fuji'">
                                    <div class="transfer" :class="{'not-allowed': item.isLoading}" @click="transferPopup(item)">{{$t('message.assets.btn_tran')}}</div>
                                    <div class="sell not-allowed">{{$t('message.assets.btn_sell')}}</div>
                                </div>
                                <div class="btn" v-if="item.type != 'box_mumbai' && item.type != 'box_fuji' && false">
                                    <div class="load" :class="{'not-allowed': item.isLoading}" @click="loadPool(item)">{{$t('message.assets.btn_load')}}</div>
                                    <div class="claim" :class="{'not-allowed': !item.isLoading}" @click="withdrawRole(item)">&nbsp;&nbsp;{{$t('message.assets.but_claim')}}</div>
                                </div>
                                <div class="btn" v-if="item.type == 'box_mumbai' || item.type == 'box_fuji'">
                                    <div class="transfer" @click="transferPopup(item)">{{$t('message.assets.btn_tran')}}</div>
                                    <div class="sell" @click="open(item)">{{$t('message.assets.btn_unpack')}}</div>
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
            <div class="nothing" v-if="readyAssetsF == -1" ref="nothing">
            <!-- <div class="nothing" v-if="true"> -->
                <div class="txt">{{t('message.assets.nothing')}}<a href="/">{{t('message.assets.nothing_home')}}</a></div>
                <img src="@/assets/nwAssets/nothing.svg" alt="">
            </div>
        </div>
        <div class="contract" @click="copyUrl($event)">
            <div class="col th">
                <div class="name">Contract</div>
                <div class="Fuji">Fuji</div>
                <div class="Mumbai">Mumbai</div>
            </div>
            <div class="col td">
                <div class="name">Badge</div>
                <div class="Fuji">0x586eba6be3ffc2499df154aef81b6d3a342c8e34</div>
                <!-- <div class="Mumbai">0x82cCB2FE8f4d07702f7c2F4200f0FBF630C52406</div> -->
                <div class="Mumbai">-----</div>
            </div>
            <!-- <div class="col td">
                <div class="name">weapons</div>
                <div class="Fuji">-----</div>
                <div class="Mumbai">0x8c7afbc6cabb0f97d71a0775b062b333c654fb5b</div>
            </div> -->
            <div class="col td">
                <div class="name">Game</div>
                <div class="Fuji">0xD4c27B5A5c15B1524FC909F0FE0d191C4e893695</div>
                <div class="Mumbai">0x3B52df1CAcb5d397f7A23Bf136DE110584d0Cd60</div>
            </div>
            <div class="col td">
                <div class="name">role</div>
                <div class="Fuji">0x78F66E37e9fE077d2F0126E3a26e6FB0D14F2BB0</div>
                <div class="Mumbai">0x37e769d34Cb48fb074fDd181bB4d803fBD49C712</div>
            </div>
            <div class="col td">
                <div class="name">head</div>
                <div class="Fuji">0x4B4cbe55125B48e868AA68E08b7527524C46E8AC</div>
                <div class="Mumbai">0x04b5D133394F360A3B88600043b8153AaA1C0e59</div>
            </div>
            <div class="col td">
                <div class="name">LootBox</div>
                <div class="Fuji">0x55eFD6D4cF31F925E36d268C12353848c9e782fD</div>
                <div class="Mumbai">0xC5FE394692a469BD5789D8247F281403e064E576</div>
            </div>
            <!-- <div class="col td">
                <div class="name">UGC</div>
                <div class="Fuji">0xB79Be4aF9990304b8b68679c599e5A38a80F5000</div>
                <div class="Mumbai">-----</div>
            </div> -->
        </div>
    </div>
    
    <footer-a></footer-a>
    <load-game-a :isShowTips="TipsState" :transition="transition" :tokenId="tokenId" v-if="TipsState" :loadAbi="loadAbi" :loadAddress="loadAddress" :number="number" @initLoad='initLoad'></load-game-a>
    <popup-a v-show="transferActive" :transferInfo="transferItem" :abi="abiSelect" :address="addressSelect"></popup-a>
    <WhiteList :isShowTips="haveWhiteWindow" v-if="haveWhiteWindow" @closeFinshed="haveWhiteWindow = false"/>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted, watch } from 'vue'
import store from '@/store'
import { useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import { toRaw } from '@vue/reactivity'
import { useI18n } from 'vue-i18n';
import { log } from 'console'
import WhiteList from '@/components/assets/whiteListA.vue'

const { t } = useI18n();


const router = useRouter()
const { proxy } = getCurrentInstance() as any
const realId = computed(() => store?.state.user?.realId);  // Asterisk address
const idTemp: any = computed(() => store?.state.user?.idTemp);  // Full address
const TipsState: any = ref(false as any)  // has popup-a 
const transition = ref(true);
const tokenId = ref(1);
const loadAddress: any = ref(0)
const loadAbi: any = ref(0);
let data:any = ref([]);
const loadingState: any = ref(0);
const chainId: any = computed(() => store.state.user?.chainId );
const transferSuccess = computed(() => store.state.user?.transferSuccess);
const email: any = ref('')
const whiteList: any = ref(false); //Have you purchased a white paper

watch(chainId, (newVal, oldVal: any) => {
    if(!oldVal || oldVal == -1) return;
    console.log('her2');
	getData(ecrType.value)
}, {immediate:true,deep:true});

watch(realId, (newVal, oldVal) => {
    if(oldVal == -1 || !oldVal) return;
    console.log('her3');
	getData(ecrType.value)
    addressInfo()
    initMyAssetes()
}, {immediate:true,deep:true});

watch(transferSuccess, (newVal, oldVal) => {
    if(!oldVal) return;
    console.log('her4');
    getData(ecrType.value)
    addressInfo()
    initMyAssetes()
}, {immediate:true,deep:true});

const copyUrl = (e: any) => {
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


// Left Icon scroll
const myNav:any = ref(null);
const windowScroll: any = () => {
    if( data.value.length === 0 ) return
    const navHeight: number = myNav.value.offsetHeight;  // Distance of the element from the top
    const cHeight: number = document.documentElement.clientHeight; // Window height
    const scrollHeight: number = document.documentElement.scrollTop; // How many PX slides down
    startMove(Math.ceil((cHeight - navHeight - 160) + scrollHeight));
}

let timer: any = null;
const startMove = (target : any) => {
    let a = document.getElementsByClassName('ecr')[0] as HTMLElement || document.getElementsByClassName('nothing')[0] as HTMLElement;
    let speed = target - myNav.value.offsetTop;
    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
    myNav.value.style.top = myNav.value.offsetTop + speed + 'px';
    if(parseInt(myNav.value.style.top) < (a.offsetTop || 500))  myNav.value.style.top = a.offsetTop + 'px';
}


// const myNav:any = ref(null);
// const ecrchange: any = ref(null);
// const head: any = ref(null);
// const windowScroll: any = () => {
//     let navHeight: number = myNav.value.offsetHeight;  // NAV element height
//     let content = ecrchange.value.offsetTop;
//     let cHeight: number = document.documentElement.clientHeight; // Window height
//     let scrollHeight: number = document.documentElement.scrollTop; // How many PX slides down
//     console.log(navHeight, navHeight, cHeight, scrollHeight, content);
//     myNav.value.style.top =  scrollHeight + content - (navHeight / 3) + 'px';
// }


//myAssets & whiteList 
const myAssets = ref({}) as any;
const bobabrewery = ref('') as any;
const haveWhiteWindow = ref(false);
const initMyAssetes = async () => {
    if(chainId.value == 43113){
        var a = await Web3.ERC20balanceOf(cytV2.abi, cytV2.address);
        var b = await Web3.ERC20balanceOf(coin.abi, coin.address);
    }
    myAssets.value.cyt = a || 0;
    myAssets.value.coin = b || 0;
    // console.log(myAssets.value, 'cyt');
    // Have you purchased a white paper
    console.log(idTemp.value, 'idTemp');
    proxy.$api.post(`/bobabrewery/boba/api/v1/cyberpop?walletAddress=${idTemp.value}`).then((res: any) => {
        console.log(res.data, 'data');
        res.data.data = 1
        res.data?.code != 200 ? bobabrewery.value = 'request fail' : bobabrewery.value = '';
        res.data?.data ? whiteList.value = true : whiteList.value = false;
    }).catch( (err: any) => {
        console.log(err)
    })
}
const whiteListWindows = () => {
    store.dispatch('user/xplanChangeAni', true);
    haveWhiteWindow.value = true;
}



// select
let abiSelect:any = ref(null);
const addressSelect:any = ref(null);


// checkAll (no use)
let selectArr = ref([])
let tbool:any = ref(false)
let qbool:any = ref(false)
let typeRef = ref([])
const hobby2: any = ref([]); // Checkboxes already selected
watch(() => hobby2.value, (now, old) => {
    console.log(now, 'now'); //Proxy {0: 'Game'}
    if(now.length == 0) {
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

let qualityRef = ref([])
const typeItem = (el:any) => {
    (typeRef.value as Array<HTMLElement>).push(el)
}
const qualityItem = (el:any) => {
    (qualityRef.value as Array<HTMLElement>).push(el)
}
const checkall = (index:any) => {
    console.log(hobby2._rawValue);
    // if( index == 1 ){
    //     // typeRef.value.map( (item:HTMLElement) => {
    //         // item.toggleAttribute('checked')
    //         tbool.value = true
    //     // })
    // }else{
    //     qualityRef.value.map( (item:HTMLElement) => {
    //         // item.toggleAttribute('checked')
    //         qbool.value = true
    //     })
    // }
}

// switch erc button
const changeType = (type: Number) => {
    console.log(loadingState.value, 'loadingState.value');
    if(loadingState.value == 2 || loadingState.value == 0){
        ecrType.value = type;
        console.log('her5');
        getData(type)
    }
}

//  game pool
const number = ref(0);
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
        return;
    }else if(item.type == "role_mumbai" || item.type == "role_fuji"){
        loadAddress.value = item.type == "role_fuji" ? Cyborg_Fuji.address : Cyborg.address;
        loadAbi.value = Cyborg_Fuji.abi;
    }else if(item.type == "game_mumbai" || item.type == "game_fuji"){
        loadAddress.value = item.type == "role_fuji" ? game_Fuji.address : arms.address;
        loadAbi.value = game_Fuji.abi;
        number.value = 1; // 1155 incoming quantity required
        return;
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
    number.value = 0
    setTimeout(() => {
        TipsState.value = false
    }, 300);
}


const { nft, nft_fuji, arms, gamePool, GiftBox, cyberClub, cyberClub_Fuji, Cyborg, Cyborg_Fuji, game_Fuji, LootBox, cytV2, coin } = Web3.contracts;

const getData: any = async (type: Number, filter: any = false) => {
    if(!filter) {
        data.value = [];
        window.scrollTo(0,0);
    }
    if(loadingState.value == 1) return;
    loadingState.value = 1; // Initialize to 0. 1 means loading. 2 means loading is complete
    console.log(loadingState.value, 'loadingState');
    
    let result: any = await getGamePool(idTemp.value)
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
        }else if(iterator.length == 7){ // badge id
            let key = iterator 
            let val = result[iterator]
            badge.push({
                [ key[ key.length-1 ] ]: val
            })
        }
    }

    console.log(weapons, role, badge, '======>gamepool');
    

    return new Promise(async (resolve, reject) => {
            if(chainId.value == 80001){  //mumbai
                if(!type){
                    if(filter){ // Left column filter
                        console.log(filter, 'filter');
                        
                        if(filter == 'Game'){
                            let game_resulte = await Web3.balanceOfBatch(arms.abi , arms.address, store.state.user?.game);
                            await getNFTData(game_resulte, 'game', 'game_mumbai', store.state.user?.game);
                        }else if(filter == 'Badge'){
                            // let nft = await Web3.batchBalanceOf(nft.abi , nft.address, store.state.user?.badge);
                            // await getNFTData(nft, 'server', 'server_mumbai', store.state.user?.badge);
                        }else if(filter == 'role'){
                            let role_result = await Web3.tokensOfOwner(Cyborg.abi, Cyborg.address);
                            await getHead(role_result, 'role', 'role_mumbai');
                        }else if(filter == 'head'){
                            let game_resulte = await Web3.tokensOfOwner(cyberClub.abi , cyberClub.address);
                            await getHead(game_resulte, 'head', 'head_mumbai');
                        }else{
                            let box_result = await Web3.balanceOfBatch(LootBox.abi, LootBox.address, store.state.user?.box);
                            await getNFTData(box_result, 'box', 'box_mumbai', store.state.user?.box);
                        }
                        resolve(1)
                        return;
                    }
                    // await getHead(role, 'role', 'role_mumbai', 'isLoading');
                    // // await getNFTData(weapons, 'weapons', 'weapons_mumbai', false, true);
                    // await getNFTData(badge, 'badge', 'badge_mumbai', store.state.user?.badge);
                    let game_resulte = await Web3.balanceOfBatch(arms.abi , arms.address, store.state.user?.game);
                    await getNFTData(game_resulte, 'game', 'game_mumbai', store.state.user?.game);
                    let role_result = await Web3.tokensOfOwner(Cyborg.abi, Cyborg.address);
                    await getHead(role_result, 'role', 'role_mumbai');
                    let cyberClub_result = await Web3.tokensOfOwner(cyberClub.abi, cyberClub.address);
                    await getHead(cyberClub_result, 'head', 'head_mumbai');
                    let box_result = await Web3.balanceOfBatch(LootBox.abi, LootBox.address, store.state.user?.box);
                    await getNFTData(box_result, 'box', 'box_mumbai', store.state.user?.box);
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
                            let game_resulte = await Web3.balanceOfBatch(arms.abi , arms.address, store.state.user?.game);
                            await getNFTData(game_resulte, 'game', 'game_mumbai', store.state.user?.game);
                        }else if(filter == 'Badge'){
                            // let badge = await Web3.balanceOfBatch(arms.abi , arms.address, store.state.user?.game);
                            // await getNFTData(badge, 'server', 'server_mumbai');
                        }else{
                            let box_result = await Web3.balanceOfBatch(LootBox.abi, LootBox.address, store.state.user?.box);
                            await getNFTData(box_result, 'box', 'box_mumbai', store.state.user?.box);
                        }
                        resolve(1)
                        return;
                    }
                    // await getNFTData(weapons, 'weapons', 'weapons_mumbai');
                    let game_resulte = await Web3.balanceOfBatch(arms.abi , arms.address, store.state.user?.game);
                    await getNFTData(game_resulte, 'game', 'game_mumbai', store.state.user?.game);
                    let box_result = await Web3.balanceOfBatch(LootBox.abi, LootBox.address, store.state.user?.box);
                    await getNFTData(box_result, 'box', 'box_mumbai', store.state.user?.box);
                }
            }
            if(chainId.value == 43113){ // fuji
                if(!type){
                    if(filter){ // Loading complete
                        if(filter == 'Game'){
                            let game_result: any = await Web3.balanceOfBatch(game_Fuji.abi, game_Fuji.address, store.state.user?.game);
                            await getNFTData(game_result, 'game', 'game_fuji', store.state.user?.game)
                        }else if(filter == 'Badge'){
                            let result = await Web3.balanceOfBatch(nft_fuji.abi, nft_fuji.address, store.state.user?.badge);
                            await getNFTData(result, 'badge', 'badge_fuji', store.state.user?.badge);
                        }else if(filter == 'role'){
                            let Cyborg_result = await Web3.tokensOfOwner(Cyborg_Fuji.abi, Cyborg_Fuji.address);
                            await getHead(Cyborg_result, 'role', 'role_fuji');
                        }else if(filter == 'head'){
                            let cyberClub_result = await Web3.tokensOfOwner(cyberClub_Fuji.abi, cyberClub_Fuji.address);
                            await getHead(cyberClub_result, 'head', 'head_fuji');
                        }else{
                            let box_result: any = await Web3.balanceOfBatch(GiftBox.abi, GiftBox.address, store.state.user?.box);
                            await getNFTData(box_result, 'box', 'box_fuji', store.state.user?.box);
                        }
                        resolve(1)
                        return;
                    }
                    let result = await Web3.balanceOfBatch(nft_fuji.abi, nft_fuji.address, store.state.user?.badge);
                    await getNFTData(result, 'badge', 'badge_fuji', store.state.user?.badge);
                    let game_result: any = await Web3.balanceOfBatch(game_Fuji.abi, game_Fuji.address, store.state.user?.game);
                    await getNFTData(game_result, 'game', 'game_fuji', store.state.user?.game)
                    let Cyborg_result = await Web3.tokensOfOwner(Cyborg_Fuji.abi, Cyborg_Fuji.address);
                    await getHead(Cyborg_result, 'role', 'role_fuji');
                    let cyberClub_result = await Web3.tokensOfOwner(cyberClub_Fuji.abi, cyberClub_Fuji.address);
                    await getHead(cyberClub_result, 'head', 'head_fuji');
                    let box_result: any = await Web3.balanceOfBatch(GiftBox.abi, GiftBox.address, store.state.user?.box);
                    await getNFTData(box_result, 'box', 'box_fuji', store.state.user?.box);
                    
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
                            let game_result: any = await Web3.balanceOfBatch(game_Fuji.abi, game_Fuji.address, store.state.user?.game);
                            await getNFTData(game_result, 'game', 'game_fuji', store.state.user?.game)
                        }else if(filter == 'Badge'){
                            let result = await Web3.balanceOfBatch(nft_fuji.abi, nft_fuji.address, store.state.user?.badge);
                            await getNFTData(result, 'badge', 'badge_fuji', store.state.user?.badge);
                        }else{
                            let box_result: any = await Web3.balanceOfBatch(GiftBox.abi, GiftBox.address, store.state.user?.box);
                            await getNFTData(box_result, 'box', 'box_fuji', store.state.user?.box);
                        }
                        resolve(1)
                        return;
                    }
                    let result = await Web3.balanceOfBatch(nft_fuji.abi, nft_fuji.address, store.state.user?.badge);
                    await getNFTData(result, 'badge', 'badge_fuji', store.state.user?.badge);
                    let game_result: any = await Web3.balanceOfBatch(game_Fuji.abi, game_Fuji.address, store.state.user?.game);
                    await getNFTData(game_result, 'game', 'game_fuji', store.state.user?.game)
                    let box_result: any = await Web3.balanceOfBatch(GiftBox.abi, GiftBox.address, store.state.user?.box);
                    await getNFTData(box_result, 'box', 'box_fuji', store.state.user?.box);
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
let ecrType:any = ref(0)
const readyAssetsF: any = computed(() => store.state.user?.readyAssets );
watch(readyAssetsF, (newVal: any, oldVal: any) => {
    console.log(newVal, oldVal, 'newVal');
    if(newVal == -1) return;
    console.log('her1', newVal);
    setTimeout(() => {
        getData(ecrType.value)
        addressInfo()
        initMyAssetes()
    }, 500);
}, {immediate:true,deep:true});

// NFT transfer
const transferActive = computed(() => store?.state.user?.transferActive)
const transferItem:any = ref(null)
const transferPopup = (item:any) => {
    if(item.isLoading) return;
    store.dispatch('user/transferChange',true)
    store.dispatch('user/transferChangeAni',true)
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
    }
    console.log(item.type, 'item.type');
    console.log(transferItem.value , 'transferItem.value ');
}


// Open the box
const open = (item: any) => {
    if(item.number == 0) return;
    // getLast(); // Query the last asset opened immediately in the asset contract
    store.dispatch('user/xplanChangeAni', true);
    store.dispatch('user/TipsState', {show: true, info: { hasLoading: true, hasClose: true, title: t('message.box.opening'), content: t('message.box.open_text'),   addNetwork: false, boxId: item.id, haveNFT: item.number }});
}


onUnmounted(() => {
    window.removeEventListener('scroll', windowScroll, true);
    // clearInterval(timer);
})


onMounted(() => {
    setTimeout(() => {
        if( realId.value == -1 && proxy.$route.path == '/knapsack' ){
            router.push('/')
            // window.location.href='https://test.cyberpop.online/'
        }
    }, 2000);
    window.scrollTo(0,0);
    window.addEventListener('scroll', windowScroll, true);
    store.dispatch('user/showDialog',{show: false, info: {}});// close message dialog
    store.dispatch('user/metaChange',false);
    store.dispatch('user/transferChange',false);
    if(store.state.user?.readyAssets !== -1){
        // data.value = JSON.parse(JSON.stringify(store.state.user?.dataSum));
        getData(ecrType.value)
        addressInfo()
        initMyAssetes()
    }
})

</script>
<style lang="less" scoped>
     @keyframes neon3 {
        from {
            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FFDD1B, 0 0 70px #FFDD1B, 0 0 80px #FFDD1B, 0 0 100px #FFDD1B, 0 0 150px #FFDD1B;
        }
        to {
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FFDD1B, 0 0 35px #FFDD1B, 0 0 40px #FFDD1B, 0 0 50px #FFDD1B, 0 0 75px #FFDD1B;
        }
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
    .assets{
        width: 100%;
        padding-bottom: 3.2vw;
        // background-color: #000000;
        background-color: #080707;
        .wrap{
            width: 100%;
            min-height: 96vw;
            padding-top: 5.5vw;
            background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwAssets/bodyBg.png');
            background-repeat: no-repeat;
            background-position: left top;
            background-size: 100% auto;
            .welcome{
                text-align: center;
                .icon{
                    width: 8.75vw;
                    height: 7.6vw;
                    margin: 2.5vw auto 0;
                    text-align: center;
                    background-image: url('../../../assets/nwAssets/portraitBg.svg');
                    background-size: 100% auto;
                    img{
                        width: 6.04vw;
                        height: 6.04vw;
                        margin: .57vw 1.09vw 0 1.61vw;
                    }
                }
                .title{
                    // width: 10.46vw;
                    height: 1.77vw;
                    margin: 1.04vw 0;
                    font-size: 1.25vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 1.45vw;
                    white-space: nowrap;
                }
                .id{
                    // width: 12.13vw;
                    height: 1.04vw;
                    font-size: .83vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    letter-spacing: .02vw;
                    line-height: 1.04vw;
                }
                .desc{
                    width: 47.5vw;
                    height: 2.08vw;
                    margin: 1.14vw auto 3.22vw;
                    font-size: .83vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #B1B5C3;
                    line-height: 1.04vw;
                }
            }
            .ecr{
                display: flex;
                // padding-bottom: 13vw;
                .search{
                    position: absolute;
                    width: 15.98vw;
                    // height: 40.66vw;
                    // margin: 4.27vw 1.66vw 9.68vw 3.43vw;
                    margin: 4.27vw 1.66vw 15vw 3.43vw;
                    padding: 2.08vw 1.04vw;
                    background: #1B1A22;
                    border-radius: 2px;
                    transition: all .5s ease-in-out;
                    .myAssets, .whiteList{
                        // height: 12.6vw;
                        margin-bottom: 1.56vw;
                        color: #fff;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;

                        .item{
                            margin-bottom: 1.302vw;
                            position: relative;
                            p:first-child{
                                font-size: 0.83vw;
                                font-weight: normal;
                                color: #FFFFFF;
                                line-height: 0.98vw;
                                margin-bottom: 0.52vw;
                            }
                            p:nth-child(2){
                                font-size: 0.93vw;
                                font-weight: normal;
                                color: #7B61FF;
                                line-height: 1.82vw;
                            }
                            .getCoin{
                                position: absolute;
                                right: 0;
                                top: 1.6vw;
                                width: 4.68vw;
                                background: linear-gradient(213deg, #B041D8 0%, #DE2DCF 100%);
                                border-radius: 0.31vw;
                                font-size: 0.53vw;
                                font-family: AlibabaPuHuiTi_2_85_Bold;
                                font-weight: normal;
                                color: #FFFFFF;
                                line-height: 1.97vw;
                                text-align: center;
                                cursor: pointer;
                                transition: all .2s ease-in-out;
                            }
                            .getCoin:hover{
                                opacity: .7;
                            }
                        }
                    }
                    .whiteList{
                        font-size: .83vw;
                        display: flex;
                        cursor: pointer;
                        img{
                            
                            width: 1vw;
                        }
                    }
                    .whiteList:hover{
                        -webkit-animation: neon1 1.5s ease-in-out infinite alternate;
                        -moz-animation: neon1 1.5s ease-in-out infinite alternate;
                        animation: neon1 1.5s ease-in-out infinite alternate;
                    }
                    .line{
                        height: 0px;
                        opacity: 1;
                        border-bottom: 0.104vw solid #3F3356;
                        margin-bottom: 1.302vw;
                    }
                    .title{
                        width: 9.58vw;
                        height: 1.61vw;
                        margin-bottom: .78vw;
                        font-size: 1.04vw;
                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                        color: #FFFFFF;
                        line-height: 1.19vw;
                    }
                    .input{
                        width: 100%;
                        height: 2.5vw;
                        background: #3F3356;
                        box-shadow: 0px 7px 64px 1px rgba(0, 0, 0, 0.07);
                        border-radius: .31vw;
                        input{
                            width: 100%;
                            height: 100%;
                            text-indent: .83vw;
                            font-size: .78vw;
                            background-color: transparent;
                            border: none;
                            outline: none;
                            color: #ffffff;
                            -webkit-text-fill-color: #ffffff;
                        }
                        input::-webkit-input-placeholder{
                            color: #777E90;
                            -webkit-text-fill-color: #777E90;
                        }
                    }
                    .type,.quality{
                        .name{
                            height: 1.61vw;
                            margin: 2.7vw 0 1.25vw 0;
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_75_SemiBold;
                            color: #FFFFFF;
                            line-height: 1.19vw;
                            cursor: pointer;
                        }
                        .check{
                            div{
                                display: flex;
                                align-items: center;
                                position: relative;
                                width: 100%;
                                height: 1.14vw;
                                input[type="radio"] {
                                    width: 1.14vw;
                                    height: 1.14vw;
                                    opacity: 0;
                                }
                                label {
                                    display: flex;
                                    // align-items: flex-start;
                                    position: absolute;
                                    left: 0;
                                    top: 0;
                                    width: 1.14vw;
                                    height: 1.14vw;
                                    background-color: #ffffff;
                                    border-radius: .31vw;
                                    border: 2px solid #B1B5C3;
                                    span{
                                        height: 1.14vw;
                                        margin-left: 1.7vw;
                                        font-size: .83vw;
                                        font-family: AlibabaPuHuiTi_2_55_Regular;
                                        color: #FFFFFF;
                                        line-height: 1.04vw;
                                        white-space: nowrap;
                                        cursor: pointer;
                                    }
                                }
                                input:checked + label {
                                    background: #8478FF;
                                    border-radius: .31vw;
                                    border: 2px solid #8478FF;
                                }
                        
                                input:checked + label::after {
                                    content: "";
                                    position: absolute;
                                    top: -.2vw;
                                    right: 0;
                                    bottom: 0;
                                    left: .1vw;
                                    margin: auto;
                                    width: .3vw;
                                    height: .56vw;
                                    color: #FFFFFF;
                                    border: 2px solid #fff;
                                    border-top: none;
                                    border-left: none;
                                    transform: rotate(45deg);
                                }
                            }
                        }
                        div + div{
                            margin-top: 1.25vw;
                        }
                    }
                }
                .ecrchange{
                    margin-left: 21vw;
                    width: 57.76vw;
                    .top{
                        display: flex;
                        justify-content: center;
                        margin-bottom: 2.45vw;
                        div{
                            height: 1.87vw;
                            font-size: 1.04vw;
                            font-family: AlibabaPuHuiTi_2_75_SemiBold;
                            color: #ffffff;
                            line-height: 1.19vw;
                            cursor: pointer;
                        }
                        .type1,.typeALL{
                            margin-right: 2vw;
                        }
                        div.active{
                            color: #DE2DCF;
                            background-image: url('../../../assets/nwAssets/ercbot-bg.svg');
                            background-position: center bottom;
                            background-repeat: no-repeat;
                            background-size: 100% auto;
                        }
                    }
                    .ercType{
                        width: 60vw;
                        transition: all 430ms ease-out;
                        ul{
                            display: flex;
                            flex-wrap: wrap;
                            margin-bottom: 2.65vw;
                            li{
                                width: 17.96vw;
                                height: 26.22vw;
                                margin-right: 1.92vw;
                                margin-bottom: 2.65vw;
                                padding: .78vw .83vw;
                                // background-image: url('../../../assets/nwAssets/ecrcard-bg.svg');
                                // background-repeat: no-repeat;
                                // background-position: center;
                                // background-size: 100% 100%;
                                background: linear-gradient(110deg, rgba(8, 6, 19, 0.22) 0%, rgba(132, 120, 255, 0.38) 100%),
                                            linear-gradient(100deg, rgba(4, 255, 162, 0.1) 0%, rgba(27, 54, 44, 0) 100%);
                                border: 2px solid;
                                border-image: linear-gradient(206deg, rgba(132, 120, 255, 0.48), rgba(71, 57, 128, 1)) 2 2;
                                
                                img{
                                    width: 100%;
                                    height: 16.4vw;
                                }
                                .boxVideo{
                                    position: relative;
                                    // width: 19.32vw;
                                    height: 16.4vw;
                                    overflow: hidden;
                                    video{
                                        position: absolute;
                                        top: 50.2%;
                                        left: 50%;
                                        width: 134%;
                                        height: 100px;
                                        transform: translate(-50%,-50%);
                                    }
                                    img{
                                        width: 100%;
                                        height: 100%;
                                    }
                                    .third{
                                        width: 177%;
                                    }
                                }
                                .name{
                                    height: 1.56vw;
                                    margin: 1.04vw 0 1.3vw 0;
                                    font-size: 1.04vw;
                                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                    color: #FFFFFF;
                                    line-height: 1.56vw;
                                    span{
                                        float: right;
                                        height: 1.04vw;
                                        font-size: 1.56vw;
                                        font-family: AlibabaPuHuiTi_2_75_SemiBold;
                                        line-height: 1.56vw;
                                    }
                                    .loadName{
                                        width: .5vw;
                                        height: .5vw;
                                        margin-bottom: .1vw;
                                        background: #04FF55;
                                        border-radius: 50%;
                                        display: inline-block;
                                        margin-right: .5vw;
                                    }
                                }

                                .btn{
                                    display: flex;
                                    justify-content: center;
                                    margin-bottom: 0.47vw;
                                    div{
                                        height: 2.5vw;
                                        font-size: .83vw;
                                        font-family: AlibabaPuHuiTi_2_115_Black;
                                        color: #FFFFFF;
                                        line-height: 2.5vw;
                                        text-align: center;
                                        cursor: pointer;
                                    }
                                    .transfer{
                                        width: 8.07vw;
                                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwAssets/blackbg.svg');
                                        background-size: 100% 100%;
                                        transition: all .2s ease;
                                    }
                                    .sell{
                                        width: 8.22vw;
                                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwAssets/purplebg.svg');
                                        background-size: 100% 100%;
                                        transition: all .3s ease;
                                    }
                                    .load{
                                        width: 10.47vw;
                                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwAssets/load_button.png');
                                        background-size: 100% 100%;
                                        transition: all .2s ease;
                                        color: #23262F;
                                    }
                                    .claim{
                                        width: 5.93vw;
                                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwAssets/claim_button.png');
                                        background-size: 100% 100%;
                                        transition: all .3s ease;
                                    }
                                    .transfer:hover,
                                    .sell:hover,
                                    .load:hover,
                                    .claim:hover{
                                        opacity: .8;
                                    }
                                    .not-allowed{
                                        cursor: not-allowed !important;
                                    }
                                    .not-allowed:hover{
                                        opacity: .5;
                                    }
                                    .unpack{
                                        width: 10.93vw;
                                        height: 2.91vw;
                                        margin-top: -.4vw;
                                        line-height: 2.91vw;
                                        background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwAssets/unpackbg.svg');
                                        background-position: left top;
                                        background-size: 100% 100%;
                                    }
                                }
                            }
                        }
                    }
                    .noting{
                        text-align: center;
                        p{
                            color: #B1B5C3;
                            margin: 3vw 0;
                            font-family: AlibabaPuHuiTi_2_55_Regular;   
                        }
                    }
                }
            }
            .nothing{
                height: 80vh;
                text-align: center;
                padding-bottom: 7.55vw;
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
        .contract{
            color: #333;
            margin: 3vw auto;
            margin-top: 10vw;
            border: 2px solid;
            width: 56.74vw;
            background-color: rgba(255, 0, 0, 0); /* Display when linear is not supported */
            background-image: linear-gradient(to right, rgba(81, 105, 139, 0.027) , rgba(77, 122, 165, 0.582));
            border: 2px solid;
            border-image: linear-gradient(206deg, rgb(255, 255, 255), rgba(139, 255, 178, 0.31)) 2 2;
            .th{
                // background: rgba(16, 76, 165, 0.5) !important;
                color: #fff;
                border-bottom: 1px solid #0C0911;
                div{
                    line-height: 3.75vw !important;
                }
            }
            .col{
                padding: 0 1vw;
                display: flex;
                align-items: center;
                .name{
                    width: 10%;
                    color: #FFFFFF;
                    font-family: AlibabaPuHuiTi_2_55_Regular;   
                    font-size: 0.83vw;
                    text-align: left;
                    line-height: 1vw;
                    margin: 0.83vw 0;
                }
                .Fuji, .Mumbai{
                    width: 45%;
                    color: #FFFFFF;
                    font-family: AlibabaPuHuiTi_2_55_Regular;   
                    font-size: 0.83vw;
                    text-align: left;
                    line-height: 1.6vw;
                    margin: 0.83vw;
                    word-break: break-all;
                }
            }
            .td{
                div:hover{
                    cursor: pointer;
                    color: red;
                }   
            }
        }
    }
</style>
