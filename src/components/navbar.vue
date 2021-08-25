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
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: `Navbar`,
    computed: {
        loginInfo() {
        return this.$store.state.access_token
        }
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

.nav-item {
    color: aliceblue;
}

.navbar-brand {
    padding-left: 20px;
    color: aliceblue
}
</style>