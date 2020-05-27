// pages/home/home.js
import {
  getMovieData
} from '../../utils/service/home'

const titleList = ['theaters', 'coming', 'top250']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // listTitle: ['正在热映', '即将上映', 'TOP250'],
    // type: ['theaters', 'coming', 'top250'],
    movieList: {
      theaters: {
        title: '正在热映',
        list: []
      },
      coming: {
        title: '即将上映',
        list: []
      },
      top250: {
        title: 'TOP250',
        list: []
      },
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function () {
    titleList.map(item => this._getMovieData(item))
  },

  /** 网络请求函数 */
  _getMovieData (type) {
    getMovieData(type).then(res => {
      // console.log(res.data)
      const list = res.data.subjects
      const typeKey = `movieList.${type}.list`
      this.setData({
        [typeKey]: list
      })
    }).catch(err => {
      console.log(err)
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

  },
  handleToDetail (e) {
    const id = e.currentTarget.dataset.id
    
  },
  handleToMoreMovie(e){
    console.log(e);
    const listType = e.currentTarget.dataset.type
    const navTitle = this.data.movieList[listType].title
    // console.log(navTitle);
    wx.navigateTo({
      url:`/pages/moreMovies/moreMovies?listType=${listType}&navTitle=${navTitle}`
    })
  }
})