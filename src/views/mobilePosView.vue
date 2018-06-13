<template>
  <div class="hardware_box">
    <hardwareComponent v-for='(hardware, index) of hardwareData' :key='index' :hardware='hardware' :index='index' />
  </div>
</template>
<script>

  import hardwareComponent from '@/components/hardwareComponent'

  export default {
    data() {
      return {
        hardwareData: [
          {
            title: 'iSMP3',
            desTitle: '将 iPhone 6 无缝转换成安全的MPOS',
            desLists: ["1.功能强大的便携式终端，全面支持各种支付方式", "2.应用最新科技，正是您所寻找的安全高效的移动支付设备", "3.持久的电池寿命和坚固的设计，它适用于要求最苛刻的零售环境"],
            moreUrl: ''
          },
          {
            title: 'ASR-020D',
            desTitle: 'Muti-type 外套式条码读取器',
            desLists: ["1.采用主体扫描设备与外壳分离式设计", "2.适配 iPhone 6、iPhone 6 Plus、iPod touch 等各种型号", "3.可读取各种类的一维条形码、二维条形码以及各国邮政编码"],
            moreUrl: ''
          },
          {
            title: 'Captuvo SL42',
            desTitle: '企业级 iPhone 6 和 6 Plus 专用扫描附件',
            desLists: ["1.内置简单易用的影像扫描头，拥有强劲的一维和二维条码扫描性能", "2.保障交易安全，最大化客户使用时间和加速业务敏捷度", "3.配有 Adaptus™ 影像技术、可加密的磁条阅读器和防护外壳"],
            moreUrl: ''
          },
          {
            title: 'e355M',
            desTitle: '一体化移动智能迷你 POS',
            desLists: ["1.与 iPod Touch、iPhone 5s、iPhone SE 等智能手机完美搭配 ", "2.灵活的移动支付模块，稳定和安全的支付平台 ", "3.丰富的通信选择，支持所有主要支付手段"],
            moreUrl: ''
          },
          {
            title: 'e355U',
            desTitle: '灵活整合，无限可能',
            desLists: ["1.具备绝对通用性，既可独立模式运行，也可搭配智能设备 ", "2.支持所有主要支付手段（NFC、EMV、磁条卡、扫码、Apple Pay） ", "3.符合人体工学的设计便于单手操作"],
            moreUrl: ''
          }
        ]
      }
    },
    components: {
      hardwareComponent
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus'>
  @import '../../static/css/mixin.styl'
  
  .hardware_box
    &>div:nth-child(2n)
      background: #F9F9F9
    &>div:nth-child(1)
      .item_img
        bg_dpr_contain('~images/img_MobilePOS_ISMP3')
      .logo_img
        bg_dpr('~images/img_MobilePOS_ingenico')
    &>div:nth-child(2)
      .item_img
        bg_dpr_contain('~images/img_MobilePOS_020D')
      .logo_img
        bg_dpr('~images/img_MobilePOS_AsReoder')
    &>div:nth-child(3)
      .item_img
        bg_dpr_contain('~images/img_MobilePOS_SL42')
      .logo_img
        // background: url('~images/img_Printer_EPSON.png') no-repeat center / 100% 100%
        bg_dpr('~images/img_MobilePOS_Honeywell')
    &>div:nth-child(4)
      .item_img
        bg_dpr_contain('~images/img_MobilePOS_e355M')
      .logo_img
        bg_dpr('~images/img_MobilePOS_verufone')
    &>div:nth-child(5)
      .item_img
        bg_dpr_contain('~images/img_MobilePOS_e55u')
      .logo_img
        bg_dpr('~images/img_MobilePOS_verufone')

</style>
