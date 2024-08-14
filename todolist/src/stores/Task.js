import { defineStore } from 'pinia'
//import router from '@/router'
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
      this.tasks.unshift(task);
      localStorage.setItem("tasks",JSON.stringify(this.tasks));
      this.getAllTasks();
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
