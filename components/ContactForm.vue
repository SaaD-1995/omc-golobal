<template>
  <div>
    <div class="p-5" v-if="$route.path === '/'">
      <h1 class="text-6xl text-primary text-center pb-5 font-semibold">Book Now</h1>
      <form class="max-w-full mx-auto" @submit.prevent="handleSubmit">
        <section class="mb-5 grid grid-cols-12 gap-2">
          <article class="col-span-6 md:col-span-3">
            <input
              type="text"
              v-model="firstName"
              id="firstName"
              class="shadow-sm border border-[#C1C3C1] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#454545] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="First Name*"
            />
          </article>
          <article class="col-span-6 md:col-span-3">
            <input
              type="text"
              id="lastName"
              v-model="lastName"
              class="shadow-sm border border-[#C1C3C1] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#454545] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Last Name*"
            />
          </article>
          <article class="col-span-6 md:col-span-3">
            <input
              type="email"
              id="email"
              v-model="email"
              class="shadow-sm border border-[#C1C3C1] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#454545] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Email*"
            />
          </article>
          <article class="col-span-6 md:col-span-3">
            <input
              type="tel"
              id="phone"
              v-model="phone"
              class="shadow-sm border border-[#C1C3C1] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#454545] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Phone*"
            />
          </article>
        </section>

        <div class="mb-5 flex gap-2">
          <textarea
            id="message"
            v-model="message"
            rows="1"
            class="block p-2.5 w-full text-sm text-gray-900 rounded border border-[#C1C3C1] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#454545] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type you message here"
          ></textarea>
          <button
            type="submit"
            class="text-white w-[25%] bg-gradient-to-r from-[#BDC200] via-[#95C11F] to-[#3AAA35] hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-3 flex justify-center items-center h-12 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span v-if="!isLoading">Submit</span>
            <span v-else>
              <ArrowPathIcon class="w-6 h-6 animate-spin" />
            </span>
          </button>
        </div>
      </form>
      <p
        v-show="errMsg"
        class="text-center pt-0 text-red-500 transition-all duration-300"
      >
        {{ errMessage }}
      </p>
    </div>
    <div v-else class="bg-bgAbout rounded-xl border-[1px] border-[#C1C3C1] p-5">
      <form class="max-w-lg mx-auto" @submit.prevent="handleSubmit">
        <div class="mb-5 flex">
          <input
            type="text"
            v-model="firstName"
            id="firstName"
            class="shadow-sm bg-bgAbout border border-[#C1C3C1] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#454545] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="First Name*"
          />
          <input
            type="text"
            id="lastName"
            v-model="lastName"
            class="ms-4 shadow-sm bg-bgAbout border border-[#C1C3C1] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#454545] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Last Name*"
          />
        </div>
        <div class="mb-5 flex">
          <input
            type="email"
            id="email"
            v-model="email"
            class="shadow-sm bg-bgAbout border border-[#C1C3C1] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#454545] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Email*"
          />
          <input
            type="tel"
            id="phone"
            v-model="phone"
            class="ms-4 shadow-sm bg-bgAbout border border-[#C1C3C1] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#454545] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Phone*"
          />
        </div>
        <div class="mb-5">
          <textarea
            id="message"
            v-model="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 rounded bg-bgAbout border border-[#C1C3C1] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#454545] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type you message here"
          ></textarea>
        </div>
        <button
          type="submit"
          class="text-white w-[40%] bg-gradient-to-r from-[#BDC200] via-[#95C11F] to-[#3AAA35] hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-3 flex justify-center items-center h-12 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span v-if="!isLoading">Submit</span>
          <span v-else>
            <ArrowPathIcon class="w-6 h-6 animate-spin" />
          </span>
        </button>
      </form>
      <p
        v-show="errMsg"
        class="text-center pt-5 text-red-500 transition-all duration-300"
      >
        {{ errMessage }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ArrowPathIcon } from "@heroicons/vue/24/outline";
const errMessage = "All fields are required*";
const errMsg = ref(false);
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");
const isLoading = ref(false);
const handleSubmit = () => {
  // Basic validation example
  isLoading.value = true;
  if (
    !firstName.value ||
    !lastName.value ||
    !email.value ||
    !phone.value ||
    !message.value
  ) {
    setTimeout(() => {
      errMsg.value = true;
      isLoading.value = false;
    }, 1000);
    return;
  } else {
    setTimeout(() => {
      errMsg.value = false;
      isLoading.value = false;
      console.log("Form Submitted");
    }, 1000);
  }
  console.log({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  });
  resetForm();
};

const resetForm = () => {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  phone.value = "";
  message.value = "";
};
</script>
