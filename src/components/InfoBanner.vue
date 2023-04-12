<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps({
  info: Object,
});
const _info = computed(() => {
  return props.info;
});
const showInfo = ref(false);
</script>
<template>
  <div class="h-full">
  <div @mouseover="showInfo = true" @mouseleave="showInfo = false">
    <img class="bg-cover" :src="_info?.src" alt="" />
    <div
      v-if="showInfo"
      class="absolute flex items-center p-6 flex-col gap-2 justify-center bg-white/70 w-[370px] h-[230px] top-0"
    >
      <div class="font-bold text-[#D7021B]">{{ _info?.belong }}</div>
      <h2 class="font-bold text-xl">{{ _info?.title }}</h2>
      <div class="text-center">{{ _info?.description }}</div>
    </div>
  </div>
</div>
</template>

<style scoped></style>
