<template>
    <div>
        <p>
            <wenzi :arr="getmovieText"></wenzi>
            <wenzi :arr="getbookText"></wenzi>

        </p>
    </div>
</template>

<script>
import WenZi from './WenZi'

export default {
    data() {
        return {
            getmovieText:[],
            getbookText:[]
        }
    },
    props: {
        wenzitype:{

        }
    },
    components: {
        WenZi
    },
    created () {
        if(this.wenzitype=="movie"){
            this.axios({
            url:"/faxianhaodianying",
            method:"get"
                }).then(
                data=>{
                    this.getmovieText = data.data;
                    // console.log(data);
                }
            )
        }
        if(this.wenzitype=="book"){
            this.axios({
            url:"/goodBooks",
            method:"get"
                }).then(
                data=>{
                    this.getbookText = data.data;
                    // console.log(data);
                }
            )
        }
        
    }

}
</script>

<style>

</style>