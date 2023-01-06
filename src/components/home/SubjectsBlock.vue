<script setup></script>

<template lang="">
  <div class="subjects">
    <div class="container">
      <div class="subjects__body" id="subjects">
        <div class="subjects__body-title window">
          <h2>Материалы по учебным предметам, конспекты , лабороторные</h2>
          <router-link to="categories" class="btn subj-title-btn"
            >показать все</router-link
          >
        </div>
        <div class="subjects__body-items">
          <router-link to="categories/math" class="subj-item">
            <img src="@/assets/icons/math.png" class="subj-ico" alt="a" />
            <h3 class="subj-name">вышмат</h3>
          </router-link>
          <router-link to="categories/physic" class="subj-item">
            <img src="@/assets/icons/physic.png" class="subj-ico" alt="a" />
            <h3 class="subj-name">физика</h3>
          </router-link>
          <router-link to="categories/chemistry" class="subj-item">
            <img src="@/assets/icons/chemistry.png" class="subj-ico" alt="a" />
            <h3 class="subj-name">химия</h3>
          </router-link>
          <router-link to="categories/informatics" class="subj-item">
            <img src="@/assets/icons/informatics.png" class="subj-ico" />
            <h3 class="subj-name">информатика</h3>
          </router-link>
          <router-link to="categories/english" class="subj-item">
            <img src="@/assets/icons/english.png" class="subj-ico" alt="a" />
            <h3 class="subj-name">english</h3>
          </router-link>
          <router-link to="categories" class="subj-item">
            <img src="@/assets/icons/more.png" class="subj-ico" alt="a" />
            <h3 class="subj-name">больше..</h3>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang=""></style>
