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
  setup(props){
    const filename = String(props.card.value) + props.card.suit[0].toUpperCase()
    const imgSrc = `/img/${props.card.suit}/${filename}.png`
    return {
      imgSrc
    };
  },
}
</script>

<style scoped lang="scss">
div {
  background-color: white;
}
</style>