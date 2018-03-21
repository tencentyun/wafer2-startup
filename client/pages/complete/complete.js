//complete.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../utils/util.js');

Page({
  data: {
    name: "",
    price: ""
  },
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    });
  },

  formSubmit: function (e) {
    util.showBusy('请求中...')
    var nameVal = e.detail.value.name;
    var priceVal = e.detail.value.price;
    var that = this;
    if ("" == util.trim(nameVal) || "" == util.trim(priceVal)) {
      util.showModel('参数异常', '请输入书名及价格');
      return;
    }
    var bookBo = {
      name: nameVal,
      price: priceVal,
      signkey: 'md5key'
    };
    var that = this
    qcloud.request({
      url: `${config.service.host}/weapp/db.add`,
      login: true,
      data: bookBo,
      success(result) {
        util.showSuccess('请求成功完成')
        console.log('request result->', result);
        // 同步方式存储数据
        wx.setStorageSync('bookId', result.data.data.id);
        //跳转回上一级页面
        wx.navigateTo({
          url: '../data/data'
        })
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    });
  }
})
