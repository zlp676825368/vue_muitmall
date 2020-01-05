<template>
  <div class="item" @click="itemClick">
    <slot name="cate-image"></slot>
    <slot name="cate-title"></slot>
  </div>
</template>

<script>
export default {
    props:{
        id:{
            type:String,
            value:''
        },
        path:{
            type:String,
            value:''
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.path)
        }
    }
};
</script>
<style scoped>
.item{
    flex: 20%;
    margin: 10px 0;
}
.item img {
  width: 50px;
  height:50px;
  margin-bottom: 10px;
}
.item > span{
    display: inline-block;
}
</style>