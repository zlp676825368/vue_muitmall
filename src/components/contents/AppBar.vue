<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#835F41">
      <!--dom 中使用路径需要用 ~ 来识别配置的别名-->
      <img slot="item-icon" src="~assets/images/tabbar/home.svg" alt />
      <img slot="item-icon-active" src="~assets/images/tabbar/home_active.svg" alt />
      <div slot="item-title">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/categroy" activeColor="#835F41">
      <img slot="item-icon" src="~assets/images/tabbar/categroy.svg" alt />
      <img slot="item-icon-active" src="~assets/images/tabbar/categroy_active.svg" alt />
      <div slot="item-title">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#835F41">
      <img slot="item-icon" src="~assets/images/tabbar/cart.svg" alt />
      <img slot="item-icon-active" src="~assets/images/tabbar/cart_active.svg" alt />
      <div slot="item-title">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#835F41">
      <img slot="item-icon" src="~assets/images/tabbar/profile.svg" alt />
      <img slot="item-icon-active" src="~assets/images/tabbar/profile_active.svg" alt />
      <div slot="item-title">会员中心</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem
  }
};
</script>