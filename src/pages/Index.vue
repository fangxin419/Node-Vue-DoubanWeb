<template>
  <div class="box">
    <div class="rootbox">
      <!-- <div v-if="">
        <router-link to="/login">登录豆瓣</router-link>
        <router-link to="/reg">注册账户</router-link>
      </div> -->
      <div>
        <router-link to="/login">登录豆瓣</router-link>
        <!-- <router-link to="/outlog">用户注销</router-link> -->
        <router-link to="/reg">注册账户</router-link>
      </div>
      <div>
        <router-link to="/movie">影院热映</router-link>
        <router-link to="/book">热门图书</router-link>
      </div>
    </div>
    <List :list-data="listData" :data-name="'home'"></List>
  </div>
</template>

<script>
import List from "../components/List";
export default {
  data() {
    return {
      listData: []
    };
  },
  components: {
    List
  },
  mounted() {
    this.$axios({
      url: "/user/home",
      params: { _page: 1, _limit: 10 }
    }).then(res => (this.listData = res.data.data));
  }
};
</script>

<style scoped>
.box {
  padding:.2rem;
  font-size:.32rem;
}
.rootbox {
  margin-top: 0.4rem;
  width: 100%;
}
.rootbox > div {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50%;
  margin-top: 0.2rem;
}
.rootbox > div > a {
  display: block;
  width: 46%;
  height: 0.8rem;
  text-decoration: none;
  background-color: #f6f6f6;
  text-align: center;
  line-height: 0.8rem;
  color: black;
}
</style>