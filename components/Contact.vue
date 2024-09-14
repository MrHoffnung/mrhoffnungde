<template>
  <div class="relative py-12 sm:py-16 lg:pt-20 bg-purple-50" id="contact">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-lg grid-cols-1 gap-y-12 lg:max-w-full lg:grid-cols-2 lg:items-center lg:gap-x-8">
        <div>
          <div class="text-center lg:text-left">
            <div class="sm:flex sm:justify-center lg:block">
              <h1 class="max-w-md text-4xl font-bold leading-snug sm:text-5xl sm:leading-snug">
                Any questions? <br class="block sm:hidden" />
                <br class="hidden sm:block" />
                <span class="rounded-xl bg-purple-600 px-2 pb-2 text-white">Contact</span>
                me
              </h1>
            </div>
            <p class="mt-10 text-lg text-gray-600 sm:mt-8">
              You want to work with me, have questions or just want to try out whether the contact form works?<br />
              Feel free to fill out the form. I will try to respond within 24 hours.
            </p>
          </div>
        </div>

        <div class="flex flex-col px-12 lg:px-24 text-lg">
          <div class="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
            <div class="flex justify-between items-center">
              <div class="flex space-x-2 text-red-500">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p class="text-sm">bash</p>
            </div>
            <div class="mt-4">
              <p class="text-green-400">$ email</p>
              <p class="text-white">Email: <a href="mailto:gall.dev@proton.me">gall.dev@proton.me</a></p>
              <p class="text-green-400">$ discord</p>
              <p class="text-white">Discord: mrhoffnung</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>