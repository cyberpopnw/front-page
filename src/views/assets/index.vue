<template>
    <AssetsA v-if="innerWidth > 1025"/>
    <AssetsB v-else/>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '../../store'
import AssetsA from './pages/AssetsA.vue'
import AssetsB from './pages/AssetsB.vue'

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // 监听屏幕宽度

</script>
<style lang="less" scoped>
    .container{
         
    }
</style>
