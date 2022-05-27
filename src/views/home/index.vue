<template>
    <HomeA v-if="innerWidth > 1025"/>
    <HomeB v-else/>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '../../store'
import HomeA from '../home/pages/HomeA.vue'
import HomeB from '../home/pages/HomeB.vue'

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // 监听屏幕宽度

</script>
<style lang="less" scoped>
    .container{
         
    }
</style>
