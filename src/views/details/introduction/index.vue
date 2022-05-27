<template>
    <IntroductionA v-if="innerWidth > 1025"/>
    <IntroductionB v-else/>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '../../../store'
import IntroductionA from './pages/IntroductionA.vue'
import IntroductionB from './pages/IntroductionB.vue'

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // Monitor screen width

</script>
<style lang="less" scoped>
    .container{
         
    }
</style>
