<template>
<div class="jumbotron">

    <center>
    <h1><b>MEDICINE SECTION</b></h1> <br> <br>
    <h1>Please tell us what is your Diagnose</h1>
    <p>To search, just type "Medicine for <b>'Your Diagnose'</b>" and press <b>Enter</b></p> <br> <br>
    <Search></Search>
    </center>
<!-- <div class="gcse-search"></div>
<div class="gcse-searchresults-only"></div> -->
</div>
</template>

<script>
import axios from 'axios'
import Search from '../components/search.vue'
export default {
    methods: {
        doSearch: function(){
            var app = this;
            let searchQuery = `Panadol`

            if (searchQuery != undefined && searchQuery !== "") {
                let API_KEY = "AIzaSyBAEEvhRcBk8FVOmxv6jJON2VhMUpqQgI8";
                let CSE_ID = "000680021646118888977:u60wgdclz_0";
                axios.get('https://www.googleapis.com/customsearch/v1?key='+API_KEY+'&cx='+CSE_ID+'&q=' + searchQuery)
                    .then(function (response) {
                        // app.searchResult = response.data;
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }
        }
            //console.log(this.q);
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
}

#header {
    border-radius: 20px;
    background: #f3b7b7;
    
}

#styling {
    border-radius: 20px;
    background: #ffffff;
}

p {
    color: white;
}

</style>