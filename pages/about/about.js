// 获取全局应用程序实例对象
// 创建页面实例对象
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'About',
    company: {
      nickName: '欢迎关注芊诺美容私人会所',
      avatarUrl: '../../images/yy.png'
    },
    userInfo:{}
  },
  previewImage: function (e) {
    console.log(e.target);

    wx.previewImage({
      current: 'http://images.cnblogs.com/cnblogs_com/stoneniqiu/602555/o_yy.png', // 当前显示图片的http链接     
      urls: ['http://images.cnblogs.com/cnblogs_com/stoneniqiu/602555/o_yy.png'] // 需要预览的图片http链接列表     
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.setData({ userInfo: app.globalData.userInfo })
  }
})
