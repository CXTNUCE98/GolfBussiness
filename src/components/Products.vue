<script setup lang="ts">import { ref } from 'vue';
import { ElRate } from 'element-plus';
import changeUnitMoney from '../other/moneyUnit'

const productList = [
    {
        id: 1,
        name: 'Thắt lưng golf nữ hãng SSV',
        image: 'https://golfshark.vn/wp-content/uploads/2023/04/That-lung-golf-nu-SSV-loai-nho-495k-SALES-350k-4.jpg',
        rate: 5,
        price: 495000, 
        sale: 350000,
    },
    {
        id: 2,
        name: 'Giày golf nữ RS-G Wmns - P.WhtQ.SHADEQuarry',
        image: 'https://golfshark.vn/wp-content/uploads/2022/10/193826_02-min_3__52380.jpg',
        rate: 5,
        price: 495000, 
        sale: 350000,
    },
    {
        id: 3,
        name: 'Giày Golf Nữ Cực Xịn PROADAPT ALPHATCAT',
        image: 'https://golfshark.vn/wp-content/uploads/2022/10/PROADAPT-ALPHACAT-Wmns-Puma-Black-Puma-Silver-Hot-Coral-5000k-1.png',
        rate: 5,
        price: 495000, 
        sale: 350000,
    },
    {
        id: 4,
        name: 'Giày Golf Nữ IGNITE SL Sport - F.PeacoatB.Blue',
        image: 'https://golfshark.vn/wp-content/uploads/2022/10/Laguna-Sport-Pm.BlkPm_.Wht-3238k-2.jpg',
        rate: 5,
        price: 495000, 
        sale: 350000,
    },
    {
        id: 5,
        name: 'Giày Golf Nữ IGNITE Pro Wmns - High Rise-Puma',
        image: 'https://golfshark.vn/wp-content/uploads/2022/10/IGNITE-SL-Sport-F.PeacoatB.Blue-2-3510k.jpg',
        rate: 5,
        price: 495000, 
        sale: 350000,
    },
    {
        id: 6,
        name: 'Giày Golf Nữ IGNITE FASTEN8 Wmns -= H.Rise',
        image: 'https://golfshark.vn/wp-content/uploads/2022/10/IGNITE-Pro-Wmns-High-Rise-Puma-Silver-Pink-Lady-4000k-1.jpg',
        rate: 5,
        price: 495000, 
        sale: 350000,
    },
    {
        id: 7,
        name: 'Giày Golf Nữ IGNITE Blaze Pro - Pm.WhtH.Rise Chống',
        image: 'https://golfshark.vn/wp-content/uploads/2022/10/IGNITE-FASTEN8-Wmns-White-3250k.jpg',
        rate: 5,
        price: 495000, 
        sale: 350000,
    },
    {
        id: 8,
        name: 'Giày Golf Nữ GS-FAST Wmns - Puma White-Navy Blazer',
        image: 'https://golfshark.vn/wp-content/uploads/2022/10/IGNITE-FASTEN8-Wmns-H.Rise-P.Silver-S.Blue-3394k.jpg',
        rate: 5,
        price: 495000, 
        sale: 350000,
    },
    {
        id: 9,
        name: 'Giày Golf Nữ GS-FAST Wmns - Puma White-High Rise',
        image: 'https://golfshark.vn/wp-content/uploads/2022/10/IGNITE-Blaze-Pro-Pm.WhtH_.Rise-5192k-1.jpg',
        rate: 5,
        price: 495000, 
        sale: 350000,
    },
    {
        id: 10,
        name: 'Giày Golf Nam RS-G PARADISE - Nvy Blazer',
        image: 'https://golfshark.vn/wp-content/uploads/2022/10/RS-G-PARADISE-Nvy-Blazer-Blue-Glow-4600k.jpg',
        rate: 5,
        price: 495000, 
        sale: 350000,
    },
]

const rate = ref(5)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
</script>

<template>
    <div 
        v-for="item in productList" 
        :key="item.id"
        class="border border-transparent hover:border-[#ccc] w-[200px] cursor-pointer"
    >
        <div class="p-4 flex justify-center">
            <img  
                class="w-[184px] h-[184px] hover-image"          
                :src="item.image"
                alt=""
            >
        </div>
        <div class="p-4 flex flex-col justify-center items-center">
            <h2 class="hover:text-[#db0000] product-title">{{ item.name }}</h2>
            <el-rate  v-model="rate" disabled :colors="colors" />
            <div class="line-through text-gray-400">{{ changeUnitMoney(item.sale, 'VND') }}</div>
            <div class="text-[#DB0000] font-bold text-lg">{{ changeUnitMoney(item.price, 'VND')}}</div>
        </div>
    </div>
</template>



<style scoped>
.hover-image:hover{
    transition: all .3s;
    transform: scale(1.1);
}

.product-title{
    margin-bottom: 0;
    font-size: 14px;
    line-height: 21px;
    color: #222;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 42px;
    min-height: unset;
    text-align: center;
}
</style>