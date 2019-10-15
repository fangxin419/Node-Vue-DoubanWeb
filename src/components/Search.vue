<template>
    <div>
        <div class="headerbox">
            <span @click="closeWindow()">关闭</span>
            <input class="sousuokuang" type="text" >
        </div>
        <ul>
            <li v-for="(v,i) in getData" :key="i">
                <div class="wenzibox">
                    <p :style="{color:v.color}" class="p1">{{v.title}}</p>
                    <p :style="{color:v.scolor}" class="p2">{{v.concont}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            getData:[],
            isShow1:false
        }
    },
    methods: {
        closeWindow(){
            this.$emit("close1",this.isShow1);
            // console.log("关闭");
        }
    },
    created () {
        // this.axios({
        //     url:"/type",
        //     method:"get"
        // }).then(
        //     data=>{
        //         this.getData = data.data;
        //         // console.log("this.getData");
        //     }
        // )
    }
}
</script>

<style scoped>
ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 0.2rem;
}
li{
    width: 1rem;

}
li>div{
    width: 1rem;
}
.headerbox{
    margin-top: 0.1rem;
    width: 100%;
    padding-bottom: 0.06rem;
    border-bottom: 1px solid #e9e3e3;
}
.sousuokuang{
    width:70%;
    height: 0.26rem; 
    background-image: url("../assets/sousu.png");
    background-repeat: no-repeat;
    background-position:center 0;
    background-size: 0.26rem;
    margin-left: 0.2rem;
}
.headerbox span{
    margin-left: 0.1rem;
    color: green;
}
.wenzibox{
    height: 0.8rem;
}
.wenzibox>p{
    text-align: center;
}
.wenzibox>p:nth-child(1){
    font-size: 0.22rem;
}
.wenzibox>p:nth-child(2){
    font-size: 0.14rem;
    line-height: 0.16rem;
}
</style>