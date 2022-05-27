<template>
    <!-- <div class="title" :class="comingOutFlag ? 'comingOut' : 'comingIn'">COMING SOON</div> -->
</template>

<script setup lang="ts">
import { computed, readonly, ref } from 'vue'
import store from '@/store'
// const comingOutFlag = computed(() => store?.state.user?.comingOutFlag);

</script>

<style lang="less" scoped>
@keyframes comingOut {
    0%{
        top: 13px;
    }
    100%{
        top: -300px;
    }
}
.comingOut{
    animation: comingOut .4s ease-in;
}
.comingIn{
    animation: comingIn .4s ease-out;
}
@keyframes comingIn {
    0%{
        top: -46px;
    }
    100%{
        top: 13px;
    }
}
.title{
    z-index: 10;
    position: fixed;
    top: -46px;
    left: 0;
    right: 0;
    width: 254px;
    height: 46px;
    margin: 0 auto;
    margin-top: 44px;
    font-size: 20px;
    font-family: AlibabaPuHuiTi_2_75_SemiBold;
    color: #35F1C8;
    line-height: 46px;
    text-align: center;
    background-image: url('../../assets/nwcyberspace/comingsoon.svg');
    background-repeat: no-repeat;
    background-position: left top;
    background-size: auto 100%;
    animation-fill-mode: forwards;
}
</style>
