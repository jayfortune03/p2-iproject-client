<template>
<div class="jumbotron rounded shadow">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card flex-row my-5 border-0 shadow rounded-1">
                <div class="card-img-left d-none d-md-flex">
                <!-- Background image for card set in CSS! -->
                </div>
                <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-5 fw-light fs-5">Login</h5>
                <form>

                    <div class="form-floating mb-1">
                    <label for="floatingInputEmail">Email address</label>
                    <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com" required autofocus>
                    </div>

                    <div class="form-floating mb-1">
                    <label for="floatingPassword">Password</label>
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required autofocus>
                    </div>

                    <hr>
                    <br>

                    <center>
                    <div class="d-grid mb-2">
                    <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Login</button>
                    </div>

                        <h6><b>Or</b></h6>
                    </center>
                    <!-- <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin> -->
                    

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
export default {

}
</script>

<style scoped>
.card-img-left {
  width: 35%;
  background: scroll center url('https://image.freepik.com/free-vector/doctor-character-background_1270-84.jpg');
  background-size: cover;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}
</style>