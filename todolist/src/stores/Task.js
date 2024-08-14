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
    deleteOneTask(id){
      this.tasks = this.tasks.filter((object)=>{
        return object.id !== id;
      });
      localStorage.setItem("tasks",JSON.stringify(this.tasks));
      alert("Task delete sucessful")
    },
    getOneTask(id){
      this.task = this.tasks.filter((object)=>{
        return object.id = id;
      });
      if(this.task){
        console.log("yes")
      }else{
        console.log("no")
      }
    },
    editOneTask(task){
      let positionTask = this.tasks.findIndex(()=>{
        return this.task.id = task.id;
      });
      if(positionTask){
        this.tasks[positionTask] = task
      }else{
        console.log("no");
      }
    }
  }
})
