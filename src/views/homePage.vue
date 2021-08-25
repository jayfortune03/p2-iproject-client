<template>
  <div class="jumbotron">

    <div class="row">
        <div id="header" class="col-md-4">
          <!-- <img src="p2-iproject-client/src/assets/undraw_medicine_b1ol.png"> -->
      </div>
        <div id="styling" class="col-md-8 d-flex flex-column justify-content-center align-items-center">
            <h1><b>Hello John !</b></h1> <br>
            <h2>How can I help ?</h2> <br>
          <div class="d-inline">
            <button id="btn-diagnose" class="btn btn-lg">Diagnose</button>
          </div>
          <div class="d-inline">
            <button class="btn btn-lg">Medicine</button>
          </div>
        </div>
<!-- <div class="gcse-search"></div>
<div class="gcse-searchresults-only"></div> -->
        <div id="landing-page" class="jumbotron col-md-4">
        </div>
          <div id="styling" class="col-md-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

        <div id="header" class="jumbotron col-md-4">
        </div>
          <div id="styling" class="col-md-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
  padding-top: 50px;
  border-radius: 20px;
  box-shadow: 10px 10px 5px rgb(184, 179, 179);
  background: #759dc7;
  position: relative;
}

#header {
  background: white;
  background-image:url('../assets/undraw_medicine_b1ol.svg');
  background-size: cover;
  border-radius: 20px;
  position: relative;
  word-break: break-all;
}

#landing-page {
  background: white;
  background-image:url('../assets/undraw_medicine_b1ol.svg');
  background-size: 1105px 783px;
  border-radius: 20px;
  position: relative;
  word-break: break-all;
}

#styling {
  color: aliceblue;
  padding-left: 50px;
  position: relative;
  word-break: break-all;
}

p {
  color: aliceblue;
}

.btn {
  background: #5372E1;
  border-radius: 20px;
  max-width: 100%;
}


.modal {
  color: black;
}

</style>