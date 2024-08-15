import { defineStore } from 'pinia'
//import router from '@/router'
/*import { ref } from "vue"; */

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
    task: ''
  }),

  watch: {},

  actions: {
    getAllTasks() {
      this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
    },
    addOneTask(task) {
      this.tasks.unshift(task)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
      this.getAllTasks()
    },
    deleteOneTask(id) {
      this.tasks = this.tasks.filter((object) => {
        return object.id !== id
      })
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
      alert('Task delete sucessful')
    },
    getOneTask(id) {
      const resultat = this.tasks.indexOf(
        this.tasks.find((taskUpadate) => taskUpadate.id == id)
      )
      console.log(resultat)
      if (resultat >= 0) {
        this.task = this.tasks[resultat]
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
        console("yes")
      } else {
        console("no")
      }
    },
    /* editOneTask(task) {
      this.getOneTask(task.id)
      const resultat = this.tasks.indexOf(
        this.tasks.find((taskUpadate) => taskUpadate.id == task.id)
      )
      console.log(resultat)
      if (resultat >= 0) {
        this.tasks[resultat] = task
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
        alert('Task modify successfully')
      } else {
        alert('Update of the failed task')
      }
    } */
    editOneTask(task) {
      console.log(task)
      console.log(this.tasks)
      const resultat = this.tasks.indexOf(
        this.tasks.find((taskUpadate) => taskUpadate.id == task.id)
      )
      console.log(resultat)
      if (resultat >= 0) {
        this.tasks[resultat] = task
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
        alert('Task modify successfully')
      } else {
        alert('Update of the failed task')
      }
    }
  }
})
