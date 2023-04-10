<script setup lang="ts">
import { ref } from 'vue';
import MenuList from './MenuList.vue';
import { Search, ShoppingCart } from '@element-plus/icons-vue';

const menuList = ref([
  {
    label: 'Golfshark',
    link: '/',
    image1: 'https://golfshark.vn/wp-content/uploads/2022/07/hd_mainmenu_icon_hover1.png',
    image2: 'https://golfshark.vn/wp-content/uploads/2022/07/hd_mainmenu_icon1.webp',
  },
  {
    label: 'Giới thiệu',
    link: 'gioi-thieu',
    image1: 'https://golfshark.vn/wp-content/uploads/2022/07/hd_mainmenu_icon_hover2.png',
    image2: 'https://golfshark.vn/wp-content/uploads/2022/07/hd_mainmenu_icon2.png',
  },
  {
    label: 'Gậy golf',
    link: 'gay-golf',
    image1: 'https://golfshark.vn/wp-content/uploads/2022/07/hd_mainmenu_icon_hover3.webp',
    image2: 'https://golfshark.vn/wp-content/uploads/2022/07/hd_mainmenu_icon3.webp',
  },
  {
    label: 'Túi Golf',
    link: 'tui-golf',
    image1: 'https://golfshark.vn/wp-content/uploads/2022/07/hd_mainmenu_icon_hover4.webp',
    image2: 'https://golfshark.vn/wp-content/uploads/2022/07/hd_mainmenu_icon4.webp',
  },
  {
    label: 'Thời trang Golf',
    link: 'thoi-trang-golf',
    image1: 'https://golfshark.vn/wp-content/uploads/2022/07/hd_mainmenu_icon_hover5.webp',
    image2: 'https://golfshark.vn/wp-content/uploads/2022/07/hd_mainmenu_icon5.webp',
  },
  {
    label: 'Phụ kiện Golf',
    link: 'phu-kien-golf',
    image1: 'https://golfshark.vn/wp-content/uploads/2022/07/hd_mainmenu_icon_hover6.png',
    image2: 'https://golfshark.vn/wp-content/uploads/2022/07/hd_mainmenu_icon6.png',
  },
  {
    label: 'Tin tức',
    link: 'tin-tuc',
    image1: 'https://golfshark.vn/wp-content/uploads/2022/07/hd_mainmenu_icon_hover7.webp',
    image2: 'https://golfshark.vn/wp-content/uploads/2022/07/hd_mainmenu_icon7.webp',
  },
  {
    label: 'Liên hệ',
    link: 'lien-he',
    image1: 'https://golfshark.vn/wp-content/uploads/2022/07/hd_mainmenu_icon_hover8.webp',
    image2: 'https://golfshark.vn/wp-content/uploads/2022/07/hd_mainmenu_icon8.webp',
  },
]);
</script>

<template>
  <div class="flex justify-center">
    <div class="w-[70%]">
      <div class="flex gap-2 text-sm p-2 flex-wrap text-[13px] font-light">
        <div>0777.888.662</div>
        <div>golfshark.cskh@gmail.com</div>
        <div>Số 09, Lô N15B, X2A, Yên Sở, Hoàng Mai, Hà Nội</div>
      </div>
    </div>
  </div>
  <el-divider></el-divider>
  <div class="flex justify-center">
    <div class="flex items-center w-[70%] gap-4">
      <div class="w-[184px] h-auto">
        <img src="https://golfshark.vn/wp-content/uploads/2022/08/logo-golfshark-1.png" alt="" />
      </div>
      <div class="flex w-full">
        <div class="flex justify-around w-full gap-4">
          <div class="flex gap-4">
            <div v-for="(item, index) in menuList" :key="index">
              <MenuList class="cursor-pointer" v-if="item" :menu-item="item" />
            </div>
          </div>
          <div class="flex gap-4">
            <div class="text-[34px]">
              <el-icon><Search /></el-icon>
              <div class="text-base">Tìm kiếm</div>
            </div>
            <div class="text-[34px]">
              <el-icon><ShoppingCart /></el-icon>
              <div class="text-base">Giỏ hàng</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.el-divider--horizontal {
  margin: 0px;
  margin-bottom: 10px;
}
.active {
  display: block;
}
</style>
