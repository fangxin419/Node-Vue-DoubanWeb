<template>
  <ul class="box">
    <li v-for="(item,index) in arr" :key="index">
      <a href="#" :style="{color:item.color}" v-if="!item.line">{{item.title}}</a>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    arr: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.box {
  white-space: nowrap;
  overflow: auto;
}

.box li {
  display: inline-block;
  height: 1.2rem;
  border: 1px solid rgb(255, 172, 45);
  border-radius: .1rem;
  line-height: 1.2rem;
  padding: 0 .6rem;
  margin-left: .32rem;
  margin-bottom: .2rem;
}
.box li:empty {
  widows: 100%;
  height: .02rem;
  display: block;
  border: none;
  margin: 0;
  padding: 0;
}
</style>