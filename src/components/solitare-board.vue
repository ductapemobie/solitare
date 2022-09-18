<template>
  <div>
    <div id="row-one">
      <!-- top row -->
      <div>
        <!-- draw pile goes here -->
      </div>
      <div>
        <!-- talon goes here -->
      </div>
      <div>
        <!-- foundation goes here -->
      </div>
    </div>
    <div id="row-two">
      <!-- main board area -->
      <tableau-stack v-for="tab in tabState" :cards="tab" :width="100" :height="125" />
    </div>
  </div>
  <div>
    <button @click="increment">click me</button>
  </div>
</template>

<script lang="ts">

import { reactive } from 'vue';
import { useStore } from '@/store';
import TableauStack from '@/components/tableau-stack.vue';
import type { Card } from '@/shared/types';

export default {
  components: {
    TableauStack
  },
  setup(){
    const state = reactive({count: 0});
    const store = useStore();
    store.initGame();

    const tabState: Card[][] = store.tableau;

    function increment(){
      state.count++;
      store.initGame();
      console.log(store.$state);
    }

    return {
      state,
      increment,
      tabState,
    };
  }
};

</script>

<style scoped>

#row-two{
  display: flex;
  gap: 10px;
  width: max-content;
  margin: auto;
}

#row-one{
  display: flex;
  gap: 10px;
  width: max-content;
  margin: auto;
  height: 150px;
}

</style>