<template>
    <div class="warp flex_center">
        <div class="mask" :class="isShowTips && (xplanAni ? 'bounceShow' : 'bounceHide')">
            <div class="cover"></div>
            <div class="coverborder"></div>
            <img class="close" src="@/assets/nwhome/close.svg" alt=""  @click="closeDialog">
            <div class="content">
                <div class="text">1、You need to prepare some chain-side tokens as handling fee Because we are currently testing the network, you can get it for free through this connection <div style="display: flex"><a href="https://faucet.avax.network/" target="view_window">https://faucet.avax.network/</a>&nbsp;&nbsp;&nbsp;<a href="https://market.cyberpop.online/" target="view_window">https://market.cyberpop.online/</a></div> </div>
                <div class="text">2、Please buy BD in our trading market, BD can be used for gold playing, you can also cultivate BD by yourself after you are familiar with the game play You can check our game play introduction through wiki: <a href="https://wiki.cyberpop.online" target="view_window">https://wiki.cyberpop.online</a></div>
                <div class="text">3、Your output coin and CYT are the game output of cyberpop, the current coin tokens are in the test network stage, CYT is not released, the others are scams</div>
                <div class="text">4、Please join our discord for your better game experience</div>
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
const { MarketV2, cytV2, staking } = Web3.contracts;
const emit = defineEmits(['closeGetBD']);

const props: any = defineProps({
    isShowTips: Boolean,
    
});

const readyAssetsF: any = computed(() => store.state.myAssets?.readyAssets ); // Status value of the connection
const xplanAni = computed(() => store?.state.user?.xplanAni);

// input
let valueIn:any = ref(1)
const numState: any = ref('')
const active: any = ref(0)
watch(active, (newVal: any, oldVal) => {
    if(newVal == 0){
        valueIn.value = 1;
    }else{
        valueIn.value = parseInt(props.haveCTY) || 1;
    }
    numState.value = ''
}, {immediate:true,deep:true});





const closeDialog = () => {
    emit('closeGetBD')
}



onMounted(() => {
    console.log(props);
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
    .warp{
        position: fixed;
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
            width: 37.51vw;
            min-width: 380px;
            height: 32vw;
            min-height: 180px;
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
                width: 2.8vw;
                cursor: pointer;
            }
            .content{
                position: absolute;
                left: 0;
                right: 0;
                padding: 2.5vw;
                .text{
                    margin-bottom: 2vw;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    font-size: 1.04vw;
                    font-family: AlibabaPuHuiTi_2_55_Regular;
                    font-weight: normal;
                    line-height: 1.4vw;
                    a{
                        color: rgb(107, 107, 241);
                    }
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
