<template>
<div id="diagnose-page" class="jumbotron shadow">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card flex-row my-5 border-0 rounded-lg shadow">
                <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-5 fw-light fs-5">Diagnose</h5>
                <small class="card-title text-center mb-5 fw-light fs-5">You can choose up to 5 Symptoms</small> <br> <br>
                <form @submit.prevent="getDiagnosis">

                <vue-tags-input
                    v-model="symptom"
                    :tags="selectedSymptoms"
                    :allow-edit-tags="true"
                    :autocomplete-items="filteredItems"
                    @tags-changed="newSymptoms => selectedSymptoms = newSymptoms"
                ></vue-tags-input>

                    <div class="form-floating mb-1">
                        <label>Gender</label>
                        <select class="custom-select" v-model="gender">
                            <option value="" selected hidden disabled> Select Your Gender </option>
                            <option value="Male"> Male </option>
                            <option value="Female"> Female </option>
                        </select>
                    </div>

                    <div class="form-floating mb-1">
                        <label>Age</label>
                        <input type="number" class="form-control" v-model="age" placeholder="Your Age">
                    </div>

                    <hr>
                    <br>

                    <center>
                    <div class="d-grid mb-2">
                    <button class="btn btn-lg btn-primary btn-block fw-bold text-uppercase" type="submit">Submit</button>
                    </div>
                    </center>
                    <modal 
                        name="diagnose-result"
                        :width="1000"
                        :height="3000"
                        :adaptive="true"
                        :draggable="true"
                        styles="background: none"
                        classes="jumbotron"
                    >
                    <div id="result-box" class="jumbotron" v-for="diagnose in diagnoseInfo" :key="diagnose.ID">
                            <center>
                                <h2>You might have</h2> <br> <br>
                                <h1 id="diagnose">"{{diagnose.Issue.Name}}"</h1> <br>
                                <h4>Checked with {{Math.round(diagnose.Issue.Accuracy)}}% accuracy</h4>
                                <p>For further notice please visit The doctor with "{{diagnose.Specialisation[0].Name}}" Specialisation</p>
                                <div class="d-flex flex-row w-4 justify-content-around">
                                    <button id="save-btn" @click.prevent="saveHistory(diagnose)" class="btn btn-lg btn-primary fw-bold text-uppercase" type="button" v-if="loginInfo">Save Diagnose</button>
                                    <button id="cancel-btn" @click.prevent="hideModal" class="btn btn-lg btn-danger fw-bold text-uppercase" type="button" v-if="loginInfo">Cancel</button>
                                </div>
                                <button id="ok-btn" @click.prevent="hideModal" class="btn btn-lg btn-primary fw-bold text-uppercase" type="button" v-if="!loginInfo">Ok</button>
                            </center>
                    </div>
                    </modal>
                </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
</div>
</template>

<script>
import VueTagsInput from '@johmun/vue-tags-input';
import VModal from 'vue-js-modal';
import Vue from 'vue'

Vue.use(VModal)

export default {
    data() {
        return {
            selectedSymptoms: [],
            symptoms: this.$store.state.symptoms.map(el => {
                el.text = el.Name
                return el
            }),
            symptom: ``,
            age: ``,
            gender: ``,
        }
    },
    methods: {
        getDiagnosis() {
            let userData = {
                symptoms: this.selectedSymptoms,
                age: this.age,
                gender: this.gender
            }
            this.$store.dispatch(`getDiagnosis`, userData)
            this.$modal.show('diagnose-result')
            this.selectedSymptoms = []
            this.age = ``
            this.gender = ``
        },
        hideModal() {
            this.$modal.hide('diagnose-result')
        },
        saveHistory(diagnose) {
            this.$store.dispatch(`saveDiagnosis`, diagnose)
            this.$modal.hide('diagnose-result')
        }
    },
    created() {
        this.$store.dispatch(`getSymptoms`)
    },
    components: {
        VueTagsInput,
    },
    computed: {
        loginInfo() {
            return this.$store.state.access_token
        },
        filteredItems() {
            return this.symptoms.filter(i => {
                return i.text.toLowerCase().indexOf(this.symptom.toLowerCase()) !== -1;
            });
        },
        diagnoseInfo() {
            return this.$store.state.diagnose.filter(el => el.Issue.Ranking == 1)
        }
    },
    
}
</script>

<style lang='css' scoped>
.form-control {
    border-radius: 15px;
}

.card-body {
    border-radius: 32px;
}

.custom-select {
    border-radius: 15px;
}

option {
    border-radius: 15px;
}

.vm--modal {
    background: none !important;
}

.vue-tags-input {
    background: #fbfdff;
    border-radius: 15px;
    max-width: 100%;
    border: 1px solid #7d2121;
    border-radius: 20px;
}

.ti-input[data-v-61d92e31] {
    border-radius: 20px !important; 
}

#result-box {
    background-color: #b2cae4;
    border-radius: 20px;
}

#diagnose {
    font-size: 76px;
}

h2 {
    font-size: 40px;
}

p {
    color: white;
    text-shadow: gray;
}

#ok-btn {
    border-radius: 15px;
}

</style>