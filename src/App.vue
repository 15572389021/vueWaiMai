<template>
  <div id="app">
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<script>
  import Foot from "./components/footer/foot";

  export default {
    name: "app",
    components: {
      Foot
    }
  }

</script>

<style lang="stylus" ref="stylesheet/stylus">
  .app
    height 100%
    background #f5f5f5
</style>
