<template>
    <header-a path="/help" :type="0"></header-a>
        
    <footer-a></footer-a>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
const router = useRouter()




onMounted(() => {
})

</script>
<style lang="less" scoped>
    .container{

    }
</style>
