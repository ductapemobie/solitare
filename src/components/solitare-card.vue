<template>
  <!-- <img 
    :src="imgSrc" 
    :style="{
      width: width + 'px',
      height: height + 'px',
    }"
  > -->
  <div>hello</div>
</template>

<script lang="ts">
import type { Card } from '@/shared/types'

export default {
  props:{
    width: Number, 
    height: Number,
    card: {
      type: Object as () => Card,
      required: true,
    }
  },
}
</script>

<style scoped lang="scss">
div {
  background-color: white;
}
</style>