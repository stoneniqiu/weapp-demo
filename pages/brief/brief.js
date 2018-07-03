Page({
  data: {
    imgUrls: [
      { url: 'images/slide1.jpg', id: 1 },
      { url: 'images/slide2.jpg', id: 2 },
      { url: 'images/slide3.jpg',id:3}
    ],
    interval: 5000,
    duration: 1000,
    //所有图片的高度  
    imgheights: [],
    //图片宽度  
    imgwidth: 750,
    //默认  
    current: 0,
    Hei: ""     ,     //这是swiper要动态设置的高度属性,
    //介绍部分
    title:"公司简介",
    bkimg:"images/bk.jpg",
    summary:"芊诺美疗私人会所芊诺美疗私人会所芊诺美疗私人会所芊诺美疗私人会所芊诺美疗私人会所芊诺美疗私人会所芊诺美疗私人会所芊诺美疗私人会所芊诺美疗私人会所"
  },
   
  imgH: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth;         //获取当前屏幕的宽度
    var imgh = e.detail.height;　　　　　　　　　　　　　　　　//图片高度
    var imgw = e.detail.width;
    var swiperH = winWid * imgh / imgw + "px"　　　　　　　　　　//等比设置swiper的高度。  即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度    ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
    this.setData({
      Hei: swiperH　　　　　　　　//设置高度
    })
  },
  bindchange: function (e) {
    //console.log(e.detail.current)
    this.setData({ current: e.detail.current })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '欢迎光临芊诺私人美容会所',
      path: 'pages/index/index'
    }
  }
})