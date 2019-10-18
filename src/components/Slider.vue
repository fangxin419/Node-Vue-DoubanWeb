<template>
  <div class="banner">
    <van-swipe :autoplay="3000" indicator-color="white" v-show="banner">
      <van-swipe-item v-for="(item,index) of banner" :key="index">
        <router-link :to="{name:'Detail',query:{dataName,id:item._id}}">
          <img :src="item.image_lmobile" />
        </router-link>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  props: ["banner", "dataName"]
};
</script>

<style>
.van-swipe__track {
  margin-top: 10px;
  width: 100%;
  height: 200px;
}

.van-swipe__track .van-swipe-item {
  width: 100%;
  height: 100%;
}

.van-swipe__track .van-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>
