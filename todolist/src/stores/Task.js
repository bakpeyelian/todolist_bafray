import { defineStore } from 'pinia'
import router from '@/router'
/*import { ref } from "vue"; */

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
    task: '',
  }),

  watch: {},

  actions: {
    getAllTasks(){
      this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    },
    addOneTask(task){
      console.log("yes")
      this.tasks.unshift(task);
      localStorage.setItem("tasks",JSON.stringify(this.tasks))
      alert("Task added");
      router.push("/dashbord");
    },
    getOneTask(title){
      title
      /* for (let i=0; i<this.tasks.length;i++){
        if(title){

        }
      } */
    },
    
  }
})
