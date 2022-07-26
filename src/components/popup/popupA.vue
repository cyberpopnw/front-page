<template>
    <div>
        <div class="popup" :class="transferActive && (transferAni ? 'bounceShow' : 'bounceHide') ">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <div class="content">
                <div class="title">{{$t('message.assets.pop.title')}}</div>
                <div class="tips" v-show="numState == ''">{{$t('message.assets.pop.tips')}}</div>
                <div class="tips" v-show="numState == 'error'">{{$t('message.assets.pop.tips_err')}}</div>
                <div class="number" :class="numState == 'error' ? 'error':''">
                    <input id="inputNum" type="text" @input="inputNumber($event)" :value="valueIn">
                    <div class="add" @click="addNft()"></div>
                    <div class="reduce" @click="reduceNft()"></div>
                </div>
                <div class="desc">{{$t('message.assets.pop.desc')}}</div>
                <div class="address" :class="inputState == 'activated' ? 'activated':'' || inputState == 'success' ? 'success':'' || ( addressState == 'empty' || addressState == 'error' ) ? 'empty' : ''">
                    <input class="inputTxt" type="text" :value="inputAddress" @focus="inputState = 'activated'" @input="checkAddress($event)">
                    <div class="mess" v-if="addressState == 'empty'">{{$t('message.assets.pop.mess_empty')}}</div>
                    <div class="mess" v-if="addressState == 'error'">{{$t('message.assets.pop.mess_err')}}</div>
                </div>
                <div class="btn">
                    <div class="btn-wrap flex_between_center">
                        <div class="cancel" @click="closeDialog()">{{$t('message.assets.pop.btn_cancel')}}</div>
                        <div class="transfer" :class="canTransfer == 'disable' ? 'disableNum':''" @click="transfer()">{{$t('message.assets.pop.btn_tran')}}</div>
                    </div>
                </div>
            </div>
        </div>
        <msg-popup-a :isShowTips="TipsState" :isLoading="true" :isClose="false" :title="$t('message.assets.Transfering')" :content="$t('message.assets.Transfering_content')"/>
    </div> 
</template>

<script setup lang="ts">
import { onMounted, computed, readonly, ref, getCurrentInstance, watch } from 'vue'
import store from '@/store'
import Web3 from '@/tools/web3' 
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;
const props = defineProps({
    transferInfo: Object,
    abi: Array,
    address: String
})

const TipsState: any = ref(false as any)  // has popup-a 

const transferActive = computed(() => store?.state.myAssets?.transferActive);
const transferAni = computed(() => store?.state.myAssets?.transferAni);
const readyAssetsF: any = computed(() => store.state.myAssets?.readyAssets ); // Status value of the connection
let transferInfoMsg:any = ref(null) 
let abiMsg:any = ref(null) 
let addressMsg:any = ref(null) 
let idMsg:any = ref(null) 
let valueIn:any = ref(1)

// NFT Number
let haveNFT:any = ref(0)
let haveNFTCount:any = ref(1)
let numState:any = ref('')
let canTransfer:any = ref('disable')
let regExp = new RegExp("")

watch(props,(newVal,oldVal) => {
    console.log(newVal, 'newVal');
    
    transferInfoMsg.value = newVal
    haveNFT.value = transferInfoMsg.value.transferInfo.number
    haveNFTCount.value = haveNFT.value.length - 1 // Number of bits with NFT
    idMsg.value = transferInfoMsg.value.transferInfo.id 
    abiMsg.value = transferInfoMsg.value.abi
    addressMsg.value = transferInfoMsg.value.address

    regExp = RegExp( "^([1-9]|[1-9][0-9]{0," + haveNFTCount.value +"})$");
})



const addNft = () => {
    if( valueIn.value < 1 || valueIn.value > haveNFT.value ){
        valueIn.value = 1 ;
        numState.value = '';
    }else if( valueIn.value == haveNFT.value ){
        
    }else{
        valueIn.value = parseInt(valueIn.value) + 1;
    }
}
const reduceNft = () => {
    if( valueIn.value <= 1 || valueIn.value > haveNFT.value){
        valueIn.value = 1 ;
        numState.value = '';
    }else{
        valueIn.value = parseInt(valueIn.value) - 1;
    }
}

const inputNumber = (e:any) => {
    // console.log(e.target.value,regExp.test(e.target.value));
    valueIn.value = e.target.value
    if ( e.target.value && !(regExp.test(e.target.value)) ) {
        numState.value = 'error' 
        canTransfer.value = 'disable'
    } else if( !e.target.value ){
        numState.value = 'error'
        canTransfer.value = 'disable'
    }else{
        numState.value = ''
        if( inputState.value == 'success' ){
            canTransfer.value = ''
        }
    }
}



// input state
let inputState:any = ref('')
let addressState:any = ref('')

// check address
const inputAddress:any = ref('')
const checkAddress = (e:any) => {
    let reg = new RegExp(/^0x[a-fA-F0-9]{40}$/);
    if (e.target.value && !(reg.test(e.target.value))) {
        // e.target.value = ''
        inputState.value = ''
        addressState.value = 'error'
        canTransfer.value = 'disable'
    } else if( !e.target.value ){
        // e.target.value = ''
        inputState.value = ''
        addressState.value = 'empty'
        canTransfer.value = 'disable'
    }else{
        inputAddress.value = e.target.value
        inputState.value = 'success'
        addressState.value = ''
        if( numState.value == '' ){
            canTransfer.value = ''
        }
    }

}


// transfer submit
const transfer = async () => {
    console.log(inputAddress.value, 'inputAddress.value2222');
    console.log(valueIn.value, 'valueIn.value');
    console.log(numState.value, 'numState.value');
    console.log(inputState.value, 'inputState.value');
    console.log(haveNFT.value, 'haveNFT.value ');
    if( inputAddress.value == '' ){
        inputState.value = ''
        addressState.value = 'empty'
    }else if( inputState.value == 'success' && numState.value == ''){
        if( Number(valueIn.value) > Number(haveNFT.value) ){ // If the entered quantity is greater than the held quantity
            store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.tran_exce')}})
        }else{
            console.log(abiMsg.value, addressMsg.value, inputAddress.value, idMsg.value, valueIn.value);
            console.log(props.transferInfo?.type, 'props.transferInfo?.type');
            TipsState.value = true;
            store.dispatch('user/xplanChangeAni', true);
            if(props.transferInfo?.type == 'role_mumbai' || props.transferInfo?.type == 'role_fuji' || props.transferInfo?.type == 'head_mumbai' || props.transferInfo?.type == 'head_fuji' || props.transferInfo?.type == 'ERC721box_bsc'){
                let result = await Web3.safeTransferFrom(abiMsg.value, addressMsg.value, inputAddress.value, Number(idMsg.value));
                TipsState.value = false;
                if(!result){ // If the transfer fails
                    store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.tran_stop')}})
                }else{ // Transfer succeeded
                    closeDialog();
                    store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}})
                    store.dispatch('myAssets/transferSuccess', result)
                }
                return;
            }
            let result = await Web3.safeTransferFrom(abiMsg.value, addressMsg.value, inputAddress.value, Number(idMsg.value), valueIn.value);
            store.dispatch('user/xplanChangeAni', false);
            setTimeout(() => {
                TipsState.value = false;
            }, 300);
            if(!result){ // If the transfer fails
                store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.tran_stop')}})
            }else{ // Transfer succeeded
                closeDialog();
                store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}})
                store.dispatch('myAssets/transferSuccess', result)
                store.dispatch('myAssets/dataSumSearch', { flag: readyAssetsF.value + 1 }); // Operation successfully refreshed data
            }
       }
    }
}


const closeDialog = () => {
    store.dispatch('myAssets/transferChangeAni',false)
    valueIn.value = 1 
    numState.value = ''
    inputAddress.value = ''
    inputState.value = ''
    addressState.value = ''
    canTransfer.value = 'disable'
}




onMounted(() => {
    store.dispatch('user/showDialog',{show: false, info: {}});// close message dialog
    
})
</script>

<style lang="less" scoped>
    .popup{
        // z-index: 9;
        position: fixed;
        top: 50%;
        left: 0;
        right: 0;
        width: 28.125vw;
        height: 25.52vw;
        margin: -9.6vw auto 0;
        padding: 2.5vw 0 2.23vw 2.5vw;
        box-shadow: -1.51vw .83vw .2vw .05vw rgba(0, 0, 0, 0.4);
        background: linear-gradient(180deg, #30304D 0%, #232F37 100%);
        border: .15vw solid;
        border-image: linear-gradient(219deg, rgba(83, 77, 126, 1), rgba(45, 39, 65, 1), rgba(45, 42, 66, 1), rgba(34, 103, 90, 1)) 3 3;
        clip-path: polygon(0 0, 100% 0, 100% 89%, 90% 100%, 0 100%);
        .cover{
            position: absolute;
            top: 0;
            left: 0;
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
        .content{
            position: absolute;
            padding-right: 2.4vw;
            .title{
                height: 2.03vw;
                font-size: 1.45vw;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                line-height: 1.71vw;
                letter-spacing: .05vw;
            }
            .tips{
                height: 1.14vw;
                margin: 1.25vw 0;
                font-size: .83vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: .98vw;
            }
            .number{
                position: relative;
                width: 4.47vw;
                height: 2.81vw;
                padding: .4vw .6vw;
                border: 1px solid #8478FF;
                input{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    padding: 0 1.2vw 0 .4vw;
                    font-size: .83vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: rgba(255, 255, 255, 0.35);
                    line-height: .98vw;
                    border: none;
                    outline: none;
                    background: transparent;
                }
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none !important;
                    margin: 0;
                }
                div{
                    position: absolute;
                    right: .7vw;
                    width: 0;
                    height: 0;
                    border-left: .3vw solid transparent;
                    border-right: .3vw solid transparent;
                }
                .add{
                    top: .6vw;
                    border-bottom: .6vw solid #8478FF;
                    cursor: pointer;
                }
                .reduce{
                    bottom: .6vw;
                    border-top: .6vw solid #8478FF;
                    cursor: pointer;
                }
            }
            .desc{
                height: 1.14vw;
                margin: 1.25vw 0;
                font-size: .83vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: .98vw;
            }
            .address{
                position: relative;
                width: 23.12vw;
                height: 2.81vw;
                margin-bottom: 2.91vw;
                border: 1px solid #8478FF;
                input{
                    width: 23.12vw;
                    height: 2.81vw;
                    padding: 0 .83vw;
                    color: rgba(255, 255, 255, 0.35);
                    font-size: .83vw;
                    line-height: 2.81vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    background: transparent;
                    border: none;
                    outline: none;
                }
                .mess{
                    position: absolute;
                    bottom: -1.5vw;
                    height: 1.04vw;
                    font-size: .83vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: normal;
                    color: #FF5CA1;
                    line-height: 1.04vw;
                }
            }
            .btn{
                display: flex;
                justify-content: flex-end;
                width: 100%;
                .btn-wrap{  
                    width: 18.33vw;
                    height: 2.91vw;
                    .cancel{    
                        width: 8.54vw;
                        height: 2.91vw;
                        font-size: 1.04vw;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #FFFFFF;
                        line-height: 2.91vw;
                        text-align: center;
                        background-image: url('https://cyberpop-new-page.s3-accelerate.amazonaws.com/nwhome/meta-cancle.svg');
                        background-size: 100% 100%;
                        cursor: pointer;
                    }
                    .transfer{    
                        width: 8.54vw;
                        height: 2.91vw;
                        font-size: 1.04vw;
                        font-family: AlibabaPuHuiTi_2_115_Black;
                        color: #FFFFFF;
                        line-height: 2.91vw;
                        text-align: center;
                        background-image: url('../../assets/nwAssets/transferbg.png');
                        background-size: 100% 100%;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .transfer.disableNum{
        opacity: 0.5;
        pointer-events: none;
    }
    .address.activated{
        border: 1px solid #ffffff !important;
        input{
            color: #ffffff !important;
        }
    }
    .address.success{
        border: 1px solid #8478FF !important;
        input{
            color: #ffffff !important;
        }
    }
    .address.empty{
        border: 1px solid #FF5CA1 !important;
        input{
            color: #FF5CA1 !important;
        }
    }
    .number.error{
        border: 1px solid #FF5CA1 !important;
        input{
            color: #FF5CA1 !important;
        }
        .add{
            border-bottom: .6vw solid #FF5CA1 !important;
        }
        .reduce{
            border-top: .6vw solid #FF5CA1 !important;
        }
    }
    .number.errorNum{
        position: relative;
        opacity: .5;
        background-color: #52546B;
        border: 1px solid #ffffff !important;
        input{
            color: #ffffff !important;
        }
        .add{
            border-bottom: .6vw solid #ffffff !important;
        }
        .reduce{
            border-top: .6vw solid #ffffff !important;
        }
    }
    .errorNum:after{
        z-index: 2;
        display: inline-block;
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        cursor: not-allowed;
    }
</style>
