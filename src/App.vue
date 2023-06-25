<!--App.vue是主vue模块，主要是使用router-link引入其他模块，App.vue是项目的主组件，所有的页面都是在App.vue下切换的-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
  <div id="beian" class="margin-left20px">
    <a class="text-apple-white text-extra-small" href="https://beian.miit.gov.cn/" target="_blank">备案号：蜀ICP备2023016294号</a>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
#beian {
  position: fixed;
  bottom: 0;
  z-index: 100;
}
</style>