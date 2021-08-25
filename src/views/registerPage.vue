<template>
<div id="register-page" class="jumbotron shadow">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card flex-row my-5 border-0 shadow rounded-1">
                <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-5 fw-light fs-5">Register</h5>
                <form @submit.prevent="register">

                    <div class="form-floating mb-1">
                    <label for="floatingInputUsername">First Name</label>
                    <input type="text" class="form-control" v-model="registerData.firstName" id="floatingFirstName" placeholder="First Name" required autofocus>
                    </div>

                    <div class="form-floating mb-1">
                    <label for="floatingAddress">Last Name</label>
                    <input type="text" class="form-control" v-model="registerData.lastName" id="floatingLastName" placeholder="Last Name" autofocus>
                    </div>

                    <div class="form-floating mb-1">
                    <label for="floatingPhoneNumber">Date Of Birth</label>
                    <input type="date" class="form-control" v-model="registerData.dateOfBirth" id="floatingDateOfBirth" required autofocus>
                    </div>

                    <div class="form-floating mb-1">
                        <label for="floatingGender">Gender</label>
                        <select id="floatingGender" class="custom-select" v-model="registerData.gender">
                            <option value="" selected hidden disabled> Select Gender </option>
                            <option value="Male"> Male </option>
                            <option value="Female"> Female </option>
                        </select>
                    </div>

                    <hr>

                    <div class="form-floating mb-1">
                    <label for="floatingInputEmail">Email address</label>
                    <input type="email" class="form-control" v-model="registerData.email" id="floatingEmail" placeholder="name@example.com" required autofocus>
                    </div>

                    <div class="form-floating mb-1">
                    <label for="floatingPassword">Password</label>
                    <input type="password" class="form-control" v-model="registerData.password" id="floatingPassword" placeholder="Password" required autofocus>
                    </div>

                    <hr>
                    <br>

                    <div class="d-grid mb-2">
                        <center>
                    <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Register</button>
                        </center>
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
</div>
</template>

<script>
export default {
    data() {
        return {
            registerData: {
                firstName: ``,
                lastName: ``,
                dateOfBirth: ``,
                gender: ``,
                email: ``,
                password: ``
            }
        }
    },
    methods: {
        register() {
            this.$store.dispatch(`register`, this.registerData)
        }
    }
}
</script>

<style scoped>
#register-page {
    border-radius: 20px;
    box-shadow: 10px 10px 5px rgb(184, 179, 179);
    background: #5987bd;
}

.card {
    border-radius: 20px;
    background: #b4d3e6;
}

#floatingEmail {
    border-radius: 20px;
}

#floatingPassword {
    border-radius: 20px;
}

#floatingFirstName {
    border-radius: 20px;
}

#floatingLastName {
    border-radius: 20px;
}

#floatingDateOfBirth {
    border-radius: 20px;
}

#floatingGender {
    border-radius: 20px;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}
</style>