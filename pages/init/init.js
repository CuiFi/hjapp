// pages/init/init.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  handleContact(e) {
    console.log(e.path)
    console.log(e.query)
  },


  bjtab:function(){
    console.log("北京");
    wx.navigateTo({
      url: '/pages/index/index?cityID=7',
    })
  },

  njtab: function () {
    console.log("南京");
    wx.navigateTo({
      url: '/pages/index/index?cityID=9',
    })
  },

  whtab: function () {
    console.log("武汉");
    wx.navigateTo({
      url: '/pages/index/index?cityID=8',
    })
  },

  downpdf:function(e){
    console.log(e);
    wx.downloadFile({
      // 示例 url，并非真实存在
      url: 'https://request.hejianzhiyang.com/a.pdf',
      success: function (res) {
        const filePath = res.tempFilePath
        console.log(filePath);
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log(res)
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})