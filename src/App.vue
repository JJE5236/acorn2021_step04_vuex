<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>오늘의 운세 : <strong>{{$store.state.fortuneToday}}</strong></p>
    <input type="text" placeholder="변경할 운세 입력..." ref="inputFortune">
    <button @click="changeFortune">운세 변경</button>
    <button @click="changeFortune2">운세 변경2</button>
    <button @click="changeFortune3">운세 변경3</button>
    <hello-world></hello-world>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components:{
    HelloWorld
  },
  methods:{
    changeFortune(){
      //입력한 오늘의 운세를 읽어와서 store 에 직접 반영하기 
      this.$store.state.fortuneToday = this.$refs.inputFortune.value;
    },
    changeFortune2(){
      //입력한 오늘의 운세
      const newFortune=this.$refs.inputFortune.value;
      //입력한 오늘의 운세를 commit 을 이용해서 store 에 반영하기 
      this.$store.commit('CHANGE_FORTUNE', newFortune);
    },
    changeFortune3(){
      //입력한 오늘의 운세
      const newFortune=this.$refs.inputFortune.value;
      //store 에 changeFortuneAction 을 수행하라는 공문을 보낸다.
      this.$store.dispatch('changeFortuneAction', newFortune);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
