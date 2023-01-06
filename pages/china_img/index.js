// pages/china_img/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        img1:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/china/001.jpg",
        img1_title:"【中式图片编号-001】",
        img1_text1:"时光静好与君语",
        img1_text2:"细水流年与君同",
        img2_text3:"繁华落尽与君老",

        img2:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/china/002.jpg",
        img2_title:"【中式图片编号-002】",
        img2_text:"念兹在兹 一日不忘 第一眼是你终生是你",

        img3:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/china/003.jpg",
        img3_title:"【中式图片编号-003】",
        img3_text1:"烟笼寒水 月上梢头",
        img3_text2:"与你轻弹 琴瑟和鸣",
    },
  
    //页面点击事件
    img1:function(){
        wx.navigateTo({
            url: '../china001/index',
          })
    },

    img2:function(){
        wx.navigateTo({
            url: '../china002/index',
          })
    },

    img3:function(){
        wx.navigateTo({
            url: '../china003/index',
          })
    },

     call:function(){
      wx.makePhoneCall({
        phoneNumber: '13181388445',
      })
    }
})