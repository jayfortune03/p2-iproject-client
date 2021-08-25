<template>
  <div class="jumbotron">

    <div class="row-1">
    <div class="row">

      <div class="col-md-4">
        <div class="row">
          <div id="img-display" class="col-12">
            <img class="image" src="../assets/undraw_medicine_b1ol.svg">
          </div>
        </div> <br> <br>

        <div class="row">
          <div id="img-display" class="col-12">
            <img class="image" src="../assets/undraw_medicine_b1ol.svg">
          </div>
        </div> <br>

        <div class="row">
          <div id="img-display" class="col-12">
            <img class="image" src="../assets/undraw_medicine_b1ol.svg">
          </div>
        </div>
      </div>


      <div class="col-md-8">
        <div class="row">
          <div class="col">
            <center>
              <h1 id="welcome-message"><b>Hello John !</b></h1> <br>
              <h2 id="help-message">How can I help ?</h2> <br> <br>
            </center>
            <div class="d-flex flex-row w-4 justify-content-around">
              <button id="btn-diagnose" class="btn btn-lg">Diagnose</button>
              <button id="btn-medicine" class="btn btn-lg">Medicine</button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
          </div>
        </div>
        <div class="row">
          <div class="col">
          </div>
        </div>
      </div>
    </div>
<!-- <div class="gcse-search"></div>
<div class="gcse-searchresults-only"></div> -->
      </div>
  </div>
</template>

<script>
export default {
  created() {
    if (localStorage.getItem(`access_token`)) {
      this.$store.dispatch(`getUserData`)
      this.$store.dispatch(`getSymptoms`)
    } else {
      this.$store.dispatch(`getSymptoms`)
    }
  }
}
</script>

<style scoped>
.jumbotron {
  padding-top: 50px;
  border-radius: 20px;
  box-shadow: 10px 10px 5px rgb(184, 179, 179);
  background: #759dc7;
  position: relative;
}

#img-display {
  background: white;
  border-radius: 20px;
  position: relative;
  word-break: break-all;
}

#welcome-message {
  font-size: 90px;
}

#help-message {
  font-size: 60px;
}

.image {
  height: 100%;
  width: 100%;
  object-fit: cover
}

.btn {
  background: #5372E1;
  border-radius: 20px;
  max-width: 100%;
}

#btn-medicine {
  height:200px;
  width:400px;
}

.modal {
  color: black;
}

</style>