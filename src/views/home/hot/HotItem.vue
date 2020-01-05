<template>
    <div class="hot-item">
        <div class="item-img"><slot name="item-img"></slot></div>
        <div class="item-title"><slot name="item-title"></slot></div>
        <div class="item-oriprice"><slot name="item-oriprice"></slot></div>
        <div class="item-newprice"><slot name="item-newprice"></slot></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .hot-item{
        flex: 50%;
        height: 300px;
        padding: 10px;
        border: 1px solid #eee;
        text-align: center;
    }
    img{
        border-radius: 4px;
        width: 100%;
        height: 220px;
    }
    .item-title{
        width: 130px;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .item-oriprice{
        margin: 5px 0;
        color: red;
        font-size: 14px;
    }
    .item-newprice{
        color: #999;
        font-size: 12px;
        text-decoration: line-through
    }
</style>