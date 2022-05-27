<template>
    <PrivacyA v-if="innerWidth > 1025"/>
    <PrivacyB v-else/>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '../../store'
import PrivacyA from './pages/PrivacyA.vue'
import PrivacyB from './pages/PrivacyB.vue'

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // 监听屏幕宽度

</script>
<style lang="less" scoped>
    .container{
         
    }
</style>
