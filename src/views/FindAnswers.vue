<template>
  <div class="container">
    <div class="coppied">
      <div :style="{ display: coppied }" class="coppied-text">
        текст скопирован!
      </div>
    </div>
    <div class="search-box">
      <form @submit.prevent="SearchInArray(search)" class="search-form">
        <div class="search-svg">
          <SearchIcon />
        </div>
        <input
          v-model="search"
          placeholder="Поиск..."
          type="text"
          class="search-input"
          id="search-input"
          autocomplete="off"
          autocorrect="off"
        />
      </form>
    </div>
    <div v-if="search.length < 3 && !answersList.length" class="hint-text">
      <p>Для поиска введите значение длиной более 3 символа</p>
    </div>
    <div>
      <QuestionAnswer v-for="(qa, index) in answersList" :key="index">
        <div class="qa question">{{ qa.question }}</div>
        <div class="qa answer">
          {{ qa.answer }}
          <copyIcon @click="copyAnswer(qa.answer)" />
        </div>
      </QuestionAnswer>
    </div>
  </div>
</template>

<script setup>
import QuestionAnswer from "@/components/QuestionAnswer.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useFindAnswers } from "@/stores/findAnswers";
import copyIcon from "@/components/icons/copyIcon.vue";

const search = ref("");
const answersList = ref([]);
const coppied = ref("none");
const SearchInArray = (ser) => {
  if (ser.length >= 3) {
    answersList.value = useFindAnswers().SearchedList(ser);
  }
};
const test = async () => {
  await useFindAnswers().Finder(useRoute().params.id);
};
test();
const copyAnswer = (ans) => {
  navigator.clipboard
    .writeText(ans)
    .then(() => {
      coppied.value = "block";
      setTimeout(() => {
        coppied.value = "none";
      }, 1500);
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components.scss";
.container {
  padding: 30px 20px 0;
  letter-spacing: 0.8px;
  word-spacing: 0.3rem;
}
</style>
