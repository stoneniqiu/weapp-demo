Page({
  data: {
    markers: [{
      iconPath: "../../images/location.png",
      id: 0,
      latitude: 28.18116,
      longitude: 112.991562,
      width: 50,
      height: 50,  
    }],
    //
    // polyline: [{
    //   points: [{
    //     longitude: 113.3245211,
    //     latitude: 23.10229
    //   }, {
    //     longitude: 113.324520,
    //     latitude: 23.21229
    //   }],
    //   color: "#FF0000DD",
    //   width: 2,
    //   dottedLine: true
    // }],
    // controls: [{
    //   id: 1,
    //   iconPath: '../../images/location.png',
    //   position: {
    //     left: 0,
    //     top: 300 - 50,
    //     width: 50,
    //     height: 50
    //   },
    //   clickable: true
    // }]
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

  }
})