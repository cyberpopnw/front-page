<template>
    <voteA v-if="innerWidth > 1025"/>
    <voteB v-else/>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '../../store'
import voteA from './pages/VoteA.vue';
import voteB from './pages/VoteB.vue';

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // Monitor screen width

</script>
<style lang="less" scoped>
    .container{
         
    }
</style>
