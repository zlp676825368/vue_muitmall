<template>
  <div class="item">
    <div class="left">
      <slot name="img"></slot>
    </div>
    <div class="right">
        <div class="title"><slot name="title"></slot></div>
        <div class="price">
            <slot name="newprice"></slot>
            <slot name="oriprice"></slot>
        </div>
        
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.item {
  height: 90px;
  border-bottom: 1px solid #eee;
  display: flex;
}
.left{
    padding: 5px;
}
img {
  width: 80px;
  height: 80px;
  border-radius: 4px;
}
.right{
    display: flex;
    flex-flow: column wrap;
    font-size: 14px;
}
.right>.title{
    height: 30px;
    width: 150px;
    margin-top: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.right>.price{
    flex: 1;
    padding-top: 20px;
}
</style>