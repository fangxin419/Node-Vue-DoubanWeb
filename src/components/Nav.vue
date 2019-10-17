<template>
  <div class="navbox">
    <div class="navbox2"></div>
    <div class="navbox1">
      <div class="logobox">
        <img src="../assets/logo.png" @click="goIndex()" />
      </div>
      <div class="abox">
        <router-link to="./movie">
          <span class="movie">电影</span>
        </router-link>
        <router-link to="./book">
          <span class="book">图书</span>
        </router-link>
        <router-link to="./broadcast">
          <span class="broadcast">广播</span>
        </router-link>
        <router-link to="./group">
          <span class="group">小组</span>
        </router-link>
      </div>
      <div class="search" @click="openbox()">
        <img src="../assets/search.png" />
      </div>
    </div>

    <!-- 搜索 -->
    <div class="searchbox" v-show="isShow">
      <div>
        <Search @close1="clo"></Search>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search";

import Router from "vue-router";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default {
  components: {
    Search
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    goIndex() {
      this.$router.push("/index");
    },
    openbox() {
      this.isShow = true;
    },
    clo(val) {
      this.isShow = val;
    }
  }
};
</script>

<style scoped>
.navbox2{
  height: 1rem;
}
.navbox1 {
  font-size:.28rem;
  height: 0.8rem;
  width: 100%;
  line-height: 0.8rem;
  position: fixed;
  background-color: white;
  top: 0;
  padding: 0.12rem 0;
  border-bottom: 1px solid #aaaaaa;
  z-index: 999;
}
.movie {
  color: #2384e8;
}
.book {
  color: #9f7860;
}
.broadcast {
  color: #e5ac13;
}
.group {
  color: #2ac8e3;
}
.abox {
  margin-left: .6rem;
}
.abox > a {
  text-decoration: none;
  margin: 0 0.1rem;
}
.logobox {
  height: 100%;
  float: left;
  line-height: 100%;
}
.logobox > img {
  width: 0.8rem;
  margin-left: 0.2rem;
}
.abox {
  float: left;
  width: 50%;
}
.search {
  display: flex;
  align-items: center;
  top:0;
  bottom:0;
  margin:auto;
}
.search > img {
  width: 0.6rem;
}
.searchbox {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: white;
}
.navbox1 {
  display: flex;
  align-items: center;
}
</style>