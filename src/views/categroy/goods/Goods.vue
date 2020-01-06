<template>
    <div class="goods">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .goods{
        display: flex;
        flex-flow: column wrap;
        overflow-y: scroll;
    }
</style>