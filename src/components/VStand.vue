<template lang="">
  <div class="content__body-stand stand"><slot></slot></div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/components.scss";
.stand {
  cursor: pointer;
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
@media (max-width: 425px) {
  .stand {
    width: 100%;
    height: auto;
    border-radius: 0px;
    box-shadow: 0px 2px 4px $shadow-color;
    margin: 5px 15px;
  }
}
</style>
