<template>
    <HomeA v-if="innerWidth > 740"/>
    <HomeB v-else/>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '../../store'
import HomeA from './pages/AboutA.vue'
import HomeB from './pages/AboutB.vue'

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // 

</script>
<style lang="less" scoped>
    .container{
         
    }
</style>
