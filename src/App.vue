<template>
  <div>
    <Resume v-if="resume" />
    <Fractional v-else-if="fractional" />
    <Home v-else />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Home from './components/home.vue';
import Resume from './components/resume.vue';
import Fractional from './components/fractional.vue';

const resume = computed(() => {
  return !!new URL(window.location).pathname.match('resume') || !!window.location.href.match('resume');
});

const fractional = computed(() => {
  return !!new URL(window.location).pathname.match('fractional') || !!window.location.href.match('fractional');
});

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
