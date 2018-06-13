<template>
  <footer class="header">
    <div class="community">
      <p class="title">关注我们的社区</p>
      <p class="target">
        <a target="_blank" href="" class="target_item"></a>
        <a target="_blank" href="" class="target_item"></a>
        <a target="_blank" href="https://www.youtube.com/channel/UCuZYolcwaJUvI-3wZJ0PAVw/featured" class="target_item"></a>
        <a target="_blank" href="http://id.tudou.com/pospisolutions" class="target_item"></a>
        <a target="_blank" href="" class="target_item"></a>
      </p>
    </div>
    <div class="copy_rights">
      © All rights reserved. | ICP证：沪ICP备15028992号-1
    </div>
  </footer>
</template>
<script>
  export default {

  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

  @import '../../static/css/mixin.styl'

  .header
    font-size: 0.32rem
    color: #B3B3B3
    line-height: 0.453333rem
    .community
      border-top: 0.026667rem solid #EDEEF4
      border-bottom: 0.026667rem solid #EDEEF4
      padding: 0.853333rem
      .target
        margin-top: 0.533333rem
        display:flex
        justify-content: space-between
        .target_item
          display:inline-block
          width: 1.28rem
          height: 1.28rem
          &:nth-child(1)
            bg_dpr('~images/img_bottom_facebook')
          &:nth-child(2)
            bg_dpr('~images/img_bottom_LinkedIn')
          &:nth-child(3)
            bg_dpr('~images/img_bottom_youtube')
          &:nth-child(4)
            bg_dpr('~images/img_bottom_youku')
          &:nth-child(5)
            bg_dpr('~images/img_bottom_WeChat')
    .copy_rights
      padding: 0.853333rem 0
      text-align: center
    
</style>
