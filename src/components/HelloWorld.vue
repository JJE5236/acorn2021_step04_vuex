<template>
  <div class="hello">
      <h3>HelloWorld Component</h3>
      <p> 오늘의 운세 : <strong>{{$store.state.fortuneToday}}</strong></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
 
}
</script>
<style scoped>
  .hello{
    background-color: yellow;
  }
</style>
