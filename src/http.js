export default {
      install: function (Vue, axios) {
        axios.defaults.baseURL = 'http://hhtti.cn/'
        axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  //此处是增加的代码，设置请求头的类型
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
        // 将axios挂载到Vue原型上
        Vue.prototype.axios = axios;
        Vue.prototype.http = params => {
          return new Promise((resolve, reject) => {
            axios.post("/CallMethod", params)
              .then(response => {
                resolve(response.data);
              })
              .catch(err => {
                reject(err);
              })
          })
        };
      }
    }