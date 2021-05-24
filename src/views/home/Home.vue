<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #nav-center>
        <div>购物街</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
    import NavBar from "@/components/common/navbar/NavBar";
    import {getHomeMulitData} from "@/network/home";

    export default{
        name: "Home",
        components:{
          NavBar
        },
      created() {
          //数据请求
         getHomeMulitData().then()
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