import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import "./assets/font/iconfont.css"
import { List,TreeSelect,Tab,Tabs,IndexBar, IndexAnchor,Cell, CellGroup } from 'vant';
Vue.use(IndexBar).use(IndexAnchor).use(Cell).use(CellGroup).use(Tab).use(Tabs).use(TreeSelect).use(List);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
