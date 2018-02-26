<template>
  <div>
    <qi-cells>
      <qi-cell title="标题"></qi-cell>
      <qi-cell title="标题" value="文字"></qi-cell>
      <qi-cell title="标题" desc="描述信息" value="文字"></qi-cell>
      <qi-cell to="/cell" title="可点标题"></qi-cell>
      <qi-cell to="/cell" title="可点标题" value="可点文字"></qi-cell>
    </qi-cells>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
