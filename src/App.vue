<template>
  <div id="app">
    <headerComponent />
    <router-view/>
    <footerComponent />
  </div>
</template>
<script>
  import headerComponent from '@/components/headerComponent'
  import footerComponent from '@/components/footerComponent'

  export default {
    name: 'App',
    components: {
      headerComponent,
      footerComponent
    }
  }

</script>
<style>
  #app {
    font-family: "Microsoft YaHei";
  }

</style>
