<script setup></script>
<template>
  <div class="font-sans font-normal antialiased text-center text-gray-700">
    <nav class="p-8">
      <router-link :to="{ name: 'event-list' }"
        ><a class="link" href="#">Home</a></router-link
      >
      |
      <router-link :to="{ name: 'about' }"
        ><a class="link" href="#">About</a></router-link
      >
    </nav>
  </div>
  <router-view />
</template>
