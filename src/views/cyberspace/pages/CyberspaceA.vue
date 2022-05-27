<template>
    <header-a path="/cyberspace" :type="3"></header-a>
    <footer-a></footer-a>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'

import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 



const router = useRouter()




onUnmounted(() => {
    // window.removeEventListener('click', handleOtherClick, true);
})

onMounted(() => {
    // if( realId.value != 0){
    //     loggined.value = true;
    // }
    // logoHImport();
    // window.addEventListener('click', handleOtherClick, true);
    // store.dispatch('user/changeActive', 0)
    window.scrollTo(0,0);
    store.dispatch('user/showDialog',{show: false, info: {}});// close message dialog
    store.dispatch('user/metaChange',false);
})

</script>
<style lang="less" scoped>
</style>
