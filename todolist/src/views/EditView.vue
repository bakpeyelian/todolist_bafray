<template>
    <HeaderView></HeaderView>
    <div>
        <div class="bg-gray-200">
            <div class="flex flex-col mx-5 mt-6 lg:flex-row">
                <div class="w-full lg:w-1/3 mx-auto">
                    <div class="w-1/3 p-6">
                        <RouterLink to="/dashbord">
                            <button
                                class="appearance-none block w-full bg-yellow-900 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-gray-600 focus:outline-none focus:bg-white focus:border-gray-500">
                                Come back
                            </button>
                        </RouterLink>
                    </div>
                    <form class="w-full bg-white shadow-md p-6 " @submit.prevent="">
                        <h1 class="text-center"><strong>Edit a task</strong></h1>
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
                                <button @click="updateTask()"
                                    class="appearance-none block w-full bg-yellow-900 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-gray-600 focus:outline-none focus:bg-white focus:border-gray-500">Save
                                    your changes</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- component -->
        <!-- <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
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
        </div> -->
    </div>
</template>

<script setup>
import { useTaskStore } from '@/stores/Task';
import HeaderView from '@/components/HeaderView.vue'
import router from '@/router';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
//import moment from 'moment';
//import { onBeforeMount } from 'vue';
const route = useRoute();
const errors = ref([]);
const taskStore = useTaskStore();
taskStore.getAllTasks();
taskStore.getOneTask(route.params.id);
console.log(taskStore.task);
const title = ref(taskStore.task.title);
const description = ref(taskStore.task.description);
const startDate = ref(taskStore.task.startDate);
const endDate = ref(taskStore.task.endDate);
const priority = ref(taskStore.task.priority);


/* onBeforeMount(() => { */
let isConnect = localStorage.getItem("activeSession") || false;
if (isConnect == false) {
    router.push("/login");
}
/* }) */

function updateTask() {
    //console.log(errors.value.title);
    if (!errors.value.title && !errors.value.description && !errors.value.startDate && !errors.value.endDate && !errors.value.priority) {
        const onetask = {
            id: route.params.id,
            title: title.value,
            description: description.value,
            startDate: startDate.value,
            endDate: endDate.value,
            priority: priority.value,
            createdBy: JSON.parse(localStorage.activeSession).email
        }
        console.log(onetask);
        taskStore.editOneTask(onetask);
        title.value = '';
        description.value = '';
        startDate.value = '';
        endDate.value = '';
        priority.value = '';
        errors.value = [];
        //alert("Task added");
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