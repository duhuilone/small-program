// pages/sample1/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        images:[
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/1.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/2.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/3.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/4.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/5.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/6.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/7.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/8.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/9.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/10.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/11.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/12.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/13.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/14.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/15.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/16.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/17.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/18.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/19.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/20.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/21.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/22.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/23.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/24.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/25.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/26.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/27.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/28.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/29.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/30.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/31.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/32.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/33.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/34.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/35.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/36.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/37.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/38.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/39.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/40.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/41.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/42.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/43.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/44.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/45.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/46.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/47.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/48jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/49.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/50.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/51.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/52.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/53.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/54.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/55.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/56.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/57.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/58.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/59.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/60.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/61.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/62.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/63.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/64.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/65.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/66.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/67.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/68.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/69.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/70.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/71.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/72.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/73.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/74.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/75.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/76.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/77.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/78.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/79.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/80.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/81.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/82.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/83.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/84.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/85.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/86.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/87.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/88.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/89.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/90.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/91.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/92.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/93.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/94.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/95.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/96.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/97.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/98.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/99.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/100.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/101.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/102.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/103.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/104.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/105.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/106.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/107.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/108.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/109.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/110.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/111.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/112.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/113.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/114.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/115.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/116.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/117.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/118.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/119.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/120.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/121.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/122.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/123.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/124.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/125.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/126.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/127.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/128.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/129.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/130.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/131.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/132.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/133.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/134.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/135.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/136.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/137.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/138.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/140.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/141.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/142.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/143.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/144.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/145.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/146.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/147.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/148.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/149.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/150.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/151.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/152.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/153.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/154.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/155.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/156.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/157.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/158.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/159.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/160.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/161.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/162.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/163.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/164.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/165.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/166.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/167.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/168.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/170.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/171.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/172.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/173.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/174.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/sample/175.jpg'
            
        ]
    },

     call:function(){
      wx.makePhoneCall({
        phoneNumber: '13181388445',
      })
    }

})