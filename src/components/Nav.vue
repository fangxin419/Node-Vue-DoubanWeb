<template>
  <div class="navbox">
    <div class="navbox2"></div>
    <div class="navbox1">
      <div class="logobox">
        <img src="../assets/logo.png" @click="goIndex()" />
      </div>
      <div class="abox">
        <router-link to="/movie">
          <span class="movie">电影</span>
        </router-link>
        <router-link to="/book">
          <span class="book">图书</span>
        </router-link>
        <router-link to="/shop">
          <span class="shop">商城</span>
        </router-link>
        <router-link to="/broadcast">
          <span class="broadcast">广播</span>
        </router-link>
      </div>
      <div class="search">
        <router-link to="/search">
          <img src="../assets/search.png" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goIndex() {
      this.$router.push("/index");
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
  height: .8rem;
  width: 100%;
  line-height: .8rem;
  position: fixed;
  background-color: white;
  top: 0;
  padding: .12rem 0;
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
  margin: 0 .1rem;
}
.logobox {
  height: 100%;
  float: left;
  line-height: 100%;
}
.logobox > img {
  width: .8rem;
  margin-left: .2rem;
}
.abox {
  float: left;
  width: 50%;
}
.search {
  width: .6rem;
  height:.6rem;
  position: absolute;
  top:0;
  bottom:0;
  right:20px;
  margin:auto 0;
}
.search img {
  width: .6rem;
}
.navbox1 {
  display: flex;
  align-items: center;
}
</style>