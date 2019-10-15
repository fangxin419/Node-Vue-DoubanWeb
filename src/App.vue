<template>
  <div id="app">
    <div class="header">
      <Loading v-show="$store.state.bLoading"></Loading>
      <Nav v-show="$store.state.bNav"></Nav>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <FNav v-show="$store.state.bFoot"></FNav>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import FNav from "./components/FNav";
import Loading from "./components/Loading";

import { VIEW_NAV, VIEW_FOOT } from "./store/types.js";
export default {
  name: "App",
  components: {
    Nav,
    FNav,
    Loading
  },
  methods: {
    checkPath(path) {
      //路由检测
      if (/index|follow|column/.test(path)) {
        this.$store.dispatch(VIEW_NAV, true);
        this.$store.dispatch(VIEW_FOOT, true);
      }
      if (/user/.test(path)) {
        this.$store.dispatch(VIEW_NAV, false);
        this.$store.dispatch(VIEW_FOOT, true);
      }
      if (/login|reg|detail/.test(path)) {
        this.$store.dispatch(VIEW_NAV, false);
        this.$store.dispatch(VIEW_FOOT, false);
      }
    }
  },
  watch: {
    $route: {
      handler(current, prev) {
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
