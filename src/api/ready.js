// 即将上线的电影
import request from "./http.js"

// 近期最受期待列表
export function getReadyMovie(){
  return request({
    // 文档接口
    url:"/index/mostExpected",
    method:"get"
  })
}

// 更多待映列表
export function getReadyMovieList(){
  return request({
    url:"/index/comingList",
    method:"get"
  })
}