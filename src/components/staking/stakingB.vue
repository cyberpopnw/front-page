<template>
    <div class="container" v-show="isShowTips">
        <div class="mask" :class="(isShowTips ? 'bounceShow' : 'bounceHide')">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <img class="close" src="@/assets/nwhome/close.svg" alt=""  @click="closeDialog">
            <div class="content">
                <div class="title">{{ props.title }}</div>
                <!-- <div class="icon">
                    <img src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/metaMask.svg" alt="">
                    <div class="subtitle">{{t('message.common.metamask.logoText')}}</div>
                </div> -->
                <div class="item">
                    <p>step1</p>
                    <div class="content1" :class="{'success': state >= 1 && state != 2, 'reject': state == 2}">
                        <span>{{ content1 }}</span>
                        <div class="loading" v-if="state == 0">
                            <img src="@/assets/nwhomePhone/loading-phone.svg" alt="">
                        </div>
                    </div>
                    <p v-if="state >= 1 && state != 2" class="ok">success</p>
                    <p v-if="state == 2" class="Nok">reject</p>
                </div>
                <div class="item">
                    <p>step2</p>
                    <div class="content1" :class="{'success': state >= 4 && state != 5, 'reject': state == 5}">
                        <span>{{ content2 }}</span>
                        <div class="loading" v-if="state == 3">
                            <img src="@/assets/nwhomePhone/loading-phone.svg" alt="">
                        </div>
                    </div>
                    <p v-if="state >= 4 && state != 5" class="ok">success</p>
                    <p v-if="state == 5" class="Nok">reject</p>
                </div>
            </div>
            <div class="btn">
                <div class="btn-wrap">
                    <div class="cancel" @click="closeDialog()">{{$t('message.assets.pop.btn_cancel')}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, getCurrentInstance, watch } from 'vue'
import store from '@/store/index'
import { useI18n } from 'vue-i18n';
import Web3 from '@/tools/web3'
const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;
const { MarketV2, cyt } = Web3.contracts;

const props = defineProps({
    content1: String, 
    content2: String, // 
    title: String,  //
    isShowTips: Boolean, 
    boxId: Number,
    state: {
        type: Number,
        default: 0
    },
    haveNFT: {
        type: Number,
        default: 1,
    },
})


const readyAssetsF: any = computed(() => store.state.user?.readyAssets ); // Status value of the connection


// input
let valueIn:any = ref(1)
const numState: any = ref('')
const active: any = ref(0)
watch(active, (newVal: any, oldVal) => {
    if(newVal == 0){
        valueIn.value = 1;
    }else{
        valueIn.value = props.haveNFT;
    }
    console.log(props.haveNFT);
    
    numState.value = ''
}, {immediate:true,deep:true});


const closeDialog = () => {
    store.dispatch('user/purchaseState', { show: false, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 4} });
}

// Purchase buried point
const logined = (accounts: any) => {
    proxy.$api.post(`/code/connection/general`, {
        "action": "buyBox",
        "address": accounts,
        "time":"1",
        "parameter1": "",
        "parameter2": "",
        "parameter3": ""
    }).then((res: any) => {
        console.log(res);
    }).catch( (err: any) => {
        console.log(err)
    })
}

const purchase =  async () => {
    if( numState.value == 'error') return;

    // Check whether it is authorized or under authorization
    store.dispatch('user/purchaseState', { show: true, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 3, haveNFT: props.haveNFT, boxId: props.boxId }});

    let allowance_res: any = await Web3.allowance(cyt.abi, cyt.address, MarketV2.address); //Use your own cyt to authorize the number of authorized market contracts
    console.log(allowance_res, 'allowance_res');
    
    if(allowance_res < 30 * valueIn.value){
        let approve_res = await Web3.approve(cyt.abi, cyt.address, MarketV2.address, 30 * valueIn.value + 1);
        if(!approve_res) { // privilege grant failed
            store.dispatch('user/purchaseState', { show: true, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 5, haveNFT: props.haveNFT, boxId: props.boxId }});
            return;
        }
    }

    // Normal process
    store.dispatch('user/purchaseState', { show: true, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 6, haveNFT: props.haveNFT, boxId: props.boxId }});
    console.log(props.boxId, 'props.boxId');
    
    let reuslt = await Web3.buyLootBox(MarketV2.abi, MarketV2.address, props.boxId, 30, valueIn.value);
    if(reuslt){ //Purchase success
        store.dispatch('user/purchaseState', { show: false, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 7, haveNFT: props.haveNFT, boxId: props.boxId }});
        store.dispatch('user/dataSumSearch', { flag: readyAssetsF.value + 1 }); // After the operation is successful, the page listens and refreshes the data
        logined(store.state.user?.idTemp)
    }else{ // Purchase rejection
        store.dispatch('user/purchaseState', { show: true, info: { title: 'PURCHASE....', content1: 'Authorization in progress....', content2: 'In purchase....', state: 8, haveNFT: props.haveNFT, boxId: props.boxId }});
    }
}

onMounted(() => {
})


</script>

<style scoped lang="less">
    @keyframes loadingAni {
        0%{
            transform: rotate(0);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .container{
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        top: 0;
        z-index: 187;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        color: #fff;
        .mask{
            position: absolute;
            top: 3.8vw;
            left: 0;
            right: 0;
            bottom: 0;
            width: 84.51vw;
            height: 60vw;
            margin: auto;
            padding: 2.5vw;
            box-shadow: -1.51vw .83vw .2vw .05vw rgba(0, 0, 0, 0.4);
            background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
            border: .15vw solid;
            border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 3 3;
            clip-path: polygon(0 0, 100% 0, 100% 89%, 90% 100%, 0 100%);
            .cover{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
                clip-path: polygon(0 0, 100% 0, 100% 89%, 90% 100%, 0 100%);
            }
            .coverborder{
                z-index: -1;
                position: absolute;
                bottom: 0;
                right: 0;
                content: '';
                display: inline-block;
                width: 8vw;
                height: 8vw;
                background-color: #2d2942;
            }
            .close{
                position: absolute;
                right: 1vw;
                top: 1vw;
                z-index: 11;
                width: 8.8vw;
            }
            .content{
                position: absolute;
                left: 0;
                right: 0;
                padding: 0 2.5vw;
                .title{
                    font-size: 4.95vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    font-weight: normal;
                    line-height: 2.08vw;
                }
                .icon{
                    display: flex;
                    margin: .46vw 0;
                    img{
                        width: 2.81vw;
                        height: 3.28vw;
                        margin-right: .46vw;
                    }
                    .subtitle{
                        height: 3.28vw;
                        font-size: 1.35vw;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #E6E8EC;
                        line-height: 3.28vw;
                    }
                }
                .item{
                    margin: 4.5vw 0;
                    p{
                        margin: 0.5vw 0;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                    }
                    .content1, .content2{
                        padding: 2.4vw;
                        border: 1px solid #fff;
                        font-family: AlibabaPuHuiTi_2_55_Regular;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        height: 3vw;
                        box-sizing: border-box;
                    }
                    .ok{
                        color: #8478FF;
                    }
                    .Nok{
                        color: #FF5CA1;
                    }
                    .success{
                        border: 1px solid #8478FF;
                        color: #8478FF;
                    }
                    .reject{
                        border: 1px solid #FF5CA1;
                        color: #FF5CA1;
                    }
                }
                .text{
                    font-size: 0.83vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: normal;
                    line-height: 1vw;
                    span{
                        float: right;
                        display: inline-block;
                        padding: 1.4px 3px;
                        margin: 1.4vw .8vw 0 0;
                        background: #30304D;
                        cursor: pointer;
                    }
                    span:hover{
                        color: rgb(255, 24, 255);
                    }
                    a{
                        color: #fff;
                    }
                }
                .loading{
                    img{
                        width: 5vw;
                        height: 5vw;
                        animation: loadingAni 1s linear infinite;
                    }
                }
            }
            .btn{
                position: absolute;
                bottom: 5vw;
                right: 3vw;
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/nwhome/meta-cancle.svg');
                background-size: 100% 100%;
                .cancel{    
                    font-size: 2.04vw;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 3.91vw;
                    text-align: center;
                    cursor: pointer;
                }
            }
        }
    }

    @media screen {
        @media (max-width: 900px) {
            .mask{
                padding: 4vw !important;
                .icon{
                    margin: 1vw 0 !important;
                }
            }
        }
    }
</style>
