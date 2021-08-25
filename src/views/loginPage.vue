<template>
<div id="login-page" class="jumbotron shadow">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card flex-row my-5 border-0 shadow rounded-1">
                <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-5 fw-light fs-5">Login</h5>
                <form @submit.prevent=login>

                    <div class="form-floating mb-1">
                    <label class="input-form" for="floatingInputEmail">Email address</label>
                    <input type="email" v-model="loginData.email" class="form-control" id="floatingInputEmail" placeholder="name@example.com" required autofocus>
                    </div>

                    <div class="form-floating mb-1">
                    <label class="input-form" for="floatingPassword">Password</label>
                    <input type="password" v-model="loginData.password" class="form-control" id="floatingInputPassword" placeholder="Password" required autofocus>
                    </div>

                    <hr>
                    <br>

                    <center>
                    <div class="d-grid mb-2">
                    <button class="btn btn-lg btn-primary btn-block btn-login fw-bold text-uppercase" type="submit">Login</button>
                    </div>

                        <h6><b>Or</b></h6>
                    <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
                    </center>
                    
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
          width: 440.25,
          height: 47,
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
        var auth2 = gapi.auth2.getAuthInstance();
        const payload = {
            idToken:idToken,
            profileImg:profileImg,
            auth2: auth2
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
#floatingInputEmail {
  border-radius: 20px;
}

#floatingInputPassword {
  border-radius: 20px;
}

#login-page {
  border-radius: 20px;
  box-shadow: 10px 10px 5px rgb(184, 179, 179);
  word-break: break-all;
  background: #5987bd;
}

.card {
  border-radius: 20px;
  background: #b4d3e6;
  max-width: 100%;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: 20px;
}
</style>