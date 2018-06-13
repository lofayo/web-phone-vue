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
	
	//妈妈地，这个地方也是个坑，scoped看似非常好，防止其他样式污染当前组件样式，但是却有个问题：
	//如果当前组件<template></template>没写的标签（比如通过组件导入方式产生的html），你给他添加样式是没用的
	//因为样式被scoped给阻止了，只能保证当前有的HTML才能添加样式，保护过了头
	//所以用法：如果是纯给当前组件的html添加样式，设置scoped保护，当然很好；如果是想给引入的组件元素添加样式，那就被保护了，设置不了，需要去掉
	//任何一个东西，不可能平白无故的存在，它总会有着自己的用处，现在没用只是时候没到
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
				
6、如果可以尽量把程序写简单咯，不要给自己找麻烦

	比如：最好把函数绑定在该绑定的元素上
	
		（只是部分代码，但能够说明元素绑定事件的关系）
		//1、第一个事件绑定在了父级元素
	 <li class="job_item" @click='showJobDetails'>
		//3、第一个事件应该绑定在黄色代码之上，这样就成功避免子元素的事件冒泡到父元素
		<div class="job_text">
		  <span>{{job.name}}</span>
		  <span>{{job.shortAsk}}</span>
		</div>
		<div class="right_arrow"></div>
		<div v-if='isShowJobDetails' class="job_details">
		  <div style="text-align: right;">
			//2、第二个事件绑定在子元素上，但是触发后会冒泡到父级事件上（但是可以通过阻止事件冒泡解决）
			<span @click.stop='closeJobDatails' class="job_close"></span>
		  </div>				
		

