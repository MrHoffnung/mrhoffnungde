<template>
  <section class="py-16" id="projects">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">
        My Projects
      </h2>
      <div class="grid grid-cols-1 md:mx-28 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col"
        >
          <div
            class="w-full h-48 object-cover flex justify-center align-middle items-center bg-gradient-to-tr"
            :class="project.gradient"
          >
            <NuxtImg
              :src="project.img"
              :key="project.title"
              :alt="project.title"
              class="w-32"
            />
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <div class="flex-grow">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
            </div>
            <NuxtLink
              :to="project.link"
              target="_blank"
              class="inline-block mt-4 relative rounded-lg border-2 border-purple-600 bg-purple-600 px-6 py-2 font-medium text-white transition hover:translate-y-1 max-w-fit"
              >Learn more</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const projects = ref([
  {
    id: 1,
    title: "ErrorDriven",
    gradient: "from-red-400 to-red-700",
    img: "/images/errordriven.png",
    description:
      "Organization that aims to bring beginners to open source and professional processes",
    link: "https://errordriven.rocks/",
  },
  {
    id: 2,
    title: "Ottilianer",
    gradient: "from-blue-400 to-blue-800",
    img: "/svg/ottilianer.svg",
    description: "Website of my school.",
    link: "https://ottilianer.de/",
  },
  {
    id: 3,
    title: "Auxilium Leonis",
    gradient: "from-orange-400 to-red-600",
    img: "/svg/auxilium-leonis.svg",
    description: "My notes of tutorials, prepared as cheat sheets.",
    link: "https://mrhoffnung.github.io/auxilium-leonis/",
  },
]);
</script>

<style></style>
