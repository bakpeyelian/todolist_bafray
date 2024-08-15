<script setup>

</script>

<template>
  <div class="flex flex-col h-screen justify-center items-center bg-gray-100">
    <div class="flex flex-col items-center">
        <h1 class="text-[120px] font-extrabold text-gray-700">404</h1>
        <p class="text-2xl font-medium text-gray-600 mb-6">Page Not Found</p>
        <a href="/"
            class="px-4 py-2 font-medium text-white bg-gray-500 rounded-md hover:bg-gray-700 transition-all duration-200 ease-in-out">
            <RouterLink to="/" >
              Go Home
            </RouterLink>
        </a>
    </div>
  </div>
 
</template>