<template>
    <div class="recommend-content">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .recommend-content{
        display: flex;
        text-align: center;
        overflow-x: scroll;
        margin: 10px 0;
    }
</style>