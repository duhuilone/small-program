// pages/All_age_photography/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        img1:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/all_photo/img1.jpg",
        img1_title:"【儿童摄影客片】",

        img2:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/all_photo/img2.jpg",
        img2_title:"【写真形象客片】",

        img3:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/all_photo/img3.jpg",
        img3_title:"【孕妈摄影客片】",

        img4:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/all_photo/img5.png",
        img4_title:"【情侣摄影客片】",

        img5:"cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/all_photo/6.jpg",
        img5_title:"【亲子全家福客片】",
    },

    //页面点击事件
    img1:function(){
        wx.navigateTo({
          url: '../chinld_photoraphy/index',
        })
    },
    img2:function(){
        wx.navigateTo({
          url: '../photo_shoot/index',
        })
    },
    img3:function(){
        wx.navigateTo({
          url: '../photo_pregnant/index',
        })
    },
    img4:function(){
        wx.navigateTo({
          url: '../couple_shooting/index',
        })
    },
    img5:function(){
        wx.navigateTo({
          url: '../family_photo/index',
        })
    },

   //拨打电话
    call:function(){
      wx.makePhoneCall({
        phoneNumber: '13181388445',
      })
    }
})