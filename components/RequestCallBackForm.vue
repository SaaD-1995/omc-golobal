<template>
  <div>
    <div class="p-5">
      <form class="max-w-lg mx-auto" @submit.prevent="handleSubmit">
        <div class="mb-5 flex">
          <input
            type="text"
            v-model="firstName"
            id="firstName"
            class="shadow-sm border border-[#C1C3C1] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#454545] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="First Name*"
          />
          <input
            type="tel"
            id="phone"
            v-model="phone"
            class="ms-4 shadow-sm border border-[#C1C3C1] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#454545] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Phone*"
          />
          <!-- <input
            type="text"
            id="lastName"
            v-model="lastName"
            class="ms-4 shadow-sm border border-[#C1C3C1] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#454545] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Last Name*"
          /> -->
        </div>
        <div class="mb-5 flex">
          <input
            type="email"
            id="email"
            v-model="email"
            class="shadow-sm border border-[#C1C3C1] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#454545] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Email*"
          />
        </div>
        <div class="mb-5 flex">
          <select
            id="journey-type"
            v-model="selectType"
            placeholder="Journey Type"
            class="shadow-sm border border-[#C1C3C1] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#454545] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            @change="validateSelectType"
          >
            <option value="01">ASAP</option>
            <option value="02">Morning</option>
            <option value="03">Evening</option>
            <option value="04">Aftermoon</option>
          </select>
        </div>
        <div class="mb-5">
          <textarea
            id="message"
            v-model="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 rounded border border-[#C1C3C1] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-[#454545] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type you message here"
          ></textarea>
        </div>
        <div
          class="g-recaptcha"
          data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"
        ></div>
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
// const lastName = ref("");
const email = ref("");
const selectType = ref("");
const phone = ref("");
const message = ref("");
const isLoading = ref(false);
const submitAttempt = ref(false);
const selectTypeIsValid = ref(true);
const handleSubmit = () => {
  // Basic validation example
  isLoading.value = true;
  if (
    !firstName.value ||
    !selectTypeIsValid.value ||
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
    // lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
    selectType: selectType.value,
  });
  resetForm();
};

const resetForm = () => {
  firstName.value = "";
  selectType.value = "";
  email.value = "";
  phone.value = "";
  message.value = "";
  submitAttempt.value = false;
  selectTypeIsValid.value = true;
};
const validateSelectType = () => {
  // Validation logic for the select input
  selectTypeIsValid.value = !!selectType.value; // For example, here we're checking if the value is not empty
};
</script>

<!-- <script>
export default {
  mounted() {
    // Load reCAPTCHA script
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  },
};
</script> -->
