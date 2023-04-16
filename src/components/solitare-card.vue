<template>
  <img 
    src="/img/diamonds/13D.png" 
    :style="{
      width: width + 'px',
      height: height + 'px',
    }"
  >
</template>

<script lang="ts">


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
  }
}
</script>

<style scoped lang="scss">
div {
  background-color: white;
}
</style>