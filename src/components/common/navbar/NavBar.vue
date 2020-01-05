<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.nav-bar {
  line-height: 44px;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  text-align: center;
  color: #fff;
  font-size: 18px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .1)
}
.left {
  flex: 1;
}
.right {
  flex: 1;
}
.center {
  flex: 4;
}
</style>