<template>
    <header-a path="/privacy" :type="0"></header-a>
    <div class="privacy">
        <div class="privacy-wrap">
            <div class="title">{{$t('message.privacy.title')}}</div>
            <ul>
                <li>
                    <div class="subtitle">1. {{$t('message.privacy.subt1')}}</div>
                    <div class="content">
                        1.1 {{$t('message.privacy.subt1_txt1')}}
                    </div>
                    <div class="content">
                        1.2 {{$t('message.privacy.subt1_txt2')}}
                    </div>
                    <div class="content">
                        1.3 {{$t('message.privacy.subt1_txt3')}}
                    </div>
                    <div class="content">
                        1.4 {{$t('message.privacy.subt1_txt4')}}<a href="mailto:business@cyberpop.online" target="view_window">business@cyberpop.online</a>
                    </div>
                </li>
                <li>
                    <div class="subtitle">2. {{$t('message.privacy.subt2')}}</div>
                    <div class="content">
                        {{$t('message.privacy.subt2_txt')}}
                    </div>
                    <div class="content">
                        2.1 {{$t('message.privacy.subt2_txt1')}}
                    </div>
                    <div class="content">
                        2.2 {{$t('message.privacy.subt2_txt2')}}
                    </div>
                    <div class="content">
                        2.3 {{$t('message.privacy.subt2_txt3')}}
                    </div>
                    <div class="content">
                        2.4 {{$t('message.privacy.subt2_txt4')}}
                    </div>
                </li>
                <li>
                    <div class="subtitle">3. {{$t('message.privacy.subt3')}}</div>
                    <div class="content">
                        3.1 {{$t('message.privacy.subt3_txt1')}}
                    </div>
                    <div class="content">
                        3.2 {{$t('message.privacy.subt3_txt2')}}
                    </div>
                    <div class="content">
                        3.3 {{$t('message.privacy.subt3_txt3')}}
                    </div>
                </li>
                <li>
                    <div class="subtitle">4. {{$t('message.privacy.subt4')}}</div>
                    <div class="content">
                        4.1 {{$t('message.privacy.subt4_txt1_1')}}
                    </div>
                    <div class="content">
                        {{$t('message.privacy.subt4_txt1_2')}}<br/>
                        {{$t('message.privacy.subt4_txt1_3')}}<br/>
                        {{$t('message.privacy.subt4_txt1_4')}}<br/>
                        {{$t('message.privacy.subt4_txt1_5')}}<br/>
                        4.2 {{$t('message.privacy.subt4_txt2')}}
                    </div>
                    <div class="content">
                        4.3 {{$t('message.privacy.subt4_txt3')}}
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
    store.dispatch('user/metaChange',false);
})

</script>
<style lang="less" scoped>
    a {
    text-decoration: none;
    }
    .privacy{
        padding-top:  5.5vw;
        background-color: #000000;
        color: #fff;
        .privacy-wrap{
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
                a{
                    color: #04F39B;
                    text-decoration: none;
                }
            }
        }
    }
</style>
