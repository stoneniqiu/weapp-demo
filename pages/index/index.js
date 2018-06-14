Page({
  data: {
    imgUrls: [
      'images/slide1.jpg',
      'images/slide2.jpg',
      'images/slide3.jpg',
    ],
    interval: 5000,
    duration: 1000,
    //所有图片的高度  
    imgheights: [],
    //图片宽度  
    imgwidth: 750,
    //默认  
    current: 0,
    //介绍部分
    title:"公司简介",
    bkimg:"images/bk.jpg",
    summary:"芊诺美疗私人会所芊诺美疗私人会所芊诺美疗私人会所芊诺美疗私人会所芊诺美疗私人会所芊诺美疗私人会所芊诺美疗私人会所芊诺美疗私人会所芊诺美疗私人会所"
  },
  imageLoad: function (e) {
    //获取图片真实宽度  
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //宽高比  
      ratio = imgwidth / imgheight;
    //console.log(imgwidth, imgheight)
    //计算的高度值  
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight
    var imgheights = this.data.imgheights
    //把每一张图片的高度记录到数组里  
    imgheights.push(imgheight)
    this.setData({
      imgheights: imgheights,
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