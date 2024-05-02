import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
// import { defineNuxtPlugin } from 'vue';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("vue-date-picker", VueDatePicker);
});