import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';

// 引入 store 資料夾（上面五隻 js ）
// 預設會去找 index.js  如果沒有的話會報錯！
// 我們在上一個範例已經組合所有指揮挺了！！
import store from './store'

// init
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

// page
import Hello from './pages/Hello.vue';
import CtoF from './pages/C2F.vue';
import CountVue from './pages/count.vue';
import Login from './pages/Login.vue';
import App from './App.vue';

const router = new VueRouter({
  // 使用 HTML 5 模式
  mode: 'history',
  base: __dirname,
  // routre 表
  routes: [
	{
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/c2f',
      name: 'c2f',
      component: CtoF
    },
	{
      path: '/count',
      name: 'count',
      component: CountVue
    },
    // router 轉址
    { path: '/*', redirect: '/hello' }
  ]
});


new Vue({
  el: '#app',
  // router 掛載設定
  router,
  // 加入 store
  store,
  // app.vue 掛載並 replace index.html 原始掛載點： <div id="app"></div>
  render: h => h( App ),
  watch:{
    "$route" : 'checkLogin'
  },
  created() {
    this.checkLogin();
  },
  methods:{
    checkLogin(){

      //检查是否存在session
      if(!this.$store.getters.getLogin){
        this.$router.push('/login');
      }else{
        //this.$router.push('/');
      }
    }
  }
});

//const resource = new VueResource();
