<template>
  <div class="fnav">
    <div class="foot"></div>
    <div class="foot-btn">
      <ul>
        <router-link tag="li" class="index" active-class="index-active" to="/index">
          <a href="javascript:;"></a>
        </router-link>
        <router-link tag="li" class="write" to="/write">
          <a href="javascript:;"></a>
        </router-link>
        <router-link tag="li" class="users" active-class="user-active" to="/users">
          <a href="javascript:;"></a>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.foot {
  width: 100%;
  height: .62rem;
}
.foot-btn {
  width: 100%;
  height: .8rem;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #9e9a95;
}
.foot-btn ul {
  width: 4.08rem;
  margin: 0 auto;
}
.foot-btn ul li {
  float: left;
}
.foot-btn ul li a {
  display: block;
  width: 100%;
  height: 100%;
}
.foot-btn ul .index {
  width: .44rem;
  height: .59rem;
  background: url(../assets/img/home1.png) no-repeat 0 0;
  background-size: 100%;
  margin-top: .1rem;
}
.foot-btn ul .write {
  width: .9rem;
  height: .9rem;
  background: url(../assets/img/write.png) no-repeat 0 0;
  background-size: 100%;
  margin:-.1rem 0 0 1.18rem;
}
.foot-btn ul .users {
  width: .39rem;
  height: .63rem;
  background: url(../assets/img/my.png) no-repeat 0 0;
  background-size: 100%;
  margin-left: 1rem;
  margin-top: .07rem;
}
.foot-btn ul .index-active {
  background: url(../assets/img/home.png) no-repeat 0 0;
  background-size: 100%;
}
.foot-btn ul .user-active {
  background: url(../assets/img/my1.png) no-repeat 0 0;
  background-size: 100%;
}
</style>