//data.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../utils/util.js')

Page({
  data: {
    requestResult: '',
    canIUseClipboard: wx.canIUse('setClipboardData'),
    updateId:'',
    delId:''
  },

  testQuery: function () {
    util.showBusy('请求中...')
    var that = this
    qcloud.request({
      url: `${config.service.host}/weapp/db.query`,
      login: true,
      data: { "id": that.data.updateId },
      success(result) {
        util.showSuccess('请求成功完成')
        that.setData({
          requestResult: JSON.stringify(result.data),
          updateId: result.data.data.id,
          delId: result.data.data.id
        })
        code[code.length] = JSON.stringify(result.data.data)
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
  },
  testAdd: function () {
    util.showBusy('请求中...')
    var bookBo = {
      name: '我是一本书',
      price: 100,
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
        console.log('request result->', result.data.data);
        that.setData({
          requestResult: JSON.stringify(result.data),
          updateId: result.data.data.id,
          delId: result.data.data.id
        })
        // 同步方式存储数据
        wx.setStorageSync('bookId', result.data.data.id);
        code[code.length] = JSON.stringify(result.data.data)
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
  },
  testUpdate: function () {
    util.showBusy('请求中...')
    var that = this
    qcloud.request({
      url: `${config.service.host}/weapp/db.update`,
      login: true,
      data: {"id":that.data.updateId},
      success(result) {
        util.showSuccess('请求成功完成')
        that.setData({
          requestResult: JSON.stringify(result.data)
        })
        code[code.length] = JSON.stringify(result.data.data)
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
  },
  testDel: function () {
    util.showBusy('请求中...')
    var that = this
    qcloud.request({
      url: `${config.service.host}/weapp/db.del`,
      login: true,
      data: { "id": that.data.delId },
      success(result) {
        util.showSuccess('请求成功完成')
        that.setData({
          requestResult: JSON.stringify(result.data)
        })
        code[code.length] = JSON.stringify(result.data.data)
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
  },
  copyCode: function (e) {
    var codeId = e.target.dataset.codeId
    wx.setClipboardData({
      data: code[codeId - 1],
      success: function () {
        util.showSuccess('复制成功')
      }
    })
  },
  /**
     * 跳转到form操作 Demo 的页面
     */
  openForm() {
    wx.navigateTo({ url: '../complete/complete' });
  },

  //加载完后，处理事件 
  // 如果有本地数据，则直接显示
  onLoad: function (options) {
    //获取本地数据
    var bookId = wx.getStorageSync('bookId');

    console.log('缓存的书本id：'+bookId);
    if (bookId) {
      this.setData({
        updateId: bookId,
        delId: bookId
      });
      //查询
      this.testQuery();
    }
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})

var code = [
  `router.get('/dbdemo', controllers.dbdemo)`,
  `module.exports = ctx => {
    ctx.state.data = {
        msg: '你好呀，世界'
    }
}`
]
