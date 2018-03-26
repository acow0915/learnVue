<template>
  <div>
   
    <input type="text" v-model="username" />
	<input type="password" v-model="password" />
	<input type="button" value="submit" v-on:click="login"/>
  </div>	
</template>

<script>

import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

export default {
    data () {
		return {
			username : '',
			password : ''
		}
	},
	computed: {
		// ...mapGetters 為 ES7 寫法
		...mapGetters({
		  // getCount return value 將會存在別名為 count 的 data 上
		  isLogin : 'getLogin',
		}),
	},
	created () {
		// 组件创建完后获取数据，
		// 此时 data 已经被 observed 了
		var vm = this;
		console.log(vm.$store.getters.getLogin);
		if(vm.$store.getters.getLogin){
			vm.$router.push({ path: '/' });
		} else {
			console.log('not login');
		}
	},
	methods : {
		...mapActions([
		  'actionLogin'
		]),
		login(){
			var vm = this;
			console.log(this);
			
			var data = new FormData();
			
			data.append('username', vm.username);
			data.append('password', vm.password);
			
			/*
			if(vm.username == vm.password){
				vm.$store.dispatch('actionLogin'); //觸發登入 dispatch 觸發 action方法
				vm.$router.push({ path: '/' });
			} else {
				vm.$router.push({ path: '/login' });
			}
			*/
			
			// axios 用法
			axios.post('http://localhost:8081/VueJs/login', data).then(
				function (response) {
				  console.log(response.data);
				  if("Y" == response.data){
					 vm.$store.dispatch('actionLogin'); //觸發登入 dispatch 觸發 action方法
				vm.$router.push({ path: '/' });
				  } else {
					 vm.$router.push({ path: '/login' });
				  }
			}, function (response) {
				console.log("请求失败");
				vm.$router.push({ path: '/login' });
			});
		}
  }
}

</script>