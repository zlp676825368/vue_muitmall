<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-title"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //isActive:false
    };
  },
  props: {
    path: String,
    activeColor:{
        type:String,
        default:"red"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle(){
        return this.isActive? {color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick() {
        /**
         * 如果在同一个活跃的item连续点击会报错，
         * 原因在于当前传递过来的路径与活跃的路径相同
         * router会报错误信息
         * */
      if (this.$route.fullPath !== this.path) {
        this.$router.replace(this.path);
      }
    }
  }
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 5px 0;
}
</style>