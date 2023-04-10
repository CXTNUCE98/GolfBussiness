<script setup lang="ts">
import { ref } from 'vue';
import { ElCarousel, ElCarouselItem } from 'element-plus';
import { attachments, banners } from '../api fake/banner';
import InfoBanner from './InfoBanner.vue';
</script>

<template>
  <el-carousel class="relative h-full" trigger="click" height="500px">
    <el-carousel-item v-for="item in attachments" :key="item?.name">
      <img :src="item?.src" alt="" />
    </el-carousel-item>
    <div class="flex w-full justify-center absolute bottom-[-170px] z-10">
      <div class="flex gap-2 bg-white p-2">
        <div
          class="relative flex items-center w-[370px] h-[230px] overflow-hidden"
          v-for="item in banners"
          :key="item.name"
        >
          <InfoBanner :info="item" />
        </div>
      </div>
    </div>
  </el-carousel>
</template>

<style scoped></style>
