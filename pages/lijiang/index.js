// pages/lijiang/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        images:[
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/1.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/2.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/3.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/4.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/5.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/6.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/7.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/8.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/9.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/10.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/11.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/12.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/13.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/14.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/15.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/16.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/17.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/18.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/19.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/20.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/21.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/22.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/23.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/24.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/25.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/26.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/27.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/28.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/29.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/30.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/31.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/32.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/33.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/34.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/35.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/36.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/37.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/38.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/39.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/40.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/41.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/42.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/43.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/44.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/45.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/46.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/47.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/48.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/49.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/50.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/51.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/52.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/53.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/54.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/55.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/56.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/57.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/58.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/59.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/60.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/61.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/62.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/63.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/64.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/65.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/66.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/67.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/68.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/69.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/70.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/71.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/72.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/73.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/74.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/75.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/76.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/77.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/78.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/79.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/80.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/81.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/82.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/83.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/84.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/85.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/86.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/87.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/88.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/89.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/90.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/91.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/92.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/93.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/94.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/95.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/96.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/97.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/98.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/99.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/100.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/101.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/102.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/103.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/104.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/105.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/106.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/107.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/108.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/109.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/110.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/111.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/112.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/113.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/114.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/115.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/116.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/117.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/118.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/119.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/120.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/121.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/122.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/123.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/124.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/125.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/126.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/127.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/128.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/129.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/130.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/131.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/132.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/133.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/134.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/135.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/136.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/137.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/138.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/139.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/140.jpg',
            'cloud://gegejixiang-7gcpypid4b18e80b.6765-gegejixiang-7gcpypid4b18e80b-1305257814/gegejixiang/lijiang/141.jpg'
        ]

    },

     call:function(){
      wx.makePhoneCall({
        phoneNumber: '13181388445',
      })
    }

})