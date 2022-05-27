<template>
   <ul class="introduction">
       <li>
           <div class="title">Title 1</div>
           <div class="desc">
               For athletes, high altitude produces two contradictory effects on performance. For explosive events (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure means there is less resistance from the atmosphere and the athlete's performance will generally be better at high altitude.
           </div>
       </li>
       <li>
           <div class="title">Title 2</div>
           <div class="desc">
               Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration; but this prescription is not consistently followed, even by most health care providers, because the term respiratory rate (RR) is a well-established term in health care, even though it would need to be consistently replaced with ventilation rate if the precise usage were to be followed.
           </div>
       </li>
   </ul>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted, watch } from 'vue'

import store from '@/store'




onMounted(async () => {
        
})


</script>
<style lang="less" scoped>
    .introduction{
        width: 100%;
        margin-top: 24px;
        padding: 24px 16px;
        background: linear-gradient(110deg, rgba(8, 6, 19, 0.22) 0%, rgba(132, 120, 255, 0.38) 100%),
                    linear-gradient(100deg, rgba(4, 255, 162, 0.1) 0%, rgba(27, 54, 44, 0) 100%);
        border: 2px solid;
        border-image: linear-gradient(270deg, rgba(176, 65, 216, 1), rgba(139, 255, 178, 0.5)) 2 2;
        li{
            .title{
                margin-bottom: 16px;
                font-size: 16px;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #04FFA2;
                line-height: 20px;
            }
            .desc{
                width: 271px;
                font-size: 14px;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                font-weight: normal;
                color: #FFFFFF;
                line-height: 20px;
            }
        }
        li + li{
            margin-top: 36px;
        }
    }
</style>