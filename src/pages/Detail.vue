<template>
  <div class="detail">
    <div class="nav"></div>
    <div class="db_login_top">
      <a href="javascript:;" class="cancel" onclick="window.history.go(-1)">返回</a>
      <span v-show="dataName=='home'" class="category" v-html="data.name"></span>
      <span v-show="dataName=='banner'" class="category" v-html="data.category_name"></span>
    </div>
    <div>
      <Down></Down>
    </div>
    <div v-show="data" class="neirong">
      <ul v-if="!$store.state.bLoading && dataName=='home'">
        <li class="imgs">
          <img :src="data.image_hlarge" />
        </li>
        <li class="data">活动时间: {{data.begin_time}} / {{data.end_time}}</li>
        <li>活动地点:</li>
        <li class="address">{{data.address}}</li>
        <li>活动简介:</li>
        <li class="content" v-html="data.content"></li>
      </ul>

      <ul v-if="!$store.state.bLoading && dataName=='banner'">
        <li class="title" v-html="data.title"></li>
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
      id: this.$route.query.id,
      dataName: this.$route.query.dataName,
      data: {}
    };
  },
  mounted() {
    this.$axios({
      url: `/user/${this.dataName}/${this.id}`
    }).then(res => (this.data = res.data.data.detail));
  },
  activated() {
    this.id = this.$route.query.id;
    this.dataName = this.$route.query.dataName;
    this.$axios({
      url: `/user/${this.dataName}/${this.id}`
    }).then(res => (this.data = res.data.data.detail));
  },
  deactivated() {
    this.data = {};
  }
};
</script>

<style scoped>
.nav {
  height: .8rem;
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
  border-bottom: 1px solid #f0f0f0;
}
.db_login_top .cancel {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  padding: 0 20px;
  color: #42bd56;
  font-size: 16px;
  font-weight: normal;
}

.db_login_top .category {
  font-size: 20px;
  color: #42bd56;
}

.neirong {
  padding: .2rem;
  margin-top: .4rem;
  margin-bottom: 1rem;
}

.neirong ul > li {
  margin: .1rem 0;
}

.neirong .title {
  font: 700 .3rem/2 "";
}

.content,
.address {
  margin-bottom: .6rem;
  text-indent: 2em;
  font-size: .28rem;
}

.data {
  margin-bottom: .6rem;
  font-size: .24rem;
  color: green;
}
.imgs {
  width: 100%;
  text-align: center;
  margin-top: .4rem;
  margin-bottom: .4rem;
}
.imgs img {
  width: 100%;
}
</style>