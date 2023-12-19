<template>
  <div>
    <div class='header'>
      <div class='header-title'>{{ pageName }}</div>
      <img class='header-img' src='/assets/header.png' alt='header' />
    </div>
  </div>
</template>

<script setup>
import { pageName } from '/settings.js'
</script>

<style lang='scss' scoped>
.header {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;

  &-title {
    margin-top: 10px;
    position: absolute;
    color: #5dc2fe;
    font-size: 30px;
    left: 50%;
    transform: translateX(-50%);
  }

  &-img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    user-select: none;
    -webkit-user-drag: none;
  }
}
</style>
