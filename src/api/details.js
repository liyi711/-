import request from "./http.js"
// https://apis.netstart.cn/maoyan

export function getMovieDetail(params){
  return request({
    url:"/movie/detail",
    method:"get",
    params
  });
}
