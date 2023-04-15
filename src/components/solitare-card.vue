<template>
  <img :src="cardToHref(card)" :style="{
    width: width + 'px',
    height: height + 'px',
  }">
</template>

<script lang="ts">

import { cardToHref } from '@/shared/helpers'

export default {
  props:{
    width: Number, 
    height: Number,
    card: {
      type: Object as any
    }
  },
  setup(){
    return {

    };
  },
  methods: {
    cardToHref
  }
}
</script>

<style scoped lang="scss">
div {
  background-color: white;
}
</style>