<template>
  <div class="banner">
    <swipe class="my-swipe" :speed="1000">
      <swipe-item :class="'slide'+(index+1)" v-for="(item,index) of banner" :key="item._id">
        <router-link :to="{name:'Detail',query:{dataName,id:item._id}}">
          <img :src="server.baseUrl + item.image_lmobile" />
        </router-link>
      </swipe-item>
    </swipe>
  </div>
</template>
<script>
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";
export default {
  props: ["banner","dataName"],
  components: {
    swipe: Swipe,
    "swipe-item": SwipeItem
  }
};
</script>

<style scoped>
.my-swipe {
  margin-top: 10px;
  height: 200px;
  text-align: center;
}

.slide1 {
  height: 200px;
}

.slide2 {
  height: 200px;
}

.slide3 {
  height: 200px;
}

.my-swipe img {
  width: 100%;
  height: 100%;
}
</style>
