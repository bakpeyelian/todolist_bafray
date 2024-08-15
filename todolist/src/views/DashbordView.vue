<template>
    <HeaderView></HeaderView>
    <div>
        <div class="bg-gray-200">
            <div class="flex flex-col mx-5 mt-6 lg:flex-row">
                <div class="w-full lg:w-1/3 m-3">
                    <form class="w-full bg-white shadow-md p-6 " @submit.prevent="">
                        <h1 class="text-center"><strong>Add a task</strong></h1>
                        <br>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-full px-3 mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="title"><strong>title</strong></label>
                                <span class="text-yellow-900 "> {{ errors.title }} </span>
                                <input v-model.trim="title"
                                    class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#2b2c2a]"
                                    type="text" name="title" required />
                            </div>
                            <div class="w-full px-3 mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="title"><strong>Description</strong></label>
                                <span class="text-yellow-900 "> {{ errors.description }} </span>
                                <textarea v-model.trim="description" textarea rows="4"
                                    class="appearance-none block w-full bg-white text-yellow-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#757673]"
                                    type="text" name="description" required></textarea>
                            </div>

                            <div class="w-full md:w-full px-3 mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="startDate"><strong>a start date</strong></label>
                                <span class="text-yellow-900 "> {{ errors.startDate }} </span>
                                <input v-model.trim="startDate"
                                    class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#080808]"
                                    type="date" name="startDate" required />
                            </div>

                            <div class="w-full md:w-full px-3 mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="EndDate"><strong>an expiry date</strong></label>
                                <span class="text-yellow-900 "> {{ errors.endDate }} </span>
                                <input v-model.trim="endDate"
                                    class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#050505]"
                                    type="date" name="EndDate" required />
                            </div>

                            <div class="w-full md:w-full px-3 mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="priority"><strong>priority</strong></label>
                                <span class="text-yellow-900 "> {{ errors.priority }} </span>
                                <select v-model="priority"
                                    class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#050505]"
                                    required>
                                    <option value="">--Please choose an option--</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            </div>

                            <div class="w-full md:w-full px-3 mb-6">
                                <button @click="addTask()"
                                    class="appearance-none block w-full bg-yellow-900 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-gray-600 focus:outline-none focus:bg-white focus:border-gray-500">Add
                                    a task</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="w-full lg:w-2/3 m-1 bg-white shadow-lg text-lg rounded-sm border border-gray-200">
                    <div class="overflow-x-auto rounded-lg p-3">
                        <div class=" flex  flex-col  md:flex-row justify-center  flex-wrap gap-4 mt-10  ">
                            <div v-for="element in taskStore.tasks" v-bind:key="element.id" class="">
                                <div v-if="compareEmail == element.createdBy"
                                    class="bg-white max-w-xs shadow-lg   mx-auto border-b-4 border-yellow-900 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
                                    <div class="bg-yellow-900  flex h-20  items-center">
                                        <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">{{ element.priority
                                            }}</h1>
                                        <p class="ml-4 text-white uppercase"> {{ element.title.slice(0, 10) }} ... </p>
                                    </div>
                                    <p class="py-6 px-6 text-lg tracking-wide text-center">
                                        <strong>Start Date</strong> : <br>
                                        {{ moment(element.startDate).format('MMMM Do YYYY') }}
                                        <br> <br>
                                        <strong>End Date</strong> : <br>
                                        {{ moment(element.endDate).format('MMMM Do YYYY') }}
                                    </p>

                                    <div class="flex justify-between px-5 mb-2 text-sm ">
                                        <RouterLink :to="`/show/${element.id}`">
                                            <button type="button"
                                                class="border border-yellow-900 text-back-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-yellow-900 focus:outline-none focus:shadow-outline">
                                                See more
                                            </button>
                                        </RouterLink>
                                        <div>
                                            <div>
                                                <RouterLink :to="`/edit/${element.id}`">
                                                    <button
                                                        class="border border-yellow-900 text-back-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-yellow-900 focus:outline-none focus:shadow-outline">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-pencil-square"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                            <path fill-rule="evenodd"
                                                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                        </svg>
                                                    </button>
                                                </RouterLink>
                                                <button @click="taskStore.deleteOneTask(element.id)"
                                                    class="border border-yellow-900 text-back-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-yellow-900 focus:outline-none focus:shadow-outline">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                        <path
                                                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!--                             <div class="">
                                <div
                                    class="bg-white max-w-xs mx-auto rounded-2xl  border-b-4 border-green-500 overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
                                    <div class="h-20 bg-green-500 flex items-center ">
                                        <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">2</h1>
                                        <p class=" text-white text-base ml-4 uppercase">
                                            Title
                                        </p>
                                    </div>
                                    <p class="py-6 px-6 text-lg tracking-wide text-center">Description Goes Here</p>
                                    
                                    <div class="flex justify-center px-5 mb-2 text-sm ">
                                        <button type="button"
                                            class="border border-green-500 text-green-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline">
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="">
                                <div
                                    class="bg-white max-w-xs mx-auto rounded-2xl  border-b-4 border-red-500 overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
                                    <div class="h-20 bg-red-500 flex items-center ">
                                        <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">3</h1>
                                        <p class=" text-white text-base ml-4 uppercase">
                                            Title
                                        </p>
                                    </div>
                                    <p class="py-6  px-6 text-lg tracking-wide text-center">Description Goes Here</p>
                                    
                                    <div class="flex justify-center px-5 mb-2 text-sm ">
                                        <button type="button"
                                            class="border border-red-500 text-red-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline">
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- component -->
        <div v-if="show"
            class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
            <div class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
                <div class="w-full">
                    <div class="m-8 my-20 max-w-[400px] mx-auto">
                        <div class="mb-8">
                            <h1 class="mb-4 text-3xl font-extrabold">Turn on notifications</h1>
                            <p class="text-gray-600">Get the most out of Twitter by staying up to date with what's
                                happening.</p>
                        </div>
                        <div class="space-y-4">
                            <button class="p-3 bg-black rounded-full text-white w-full font-semibold">Allow
                                notifications</button>
                            <button class="p-3 bg-white border rounded-full w-full font-semibold">Skip for now</button>
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
import { ref, watch } from 'vue';
import moment from 'moment';
//import { onBeforeMount } from 'vue';
const title = ref('');
const description = ref('');
const startDate = ref('');
const endDate = ref('');
const priority = ref('');
const show = ref(false);
const errors = ref([]);
const taskStore = useTaskStore();
taskStore.getAllTasks();
console.log(taskStore.tasks);
//console.log(localStorage.getItem("activeSession"))
const compareEmail = JSON.parse(localStorage.activeSession).email

/* onBeforeMount(() => { */
let isConnect = localStorage.getItem("activeSession") || false;
if (isConnect == false) {
    router.push("/login");
}
/* }) */

function addTask() {
    //console.log(errors.value.title);
    if (!errors.value.title && !errors.value.description && !errors.value.startDate && !errors.value.endDate && !errors.value.priority) {
        const onetask = {
            id: Date.now(),
            title: title.value,
            description: description.value,
            startDate: startDate.value,
            endDate: endDate.value,
            priority: priority.value,
            createdBy: JSON.parse(localStorage.activeSession).email
        }
        taskStore.addOneTask(onetask);
        title.value = '';
        description.value = '';
        startDate.value = '';
        endDate.value = '';
        priority.value = '';
        errors.value = [];
        alert("Task added");
        //router.push("/dashbord");
    } else {
        alert("Invalid enter")
    }
}

//verification des entrées
watch(title, (value) => {
    verifyTitle(value)
})
function verifyTitle(value) {
    if (value.length === 0) {
        errors.value["title"] = "The title must be non-empty.";
    } else {
        errors.value["title"] = '';
    }
}

watch(description, (value) => {
    verifyDescription(value)
})
function verifyDescription(value) {
    if (value.length === 0) {
        errors.value["description"] = "The description must be non-empty.";
    } else {
        errors.value["description"] = '';
    }
}

/* if(!startDate.value){
    errors.value["startDate"] = "The start date must not be greater than the end date.";
} */

watch(startDate, (value) => {
    verifystartDate(value)
})
function verifystartDate(value) {
    if (value > endDate.value) {
        errors.value["startDate"] = "The start date must not be greater than the end date.";
    } else {
        errors.value["startDate"] = '';
    }
}

watch(endDate, (value) => {
    verifyendDate(value)
})
function verifyendDate(value) {
    if (startDate.value > value) {
        errors.value["endDate"] = "The end date must not be less than the start date.";
    } else {
        errors.value["endDate"] = '';
        errors.value["startDate"] = '';
    }
}

if (priority.value === "") {
    errors.value["priority"] = "The priority must be non-empty.";
}

watch(priority, (value) => {
    verifyPriority(value)
})
function verifyPriority(value) {
    if (value === "") {
        errors.value["priority"] = "The priority must be non-empty.";
    } else {
        errors.value["priority"] = '';
    }
}
</script>

<style scoped></style>