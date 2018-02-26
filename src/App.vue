<template>
  <div id="app">
    <!-- https://router.vuejs.org/zh-cn/advanced/transitions.html -->
    <qi-navbar class="navbar">
      <i
        v-if="$route.path != '/'"
        slot="left"
        class="iconfont icon-left_icon"
        @click="goBack"></i>
      qiui
      <router-link to="/" slot="right">
        <i class="iconfont icon-home_icon"></i>
      </router-link>
    </qi-navbar>
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
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
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

.navbar {
  color: $color-text-regular;
  margin-bottom: 10px;
  .iconfont {
    font-size: inherit;
  }
}
</style>
<style lang="scss">
@import './style/main.scss'; // 全局自定义的css样式

body {
  background: #f8fafb;
}
</style>
