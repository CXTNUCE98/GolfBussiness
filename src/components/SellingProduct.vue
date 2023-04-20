<script setup lang="ts">
import Section from './Section.vue';
import Product from './Products.vue';
import { ref } from 'vue';


const activeItem = ref<string>('Thời Trang Golf');

function handleItemClick(item: string) {
  activeItem.value = item;
}
</script>

<template>    
    <Section title="SẢN PHẨM BÁN CHẠY" des="Sản phẩm bán chạy năm 2022">
        <template v-slot:tabs>
            <div class="flex justify-center gap-4 p-4">
                <div 
                    class="border rounded pl-8 pr-8 pt-2 pb-2 cursor-pointer" 
                    :class="{ active: activeItem === 'Thời Trang Golf' }" 
                    @click="handleItemClick('Thời Trang Golf')"
                >
                    Thời Trang Golf
                </div>
                <div 
                    class="border rounded pl-8 pr-8 pt-2 pb-2 cursor-pointer" 
                    :class="{ active: activeItem === 'Túi Golf' }" 
                    @click="handleItemClick('Túi Golf')"
                >
                    Túi Golf
                </div>
                <div 
                    class="border rounded pl-8 pr-8 pt-2 pb-2 cursor-pointer" 
                    :class="{ active: activeItem === 'Giày Golf' }" 
                    @click="handleItemClick('Giày Golf')"
                >
                    Giày Golf
                </div>
            </div>
        </template>
        <template v-slot:content>
        <div class="flex justify-center">
            <div class="max-w-[1230px] flex flex-wrap justify-center gap-4">
                <Product />
            </div>
        </div>
        </template>
  </Section>
</template>



<style scoped>
.active{
    color: #d0021b;
    border: 1px solid #d0021b;
    border-radius: 5px;
}
</style>