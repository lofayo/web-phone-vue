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
	
	

4、封装组件需要考虑的问题：

	（1）组件就是个函数，根据传入不同的值，利用相同的结构，渲染不同的结果
	（2）需要考虑到组件哪些可变，哪些不可变
		 HTML结构不变，传入的数据会变；
		 传入的数据到底引起结构中的，一处可变，还是多处可变
		 到底传入一个可变数据，还是多个可变数据；
	
	（3）组件最大的好处：即使相同的数据源，但却可以维护各自的状态，互不影响
	
	
5、stylus文件的引入是个坑
	
	不过好在引入的语法大体差不多：
		js: import '***.js'
			import headerComponent from 'headerComponent'

		css: @import '***.css'
		
	分情况来看：
		（1）共同样式：common.styl
		
			//common.styl
			.border_bottom1px
				border-bottom: 0.026667rem solid #ECECEC
		
			引入方法：全局引用（main.js引入）
			//main.js
			import 'common.styl'
		
		（2）mixin函数样式：mixin.styl
			
			//mixin.styl
			border_bottom1px
				border-bottom: 0.026667rem solid #ECECEC
			
			引入方法：每个视图文件的样式里单独引入
			//headerComponent.vue
			
			<style lang='stylus'>
				@import 'mixin.styl'
			
	

