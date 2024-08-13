<template>
  <div class="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
    <div
      class="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
      <div
        class="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-yellow-900 to-yellow-800 lg:px-8 px-4 py-4">
        <div>
          <h4 class="text-white text-lg font-semibold">Create Your Account</h4>
          <p class="text-[13px] text-gray-300 mt-3 leading-relaxed">Welcome to our registration page! Get started by
            creating your account.</p>
        </div>
        <div>
          <h4 class="text-white text-lg font-semibold">Simple & Secure Registration</h4>
          <p class="text-[13px] text-gray-300 mt-3 leading-relaxed">Our registration process is designed to be
            straightforward and secure. We prioritize your privacy and data security.</p>
        </div>
      </div>
      <form class="md:col-span-2 w-full py-6 px-6 sm:px-16">
        <div class="mb-6 justify-center my-auto x-full">
          <img src="../../public/logo ToDo.png" alt="Logo du site" class="w-6/12 mx-auto">
          <h3 class="text-gray-800 text-2xl font-bold text-center">Create an account</h3>
        </div>

        <div class="space-y-6">
          <div>
            <label class="text-gray-800 text-sm mb-2 block"><strong>Fullname</strong></label>
            <div>
              <span class="text-sm text-red-500" v-if="errors.fullname">{{ errors.fullname }}</span>
            </div>
            <div class="relative flex items-center">
              <input v-model="fullname" type="text" required
                class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter fullname" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4"
                viewBox="0 0 24 24">
                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                <path
                  d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                  data-original="#000000"></path>
              </svg>
            </div>
          </div>

          <div>
            <label class="text-gray-800 text-sm mb-2 block"><strong>Email</strong></label>
            <div>
              <span class="text-sm text-red-500" v-if="errors.email">{{ errors.email }}</span>
            </div>
            <div class="relative flex items-center">
              <input v-model="email" type="email" required
                class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter email" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-4 h-4 absolute right-4"
                viewBox="0 0 682.667 682.667">
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                  </clipPath>
                </defs>
                <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                  <path fill="none" stroke-miterlimit="10" stroke-width="40"
                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                    data-original="#000000"></path>
                  <path
                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                    data-original="#000000"></path>
                </g>
              </svg>
            </div>
          </div>

          <div>
            <label class="text-gray-800 text-sm mb-2 block"><strong>Password</strong></label>
            <div class="relative flex items-center">
              <div>
                <span class="text-sm text-red-500" v-if="errors.password">{{ errors.password }}</span>
              </div>
              <input v-model="password" type="password" required
                class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder="Enter password" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                class="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                <path
                  d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                  data-original="#000000"></path>
              </svg>
            </div>
          </div>

          <div>
            <label class="text-gray-800 text-sm mb-2 block"><strong>Confirm Password</strong></label>
            <span class="text-sm text-red-500" v-if="errors.passwordConfirm">{{ errors.passwordConfirm }}</span>
            <div class="relative flex items-center">
              <input v-model="passwordConfirm" type="password" required
                class="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                placeholder="Confirm password" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                class="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                <path
                  d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                  data-original="#000000"></path>
              </svg>
            </div>
          </div>

          <div class="flex items-center">
            <span for="remember-me" class="ml-3 block text-sm text-gray-800 text-center">
              By creating this account, you accespant our <RouterLink to="/policity" class="text-black-600 font-semibold hover:underline ml-1">terms
                and conditions</RouterLink>
            </span>
          </div>
        </div>

        <div class="!mt-12">
          <button @click="SubmitUser()" type="button"
            class="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-yellow-900 hover:bg-yellow-900 focus:outline-none">
            <strong>Create an account</strong>
          </button>
        </div>
        <p class="text-gray-800 text-sm mt-6 text-center">Already have an account? <RouterLink to="/login"
            class="text-black-600 font-semibold hover:underline ml-1">Login here</RouterLink> or <RouterLink to="/"
            class="text-black-600 font-semibold hover:underline ml-1">Back to home</RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, watch } from 'vue';
import { useAuthStore } from '@/stores/Auth';
import router from '@/router';
import bcrypt from 'bcryptjs';

const AuthStore = useAuthStore();
const fullname = ref('');
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');
const coche = ref('');
const errors = ref([]);


//Verification du fullname
watch(fullname, (value) => {
  verifyUsername(value)
})
function verifyUsername(value) {
  const letters = /^[A-Za-z0-9'_\- ]+$/;
  if (value.length < 3 || value.length == 0) {
    errors.value['fullname'] = "fullname too short"
  } else if (value.match(letters) === null) {
    errors.value['fullname'] = " Invalid fullname"
  } else if (value.length > 20) {
    errors.value['fullname'] = " fullname too long"
  }
  else {
    errors.value['fullname'] = ''
  }
}

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

//verification password confirm
watch(passwordConfirm, (value) => {
  if (value !== password.value) {
    errors.value['passwordConfirm'] = "The two passwords do not match"
  } else {
    errors.value['passwordConfirm'] = ''
  }
})

//verification avant soumission
function SubmitUser() {
  console.log(fullname, email, password, passwordConfirm, coche)
  if (fullname.value.length == 0 && email.value.length == 0 && password.value.length == 0) {
    errors.value['password'] = "invalid password"
    errors.value['email'] = " invalid email"
    errors.value['username'] = " Invalid name"
  }

  if (!errors.value.fullname && !errors.value.email && !errors.value.password && !errors.value.passwordConfirm && fullname.value.length > 0 && email.value.length > 0 && password.value.length > 0) {
    const passwordhash = bcrypt.hashSync(password.value);
    console.log(passwordhash)
    const user = ref({
      fullname: fullname.value,
      email: email.value,
      password: passwordhash
    })
    AuthStore.addUser(user);
    alert('Account created succeful')
    router.push("/login")
  }
}
</script>

<style></style>