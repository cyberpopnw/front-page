<template>
    <div>
        <div class="popup" :class="transferActive && (transferAni ? 'bounceShow' : 'bounceHide') ">
            <div class="content">
                <div class="title">{{$t('message.assets.pop.title')}}</div>
                <div class="tips" v-show="numState == ''">{{$t('message.assets.pop.tips')}}</div>
                <div class="tips" v-show="numState == 'error'">{{$t('message.assets.pop.tips_err')}}</div>
                <div class="number flex_between_center">
                    <div class="add" @click="addNft()" :class="canAdd == 'disable' ? 'disableNum':''">+</div>
                    <input id="inputNum" type="text" :value="valueIn" @input="inputNumber($event)">
                    <div class="reduce" @click="reduceNft()" :class="canReduce == 'disable' ? 'disableNum':''">—</div>
                </div>
                <div class="desc">{{$t('message.assets.pop.desc')}}</div>
                <div class="address" :class="inputState == 'activated' ? 'activated':'' || inputState == 'success' ? 'success':'' || ( addressState == 'empty' || addressState == 'error' )? 'empty':''">
                    <input class="inputTxt" type="text" :value="inputAddress" @focus="inputState = 'activated'" @input="checkAddress($event)">
                    <div class="mess" v-if="addressState == 'empty'">{{$t('message.assets.pop.mess_empty')}}</div>
                    <div class="mess" v-if="addressState == 'error'">{{$t('message.assets.pop.mess_err')}}</div>
                </div>
                <div class="btn flex_between_center">
                    <div class="cancel" @click="closeDialog()">{{$t('message.assets.pop.btn_cancel')}}</div>
                    <div class="transfer" :class="canTransfer == 'disable' ? 'disableNum':''" @click="transfer()">{{$t('message.assets.pop.btn_tran')}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed, readonly, ref, watch, getCurrentInstance } from 'vue'
import store from '@/store'
import Web3 from '@/tools/web3' 
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;

const props = defineProps({
    transferInfo: Object,
    abi: Object,
    address: String,
})

const transferActive = computed(() => store?.state.myAssets?.transferActive);
const transferAni = computed(() => store?.state.myAssets?.transferAni);
const readyAssetsF: any = computed(() => store.state.myAssets?.readyAssets ); // Status value of the connection
let transferInfoMsg:any = ref(null) 
let abiMsg:any = ref(null) 
let addressMsg:any = ref(null) 
let idMsg:any = ref(null) 
let valueIn:any = ref(1)


let canAdd:any = ref('')
let canReduce:any = ref('disable')
let canTransfer:any = ref('disable')
let addressState:any = ref('')
// NFT Number
const haveNFT:any = ref(0)
let haveNFTCount:any = ref(1)
let numState:any = ref('')

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
    if( valueIn.value < 1 ){
        valueIn.value = 1 ;
    }else if( valueIn.value >= haveNFT.value ){
        canAdd.value = 'disable'
    }else{
        valueIn.value = parseInt(valueIn.value) + 1;
        if( valueIn.value >= haveNFT.value ){
            canAdd.value = 'disable'
        }else{
            canAdd.value = ''
        }
        canReduce.value = ''
    }
}
const reduceNft = () => {
    if( valueIn.value <= 1 ){
        valueIn.value = 1 ;
        canReduce.value = 'disable'
    }else{
        valueIn.value = parseInt(valueIn.value) - 1;
        if( valueIn.value <= 1 ){
            canReduce.value = 'disable'
        }else{
            canReduce.value = ''
        }
        canAdd.value = ''
    }
}

// input state
let inputState:any = ref('')
const inputNumber = (e:any) => {
    // console.log(e.target.value,regExp.test(e.target.value));
    valueIn.value = e.target.value
    if (e.target.value && !(regExp.test(e.target.value))) {
        numState.value = 'error'
        canReduce.value = 'disable'
        canAdd.value = 'disable'
        canTransfer.value = 'disable'
        // e.target.value = valueIn.value
    } else if( !e.target.value ){
        numState.value = 'error'
        canReduce.value = 'disable'
        canAdd.value = 'disable'
        canTransfer.value = 'disable'
    }else{
        numState.value = ''
        canReduce.value = ''
        canAdd.value = ''
        valueIn.value = e.target.value
        if( inputState.value == 'success' ){
            canTransfer.value = ''
        }
    }
}

// check address
const inputAddress:any = ref('')
const checkAddress = (e:any) => {
    let reg = /^[a-zA-Z0-9]+\s*$/
    if( e.target.value && !reg.test(e.target.value) ){
        e.target.value = ''
        inputState.value = ''
        addressState.value = 'error'
        canTransfer.value = 'disable'
    }else if( !e.target.value ){
        e.target.value = ''
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
            if(props.transferInfo?.type == 'role_mumbai' || props.transferInfo?.type == 'role_fuji' || props.transferInfo?.type == 'head_mumbai' || props.transferInfo?.type == 'head_fuji'){
                let result = await Web3.safeTransferFrom(abiMsg.value, addressMsg.value, inputAddress.value, Number(idMsg.value));
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
            if(!result){ // If the transfer fails
                store.dispatch('user/showDialog',{show: true, info: {state: 0, txt: t('message.assets.pop.tran_stop')}})
            }else{ // Transfer succeeded
                closeDialog();
                store.dispatch('user/showDialog',{show: true, info: {state: 1, txt: t('message.assets.pop.tran_succ')}})
                store.dispatch('myAssets/transferSuccess', result)
                store.dispatch('myAssets/dataSumSearch', { flag: readyAssetsF.value + 1 }); // Number of bits with NFT
            }
       }
    }
}

const closeDialog = () => {
    store.dispatch('myAssets/transferChangeAni',false)
    valueIn.value = 1 
    inputAddress.value = ''
    numState.value = ''
    inputState.value = ''
    addressState.value = ''
    canAdd.value = ''
    canReduce.value = 'disable'
    canTransfer.value = 'disable'
}



onMounted(() => {
})
</script>

<style lang="less" scoped>
    .popup{
        z-index: 9;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        background: rgba(35, 38, 47, 0.9);
        .content{
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 387px;
            padding: 24px;
            background: linear-gradient(221deg, rgba(132, 120, 255, .8) 0%, rgba(12, 9, 17, .8) 100%),
                        linear-gradient(81deg, rgba(45, 222, 211, .6) 0%, rgba(12, 9, 17, 1) 100%);
            box-shadow: inset 0px 4px 0px 1px #5A5685;
            .title{
                font-size: 28px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                font-weight: normal;
                color: #FFFFFF;
                line-height: 39px;
            }
            .tips{
                height: 22px;
                margin: 30px 0 16px;
                font-size: 16px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                font-weight: normal;
                color: #FFFFFF;
                line-height: 22px;
            }
            .number{
                width: 100%;
                height: 40px;
                .add,.reduce{
                    width: 96px;
                    height: 40px;
                    font-size: 24px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    color: #FFFFFF;
                    line-height: 40px;
                    text-align: center;
                    background-color: #8478FF;
                    cursor: pointer;
                }
                input{
                    width: 95px;
                    height: 34px;
                    font-size: 24px;
                    font-family: AlibabaPuHuiTi_2_75_SemiBold;
                    color: #FFFFFF;
                    line-height: 34px;
                    text-align: center;
                    background: transparent;
                    border: none;
                    outline: none;
                }
                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                    -webkit-appearance: none !important;
                    margin: 0;
                }
            }
            .desc{
                width: 100%;
                height: 22px;
                margin: 32px 0 16px;
                font-size: 16px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: 22px;
            }
            .address{
                position: relative;
                width: 327px;
                height: 40px;
                margin-bottom: 32px;
                padding: 0 12px;
                border: 1px solid #8478FF;
                input{
                    width: 100%;
                    height: 40px;
                    color: rgba(255, 255, 255, 0.35);
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    line-height: 40px;
                    background: transparent;
                    border: none;
                    outline: none;
                }
                .mess{
                    position: absolute;
                    left: 0;
                    bottom: -18px;
                    height: 16px;
                    font-size: 12px;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: normal;
                    color: #FF5CA1;
                    line-height: 16px;
                }
            }
            .btn{
                width: 100%;
                height: 48px;
                .cancel{    
                    width: 163px;
                    height: 48px;
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 48px;
                    text-align: center;
                    background-image: url('../../assets/nwAssets/blackbg-phone.svg');
                    background-size: 100% 100%;
                    cursor: pointer;
                }
                .transfer{    
                    width: 164px;
                    height: 48px;
                    font-size: 16px;
                    font-family: AlibabaPuHuiTi_2_115_Black;
                    color: #FFFFFF;
                    line-height: 48px;
                    text-align: center;
                    background-image: url('../../assets/nwAssets/purplebg-phone.svg');
                    background-size: 100% 100%;
                    cursor: pointer;
                }
            }
        }
    }
    .add.disableNum,.reduce.disableNum,.transfer.disableNum{
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
</style>
