<template>
  <div class="wrapper">
    <header-block />
    <div class="content">
      <div class="container">
        <div v-if="$route.params.id === 'online-courses'" class="content__body">
          <v-stand v-for="(course, index) in coursesList" :key="index">
            {{ course.name }}
          </v-stand>
        </div>
      </div>
    </div>
    <footer-block />
  </div>
</template>
<script setup>
import FooterBlock from "@/components/FooterBlock.vue";
import HeaderBlock from "@/components/HeaderBlock.vue";
import VStand from "@/components/VStand.vue";
import { useFirebaseDb } from "../stores/fbData";
import { ref, watch } from "vue";

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
