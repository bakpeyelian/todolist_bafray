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
                <div v-if="isActive != false" class="flex space-x-4">
                    <div>
                        <RouterLink to="/dashbord">
                            <button type="button"
                                class=" py-4 px-8 text-sm bg-yellow-900 hover:bg-gray-600 rounded text-white ">
                                GO TO Boards
                            </button>
                        </RouterLink>
                    </div>
                    <div>
                        <button @click="deconnexion()" type="button"
                            class=" py-4 px-8 text-sm bg-yellow-900 hover:bg-gray-600 rounded text-white ">
                            Logout
                        </button>
                    </div>
                </div>
                <div v-else class="flex space-x-4">
                    <div>
                        <RouterLink to="/register">
                            <button type="button"
                                class=" py-4 px-8 text-sm bg-yellow-900 hover:bg-gray-600 rounded text-white ">
                                Register
                            </button>
                        </RouterLink>
                    </div>
                    <div>
                        <RouterLink to="/login">
                            <button type="button"
                                class=" py-4 px-8 text-sm bg-yellow-900 hover:bg-gray-600 rounded text-white ">
                                Login
                            </button>
                        </RouterLink>
                    </div>
                </div>

            </div>
        </div>
    </header>
</template>

<script setup>
import router from '@/router';
import { useAuthStore } from '@/stores/Auth';
const AuthStore = useAuthStore();
var isActive = localStorage.getItem("activeSession") || false;
//console.log(isActive);
function deconnexion(){
    AuthStore.logoutUser();
    router.push("/");
}
</script>
<style scoped></style>