
Page({

    /**
     * 页面的初始数据
     */
    data: {
        images:[
            "cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/english/english7/1.jpg",
            "cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/english/english7/2.jpg",
            "cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/english/english7/3.jpg",
            "cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/english/english7/4.jpg",
            "cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/english/english7/5.jpg",
            "cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/english/english7/6.jpg",
            "cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/english/english7/7.jpg",
            "cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/english/english7/8.jpg",
            "cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/english/english7/9.jpg",
        ]

    },

     call:function(){
      wx.makePhoneCall({
        phoneNumber: '13181388445',
      })
    }
})