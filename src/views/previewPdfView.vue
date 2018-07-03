<template>
  <div class="content">
    <div class="load_logo" :class='{hide: numPages !== undefined}'>
      <img src="~images/loading.png">
    </div>
    <div class="pdf_box">
      <pdf
        v-for="i in numPages"
        :key="i"
        :src="src"
        :page="i"
      ></pdf>
    </div>
  </div>
</template>
<script>
  import pdf from 'vue-pdf'
  export default {
    components: {
      pdf
    },
    data() {
      return {
        src: null,
        numPages: undefined
      }
    },
    created() {
      let urlId = this.$route.params.id
      this.src = pdf.createLoadingTask(urlId)
    },
    mounted() {
      this.src.then(pdf => {
        this.numPages = pdf.numPages
      })
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>

  @import '../../static/css/mixin.styl'
  
  @keyframes circle
  {
    from {transform:rotateZ(0deg);}
    to {transform:rotateZ(360deg);}
  }

  .content
    position: relative
    .load_logo
      width: 100vw
      height: 100vh
      display: flex
      &.hide
        display: none
      &>img
        margin: auto
        animation: circle 1s infinite
</style>
