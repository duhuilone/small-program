// pages/wedding_photo/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        img1:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/wedding_photo/jinqikepianshangxi.jpg",
        img1_title:"【近期客片赏析】",
        img2:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/wedding_photo/dali.jpg",
        img2_title:"【旅拍客片-大理站】",
        img3:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/wedding_photo/lijiang.jpg",
        img3_title:"【旅拍客片-丽江站】",
        img4:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/wedding_photo/qingdao1.jpg",
        img4_title:"【旅拍客片-青岛1站】",
    },

    //页面点击事件
    img1:function(){
        wx.navigateTo({
          url: '../sample1/index',
        })
    },
    img2:function(){
        wx.navigateTo({
          url: '../dali/index',
        })
    },
    img3:function(){
        wx.navigateTo({
          url: '../lijiang/index',
        })
    },
    img4:function(){
        wx.navigateTo({
          url: '../qingdao1/index',
        })
    },


    call:function(){
      wx.makePhoneCall({
        phoneNumber: '13181388445',
      })
    }
})