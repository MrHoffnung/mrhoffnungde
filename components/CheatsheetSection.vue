<template>

  <div v-show="cheatsheets.length > 0">
    <h2 class="text-3xl font-bold mb-4">{{ props?.title }}</h2>
    <div v-if="cheatsheets.length == 0" class="flex items-center justify-center h-96">
      <p class="text-2xl text-gray-600">No blogs found</p>
    </div>
    <div v-else class="grid grid-cols-3 justify-center flex-1 gap-3" :class="`grid-rows-${gridRows}`">
      <NuxtLink :to="slug" v-for="{ _path: slug, title, date, description, img } in cheatsheets" :key="slug">
        <div
          class="flex flex-row justify-center align-middle items-center gap-4 border p-4 rounded-xl border-purple-500 shadow-purple-600 shadow-2xl">
          <img
            :src="img"
            class="h-20 w-auto">
          <div class="flex flex-col justify-center">
            <h2 class="text-2xl font-bold text-gray-800">{{ title }}</h2>
            <p class="text-gray-600 max-w-64">{{ description }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  title: String,
  identifier: String,
});

const cheatsheets = (await queryContent('/cheatsheets')
  .sort({ date: -1 })
  .where({ _partial: false })
  .find()).filter((cs) => cs.category === props?.identifier);

const gridRows = Math.ceil(cheatsheets.length / 3);
</script>