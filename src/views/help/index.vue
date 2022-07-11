<template>
    <HelpA v-if="innerWidth > 1025"/>
    <HelpB v-else/>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '../../store'
import HelpA from './pages/helpA.vue'
import HelpB from './pages/helpB.vue'

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // Monitor screen width

</script>
<style lang="less" scoped>
    .container{

    }
</style>

