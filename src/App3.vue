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
          번호 : {{num}}
          이름 : {{name}}
          주소 : {{addr}}
      </p>
  </div>
</template>

<script>
// store 의 state 값을 간단히 불러 올수 있는 mapState 함수 import
import {mapState} from 'vuex'

export default {
  name: 'App2',
  /*
        mapState(옵션) 함수는 object 를 리턴한다. 
        아래의 mapState() 함수가 리턴하는 object 의 모양은 다음과 같다.
        {
            num:()=>{},
            name:()=>{},
            addr:()=>{}
        }
        따라서 결국 이런 모양의 computed 를 정의한거나 마찬가지 이다.
        computed:{
            num(){
                $store.state.member.num 값이 리턴되는 함수
            },
            name(){
                 $store.state.member.name 값이 리턴되는 함수
            },
            addr(){
                 $store.state.member.addr 값이 리턴되는 함수
            }
        }
  */
  computed: mapState({
      num : state => state.member.num,
      name : state => state.member.name,
      addr : state => state.member.addr
  })
}
</script>


