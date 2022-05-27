<template>
    <DetailsA v-if="innerWidth > 1025"/>
    <DetailsB v-else/>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '../../store'
import DetailsA from './pages/DetailsA.vue'
import DetailsB from './pages/DetailsB.vue'

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // Monitor screen width

</script>
<style lang="less" scoped>
    .container{
         
    }
</style>
