<template>
  <li class="job_item" @click='showJobDetails'>
    <div class="job_text">
      <span>{{job.name}}</span>
      <span>{{job.shortAsk}}</span>
    </div>
    <div class="right_arrow"></div>
    <div v-if='isShowJobDetails' class="job_details">
      <div style="text-align: right;">
        <span @click.stop='closeJobDatails' class="job_close"></span>
      </div>
      <div class="job_header">
        <p class="job_logo"></p>
        <p>{{job.name}}</p>
      </div>
      <div class="job_des">
        <div class="des_item">
          <p class="des_title">岗位职责</p>
          <ul class="des_text responsibilities">
            <li v-for='item of job.responsibilities'>{{item}}</li>
          </ul>
        </div>
        <div class="des_item">
          <p class="des_title">任职要求</p>
          <ul class="des_text requirements">
            <li v-for='item of job.requirements'>{{item}}</li>
          </ul>
        </div>
      </div>
      <a href="mailto:nina@pospi.com" ><div class="apply_job more">投递简历</div></a>
    </div>
  </li>
</template>
<script>
  export default {
    props: ['job'],
    data() {
      return {
        isShowJobDetails: false
      }
    },
    methods: {
      showJobDetails: function() {
        this.isShowJobDetails = true
      },
      closeJobDatails: function() {
        this.isShowJobDetails = false
      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>

  @import '../../static/css/mixin.styl'
  .job_item
    margin: auto
    width: 8.933333rem
    height: 3.12rem
    padding: 0.853333rem
    box-sizing: border-box
    background: #F6F6F6
    border-radius: 0.213333rem
    display: flex
    justify-content: space-between
    margin-bottom: 0.533333rem
    .job_text
      display: flex
      flex-direction: column
      justify-content: space-between
      &>span:first-child
        font-size: 0.48rem
        line-height: 0.666667rem
        font-weight: bold
        color: #333333
      &>span:last-child
        font-size: 0.373333rem
        line-height: 0.533333rem
        color: #B3B3B3
    .right_arrow
      align-self: center
      width: 0.213333rem
      height: 0.586667rem
      bg_dpr('~images/img_aboutus_Getinto')
    .job_details
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      overflow: auto
      padding: 0.853333rem 0.533333rem
      box-sizing: border-box
      bg_dpr('~images/img_recruit_bg')
      background-color: #fff
      background-position: left bottom
      background-size: 100%
      z-index: 4
      .job_close
        display: inline-block
        width: 0.693333rem
        height: 0.693333rem
        bg_dpr('~images/icon_navigation_close')
      .job_header
        margin: 1.066667rem 0
        font-size: 0.64rem
        line-height: 0.88rem
        color: #333333
        font-weight: bold
        .job_logo
          width: 1.68rem
          height: 0.506667rem
          bg_dpr('~images/img_aboutus_img2')
      .des_title
        font-size: 0.48rem
        line-height: 0.666667rem
        font-weight: bold
        margin: 1.066667rem 0 0.533333rem
      .des_text
        font-size: 0.373333rem
        color: #333
        line-height: 0.8rem
      .apply_job
        margin: 1.066667rem 0
  &>li:last-child
    margin-bottom: 0

            
</style>