<template>
    <CyberspaceA v-if="innerWidth > 1025"/>
    <CyberspaceB v-else/>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '../../store'
import CyberspaceA from './pages/CyberspaceA.vue'
import CyberspaceB from './pages/CyberspaceB.vue'

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // 监听屏幕宽度

</script>
<style lang="less" scoped>
    .container{
         
    }
</style>
