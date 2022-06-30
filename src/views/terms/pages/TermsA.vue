<template>
    <header-a path="/terms" :type="0"></header-a>
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
    <footer-a></footer-a>
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
    store.dispatch('wallet/metaChange',false);
})

</script>
<style lang="less" scoped>
   @keyframes submitAnimation {
        0%{
            left: -13vw;
        }
        100%{
            left: -1.4vw;
        }
    }
    @keyframes stopSubmitAnimation {
        0%{
            left: -1.4vw;
        }
        100%{
            left: -13vw;
        }
    }
    a {
    text-decoration: none;
    }
    
    .router-link-active {
    text-decoration: none;
    }
    .termas{
        padding-top: 5.5vw;
        background-color: #000000;
        color: #fff;
        .termas-wrap{
            padding: 2.7vw 19.375vw 4.11vw;
            .title{
                line-height: 2.5vw;
                font-size: 1.77vw;
                color: #FFFFFF;
                font-family: AlibabaPuHuiTi_2_115_Black;
                text-align: center;
            }
            .subtitle{
                margin-bottom: .9vw;
                font-size: .88vw;
                font-family: AlibabaPuHuiTi_2_105_Heavy;
                line-height: 2.5vw;
            }
            .content{
                margin-bottom: 1.2vw;
                font-size: .88vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                line-height: 1.4vw;
                color: #FFFFFF;
            }
        }
    }
</style>
