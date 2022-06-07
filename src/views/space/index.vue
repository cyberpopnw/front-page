<template>
    <div class="container">
        <!-- <header-a path="/space" :type="5"></header-a> -->
        <iframe src="https://dxbnr9g4gaip4.cloudfront.net/index.html" frameborder="0"></iframe>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '../../store'


const innerWidth = computed(() => {
    return store.state.sys?.innerWidth || 0
}) // Monitor screen width

</script>
<style lang="less" scoped>
    .container{
        width: 100vw;
        height: 100vh;
        iframe{
            width: 100%;
            height: 100%;
        }
    }
</style>
