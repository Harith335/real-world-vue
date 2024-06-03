<script setup>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService";
import { onMounted, ref } from "vue";

const events = ref(null);

onMounted(() => {
  EventService.getEvents()
    .then((Response) => (events.value = Response.data))
    .catch((err) => console.log(err));
});
</script>
<template>
  <div class="flex flex-col justify-center items-center">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
