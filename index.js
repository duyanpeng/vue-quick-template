import Vue from 'vue'
import './tools/rem.js'
// import HelloWord from './src/components/HelloWord.vue'
// import HelloWord from './dist/main.js';
import HelloWord from './src/index.js'
Vue.use(HelloWord)
// Vue.component('hello-word',HelloWord)
new Vue({
    el:'#app',
})