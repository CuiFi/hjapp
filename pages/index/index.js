Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '' ,
    opendate: '' ,
    q12Data: '其他',
    q12value:'',
    q12if: false,
    q7Data:'其他',
    q7value: '',
    q7if:false,
    q1_1Data: '其他',
    q1_1value: '',
    q1_1if: false,
    q1_3Data: '是',
    q1_3value: '',
    q1_3if: false,
    q1_6Data: '是',
    q1_6value: '',
    q1_6if: false,
    q1_7Data: '是',
    q1_7value: '',
    q1_7if: false,
    q2_3Data: '是',
    q2_3value: '',
    q2_3if: false,
    q3_11Data: '是',
    q3_11value: '',
    q3_11if: false,
    q3_12Data: '是',
    q3_12value: '',
    q3_12if: false,
    q3_9Data: '是',
    q3_9value: '',
    q3_9if: false,
    q3_10Data: '是',
    q3_10value: '',
    q3_10if: false,
    q6_1Data: '其他',
    q6_1value: '',
    q6_1if: false,
    q6_2Data: '其他',
    q6_2value: '',
    q6_2if: false,
    q6_3Data: '有',
    q6_3value: '',
    q6_3if: false,
    q6_15Data: '其他',
    q6_15value: '',
    q6_15if: false,
    q7_5Data: '其他',
    q7_5value: '',
    q7_5if: false,
    q7_7Data: '其他',
    q7_7value: '',
    q7_7if: false,

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

  // Q12
  bindKeyInput12: function (e) {
    this.setData({
      q12Data: e.detail.value
    })
  },
  radioChange12: function (e) {
    if (e.detail.value == "其他") {
      this.setData({
        q12if: true
      });
    } else {
      this.setData({
        q12if: false,
        q12Data: '其他',
        q12value:''
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

  // Q1_3
  bindKeyInput1_3: function (e) {
    this.setData({
      q1_3Data: e.detail.value
    })
  },
  checkboxChange1_3: function (e) {
    // console.log(e.detail.value.includes("其他"));
    if (e.detail.value.includes("是")) {
      this.setData({
        q1_3if: true
      });
    } else {
      this.setData({
        q1_3if: false,
        q1_3Data: '是',
        q1_3value: ''
      });
    }
  },

  // Q1_6
  bindKeyInput1_6: function (e) {
    this.setData({
      q1_6Data: e.detail.value
    })
  },
  checkboxChange1_6: function (e) {
    // console.log(e.detail.value.includes("其他"));
    if (e.detail.value.includes("是")) {
      this.setData({
        q1_6if: true
      });
    } else {
      this.setData({
        q1_6if: false,
        q1_6Data: '是',
        q1_6value: ''
      });
    }
  },

  // Q1_7
  bindKeyInput1_7: function (e) {
    this.setData({
      q1_7Data: e.detail.value
    })
  },
  checkboxChange1_7: function (e) {
    // console.log(e.detail.value.includes("其他"));
    if (e.detail.value.includes("是")) {
      this.setData({
        q1_7if: true
      });
    } else {
      this.setData({
        q1_7if: false,
        q1_7Data: '是',
        q1_7value: ''
      });
    }
  },

  // Q2_3
  bindKeyInput2_3: function (e) {
    this.setData({
      q2_3Data: e.detail.value
    })
  },
  checkboxChange2_3: function (e) {
    // console.log(e.detail.value.includes("其他"));
    if (e.detail.value.includes("是")) {
      this.setData({
        q2_3if: true
      });
    } else {
      this.setData({
        q2_3if: false,
        q2_3Data: '是',
        q2_3value: ''
      });
    }
  },

  // Q3_11
  bindKeyInput3_11: function (e) {
    this.setData({
      q3_11Data: e.detail.value
    })
  },
  checkboxChange3_11: function (e) {
    // console.log(e.detail.value.includes("其他"));
    if (e.detail.value.includes("是")) {
      this.setData({
        q3_11if: true
      });
    } else {
      this.setData({
        q3_11if: false,
        q3_11Data: '是',
        q3_11value: ''
      });
    }
  },

  // Q3_12
  bindKeyInput3_12: function (e) {
    this.setData({
      q3_12Data: e.detail.value
    })
  },
  checkboxChange3_12: function (e) {
    // console.log(e.detail.value.includes("其他"));
    if (e.detail.value.includes("是")) {
      this.setData({
        q3_12if: true
      });
    } else {
      this.setData({
        q3_12if: false,
        q3_12Data: '是',
        q3_12value: ''
      });
    }
  },

  // Q3_9
  bindKeyInput3_9: function (e) {
    this.setData({
      q3_9Data: e.detail.value
    })
  },
  checkboxChange3_9: function (e) {
    // console.log(e.detail.value.includes("其他"));
    if (e.detail.value.includes("是")) {
      this.setData({
        q3_9if: true
      });
    } else {
      this.setData({
        q3_9if: false,
        q3_9Data: '是',
        q3_9value: ''
      });
    }
  },

  // Q3_10
  bindKeyInput3_10: function (e) {
    this.setData({
      q3_10Data: e.detail.value
    })
  },
  checkboxChange3_10: function (e) {
    // console.log(e.detail.value.includes("其他"));
    if (e.detail.value.includes("是")) {
      this.setData({
        q3_10if: true
      });
    } else {
      this.setData({
        q3_10if: false,
        q3_10Data: '是',
        q3_10value: ''
      });
    }
  },

  // Q6_1
  bindKeyInput6_1: function (e) {
    this.setData({
      q6_1Data: e.detail.value
    })
  },
  checkboxChange6_1: function (e) {
    // console.log(e.detail.value.includes("其他"));
    if (e.detail.value.includes("其他")) {
      this.setData({
        q6_1if: true
      });
    } else {
      this.setData({
        q6_1if: false,
        q6_1Data: '其他',
        q6_1value: ''
      });
    }
  },

  // Q6_2
  bindKeyInput6_2: function (e) {
    this.setData({
      q6_2Data: e.detail.value
    })
  },
  checkboxChange6_2: function (e) {
    // console.log(e.detail.value.includes("其他"));
    if (e.detail.value.includes("其他")) {
      this.setData({
        q6_2if: true
      });
    } else {
      this.setData({
        q6_2if: false,
        q6_2Data: '其他',
        q6_2value: ''
      });
    }
  },

  // Q6_3
  bindKeyInput6_3: function (e) {
    this.setData({
      q6_3Data: e.detail.value
    })
  },
  checkboxChange6_3: function (e) {
    // console.log(e.detail.value.includes("其他"));
    if (e.detail.value.includes("有")) {
      this.setData({
        q6_3if: true
      });
    } else {
      this.setData({
        q6_3if: false,
        q6_3Data: '有',
        q6_3value: ''
      });
    }
  },

  // Q6_15
  bindKeyInput6_15: function (e) {
    this.setData({
      q6_15Data: e.detail.value
    })
  },
  checkboxChange6_15: function (e) {
    // console.log(e.detail.value.includes("其他"));
    if (e.detail.value.includes("其他")) {
      this.setData({
        q6_15if: true
      });
    } else {
      this.setData({
        q6_15if: false,
        q6_15Data: '其他',
        q6_15value: ''
      });
    }
  },

  // Q7_5
  bindKeyInput7_5: function (e) {
    this.setData({
      q7_5Data: e.detail.value
    })
  },
  checkboxChange7_5: function (e) {
    // console.log(e.detail.value.includes("其他"));
    if (e.detail.value.includes("其他")) {
      this.setData({
        q7_5if: true
      });
    } else {
      this.setData({
        q7_5if: false,
        q7_5Data: '其他',
        q7_5value: ''
      });
    }
  },

    // Q7_7
    bindKeyInput7_7: function (e) {
      this.setData({
        q7_7Data: e.detail.value
      })
    },
    checkboxChange7_7: function (e) {
      // console.log(e.detail.value.includes("其他"));
      if (e.detail.value.includes("其他")) {
        this.setData({
          q7_7if: true
        });
      } else {
        this.setData({
          q7_7if: false,
          q7_7Data: '其他',
          q7_7value: ''
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

  bindOpenDateChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      opendate: e.detail.value
    })
  },

  formSubmit: function (e) {
    var formData = e.detail.value;
    var cityTabs = wx.getStorageSync("cityid");
    var onlyID = wx.getStorageSync('onlyID') ? wx.getStorageSync('onlyID') : '';
    // console.log(typeof wx.getStorageSync('onlyID'))
    // console.log(onlyID);
    // console.log(e);

    var objform = Object.assign(formData, { "cityID": cityTabs }, { "onlyID": onlyID });
    // console.log(objform);
    // return false;
    if (objform.q1){
      wx.request({
        url: 'https://request.hejianzhiyang.com/Diaoyan/Three',
        method: "POST",
        data: objform,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          wx.setStorageSync("resultID", res.data.confusion);
          wx.setStorageSync("onlyID", res.data.onlyID);
          // console.table(res)
          wx.navigateTo({
            url: '/pages/okpage/okpage'
          })
        }
      });
    }else{
      wx.showModal({
        title: '警告',
        content: '请填写姓名',
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