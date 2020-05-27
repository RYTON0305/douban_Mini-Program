import request from './network'
import {
  MOVIE_DATA
} from './config'

export function getSearchData (val) {
  return request({
    url: MOVIE_DATA.base_url + MOVIE_DATA.search + '?q=' + val
  })
}