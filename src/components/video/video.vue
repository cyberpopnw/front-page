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
//   width: '800px', //播放器高度
//   height: '450px', //播放器高度
  color: "#409eff", //主题色
  title: '', //视频名称
  src: "https://d2cimmz3cflrbm.cloudfront.net/nwhome/output.mp4", //视频源
  muted: true, //静音
  webFullScreen: true,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: true, //自动播放
  loop: true, //循环播放
  mirror: false, //镜像画面
  ligthOff: false,  //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制器
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



 //播放按钮
// video::-webkit-media-controls-play-button {
//     display: none;
// }
//进度条
// video::-webkit-media-controls-timeline {
//     display: none;
// }
//观看的当前时间
// video::-webkit-media-controls-current-time-display{
//     display: none;           
// }
//剩余时间
// video::-webkit-media-controls-time-remaining-display {
//     display: none;           
// }
//音量按钮
// video::-webkit-media-controls-mute-button {
//     display: none;           
// }
// video::-webkit-media-controls-toggle-closed-captions-button {
//     display: none;           
// }
// //音量的控制条
// video::-webkit-media-controls-volume-slider {
//     display: none;           
// }
</style>
