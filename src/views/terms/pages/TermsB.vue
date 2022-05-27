<template>
    <header-b path="/terms" :type="0"></header-b>
    <div class="termas">
        <div class="termas-wrap">
            <div class="title">{{$t('message.terms.title')}}</div>
            <ul>
                <li>
                    <div class="subtitle">1. {{$t('message.terms.subt1')}}</div>
                    <div class="content">
                        {{$t('message.terms.subt1_txt1')}}
                    </div>
                </li>
                <li>
                    <div class="subtitle">2. {{$t('message.terms.subt2')}}</div>
                    <div class="content">
                        {{$t('message.terms.subt2_txt1')}}
                    </div>
                </li>
                <li>
                    <div class="subtitle">3. {{$t('message.terms.subt3')}}</div>
                    <div class="content">
                        {{$t('message.terms.subt3_txt1')}}
                    </div>
                </li>
                <li>
                    <div class="subtitle">4. {{$t('message.terms.subt4')}}</div>
                    <div class="content">
                        {{$t('message.terms.subt4_txt1')}}<br/>

                        {{$t('message.terms.subt4_txt2')}}<br/>
                        {{$t('message.terms.subt4_txt3')}}<br/>
                        {{$t('message.terms.subt4_txt4')}}<br/>
                        {{$t('message.terms.subt4_txt5')}}<br/>
                        {{$t('message.terms.subt4_txt6')}}<br/>
                        {{$t('message.terms.subt4_txt7')}}admin@cyberpop.online.<br/>
                    </div>
                    <div class="content">
                        {{$t('message.terms.subt4_txt8')}}<br/>
                        {{$t('message.terms.subt4_txt9')}}<br/>
                        {{$t('message.terms.subt4_txt10')}}
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <footer-b></footer-b>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
const router = useRouter()



onMounted(() => {
    window.scrollTo(0,0);
    store.dispatch('user/showDialog',{show: false, info: {}});// close message dialog
})

</script>
<style lang="less" scoped>
    .termas{
        padding-top: 55px;
        background-color: #000000;
        color: #fff;
        .termas-wrap{
            padding: 20px;
            .title{
                font-size: 34px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #FFFFFF;
                line-height: 48px;
                text-align: center;
            }
            .subtitle{
                margin-bottom: 14px;
                font-size: 17px;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                color: #ffffff;
                line-height: 48px;
            }
            .content{
                margin-bottom: 14px;
                font-size: 17px;
                line-height: 24px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
            }
        }
    }
</style>
