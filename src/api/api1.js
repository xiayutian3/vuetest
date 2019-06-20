import request from './request.js'
// import request from 'axios'

let ajaxService = {

};

//使用  (没有拦截就要加上   /api  头部)
// ajaxService.getlist = function(params){
//   return request({
//     url: '/api?method=baidu.ting.billboard.billList&type=1&size=10&offset=0',
//     method: 'get',
//     params
//   });
// };

// 有请求拦截的时候   封装了axios
ajaxService.getlist = function(params){
  return request({
    url: `/v1/restserver/ting`,
    method: 'get',
    params:{
      method:"baidu.ting.billboard.billList",
      type:1,
      size:10,
      offset:0
    }
  });
};


export default ajaxService;
