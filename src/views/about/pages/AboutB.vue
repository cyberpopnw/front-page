<template>
    <div class="home">
        <header>
            <div class="content">
                <img class="logo" src="https://d1td2c8hf7fv9k.cloudfront.net/LOGO.png" alt="logo">
                <div class="user" @click="connect()">
                    <div class="login_in Aideep">{{id || "LOG IN"}}</div>
                    <img src="https://d1td2c8hf7fv9k.cloudfront.net/user.png" alt="" v-if="!id">
                </div>
                <div class="menu">
                    <ul>
                        <li @click="changeMenu(0, '/')" :class="{'active': active == 0}">
                            <span>HOME</span>
                        </li>
                        <li @click="changeMenu(1, '/about')" :class="{'active': active == 1}">
                            <span>STORY</span>
                        </li>
                        <li @click="changeMenu(2)" :class="{'active': active == 2}">
                            <span>NEWS</span>
                        </li>
                        <li @click="changeMenu(3, '/support')" :class="{'active': active == 3}">
                            <span>SUPPORT</span>
                        </li>
                        <li @click="changeMenu(4, '/about')" :class="{'active': active == 4}">
                            <span>ABOUT</span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <section>
            <div class="titles">
                <div class="title3">
                    COMING SOON
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3'

const router = useRouter()

const active = computed(() => store?.state.user?.active);
const left = ref(0)
const swiperContent = ref(null);
const id: any = ref(0)
let count: any = 0

const changeMenu = (type: any, route?: any) => {
    // active.value = type;
    if(type == 2) {
        window.open('https://medium.com/@Cyberpopnewworld')
        return
    }
    store.dispatch('user/changeActive', type)
    if(route) router.push({ path: `${route}`})
}

let type2: any = ref(1);
let isPlay: any = ref(false);

const connect: any = async () => {
    const [accounts]: any = await Web3.login().then((res: any) => {
        return res;
    })
    id.value = accounts;
    let len = id.value.length-1;
    id.value = id.value[0]+id.value[1]+id.value[2]+"***"+id.value[len-2]+id.value[len-1]+id.value[len];
}




onMounted(() => {
    connect()
})

</script>
<style lang="less" scoped>
    .home{
        background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/BK1.jpg');
        height: 100vh;
        width: 100%;
        background-size: auto 100%;
        // background-repeat: no-repeat;
        background-position: 20% top;
        header{
            height: 24.5px;
            color: #fff;
            animation: fadeInDown .8s linear;
            .content{
                height: 100%;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                position: relative;
                .logo{
                    width: 16vw;
                }
                .user{
                    display: flex;
                    align-items: center;
                    .login_in{
                        background-color: #fbec35;
                        padding: 0.5vw 0.5vw;
                        color: #333;
                        border-radius: 8px;
                        font-size: 0.6vw;
                        margin-right: 0.5vw;
                    }
                    img{
                        width: 3.5vw;
                    }
                }
                .menu{
                    position: absolute;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    width: 60vw;
                    background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/header_menu.png');
                    background-size: 100% 100%;
                    height: 100%;
                    ul{
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                    }
                    ul > li{
                        width: 20%;
                        float: left;
                        font-family: Aideep;
                        font-size: 10px;
                        text-align: center;
                        line-height: 6.6vw;
                        cursor: pointer;
                        span{
                            display: inline-block;
                            transform: scale(0.6);
                        }
                    }
                    li:last-child{
                        background-size: 98% 99% !important;
                    }
                    .active{
                        background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/active_menu.png');
                        background-size: 108% 100%;
                        background-position: left top;
                    }
                }
            }
        }
        section{
            height: 100px;
            position: absolute;
            top: 50%;
            width: 100%;
            transform: translateY(-50%);
            .titles{
                position: absolute;
                text-align: center;
                left: 0;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                .title3{
                    font-family: Aideep;
                    margin: 0 auto;
                    margin-top: 4vw;
                    background-image: url('https://d1td2c8hf7fv9k.cloudfront.net/section1_3.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    width: 90%;
                    height: 80px;
                    display: flex; 
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    font-size: 10vw;
                }
            }
        }
        .buttom{
            animation: springtimeAniamtScale2 1.6s linear infinite;
            position: absolute;
            bottom: 2vw;
            width: 9vw;
            left: 0;
            right: 0;
            margin: 0 auto;
            z-index: 99;
        }
    }
</style>
