<template>
  <div class="newsList">
    <p class="title">豆瓣热点:</p>
    <div class="smallbox" v-for="(item,index) in listData" :key="index">
      <router-link :to="{name:'Detail',query:{dataName,id:item._id}}">
        <div class="wenzi">
          <p class="p1">{{item.title}}</p>
          <p class="p2">{{item.title}}</p>
        </div>
        <div class="img">
          <img :src="item.image_lmobile" />
        </div>
        <div>
          <span class="time">{{item.time_str}}</span>
          <span class="category_name">{{item.category_name}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["listData", "dataName"]
};
</script>

<style scoped>
.title {
  margin-top: 0.6rem;
  font: 700 0.4rem/1.5 "";
}
.wenzi {
  width: 70%;
  height: 100%;
  float: left;
  overflow: hidden;
}
.img {
  width: 30%;
  height: 100%;
  float: left;
}
.img img {
  width: 100%;
  height: 96%;
}
.smallbox {
  width: 100%;
  height: 2.4rem;
  border-bottom: 1px solid #aaaaaa;
  margin-bottom: 0.1rem;
  padding: 0.6rem 0;
}
.p1 {
  font-size: 0.28rem;
  margin-bottom: 0.4rem;
}
.p2 {
  font-size: 0.24rem;
  color: #aaaaaa;
}
.time {
  float: left;
  color: burlywood;
  font-size: 0.28rem;
}
.category_name {
  float: right;
  margin-right: 0.2rem;
  color: rgb(11, 78, 165);
  font-size: 0.28rem;
}
</style>
