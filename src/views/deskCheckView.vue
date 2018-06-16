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
            title: 'mPOP',
            desTitle: '简约实用的智能钱箱打印一体机',
            desLists: ["1.适用于所有主流移动操作系统，小巧时尚、功能强劲", "2.紧凑型移动 POS 设计，可在仸意位置摆放", "3.每秒 100 毫米打印，蓝牙联机，一条电源线便能展开全面的运作", "4.四个直立式钞票间隔及灵活的六或八个硬币槽"],
            moreUrl: 'pdf/英文mPOP.pdf'
          },
          {
            title: 'E500',
            desTitle: '先进时尚的一体化智能终端',
            desLists: ["1.基于 Android 系统，高度集成各种功能模块 ", "2.支持全渠道支付，配备自裁切打印机 ", "3..大容量电池提供超长续航 ", "4..立即拥有最新科技，以获得更高的客流量及更好的商业管理"],
            moreUrl: 'pdf/E500中文%20.pdf'
          },
          {
            title: 'D800',
            desTitle: '新一代台式智能终端',
            desLists: ["1.采用平板风格设计，优雅时尚 ", "2.7寸彩色电容触摸屏及多媒体功能，给您带来完美的自助体验和互动 ", "3.特别适用于金融自助、商品零售管理等应用 ", "4.满足银行卡刷卡消费，自助缴费等电子支付功能", " 5.同时可具备商品进销存管理、目录销售、广告发布等功能"],
            moreUrl: 'pdf/中文%20%20PAX%20D800.pdf'
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
<style lang='stylus' scoped>
  @import '../../static/css/mixin.styl'
  
  .hardware_box /deep/
    &>div:nth-child(2n)
      background: #F9F9F9
    &>div:nth-child(1)
      .item_img
        bg_dpr_contain('~images/img_Desktop_MPOP')
      .logo_img
        bg_dpr('~images/img_Desktop_STAR')
    &>div:nth-child(2)
      .item_img
        bg_dpr_contain('~images/img_Desktop_E500')
      .logo_img
        bg_dpr('~images/img_Desktop_PAX')
    &>div:nth-child(3)
      .item_img
        bg_dpr_contain('~images/img_Desktop_D800')
      .logo_img
        // background: url('~images/img_Printer_EPSON.png') no-repeat center / 100% 100%
        bg_dpr('~images/img_Desktop_PAX')
    

</style>
