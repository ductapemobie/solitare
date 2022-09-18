<template>
  <img src="@/assets/cardback.png" :style="{
    width: width + 'px',
    height: height + 'px',
  }">
</template>

<script lang="ts">
  export default {
    props:{
      width: Number, 
      height: Number,
    },
    setup(){
      return {

      };
    }
  }
</script>