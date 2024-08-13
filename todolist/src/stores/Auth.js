import { defineStore } from 'pinia'
import router from '@/router'
import bcrypt from 'bcryptjs'
/*import { ref } from "vue"; */

export const useAuthStore = defineStore('auth', {
  state: () => ({
    usersTab: [],
    activeSession: false,
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

    connectUser(user) {
      //console.log(user)
      //try {
      // console.log(user)
      this.setAllUser()
      for (let i = 0; i <= this.usersTab.length; i++) {
        console.log(this.usersTab[i]._rawValue.email)
        console.log(bcrypt.compareSync(user['password'], this.usersTab[i]._rawValue.password))
        console.log(user.email)
        if (
          user.email == this.usersTab[i]._rawValue.email &&
          bcrypt.compareSync(user.password, this.usersTab[i]._rawValue.password)
        ) {
          this.activeSession = true
          this.userSession = this.usersTab[i]._rawValue
          localStorage.setItem('activeSession', JSON.stringify(this.userSession))
          alert('Account connect succeful')
          router.push('/dashbord')
        } else {
          this.activeSession = false;
          alert('Invalid enter');
          router.push('/login')
        }
      }
      //} catch (error) {
      //  console.log(error)
      //}
    },

    showUser() {},
    editUser() {},
    removeUser() {},

    logoutUser() {
      localStorage.removeItem('userSession')
    }
  }
})
