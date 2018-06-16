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
            desTitle: 'Universal Multi-Function Thermal Bill Printer',
            desLists: ["1.High-speed thermal printing in 150mm per second,…y vertical and horizontal print error rate is low", "2.At least 60 million lines without failure", "3.Standard high performance automatic cutting head"],
            moreUrl: 'pdf/TSP654II中文.pdf'
          },
          {
            title: 'TSP 100III',
            desTitle: 'Wired and Wireless Thermal Bill Printers',
            desLists: ["Print speeds up to 125mm – 250mm per second (Depending on model)", "USB, Ethernet, Wireless Wi-Fi, Bluetooth connectivity available ", "Automatic cutting (High quality cutting head)"],
            moreUrl: 'pdf/TSP100III英文.pdf'
          },
          {
            title: 'M30',
            desTitle: 'Smart Connect Thermal Bill Printer',
            desLists: ["1.Easy to operate, Stylish, Compact", "2.Real-time prompt visual LED indicator, power su…, paper out reminder, printer status at a glance ", "3.Built-in USB, Ethernet port and wireless module"],
            moreUrl: 'pdf/TM-m30彩页.pdf'
          },
          {
            title: 'SM-L200',
            desTitle: 'Convenient 58mm Low Energy Bluetooth Portable Printer',
            desLists: ["1.Designed for the mobile POS market, it is simple…does not require traditional matching and docking", " 2.Applicable to scenes that need to share a Wi-Fi printer ", "3.Put-in type convenient paper loading mode and up to 13 hours of lasting battery life"],
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
  @import '../../../static/css/mixin.styl'
  
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
