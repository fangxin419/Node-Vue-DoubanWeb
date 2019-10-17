<template>
  <div>
    <p>
      <Find :arr="getmovieText"></Find>
      <Find :arr="getbookText"></Find>
    </p>
  </div>
</template>

<script>
import Find from "./Find";

export default {
  data() {
    return {
      getmovieText: [],
      getbookText: []
    };
  },
  props:["findtype"],
  components: {
    Find
  },
  created() {
    if (this.findtype == "movie") {
      this.$axios({
        url: "/user/findmovie",
        method: "get"
      }).then(res => {
        this.getmovieText = res.data.data;
      });
    }
    if (this.findtype == "book") {
      this.$axios({
        url: "/user/findbook",
        method: "get"
      }).then(res => {
        this.getbookText = res.data.data;
      });
    }
  }
};
</script>

<style>
</style>