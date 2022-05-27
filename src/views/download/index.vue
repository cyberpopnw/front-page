<template>
    <downloadA v-if="innerWidth > 1025"/>
    <downloadB v-else/>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '../../store'
import downloadA from './pages/downloadA.vue';
import downloadB from './pages/downloadB.vue';

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // Monitor screen width

</script>
<style lang="less" scoped>
    .container{
         
    }
</style>
