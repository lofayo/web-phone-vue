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
            title: 'TSP 654II',
            desTitle: '通用多功能热敏票据打印机',
            desLists: ["1.每秒150mm高速热敏打印，203 dpi 高分辨率、高密度垂直及水平打印", "2.出错率低，至少六千万行无故障", "3.标配高性能自动裁切头"],
            moreUrl: 'pdf/TSP654II中文.pdf'
          },
          {
            title: 'TSP 100III',
            desTitle: '有线+无线热敏票据打印机',
            desLists: ["1.打印速度达每秒125mm – 250mm(依据型号) ", "2.提供 USB，以太网，无线 Wi-Fi，蓝牙连接版本 ", "3.自动裁切(高品质裁切头)"],
            moreUrl: 'pdf/TSP100III英文.pdf'
          },
          {
            title: 'M30',
            desTitle: '智能连接热敏票据打印机',
            desLists: ["1.操作便捷，时尚精巧，简约小巧，随心所置", "2.可视化 LED 显示灯，电源、报错、缺纸实时提示，打印机状态一目了然 ", "3.内置 USB，以太网口以及无线模块"],
            moreUrl: 'pdf/TM-m30彩页.pdf'
          },
          {
            title: 'SM-L200',
            desTitle: '精细型58毫米低功耗蓝牙便携打印机',
            desLists: ["1.专为移动 POS 市场设计，使用简单，无需传统匹配对接 ", "2.适用于需共享 Wi-Fi 打印机的场景 ", "3.“放入-打印”式的便捷打印纸装载模式和长达13小时的持久续航"],
            moreUrl: 'pdf/英文%20STAR%20SM%20-%20L200.pdf'
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
        bg_dpr_contain('~images/img_Printer_TSP654II')
      .logo_img
        bg_dpr('~images/img_Desktop_STAR')
    &>div:nth-child(2)
      .item_img
        bg_dpr_contain('~images/img_Printer_TSP100III')
      .logo_img
        bg_dpr('~images/img_Desktop_STAR')
    &>div:nth-child(3)
      .item_img
        bg_dpr_contain('~images/img_Printer_M30')
      .logo_img
        background: url('~images/img_Printer_EPSON.png') no-repeat center / 100% 100%
        // bg_dpr('~images/img_Printer_EPSON')
    &>div:nth-child(4)
      .item_img
        bg_dpr_contain('~images/img_Printer_SML200')
      .logo_img
        bg_dpr('~images/img_Desktop_STAR')
</style>
