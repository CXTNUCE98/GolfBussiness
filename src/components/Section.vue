<script setup lang="ts">
import { ElButton } from 'element-plus';
import {  computed } from 'vue';
import { router } from '../router/router';
const props = defineProps({
  title: String,
  des: String
});

const title = computed(() => {
    return props.title
})

const des = computed(() => {
    return props.des
})

function goToCRUD() {
    
    router.push('/crud')
}
</script>
<template>
    <div class="flex justify-center text-center p-8">
        <div class="max-w-[1230px] title-center">
            <h1 class="font-bold text-2xl">{{ title }}</h1>
            <p class="pb-2">{{ des }}</p>            
        </div>        
    </div>
    <div class="flex justify-center">
        <div class="max-w-[1230px]">
            <slot name="tabs"></slot>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="max-w-[1230px]">
            <slot name="content"></slot>
        </div>
    </div>
    <div class="flex justify-center text-center p-4">
        <div class="max-w-[1230px] p-8">
            <button class="readmore-all"><span class="text-white">Xem tất cả ></span></button>
    <el-button type="primary" @click="goToCRUD">Redirect CRUD</el-button>

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