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
  beforeRouteUpdate (to, from, next) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    next()
  },
  methods: {
  }
}
</script>

<style>
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
