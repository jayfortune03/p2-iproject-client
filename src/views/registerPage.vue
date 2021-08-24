<template>
<div class="container">
    <div class="row">
        <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card flex-row my-5 border-0 shadow rounded-1">
            <div class="card-img-left d-none d-md-flex">
            <!-- Background image for card set in CSS! -->
            </div>
            <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Register</h5>
            <form>

                <div class="form-floating mb-1">
                <input type="text" class="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus>
                <label for="floatingInputUsername">Username</label>
                </div>

                <div class="form-floating mb-1">
                <input type="text" class="form-control" id="floatingAddress" placeholder="Confirm Password" required autofocus>
                <label for="floatingAddress">Address</label>
                </div>

                <div class="form-floating mb-1">
                <input type="text" class="form-control" id="floatingPhoneNumber" placeholder="Confirm Password" required autofocus>
                <label for="floatingPhoneNumber">Phone Number</label>
                </div>

                <hr>

                <div class="form-floating mb-1">
                <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com" required autofocus>
                <label for="floatingInputEmail">Email address</label>
                </div>

                <div class="form-floating mb-1">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required autofocus>
                <label for="floatingPassword">Password</label>
                </div>

                <hr>
                <br>

                <div class="d-grid mb-2">
                <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Register</button>
                </div>

                <div class="d-grid mb-2">
                <br> <br> <br>
                <center>
                    <h6>Already Registered ? <router-link to="/login" class="link bold"><b>Click here</b></router-link> to login!</h6>
                </center>             
                </div>
            </form>
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
  width: 40%;
  /* Link to your background image using in the property below! */
  background: scroll center url('https://www.xtrafondos.com/wallpapers/vertical/paisaje-de-montanas-en-el-bosque-diseno-minimalista-6345.jpg');
  background-size: cover;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}
</style>