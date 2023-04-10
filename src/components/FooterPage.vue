<script setup lang="ts">
import { ref } from 'vue';
import { ElIcon } from 'element-plus';
import { Location, PhoneFilled } from '@element-plus/icons-vue';
</script>

<template>
  <div class="wrapper__footer flex justify-center">
    <div class="w-[70%] p-12 flex gap-2 justify-between h-min">
      <div class="font-bold">
        <h2 class="py-2 text-white">TRỤ SỞ CHÍNH</h2>
        <div class="flex gap-2">
          <el-icon><Location /></el-icon>
          <span class="text-white">Số 09, Lô N15B, X2A, Yên Sở, Hoàng Mai, Hà Nội.</span>
        </div>
        <div class="flex gap-2">
          <el-icon><PhoneFilled /></el-icon>
          <span class="text-white">Điện thoại: 0362066666</span>
        </div>
      </div>
      <div class="font-bold">
        <h2 class="text-white">CHÍNH SÁCH</h2>
        <div class="text-white font-light">Chính sách và quy định chung</div>
        <div class="text-white font-light">Hình thức thanh toán</div>
        <div class="text-white font-light">Chính sách vận chuyển</div>
        <div class="text-white font-light">Chính sách bán buôn</div>
        <div class="text-white font-light">Chính sách bảo mật thông tin</div>
      </div>
      <div class="text-white font-bold">
        <h2 class="text-white">THÔNG TIN CÔNG TY</h2>
        <div class="text-white font-light">Giới thiệu công ty</div>
        <div class="text-white font-light">Tiêu chí bán hàng</div>
        <div class="text-white font-light">Showroom</div>
        <div class="text-white font-light">Hợp tác đại lý</div>
        <div class="text-white font-light">Quy định bảo hành</div>
      </div>
      <div class="text-white font-bold">
        <img class="h-[80px] w-auto" src="https://golfshark.vn/wp-content/uploads/bct.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper__footer {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://golfshark.vn/wp-content/uploads/2022/07/golfshark-banner-new.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 460px;
  background-color: rgba(39, 38, 38, 0.7);
}
</style>
