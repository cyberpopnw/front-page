<template>
    <SupportA />
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '@/store'
import SupportA from './pages/SupportA.vue'

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // 

onMounted(() => {
})
</script>
<style lang="less" scoped>
    .container{
         
    }
</style>
