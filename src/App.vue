<template>
  <div class="bg-bg text-text flex flex-col" style="height: 100dvh; overflow: hidden">
    <AppNav />
    <div class="flex-1 min-w-0 overflow-y-auto">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import AppNav from './components/AppNav.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
