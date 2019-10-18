<template>
    <div class="box">
        <div class="box1">
            <p>{{bigtitle}}</p>
            <div class="smallbox" v-for="(v,i) in xiaozu" :key="i">
                <ul>
                    <li class="lione">
                        <img :src="v.images.small" >
                        <span>{{v.title}}</span>
                        <span class="num">{{v.group_member}}人</span>
                    </li>
                    <li class="litow">
                        <span>{{v.group_topic.time}}</span>
                        <span>{{v.group_topic.title}}</span>
                    </li>
                </ul>
            </div>
            <p class="more"><a>{{moretitle}}</a></p>
        </div>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    props:{
        xiaozu:{
            
        },
        bigtitle:{
            type:String,
            require:true
        },
        moretitle:{
            type:String,
            require:true
        }
    }
}

</script>

<style scoped>
.box{
    padding: 0 .2rem;
}
.box1{
    margin-top: .2rem;
}
.smallbox{
    margin-top: .2rem;
    border-bottom: 1px solid #aaabaa;
    padding-bottom: .1rem;
}
.lione{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
/* .lione img{
    width: 30%;
} */
.lione span:nth-child(2){
    width: 45%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.lione span:nth-child(3){
    width: 25%;
    text-align: right;
}
.litow{
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    margin-top: .1rem;
    color:  #aaabaa;
}
.num{
    color: #aaabaa;
}
.more{
    text-align: center;
    text-decoration: none;
    margin-top: .1rem;
    
}
.more a{
    color: green;
}
</style>