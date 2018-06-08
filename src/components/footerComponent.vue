<template>
  <footer class="header">
    <div class="community">
      <p class="title">关注我们的社区</p>
      <p class="target">
        <span class="target_item"></span>
        <span class="target_item"></span>
        <span class="target_item"></span>
        <span class="target_item"></span>
        <span class="target_item"></span>
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
            background: url('~images/img_bottom_facebook.png') no-repeat center / 100% 100%
            @media (-webkit-min-device-pixel-ratio: 2) {
              background-image:url('~images/img_bottom_facebook@2x.png');
            }
            @media (-webkit-min-device-pixel-ratio: 3) {
              background-image:url('~images/img_bottom_facebook@3x.png');
            }
          &:nth-child(2)
            background: url('~images/img_bottom_LinkedIn.png') no-repeat center / 100% 100%
            @media (-webkit-min-device-pixel-ratio: 2) {
              background-image:url('~images/img_bottom_LinkedIn@2x.png');
            }
            @media (-webkit-min-device-pixel-ratio: 3) {
              background-image:url('~images/img_bottom_LinkedIn@3x.png');
            }
          &:nth-child(3)
            background: url('~images/img_bottom_youtube.png') no-repeat center / 100% 100%
            @media (-webkit-min-device-pixel-ratio: 2) {
              background-image:url('~images/img_bottom_youtube@2x.png');
            }
            @media (-webkit-min-device-pixel-ratio: 3) {
              background-image:url('~images/img_bottom_youtube@3x.png');
            }
          &:nth-child(4)
            background: url('~images/img_bottom_youku.png') no-repeat center / 100% 100%
            @media (-webkit-min-device-pixel-ratio: 2) {
              background-image:url('~images/img_bottom_youku@2x.png');
            }
            @media (-webkit-min-device-pixel-ratio: 3) {
              background-image:url('~images/img_bottom_youku@3x.png');
            }
          &:nth-child(5)
            background: url('~images/img_bottom_WeChat.png') no-repeat center / 100% 100%
            @media (-webkit-min-device-pixel-ratio: 2) {
              background-image:url('~images/img_bottom_WeChat@2x.png');
            }
            @media (-webkit-min-device-pixel-ratio: 3) {
              background-image:url('~images/img_bottom_WeChat@3x.png');
            }
    .copy_rights
      padding: 0.853333rem 0
      text-align: center
    
</style>
