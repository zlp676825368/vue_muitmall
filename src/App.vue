<template>
  <div id="app">
    <!-- <nav-bar/> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <app-bar/>
  </div>
</template>
<script>
import AppBar from 'components/contents/AppBar'
import NavBar from "components/common/navbar/NavBar"; //顶部
export default {
  data(){
    return {}
  },
  components:{
    AppBar,NavBar
  }
}
</script>
<style scoped>
 /*css 引入方式*/
  @import "assets/css/base.css";

</style>
