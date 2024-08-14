<template>
    <main class="font-sans">
        <div>
            <HeaderView></HeaderView>
            <main class="text-gray-900">
                <section class="pt-20 md:pt-40 ">
                    <div class="container mx-auto px-8 lg:flex ">
                        <div class="text-center lg:text-left lg:w-1/2">
                            <h1 class="text-4xl lg:text-5xl xl:text-6xl text-yellow-900 font-bold leading-none">Manage
                                your tasks
                                efficiently</h1>
                            <p class="text-xl lg:text-2xl mt-6 font-light">You can create, read, update and delete
                                tasks, organise them, and filter tasks by status or date.
                            </p>
                            <p class="mt-8 md:mt-12">
                                <RouterLink to="/dashbord">
                                    <button type="button"
                                        class=" py-3 px-8 text-sm bg-yellow-900 hover:bg-gray-600 rounded text-white ">
                                        GO TO Boards
                                    </button>
                                </RouterLink>
                            </p>
                            <p class="mt-4 text-gray-600">Save time by working with us
                            </p>
                        </div>

                        <div class="lg:w-1/2">
                            <img src="../../public/1977.jpg" alt="">
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </main>
</template>
<script setup>
import HeaderView from '@/components/HeaderView.vue';
</script>
<style scoped></style>