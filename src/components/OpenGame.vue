<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { isGateClient } from '@/tools/gateIo'
import { modal } from '@/components/Modal'
import { checkMobileSystem } from '@/tools/checkMobileSystem'

const router = useRouter()
const { t } = useI18n()
const { isAndroid, isIOS } = checkMobileSystem()

const openLoadingModal = () => modal({
  title: t('message.modal.open_game.title'),
  subTitle: t('message.modal.open_game.loading_sub_title'),
  status: 'loading',
  acceptClose: false
})

const openFailedModal = () => {
  modal({
    title: t('message.modal.open_game.title'),
    subTitle: t('message.modal.open_game.failed_sub_title'),
    status: 'error',
    acceptClose: true,
    content: t('message.modal.open_game.error_content')
  })
  router.push('/download')
}

let timer: NodeJS.Timer

const openProcess = () => {
  const loadingModal = openLoadingModal()
  timer = setTimeout(() => {
    loadingModal.close()
    openFailedModal()
  }, 10000)
}

const fakeOpen = openProcess

const realOpen = () => {

  openProcess()

  window.addEventListener('pagehide', () => clearTimeout(timer))

  if (isAndroid) {
    window.location.replace('intent://cyberpop/#Intent;scheme=unitydl;package=online.cyberpop.avesta;end')
  }

  if (isIOS) {
    window.location.replace('https://test.cyberpop.online')
  }
}

const openGame = isGateClient() ? fakeOpen : realOpen

</script>

<template>
  <a @click="openGame" class="open-game-button">
    <div v-if="isAndroid">
      <img class="icon" src="https://d3fnwpfk23lv4d.cloudfront.net/common/android.png" alt="Android">
      <span>{{ $t('message.menu.open_game.android') }}</span>
    </div>
    <div v-if="isIOS">
      <img class="button__icon" src="https://d3fnwpfk23lv4d.cloudfront.net/common/ios.png" alt="IOS">
      <span>{{ $t('message.menu.open_game.ios') }}</span>
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
