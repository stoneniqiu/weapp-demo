Page({
  previewImage: function (e) {
    console.log(e.target);
    wx.previewImage({
      current: 'http://images.cnblogs.com/cnblogs_com/stoneniqiu/602555/o_s.jpg', // 当前显示图片的http链接     
      urls: ['http://images.cnblogs.com/cnblogs_com/stoneniqiu/602555/o_s.jpg'] // 需要预览的图片http链接列表     
    })
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