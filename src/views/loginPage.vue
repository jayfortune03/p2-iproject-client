<template>
<div id="login-page" class="jumbotron shadow">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card flex-row my-5 border-0 shadow rounded-1">
                <div class="card-img-left d-none d-md-flex">
                <!-- Background image for card set in CSS! -->
                </div>
                <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-5 fw-light fs-5">Login</h5>
                <form @submit.prevent=login>

                    <div class="form-floating mb-1">
                    <label for="floatingInputEmail">Email address</label>
                    <input type="email" v-model="loginData.email" class="form-control" id="floatingInputEmail" placeholder="name@example.com" required autofocus>
                    </div>

                    <div class="form-floating mb-1">
                    <label for="floatingPassword">Password</label>
                    <input type="password" v-model="loginData.password" class="form-control" id="floatingPassword" placeholder="Password" required autofocus>
                    </div>

                    <hr>
                    <br>

                    <center>
                    <div class="d-grid mb-2">
                    <button class="btn btn-lg btn-block btn-primary btn-login fw-bold text-uppercase" type="submit">Login</button>
                    </div>

                        <h6><b>Or</b></h6>
                    </center>
                    <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
                    

                    <div class="d-grid mb-2">
                    <br> <br> <br>
                    <center>
                        <h6>Not Registered ? <router-link to="/register"><b>Click here</b></router-link> to register!</h6>
                    </center>             
                    </div>
                </form>
                </div>
            </div>
            </div>
            </div>
        </div>
</div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
export default {
  data() {
    return {
      loginData: {
        email: '',
        password: '',
      },
      params: {
          client_id: "194356169649-a6l157kiil38vr2p5h0fqarf9h9b035j.apps.googleusercontent.com"
      },
      renderParams: {
          width: 500,
          height: 50,
          longtitle: true
      }
    }
  },
  components: {
    GoogleLogin
  },
  methods: {
    onSuccess(googleUser) {
        let idToken = googleUser.getAuthResponse().id_token
        let profileImg = googleUser.getBasicProfile().getImageUrl()
        const payload = {
            idToken:idToken,
            profileImg:profileImg
        }
        this.$store.dispatch(`googleLogin`, payload)
        // this.$store.commit(`GOOGLEUSER_IMGPROFILE`, profileImg)
    },
    onFailure() {

    },
    login() {
      this.$store.dispatch(`loginData`, this.loginData)
    },
  }
}
</script>

<style scoped>
#login-page {
  background-size: cover;
  border-radius: 20px;
  position: relative;
  word-break: break-all;
  background: #759dc7;
}

.card-img-left {
  width: 35%;
  background: scroll center url('../assets/undraw_medical_research_qg4d.svg');
  /* background-size: cover; */
  background-size: contain;
  background-repeat: no-repeat;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}
</style>