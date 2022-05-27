<template>
    <IPshielding/>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '../../store'
import IPshielding from './pages/IPshielding.vue'

const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // Monitor screen width

</script>
<style lang="less" scoped>
    .container{
         
    }
</style>
