<template>
    <div class="mask">
        <!-- <video :style="{'width': (mobel ? 100 : 60) + '%'}" ref="video" id="mp4" preload="none" width="100%" height="100%" autoplay loop controls v-if="videotype == 1">
            <source src="https://d1td2c8hf7fv9k.cloudfront.net/6dff55c4018832a1528ecbc410ec6094.mp4" type="video/mp4">
        </video>
        <video :style="{'width': (mobel ? 100 : 60) + '%'}" ref="video" id="mp4" preload="none" width="100%" height="100%" autoplay loop controls v-else-if="videotype == 2">
            <source src="https://d1td2c8hf7fv9k.cloudfront.net/efce5218ffe7d5bec009c95d7bb92e85.mp4" type="video/mp4">
        </video>
        <video :style="{'width': (mobel ? 100 : 60) + '%'}" ref="video" id="mp4" preload="none" width="100%" height="100%" autoplay loop controls v-else-if="videotype == 3">
            <source src="https://d1td2c8hf7fv9k.cloudfront.net/fd9efe5ce1ffcc8f1ae3fd6fdfab31e4.mp4" type="video/mp4">
        </video> -->
        <video :style="{'width': (mobel ? 100 : 60) + '%'}" id="mp4" preload="auto" 
                autoplay loop controls 
                webkit-playsinline="true" 
                playsinline="true" 
                x5-playsinline="true" 
                x5-video-player-type="h5"
                x-webkit-airplay="allow" 
                x5-video-orientation="landscape"
                x5-video-player-fullscreen="true"
                v-if="videotype == 4">
            <source src="https://d2cimmz3cflrbm.cloudfront.net/nwhome/output2.mp4" type="video/mp4">
        </video>

        <!-- <vue3VideoPlay v-bind="options" poster='' v-if="videotype == 4"/> -->

        <video :style="{'width': (mobel ? 100 : 60) + '%'}" ref="video" id="mp4" preload="auto" width="100%"
                autoplay loop controls 
                webkit-playsinline="true" 
                playsinline="true" 
                x5-playsinline="true" 
                x5-video-player-type="h5"
                x-webkit-airplay="allow" 
                x5-video-orientation="landscape"
                x5-video-player-orientation="landscape"
                x5-video-player-fullscreen="true"
                v-else-if="videotype == 5">
            <source src="https://d3bhixjyozyk2o.cloudfront.net/banner.mp4" type="video/mp4">
        </video>

        <!-- <div class="play" @click.stop="playVideo()" v-if="mobel && isPlay">
            <img src="https://d1td2c8hf7fv9k.cloudfront.net/play.png" alt="" class="play">
        </div> -->
    </div>
</template>

<script setup lang="ts">
import { computed, readonly, ref,reactive, onMounted } from 'vue'
const props = defineProps({
    videotype: Number,
    mobel: Boolean,
})

// const checkFull = () => {
// 　　var isFull = document.fullscreenEnabled;
// 　　if(isFull === undefined) isFull = false;
// 　　return isFull;
// }

// window.resize(function () {
// 　　　　if (!checkFull()) {
// 　　　　　　console.log("退出全屏");
// 　　　　}
// });


const options = reactive({
//   width: '800px', //Player height
//   height: '450px', //Player height
  color: "#409eff", //Theme color
  title: '', //Video name
  src: "https://d2cimmz3cflrbm.cloudfront.net/nwhome/output.mp4", //Video source
  muted: true, //Mute
  webFullScreen: true,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //Playback speed
  autoPlay: true, //Autoplay
  loop: true, //Loop Playback
  mirror: false, //Mirror image
  ligthOff: false,  //lights-out mode
  volume: 0.3, //Default volume size
  control: true, //Show controller
})



onMounted(() => {
})
</script>

<style lang="less" scoped>


.mask{
    z-index: 1005;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    video{
        width: 60%;
        // height: 60%;
        height: auto;
        display: block;
        object-fit: fill;
    }
}
.play{
    position: absolute;
    width: 50px;
    height: 50px;
    img{
        width: 100%;
        height: 100%;
    }
}

::deeep(.d-player-wrap .d-player-control) {
    transform: translateY(100px);
}
</style>
