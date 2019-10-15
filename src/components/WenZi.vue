<template>
    <ul class="box">
        <li v-for="(v,i) in arr" :key="i">
            <a href="#" :style="{color:v.color}" v-if="!v.line">{{v.title}}</a>
        </li>   
    </ul>
</template>
<script>

export default {
    props:{
        arr:{
            type:Array,
            required:true
        }
    }
}
</script>

<style scoped>
.box{
        
        white-space: nowrap;
        overflow: auto;
    }
    
    .box li{
        display: inline-block;
        height: 0.6rem;
        border: 1px solid rgb(255, 172, 45);
        border-radius: .05rem;
        line-height: 0.6rem;
        padding: 0 0.3rem;
        margin-left: 0.16rem;
        margin-bottom: 0.1rem;
    }
    .box li:empty{
        widows: 100%;
        height: .01rem;
        display: block;
        border: none;
        margin: 0;
        padding: 0;
    }
</style>