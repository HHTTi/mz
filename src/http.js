export default {
      install: function (Vue, axios) {
        axios.defaults.baseURL = 'http://127.0.0.1:3000/'
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
        //将axios挂载到Vue原型上
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