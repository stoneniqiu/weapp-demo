// 获取全局应用程序实例对象
// 创建页面实例对象
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'About',

    isAuth:true,
    userInfo:{}
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res.authSetting);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.setData({ userInfo: res.userInfo })
              this.setData({ isAuth: true })
              
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }else{
          this.setData({ isAuth: false })
        }
      }
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
