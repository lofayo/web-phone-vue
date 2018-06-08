1、webpack配置之缩减引入文件的相对路径

	用一个别名来申明某个文件夹的绝对路径，以后直接使用别名，而不需要相对路径层层迭代的查找
	
	webpack.base.conf.js
	
	  resolve: {
		extensions: ['.js', '.vue', '.json','.png'],
		alias: {
		  'vue$': 'vue/dist/vue.esm.js',
		  '@': resolve('src'),
		  'images': resolve('static/images')
		}
	  },
	  
	  
	但是引入图片要加个东东
	
	<img src="~images/img_bottom_facebook.png">
	
	background: url('~images/img_bottom_facebook.png') no-repeat center / 100% 100%
	

2、stylus用法

	<style lang="stylus" scoped>
		.target_item
			display:inline-block
			width: 1.28rem
			height: 1.28rem
			//引用父级元素，还是要后退一步
			&:nth-child(1)
			  background: url('~images/img_bottom_facebook.png') no-repeat center / 100% 100%
			  @media (-webkit-min-device-pixel-ratio: 2) {
				background-image:url('~images/img_bottom_facebook@2x.png');
			  }
			  @media (-webkit-min-device-pixel-ratio: 3) {
				background-image:url('~images/img_bottom_facebook@3x.png');
			  }
			  
			  
			  
3、config/index.js

	配置ip
	
	//为什么localhost手机就不能访问，'0.0.0.0'有代表什么意思？
	    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined