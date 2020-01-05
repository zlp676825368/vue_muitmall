<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <app-bar/>
  </div>
</template>
<script>
import AppBar from 'components/contents/AppBar'
export default {
  data(){
    return {}
  },
  components:{
    AppBar
  }
}
</script>
<style scoped>
 /*css 引入方式*/
  @import "assets/css/base.css";

</style>
