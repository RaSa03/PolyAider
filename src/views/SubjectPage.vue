<template>
  <div class="container">
    <div v-if="$route.params.id === 'online-courses'" class="content__body">
      <v-stand
        v-for="(course, index) in coursesList"
        :key="index"
        @click="goToPage(course.collection)"
      >
        {{ course.name }}
      </v-stand>
    </div>
  </div>
</template>
<script setup>
import VStand from "@/components/VStand.vue";
import { useFirebaseDb } from "../stores/fbData";
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const goToPage = (goto) => {
  router.push(`${route.fullPath}/${goto}`);
};
const fb = useFirebaseDb();
const coursesList = ref();
coursesList.value = fb.onlineCourses;
watch(
  fb,
  () => {
    coursesList.value = fb.onlineCourses;
  }
  // { deep: true }
);
</script>
<style lang="scss"></style>
