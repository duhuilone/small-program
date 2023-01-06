
Page({

    /**
     * 页面的初始数据
     */
    data: {
        images:[
            "cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/english/english16/1.jpg",
            "cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/english/english16/2.jpg",
            "cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/english/english16/3.jpg",
            "cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/english/english16/4.jpg",
            "cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/english/english16/5.jpg",
            "cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/english/english16/6.jpg",
            "cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/english/english16/7.jpg",
            "cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/english/english16/8.jpg",
            "cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/english/english16/9.jpg",
        ]

    },

     call:function(){
      wx.makePhoneCall({
        phoneNumber: '13181388445',
      })
    }
})