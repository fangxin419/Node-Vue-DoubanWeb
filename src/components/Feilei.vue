<template>
    <div>
        <ul class="box">
            <li class="box1" v-for="(v,i) in genres" :key="i"> 
                <p class="wenzibox">
                    <span>{{v.name}}</span>
                    <span>&gt;</span>                    
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            genres:[]
        }
    },
    created () {
        this.axios({
            url:'/fenlie',
            method:'get'
        }).then(
            data=>{
                this.genres = data.data;
            }
        )
    }
}
</script>

<style scoped>
.box{
    height: 3.5rem;
}
.box1{
    color: rgb(115, 187, 115);
    float: left;
    width: 50%;
    height: 0.4rem;
    border-top: 1px solid #d1cfcf;
    border-right: 1px solid #d1cfcf;
    box-sizing: border-box;
}
.box1>p{
    line-height: 0.4rem;
    margin-left: 0.2rem;
}
.wenzibox span:nth-child(2){
    float: right;
    margin-right: 0.2rem;
    color: #d1cfcf;
}
</style>