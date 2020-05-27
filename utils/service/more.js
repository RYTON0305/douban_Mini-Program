import request from './network'
import {
  MOVIE_DATA
} from './config'
export function getMoreMovies(type,start,count){
  return request({
    url:MOVIE_DATA.base_url+MOVIE_DATA[type],
    data:{
      start,
      count
    }
  })
}