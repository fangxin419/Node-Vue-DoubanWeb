<template>
  <div class="BroadCast">
    <div>
      <Down></Down>
    </div>
    <div class="box" v-for="(item,index) in noteDate" :key="index">
      <div>
        <img class="img" src="../assets/logo.png" />
      </div>
      <div class="neirong">
        <ul>
          <li>
            <span class="name">{{item.name}}</span>写了日记
          </li>
          <li class="riqi">{{item.begin_time}}</li>
          <li class="xiangxi">
            <p>{{item.title}}</p>
            <p>{{item.content}}</p>
          </li>
          <li class="caozuo">
            <span>点赞</span>
            <span>评论</span>
            <span>分享</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Down from "../components/Down";

export default {
  components: {
    Footer,
    Down
  },
  data() {
    return {
      noteDate: []
    };
  },
  created() {
    this.$axios({
      url: "/user/note",
      method: "get"
    }).then(res => {
      this.noteDate = res.data.data;
    });
  }
};
</script>

<style scoped>
.BroadCast{
  padding:10px;
}
li {
  list-style: none;
}
.img {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
}
.box {
  display: flex;
  margin-top: 0.3rem;
}
.name {
  font-weight: 600;
  margin-right: 0.15rem;
}
.neirong {
  margin-left: 0.15rem;
}
.xiangxi {
  border: 1px solid black;
  margin:0.12rem 0;
  padding: 0.15rem 0.3rem;
}
.xiangxi p:nth-child(1) {
  font-size: 0.30rem;
}
.xiangxi p:nth-child(2) {
  margin-top: 0.12rem;
  text-indent: 0.3rem;
  font-size: 0.24rem;
  color: #aabdd6;
}
.riqi {
  font-size: 0.18rem;
  color: #aabdd6;
}
.caozuo{
  margin-bottom:10px;
}
.caozuo span {
  font-size: 0.24rem;
  margin: 0 0.15rem;
}
.footer {
  margin-top: 0.3rem;
}
</style>