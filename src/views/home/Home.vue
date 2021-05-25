<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #nav-center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>
    import NavBar from "@/components/common/navbar/NavBar";
    import HomeSwiper from "@/views/home/childComp/HomeSwiper";
    import HomeRecommend from "@/views/home/childComp/HomeRecommend";
    import {getHomeMulitData} from "@/network/home";

    export default{
      name: "Home",
      components:{
        NavBar,
        HomeSwiper,
        HomeRecommend
      },
      data() {
        return {
          banners: [],
          recommends: [],
        }
      },
      created() {
         //数据请求
         getHomeMulitData().then(res =>{
             console.log(res);
             this.banners = res.data.data.banner.list;
             this.recommends = res.data.data.recommend.list;
         })
      }
    }
</script>

<style lang="less" scoped="scoped">
.home-nav {
  color: #fff;
  background-color: deeppink;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

</style>