<template>
    <div class="footer">
        <div class="div01">
            <img src="../assets/logo.png" >
            <div>
                <p class="bigziti">豆瓣</p>
                <p class="smallziti">我们的精神部落</p>
            </div>
        </div>
        <div class="div02">
            <a class="down" href="">去APP Store免费下载iOS客户端</a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped> 
.footer{
  margin-bottom:.2rem;
}
.div01{
    display: flex;
}
.div01 img{
    
    width: .8rem;
    height: .8rem;
    margin-left: 1rem;
}
.div01>div p{
    margin-left: .4rem;
}
.bigziti{
    font-size: .4rem;
    color: green;
}
.smallziti{
    font-size: .28rem;
}
.div02{
    margin-top: .4rem;
    text-align: center;
}
.down{
    text-align: center;
    color: rgb(108, 168, 17);
}
</style>