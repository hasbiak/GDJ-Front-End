import axios from 'axios'

export default {
  state: {
    skills: []
  },
  mutation: {},
  actions: {
    getSkills(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_URL}/skill/${payload}`)
          .then(result => {
            context.state.skills = result.data.data
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    addSkillPekerja(context, payload) {
      return new Promise((resolve, reject) => {
        // console.log(resolve)
        // console.log(reject)
        console.log(payload)
        axios
          .post(`http://${process.env.VUE_APP_URL}/skill/add`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deleteSkill(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .delete(
            `http://${process.env.VUE_APP_URL}/skill/${payload.id_pekerja}`
          )
          .then(result => {
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    skillPekerja(state) {
      return state.skills
    }
  }
}