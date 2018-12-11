Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '' ,
    q4Data: '其他',
    q4value:'',
    q4if: false,
    q7Data:'其他',
    q7value: '',
    q7if:false,
    q1_1Data: '其他',
    q1_1value: '',
    q1_1if: false,
    q9_6Data: '其他',
    q9_6value: '',
    q9_6if: false,
    q9_7Data: '其他',
    q9_7value: '',
    q9_7if: false,

    array: '',
    sjsname: '',
  },

  go:function(){
    wx.navigateTo({
      url: '/pages/sel/sel',
    })
  },

  bindPickerChange: function (e) {
    var shejsname = this.data.array[e.detail.value];
    console.log(shejsname);
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sjsname: shejsname
    })
  },

  // Q4
  bindKeyInput4: function (e) {
    this.setData({
      q4Data: e.detail.value
    })
  },
  radioChange4: function (e) {
    if (e.detail.value == "其他") {
      this.setData({
        q4if: true
      });
    } else {
      this.setData({
        q4if: false,
        q4Data: '其他',
        q4value:''
      });
    }
  },

  // Q7
  bindKeyInput7: function (e) {
    this.setData({
      q7Data: e.detail.value
    })
  },
  radioChange7: function (e) {
    if(e.detail.value == "其他"){
      this.setData({
        q7if:true
      });
    }else{
      this.setData({
        q7if: false,
        q7Data: '其他',
        q7value:''
      });
    }
  },

  // Q1_1
  bindKeyInput1_1: function (e) {
    this.setData({
      q1_1Data: e.detail.value
    })
  },
  checkboxChange1_1: function (e) {
    // console.log(e.detail.value.includes("其他"));
    if (e.detail.value.includes("其他")) {
      this.setData({
        q1_1if: true
      });
    } else {
      this.setData({
        q1_1if: false,
        q1_1Data: '其他',
        q1_1value: ''
      });
    }
  },

  // Q9_6
  bindKeyInput9_6: function (e) {
    this.setData({
      q9_6Data: e.detail.value
    })
  },
  checkboxChange9_6: function (e) {
    // console.log(e.detail.value.includes("其他"));
    if (e.detail.value.includes("其他")) {
      this.setData({
        q9_6if: true
      });
    } else {
      this.setData({
        q9_6if: false,
        q9_6Data: '其他',
        q9_6value: ''
      });
    }
  },

  // Q9_7
  bindKeyInput9_7: function (e) {
    this.setData({
      q9_7Data: e.detail.value
    })
  },
  checkboxChange9_7: function (e) {
    // console.log(e.detail.value.includes("其他"));
    if (e.detail.value.includes("其他")) {
      this.setData({
        q9_7if: true
      });
    } else {
      this.setData({
        q9_7if: false,
        q9_7Data: '其他',
        q9_7value: ''
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.cityID)
    wx.setStorageSync("cityid", options.cityID);
    var _this = this;
    wx.request({
      url: 'https://request.hejianzhiyang.com/Index/getpeople',
      method: "POST",
      data:{
        cityID:options.cityID
      },
      success:function(res){
        // console.log(res.data);
        _this.setData({
          array:res.data
        });
      }
    })
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
    return {
      title: '合建志洋装饰调研单',
      path:'/pages/init/init',
      success:function(res){
        console.log(res);
      }
    }
  },

  bindDateChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  formSubmit: function (e) {
    var formData = e.detail.value;
    var cityTabs = wx.getStorageSync("cityid");
    // console.log(e);

    var objform = Object.assign(formData, {"cityID":cityTabs});
    if (objform.q1 && objform.q2 && objform.q10){
      wx.request({
        url: 'https://request.hejianzhiyang.com/Index/two',
        method: "POST",
        data: objform,
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          wx.setStorageSync("resultID", res.data.confusion);
          wx.navigateTo({
            url: '/pages/okpage/okpage'
          })
        }
      });
    }else{
      wx.showModal({
        title: '警告',
        content: '请填写电话,姓名,对接人',
        showCancel:false,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
    
  }

})