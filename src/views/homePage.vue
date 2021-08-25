<template>
  <div class="jumbotron"> 

    <div class="row">
      <div class="col-lg-5 col-sm-12 left">
        <img class="image fload-left" src="../assets/undraw_play_time_7k7b.svg">
      </div>
      <div class="col-lg-7 col-sm-12 right"> 
        <h2>
            <center>
              <h1 id="welcome-message" v-if="loginInfo"><b>Hello {{userInfo.firstName}} !</b></h1>
              <h1 id="welcome-message" v-if="!loginInfo"><b>Hello there !</b></h1> <br>
              <h2 id="help-message">How can I help ?</h2> <br> <br>
            </center>
            <div class="d-flex right-text flex-row w-4 col-xs-4 justify-content-between">
              <router-link to="/diagnose" id="btn-diagnose" class="btn btn-lg fw-bold text-uppercase">
                DIAGNOSE
              </router-link>
              <router-link to="/medicine" id="btn-medicine" class="btn btn-lg fw-bold text-uppercase">
                MEDICINE
              </router-link>
            </div>
        </h2>
      </div>
    </div>

      <div class="row">
        <div class="col-lg-5 col-sm-12 left">
            <img class="image2 fload-left" src="../assets/undraw_medicine_b1ol.svg">
        </div>
        <div class="col-lg-7 right-text col-sm-12">
          <center>
              <h3 id="medicine-message"><b>Didn’t know what sickness are you having? Check it here!</b></h3> <br>
          </center>
            <div class="d-flex flex-row w-4 justify-content-center">
              <router-link to="/diagnose" id="btn-diagnose" class="btn btn-lg fw-bold text-uppercase">
                DIAGNOSE
              </router-link>
            </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-5 col-sm-12 left">
            <img class="image3 float-left" src="../assets/undraw_medicine_b1ol.svg">
        </div>
        <div class="col-lg-7 right-text col-sm-12">
          <center>
              <h3 id="medicine-message"><b>Wanna know any type of medicine? Check it Here!</b></h3> <br>
          </center>
            <div class="d-flex flex-row w-4 justify-content-center">
              <router-link to="/medicine" id="btn-medicine" class="btn btn-lg fw-bold text-uppercase">
                MEDICINE
              </router-link>
            </div>
        </div>
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
  },
  computed : {
    userInfo() {
      return this.$store.state.userData
    },
    loginInfo() {
      return this.$store.state.access_token
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

#welcome-message {
  font-size: 90px;
}

#medicine-message {
  font-size: 50px;
}

#help-message {
  font-size: 60px;
}

.image {
  border-radius: 20px;
  background: white;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.image2 {
  border-radius: 20px;
  background: white;
  height: 100%;
  width: 100%;
  object-fit: cover;
  margin-top: 25px;
}

.image3 {
  border-radius: 20px;
  background: white;
  height: 100%;
  width: 100%;
  object-fit: cover;
  margin-top: 50px;
}

.right-text {
  margin-top: 50px;
}

.btn {
  background: #5372E1;
  border-radius: 40px;
  max-width: 100%;
}

#btn-medicine {
  height:100px;
  width:400px;
  max-width: 100%;
  font-size: 40px;
  background: #f19b9b;
  font-weight: bolder;
  padding-top: 20px;
}

#btn-diagnose {
  height:100px;
  width:400px;
  max-width: 100%;
  font-size: 40px;
  background: #9bf1cd;
  font-weight: bolder;
  padding-top: 20px;
}
</style>