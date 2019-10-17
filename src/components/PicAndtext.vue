<template>
  <div class="box">
    <div>
      <span>{{title}}</span>
      <span class="more">更多</span>
    </div>
    <!-- 电影 -->
    <div class="tuwen">
      <div class="imgbox" v-for="(item,index) in newMovieData" :key="index">
        <img :src="item.image" />
        <p>{{item.title}}</p>
      </div>
    </div>
    <!-- 图书 -->
    <div class="tuwen">
      <div class="imgbox" v-for="(item,index) in newBooksData" :key="index">
        <img :src="item.image" />
        <p>{{item.title}}</p>
        <p>
          <van-rate v-model="value" readonly size="6px" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieData: [],
      newMovieData: [],

      booksData: [],
      newBooksData: [],

      value: 4
    };
  },
  computed: {},
  props: {
    title: {
      type: String,
      require: false
    },
    min: {
      type: String,
      require: false
    },
    max: {
      type: String,
      require: false
    },
    req_type: {
      type: String,
      require: true
    }
  },
  created() {
    if (this.req_type == "book") {
      this.$axios({
        url: "/user/book",
        method: "get"
      }).then(res => {
        this.booksData = res.data.data;
        this.newBooksData = this.booksData.filter((item, index) => {
          if (index >= this.min && index < this.max) {
            return index;
          }
        });
        return this.newBooksData;
      });
    }

    if (this.req_type == "movie") {
      this.$axios({
        url: "/user/movie",
        method: "get"
      }).then(res => {
        this.movieData = res.data.data;
        this.newMovieData = this.movieData.filter((item, index) => {
          if (index >= this.min && index < this.max) {
            return index;
          }
        });
        return this.newMovieData;
      });
    }
  }
};
</script>

<style scoped>
.box {
  padding: 10px;
}
.tuwen {
  height: 100%;
  display: flex;
  overflow: auto;
  margin-top: 0.08rem;
}
.imgbox {
  width: 2rem;
  margin-right: 0.2rem;
}
.imgbox > img {
  width: 2rem;
  height: 3rem;
}
.imgbox > p {
  font-size: 0.24rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.more {
  float: right;
  color: green;
  font-size: 0.28rem;
}
</style>