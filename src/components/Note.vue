<template>
    <div>
        <div class="box" v-for="(v,i) in noteDate" :key="i">
            <div>
                <img class="img" src="../assets/logo.png" />
            </div>
            <div class="neirong">
                <ul>
                <li>
                    <span class="name">{{v.name}}</span>写了日记
                </li>
                <li class="riqi">{{v.begin_time}}</li>
                <li class="xiangxi">
                    <p>{{v.title}}</p>
                    <p>{{v.content}}</p>
                </li>
                <li class="caozuo">
                    <span>点赞</span>
                    <span>评论</span>
                    <span>分享</span>
                </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        noteDate: []
        };
    },
    created() {
        this.axios({
        url: "/note",
        method: "get"
        }).then(data => {
        // console.log(data.data);
        this.noteDate = data.data;
        });
    }
};
</script>

<style scoped>
li{
    list-style: none;
}
.img{
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
}
.box{
    display: flex;
    margin-top: 0.1rem;
}
.name{
    font-weight: 600;
    margin-right: 0.1rem;
}
.neirong{
    margin-left: 0.1rem;
}
.xiangxi{
    border: 1px solid black;
    margin-bottom: 0.08rem;
    padding: 0.1rem 0.2rem;
}
.xiangxi p:nth-child(1){
    font-size: 0.16rem;
}
.xiangxi p:nth-child(2){
    margin-top: 0.05rem;
    text-indent: 0.2rem;
    font-size: 0.12rem;
    color: #aabdd6;
}
.riqi{
    font-size: 0.14rem;
    color: #aabdd6;
}
.caozuo span{
    font-size: 0.14rem;
    margin: 0 0.1rem;
}
</style>