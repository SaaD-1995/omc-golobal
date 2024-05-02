<template>
    <div class="">
        <label class="text-xs font-normal sm:text-sm tracking-wide">
          {{ label }}
        </label>
      <article class="flex gap-2">
       
        <!-- Country code select dropdown -->
        <select :value="selectedCountryCode" @input="updateCountryCode" class="border rounded p-2">
          <!-- You can populate options dynamically or hardcode them -->
          <option value="+1">+1 (USA)</option>
          <option value="+44">+44 (UK)</option>
          <!-- Add more country codes as needed -->
        </select>
      
  
     
        <div class="relative mt-2 rounded-md">
          <!-- Phone number input -->
          <input
            :disabled="disabled"
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            :value="phoneNumber"
            @input="updatePhoneNumber"
            :class="classes"
            class="p-3 w-full ring-lightGray rounded-md appearance-none focus:outline-none transition-all"
            placeholder="Enter phone number"
          />
        </div>
      </article>
  
      <!-- Display error message if needed -->
      <p v-if="displayError" class="flex items-center h-5 font-medium tracking-tight text-xs text-error ml-1">
        {{ error }}
      </p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: String,
      disabled: Boolean,
      displayError: Boolean,
      error: String,
      selectedCountryCode: String, // Prop to pass the selected country code
      phoneNumber: String, // Prop to pass the phone number
    },
    methods: {
      updateCountryCode(event) {
        this.$emit('update:selectedCountryCode', event.target.value);
      },
      updatePhoneNumber(event) {
        this.$emit('update:phoneNumber', event.target.value);
      },
    },
  };
  </script>
  
  <style scoped></style>
  