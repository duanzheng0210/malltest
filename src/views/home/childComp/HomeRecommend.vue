<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" class="recommend-img">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    recommends:{
      type:Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
}

.recommend-item{
  flex: 1;
  text-align: center;
}

.recommend-img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}


</style>