<template lang="">
  <div class="wrapper">
    <header-block />
    <div class="content">
      <div class="container">
        <div class="content__body">
          <v-stand
            v-for="(sub, index) in SubjectsList"
            :key="index"
            @click="goToPage(sub.id)"
          >
            {{ sub.name }}
          </v-stand>
        </div>
      </div>
    </div>
    <footer-block />
  </div>
</template>

<script setup>
import { useFirebaseDb } from "../stores/fbData";
import { useRouter } from "vue-router";
import FooterBlock from "@/components/FooterBlock.vue";
import HeaderBlock from "@/components/HeaderBlock.vue";
import VStand from "@/components/VStand.vue";
import { onMounted, ref } from "vue";
const router = useRouter();
const goToPage = (goto) => {
  router.push(`categories/${goto}`);
};

const SubjectsList = useFirebaseDb().SubjectsList;
</script>

<style lang="scss" scoped>
.wrapper {
  .content {
    &__body {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>
