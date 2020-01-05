<template>
    <div class="nav-cate">
        <slot></slot>
    </div>
</template>

<script>

export default {
    
}
</script>
<style scoped>
    .nav-cate{
        display: flex;
        flex-flow: row wrap;
        text-align: center;
        justify-content: space-between;
        font-size: 14px;
        border-bottom: 10px solid #eee;
    }
   
</style>