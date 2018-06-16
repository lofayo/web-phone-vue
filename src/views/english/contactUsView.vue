<template>
  <div class="content">
    <div class="info">
      <p class="title">Contact Us</p>
      <p class="describle">If you need to know more about any information, 
you can contact us in any of the following ways.</p>
      <ul>
        <li class="info_item">
          <p class="item_title">Email:</p>
          <p class="item_answer">info@pospi.com</p>
        </li>
        <li class="info_item">
          <p class="item_title">The specific project cooperation, please send email:</p>
          <p class="item_answer">partner@pospi.com</p>
        </li>
        <li class="info_item">
          <p class="item_title">Global Headquarters :</p>
          <p class="item_answer">Unit 1104, Zhaofeng Plaza No.1027 Changning Road, Shanghai</p>
        </li>
        <li class="info_item">
          <p class="item_title">Phone Number :</p>
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
  
  @import '../../../static/css/mixin.styl'

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
