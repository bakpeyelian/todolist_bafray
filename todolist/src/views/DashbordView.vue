<template>
    <HeaderView></HeaderView>
    <div>
        <div class="bg-gray-200">
            <div class="flex flex-col mx-5 mt-6 lg:flex-row">
                <div class="w-full lg:w-1/3 m-3">
                    <form class="w-full bg-white shadow-md p-6 ">
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
                                <select v-model.trim="priority"
                                    class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#050505]"
                                    required>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>

                            <div class="w-full md:w-full px-3 mb-6">
                                <button
                                    class="appearance-none block w-full bg-yellow-900 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-gray-600 focus:outline-none focus:bg-white focus:border-gray-500">Add
                                    a task</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="w-full lg:w-2/3 m-1 bg-white shadow-lg text-lg rounded-sm border border-gray-200">
                    <div class="overflow-x-auto rounded-lg p-3">
                        <div class=" flex  flex-col  md:flex-row justify-center  flex-wrap gap-4 mt-10  ">
                            <div class="">
                                <div
                                    class="bg-white max-w-xs shadow-lg   mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
                                    <div class="bg-indigo-500  flex h-20  items-center">
                                        <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">1</h1>
                                        <p class="ml-4 text-white uppercase">Title</p>
                                    </div>
                                    <p class="py-6 px-6 text-lg tracking-wide text-center">Description Goes here</p>
                                    <!-- <hr > -->
                                    <div class="flex justify-center px-5 mb-2 text-sm ">
                                        <button type="button"
                                            class="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="">
                                <div
                                    class="bg-white max-w-xs mx-auto rounded-2xl  border-b-4 border-green-500 overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
                                    <div class="h-20 bg-green-500 flex items-center ">
                                        <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">2</h1>
                                        <p class=" text-white text-base ml-4 uppercase">
                                            Title
                                        </p>
                                    </div>
                                    <p class="py-6 px-6 text-lg tracking-wide text-center">Description Goes Here</p>
                                    <!-- <hr > -->
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
                                    <!-- <hr > -->
                                    <div class="flex justify-center px-5 mb-2 text-sm ">
                                        <button type="button"
                                            class="border border-red-500 text-red-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline">
                                            Details
                                        </button>
                                    </div>
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
import HeaderView from '@/components/HeaderView.vue'
import { ref, watch } from 'vue';
const title = ref('');
const description = ref('');
const startDate = ref('');
const endDate = ref('');
const priority = ref('');
const errors = ref([]);

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

watch(startDate, (value) => {
    verifystartDate(value)
})
function verifystartDate(value){
    if (value > endDate.value ) {
        errors.value["startDate"] = "The start date must not be greater than the end date.";
    } else {
        errors.value["startDate"] = '';
    }
}

watch(endDate, (value) => {
    verifyendDate(value)
})
function verifyendDate(value){
    if (startDate.value > value ) {
        errors.value["endDate"] = "The end date must not be less than the start date.";
    } else {
        errors.value["endDate"] = '';
    }
}

</script>

<style scoped></style>