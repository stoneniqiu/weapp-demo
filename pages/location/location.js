Page({
  data: {
    title: '',
    markers: [{
      iconPath: "../../images/location.png",
      id: 0,
      latitude: 28.18116,
      longitude: 112.991562,
      width: 50,
      height: 50,  
    }],
    
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  previewImage: function (e) {
    console.log(e.target);
    wx.previewImage({
      current: 'http://images.cnblogs.com/cnblogs_com/stoneniqiu/602555/o_actv.jpg', // 当前显示图片的http链接     
      urls: ['http://images.cnblogs.com/cnblogs_com/stoneniqiu/602555/o_actv.jpg'] // 需要预览的图片http链接列表     
    })
  },
    onReady () {
    wx.setNavigationBarTitle({ title: '芊诺美疗地址：' })
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