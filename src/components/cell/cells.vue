<template>
  <div class="qi-cells">
    <slot></slot>
  </div>
</template>

<script>
const name = utils.prefix + 'cells'

export default {
  name,
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.qi-cells {
  padding-left: 20px;
  background: #fff;
  border-top: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
  color: $color-text-regular;
}
</style>
