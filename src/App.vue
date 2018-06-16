<template>
  <div id="app" :class='{no_scroll: isScroll}'>
    <!-- <headerEnComponent v-if='isEn' @noRoll='noRoll' @canRoll='canRoll' />
    <headerComponent v-else @noRoll='noRoll' @canRoll='canRoll' /> -->
    <headerComponent @noRoll='noRoll' @canRoll='canRoll'/>
    <router-view/>
<!--     <footerEnComponent v-if='isEn' />
    <footerComponent v-else /> -->
    <footerComponent />
  </div>
</template>
<script>
  import headerComponent from '@/components/headerComponent'
  import footerComponent from '@/components/footerComponent'

  // import headerEnComponent from '@/components/english/headerComponent'
  // import footerEnComponent from '@/components/english/footerComponent'

  export default {
    name: 'App',
    data() {
      return {
        isScroll: false
      }
    },
    components: {
      headerComponent,
      footerComponent,
      // headerEnComponent,
      // footerEnComponent
    },
    computed: {
      isEn() {
        return this.$store.state.isEn
      }
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
