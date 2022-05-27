<template>
    <MiningA v-if="innerWidth > 1025"/>
    <MiningB v-else/>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '../../store'
import MiningA from './pages/MiningA.vue'
import MiningB from './pages/MiningB.vue'

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // 监听屏幕宽度

</script>
<style lang="less" scoped>
    .container{
         
    }
</style>
