<template>
  <div id="app">
      <h1>vuex 테스트</h1>
      <p>오늘의 운세 : <strong>{{$store.state.fortuneToday}}</strong></p>
      <p>글자의 갯수 : <strong>{{$store.getters.fortuneLength}}</strong></p>
      <input type="text" placeholder="변경할 운세 입력..." ref="inputFortune">
      <button @click="change">변경</button>
  </div>
</template>

<script>

export default {
  name: 'App2',
  methods:{
      change(){
        //입력한 오늘의 운세
        const newFortune=this.$refs.inputFortune.value;
        //입력한 오늘의 운세를 commit 을 이용해서 store 에 반영하기 
        this.$store.commit('CHANGE_FORTUNE', newFortune);
      }
  }
}
</script>


