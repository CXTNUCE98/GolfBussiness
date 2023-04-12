<script setup lang="ts">
import Attachment from '../components/Attachment.vue';
import Policy from '../components/Policy.vue';
import Section from '../components/Section.vue';
import Accessory from '../components/Accessory.vue';

</script>
<template>
  <div class="h-[40vh]">
    <Attachment/>
  </div>
  <div class="mt-40 flex justify-center">
    <Policy />
  </div>
  <Section>
    <template v-slot:content>
      <Accessory />
    </template>
  </Section>
</template>
<style scoped></style>
