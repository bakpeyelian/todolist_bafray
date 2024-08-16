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
      var choix = confirm("Are you sur to delete task ?");
      if(choix){
        this.tasks = this.tasks.filter((object) => {
          return object.id !== id
        });
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        alert('Task delete sucessful');
      }else{
        alert('Task delete failed');
      }
    },
    getOneTask(id) {
      const resultat = this.tasks.indexOf(
        this.tasks.find((taskUpadate) => taskUpadate.id == id)
      )
      console.log(resultat)
      if (resultat >= 0) {
        this.task = this.tasks[resultat]
        console.log(this.task);
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
        console.log("yes")
      } else {
        console.log("no")
      }
    },
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
