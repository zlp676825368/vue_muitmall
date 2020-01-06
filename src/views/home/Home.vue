<template>
  <div>
    <!--顶部-->
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <!--轮播图-->
    <swiper>
      <swiper-item v-for="item in slides" :key="item.goodsId">
        <a :href="item.link">
          <img class="swiper-img" :src="item.image" alt />
        </a>
      </swiper-item>
    </swiper>
    <!--分类导航-->
    <nav-cate>
      <nav-cate-item
        v-for="item in category"
        :key="item.firstCategoryId"
        :id="item.firstCategoryId"
        path="/categroy"
      >
        <img slot="cate-image" :src="item.image" alt />
        <div slot="cate-title">{{item.firstCategoryName}}</div>
      </nav-cate-item>
    </nav-cate>
    <!--商品推荐-->
    <div class="recommend">
      <p>推荐商品</p>
      <re-commend>
        <re-commend-item v-for="item in recommend" :key="item.goodsId">
          <img slot="item-img" :src="item.image" alt />
          <span slot="item-newprice">￥{{item.presentPrice}}</span>
          <span slot="item-oriprice">￥{{item.oriPrice}}</span>
        </re-commend-item>
      </re-commend>
    </div>
    <!--广告-->
    <adverts>
      <img slot="top" :src="floor1Pic.PICTURE_ADDRESS" >
      <img v-if="floor1.length>0" slot="left-top" :src="floor1[0].image" alt="">
      <img v-if="floor1.length>0" slot="left-bottom" :src="floor1[1].image" alt="">
      <img v-if="floor1.length>0" slot="right-top" :src="floor1[2].image" alt="">
      <img v-if="floor1.length>0" slot="right-center" :src="floor1[3].image" alt="">
      <img v-if="floor1.length>0" slot="right-bottom" :src="floor1[4].image" alt="">
    </adverts>
    <!--火爆专区-->
    <p class="hot-title">火爆专区</p>
    <hot>
      <hot-item v-for="item in recommend" :key="item.goodsId">
        <img slot="item-img" :src="item.image" alt="">
        <span slot="item-title">{{item.name}}</span>
        <span slot="item-oriprice">￥{{item.presentPrice}}</span>
        <span slot="item-newprice">￥{{item.oriPrice}}</span>
      </hot-item>
    </hot>
    <div class="bottom"></div>
  </div>
</template>

<script>
import { getHomeData } from "network/home"; //request请求
import { Swiper, SwiperItem } from "components/common/swiper/index"; //轮播组件
import NavBar from "components/common/navbar/NavBar"; //顶部组件
import { NavCate, NavCateItem } from "components/common/navcate/index"; //分类组件
import { Recommend, RecommendItem } from "./recommend/index"; //推荐组件
import Advert from "./advert/Advert"; //广告组件
import {Hot,HotItem} from "./hot/index"; //火爆专区
export default {
  data() {
    return {
      slides: [],
      category: [],
      recommend: [],
      floor1Pic:{},
      floor1:[]
    };
  },
  created() {
    getHomeData().then(res => {
      this.slides = res.data.slides;
      this.category = res.data.category;
      this.recommend = res.data.recommend;
      this.floor1Pic =res.data.floor1Pic;
      this.floor1=res.data.floor1;
      console.log(res.data);
    });
  },
  components: {
    Swiper,
    SwiperItem,
    NavBar,
    NavCate,
    NavCateItem,
    Hot,
    HotItem,
    'adverts':Advert,
    "re-commend": Recommend,
    "re-commend-item": RecommendItem
  }
};
</script>
<style scoped>
.swiper-img {
  height: 150px;
  width: 100%;
}
.home-nav {
  background-color: var(--color-tint);
}
.recommend {
  display: flex;
  flex-direction: column;
}
.recommend p {
  font-size: 14px;
  font-weight: 700;
  padding-top: 10px;
  text-align: center;
  color: var(--color-tint)
}
.hot-title{
  font-size: 14px;
  font-weight: 700;
  line-height: 40px;
  text-align: center;
  color: var(--color-tint)
}
.bottom{
  margin-bottom: 50px;
}
</style>