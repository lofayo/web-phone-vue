<template>
  <div class="content">
    <div class="info">
      <p class="title">联系我们</p>
      <p class="describle">如您需要进一步了解任何信息，可以通过以下任何方式联系到我们!</p>
      <ul>
        <li class="info_item">
          <p class="item_title">邮箱:</p>
          <p class="item_answer">info@pospi.com</p>
        </li>
        <li class="info_item">
          <p class="item_title">具体项目合作事宜，可以发邮件至:</p>
          <p class="item_answer">partner@pospi.com</p>
        </li>
        <li class="info_item">
          <p class="item_title">总部办公室 :</p>
          <p class="item_answer">上海市长宁路 1027 号兆丰广场 1104 室</p>
        </li>
        <li class="info_item">
          <p class="item_title">联系电话 :</p>
          <p class="item_answer">+86 21 52378999</p>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
  export default {

  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  
  @import '../../static/css/mixin.styl'

  .content
    padding: 0.853333rem
    bg_dpr('~images/img_ContactUs_add')
    background-position: center top;
    background-size: 100%;
    .info
      font-size: 0.373333rem
      line-height: 0.533333rem
      .title
        font-size: 0.96rem
        line-height: 1.546667rem
        font-weight: bold
      .describle
        color: #B3B3B3
        margin-bottom: 1.6rem
      .info_item
        margin-bottom: 1.066667rem
        font-weight: bold
        .item_title
          color: #4286F3
          font-size: 0.48rem
          line-height: 0.666667rem
          margin-bottom: 0.16rem
        .item_answer
          color: #333333
</style>
