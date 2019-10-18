<template>
  <div>
    <ul class="box">
      <li class="box1" v-for="(item,index) in genres" :key="index">
        <p class="findbox">
          <span>{{item.name}}</span>
          <span>&gt;</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      genres: []
    };
  },
  created() {
    this.$axios({
      url: "/user/fenlei",
      method: "get"
    }).then(res => {
      this.genres = res.data.data;
    });
  }
};
</script>

<style scoped>
.box {
  font-size:16px;
  height: 6rem;
}
.box1 {
  color: rgb(115, 187, 115);
  float: left;
  width: 50%;
  height: .6rem;
  border-top: 1px solid #d1cfcf;
  border-right: 1px solid #d1cfcf;
  box-sizing: border-box;
}
.box1 > p {
  line-height: .6rem;
  margin-left: .3rem;
}
.findbox span:nth-child(2) {
  float: right;
  margin-right: .3rem;
  color: #d1cfcf;
}
</style>