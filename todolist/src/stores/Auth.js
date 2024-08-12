import { defineStore } from 'pinia'
//import { ref } from "vue";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    usersTab: [],
    userSession: '',
    user: {
      fullname: null,
      email: null,
      password: null
    }
  }),

  watch: {},

  actions: {
    setAllUser() {
      try {
        this.usersTab = JSON.parse(localStorage.getItem('usersTab')) || []
      } catch (error) {
        console.log(error)
      }
    },
    addUser(user) {
      try {
        this.usersTab.unshift(user)
        localStorage.setItem('usersTab', JSON.stringify(this.usersTab))
        this.usersTab = JSON.parse(localStorage.getItem('usersTab'))
        return true
      } catch (error) {
        console.log(error)
      }
    },
    connectUser(email, password) {
      try {
        console.log(email);
        console.log(password);
      } catch (error) {
        console.log(error)
      }
    },
    showUser() {},
    editUser() {},
    removeUser() {},
    logoutUser() {}
  }
})
