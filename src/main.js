import Vue from "vue";
import VueCompositionApi from '@vue/composition-api';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//自定义组件
import './icons';


Vue.use(ElementUI);
Vue.use(VueCompositionApi);

Vue.config.productionTip = false;


import * as Api from './api/api'//寻找文件post、get

Vue.prototype.$api = Api;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
