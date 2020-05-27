import request from './network'
import {
  MOVIE_DATA
} from './config'

export function getMovieData(type) {
  return request({
    url: MOVIE_DATA.base_url + MOVIE_DATA[type],
    method: 'get',
    data: {
      star: 0,
      count: 10
    }
  })
}