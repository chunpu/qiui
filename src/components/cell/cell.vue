<template>
  <component :is="to ? 'router-link' : 'div'" class="qi-cell" :to="to">
    <div class="qi-cell-title">
      <slot name="title">
        <span class="qi-cell-text">{{title}}</span>
        <span class="qi-cell-desc" v-if="desc">{{desc}}</span>
      </slot>
    </div>
    <div :class="{'qi-cell-value': true, 'qi-cell-value-padding': hasLink}">
      <span>{{value}}</span>
    </div>
    <i v-if="hasLink" class="qi-cell-link-arrow iconfont icon-list_icon_arrow"></i>
  </component>
</template>

<script>
const name = utils.prefix + 'cell'

export default {
  name,
  props: {
    title: String,
    desc: String,
    value: String,
    isLink: Boolean,
    to: {

    }
  },
  data () {
    return {
    }
  },
  computed: {
    hasLink () {
      return !!this.to
    }
  }
}
</script>

<style lang="scss" scope>
.qi-cell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 48px;
  line-height: 1;
  padding: 0 10px;
  &:not(:last-child) {
    border-bottom: 1px solid $color-border;
  }
  &-start{justify-content: flex-start;}
  .qi-cell-title {
    flex: 1;
    .qi-cell-text {
      font-size: 16px;
      color: $color-text-primary;
    }
    .qi-cell-desc {
      font-size: 12px;
      display: block;
      margin-top: 6px;
      color: $color-text-regular;
    }
  }
  .qi-cell-value {
    font-size: 16px;
    color: $color-text-secondary;
    &.qi-cell-value-padding {
      margin-right: 20px;
    }
  }
  .qi-cell-link-arrow {
    color: #d8d8d8;
    position: absolute;
    right: 10px;
    font-size: 14px;
  }
}
</style>
