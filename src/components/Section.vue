<script setup lang="ts">
import { ElButton } from 'element-plus';

</script>
<template>
    <div class="flex justify-center text-center p-4">
        <div class="max-w-[1230px] title-center">
            <h1 class="font-bold text-2xl">PHỤ KIỆN GOLF</h1>
            <p class="pb-2">Sản phẩm mới được cập nhật thường xuyên hàng ngày</p>            
        </div>        
    </div>
    <div class="flex justify-center">
        <div class="max-w-[1230px]">
            <slot name="content"></slot>
        </div>
    </div>
    <div class="flex justify-center text-center p-4">
        <div class="max-w-[1230px]">
            <button class="readmore-all"><span class="text-white">Xem tất cả ></span></button>
        </div>
    </div>
</template>



<style scoped>
.title-center{
    position: relative;
}
.title-center:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 150px;
    height: 2px;
    background-color: #333;
    transform: translateX(-50%);
}
.readmore-all {
    background: #db0000;
    padding: 6px 25px;
    color: #fff;
    border-radius: 17px;
}
</style>