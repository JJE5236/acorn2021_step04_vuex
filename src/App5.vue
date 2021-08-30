<template>
  <div id="app">
      <h1>vuex 테스트</h1>
      <p>오늘의 운세 : <strong>{{$store.state.fortuneToday}}</strong></p>
      <p>글자의 갯수 : <strong>{{$store.getters.fortuneLength}}</strong></p>
      <p>
          번호 : {{$store.state.member.num}}
          이름 : {{$store.state.member.name}}
          주소 : {{$store.state.member.addr}}
      </p>
      <p>
          번호 : {{member.num}}
          이름 : {{member.name}}
          주소 : {{member.addr}}
      </p>
      <h2>친구 목록 입니다.</h2>
      <ul>
          <li v-for="(tmp, index) in names" :key="index">{{tmp}}</li>
      </ul>
  </div>
</template>

<script>
// store 의 state 값을 간단히 불러 올수 있는 mapState 함수 import
import {mapState} from 'vuex'

export default {
  name: 'App5',
  /*
    mapState({
      member:'member',
      names:'names'
    })
    를 줄이면
    mapState(['member','names'])
  */
  computed: mapState(['member', 'names'])
}
</script>


