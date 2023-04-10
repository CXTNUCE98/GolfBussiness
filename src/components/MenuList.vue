<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps({
  menuItem: Object,
});

const _menuItem = computed(() => {
  return props.menuItem;
});
const hoverActive = ref(false);
function changeHoverActive() {
  hoverActive.value = true;
}
</script>
<template>
  <router-link :to="`/${_menuItem?.link}`">
    <div
      class="flex justify-center flex-col items-center"
      @mouseover="changeHoverActive"
      @mouseleave="hoverActive = !hoverActive"
    >
      <div v-if="hoverActive">
        <img :src="_menuItem?.image1" alt="" />
      </div>
      <div v-else>
        <img :src="_menuItem?.image2" alt="" />
      </div>
      {{ _menuItem?.label }}
    </div>
  </router-link>
</template>
<style scoped>
.sliding-5 {
  height: 1.2em;
  color: #fff;
  text-shadow: 0 -1.2em black;
  line-height: var(--t, 3.6em);
  /* background: linear-gradient(black 0 0) bottom/100% var(--d, 0%) no-repeat; */
  transition: 0.5s linear;
}
.sliding-5:hover {
  --d: 100%;
  --t: 1.2em;
}
</style>
