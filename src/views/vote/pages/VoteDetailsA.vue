<template>
    <header-a path="vote" :type="6"></header-a>
    <div class="container">
        <div>Back</div>
        <div class="content">
            <div class="left">
                <div class="title">[EP14] [Social] Dissolve Community Working Group</div>
                <div class="card">
                    <div>
                        <div class="state">Active</div>
                        <img src="" alt="">
                        <div>Cyberpop by <span>game</span></div>
                    </div>
                    <div class="description">
                        <div>
                            This vote proposes to dissolve the Community Working Group at the conclusion of the First Term of 2022.
                            Description
                            This is a proposal to dissolve the Community Working Group at the conclusio
                            n of the First Term of 2022 in accordance with rule 3.1 of the working group 
                            rules passed under EP 4.
                            If this proposal is passed, the Community Working Group will be dissolved at
                            the conclusion of the First Term of 2022, leaving three
                            This is a proposal to dissolve the Community Working Group at the conclusio
                            n of the First Term of 2022 in accordance with rule 3.1 of the working group 
                            rules passed under EP 4.
                            If this proposal is passed, the Community Working Group will be dissolved at 
                            the conclusion of the First Term of 2022, leaving three
                        </div>
                        <div class="more"><div>Show more</div></div>
                    </div>
                    <div class="discussion">
                        <div class="name">Discussion</div>
                        <div>
                            <div>[EP14][Social] Dissolve Community Working Group</div>
                            <div>I just hope when it goes to vote, it clearly explains what will happen to those of us...</div>
                        </div>
                    </div>
                    <div class="castvote">
                        <div class="name">Cast your vote</div>
                        <div>
                            <ul class="single">
                                <li>For</li>
                                <li>Against</li>
                                <li>Abstain</li>
                            </ul>
                            <div class="votebtn">Vote</div>
                        </div>
                    </div>
                    <div class="votes">
                        <div class="name">Votes <span>408</span></div>
                        <div>
                            <ul>
                                <li>
                                    <div><img src="" alt=""><span>brantly.eth</span></div>
                                    <div>For</div>
                                    <div><span>260k ENS</span><img src="" alt=""></div>
                                </li>
                            </ul>
                            <div class="more"><div>Show more</div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="info">
                    <div class="name">Information</div>
                    <ul>
                        <li>
                            <span>Strategie(s)</span>
                            <img src="" alt="">
                        </li>
                        <li>
                            <span>IPFS</span>
                            <div>#QmdUWNW <img src="" alt=""></div>
                        </li>
                        <li>
                            <span>Voting system</span>
                            <span>Single choice voting</span>
                        </li>
                        <li>
                            <span>Start date</span>
                            <span>Jun 10, 2022, 9:00 PM</span>
                        </li>
                        <li>
                            <span>End date</span>
                            <span>Jun 15, 2022, 9:00 PM</span>
                        </li>
                        <li>
                            <span>Snapshot</span>
                            <div>14,938,370 <img src="" alt=""></div>
                        </li>
                    </ul>
                </div>
                <div class="result">
                    <div class="name">Current results</div>
                    <ul>
                        <li>
                            <div><span>for</span><span>1.8M ENS 95.71%</span></div>
                            <div class="progress"><div :style="{'width': 10 + '%'}"></div></div>
                        </li>
                        <li>
                            <div><span>Against</span><span>1.8M ENS 95.71%</span></div>
                            <div class="progress"><div :style="{'width': 10 + '%'}"></div></div>
                        </li>
                        <li>
                            <div><span>Abstain</span><span>1.8M ENS 95.71%</span></div>
                            <div class="progress"><div :style="{'width': 10 + '%'}"></div></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <footer-a></footer-a>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, computed, getCurrentInstance, onUnmounted } from 'vue'
import store from '@/store'
import {  useRouter } from 'vue-router'
import Web3 from '@/tools/web3' 
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { proxy } = getCurrentInstance() as any;
const thisAcounts = ref(0);
const router = useRouter()
const isClick = ref(false as any);


onMounted(() => {

})

</script>

<style lang="less" scoped>
</style>