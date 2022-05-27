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
        width: 47.91vw;
        // height: 22.6vw;
        min-height: 22.6vw;
        margin: 2.6vw auto 0;
        padding: 2.08vw;
        background: linear-gradient(110deg, rgba(8, 6, 19, 0.22) 0%, rgba(132, 120, 255, 0.38) 100%),
                    linear-gradient(100deg, rgba(4, 255, 162, 0.1) 0%, rgba(27, 54, 44, 0) 100%);
        border: 2px solid;
        border-image: linear-gradient(270deg, rgba(176, 65, 216, 1), rgba(139, 255, 178, 0.5)) 2 2;
        li{
            .title{
                height: 1.77vw;
                margin-bottom: 1.25vw;
                font-size: 1.25vw;
                font-family: AlibabaPuHuiTi_2_115_Black;
                color: #04FFA2;
                line-height: 1.45vw;
            }
            .desc{
                width: 43.75vw;
                font-size: .83vw;
                font-family: AlibabaPuHuiTi_2_55_Regular;
                color: #FFFFFF;
                line-height: 1.04vw;
            }
        }
        li + li{
            margin-top: 2.08vw;
        }
    }
    @media screen {
        @media (max-width: 1000px) {
            .introduction{
                width: 60vw !important;
                li{
                    .desc{
                        width: 55.9vw !important;
                    }
                }
            }
        }
    }
</style>