<template>
<div id="about-page" class="jumbotron">
    <center>
    <h1><b>MY PROFILE</b></h1> <br> <br>
    </center>

    <div class="row">
        <div class="col-lg-6 col-sm-12">
            <h3>Your Diagnosis History</h3>
            <h4 v-if="userData.Sicknesses.length === 0"> >  Woah, it's empty ! </h4>
            <ul v-else>
                <li v-for="(sickness, index) in userData.Sicknesses" :key="sickness.ID">
                    <h5>{{index + 1}}</h5>
                    <h6> Name</h6>
                    >  {{sickness.name}} <br>
                    <h6> Icd Name</h6>
                    >  {{sickness.icdName}} <br>
                    <h6> Prof Name</h6>
                    >  {{sickness.profName}} <br>
                    <h6> Specialisation</h6>
                    >  {{sickness.specialisation}} <br>
                    <h6> Rank</h6>
                    >  {{sickness.ranking}} <br>
                    <h6> Recorded At </h6>
                    >  {{new Date(sickness.createdAt)}} <br>
                </li>
            </ul>
        </div>

        <div class="col-lg-6 col-sm-12">
            <h3>Your First Name</h3>
            <h4>>  <b>{{userData.firstName}}</b></h4> <br> <br>
            <h3>Your Last Name</h3>
            <h4>>  <b>{{userData.lastName}}</b></h4> <br> <br>
            <h3>Date of Birth</h3>
            <h4>>  <b>{{userData.dateOfBirth}} ({{currentAge}} Years Old)</b></h4> <br> <br>
            <h3>Your Gender</h3>
            <h4>>  <b>{{userData.gender}}</b></h4> <br> <br>
            <h3>Your Email</h3>
            <h4>>  <b>{{userData.email}}</b></h4> <br> <br>
        </div>

    </div>


</div>
</template>

<script>
export default {
    data() {
        return {
            currentAge: 0,
        }
    },
    computed: {
        userData() {
            this.$store.state.userData.email = this.censoredEmail(this.$store.state.userData.email)
            this.currentAge = new Date().getFullYear() - new Date(this.$store.state.userData.dateOfBirth).getFullYear()
            this.$store.state.userData.dateOfBirth = new Date(this.$store.state.userData.dateOfBirth)
            return this.$store.state.userData
        }
    },
    created() {
        if (localStorage.getItem(`access_token`)) {
            this.$store.dispatch(`getUserData`)
        }
    },
    methods: {
        censoredEmail(email) {
            let splittedEmail = email.split(`@`)
            let splittedDomain = splittedEmail[1].split(`.`)
            let censoredEmail = ``
            let censoredEmailDomain = ``
            for (let i = 0; i < splittedEmail[0].length; i++) {
                censoredEmail += `*`
            }
            for (let i = 0; i < splittedDomain[0].length; i++) {
                censoredEmailDomain += `*`
            }
            return `${censoredEmail}@${censoredEmailDomain}.${splittedDomain[1]}`
        }
    }
}
</script>

<style scoped>
#about-page {
    background: #CEE5D0;
    border-radius: 20px;
    box-shadow: 10px 10px 5px rgb(184, 179, 179);
}

h1 {
    font-size: 70px;
}

p {
    color: white;
    text-shadow: gray;
}
</style>