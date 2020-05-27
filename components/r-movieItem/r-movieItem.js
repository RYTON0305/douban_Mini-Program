Component({
  data: {},
  properties: {
    item: {
      type: Object,
      value: []
    },
    movieId: {
      type:Number
    }
  },
  options: {
    styleIsolation: "apply-shared"
  },
  methods: {
    handleImgError (res) {
      // console.log(res)
      // console.log(this);
      // const errorIndex = res.currentTarget.dataset.index
      // const typeIndex = res.currentTarget.dataset.type
      // // const changeKey = `theaterMoviesList[${errorIndex}].images.large`
      // const changeKey = ``
      // // console.log(changeKey)
      this.setData({
        'item.images.large': ''
      })
    },
    handleToDetail(){
      wx.navigateTo({
        url: '/pages/details/details?id=' + this.data.movieId,
      })
    }
  }
})