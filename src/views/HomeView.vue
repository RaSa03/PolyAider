<script setup>
import HeadScreen from "@/components/home/HeadScreen.vue";
import SubjectsBlock from "@/components/home/SubjectsBlock.vue";
import MemberBlock from "@/components/home/MemberBlock.vue";
import IdeaBlock from "@/components/home/IdeaBlock.vue";
import FooterBlock from "@/components/home/FooterBlock.vue";
</script>

<template>
  <div class="wrapper">
    <head-screen></head-screen>
    <subjects-block></subjects-block>
    <member-block></member-block>
    <idea-block></idea-block>
    <footer-block></footer-block>
  </div>
</template>

<style lang="scss">
$first-color: rgb(0, 130, 170);
$second-color: rgb(200, 250, 120);
$third-color: rgb(250, 250, 250);
$footer-bg: rgb(0, 56, 80);
* {
  font-weight: 700;
}

.window-text {
  font-weight: normal;
}
.head {
  .container {
    margin: 0;
    padding: 0;
  }
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
    color: $third-color;
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

  &__body {
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 0 40px 80px 0;
    background: url("@/assets/images/subjects-img.jpg") 0 80px/ 58% no-repeat,
      linear-gradient(180deg, $first-color 0%, $second-color 100%) 100% 100%/ 60%
        80% no-repeat;

    &-title {
      max-width: 500px;
      background: $third-color;
      opacity: 0.9;
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
        background: $third-color;
        opacity: 0.9;
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

.member {
  padding-top: 60px;
  &__body {
    background: linear-gradient(90deg, $first-color 0%, $second-color 100%) 0
      70%/100% 40% no-repeat;
    &-img {
      height: 560px;
      max-width: 560px;
      margin-left: 80px;
      border-radius: 20px;
      background: url("@/assets/images/member.jpg") 0 0 / contain no-repeat;

      .circle {
        margin: 50px 0 0 -80px;
        width: 160px;
        height: 160px;
        border-radius: 50%;
        background: linear-gradient(90deg, $first-color 0%, $second-color 100%);
      }
    }
    &-window {
      margin: -200px 100px 0 auto;
      max-width: 440px;
      height: 400px;
      border-radius: 20px;
      padding: 30px 50px;
      background: $third-color;
      opacity: 0.9;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      box-shadow: 2px -2px 7px;
    }
  }
}
.idea {
  padding: 100px 0;
  &__body {
    display: flex;

    &-window {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 50%;
      padding: 0 40px;
      border-radius: 20px;
      background: $third-color;
      opacity: 0.9;
      .window-text {
        margin: 30px 0;
      }
    }
    &-img {
      background: linear-gradient(90deg, $first-color 0%, $second-color 100%) 0
        50%/100% 50% no-repeat;
      width: 50%;
      padding: 0 100px;
    }
  }
}
.footer {
  background: $footer-bg;
}

@media (max-width: 991px) {
  .head {
    background: url("@/assets/images/kniga.png") 70% 100% / 100% no-repeat,
      linear-gradient(135deg, $first-color 0%, $second-color 100%);
    align-items: start;
    &__body {
      background: rgba(3, 62, 85, 0.3);
      border-radius: 20px;
      padding: 20px;
      margin-top: 18vh;
    }
  }
  .subjects__body {
    padding: 0 20px;
    &-title {
      margin-top: 80px;
      max-width: 400px;
    }
  }
}

@media (max-width: 767px) {
  .window {
    padding: 20px;
    height: auto;
    margin: 0;
  }
  .container {
  }
  .head {
    background-size: 200%;
    &__body-btn {
      width: 100%;
    }
  }
  .subjects__body {
    background: url("@/assets/images/subjects-img.jpg") 0 0 / contain no-repeat,
      linear-gradient(180deg, $first-color 0%, $second-color 100%) 100% 100%
        no-repeat;
    &-title {
      text-align: center;
      margin-top: 95vw;
      max-width: none;
    }
    &-items {
      justify-content: center;
      .subj-item {
        width: 100%;
        margin: 0 0 20px;
      }
    }
  }
  .member {
    &__body {
      padding: 20px;
      &-img {
        height: 75vw;
        width: 75vw;
        margin-left: calc(25vw - 30px);
        .circle {
          height: 120px;
          width: 120px;
        }
      }
      &-window {
        align-items: center;
        text-align: center;
        width: auto;
        max-width: none;
        .window-text {
          margin: 10px 0;
        }
      }
    }
  }
  .idea {
    &__body {
      flex-direction: column-reverse;
      &-window {
        margin-top: -5vw;
        width: auto;
        box-shadow: 2px -2px 7px;
        margin: 0 20px;
        align-items: center;
        text-align: center;
        .window-text {
          margin: 10px 0;
        }
      }
      &-img {
        width: auto;
        padding: 0 20vw;
      }
    }
  }
}
</style>
