<template>
  <div class="search">
    <div class="headerbox">
      <form action="/">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          @cancel="onCancel"
        />
      </form>
    </div>
    <div class="headerbox1"></div>
    <ul>
      <li v-for="(item,index) in getData" :key="index">
        <div class="findbox">
          <p :style="{color:item.color}" class="p1">{{item.title}}</p>
          <p :style="{color:item.scolor}" class="p2">{{item.concont}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      getData: []
    };
  },
  methods:{
    onCancel(){
      this.$router.go(-1);
    }
  },
  created() {
    this.$axios({
      url: "/user/search",
    }).then(res => {
      this.getData = res.data.data;
    });
  }
};
</script>

<style scoped>
.headerbox1{
  height:54px;
}
.headerbox {
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #e9e3e3;
}
ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
li {
  width: 2rem;
  margin-top:20px;
}
li .findbox {
  width: 2rem;
}
.findbox {
  height: 0.8rem;
}
.findbox > p {
  text-align: center;
}
.findbox > p:nth-child(1) {
  font-size: 0.44rem;
}
.findbox > p:nth-child(2) {
  font-size: 0.28rem;
  line-height: 0.32rem;
}
</style>