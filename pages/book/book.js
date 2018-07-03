// pages/book/book.js
var phone ='‭1822xxxxx72‬'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tel: phone,
    company: {
      avatarUrl: '../../images/yy.png'
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  previewImage: function (e) {
    wx.previewImage({
      current: 'http://images.cnblogs.com/cnblogs_com/stoneniqiu/602555/o_yy.png', // 当前显示图片的http链接     
      urls: ['http://images.cnblogs.com/cnblogs_com/stoneniqiu/602555/o_yy.png'] // 需要预览的图片http链接列表     
    })

  },
  call:function(){
    wx.makePhoneCall({
      phoneNumber: phone//仅为示例，并非真实的电话号码
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