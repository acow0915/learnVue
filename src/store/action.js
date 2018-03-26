import Vue from 'vue'
import mutations from './mutations.js'
// 引入 mutations_type （引用同一個 key）
import * as types from './mutations_type.js'

export const actionIncrease = ({ commit }) => {
  console.log('actionIncrease');
  commit(types.INCREASE);
}

export const actionDecrease = ({ commit }) => {
  console.log('actionDecrease');
  commit(types.DECREASE);
}

export const actionLogin = ({ commit }) => {
  console.log('actionLogin');
  commit(types.LOGGIN);
}

export const actionLogout = ({ commit }) => {
  console.log('actionLogout');
  commit(types.UNLOGGIN);
}