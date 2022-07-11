<template>
    <header-a path="/help" :type="0"></header-a>
    <div class="container">
        <div class="select_pages">
            <div class="bk1"></div>
            <div class="warp">
                <div class="item" v-for="(item, i) in select_title" :key="i" @click="item.select = !item.select">
                    <div class="selected" v-show="item.select">
                        <img :src="item.selectImg" alt="">
                    </div>
                    <div class="Unselected" v-show="!item.select" >
                        <img src="https://d2cimmz3cflrbm.cloudfront.net/help/Unselected.png" alt="">
                        <span class="index">{{ '0' + (i + 1) }}</span>
                        <p class="title">{{ item.title }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="center_title">
            <h2 class="title">Create Your MetaMask wallet</h2>
            <h5 class="des">Wallet is your boarding pass to our digital nation</h5>
        </div>
        <div class="swiper_box">

        </div>
    </div>
    <footer-a></footer-a>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
const router = useRouter()
const select_title = ref([
    {
        title: 'Create MetaMask wall',
        selectImg: 'https://d2cimmz3cflrbm.cloudfront.net/help/select_title1.png',
        select: false,
    },
    {
        title: 'In Cyberpop website',
        selectImg: 'https://d2cimmz3cflrbm.cloudfront.net/help/select_title2.png',
        select: false,

    },
    {
        title: 'Get Cyberpop NFT',
        selectImg: 'https://d2cimmz3cflrbm.cloudfront.net/help/select_title3.png',
        select: false,

    },
    {
        title: 'Download & Play',
        selectImg: 'https://d2cimmz3cflrbm.cloudfront.net/help/select_title4.png',
        select: false,

    },
]
)


onMounted(() => {
})

</script>
<style lang="less" scoped>
    .container{
        height: 1253px;
        background: #080808;
        padding-top: 8vw;
        .select_pages{
            .warp{
                width: 64.06vw;
                height: 18.92vw;
                // background-image: url('https://d2cimmz3cflrbm.cloudfront.net/help/bk4.png');
                // background-size: 100% 100%;
                margin: 0 auto;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;
                position: relative;
                .item{
                    width: 11.25vw;
                    height: 11.25vw;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    transition: all .2s ease-in-out;
                    .Unselected{
                        display: flex;
                        justify-content: center;
                        position: relative;
                        width: 100%;
                        img{
                            width: 6.25vw;
                            height: 5.2vw;
                            margin-bottom: 2.5vw;
                        }
                        .index{
                            font-size: 1.56vw;
                            font-family: AlibabaPuHuiTi_2_115_Black;
                            color: #FFFFFF;
                            line-height: 2.18vw;
                            position: absolute;
                            top: 2vw;
                        }
                        .title{
                            position: absolute;
                            font-size: 0.93vw;
                            font-family: AlibabaPuHuiTi_2_85_Bold;
                            color: #FFFFFF;
                            line-height: 1.3vw;
                            top: 6.5vw;
                            width: 100%;
                            text-align: center;
                        }
                    }
                    .selected{
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(180deg, rgba(53,241,200,0.2500) 0%, rgba(53,241,200,0) 100%);
                        img{
                            width: 100%;
                            height: 100%;
                            transform: scale(1.5);
                        }
                    }
                }
                .item:hover{
                    // width: 11.45vw;
                    // height: 3.85vw;
                    background: linear-gradient(180deg, rgba(53,241,200,0) 0%, rgba(53,241,200,0.2500) 100%);
                    background-size: 100% 3.85vw;
                    background-repeat: no-repeat;
                    background-position: center bottom;
                }
                .item:not(:last-child){
                    margin-right: 3.43vw;
                }
            }
            .bk1{
                width: 83.07vw;
                height: 33.69vw;
                background-image: url('https://d2cimmz3cflrbm.cloudfront.net/help/new_bk1.png');
                background-size: 100% 100%;
                position: absolute;
                right: 0;
                // opacity: .5;
                z-index: 0;
            }
        }
        .center_title{
            color: #fff;
            position: relative;
            z-index: 1;
            text-align: center;
            margin-bottom: 2.08vw;
            .title{
                font-size: 1.97vw;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #35F1C8;
                line-height: 2.76vw;
            }
            .des{
                font-size: 1.04vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: 1.45vw;
                opacity: .4;
            }
        }
        .swiper_box{
            width: 62.5vw;
        }

    }
</style>
