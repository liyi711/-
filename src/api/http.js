import axios from "axios";

const service = axios.create({
  baseURL:"https://apis.netstart.cn/maoyan",
  timeout:30000,  // 超时响应时间 如果超过3秒没有响应数据 不会再响应
  // 超时换请求头
  headers:{
    //表单数据转换
    "Content-Type":"application/json;chatset=utf-8",
  }
})

// request拦截器设置  
service.interceptors.request.use(
  // 成功
  (config) => {
    return config
  },

  // 失败
  (error) => {
    console.log('axios中的request报错',error);
    // 数据处理
    Promise.reject(error)
  },
)

// response拦截器
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log('axios中的response报错',error);
    Promise.reject(error)
  }
)

// 设全局
export default service