<script setup lang="ts">
import Attachment from '../components/Attachment.vue';
import Policy from '../components/Policy.vue';
import Section from '../components/Section.vue';
import Accessory from '../components/Accessory.vue';
import SellingProduct from '../components/SellingProduct.vue';

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
</template>
<style scoped></style>
