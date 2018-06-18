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
            desTitle: 'Convert iPhone 6 seamlessly to secure MPOS',
            desLists: ["1.Powerful portable terminal fully supports various payment methods", "2.Applying the new technology, for a safe and efficient mobile payment device", "3.Long-lasting battery life and rugged design for the most demanding retail environment"],
            moreUrl: '../pdf2/ismp3%20中文.pdf'
          },
          {
            title: 'ASR-020D',
            desTitle: 'Muti-Type Shell Barcode Reader',
            desLists: ["1.Separated design using the main scanning device and shell", "2.Adapts to iPhone 6, iPhone 6 Plus, iPod touch and other models", "3.Read all kinds of One-Dimensional barcodes, Two-Dimensional barcodes, and postal codes"],
            moreUrl: '../pdf/ASR-020D.pdf'
          },
          {
            title: 'Captuvo SL42',
            desTitle: 'iPhone 6 and 6 Plus Enterprise-Class Scan Attachments',
            desLists: ["1.Built-in image scanning head with powerful 1D and 2D barcode scanning capabilities", "2.Secure transaction security, maximize customer usage time and accelerate business sensitivity", "3.With Adaptus TM Imaging Technology, Encrypted Magnetic Stripe Reader and Protective Case"],
            moreUrl: '../pdf/产品彩页-Honeywell.pdf'
          },
          {
            title: 'e355M',
            desTitle: 'Integrated Mobile Smart Mini POS',
            desLists: ["1.Adapted to smart phones such as iPod Touch, iPhone 5s, iPhone SE", "2.Flexible mobile payment module, stable and secure payment platform ", "3.Diverse communication options, supporting all major payment methods"],
            moreUrl: '../pdf/e355M_CN.pdf'
          },
          {
            title: 'e355U',
            desTitle: 'Flexible integration, unlimited possibilities',
            desLists: ["1.Absolute versatility, running in stand-alone mode, or with smart devices ", "2.Supports all major payment methods (NFC, EMV, magnetic stripe card, scan code, Apple Pay)", "3.Ergonomic design for easy one-handed operation"],
            moreUrl: '../pdf/英文%20e355（U）.pdf'
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
