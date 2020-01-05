<template>
    <div class="adverts">
        <div class="top"><slot name="top"></slot></div>
        <div class="content">
            <div class="left">
                <slot name="left-top"></slot>
                <slot name="left-bottom"></slot>
            </div>
            <div class="right">
                <slot name="right-top"></slot>
                <slot name="right-center"></slot>
                <slot name="right-bottom"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.top{
    border: 0;
    margin: 0;
    padding: 0;
}
    .top img{
        height: 100%;
        width: 100%;
    }
    .content{
        display: flex;
    }
    .left{
        flex: 1;
        height: 300px;
        flex-flow: column wrap
    }
    .left img{
        flex: 1;
        height: 50%;
        width: 100%;
        padding: 0;
    }
    .right{
        flex: 1;
        height: 300px;
        flex-flow: column wrap;
    }
    .right img{
        flex: 1;
        height: 33.3%;
        width: 100%;
        padding: 0;
    }
</style>