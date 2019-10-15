<template>
    <div>
        <div>
            <Nav></Nav>
        </div>
        <Xiaozu :xiaozu="xiaozua" bigtitle="租房找室友" moretitle="更多房源"></Xiaozu>
        <Xiaozu :xiaozu="xiaozub" bigtitle="来聊5块钱" moretitle="更多话题"></Xiaozu>
        <Xiaozu :xiaozu="xiaozuc" bigtitle="疯狂买买买" moretitle="更多小可爱"></Xiaozu>
        <div class="footer">
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Nav from "../components/Nav";
import XiaoZu from "../components/XiaoZu";
import Footer from "../components/Footer";

export default {
    data() {
        return {
            xiaozua:{},
            xiaozub:{},
            xiaozuc:{}
        }
    },
    components:{
        Nav,
        XiaoZu,
        Footer
    },
    created() {
        this.axios({
            url:'/xiaozu',
            method:"get"
        }).then(data=>{
            this.xiaozua = data.data.xiaozua;
            this.xiaozub = data.data.xiaozub;
            this.xiaozuc = data.data.xiaozuc;
        })
    },
}
</script>

<style scoped>
.footer{
    margin-top: 0.3rem;
}
</style>