<template>
    <div class="box">
        <div>
            <span>{{title}}</span>
            <span class="more">更多</span>
        </div>
        <!-- 电影 -->
        <div class="tuwen">
            <div class="imgbox" v-for="(v,i) in newMovieData" :key="i">
                <img :src="v.images.small" >
                <p>{{v.title}}</p>
            </div>
        </div>
        <!-- 图书 -->
        <div class="tuwen">
            <div class="imgbox" v-for="(v,i) in newBooksData" :key="i">
                <img :src="v.image" >
                <p>{{v.title}}</p>
                <p>
                    <el-rate
                    v-model="value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                    </el-rate>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            movieData:[],
            newMovieData:[],

            booksData:[],
            newBooksData:[],

            value: 4
        }
    },
    computed: {
        
    },
    props: {
        title:{
            type:String,
            require:false
        },
        min:{
            type:String,
            require:false
        },
        max:{
            type:String,
            require:false
        },
        req_type:{
            type:String,
            require:true
        }
    },
    created() {
        if(this.req_type=='book'){
            this.axios({
                url: "/books",
                method: "get"
                }).then(data => {
                this.booksData = data.data;
                this.newBooksData = this.booksData.filter((v,i)=>{
                    if(i>this.min && i<=this.max){
                        return i;
                    }
                })
                return this.newBooksData;
            })
        }

        if(this.req_type=='movie'){
            this.axios({
                url: "/movie",
                method: "get"
                }).then(data => {
                this.movieData = data.data;
                this.newMovieData = this.movieData.filter((v,i)=>{
                    if(i>this.min && i<=this.max){
                        return i;
                    }
                })
                return this.newMovieData;
            })
        }
    }
}
</script>

<style scoped>
.box{
    width: 100%;
}
.tuwen{
    height: 100%; 
    display: flex; 
    overflow: auto;
    margin-top: 0.08rem;
}
.imgbox{
    width: 1rem;
    margin-right: 0.1rem;
}
.imgbox>img{
    width: 1rem;
    height: 1.5rem;
}
.imgbox>p{
    font-size: 0.12rem;
    text-align: center;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.more{
    float: right;
    color: green;
    font-size: 0.14rem;
}

</style>
<style>
.el-rate__icon {
    font-size: 16px;
    margin-right: -1px;
    color: #C0C4CC;
    -webkit-transition: .3s;
    transition: .3s;
}
.el-rate__text {
    margin-left: 0.04rem;
    font-size: 12px;
    vertical-align: middle;
}
</style>