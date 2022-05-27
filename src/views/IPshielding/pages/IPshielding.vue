<template>
    <div class="container">
        <div class="err-title">Access denied</div>
        <div class="err-desc mr-b">
            You do not have access to Cyberpop. <br/>
            Currently, our service is only available for part of the legal compliance
            countries and regions. Illegal access will not be protected. Please check
            if your country or region is supported or not. Contact us for access or try loading the page again.
        </div>
        <div class="err-title">### Additional information</div>
        <div class="err-desc">
            The access policies of a site define which visits are allowed. Your current 
            visit is not allowed according to those policies.   
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
const router = useRouter()




onMounted(() => {
    store.dispatch('user/showDialog',{show: false, info: {}});// close message dialog
    store.dispatch('user/metaChange',false);
})

</script>
<style lang="less" scoped>
    .mr-b{
        margin-bottom: 3.12vw;
    }
    .container{
        width: 100vw;
        height: 100vh;
        padding: 10vw 28vw;
        background: #ffffff;
        .err-title{
            width: 65.45vw;
            font-size: 3.25vw;
            font-family: AlibabaPuHuiTi_2_85_Bold;
            color: #111111;
            line-height: 3.49vw;
        }
        .err-desc{
            width: 33.45vw;
            // height: 120px;
            font-size: 0.93vw;
            font-family: AlibabaPuHuiTi_2_65_Medium;
            color: #3A3A3A;
            line-height: 1.25vw;
        }
    }
    @media screen {
        @media (max-width: 1025px){
            .container{
                padding: 200px 0 !important;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                .err-title{
                    width: 540px !important;
                    font-size: 24px !important;
                    line-height: 33px !important;
                }
                .err-desc{
                    width: 540px !important;
                    font-size: 16px !important;
                    line-height: 24px !important;
                }
            }
        }
        @media (max-width: 599px){
            .mr-b{
                margin-bottom: 60px;
            }
            .container{
                padding: 0 20px !important;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .err-title{
                    width: 100% !important;
                    font-size: 24px !important;
                    line-height: 33px !important;
                }
                .err-desc{
                    width: 100% !important;
                    font-size: 16px !important;
                    line-height: 24px !important;
                }
            }
        }
    }

</style>
