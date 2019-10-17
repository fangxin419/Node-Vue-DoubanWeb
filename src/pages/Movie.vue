<template>
    <div class="movie">
        <Nav></Nav>
        <div class="tuwenbox">
            <PicAndText req_type="movie" title="影院热映" min="0" max="6"></PicAndText>
            <PicAndText req_type="movie" title="喜剧动画" min="6" max="11"></PicAndText>
            <PicAndText req_type="movie" title="发现好电影" min="11" max="16"></PicAndText>
            <PicAndText req_type="movie" title="新片速递" min="16" max="21"></PicAndText>
        </div>
        <div class="findbox">
            <FindBox findtype="movie"></FindBox>
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

export default {
    components:{
        Nav,
        PicAndText,
        FindBox,
        Footer
    }
}
</script>

<style scoped>
.movie{
  padding:.2rem;
}
.tuwenbox{
    margin-top: .2rem;
}
.tuwenbox>div{
    margin-bottom: .2rem;
}
.findbox{
    margin-top: .4rem;
}
.footer{
    margin-top: .3rem;
}
</style>