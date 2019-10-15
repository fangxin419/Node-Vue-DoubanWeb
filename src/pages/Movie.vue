<template>
    <div>
        <Nav></Nav>
        <div class="tuwenbox">
            <PicAndtext req_type="movie" title="影院热映" min="1" max="10" ></PicAndtext>
            <PicAndtext req_type="movie" title="免费在线观影" min="11" max="20" ></PicAndtext>
            <PicAndtext req_type="movie" title="新片速递" min="21" max="30" ></PicAndtext>
            <PicAndtext req_type="movie" title="发现好电影" min="31" max="40" ></PicAndtext>
        </div>
        <div class="wenzibox">
            <Wenzibox wenzitype="movie"></Wenzibox>
        </div>
        <div class="footer">
            <Footer></Footer>
        </div>
    </div>
</template>

<script>

import Nav from "../components/Nav";
import PicAndtext from "../components/PicAndtext";
import WenZiBox from "../components/WenZiBox";
import Footer from "../components/Footer";

export default {
    components:{
        Nav,
        PicAndtext,
        WenZiBox,
        Footer
    }
}
</script>

<style scoped>
.tuwenbox{
    margin-top: 0.2rem;
    padding: 0 0.2rem;
}
.tuwenbox>div{
    margin-bottom: 0.2rem;
}
.wenzibox{
    margin-top: 0.2rem;
}
.footer{
    margin-top: 0.3rem;
}
</style>