<template>
<div style="position: relative" :style="{
    width: width + 'px',
    height: height + 'px',
  }">
  <solitare-card 
    v-for="(card, index) in cards"
    :height="height"
    :width="width"
    :card="card"
    class="card"
    :style="{
      top: (index * 20) + 'px'
    }"
  />
</div>
</template>

<script lang="ts">

import SolitareCard from '@/components/solitare-card.vue'

export default {
  props: {
    cards: Array,
    width: Number,
    height: Number,
  },
  components:{
    SolitareCard,
  },
  setup(props: any){
    console.log(props.cards);
    
  }
}

</script>

<style scoped>

.card{
  position: absolute;
  z-index: 0;
  border-radius: 2px;
  border-color: black;
  border-style: solid;
}

</style>