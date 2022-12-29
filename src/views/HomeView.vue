<script>
import HeadScreen from "@/components/home/HeadScreen.vue";
import SubjectsBlock from "@/components/home/SubjectsBlock.vue";
import MemberBlock from "@/components/home/MemberBlock.vue";
import IdeaBlock from "@/components/home/IdeaBlock.vue";
import FooterBlock from "@/components/FooterBlock.vue";
export default {
  components: {
    HeadScreen,
    SubjectsBlock,
    MemberBlock,
    IdeaBlock,
    FooterBlock,
  },
  setup(props) {},
};
</script>

<template>
  <div class="wrapper">
    <head-screen />
    <div class="content">
      <subjects-block />
      <member-block />
      <idea-block />
    </div>
    <footer-block />
  </div>
</template>

<style lang="scss"></style>
