// pages/details/details.js
import { getMovieDetails } from '../../utils/service/details.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsList: [],
    title: '',//影片名称
    year: '',//上映年份
    directors: [],//导演
    genres: [],//体裁
    countries: [],//国家
    rating: '',//评分
    summary: '',//简介
    introExpand: false //展开介绍文本
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    const id = this.options.id
    console.log(options)
    this._getMovieDetails(id)

   

    setTimeout(function () {
      wx.hideLoading()
    }, 500)
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
  _getMovieDetails (id) {
    getMovieDetails(id).then(res => {
      const detailsList = res.data

      this.setData({
        detailsList,
        images: detailsList.images.large,
        title: detailsList.title,//影片名称
        year: detailsList.year,//上映年份
        directors: detailsList.directors,//导演
        genres: detailsList.genres,//体裁
        countries: detailsList.countries,//国家
        rating: detailsList.rating,//评分
        summary: detailsList.summary,//简介
        casts: detailsList.casts
      })
      wx.setNavigationBarTitle({
        title: this.data.title
      })
    })
  },
  handleExpandIntro () {
    this.setData({
      introExpand: !this.data.introExpand
    })
  }
})