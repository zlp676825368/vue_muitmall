<template>
  <div>
    <!--顶部导航-->
    <nav-bar class="cate-nav">
      <div slot="center">分类</div>
    </nav-bar>
    <div class="content">
      <div class="left">
        <!--左侧导航栏-->
        <div
          :class="[currentIndex===index?'active':'left-item']"
          v-for="(item,index) in categorys"
          :key="index"
          @click="cateItemClick(index)"
        >
          <span>{{item.firstCategoryName}}</span>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <span
            v-for="(item,index) in childCategory"
            :class="[childCurrentIndex===index?'childActive':'childColor']"
            :key="index"
            @click="childItemClick(index)"
          >{{item.secondCategoryName}}</span>
        </div>
        <!--商品列表-->
        <good>
          <goods-item v-for="(item,index) in goods" :key="index">
            <img slot="img" :src="item.image" alt="">
            <span slot="title">{{item.name}}</span>
            <span slot="newprice">￥{{item.presentPrice}}</span>
            <span slot="oriprice">￥{{item.oriPrice}}</span>
          </goods-item>
        </good>
      </div>
    </div>
  </div>
</template>
<script>
import { getCateGroys } from "network/categroy"; //请求
import NavBar from "components/common/navbar/NavBar"; //顶部
import { Goods, GoodsItem } from "./goods/index";
export default {
  data() {
    return {
      categorys: [],
      currentIndex: 0,
      childCurrentIndex: 0,
      childCategory: {
        type: Array,
        value: []
      },
      goods: []
    };
  },
  methods: {
    /**
     * 导航点击事件
     */
    cateItemClick(index) {
      this.currentIndex = index;
      this.childCategory = this.categorys[this.currentIndex].secondCategoryVO;
      this.childCurrentIndex=0;
      console.log(this.childCategory);
    },
    /**
     * 子菜单点击事件
     */
    childItemClick(childId) {
        this.childCurrentIndex=childId;
      //请求数据
      console.log(childId);
    }
  },
  created() {
    getCateGroys().then(res => {
      this.categorys = res.data.category;
      this.categorys.map(item => {
        if (item.secondCategoryVO.length > 1) {
          item.secondCategoryVO.unshift({
            secondCategoryName: "全部",
            firstCategoryId: "",
            secondCategoryId: ""
          });
        }
      });
      this.childCategory = this.categorys[this.currentIndex].secondCategoryVO;
      this.goods = res.data.recommend;
      console.log(this.goods);
    });
  },
  components: {
    NavBar,
    GoodsItem,
    'good':Goods
  }
};
</script>
<style scoped>
.cate-nav {
  background-color: var(--color-tint);
}
.content {
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  bottom: 49px;
  top: 44px;
}
.left {
  width: 80px;
  text-align: center;
  border-right: 1px solid #eee;
  overflow-y: scroll;
  font-size: 14px;
}
.left-item {
  line-height: 50px;
  border-bottom: 1px solid #eee;
}
.active {
  line-height: 50px;
  background-color: #eee;
  border-bottom: 1px solid #fff;
  color: var(--color-tint);
}
.right {
  flex: 1;
}
.right > .top {
  line-height: 40px;
  font-size: 12px;
  border-bottom: 1px solid #eee;
}
.top > span {
  padding: 0 10px;
}
.childActive {
  color: var(--color-tint);
}
.childColor {
  color: #666;
}
</style>