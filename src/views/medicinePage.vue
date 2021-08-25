<template>
  <div class="jumbotron">
    <div class="row">
        <div id="header" class="col-md-7 card">
            <center>
            <div class="card-body">
            <h1>Medicine</h1> <br> <br>
                <h1>Please tell us what is your Diagnose</h1>
                <p>To search, just type "Medicine for <b>'Your Diagnose'</b>"</p>
            </div>
            </center>
      </div>
        <div id="styling" class="col-md-5 card d-flex flex-column">
            <div class="gcse-search"></div>
            <div class="gcse-searchresults-only"></div>
        </div>
  </div>
  </div>
</template>

<script>
export default {

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