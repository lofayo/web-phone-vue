<template>
  <div id="app" :class='{no_scroll: isScroll}'>
    <headerComponent @noRoll='noRoll' @canRoll='canRoll' />
    <router-view/>
    <footerComponent />
  </div>
</template>
<script>
  import headerComponent from '@/components/headerComponent'
  import footerComponent from '@/components/footerComponent'

  export default {
    name: 'App',
    data() {
      return {
        isScroll: false
      }
    },
    components: {
      headerComponent,
      footerComponent
    },
    methods: {
      noRoll() {
        this.isScroll = true
      },
      canRoll() {
        this.isScroll = false
      }
    }
  }

</script>
<style>
  .no_scroll {
    height: 100vh;
    overflow: hidden;
  }

  #app {
    font-family: "Microsoft YaHei";
  }
  #container{
    display: none;
  }

</style>
