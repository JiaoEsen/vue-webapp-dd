import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { DropdownMenu, DropdownItem, Icon, NavBar, 
  Tab, Tabs, Calendar, Cell, Picker, Field, Popup, 
  Search, Checkbox, CheckboxGroup,RadioGroup, Radio, Loading, Notify, Dialog, Collapse, CollapseItem   } from 'vant';

// rem
import './assets/style/common.sass';
import './assets/js/rem';
import './assets/font/font_2676574_zezqxg2wjrj/iconfont.css';
import './assets/style/animate.css';

Vue.config.productionTip = false;

Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Calendar);
Vue.use(Cell);
Vue.use(Picker);
Vue.use(Field);
Vue.use(Popup);
Vue.use(Search);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Loading);
Vue.use(Notify);
Vue.use(Dialog);
Vue.use(Collapse);
Vue.use(CollapseItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
