<script setup>
import EventService from "@/services/EventService";
import { onMounted, ref } from "vue";

const event = ref(null);
const props = defineProps({ id: { requried: true } });

onMounted(() => {
  EventService.getEvent(props.id)
    .then((Response) => (event.value = Response.data))
    .catch((err) => console.log(err));
});
</script>

<template>
  <div v-if="event" class="flex flex-col justify-center items-center gap-5">
    <h1 class="font-black text-xl">{{ event.title }}</h1>
    <p>
      {{ event.time }} on
      {{ event.date }}
      @ {{ event.location }}
    </p>
    <p>{{ event.description }}</p>
  </div>
</template>
