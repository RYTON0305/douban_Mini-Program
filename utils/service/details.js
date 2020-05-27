import request from './network'
import {
  MOVIE_DATA
} from './config'

export function getMovieDetails (id) {
  return request({
    url: MOVIE_DATA.base_url + MOVIE_DATA.subject + id
  })
}