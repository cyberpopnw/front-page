<template>
    <video class="fullscreenVideo" id="bgVid" playsinline autoplay muted loop controls>
        <!-- <source src="https://vd2.bdstatic.com/mda-nf4ksw22wprt61wh/sc/cae_h264/1654440900862731793/mda-nf4ksw22wprt61wh.mp4?v_from_s=bdapp-resbox-tucheng" type="video/mp4"> -->
    </video>

    <!-- <div class="VideoBg__content">
       <slot></slot>
    </div> -->
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, computed, readonly, ref, defineProps } from 'vue'


// props
const props = defineProps({
    source: String
})
const source: any = ref(import('@/assets/nwhome/5c64797a7cb8b72ed6255c8406b7294d.mp4'))

onMounted(() => {
    console.log(source, 'source');
    source.value.then((res: any) => {
        console.log(res);
        
    })
})
</script>

<style lang="less" scoped>
  .VideoBg {
    position: relative;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    width: 220px;
    height: 220px;
  }

  .VideoBg video {
    width: 100%;
    height: 100%;

  }

  .VideoBg__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
