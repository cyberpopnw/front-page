<template>
    <MysteryA v-if="innerWidth > 1025"/>
    <MysteryB v-else/>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '../../store'
import MysteryA from './pages/MysteryA-2.vue'
import MysteryB from './pages/MysteryB-2.vue'

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // Monitor screen width

</script>
<style lang="less" scoped>
    .container{
         
    }
</style>
