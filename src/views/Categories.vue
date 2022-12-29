<template lang="">
  <div class="wrapper">
    <header-block />
    <div class="content">
      <div class="container">
        <div class="content__body">
          <div class="content__body-stand stand">ответы на онлайн курсы</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
          <div class="content__body-stand stand">химия</div>
        </div>
      </div>
    </div>
    <footer-block />
  </div>
</template>
<script>
import FooterBlock from "@/components/FooterBlock.vue";
import HeaderBlock from "@/components/HeaderBlock.vue";

export default {
  components: {
    FooterBlock,
    HeaderBlock,
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/styles/components.scss";

.wrapper {
  .content {
    // background: rgb(57, 85, 87);
    &__body {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      &-stand {
      }
    }
  }
}
.stand {
  padding: 10px;
  margin: 10px;
  width: 180px;
  height: 180px;
  border-radius: 20px;
  background-image: linear-gradient(0deg, $first-color 0%, $second-color 100%);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: $third-color;
  font-size: 1.5rem;
  box-shadow: 0px 2px 8px 1px $shadow-color;
  &:hover {
    opacity: 0.8;
    box-shadow: none;
  }
}
</style>
