<template>
  <div class="box">
    <Slider :banner="$store.state.banner" :data-name="'banner'"></Slider>
    <div class="rootbox">
      <div v-if="$store.state.user.err==1">
        <router-link to="/login">登录豆瓣</router-link>
        <router-link to="/reg">注册账户</router-link>
      </div>
    </div>
    <List :list-data="$store.state.home" :data-name="'home'"></List>
  </div>
</template>

<script>
import Slider from "../components/Slider";
import List from "../components/List";
export default {
  components: {
    List,
    Slider
  },
  activated() {
    this.$store.dispatch("UPDATE_HOME");
    this.$store.dispatch("UPDATE_BANNER");
  }
};
</script>

<style scoped>
.box {
  padding: .2rem;
  font-size: .32rem;
}
.rootbox {
  margin-top: .4rem;
  width: 100%;
}
.rootbox > div {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50%;
  margin-top: .2rem;
}
.rootbox > div > a {
  display: block;
  width: 46%;
  height: .8rem;
  text-decoration: none;
  background-color: #f6f6f6;
  text-align: center;
  line-height: .8rem;
  color: black;
}
</style>