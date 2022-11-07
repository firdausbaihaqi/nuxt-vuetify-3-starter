import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config: any) =>
        config.plugins?.push(vuetify())
      );
    },
  ],
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
