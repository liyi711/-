import request from "./http.js"


// 第一个接口地址
// 好评电影
export function getNiceMovie(){
  return request({
    // 自动拼接
    url:"index/topRatedMovies",
    method:"get",
  })
}

// 热映列表
export function getNiceMovieList(){
  return request({
    url:"index/moreComingList",
    method:"get",
  })
}