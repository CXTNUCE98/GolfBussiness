<script lang="ts" setup>
import FooterPage from '../components/FooterPage.vue';
import HeaderPage from '../components/HeaderPage.vue';
import { ElButton } from 'element-plus';
</script>

<template>
  <HeaderPage />
  <router-view />
  <FooterPage />
</template>

<style scoped></style>
