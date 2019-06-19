import request from './request.js'
const root = process.env.API_ROOT;

let ajaxService = {

};

//使用
ajaxService.getlist = function(params){
  return request({
    url: root+'?method=baidu.ting.billboard.billList&type=1&size=10&offset=0',
    method: 'get',
    params
  });
};

export default ajaxService;
