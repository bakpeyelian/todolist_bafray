<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-yellow-900 to-yellow-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-2xl">
      </div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div class="w-full flex justify-center">
            <RouterLink to="/">
              <img src="../../public/logo ToDo.png" alt="Logo du site">
            </RouterLink>
          </div>
          <br>
          <div>
            <h1 class="text-2xl font-bold">Login</h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <span class="text-sm text-red-500" v-if="errors.email">{{ errors.email }}</span>
              <div class="relative">
                <input v-model.trim="email" autocomplete="off" type="email"
                  class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Email address" />
                <label for="email"
                  class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email
                  Address</label>
              </div>
              <span class="text-sm text-red-500" v-if="errors.password">{{ errors.password }}</span>
              <div class="gaps-5 relative">
                <input v-model.trim="password" autocomplete="off" type="password"
                  class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Password" />
                <label for="password"
                  class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
              </div>
              <br>
              <div class="relative">
                <button @click="SubmitConnect" class="bg-yellow-900 text-white rounded-md px-2 py-1">Submit</button>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex justify-center gap-2">
          <button
            class="flex gap-2 items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
              <path
                d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
            </svg>
            <RouterLink to="/" class="text-black-600 font-semibold hover:underline ml-1">
              <span>Back to home</span>
            </RouterLink>
          </button>
          <button
            class="flex gap-2 items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-person-lines-fill" viewBox="0 0 16 16">
              <path
                d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
            </svg>
            <RouterLink to="/register" class="text-black-600 font-semibold hover:underline ml-1">
              <span>Create a new account</span>
            </RouterLink>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/Auth';
import { ref, watch } from 'vue';
/* import router from '@/router';
import bcrypt  from 'bcryptjs'; */

const AuthStore1 = useAuthStore();
const email = ref('');
const password = ref('');
const errors = ref([]);

//verification du email
watch(email, (value) => {
  verifyEmail(value)
})
function verifyEmail(value) {
  const letters = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (value.length == 0) {
    errors.value['email'] = "email to short"
  } else if (value.match(letters) === null) {
    errors.value['email'] = " invalid email"
  }
  else {
    errors.value['email'] = ''
  }
}

//verification password
watch(password, (value) => {
  verifyPassword(value)
})
function verifyPassword(value) {
  const letters = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (value.length < 8 || value.length == 0) {
    errors.value['password'] = "password too short"
  } else if (value.match(letters) === null) {
    errors.value['password'] = "password must have a letter,number and special character"
  }
  else {
    errors.value['password'] = ''
  }
}

function SubmitConnect() {
  if (email.value.length == 0 && password.value.length == 0) {
    errors.value['password'] = "invalid password"
    errors.value['email'] = " invalid email"
  }

  if (!errors.value.email && !errors.value.password && email.value.length > 0 && password.value.length > 0) {
    const user = {
      "email": email.value,
      "password": password.value
    };
    //console.log(user);
    AuthStore1.connectUser(user);
  };
}

/* 
import bcrypt  from 'bcryptjs';
const motpass = "papa";
const motpasshash = bcrypt.hashSync(motpass);
console.log(motpasshash)
const correct = bcrypt.compareSync("papa", motpasshash);
console.log(correct); */
</script>

<style></style>