<template>
  <div class="container">
    <!-- 嘗試載入 Hello -->
	<Hello />
  
    <!-- 公式撰寫在 template -->
    <h2>華氏：{{ celsius * 9/5 + 32 }} °F</h2>
    <!-- 公式收納在 computed -->
    <h2>華氏：{{ fahrenheit }} °F</h2>
    <div class="celsius">
      攝氏：<input type='number' v-model="celsius" /> °C
    </div>
  </div>
</template>

<script>
// 可以嘗試把昨天以前的範例載入這個新頁面使用看看！
import Hello from './Hello.vue'

export default {
  data () {
    return {
      celsius: 0
    }
  },
  computed: {
    // ES6:
    fahrenheit () {
      // computed 計算後才會顯示到 template 上面。
      return this.celsius * 9/5 + 32;
    }
    // ES5:
    // fahrenheit: function () {
    //   return this.celsius * 9/5 + 32;
    // }
  },
  // 2. 在 vue 宣告使用
  components: {
	Hello
  }
}
</script>

<style>
  .celsius {
    font-size: 1.5em;
  }
</style>