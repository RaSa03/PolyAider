<template lang="">
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
</template>

<script setup>
import { useFirebaseDb } from "../stores/fbData";
import { useRoute, useRouter } from "vue-router";
import VStand from "@/components/VStand.vue";
import { onMounted, ref } from "vue";
const router = useRouter();
const route = useRoute();
const goToPage = (goto) => {
  router.push(`${route.fullPath}/${goto}`);
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
