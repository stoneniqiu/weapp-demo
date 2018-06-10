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
      avatarUrl: '../../images/qrcode.jpg'
    },
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.setData({ userInfo: app.globalData.userInfo })
  }
})
