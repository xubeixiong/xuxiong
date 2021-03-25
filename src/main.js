import "babel-polyfill"
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/js/axios'
import 'view-design/dist/styles/iview.css'
import '../src/assets/css/base.less'
import '../src/assets/css/commom.less'
import '../src/assets/js/api'
import iView from 'view-design'
Vue.use(iView)
Vue.config.productionTip = false
import echarts from 'echarts';
Vue.prototype.$echarts = echarts


import axios from 'axios'
Vue.prototype.$axios = axios
Vue.prototype.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')


import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
Vue.use(VueDirectiveImagePreviewer)
Vue.use(VideoPlayer)

if (window.HTMLElement) {
    if (Object.getOwnPropertyNames(HTMLElement.prototype).indexOf('dataset') === -1) {
        Object.defineProperty(HTMLElement.prototype, 'dataset', {
            get: function () {
                var attributes = this.attributes; // 获取节点的所有属性
                var name = [];
                var value = []; // 定义两个数组保存属性名和属性值
                var obj = {}; // 定义一个空对象
                for (var i = 0; i < attributes.length; i++) { // 遍历节点的所有属性
                    if (attributes[i].nodeName.slice(0, 5) === 'data-') { // 如果属性名的前面5个字符符合"data-"
                        // 取出属性名的"data-"的后面的字符串放入name数组中
                        name.push(attributes[i].nodeName.slice(5));
                        // 取出对应的属性值放入value数组中
                        value.push(attributes[i].nodeValue);
                    }
                }
                for (var j = 0; j < name.length; j++) { // 遍历name和value数组
                    obj[name[j]] = value[j]; // 将属性名和属性值保存到obj中
                }
                return obj; // 返回对象
            },
        });
    }
}

router.beforeEach(function(to, from, next) {
	var arr=JSON.parse(localStorage.getItem('allPage'))
	if(to.path=='/systemIndex'||to.path=='/login'||to.path=='/regsist'||to.path=='/studentIndex'||arr==null){
		next()
	}else{
		if(arr.indexOf(to.path)>-1){
			next()
		}else{
			next(false)
			next({path:'/404'})
			iView.Message.error('无此页面的访问权限');
		}
	}

}.bind(this))

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
