<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from 'vue'

const props = withDefaults(defineProps<{
  destroyElement: Function;
  visible: boolean;
  status: 'loading' | 'success' | 'error';
  title: string;
  subTitle: string;
  content?: string;
  acceptClose?: boolean;
  onClose?: Function;
}>(), {
  visible: true,
  acceptClose: true
})

const emits = defineEmits([
  'closeModal'
])

const _onClose = () => {
  emits('closeModal')
  props.destroyElement()
  props.onClose?.()
}

const statusIconEnum = {
  loading: 'https://d3fnwpfk23lv4d.cloudfront.net/component/modal/loading-phone.svg',
  success: 'https://d3fnwpfk23lv4d.cloudfront.net/component/modal/success-phone.svg',
  error: 'https://d3fnwpfk23lv4d.cloudfront.net/component/modal/failed-phone.svg'
}

</script>

<style scoped lang="less">
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.modal {
  &__wrapper {
    width: 83.7333333vw;
    min-height: 61.3333333vw;
    padding: 1.25rem;
    z-index: 9999;
    position: relative;
    background: linear-gradient(180deg,#30304D 0%,#232F37 100%);
    border: 3px solid;
    border-image: linear-gradient(219deg,#534d7e,#2d2741,#2d2a42,#22675a) 3 3;;
    clip-path: polygon(0 0,100% 0,100% 89%,90% 100%,0 100%);
    box-shadow: -1.51vw 0.83vw 0.2vw 0.05vw #0006;;
    display: grid;
    grid-template-rows: auto;
    grid-row-gap: 1rem;
  }


  &__close {
    width: 1.5rem;
    height: 1.5rem;
  }

  &__title {
    flex: 1;
    color: #FFFFFF;
    font-size: 1.5rem;
    font-family: AlibabaPuHuiTi_2_115_Black, serif;
    line-height: 3.33rem;
    -webkit-background-clip: text;
  }

  &__icon {
    width: 3rem;
    height: 3rem;
    margin-right: .5rem;
    overflow: hidden;
  }

  &__sub-title {
    max-width: 85%;
    font-size: 1.25rem;
    font-family: AlibabaPuHuiTi_2_105_Heavy, serif;
    color: #E6E8EC;
    line-height: 2.54rem;
    -webkit-background-clip: text;
  }

  &__content {
    font-size: 1rem;
    font-family: AlibabaPuHuiTi_2_55_Regular, serif;
    color: #FFFFFF;
    line-height: 1.56rem;
    -webkit-background-clip: text;
  }
}

.d-flex {
  display: flex;
}

.space-between {
  justify-content: space-between;
}

.align-center {
  align-items: center;
}

.loading {
  animation: loading 3s linear infinite;
}
</style>

<template>
  <div class="modal__wrapper" :class="{'bounceShow' : visible}">
    <div class="d-flex space-between align-center">
      <h1 class="modal__title">{{ title }}</h1>
      <img v-show="acceptClose" @click="_onClose" class="modal__close" src="https://d3fnwpfk23lv4d.cloudfront.net/component/modal/warning-close.svg" alt="close" />
    </div>
    <div class="d-flex">
      <slot name="icon" class="modal__icon">
        <img :src="statusIconEnum[status]" alt="icon" :class="{ 'modal__icon': true, 'loading': status === 'loading' }"/>
      </slot>
      <h3 class="modal__sub-title">{{ subTitle }}</h3>
    </div>
    <p class="modal__content" v-if="content">{{ content }}</p>
  </div>
</template>
