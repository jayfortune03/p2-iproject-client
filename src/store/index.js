import Vue from 'vue'
import Vuex from 'vuex'
import VueToast from 'vue-toast-notification';
import {baseServer, apiMedicServer, apiMedicToken} from '../apis'
import router from '../router/index'
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    access_token: localStorage.getItem(`access_token`),
    gauthInfo: ``,
    toggler: ``,
    symptoms: [],
    diagnose: [],
    userData: {}
  },
  mutations: {
    TOKEN_HANDLER(state, payload) {
      state.access_token = payload
    },
    GAUTH_HANDLER(state, payload) {
      state.access_token = payload
    },
    GET_SYMPTOMS(state, payload) {
      state.symptoms = payload
    },
    USER_DATA(state, payload) {
      state.userData = payload
    },
    DIAGNOSIS_RESULT(state, payload) {
      state.diagnose = payload
    },
    LOGOUT_HANDLER(state, payload) {
      state.access_token = payload.access_token
    },
    GAUTH_INFO(state, payload) {
      state.gauthInfo = payload
    },
    TOGGLE_SIDEBAR(state, payload) {
      state.toggler = payload
    }
  },
  actions: {
    async loginData(context, payload) {
      try {
          const login = await baseServer({
            method: `POST`,
            data: {
              email: payload.email,
              password: payload.password
            },
            url: `/login`
          })
          if (login) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Login Success! ',
              showConfirmButton: false,
              timer: 1500
            })
            localStorage.setItem(`access_token`, login.data.access_token)
            context.commit(`TOKEN_HANDLER`, {access_token: login.data.access_token})
            router.push(`/`)
          }
      } catch(err) {
        let errors = err.response.data.message
        if (Array.isArray(errors)) {
            errors.forEach(el => {
                Vue.$toast.open({
                    message: `${el}`,
                    type: "error",
                    position: "top-right",
                })  
            })
        } else {
            Vue.$toast.open({
                message: `${errors}`,
                type: "error",
                position: "top-right",
            })     
        }
      }
    },

    async googleLogin(context, payload) {
      try {
        const gauth = await baseServer({
          method:`POST`,
          url:`/auth/google`,
          data:{
              idToken:payload.idToken
          }
      })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login Success! ',
          showConfirmButton: false,
          timer: 1500
        })
        localStorage.setItem(`access_token`, gauth.data.access_token)
        context.commit(`GAUTH_HANDLER`, {access_token: gauth.data.access_token})
        context.commit(`GAUTH_INFO`, payload.auth2)
        router.push(`/`)
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops.. It seems like there is an error ocurring here!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    },

    async logOut(context, payload) {
      localStorage.removeItem(`access_token`)
      context.commit(`LOGOUT_HANDLER`, {access_token: null})
      payload.auth.signOut()
      .then(function () {
        console.log('User signed out.');
      });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Logout Success! ',
        showConfirmButton: false,
        timer: 1500
      })
      router.push(`/`)
    },

    async register(context, payload) {
      try {
        const register = await baseServer.post(`/register`, payload)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Register Success! Please Login to Continue!',
          showConfirmButton: false,
          timer: 1500
        })
        router.push(`/login`)
      } catch (err) {
        let errors = err.response.data.message
        if (Array.isArray(errors)) {
            errors.forEach(el => {
                Vue.$toast.open({
                    message: `${el}`,
                    type: "error",
                    position: "top-right",
                })
            })
        } else {
            Vue.$toast.open({
                message: `${errors}`,
                type: "error",
                position: "top-right",
            })     
        }
      }
    },

    async getSymptoms(context, payload) {
      try {
        const symptoms = await apiMedicServer({
          method: `GET`,
          url: `/symptoms`,
          params: {
            token: apiMedicToken,
            format: `json`,
            language: `en-gb`
          }
        })
        context.commit(`GET_SYMPTOMS`, symptoms.data)
      } catch (err) {
        console.log(err.response.data.message)
      }
    },

    async getDiagnosis(context, payload) {
      try {
        let symptomParams = payload.symptoms.map(el => {
          return el.ID
        })
        const diagnosis = await apiMedicServer({
          method: `GET`,
          url: `/diagnosis`,
          params: {
            token: apiMedicToken,
            year_of_birth: payload.age,
            symptoms: JSON.stringify(symptomParams),
            gender:payload.gender,
            format: `json`,
            language: `en-gb`
          }
        })
        context.commit(`DIAGNOSIS_RESULT`, diagnosis.data)
      } catch (err) {
        console.log(err)
      }
    },

    async saveDiagnosis(context, payload) {
      try {
        const diagnosis = await baseServer({
          method: `POST`,
          url:`/user/sickness`,
          data: {
            name: payload.Issue.Name,
            profName: payload.Issue.ProfName,
            icdName: payload.Issue.IcdName,
            accuracy: payload.Issue.Accuracy,
            ranking: payload.Issue.Ranking,
            specialisation: payload.Specialisation[0].Name
          },
          headers: {access_token: localStorage.getItem(`access_token`)}
        })
        Vue.$toast.open({
          message: `Successfully added to your history!`,
          type: "success",
          position: "top-right",
        })  
      } catch (err) {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops.. It seems like there is an error ocurring here!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    },

    async getUserData(context, payload) {
      try {
        let userData = await baseServer({
          method: `GET`,
          url:`/user`, 
          headers: {access_token: localStorage.getItem(`access_token`)}
        })
        context.commit(`USER_DATA`, userData.data)
        console.log(userData.data)
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops.. It seems like there is an error ocurring here!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  },
  modules: {
  }
})
