
export default options => new Promise((resolve, reject) => {
  wx.request({
    url: options.url,
    method: options.method || 'get',
    data: options.data || {},
    success: resolve,
    fail: reject
  })
})