<template>
  <div class="content">
    <div class="header">
      <h2>
        <img :src="server.baseUrl + $store.state.user.data.icon" alt />
      </h2>
      <div class="user-box">
        <a href="javascript:;">{{$store.state.user.data.nikename}}</a>
        <a href="javascript:;" @click="logout">注销</a>
      </div>
      <ul class="clear">
        <li>
          <span>{{$store.state.user.data.follow}}</span>
          <p>关注</p>
        </li>
        <li>
          <span>{{$store.state.user.data.fans}}</span>
          <p class="end">粉丝</p>
        </li>
      </ul>
    </div>
    <div class="docList">
      <ul>
        <li class="gk-text">
          <i></i>
          <p>电影记录</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="mm-text">
          <i></i>
          <p>图书记录</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="cg-text">
          <i></i>
          <p>发布动态</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="sc-text">
          <i></i>
          <p>草稿箱</p>
          <b></b>
          <span>0</span>
        </li>
        <li class="my_cz">
          <i></i>
          <p>收藏夹</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "../plugins/store.js";
export default {
  beforeRouteEnter(to, from, next) {
    store.state.user.err == 0 ? next() : next("/login");
  },
  methods: {
    logout() {
      let off = confirm('确认注销用户吗?');
      off && axios({
        url: "/user/logout",
        method: "delete"
      }).then(res => {
        if (res.data.err === 0) {
          this.$router.push("/index");
          this.$store.commit("CHECK_USER", {
            err: 1,
            msg: "未登录"
          });
          window.localStorage.removeItem("user");
        }
      });
    }
  }
};
</script>

<style scoped>
.content {
  max-width: 6rem;
  margin: .2rem auto;
}
.content .header {
  width: 6rem;
  height: 3rem;
  background: #9e9a95;
  padding-top: .4rem;
}
.header h2 {
  width: 1.02rem;
  height: 1.02rem;
  border-radius: 50%;
  margin: 0 auto;
}
.header h2 img {
  width: 100%;
}
.header .user-box {
  width: 2rem;
  font-size: .26rem;
  color: #fff;
  margin: 0 auto;
  margin-top: .2rem;
  display: flex;
  justify-content: space-between;
}
.user-box a {
  color: #fff;
}
.header ul {
  margin-top: .4rem;
}
.header ul li {
  width: 50%;
  height: .7rem;
  float: left;
  color: #fff;
}
.header ul li span {
  height: .37rem;
  line-height: .37rem;
  text-align: center;
  display: block;
  font-size: .25rem;
}
.header ul li p {
  text-align: center;
  font-size: .3rem;
  height: .32rem;
  line-height: .32rem;
  border-right: 1px solid #fff;
}
.header ul li p.end {
  border: 0;
}
.content .docList {
  width: 6rem;
  margin: 0 auto;
  margin-top: .32rem;
}
.docList ul {
  border-top: 1px solid #7b7c7c;
}
.docList ul li {
  background: #fff;
  height: .79rem;
  border-top: 1px solid #bcbbba;
  border-bottom: 1px solid #7b7c7c;
}
.docList ul li span {
  float: right;
  margin-right: .14rem;
  margin-top: .26rem;
}
.docList ul li b {
  width: .21rem;
  height: .24rem;
  background: url(../assets/img/next_img.png) no-repeat 0 0;
  background-size: 100%;
  float: right;
  margin-right: .34rem;
  margin-top: .28rem;
}

.docList ul .gk-text i {
  width: .37rem;
  height: .37rem;
  background: url(../assets/img/gk_text.png) no-repeat 0 0;
  background-size: 100%;
  float: left;
  margin-left: .29rem;
  margin-top: .24rem;
}
.gk-text p {
  float: left;
  font-size: .25rem;
  margin-left: .29rem;
  margin-top: .25rem;
}
.docList ul .mm-text i {
  width: .29rem;
  height: .35rem;
  background: url(../assets/img/mm_text.png) no-repeat 0 0;
  background-size: 100%;
  float: left;
  margin-left: .32rem;
  margin-top: .24rem;
}
.mm-text p {
  float: left;
  font-size: .25rem;
  margin-left: .35rem;
  margin-top: .25rem;
}
.docList ul .cg-text i {
  width: .37rem;
  height: .37rem;
  background: url(../assets/img/cg_text.png) no-repeat 0 0;
  background-size: 100%;
  float: left;
  margin-left: .29rem;
  margin-top: .24rem;
}
.cg-text p {
  float: left;
  font-size: .25rem;
  margin-left: .29rem;
  margin-top: .25rem;
}
.docList ul .sc-text i {
  width: .37rem;
  height: .37rem;
  background: url(../assets/img/sc_text.png) no-repeat 0 0;
  background-size: 100%;
  float: left;
  margin-left: .29rem;
  margin-top: .24rem;
}
.sc-text p {
  float: left;
  font-size: .25rem;
  margin-left: .29rem;
  margin-top: .25rem;
}
.docList ul .my_cz {
  margin-top: .45rem;
}
.docList ul .my_cz i {
  width: .37rem;
  height: .37rem;
  background: url(../assets/img/my_cz.png) no-repeat 0 0;
  background-size: 100%;
  float: left;
  margin-left: .29rem;
  margin-top: .24rem;
}
.my_cz p {
  float: left;
  font-size: .25rem;
  margin-left: .29rem;
  margin-top: .25rem;
}
</style>
