// pages/dali/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        images:[
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/1.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/2.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/3.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/4.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/5.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/6.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/7.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/8.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/9.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/10.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/11.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/12.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/13.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/14.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/15.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/16.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/17.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/18.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/19.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/20.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/21.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/22.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/23.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/24.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/25.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/26.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/27.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/28.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/29.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/30.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/31.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/32.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/33.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/34.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/35.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/36.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/37.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/38.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/39.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/40.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/41.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/42.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/43.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/44.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/45.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/46.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/47.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/48.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/49.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/50.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/51.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/52.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/53.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/54.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/55.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/56.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/57.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/58.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/59.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/60.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/61.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/62.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/63.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/64.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/65.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/66.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/67.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/68.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/69.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/70.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/71.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/72.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/73.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/74.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/75.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/76.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/77.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/dali/78.jpg',
        ]

    },

     call:function(){
      wx.makePhoneCall({
        phoneNumber: '13181388445',
      })
    }

    
})