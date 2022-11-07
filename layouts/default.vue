<template>
  <v-app :theme="theme">
    <v-app-bar title="Nuxt Vuetify 3 - Starter" color="grey-lighten-2">
      <template #prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <v-spacer />

      <v-btn
        :prepend-icon="
          theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        "
        @click="onClick"
        >Toggle Theme</v-btn
      >
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" color="grey-darken-2">
      <v-list nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :value="item"
          active-color="primary"
        >
          <NuxtLink :to="item.link">
            <v-list-item-title
              class="text-white"
              v-text="item.title"
            ></v-list-item-title>
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="mt-10">
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

const theme = ref("light");
const drawer = ref(true);
const items = [
  {
    title: "Page 1",
    link: "/",
  },
  {
    title: "Page 2",
    link: "/page2",
  },
];

function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>
