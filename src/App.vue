<template>
  <div id="app">
    <div class="header">
      <Nav v-show="$root.$data.bNav"></Nav>
    </div>
    <router-view />
    <FNav v-show="$root.$data.bFNav" />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import FNav from "./components/FNav";
export default {
  name: "App",
  components: {
    Nav,FNav
  },
  methods: {
    checkPath(path) {
      //路由检测
      if (/index|book|movie|column/.test(path)) {
        this.$root.$data.bNav = true;
        this.$root.$data.bFNav = true;
      }
      if (/user/.test(path)) {
        this.$root.$data.bNav = false;
        this.$root.$data.bFNav = true;
      }
      if (/login|reg|detail/.test(path)) {
        this.$root.$data.bNav = false;
        this.$root.$data.bFNav = false;
      }
    }
  },
  watch: {
    $route: {
      handler(current, prev) {
        // current.path==/home|/follow|/colukn|/detail/23423234
        this.checkPath(current.path);
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style>
#app {
  font-size: 0.32rem;
  color: black;
}
</style>
