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

7、**问题四：做项目的几点注意事项** 

	（1）做Vue项目，所有动态交互都基于`样式类的真假切换`，此种交互是动态绑定

	（2）相同的、复用的功能就封装为组件component，这里的组件可以是纯静态组件，也可以只是个组件模板，放在视图页面引入，用请求数据渲染；**而且后续这种组件思想很重要，写的时候想清楚，哪些是共同，需要写入组件，并且每个组件可以维护各自的数据状态**

	（3）每个路由页面，都需要单独写页面，并配置路由，以及安排在哪里渲染；这里的路由跳转，可以实现一些跳转动画，以及页面过渡效果


8、路由上绑定事件就得写原生的

	<router-link @click.native='closeMenu' to='/home'><span class="logo"></span></router-link>
		  
9、PDF文件的引入路径终于还是出问题了


10、匹配其它任何路由，用星号表示

	{
		path: '*',
		redirect: '/home'
	}

11、没事可以尝试封装插件的方法

	import PDF from './PDF'

	var $vm
	export default {
	  install (Vue, options) {
		if (!$vm) {
		  const PDFPlugin = Vue.extend(PDF)
		  $vm = new PDFPlugin().$mount()
		  document.body.appendChild($vm.$el)
		}
		Vue.prototype.$showPDF = function (url) {
		  $vm.showPDF(url)
		}
	  }
	}
	
	
	
	// 这个东西有点坑啊，全局引用，就整个项目引用了，还得在样式里控制一开始不显示，难道不能单文件引入吗？
	// 最终上下实现方案：没有把你作为插件使用，而是直接用pdf.vue作为一个路由的内容
	// import pdf from '@/plugins/pdf'
	// Vue.use(pdf)

12、vuex控制着整个项目的状态值，太有用了

	理解用法：
		1、安装vuex
		2、定义好store
		3、main.js中全局注册到整个vue实例项目上
		4、在单独组件里的computed中引入全局状态值this.$store.state.count，以及methods中定义方法改变this.$store.state.count
		
	为了使用switch开关按钮，单独写个组件，还是不太划算，最好还是封装一个自己的UI库，先写好，再直接代码里引入class最高效
		  
13、笔记一下，今天解决的几个问题

	（1）vue项目打包后放在服务器运行
		直接放在服务器根目录运行，一点问题都没有，因为webpack打包设置中，默认就是以服务器根目录为项目根目录引入相关js与css
		比如，打包后，index.html文件引入的一些打包后的.css与.js
	
	（2）项目中导入的背景图片路径需要重新配置
		打包后，项目里使用背景图片地方，路径都不对了，至于为什么这样配置，不太明白，所以可以好好研究下webpack打包机制
		
	（3）巨坑之组件里<style scoped>，它有一些特性
	
		（1）加了scoped属性的组件，可以维护当前组件样式不受其它组件影响

		（2）加了scoped属性的父级组件，不能修改子组件元素样式（无路子组件加没属性scoped，因为scoped只能维护当前组件元素）

		（3）不加scoped属性的父级组件，可以修改子组件样式

		（4）加了scoped属性的父级组件，也可以强行控制加了scoped属性的子组件，方法是：.a >>> .b或者css预处理中的 .a /deep/

			虽然上述三条都是对的，但是不合理之处就在第三条解释不了的情形

			问题：三个内容不同的父级组件（没加scoped属性），都应用了相同的子组件模板，并用父级内容填充子组件模板。

			可是，三个不同父级组件都给子组件同一元素设置不同样式，首次在三个父级组件切换，样式正常；但是第二轮再切换，就不正常了，同一元素样式不随切换改变，而是用的第一轮切换最后样式，无论后面切换了多少轮，都不再变.


			因为上面这个奇葩问题，最终也就是选择了（4）条解决的
			
			所以碰到一些无法解释的问题，你没有错，程序也没有错（可能是别人顾及到其它什么，故意这样设计），错的是你的孤陋寡闻、少见多怪，
			所以多看看文件，多理解理解，别在那钻死胡同，找不到解决办法就看官方文档，别在那浪费时间，学会快速查文档解决问题也是中能力
	
	（4）利用css的transition以及tranform可以写出一些好玩的页面样式，以及更好的用户体验
	
14、vue项目动态属性的绑定语法

	<router-link :to="'/detail/'+index1+'/'+index2">
	
	<a :name="'#'+index">{{good.name}}</a>
	
	
15、给事件处理程序传递除了事件对象之外的参数？

	<span onclick='click(event,10)'></span>
	
	如何实现这种传递多个参数情形？

16、vuex中mutation传值的问题

	//传入一个对象
	this.$store.commit('addGoodsToCar',{price,name})
	
	//直接传入多个变量
	this.$store.commit('addGoodsToCar',price,name)

	这两种区别在于store.js中的mutation接收值的问题，如果直接传入多个变量，会出现mutation中根本接收不到值