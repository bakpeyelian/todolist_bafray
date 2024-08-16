<template>
    <HeaderView></HeaderView>
    <div>
        <div class="bg-gray-200">
            <div class="flex flex-col mx-5 mt-6 lg:flex-row mb-6">
                <div class="w-full lg:w-2/3 mx-auto">
                    <div class="w-1/3 p-6">
                        <RouterLink to="/dashbord">
                            <button
                                class="appearance-none block w-full bg-yellow-900 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-gray-600 focus:outline-none focus:bg-white focus:border-gray-500">
                                Come back
                            </button>
                        </RouterLink>
                    </div>
                    <div class="w-full bg-gray-100 shadow-md p-6 items-center">
                        <div
                            class="bg-white w-full shadow-lg mx-auto border-b-4 border-yellow-900 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-80 cursor-pointer">
                            <div class="bg-yellow-900  flex h-20  items-center justify-center">
                                <p class="ml-4 text-white uppercase "> <strong>Priority</strong> </p>
                                <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">
                                    {{ taskStore.task.priority }}
                                </h1>
                            </div>
                            <div class="grid grid-cols-2 gap-4 mt-6">
                                <div class="flex-col py-3 px-3 text-lg tracking-wide text-center">
                                    <p>
                                        <strong>Id of task</strong> : <br>
                                        {{ taskStore.task.id }}
                                        <br> <br>
                                        <strong>Title</strong> : <br>
                                        {{ taskStore.task.title }}
                                        <br> <br>
                                        <strong>Start Date</strong> : <br>
                                        {{ moment(taskStore.task.startDate).format('MMMM Do YYYY') }}
                                        <br> <br>
                                        <strong>End Date</strong> : <br>
                                        {{ moment(taskStore.task.endDate).format('MMMM Do YYYY') }}
                                        <br> <br>
                                    </p>
                                    <div class="flex justify-center px-5 mb-2 text-sm ">
                                        <div>
                                            <div class=" flex mx-auto">
                                                <div>
                                                    <RouterLink :to="`/edit/${taskStore.task.id}`">
                                                        <button
                                                            class="border border-yellow-900 text-back-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-yellow-900 focus:outline-none focus:shadow-outline">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                height="16" fill="currentColor"
                                                                class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                <path
                                                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                <path fill-rule="evenodd"
                                                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                            </svg>
                                                        </button>
                                                    </RouterLink>
                                                </div>
                                                <div>
                                                    <button @click="taskStore.deleteOneTask(taskStore.task.id)"
                                                        class="border border-yellow-900 text-back-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-yellow-900 focus:outline-none focus:shadow-outline">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-trash3"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="justify-start flex-col m-6">
                                    <strong>Description</strong> : <br>
                                    {{ taskStore.task.description }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/Task';
import HeaderView from '@/components/HeaderView.vue'
import router from '@/router';
//import { ref, watch } from 'vue';
//import { useRoute } from 'vue-router';
import moment from 'moment';
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
const taskStore = useTaskStore();
const route = useRoute();
const ID = route.params.id
taskStore.getAllTasks();
taskStore.getOneTask(ID);
console.log(taskStore.task)
//console.log(taskStore.tasks);

onBeforeMount(() => {
    let isConnect = localStorage.getItem("activeSession") || false;
    if (isConnect == false) {
        router.push("/login");
    }
})
</script>

<style scoped></style>