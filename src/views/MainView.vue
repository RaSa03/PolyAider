<template>
  <div class="wrapper">
    <HeaderBlock />
    <div class="content">
      <router-view></router-view>
    </div>
    <FooterBlock />
  </div>
</template>
<script setup>
import { RouterView } from "vue-router";
import FooterBlock from "@/components/FooterBlock.vue";
import HeaderBlock from "@/components/HeaderBlock.vue";
</script>
<style lang="scss"></style>
