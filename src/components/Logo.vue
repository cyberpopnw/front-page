<template>
  <div class="logo__wrapper">
    <a :href="props.href" :target="props.target">
      <img src="@/assets/nwhome/logo_101.png" class="logo logo__static" alt="CyberPop Online">
      <img src="@/assets/nwhome/logo.gif" class="logo logo__gif" alt="CyberPop Online">
    </a>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: '/'
  },
  target: {
    type: String
  }
})

</script>

<style scoped lang="less">
.logo__wrapper {
  overflow: hidden;
  position: relative;

  &:hover .logo__static {
    opacity: 0;
  }

  &:hover .logo__gif {
    opacity: 1;
  }
}

.logo {
  width: 100.2%;
  height: 100.2%;
  border: none;
  margin: -2px;
  transition: all .3s;
  position: absolute;
  top: 0;
  left: 0;


  &__static {
    position: relative;
  }

  &__gif {
    opacity: 0;
  }
}

@media only screen and (min-width: 1025px) {
  .logo__wrapper {
    width: 18.20vw;
    height: 100%;
  }
}

@media only screen and (max-width: 1025px) {
  .logo__wrapper {
    width: 151px;
    height: 41px;
  }
}

</style>
