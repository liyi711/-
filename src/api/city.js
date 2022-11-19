import request from "./http.js"

export function getCityList(){
  return request({
    // 接口文档
    url:"cities.json",
    method:"get",
  })
}