// 获取全局应用程序实例对象
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'About',
    userInfo: {
      wechat: 'WEDN-NET',
      nickName: '欢迎关注芊诺美容私人会所',
      avatarUrl: '../../images/qrcode.jpg'
    }
  },

  getUserInfo() {
    app.wechat.getUserInfo()
      .then(res => this.setData({ userInfo: res.userInfo }))
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    
  }
})
