<template>
  <div class=" w-screen h-screen bg-white">
    <button class=" text-zinc-900 dark:text-white" @click="handleTheme">{{ currentTheme }}</button>
    <m-input v-model="text" class=" w-[300px] mx-auto mt-2" max="20"></m-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const THEME_LIGHT = "light"
const THEME_DARK = "dark"
const currentTheme = ref(THEME_LIGHT)
// const themeArr = [THEME_LIGHT, THEME_DARK]
const handleTheme = () => {
  if (currentTheme.value === THEME_LIGHT) {
    document.documentElement.classList.add(THEME_DARK)
  } else if (currentTheme.value === THEME_DARK) {
    document.documentElement.className = THEME_LIGHT
  }
}

document.documentElement.className = THEME_DARK

const text = ref("")

</script>

<style lang='scss' scoped></style>
