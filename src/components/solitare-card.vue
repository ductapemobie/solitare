<template>
  <img 
    :src="imgSrc" 
    :style="{
      width: width + 'px',
      height: height + 'px',
    }"
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Card } from '@/shared/types'

export default defineComponent({
  props:{
    width: Number, 
    height: Number,
    card: {
      type: Object as () => Card,
      required: true,
    }
  },
  computed: {
    imgSrc(): string {
      const filename = String(this.card.value) + this.card.suit[0].toUpperCase()
      return `/img/${this.card.suit}/${filename}.png`
    }
  }
})
</script>

<style scoped lang="scss">
div {
  background-color: white;
}
</style>