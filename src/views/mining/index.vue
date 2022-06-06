<template>
    <MiningA v-if="innerWidth > 1025"/>
    <MiningB v-else/>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '../../store'
import MiningA from './pages/MiningA-2.vue'
import MiningB from './pages/MiningB-2.vue'

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // Monitor screen width

</script>
<style lang="less" scoped>
    .container{
         
    }
</style>
