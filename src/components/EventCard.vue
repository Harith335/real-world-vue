<script setup>
defineProps({
  event: {
    type: Object,
    requried: true,
  },
});
</script>

<template>
  <router-link :to="{ name: 'details', params: { id: event.id } }">
      <div class="event-card">
        <h2 class="text-center font-black">
          {{ event.title }}
        </h2>
        <span>@{{ event.time }} on {{ event.date }}</span>
      </div>
  </router-link>
</template>
