// index.js
Page({
	data:{
		imgUrls: [
			'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/index/1.jpg',
			'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/index/2.jpg',
			'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/index/3.jpg'
		  ],
		indicatorDots:true, //是否显示面板指示点
	    autoplay: true,   //是否自动切换
		interval: 3000,   //自动切换时间间隔
		duration: 1000,   //滑动动画时长

		all_imageUrl:"",

		/* 案例列表*/
		imag1:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/index/case/img1.jpg",
		imag2:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/index/case/img2.jpg",
		imag3:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/index/case/img3.jpg",
		imag4:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/index/case/img4.jpg",
		imag5:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/index/case/img5.jpg",
		imag6:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/index/case/img6.jpg",
		imag7:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/index/case/img7.jpg",
	},
	 
	
	/*图文标签点击事件 */
	photo:function(){
		wx.navigateTo({
			url: '/pages/wedding_photo/index'
		  })
	},
	planner:function(){
		wx.navigateTo({
			url: '/pages/wedding_planner/index'
		  })
	},
	all_age_photo:function(){
		wx.navigateTo({
			url: '/pages/All_age_photography/index'
		  })
	},

	/* 案例图片点击事件*/
    imag1:function(){
		wx.navigateTo({
			url: '/pages/wedding_photo/index'
		  })
	},
	imag2:function(){
		wx.navigateTo({
			url: '/pages/wedding_planner/index',
		  })
	},
	imag3:function(){
		wx.navigateTo({
			url: '/pages/family_photo/index'
		  })
	},
	imag4:function(){
		wx.navigateTo({
			url: '/pages/photo_pregnant/index'
		  })
	},
	imag5:function(){
		wx.navigateTo({
			url: '/pages/chinld_photoraphy/index'
		  })
	},
	imag6:function(){
		wx.navigateTo({
			url: '/pages/couple_shooting/index'
		  })
	},
	imag7:function(){
		wx.navigateTo({
			url: '/pages/photo_shoot/index'
		  })
	},

    call:function(){
		wx.makePhoneCall({
		  phoneNumber: '13181388445',
		})
	},

	//用户点击右上角分享给好友，要现在分享到好友这个设置menu的两个参数，才可以实现分享到朋友圈
	onShareAppMessage:function(){
		wx.showShareMenu({
		  withShareTicket:true,
		  menu:['shareAppMessage','shareTimeline']
		})
	 
		return {
		  title:'德州格格吉祥婚纱婚庆',
		 
		  imageUrl:''
		}
	  },
	  //用户点击右上角分享朋友圈
	  onShareTimeline:function(){
		return {
		  title:'德州格格吉祥婚纱婚庆',
		  query:{
			key:value
		  },
		  imageUrl:'分享时图片底图'
		}
	  },
})
