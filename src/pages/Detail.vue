<template>
  <div class="detail">
    <div class="nav"></div>
    <div class="db_login_top">
      <a href="javascript:;" class="cancel" onclick="window.history.go(-1)">返回</a>
    </div>
    <div>
      <Down></Down>
    </div>
    <div class="neirong">
      <ul>
        <li>{{data.name}}</li>
        <li class="imgs">
          <img :src="data.image_hlarge" />
        </li>
        <li class="data">活动时间: {{data.begin_time}} / {{data.end_time}}</li>
        <li>活动地点:</li>
        <li class="address">{{data.address}}</li>
        <li>活动简介:</li>
        <li class="content" v-html="data.content"></li>
      </ul>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Down from "../components/Down";
import Footer from "../components/Footer";
export default {
  components: {
    Down,
    Footer
  },
  data() {
    return {
      data: {}
    };
  },
  mounted() {
    let id = this.$route.query.id;
    let dataName = this.$route.query.dataName;
    this.$axios({
      url: `/user/${dataName}/${id}`
    }).then(res => (this.data = res.data.data.detail));
  }
};
</script>

<style scoped>
.nav {
  height: 0.8rem;
}
.db_login_top {
  position: fixed;
  width: 100%;
  background: #fff;
  left: 0;
  top: 0;
  height: 48px;
  line-height: 48px;
  text-align: center;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
}
.db_login_top .cancel {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  padding: 0 20px;
  color: #42bd56;
  font: 16px/3 "";
  font-weight: normal;
}
.neirong {
  padding:.2rem;
  margin-top: .4rem;
  margin-bottom: 1rem;
}
.neirong ul > li {
  margin: 0.1rem 0;
}
.content,
.address {
  margin-bottom: 0.6rem;
  text-indent: 2em;
  font-size: 0.28rem;
}

.data {
  margin-bottom: 0.6rem;
  font-size: 0.24rem;
  color: green;
}
.imgs {
  width: 100%;
  text-align: center;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
}
.imgs img {
  width: 100%;
}
</style>