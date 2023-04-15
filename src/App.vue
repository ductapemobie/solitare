<template>
  <SolitareBoard />
</template>

<script lang="ts">

import SolitareBoard from './components/solitare-board.vue';

export default {
  components:{
    SolitareBoard
  },
  setup(){
    console.log('welcome to the app');
  }
};

</script>


<style scoped>

</style>
