<script setup lang="ts">
import { ref } from 'vue';

import { useAxios } from '../ultils/api';
import {product} from '../api/product/product'

import Attachment from '../components/Attachment.vue';
import Policy from '../components/Policy.vue';
import Section from '../components/Section.vue';
import Accessory from '../components/Accessory.vue';
import SellingProduct from '../components/SellingProduct.vue';
import GolfClubsPreview from '../components/GolfClubsPreview.vue';

const { fetchData } = useAxios();

const data = ref(null);
const error = ref(null);
const loading = ref(false);
const loadData = async () => {
  loading.value = true;
  const result = await fetchData(product)  
  if (result) {
    data.value = result
  } else {
    error.value = 'Failed to fetch data'
  }
  loading.value = false
};

loadData();
console.log('data: ', data)

</script>
<template>
  <div class="h-[40vh]">
    <Attachment/>
  </div>
  <div class="mt-40 flex justify-center">
    <Policy />
  </div>
  <Section title="PHỤ KIỆN GOLF" des="Sản phẩm mới được cập nhật thường xuyên hằng ngày">
    <template v-slot:content>
      <Accessory />
    </template>
  </Section>
  <SellingProduct />
  <GolfClubsPreview />
  <Section title="GIÀY GOLF" >
    <template v-slot:content>
      <Accessory />
    </template>
  </Section>
</template>
<style scoped></style>
