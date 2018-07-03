<template>
  <div class="hardware_item">
    <div class="item_img"></div>
    <p class="title_box">
      <span class="logo_img"></span>
      <span class="item_title">{{hardware.title}}</span>
    </p>
    <p class="des_title">{{hardware.desTitle}}</p>
    <ul class="des_lists">
      <li v-for='(list,index) of hardware.desLists' :key='index'>{{list}}</li>
    </ul>
<!--     <a v-if='isEn' :href="hardware.moreUrl"><p class="more test_more">Learn More</p></a>
    <a v-else :href="hardware.moreUrl"><p class="more test_more">了解更多</p></a> -->
    <router-link :to='/previewPdf/+hardware.moreUrl'><p class="more test_more">{{ isEn === true ? 'Learn More' : '了解更多'}}</p></router-link>
  </div>
</template>
<script>
  export default {
    props: ['hardware','index'],
    computed: {
      isEn() {
        return this.$store.state.isEn
      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>

  @import '../../static/css/mixin.styl'
  
  .hardware_item
    padding: 1.6rem 0.533333rem
    .item_img
      width: 6.746667rem
      height: 5.44rem
      margin: 0 auto 1.6rem
    .title_box
      display: flex
      align-items: center
      margin-bottom: 0.266667rem
      .item_title
        font-size: 0.746667rem
        line-height: 1.066667rem
        color: #111111
        font-weight: bold
      .logo_img
        display:inline-block
        width: 2.133333rem
        height: 1.066667rem
        margin-right: 0.266667rem
    .des_title
      font-size: 0.533333rem
      line-height: 0.746667rem
      color: #4286F3
      font-weight: bold 
      margin-bottom: 0.533333rem
    .des_lists
      font-size: 0.373333rem
      line-height: 0.533333rem
      color: #333333
      margin-bottom: 1.333333rem
</style>
