<template>
  <div class="book">
    <Nav></Nav>
    <div>
      <PicAndText class="bookbox" req_type="book" title="推荐书籍" min="0" max="6"></PicAndText>
      <PicAndText class="bookbox" req_type="book" title="最受关注" min="6" max="11"></PicAndText>
      <PicAndText class="bookbox" req_type="book" title="销量最高" min="11" max="16"></PicAndText>
      <PicAndText class="bookbox" req_type="book" title="最受欢迎" min="16" max="21"></PicAndText>
    </div>
    <div class="findbox">
      <FindBox findtype="book"></FindBox>
    </div>
    <div class="fenlei">
      <FenLei></FenLei>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import PicAndText from "../components/PicAndText";
import FindBox from "../components/FindBox";
import Footer from "../components/Footer";
import FenLei from "../components/FenLei";

export default {
  components: {
    Nav,
    PicAndText,
    FindBox,
    Footer,
    FenLei
  }
};
</script>

<style scoped>
.book{
  padding:.2rem;
}
.bookbox {
  margin-top: .2rem;
}
.findbox {
  margin-top: .4rem;
}
.fenlei {
  margin-top: .3rem;
}
</style>