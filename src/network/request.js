import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; 
export function request(config) {
  const instance = new axios.create({
    //baseURL:'http://123.207.32.32:8000',
    baseURL:'http://192.168.1.3:3000',
    timeout:5000
    
  });

  // 请求拦截器
  instance.interceptors.request.use(config => {
    //拦截后需要将拦截下来的请求数据返回发送
    return config;
  }, err => {

  })

  // 相应拦截器
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    return res.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}