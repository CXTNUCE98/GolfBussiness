<script setup lang="ts">
import { ref } from 'vue';
import { ElCarousel, ElCarouselItem, ElScrollbar } from 'element-plus';
import { attachments, banners } from '../api fake/banner';
import InfoBanner from './InfoBanner.vue';


</script>

<template>
  <!-- <div class="h-[500px] relative"> -->
  <el-carousel class="h-[53vh]" trigger="click" arrow="always">
    <el-carousel-item class="min-h-[470px]" v-for="item in attachments" :key="item?.name">
      <img class="w-full min-h-[470px]" :src="item?.src" alt="" />
    </el-carousel-item>
    <div class="flex w-full justify-center absolute bottom-[-380px] z-10 ">
      <div class="flex gap-2 bg-white p-2 ">
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
<!-- </div> -->

</template>

<style scoped>
/* .el-carousel--horizontal{
  overflow: ;
} */
:deep(.el-carousel__arrow){
  top: 78%;
}
</style>
