<template>
  <div class="hello">
    <!-- 2. msg 雙向綁定到 template 的地方 -->
    <h1>{{ msg }}</h1>
    
    <!-- 4. 插入我們新增的數據看看，兩個 {{ }} 中可以綁定 data 任意值 -->
    <h2>{{ hello }}</h2>
    
    <!-- 5. 也可以撰寫一些 javascript code -->
    <h2>{{ hello + ' and Ironman 2017' }}</h2>
	<!-- 6. 加一個 input 來嘗試今天的任務，雙向綁定 
         修改 input 裡面的值，綁定的地方也會馬上更新!!
         是不是很酷呢?! -->
    <input type="text" v-model="hello" />
    
    <!-- 8. 使用 checkbox 來完成雙向綁定 -->
    <input type="checkbox" v-model="toggle" />{{ toggle }}
	
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
	  // 3. 嘗試新增一個數據
	  hello: null,
	  // 7. checkbox 預設是 false
	  toggle: false,
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  mounted : function() {
    //vue-resource 用法
	/*
	this.$http.post('/VueJs/hi', "Tim").then(
		function (response) {
		  console.log(response);
	}, function (response) {
		console.log("请求失败")
	});
	*/
  },
  methods : {
		fetchData(){
			var vm = this;
			console.log(this);
			// axios 用法
			axios.post('/VueJs/hi', "ABC-TEST").then(
				function (response) {
				  console.log(response.data);
				  console.log(vm.hello);
				  vm.hello = response.data;
			}, function (response) {
				console.log("请求失败")
			});
		}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
