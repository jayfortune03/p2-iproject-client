<template>
<nav id="sidebar" class="rounded">
    <div class="sidebar-header">
        <h3>MEDIQUE</h3>
    </div>

    <ul class="list-unstyled components">
        <p>A Website where you can diagnose and find all medicines for free!</p>
        <li class="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">HOME</a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
                <li>
                    <router-link to="/">
                        <img src="../assets/20846546501582634781.svg" width="20" length="20">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link to="/medicine">
                        <img src="../assets/3922102181595341171.svg" width="20" length="20">
                        Medicine
                    </router-link>
                </li>
                <li>
                    <router-link to="/diagnose">
                        <img src="../assets/17351227651595341160.svg" width="20" length="20">
                        Diagnose
                    </router-link>
                </li>
            </ul>
        </li>
        <li>
            <router-link to="/about">
                ABOUT US
            </router-link>
        </li>
        <li v-if="loginInfo">
            <router-link to="/profile">
                MY PROFILE
            </router-link>
        </li>
    </ul>

    <ul class="list-unstyled CTAs" v-if="!loginInfo">
        <li>
            <router-link class="login" to="/login">
                Login
            </router-link>
        </li>
        <li>
            <router-link class="register" to="/register">
                Register
            </router-link>
        </li>
    </ul>
</nav>
</template>

<script>
export default {
    name: `Sidebar`,
    computed: {
        loginInfo() {
            return this.$store.state.access_token
        }
    }
}
</script>

<style>
/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
    perspective: 1500px;
}


#sidebar {
    min-width: 250px;
    max-width: 250px;
    background: #5881ad;
    color: #fff;
    transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);
    transform-origin: bottom left;
}

#sidebar.active {
    margin-left: -250px;
    transform: rotateY(100deg);
}

#sidebar .sidebar-header {
    padding: 20px;
    background: #466C95;
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}
#sidebar ul li a:hover {
    color: #466C95;
    background: #fff;
}

#sidebar ul li.active > a, a[aria-expanded="true"] {
    color: #fff;
    background: #6186ad;
}


a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #39628f;
}

ul.CTAs {
    padding: 20px;
}

ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
}

a.login {
    background: #90b7e0;
    color: #d9def5;
    font-weight: bolder;
}

a.register, a.article:hover {
    background: #6293c7 !important;
    color: #d1dae4 !important;
    font-weight: bolder;
}
</style>