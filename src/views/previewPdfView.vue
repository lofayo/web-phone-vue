<template>

</template>
<script>

  import Vue from 'vue'
  import pdf from '@/plugins/pdf'
  Vue.use(pdf)

  export default {
    created () {
      let pdfUrl = this.$route.params.id
      console.log(pdfUrl)
      this.$showPDF('/'+pdfUrl)  
    }  
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus'>

  @import '../../static/css/mixin.styl'
  #container
    display: block
</style>
