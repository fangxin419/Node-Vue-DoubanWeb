<template>
    <div>
        <Nav></Nav>
        <div>
            <Down></Down>
        </div>
        <Note></Note>
        <div class="footer">
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Nav from "../components/Nav";
import Note from "../components/Note";
import Footer from "../components/Footer";
import Down from '../components/Down'

export default {
    components:{
        Nav,
        Note,
        Footer,
        Down
    }
}
</script>

<style scoped>
    .footer{
        margin-top: 0.3rem;
    }
</style>