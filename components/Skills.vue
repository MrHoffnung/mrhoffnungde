<template>
  <div class="relative p-12 lg:pt-12 bg-purple-50" id="skills">
    <h1 class="text-center text-4xl font-bold leading-snug text-slate-700">
      My Skills
    </h1>
    <p class="mt-2 text-lg text-gray-600 text-center">
      Here are my favorite tools and technologies that I use to build awesome
      projects.
    </p>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
      <div class="">
        <NuxtMarquee
          :auto-fill="true"
          class="mx-auto max-w-lg lg:max-w-full lg:items-center"
        >
          <img
            v-for="skill in skills"
            :key="skill.name"
            :src="skill.icon"
            :alt="skill.name"
            width="100px"
            class="mx-16"
          />
        </NuxtMarquee>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const skills = {
  python: {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    url: "https://www.python.org/",
  },
  typescript: {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    url: "https://www.typescriptlang.org/",
  },
  php: {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    url: "https://www.php.net/",
  },
  django: {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    url: "https://djangoproject.com/",
  },
  symfony: {
    name: "Symfony",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg",
    url: "https://symfony.com/",
  },
  nuxt: {
    name: "Nuxt",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg",
    url: "https://nuxt.com",
  },
  rust: {
    name: "Rust",
    icon: "https://www.svgrepo.com/show/374056/rust.svg",
    url: "https://www.rust-lang.org/",
  },
};
</script>

<style></style>
