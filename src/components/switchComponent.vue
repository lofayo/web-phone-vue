<template>
   <!-- 发现，想写个UI库，其实也没有那么难，就是一些稍高级的CSS属性与简单的JS交互，没事也来写个 -->
  <div class="switch_box" :class='{active:btnActive}' @click='switchBtn'>
    <span class="circle"></span>
  </div>
</template>
<script>
  export default {
    computed: {
      btnActive () {
        return this.$store.state.btnActive
      }
    },
    methods: {
      switchBtn() {
        this.$store.commit('switchBtn')
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .switch_box
    width: 1.066667rem
    height: 0.586667rem
    padding: 0 0.053333rem
    box-sizing: border-box
    border-radius: 2.666667rem
    background: #4286F3
    display: flex
    justify-content: space-between
    align-items: center
    transition: all .5s
    .circle 
      display: inline-block
      width: 0.48rem
      height: 0.48rem
      border-radius: 50%
      background: #fff
      border: 0.026667rem solid #FCFCFC
      box-sizing: border-box
      box-shadow: 0 0.053333rem 0.133333rem rgba(0,0,0,.4)
      transform: translate(0,0)
      transition: all .5s
  .active 
    background: #fff
    border: 0.026667rem solid #eee
  .active
    .circle
      transform: translate(0.48rem,0)
</style>
