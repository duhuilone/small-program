// pages/wedding_planner/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: { 
        img1:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/wedding_planner/img1.jpg",
        img1_title:"【撞色系列-酒店】",
        img1_text1:"时光静好与君语",
        img1_text2:"细水流年与君同",
        img1_text3:"繁华落尽与君老",

        img2:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/wedding_planner/img2.jpg",
        img2_title:"新中式系列-酒店",
        img2_text:"念兹在兹  一日不忘  第一眼是你终生是你",

        img3:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/wedding_planner/img3.jpg",
        img3_title:"红色经典系列-酒店",
        img3_text:"烟笼寒水 月上梢头 与你轻弹琴瑟和鸣"
    },

    //页面点击事件

    china:function(){
        wx.navigateTo({
            url: '/pages/china_img/index',
          })
    },
   
    english:function(){
        wx.navigateTo({
            url: '/pages/english_img1/index',
          })
    },

    more:function(){
        wx.navigateTo({
            url: '',
          })
    },

    img1:function(){
        wx.navigateTo({
          url: '/pages/china001/index',
        })
    },

     img2:function(){
        wx.navigateTo({
          url: '/pages/china002/index',
        })
    },

     img3:function(){
        wx.navigateTo({
          url: '/pages/china003/index',
        })
    },

    call:function(){
      wx.makePhoneCall({
        phoneNumber: '13181388445',
      })
    }
})