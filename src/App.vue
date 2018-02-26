<template>
  <div id="app">
    <!-- https://router.vuejs.org/zh-cn/advanced/transitions.html -->
    <transition :name="transitionName">
      <router-view class="child-view">
      </router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    $route (to, from) {
      const toDepth = utils.getPathDepth(to.path)
      const fromDepth = utils.getPathDepth(from.path)
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.child-view {
  position: absolute;
  width:100%;
  transition: all 0.4s ease-in-out;
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
<style lang="scss">
@import './style/main.scss'; // 全局自定义的css样式
</style>
