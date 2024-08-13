<template>
    <header>
        <div class="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
            <RouterLink to="/">
                <div class="flex items-center text-3xl text-gray-500 font-bold">
                    <RouterLink to="/">
                        <img src="../../public/logo ToDo.png" alt="Logo du site" class="w-6/12">
                    </RouterLink>
                </div>
            </RouterLink>
            <div class="hidden md:flex gap-x-3">
                <RouterLink to="/register">
                    <button type="button"
                        class=" py-3 px-8 text-sm bg-yellow-900 hover:bg-gray-600 rounded text-white ">
                        Register
                    </button>
                </RouterLink>
                <div>
                    <RouterLink to="/" v-if="oklogout">
                        <button type="button"
                            class=" py-3 px-8 text-sm bg-yellow-900 hover:bg-gray-600 rounded text-white ">
                            Logout
                        </button>
                    </RouterLink>
                    
                    <RouterLink to="/login">
                        <button type="button"
                            class=" py-3 px-8 text-sm bg-yellow-900 hover:bg-gray-600 rounded text-white ">
                            Login
                        </button>
                    </RouterLink>
                </div>
                <RouterLink to="/boardview" v-if="oklogout">
                    <button type="button"
                        class=" py-3 px-8 text-sm bg-yellow-900 hover:bg-gray-600 rounded text-white ">
                        GO TO Boards
                    </button>
                </RouterLink>
            </div>
        </div>
    </header>
</template>

<script>
</script>

<style></style>