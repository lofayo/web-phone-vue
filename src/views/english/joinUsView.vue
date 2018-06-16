<template>
  <div class="content">
    <div class="banner">
      <p>Join us
      </p>
      <p class="blue_line"></p>
      <p style="letter-spacing: 0.08rem">
        In POSPi, we are always lacking a person. Maybe it's a fun mind, a pair of hands that can write great articles, or a pair of eyes that are good at finding great things. Please take a look at the following vacancies!
      </p>
    </div>
    <section class="text">
      <p class="text_title">Join us</p>
      <p class="gray_line"></p>
      <ul class="job_lists">
        <jobComponent v-for='(job,index) of jobs' :job='job' :key='index' />
      </ul>
    </section>
  </div>
</template>
<script>
  
  import jobComponent from '@/components/jobComponent'

  export default {
    data() {
      return {
        jobs: [
          {
            name: '技术支持服务专员',
            shortAsk: '2年以上/全职/本科',
            responsibilities: [" 1、客户现场产品测试、安装、维护、故障排除、使用培训等", "            2、查找、诊断、排除故障，找出每个故障的最终也是最好的解决方案", "            3、维护客户关系，并对客户满意度进行回馈", "            4、客户资料的整理、汇总，并上报", "            5、配合销售完成客户需求受理、整理、撰写推荐解决方案", "            6、负责发货设备、软件配置清单的制作", "            7、接收和协助解决客户遇到的各类现场技术问题，及时准确的把现场信息反馈给销售和研发部门", "            8、完成技术支持部制定的客户巡检计划并及时 交巡检告"],
            requirements: [" 1、 本科或以上学历，优秀应届毕业生优先", "            2、 敢于承担压力、承担责任，乐于接受新任务、新挑战，并保持 对新知识新技能获取的持续热情", "            3、 熟悉计算机软硬件操作，熟悉常用数据库软件操作，周边外设 安装调试及网络组建", "            4、具有较强的客户服务意识,能够处理客户咨询和投诉, 有较强的协调能力"]
          },
          {
            name: '项目助理',
            shortAsk: '2年以上/全职/本科',
            responsibilities: [" 1、从客户视角出发，善于沟通和了解以及拆分客户需求", "2、负责和客户沟通项目中的需求细节，协调各方资源，协助项目经理完成项目顺利交接", "3、及时将客户对产品的意见和建议反馈给相关部门，优化产品", "4、负责完成项目的总结，归档，内部资料的整理和归纳", "5、与客户建立和保持良好的业务关系，收集客户反馈，促进项目的合作和推进", "6、负责发货设备、软件配置清单的制作"]
            ,
            requirements: [" 1、工科背景，本科及本科以上学历", "2、具有良好的语言表达能力和沟通协调能力", "3、有较强的学习能力，逻辑思维能力，能够愉快的和程序员玩耍和沟通", "4、工作态度认真仔细，自觉性强，有明确的工作目标，有能力及时解决工作中的突发情况", "5、英语6级或有海外留学背景者优先。"]
          },
          {
            name: 'PHP 后端工程师',
            shortAsk: '2年以上/全职/本科',
            responsibilities:  [" 1、负责网页后端开发工作，与前端工程师配合，确保项目进度和质量相关要求", "2、根据软件的功能、性能需求，设计、开发相应的软件模块", "3、负责网站性能的优化，维护当前软件版本", "4、负责相关开发技术文档的编写、技术备案", "5、完成iOS/Android客户端接口开发"]
            ,
            requirements: ["1、计算机及相关专业毕业 ，有1-2年相关工作经验", "2、拥有良好的代码习惯，要求结构清晰，命名规范，逻辑性强，代码冗余率低", "3、熟悉php开发、部署环境搭建者优先，能熟练搭建框架者优先", "4、精通MySQL或SQLServer或Oracle数据库的设计与开发", "5、责任心强，具有良好的沟通、协作能力和团队合作意识"]
          },
          {
            name: '售后实施工程师',
            shortAsk: '2年以上/全职/本科',
            responsibilities:  ["1、负责公司解决方案的实施上线、客户培训、日常技术支持和售后维护", "2、站在客户的角度为客户解决问题，有较强的客户服务意识", "3、负责公司软件和硬件的安装部署，协助项目高质量的上线交付", "4、记录和汇总问题，分析问题原因和总结改进方案，及时反馈给项目组", "5、与客户建立和保持良好的关系，收集客户反馈"]
            ,
            requirements:  ["1、工科背景，本科及本科以上学历", "2、掌握网络环境基础知识，熟悉iOS系统", "3、具有良好的语言表达能力和沟通协调能力", "4、有较强的学习能力，逻辑思维能力，能够愉快的和程序员玩耍和沟通", "5、工作态度认真仔细，自觉性强，有明确的工作目标，有能力及时解决工作中的突发情况"]
          },
        ]
      }
    },
    created:function() {
    },
    components: {
      jobComponent
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' scoped>

  @import '../../../static/css/mixin.styl'
  .content
    text-align: center
    .banner
      bg_dpr_jpg('~images/img_aboutus_banner3')
      justify-content: center
      &>p
        margin-bottom: 0.533333rem
    .text
      padding: 1.6rem 0
      text-align: center
      color: #333333
      &>p
        margin-bottom: 0.533333rem
      &>p:nth-child(1)
        font-size: 0.533333rem
        line-height: 0.746667rem
        font-weight: bold
      .job_lists
        text-align: left
            
</style>