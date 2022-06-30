<template>
    <div class="message flex_align_center" :class="comingOutFlag ? 'comingOut' : 'comingIn'" v-if="state == 0">
        <div class="info flex_center">
            <img src="@/assets/nwhome/warning.svg" alt="">
        </div>
        <div class="text">{{txt}}</div>
        <img @click="closeDialog()" class="close" src="@/assets/nwhome/warning-close.svg" alt="">
    </div>

    <div class="message success flex_align_center" :class="comingOutFlag ? 'comingOut' : 'comingIn'"  v-if="state == 1">
        <div class="info successIcon flex_center">
            <img src="@/assets/nwhome/success-fill.svg" alt="">
        </div>
        <div class="text successTxt">{{txt}}</div>
        <img @click="closeDialog()" class="close" src="@/assets/nwhome/success-close.svg" alt="">
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed, readonly, ref } from 'vue'
import store from '@/store'

const props = defineProps({
    state: Number, 
    txt: String
})

const closeDialog = () => {
    store.dispatch('user/showDialog',{show: false, info: {}})
}

let comingOutFlag:any = ref(false);
onMounted(() => {
    setTimeout(()=>{
        comingOutFlag.value = true;
        setTimeout(()=>{
            store.dispatch('user/showDialog',{show: false, info: {}})
        },200)
    },3000)
    
})

// :class="comingOutFlag ? 'comingOut' : 'comingIn'"
</script>

<style lang="less" scoped>
@keyframes comingOut {
    0%{
        margin-right: 1.8vw;
    }
    100%{
        margin-right: -25vw;
    }
}
.comingOut{
    animation: comingOut .2s ease-in;
}
.comingIn{
    animation: comingIn .2s ease-out;
}
@keyframes comingIn {
    0%{
        margin-right: -25vw;
    }
    100%{
        margin-right: 1.8vw;
    }
}
.message{
    z-index: 188;
    position: fixed;
    top: 0;
    right: 0;
    width: 18.75vw;
    height: 4.16vw;
    margin-top: 8vw;
    margin-right: -25vw;
    background: rgba(255, 82, 82, 0.42);
    border-radius: 4px 4px 4px 4px;
    border: 1px solid #FF5CA1;
    animation-fill-mode: forwards;
    .info{
        width: 3vw;
        height: 3vw;
        background: rgba(255, 82, 82, 0.16);
        border-radius: 50%;
        margin-left: .5vw;
        img{
            width: 1.4vw;
            height: 1.4vw;
        }
    }
    .text{
        width: 12.6vw;
        // height: 1.04vw;
        margin-left: .6vw;
        font-size: 1.04vw;
        font-family: AlibabaPuHuiTi_2_55_Regular;
        color: #FF5CA1;
        line-height: 1.04vw;
        white-space: normal;
    }
    .close{
        width: 1.04vw;
        height: 1.04vw;
    }
}

.success{
    background: rgba(108, 252, 200, 0.42) !important;
    border: 1px solid #04FFA2 !important;
}
.successIcon{
    background: rgba(76, 175, 80, 0.16);
}
.successTxt{
    color: #04FFA2 !important;
}
</style>
