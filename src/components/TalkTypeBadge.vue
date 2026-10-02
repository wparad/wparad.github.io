<template>
  <span :class="['text-xs font-medium px-1.5 py-0.5 rounded', type === 'podcast' ? 'bg-emerald-900/40 text-emerald-400' : 'bg-accent/15 text-accent']">
    {{ type === 'podcast' ? 'Podcast' : 'Conference' }}
  </span>
</template>

<script setup>
defineProps({
  type: { type: String, required: true },
});
</script>
