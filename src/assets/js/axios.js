import Vue from 'vue' // 引入 Vue 主文件
import axios from 'axios' // 引入 axios 发请求
import qs from 'qs' // axios 序列化
import router from '../../router/index'
import iView from 'iview'
Vue.use(iView)

window.$debounce = function (fn,delay,immediate) {
  let timer = null
  return function () {
    const _this = this
    const args = arguments
    return new Promise((resolve) => {
      timer && clearTimeout(timer)
      if(immediate){
        const doNow = !timer
        timer = setTimeout(() => {
          timer = null
        }, delay)
        doNow && resolve(fn.apply(_this, args))
      }
      else {
        timer = setTimeout(() => {
          resolve(fn.apply(_this, args))
        },delay)
      }
    })
  }
}
const axiosObj = axios.create({
	transformRequest: [function(data) {
		data = qs.stringify(data)
		return data
	}]
})
// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axiosObj.interceptors.response.use(
  response => {
    // console.log(response, 'response')
    return response
  },
  error => {
    if(router.currentRoute.fullPath.includes('login')){
      return false
    }
    if(error.response.status == '401' && router.currentRoute.fullPath.includes('apply')) {
      router.push('/login')
      localStorage.clear()
    }
    if(error.response.status == '401' && !router.currentRoute.fullPath.includes('apply') && !router.currentRoute.fullPath.includes('login')) {
      window.location.href = '/test/login.html'
      localStorage.clear()
    }
  })
// axios拦截器
axiosObj.interceptors.request.use(
  config => {
    if(router.currentRoute.fullPath.includes('login')){
      return config
    }
    return config
  },
  err => {
  })

Vue.prototype.$req = function() {
	var _this = this
	return {
		//post 请求
		post: function(url, params, callback, axiosParmas) {
			let headersDatas = {
				headers: {
					'Authorization': 'Bearer ' + localStorage.token
				}
			}
			axiosObj.post(url, params, headersDatas, axiosParmas || {})
				.then(function(res) {
					callback.call(this, res)
				}.bind(_this))
				.catch(function(exp) {
					callback.call(this, {
						data: '',
						resMsg: '方法内部错误',
						resCode: -102
					})
				}.bind(_this))
		},
		//get 请求
		get: function(url, callback, axiosParmas) {
			let headersDatas = {
				headers: {
					'Authorization': 'Bearer ' + localStorage.token
				}
			}
			axiosObj.get(url, headersDatas, axiosParmas || {})
				.then(function(res) {
					callback.call(this, res)
				}.bind(_this))
				.catch(function(exp) {
					callback.call(this, {
						data: '',
						resMsg: '方法内部错误',
						resCode: -102
					})
				}.bind(_this))
		},
    getNoToken: function(url, callback, axiosParmas) {
      axiosObj.get(url, axiosParmas || {})
        .then(function(res) {
          callback.call(this, res)
        }.bind(_this))
        .catch(function(exp) {
          callback.call(this, {
            data: '',
            resMsg: '方法内部错误',
            resCode: -102
          })
        }.bind(_this))
    },
    loginNoToken: function(url, params, callback, axiosParmas) {
      let headersDatas = {
        headers: {
          'Authorization': 'Basic Y3liZXJ6b25lOmN5YmVyem9uZXNlY3JldA==',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      axiosObj.post(url, params,headersDatas, axiosParmas || {})
        .then(function(res) {
          callback.call(this, res)
        }.bind(_this))
        .catch(function(exp) {
          callback.call(this, {
            data: '',
            resMsg: '方法内部错误',
            resCode: -102
          })
        }.bind(_this))
    },
    downPost: function(url, callback, axiosParmas) {
      let headersDatas = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.token,
        },
        responseType:'blob',
      }
      axiosObj.get(url, headersDatas, axiosParmas || {})
        .then(function(res) {
          callback.call(this, res)
        }.bind(_this))
        .catch(function(exp) {
          callback.call(this, {
            data: '',
            resMsg: '方法内部错误',
            resCode: -102
          })
        }.bind(_this))
    },
	}
}
