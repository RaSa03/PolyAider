<script setup>
const iconsName = [
  "вышмат",
  "физика",
  "химия",
  "информатика",
  "english",
  "больше",
];
const iconPath = (name) => {
  return `./src/assets/icons/${name}.png`;
};
</script>

<template lang="">
  <div class="subjects">
    <div class="container">
      <div class="subjects__body">
        <div class="subjects__body-title window">
          <h2>Материалы по учебным предметам, конспекты , лабороторные</h2>
          <a href="#" class="btn subj-title-btn">показать все</a>
        </div>
        <div class="subjects__body-items">
          <div
            v-for="(icon, index) in iconsName"
            :key="index"
            class="subj-item"
          >
            <img :src="iconPath(icon)" class="subj-ico" alt="a" />
            <h3 class="subj-name">{{ icon }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang=""></style>
