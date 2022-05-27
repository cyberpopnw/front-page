<template>
    <TermsA v-if="innerWidth > 1025"/>
    <TermsB v-else/>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '../../store'
import TermsA from './pages/TermsA.vue'
import TermsB from './pages/TermsB.vue'

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // 监听屏幕宽度

</script>
<style lang="less" scoped>
    .container{
         
    }
</style>
