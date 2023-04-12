<script setup lang="ts">
import { ref } from 'vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ElRate } from 'element-plus';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const onSwiper = (swiper: any) => {
    console.log(swiper);
}
const onSlideChange = () => {
    console.log('slide change');
}
const modules = [Navigation, Pagination, Scrollbar, A11y]
const productList = [
    {
        id: 1,
        image: "https://golfshark.vn/wp-content/uploads/2022/09/Tham-tap-golf-TL020-1485k-SALES-1300k-1.jpg",
        title: 'Thảm tập golf TL020 hàng chính hãng PGM cao cấp',
        price: 1300000,
        sale: 1485000
    },
    {
        id: 2,
        image: "https://golfshark.vn/wp-content/uploads/2022/09/Tham-tap-golf-TL019-1485k-SALES-1300k-6.jpg",
        title: 'Thảm tập golf TL020 hàng chính hãng PGM cao cấp',
        price: 1300000,
        sale: 1485000
    },
    {
        id: 3,
        image: "https://golfshark.vn/wp-content/uploads/2022/09/Tham-tap-golf-TL018-1385k-SALES-1200k.jpg",
        title: 'Thảm tập golf TL020 hàng chính hãng PGM cao cấp',
        price: 1300000,
        sale: 1385000
    },
    {
        id: 4,
        image: "https://golfshark.vn/wp-content/uploads/2022/09/Tham-tap-golf-TL017-1485k-SALES-1200k-1-1.jpg",
        title: 'Thảm tập golf TL020 hàng chính hãng PGM cao cấp',
        price: 1300000,
        sale: 1485000
    },
    {
        id: 5,
        image: "https://golfshark.vn/wp-content/uploads/2022/09/Tham-tap-golf-TL017-1485k-SALES-1200k-1-1.jpg",
        title: 'Thảm tập golf TL020 hàng chính hãng PGM cao cấp',
        price: 1300000,
        sale: 1485000
    },
    {
        id: 6,
        image: "https://golfshark.vn/wp-content/uploads/2022/09/Tham-tap-golf-TL017-1485k-SALES-1200k-1-1.jpg",
        title: 'Thảm tập golf TL020 hàng chính hãng PGM cao cấp',
        price: 1300000,
        sale: 1485000
    },
]

const rate = ref(4)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
</script>
<template>
    <swiper
      :modules="modules"
      :slides-per-view="4"
      navigation
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
        <swiper-slide
            v-for="item in productList"
            :key="item.id"
            class="border border-transparent hover:border-[#ccc] "
        >      
            <div class="col-inner w-[227px]">
                <div class="p-4 flex justify-center">
                    <img  
                        class="w-[168px] h-[168px] hover-image"          
                        :src="item.image"
                        alt=""
                    >
                </div>
                <div class="p-4 text-center">
                    <h2 class="text-[#db0000]">{{ item.title }}</h2>
                    <el-rate v-model="rate" disabled :colors="colors" />
                    <div class="flex gap-2">
                        <span>{{ item.sale }}</span>
                        <span>{{ item.price}}</span>
                    </div>
                </div>
            </div>
        </swiper-slide>    
    </swiper>
</template>

<style scoped>
.col-inner{
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
}
/* .col-inner:hover{
    border: 1px solid #ddd;
    overflow: hidden;
    transition: all 0.3s;
    position: relative;
    background-color: #fff;
} */
.hover-image:hover{
    transition: all .3s;
    transform: scale(1.1);
}
</style>