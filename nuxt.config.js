// import { defineNuxtConfig } from 'nuxt';
export default defineNuxtConfig({
  css: ["@/assets/css/roboto.css", "@/assets/css/main.css"],
  
  layout: 'error',
  hooks: {
    'error:nuxtError'(error, { app }) {
      console.error('An error occurred:', error.message);
      app.error(error);
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/fav.png' },
        { rel: 'stylesheet', href: 'https://js.api.here.com/v3/3.1/mapsjs-ui.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap' }
      ],
      // link: [
      //   {
      //     rel: "stylesheet",
      //     href: "https://js.api.here.com/v3/3.1/mapsjs-ui.css",
      //   },
      // ],
      // link: [
      //   {
      //     rel: 'stylesheet',
      //     href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
      //   },
      // ],
      script: [
        { src: "https://js.api.here.com/v3/3.1/mapsjs-core.js" },
        { src: "https://js.api.here.com/v3/3.1/mapsjs-service.js" },
        { src: "https://js.api.here.com/v3/3.1/mapsjs-mapevents.js" },
        { src: "https://js.api.here.com/v3/3.1/mapsjs-ui.js" },
        { src: "https://js.api.here.com/v3/3.1/mapsjs-clustering.js" },
        { src: "https://js.api.here.com/v3/3.1/mapsjs-data.js" },
      ],
   
    },
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss", '@nuxtjs/seo', 'nuxt-aos',
    '@zadigetvoltaire/nuxt-gtm',
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        apiOptions: {
          region: "", // Set 'US" if your space is created in US region (EU default)
        },
      },
    ],
  ],
  ssr: process.env.NUXT_PUBLIC_NODE_ENV === "production" ? true : false,

  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV,
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      FROM_EMAIL: process.env.FROM_EMAIL,
      TO_EMAIL: process.env.TO_EMAIL,
      SUBJECT: process.env.SUBJECT,
      REPLY_TO_EMAIL: process.env.REPLY_TO_EMAIL,
    },
  },
  site: {
    url: process.env.URL,
    name: 'OMC Global',
    defaultLocale: 'en',
  },
  seo: {
    redirectToCanonicalSiteUrl: true
  },
  gtm: {
    id: "GTM-P64PVFFR",
    enabled: true,
  },
  aos: {
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
  },
  plugins: ['~/plugin/aos.js',],
  
});
