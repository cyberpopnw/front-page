<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { checkClient } from '@/tools/gateIo'
import { modal } from '@/components/Modal'

const router = useRouter()

const openLoadingModal = () => modal({
  title: 'Open Cyberpop Online',
  subTitle: 'Please Wait...',
  status: 'loading',
  acceptClose: false
})

const openFailedModal = () => new Promise((resolve) => {
  modal({
    title: 'Open Cyberpop Online',
    subTitle: 'Failed',
    status: 'error',
    acceptClose: true,
    content: "Maybe you haven't downloaded our game?"
  })
  return resolve('')
}).then(() => router.push('/download'))

const { isGateClient, gateClientType } = checkClient()
const isAndroid = computed(() => gateClientType === 'Android')
const isIOS = computed(() => gateClientType === 'IOS')

let timer: NodeJS.Timer

const openProcess = () => {
  const loadingModal = openLoadingModal()
  timer = setTimeout(() => {
    loadingModal.close()
    openFailedModal()
  }, 3000)
}

const fakeOpen = openProcess

const realOpen = () => {
  openProcess()

  window.addEventListener('pagehide', () => clearTimeout(timer))

  window.location.replace(
      isAndroid
          ? 'intent://cyberpop/#Intent;scheme=unitydl;package=online.cyberpop.avesta;end'
          : 'https://test.cyberpop.online'
  )
}

const openGame = isGateClient ? fakeOpen : realOpen

</script>

<template>
  <a @click="openGame" class="open-game-button">
    <div>
      <img class="icon" src="https://d3fnwpfk23lv4d.cloudfront.net/common/android.png" alt="Android">
      <span>Open game in <b>Android</b></span>
    </div>
    <div v-if="isIOS">
      <img class="button__icon" src="https://d3fnwpfk23lv4d.cloudfront.net/common/ios.png" alt="IOS">
      <span>Open game in <b>IOS</b></span>
    </div>
  </a>

</template>

<style scoped lang="less">
.open-game-button {
  display: block;
  width: 100%;
  position: absolute;
  bottom: 2rem;
  left: 0;

  div {
    display: grid;
    grid-column-gap: 1rem;
    grid-template-columns: 1.5rem calc(100% - 1.5rem);
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 1rem 2rem;
    margin: 0 auto;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, .3);
    color: #FFFFFF;
    font-family: AlibabaPuHuiTi_2_55_Regular, serif;
    line-height: 1.75rem;
    font-size: 1rem;
    text-decoration: none;
    text-align: center;
  }

  b {
    font-family: AlibabaPuHuiTi_2_85_Bold, serif;
  }

  .icon {
    width: 2rem;
    height: 2rem;
  }

  &--primary {
    display: flex;
    font-family: AlibabaPuHuiTi_2_115_Black, serif;
    font-size: 1.5rem;
    background-color: #04FFA2;
    color: #000000;
  }
}
</style>
