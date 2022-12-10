<script setup>
// import { ref } from "vue";
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

<template>
  <div class="wrapper">
    <div class="head">
      <div class="container">
        <div class="head__body">
          <h1 class="head__body-title">PolyAider</h1>
          <h4 class="head__body-subtitle">
            Сайт помощьник Политехника <br />
            Лабы, отчеты , ответы на онлайн курсы и не только..
          </h4>
          <a href="#" class="head__body-btn btn">узнать больше</a>
        </div>
      </div>
    </div>
    <div class="subjects">
      <div class="container">
        <div class="subjects__body">
          <div class="subjects__body-title">
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
  </div>
</template>

<style scoped lang="scss">
$first-color: rgb(0, 130, 170);
$second-color: rgb(195, 255, 122);
$third-color: rgb(242, 242, 242);

.btn {
  display: inline-block;
  background: $second-color;
  color: $first-color;
  padding: 20px 40px;
  border-radius: 0.5rem;
  box-shadow: 0px 1px 2px 0px;
}
.container {
  max-width: 1140px;
}
.wrapper {
  font-weight: 700;
  .head {
    height: 100vh;
    background: url("@/assets/images/kniga.png") 300% 100% / contain no-repeat,
      linear-gradient(135deg, $first-color 0%, $second-color 100%);
    display: flex;
    height: 100vh;
    align-items: center;
    padding: 0 10vw;

    &__body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      height: 50%;
      color: white;
      font-weight: 700;

      &-subtitle {
        max-width: 300px;
        margin: 20px 0;
        line-height: 1.5;
        font-style: italic;
      }
    }
  }

  .subjects {
    background: $third-color;

    padding: 60px 0 0;

    .container {
      margin: 0 auto;
    }
    &__body {
      display: flex;
      flex-direction: column;
      align-items: end;
      padding: 0 40px 80px 0;
      background: url("@/assets/images/subjects-img.jpg") 0 80px/ 58% no-repeat,
        linear-gradient(135deg, $first-color 0%, $second-color 100%) 100% 100%/ 60%
          80% no-repeat;

      &-title {
        max-width: 500px;
        background: rgba(255, 255, 255, 0.9);
        padding: 30px;
        border-radius: 20px;
        box-shadow: 2px -2px 7px;

        .subj-title-btn {
          margin: 30px 0;
        }
      }

      &-items {
        margin-top: 60px;
        display: flex;
        flex-wrap: wrap;
        max-width: 800px;
        justify-content: end;
        .subj-item {
          margin: 10px 0px 10px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 240px;
          background: rgba(255, 255, 255, 0.9);
          padding: 20px;
          border-radius: 20px;
          box-shadow: 2px -2px 7px;
        }
        .subj-ico {
          width: 80px;
          padding: 15px;
          background: $second-color;
          border-radius: 50%;
        }
        .subj-name {
          margin-top: 10px;
          color: $first-color;
        }
      }
    }
  }
}
@media (max-width: 991px) {
  .head {
    background: url("@/assets/images/kniga.png") 50% 100%/ 130% 60% no-repeat,
      linear-gradient(135deg, $first-color 0%, $second-color 100%);
  }
}
</style>
