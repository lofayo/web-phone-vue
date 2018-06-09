<template>
  <div id="app" :style='{overflow: isRoll,height: height}'>
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
        isRoll: 'auto',
        height: 'auto'  
      }
    },
    components: {
      headerComponent,
      footerComponent
    },
    methods: {
      noRoll() {
        this.isRoll = 'hidden'
        this.height = '100vh'
      },
      canRoll() {
        this.isRoll = 'auto'
        this.height = 'auto'
      }
    }
  }

</script>
<style>
  #app {
    font-family: "Microsoft YaHei";
  }
</style>
