// pages/search/search.js
import {
  getSearchData
} from '../../utils/service/search'
let timer
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList: [],
    timer: null
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

  },
  handleInput (e) {
    clearTimeout(timer)
    const val = e.detail.value
    if(val=='') {
     return this.setData({
        searchList:[]
      })
    }
    timer = setTimeout(
      _ => {
        console.log('发送请求' + val);
        getSearchData(val).then(res => {
          let searchList = res.data.subjects
          // searchList.casts.shift()
          searchList.map(item => item.casts.shift())
          this.setData({
            searchList
          })
        })
      }, 500
    )

  }
})