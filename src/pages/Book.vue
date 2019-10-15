<template>
    <div>
        <Nav></Nav>
        <div>
            <PicAndtext class="bookbox" req_type="book" title="最受关注类书|虚构类" min="1" max="10"></PicAndtext>
            <PicAndtext class="bookbox" req_type="book" title="最受关注类书|非虚构类" min="11" max="20">
            </PicAndtext>
        </div>
        <div class="wenzibox">
            <Wenzibox wenzitype="book"></Wenzibox>
        </div>
        <div class="fenlei">
            <Feilei></Feilei>
        </div>
        <div class="footer">
            <Footer></Footer>
        </div>
        
    </div>
</template>

<script>
import Nav from "../components/Nav";
import PicAndtext from "../components/PicAndtext";
import WenZibox from "../components/WenZiBox";
import Footer from "../components/Footer";
import Feilei from "../components/Feilei";


export default {
    components:{
        Nav,
        PicAndtext,
        WenZibox,
        Footer,
        Feilei
    }
}
</script>

<style scoped>
.bookbox{
    margin-top: 0.15rem;
}
.wenzibox{
    margin-top: 0.2rem;
}
.fenlei{
    margin-top: 0.3rem;
}
</style>