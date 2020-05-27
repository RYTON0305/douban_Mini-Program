// pages/moreMovies/moreMovies.js
import {
  getMoreMovies
} from '../../utils/service/more.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listType: '',
    moreList: [],
    requestCount: 10,
    totalCount: 0,
    dataLoaded: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
		console.log('77777777')
    wx.setNavigationBarTitle({
      title: options.navTitle
    })
    const listType = options.listType
    this.data.listType = listType
    this._getMoreMovies(listType);
  },
  _getMoreMovies(listType) {
    if (this.data.dataLoaded) return
    getMoreMovies(listType, this.data.totalCount, this.data.requestCount).then(res => {
      let moreList = this.data.moreList.concat(res.data.subjects)
      // console.log(res.data.subjects);
      this.setData({
        moreList
      })

      if (res.data.count < this.data.requestCount) {
        this.data.dataLoaded = true
      } else {
        this.data.totalCount += this.data.requestCount

      }
    })

  },
  onReachBottom() {
    this._getMoreMovies(this.data.listType)
  }
})