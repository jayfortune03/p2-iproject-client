<template>
<div id="diagnose-page" class="jumbotron">

    <center>
        <h1><b>DIAGNOSE SECTION</b></h1> <br>
        <h2>Please tell us what is your symptoms</h2> 
        <small class="card-title text-center mb-5 fw-light fs-5">( You can choose up to 5 Symptoms )</small> <br> <br> <br>
    </center>

    <form @submit.prevent="getDiagnosis">
            <label>Symptoms</label>
                <vue-tags-input
                    class="symptoms-input"
                    v-model="symptom"
                    :tags="selectedSymptoms"
                    :allow-edit-tags="true"
                    :autocomplete-items="filteredItems"
                    @tags-changed="newSymptoms => selectedSymptoms = newSymptoms"
                ></vue-tags-input>

                <div class="form-floating mb-1">
                    <label>Gender</label>
                    <select required id="floatingGender" class="custom-select" v-model="gender">
                        <option value="" selected hidden disabled> Select Your Gender </option>
                        <option value="Male"> Male </option>
                        <option value="Female"> Female </option>
                    </select>
                </div>

                <div class="form-floating mb-1">
                    <label>Age</label>
                    <input required id="floatingAge" type="number" class="form-control" v-model="age" placeholder="Your Age">
                </div>

                <hr>
                <br>
        <center>
            <div class="d-grid mb-2">
                <button id="submit-btn" class="btn btn-lg btn-primary btn-block fw-bold text-uppercase" type="submit">Submit</button>
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
            <div v-if="diagnoseInfo.length !== 0">
                <div id="result-box" class="jumbotron" v-for="diagnose in diagnoseInfo" :key="diagnose.ID">
                        <center>
                            <h2>You might have</h2> <br> <br>
                            <h1 id="diagnose">"{{diagnose.Issue.Name}}"</h1> <br>
                            <h4>Checked with {{Math.round(diagnose.Issue.Accuracy)}}% accuracy</h4>
                            <p>For further notice please visit The doctor with "{{diagnose.Specialisation[0].Name}}" Specialisation</p>
                            <div class="d-flex flex-row justify-content-around">
                                <button id="save-btn" @click.prevent="saveHistory(diagnose)" class="btn btn-lg btn-primary fw-bold text-uppercase" type="button" v-if="loginInfo">Save Diagnose</button>
                                    <router-link id="medicine-btn" to="/medicine" v-if="loginInfo" class="btn btn-lg btn-secondary fw-bold text-uppercase">
                                        Find the Medicine
                                    </router-link>
                            </div>
                            <button id="ok-btn" @click.prevent="hideModal" class="btn btn-lg btn-primary fw-bold text-uppercase" type="button">Ok</button>
                        </center>
                </div>
            </div>

            <div v-else>
                <div id="result-box" class="jumbotron">
                        <center>
                            <h2>Oh No !</h2> <br> <br>
                            <h4>I'm Sorry I Couldn't find it. Maybe you need to be more specific about the symptoms</h4>
                            <button id="ok-btn" @click.prevent="hideModal" class="btn btn-lg btn-primary fw-bold text-uppercase" type="button" v-if="!loginInfo">Ok</button>
                        </center>
                </div>
            </div>

            </modal>
    </form>
</div>

</template>

<script>
import Vue from 'vue'
import VueTagsInput from '@johmun/vue-tags-input';
import VueToast from 'vue-toast-notification';
import VModal from 'vue-js-modal';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast)
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
            if (this.selectedSymptoms.length === 0) {
                Vue.$toast.open({
                    message: `Symptoms cannot be Empty`,
                    type: "error",
                    position: "top-right",
                })
            } else {
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
            }
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

<style scoped>

.vue-tags-input {
    /* background: #c1ecec; */
    max-width: 100%;
    border-radius: 20px;
}

#submit-btn {
    background: #6fcaca;
    outline: #6fcaca;
}

#result-box {
    background-color: #c1ecec;
    border-radius: 20px;
}

#diagnose {
    font-size: 76px;
}

#floatingGender {
    border-radius: 20px;
}

#floatingAge {
    border-radius: 20px;
}

h1 {
    font-size: 70px;
}

p {
    color: rgb(59, 58, 58);
    text-shadow: gray;
}

#ok-btn {
    border-radius: 15px;
    background: #5abebe;
    font-weight: bolder;
}

#save-btn {
    border-radius: 15px;
    background: #a4dfa9;
    font-weight: bolder;
}

#medicine-btn {
    border-radius: 15px;
    background: #f19b9b;
    font-weight: bolder;
}

.jumbotron {
    border-radius: 20px;
    background: #c1ecec;
    box-shadow: 10px 10px 5px rgb(184, 179, 179);
}

</style>