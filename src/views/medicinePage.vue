<template>
<div class="jumbotron">
    <center>
    <h1><b>MEDICINE SECTION</b></h1> <br>
    <h2>Please tell me what is your Diagnose</h2>
    <p>To search, just type "Medicine for <b>'Your Diagnose'</b>" and press <b>Enter</b></p> <br> <br>
    <Search></Search>
    </center>
</div>
</template>

<script>
import Search from '../components/search.vue'
export default {
    methods: {
    },
    components: {
        Search
    }
}
</script>

<style scoped>
.jumbotron {
    border-radius: 20px;
    background: #f19b9b;
    box-shadow: 10px 10px 5px rgb(184, 179, 179);
}

#header {
    border-radius: 20px;
    background: #f3b7b7;
    
}

#styling {
    border-radius: 20px;
    background: #ffffff;
}

h1 {
    font-size: 70px;
}

p {
    color: white;
}

</style>