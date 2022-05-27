<template>
    <div>
        <div class="message" v-if="state == 0">
            <div class="icon">
                <img class="failed-icon" src="@/assets/nwhomePhone/failed-phone.svg" alt="">
            </div>
            <div class="text">{{$t('message.common.mess_faild')}}</div>
            <div class="desc">{{txt}}</div>
        </div>

        <div class="message" v-if="state == 1">
            <div class="icon">
                <img class="succ-icon" src="@/assets/nwhomePhone/success-phone.svg" alt="">
            </div>
            <div class="text">{{$t('message.common.mess_succ')}}</div>
            <div class="desc">{{txt}}</div>
        </div>

        <div class="message" v-if="state == -1">
            <div class="icon">
                <img class="load-icon" src="@/assets/nwhomePhone/loading-phone.svg" alt="">
            </div>
            <div class="text">{{$t('message.common.mess_load')}}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed, readonly, ref } from 'vue'
import store from '@/store'
const props = defineProps({
    state: Number, 
    txt: String
})
onMounted(() => {
    setTimeout(()=>{
        store.dispatch('user/showDialog',{show: false, info: {}})
    },3000)
    
})

</script>

<style lang="less" scoped>
.message{
    z-index: 188;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 0;
    right: 0;
    width: 279px;
    height: 216px;
    margin: 0 auto;
    background: rgba(35, 38, 47, 0.98);
    border-radius: 4px 4px 4px 4px;
    transform: translateY(-50%);
    .icon{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 74px;
        height: 74px;
        margin-top: 32px;
        img{
            width: 54px;
            height: 54px;
        }
    }
    .text{
        height: 26px;
        margin: 10px 0;
        font-size: 20px;
        font-family: AlibabaPuHuiTi_2_115_Black;
        color: #FFFFFF;
        line-height: 23px;
    }
    .desc{
        width: 239px;
        height: 32px;
        font-size: 12px;
        font-family: AlibabaPuHuiTi_2_55_Regular;
        color: #FFFFFF;
        line-height: 16px;
        text-align: center;
    }
}
.failed-icon{
    
}
.succ-icon{
    width: 56px;
    height: 42px;
}
.load-icon{
    width: 74px;
    height: 74px;
}
</style>
