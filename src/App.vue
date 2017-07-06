<template>
  <div id="app">
      <m-header></m-header>
      <tab></tab>
      <router-view></router-view>
  </div>
</template>

<script>
import MHeader from './components/m-header/m-header'
import Tab from './components/tab/tab'

export default {
  components: {
    MHeader,
    Tab
  }
}
</script>

<style lang="less">
@import "./assets/styles/index";

.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity .3s;
}

.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
