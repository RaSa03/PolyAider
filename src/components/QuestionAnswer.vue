<template lang="">
  <div class="question-and-answer">
    <slot></slot>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@import "@/assets/styles/components.scss";

.question-and-answer {
  border-bottom: 2px solid;
  border-image: linear-gradient(315deg, $first-color 0%, $second-color 100%) 1;
  margin-top: 20px;
  display: flex;
}
@media (max-width: 600px) {
  .question-and-answer {
    flex-direction: column;
  }
}
</style>
