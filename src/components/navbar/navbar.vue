<template>
  <div class="qi-navbar">
    <div class="qi-navbar-left">
      <slot name="left"></slot>
    </div>
    <div class="qi-navbar-title">
      <slot></slot>
    </div>
    <div class="qi-navbar-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
const name = utils.prefix + 'navbar'

export default {
  name,
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.qi-navbar {
  display: flex;
  align-items: center;
  padding: 0 10px;
  line-height: 44px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  font-size: 18px;
  &-left {
    display: flex;
    flex: 1;
  }
  &-title {
    display: flex;
    flex: 1;
    white-space: nowrap;
    justify-content: center;
  }
  &-right {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
}
</style>
