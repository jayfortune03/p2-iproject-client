<template>
    <nav class="navbar navbar-expand-lg shadow">
        <div class="container-fluid">
            <button type="button" id="sidebarCollapse" class="navbar-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <router-link to="/" class="navbar-brand">
                MEDIQUE
            </router-link>
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-align-justify"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">
                            HOME
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/diagnose" class="nav-link">
                            DIAGNOSE
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/medicine" class="nav-link">
                            MEDICINE
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">
                            ABOUT US
                        </router-link>
                    </li>
                    <li class="nav-item dropdown" v-if="loginInfo">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="45" height="45" class="rounded-circle">
                            <!-- <img v-if="profileImg" :src="profileImg" width="45" height="45" class="rounded-circle"> -->
                        </a>
                    <div class="dropdown-menu dropdown-menu-right rounded" aria-labelledby="navbarDropdownMenuLink">
                        <center>
                        <h4 class="dropdown-header"><b>Welcome ^_^</b></h4>
                        </center>
                        <div class="dropdown-divider"></div>
                        <h6 class="dropdown-header">Hello, John!</h6>
                        <div class="dropdown-divider"></div>
                          <router-link to="/" class="dropdown-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                            </svg>
                            Home
                          </router-link>
                          <router-link to="/profile" class="dropdown-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg>
                            My Profile
                          </router-link>
                        <a href="#" class="dropdown-item" @click.prevent="logoutInfo">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
                            <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                          </svg>
                          Logout
                            <!-- <GoogleLogin :params="params" :logoutButton=true>Logout</GoogleLogin> -->
                        </a>
                    </div>
                </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import GoogleLogin from 'vue-google-login'
export default {
    name: `Navbar`,
    computed: {
        loginInfo() {
            return this.$store.state.access_token
        },
        gauthInfo() {
            return this.$store.state.gauthInfo
        }
    },
    data() {
        return {
            toggleClass:``,
            params: {
                client_id: "194356169649-a6l157kiil38vr2p5h0fqarf9h9b035j.apps.googleusercontent.com"
            },
            renderParams: {
                width: 50,
                height: 50,
                longtitle: true
            }
        }
    },
    methods: {
        logoutInfo() {
            var auth2 = gapi.auth2.getAuthInstance();
            this.$store.dispatch(`logOut`, {access_token: null, auth: auth2})
        },
        togglerClass() {
            this.toggleClass == `` ? this.toggleClass = `active` : this.toggleClass = ''
            console.log(this.toggleClass)
            this.$store.commit(`TOGGLE_SIDEBAR`, this.toggleClass)
        }
    },
    components: {
        GoogleLogin
    }
}
</script>

<style>
.navbar {
    padding: 15px 10px;
    background: #466C95;
    border: none;
    border-radius: 20px;
    margin-bottom: 40px;
}

.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
    border-radius: 15px;
}

.image {
    border-radius: 50%;
}

.nav-item {
    color: aliceblue;
    font-size: 18px;
    font-weight: 900;
}

.navbar-brand {
    padding-left: 20px;
    color: aliceblue
}
</style>