<template>
    <div class="content-item">
        <div class="item-img"><slot name="item-img"></slot></div> 
        <div class="item-newprice"><slot name="item-newprice"></slot></div>
        <div class="item-oriprice"><slot name="item-oriprice"></slot></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .content-item{
        width: 150px;
        padding: 10px;
        border: 1px solid #eee;
        border-left: none;
    }
    img{
        width: 100px;
        height: 100px;
        border-radius: 4px;
    }
    .item-newprice{
        line-height: 30px;
        font-size: 16px;
        color: red;
    }
    .item-oriprice{
        font-size: 14px;
        color: #777;
        text-decoration:line-through    
    }
</style>