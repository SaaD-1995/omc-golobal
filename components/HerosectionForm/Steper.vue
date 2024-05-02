<template>
  <div
    v-if="!thankYou"
    class="bg-white md:w-full lg:w-[90%] w-full md:-mt-20 md:mb-20 rounded-md px-4 sm:px-10 lg:px-10 md:px-5 h-full py-14"
  >
    <section>
      <article v-if="step === 1">
        <h2 class="text-center text-3xl sm:text-[40px] font-medium">Quick Quote</h2>
        <p class="pt-2 text-base text-center">Click here for more complex quotes</p>
      </article>
      <article v-if="step === 2">
        <h2 class="text-center text-3xl sm:text-[40px] font-medium">Add Return?</h2>
        <p class="pt-2 text-base text-center">Click here for more complex quotes</p>
      </article>
      <article v-if="step === 3">
        <h2 class="text-center text-3xl sm:text-[40px] font-medium">Enquire Now</h2>
        <p class="pt-2 text-base text-center">Experience luxury travel from £999.</p>
      </article>
      <article v-if="step === 4">
        <h2 class="text-center text-3xl sm:text-[40px] font-medium">Enquire Now</h2>
        <p class="pt-2 text-base text-center">Experience luxury travel from £999.</p>
      </article>

      <!-- Slider     :style="{ background: sliderBackground }" -->
      <div class="range-item">
        <input
          type="range"
          min="0"
          max="100"
          :value="sliderValue"
          name="date"
          id="dae1"
          step="5"
          class="w-full bg-red-500 h-[5px] mt-8 rounded-md range-slider"
          @input="updateSlider"
        />
        <div class="range-line">
          <span class="active-line"></span>
        </div>
      </div>

      <!-- First Form QuickQuote QuickQuote @formSubmitted="completeStep" -->
      <article v-if="step === 1" class="mt-7">
        <form @submit.prevent="handleSubmitStep1">
          <div class="flex gap-3 mb-5">
            <article class="w-full mt-3">
              <vue-date-picker
                placeholder="Pick up Date"
                auto-apply
                utc
                :enable-time-picker="false"
                :min-date="now"
                v-model="selectedDate"
                :class="{
                  'border-red-500 border-[1px]': submitAttempt && !selectedDate,
                }"
                class="border-0 border-[#a6a6a6] rounded-md"
              ></vue-date-picker>

              <p v-if="submitAttempt && !selectedDate" class="text-sm text-red-500">
                Pick up Date is required
              </p>
            </article>
            <article class="w-full mt-3">
              <vue-date-picker
                placeholder="Pick up Time"
                utc
                time-picker
                v-model="selectedTime"
                :time-format="'HH:mm'"
                :class="{
                  'border-red-500 border-[1px]': submitAttempt && !selectedTime,
                }"
                class="border-0 border-[#a6a6a6] rounded-md"
              >
              </vue-date-picker>
              <p v-if="submitAttempt && !selectedTime" class="text-sm text-red-500">
                Pick up Time is required
              </p>
            </article>
          </div>
          <input
            autocomplete="off"
            type="text"
            placeholder="Pick Up Address & Postcode"
            :class="{
              'border-red-500 border-[1px]': submitAttempt && !pickupAddress.trim(),
            }"
            class="block w-full px-3 border-0 rounded-md h-11 placeholder:text-sm placeholder:text-gray ring-1 ring-lightGrayColor focus:outline-none"
            v-model="pickupAddress"
          />
          <p v-if="submitAttempt && !pickupAddress.trim()" class="text-sm text-red-500">
            Pick Up Address & Postcode is required
          </p>
          <input
            autocomplete="off"
            type="text"
            placeholder="Drop Off Address & Postcode"
            :class="{
              'border-red-500 border-[1px]': submitAttempt && !dropoffAddress.trim(),
            }"
            class="block w-full px-3 mt-5 border-0 rounded-md h-11 placeholder:text-sm placeholder:text-gray ring-1 ring-lightGrayColor focus:outline-none"
            v-model="dropoffAddress"
          />
          <p v-if="submitAttempt && !dropoffAddress.trim()" class="text-sm text-red-500">
            Drop Off Address & Postcode is required
          </p>

          <button
            type="submit"
            class="mt-5 h-11 flex justify-center items-center text-white w-full bg-gradient-to-r from-[#BDC200] via-[#95C11F] to-[#3AAA35] hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-md text-base text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span v-if="!isLoading">{{ buttonText }}</span>
            <span v-else>
              <ArrowPathIcon class="w-6 h-6 animate-spin" />
            </span>
          </button>
        </form>
        <p class="px-3 pt-4 text-sm font-medium text-center sm:px-36 md:px-10 lg:px-14">
          Your information will not be used by third-parties for marketing.
        </p>
      </article>

      <!-- Second Form Add Return  AddReturn @formSubmitted="completeStep"-->
      <article v-else-if="step === 2" v-show="addReturn" class="mt-7">
        <form @submit.prevent="handleSubmitStep2">
          <div class="flex gap-3 mb-5">
            <article class="w-full mt-3">
              <vue-date-picker
                placeholder="Select Date"
                auto-apply
                utc
                :enable-time-picker="false"
                :min-date="now"
                :class="{
                  'border-red-500 border-[1px]': submitAttempt && !returnDate,
                }"
                v-model="returnDate"
                class="border-0 h-10 border-[#a6a6a6] rounded-md text-[#697069] text-base focus:ring-blue-500 block w-full dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
              ></vue-date-picker>
              <p v-if="submitAttempt && !returnDate" class="text-sm text-red-500">
                Return Date is required
              </p>
            </article>
            <article class="w-full mt-3">
              <vue-date-picker
                placeholder="Select Time"
                utc
                time-picker
                :time-format="'HH:mm'"
                v-model="returnTime"
                :class="{
                  'border-red-500 border-[1px]': submitAttempt && !returnTime,
                }"
                class="border-0 border-[#a6a6a6] rounded-md"
              >
              </vue-date-picker>
              <p v-if="submitAttempt && !returnTime" class="text-sm text-red-500">
                Return Time is required
              </p>
            </article>
          </div>
          <div class="flex gap-3 mt-10">
            <button
              @click="skipAdd"
              class="w-full text-lg h-11 rounded-md text-center border-[2px] bg-gradient-to-r from-[#BDC200] via-[#95C11F] to-[#3AAA35] text-transparent bg-clip-text border-gradient"
            >
              Skip
            </button>
            <button
              type="submit"
              class="text-white flex justify-center items-center w-full h-11 bg-gradient-to-r from-[#BDC200] via-[#95C11F] to-[#3AAA35] hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-md text-base text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span v-if="!isLoading">{{ buttonText }}</span>
              <span v-else>
                <ArrowPathIcon class="w-6 h-6 animate-spin" />
              </span>
            </button>
          </div>
        </form>
        <p class="px-3 pt-4 text-sm font-medium text-center sm:px-36 md:px-10 lg:px-14">
          Your information will not be used by third-parties for marketing.
        </p>
      </article>

      <!-- Third Form EnquireNowPerson-->
      <article v-else-if="step === 3" class="mt-7">
        <form @submit.prevent="handleSubmitStep3">
          <article>
            <input
              type="text"
              id="Name"
              class="block w-full px-3 mt-5 border-0 rounded-md h-11 placeholder:text-sm placeholder:text-gray ring-1 ring-lightGrayColor focus:outline-none"
              placeholder="Name"
              v-model="name"
              :class="{
                'border-red-500 border-[1px]': submitAttempt && !nameIsValid,
              }"
              @input="validateName"
            />
            <span v-if="submitAttempt && !nameIsValid" class="text-sm text-red-500"
              >Name is required</span
            >
          </article>
          <article>
            <input
              type="text"
              id="phone-input"
              aria-describedby="helper-text-explanation"
              class="block w-full px-3 mt-5 border-0 rounded-md h-11 placeholder:text-sm placeholder:text-gray ring-1 ring-lightGrayColor focus:outline-none"
              placeholder="Phone"
              :class="{
                'border-red-500 border-[1px]':
                  submitAttempt && (!phoneNumberIsValid || !phoneNumberFormatIsValid),
              }"
              v-model="phoneNumber"
              @input="validatePhoneNumber"
            />
            <span v-if="submitAttempt && !phoneNumberIsValid" class="text-sm text-red-500"
              >Phone is required</span
            >
            <span
              v-else-if="submitAttempt && !phoneNumberFormatIsValid"
              class="text-sm text-red-500"
              >Invalid Phone Number</span
            >
          </article>
          <article>
            <input
              type="email"
              id="email"
              class="block w-full px-3 mt-5 border-0 rounded-md h-11 placeholder:text-sm placeholder:text-gray ring-1 ring-lightGrayColor focus:outline-none"
              placeholder="Email Address"
              :class="{
                'border-red-500 border-[1px]':
                  submitAttempt && (!emailIsValid || !emailFormatIsValid),
              }"
              v-model="email"
              @input="validateEmail"
            />
            <span v-if="submitAttempt && !emailIsValid" class="text-sm text-red-500"
              >Email is required</span
            >
            <span
              v-else-if="submitAttempt && !emailFormatIsValid"
              class="text-sm text-red-500"
              >Incorrect Email</span
            >
          </article>
          <article>
            <select
              id="journey-type"
              v-model="selectType"
              placeholder="Journey Type"
              :class="{
                'border-red-500 border-[1px]': submitAttempt && !selectTypeIsValid,
              }"
              class="block w-full px-3 mt-5 border-0 rounded-md h-11 placeholder:text-sm placeholder:text-gray ring-1 ring-lightGrayColor focus:outline-none"
              @change="validateSelectType"
            >
              <option value="" disabled selected class="text-gray-500 text-sm">
                Journey Type
              </option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="04">04</option>
              <option value="05">05</option>
            </select>
            <span v-if="submitAttempt && !selectTypeIsValid" class="text-sm text-red-500"
              >Please select a journey type</span
            >
          </article>
          <button
            type="submit"
            class="mt-5 flex justify-center items-center text-white w-full bg-gradient-to-r from-[#BDC200] via-[#95C11F] to-[#3AAA35] hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-md text-base px-7 h-11 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span v-if="!isLoading">Confirm Journey</span>
            <span v-else>
              <ArrowPathIcon class="w-6 h-6 animate-spin" />
            </span>
          </button>
        </form>
        <p class="px-3 pt-4 text-sm font-medium text-center sm:px-36 md:px-10 lg:px-14">
          Your information will not be used by third-parties for marketing.
        </p>
      </article>

      <!-- Fourth Form -->
      <article v-else class="mt-7">
        <form @submit.prevent="handleSubmitStep4">
          <article>
            <select
              id="journey-type"
              v-model="passengersNum"
              placeholder="Number of Passengers"
              :class="{
                'border-red-500 border-[1px]': submitAttempt && !passengersNum,
              }"
              class="block w-full px-3 mt-5 border-0 rounded-md h-11 placeholder:text-sm placeholder:text-gray-500 ring-1 ring-lightGrayColor focus:outline-none"
            >
              <option value="" disabled selected class="text-gray-500 text-sm">
                Number of Passengers
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <span v-if="submitAttempt && !passengersNum" class="text-sm text-red-500"
              >Please select a Number of Passengers</span
            >
          </article>
          <article>
            <select
              id="journey-type"
              v-model="vehicleTypeClass"
              :class="{
                'border-red-500 border-[1px]': submitAttempt && !vehicleTypeClass,
              }"
              class="block w-full px-3 mt-5 border-0 rounded-md h-11 placeholder:text-sm placeholder:text-gray ring-1 ring-lightGrayColor focus:outline-none"
            >
              <option value="" disabled selected class="text-gray-500 text-sm">
                Vehicle Class
              </option>
              <option value="52">Economy</option>
              <option value="53">Premium</option>
              <option value="54">Business</option>
              <option value="55">First</option>
            </select>
            <span v-if="submitAttempt && !vehicleTypeClass" class="text-sm text-red-500"
              >Please select a Vehicle Class</span
            >
          </article>
          <textarea
            id="message"
            rows="5"
            class="block w-full px-4 py-3 mt-5 border-0 rounded-md placeholder:text-sm placeholder:text-gray ring-1 ring-lightGrayColor focus:outline-none"
            placeholder="Additional Information"
            v-model="message"
          ></textarea>
          <button
            type="submit"
            class="text-white mt-5 flex justify-center items-center w-full bg-gradient-to-r from-[#BDC200] via-[#95C11F] to-[#3AAA35] hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-md text-base px-7 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span v-if="!isLoading">Get Price</span>
            <span v-else>
              <ArrowPathIcon class="w-6 h-6 animate-spin" />
            </span>
          </button>
        </form>
        <p class="px-3 pt-4 text-sm font-medium text-center sm:px-36 md:px-10 lg:px-14">
          Your information will not be used by third-parties for marketing.
        </p>
      </article>
    </section>
  </div>
  <!-- <div>
    <ThankYou v-show="thankYou" />
  </div> -->
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watchEffect, watch } from "vue";
// import ThankYou from "./ThanYou.vue";
import moment from "moment";
import { ArrowPathIcon } from "@heroicons/vue/24/outline";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { sendEmail } from "../../composables/email";
import { useRouter } from "vue-router";

const router = useRouter();
import axios from "axios";

// form api
const api =
  "https://operator.savari.io/web_api_v3.php?company_name=omc&action=save_web_job";

console.log("api is:", api);
const now = new Date();
const thankYou = ref(false);
const addReturn = ref(true);
const step = ref(1);
const submitAttempt = ref(false);
const sliderValue = ref(0);
const isLoading = ref(false);
const buttonText = ref("Next");

// step 1
const selectedTime = ref("");
const selectedDate = ref("");
const pickupAddress = ref("");
const dropoffAddress = ref("");
// step 2
const returnDate = ref("");
const returnTime = ref("");
// step 3
const name = ref("");
const email = ref("");
const phoneNumber = ref("");
const selectType = ref("");
// step 4
const vehicleTypeClass = ref("");
const passengersNum = ref("");
const message = ref("");
const selectPassegerNum = ref(false);
const selectClassVehicle = ref(false);
const validateSelectPassenger = () => {
  selectPassegerNum.value = !!passengersNum.value;
};

const validateSelectCar = () => {
  selectClassVehicle.value = !!vehicleTypeClass.value;
};

const validateForm = () => {
  validateSelectPassenger();
  validateSelectCar();
};
const allStepsCompleted = computed(() => {
  switch (step.value) {
    case 1:
      return (
        selectedDate.value &&
        selectedTime.value &&
        pickupAddress.value.trim() &&
        dropoffAddress.value.trim()
      );
    case 2:
      return returnDate.value && returnTime.value;
    case 3:
      return (
        nameIsValid.value &&
        emailIsValid.value &&
        phoneNumberIsValid.value &&
        phoneNumberFormatIsValid.value &&
        emailFormatIsValid.value &&
        selectTypeIsValid.value
      );
    case 4:
      return (
        selectPassegerNum.value &&
        selectClassVehicle.value &&
        passengersNum.value &&
        vehicleTypeClass.value
      );
    default:
      return false;
  }
});

function completeStep() {
  submitAttempt.value = false;
  if (step.value < 4) {
    step.value++;
    sliderValue.value = (step.value - 1) * 33.33;
  } else {
    thankYou.value = true;
    // console.log("Step completed. Current step:", step.value);
  }
}
function skipAdd() {
  addReturn.value = false;
  completeStep();
}
const nameIsValid = ref(false);
const emailIsValid = ref(false);
const phoneNumberIsValid = ref(false);
const phoneNumberFormatIsValid = ref(false);
const emailFormatIsValid = ref(false);
const selectTypeIsValid = ref(false);

const validateName = () => {
  nameIsValid.value = !!name.value;
};

const validateEmail = () => {
  emailIsValid.value = !!email.value;
  if (emailIsValid.value) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailFormatIsValid.value = regex.test(email.value);
  }
};

const validatePhoneNumber = () => {
  phoneNumberIsValid.value = !!phoneNumber.value;
  if (phoneNumberIsValid.value) {
    const regex = /^\d+$/;
    phoneNumberFormatIsValid.value = regex.test(phoneNumber.value);
  } else {
    phoneNumberFormatIsValid.value = true;
  }
};

const validateSelectType = () => {
  selectTypeIsValid.value = !!selectType.value;
};

// step one form..
const handleSubmitStep1 = () => {
  submitAttempt.value = true;
  isLoading.value = true;
  if (
    !selectedDate.value ||
    !selectedTime.value ||
    !pickupAddress.value.trim() ||
    !dropoffAddress.value.trim()
  ) {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
    return;
  } else {
    setTimeout(() => {
      isLoading.value = false;
      // console.log("Quick Form Submitted");
      completeStep();
    }, 1000);
  }
};

// step 2 form..
const handleSubmitStep2 = () => {
  submitAttempt.value = true;
  isLoading.value = true;
  if (!returnDate.value || !returnTime.value) {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
    return;
  } else {
    setTimeout(() => {
      isLoading.value = false;
      // console.log("Add Form Submitted");
      completeStep();
    }, 1000);
  }
};

// step 3 form..
const handleSubmitStep3 = () => {
  submitAttempt.value = true;
  isLoading.value = true;
  if (
    !nameIsValid.value ||
    !emailIsValid.value ||
    !phoneNumberIsValid.value ||
    !phoneNumberFormatIsValid.value ||
    !emailFormatIsValid.value ||
    !selectTypeIsValid.value
  ) {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
    return;
  } else {
    setTimeout(() => {
      isLoading.value = false;
      // console.log("Person Form Submitted");
      completeStep();
    }, 1000);
  }
};

// step 4 form
const handleSubmitStep4 = async () => {
  submitAttempt.value = true;
  isLoading.value = true;
  validateForm();
  if (!allStepsCompleted.value) {
    // console.log("Validation error on one or more steps");
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);
    return;
  }

  // Format selectedTime and returnTime strings
  const formattedSelectedTime = moment(selectedTime.value).format("HH:mm");
  const formattedReturnTime = moment(returnTime.value).format("HH:mm");

  // Make API request
  try {
    const response = await axios.post(api, {
      company_name: "demo",
      action: "save_web_job",
      job_date: selectedDate.value,
      job_time: formattedSelectedTime,
      pickup: pickupAddress.value,
      destination: dropoffAddress.value,
      return_date: returnDate.value,
      return_time: formattedReturnTime,
      name: name.value,
      telephone: phoneNumber.value,
      email: email.value,
      journey_type_id: 0,
      num_of_people: passengersNum.value,
      vehicle_type: vehicleTypeClass.value,
      notes: message.value,
      cust_Group: "1",
    });
    setTimeout(() => {
      console.log("API Response:", response.data);
      isLoading.value = false;
      router.push("/thank-you");
      submitForm();
    }, 1000);
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

// email send
const submitForm = async () => {
  const runtimeConfig = useRuntimeConfig();
  const name2 = name.value;
  const email2 = email.value;
  // Validate that required fields are not null
  if (name2 && email2) {
    const htmlContent = `
      <h2> Hi ${name2}, </h2>
      <h3>Thank you for submitting a quote, a member of our team will reach out shortly.</h3>
      <p>Thanks</p>
      <p>OMC Global</p>
    `;
    const body = {
      htmlContent: htmlContent,
      from: runtimeConfig.public.FROM_EMAIL,
      to: runtimeConfig.public.TO_EMAIL,
      replyTo: runtimeConfig.public.REPLY_TO_EMAIL,
      subject: runtimeConfig.public.SUBJECT,
    };
    sendEmail(body);
    // Show success message to the user
    console.log("Your details have been sent to us. Someone will be in touch.");
    name.value = "";
    email.value = "";
  }
};
// watch(thankYou, (newValue) => {
//   setTimeout(() => {
//     window.location.reload();
//   }, 4000);
// });
const updateSlider = () => {
  // console.log("Slider value:", sliderValue.value);
  const slider = document.getElementById("dae1");
  if (slider) {
    const thumb = slider.querySelector("::-webkit-slider-thumb");
    const percentage = (sliderValue.value / 100) * 33.33;
    slider.style.background = `linear-gradient(to right, #3baa34 ${sliderValue.value}%, #ddd ${sliderValue.value}%)`;
    if (thumb) {
      thumb.style.left = 0;
    }
  }
};
onMounted(() => {
  const storedValue = localStorage.getItem("sliderValue");
  if (storedValue !== null) {
    sliderValue.value = parseInt(storedValue, 10);
  }
});
watchEffect(() => {
  updateSlider();
  localStorage.setItem("sliderValue", sliderValue.value.toString());
});
</script>

<style scoped>
.border-gradient {
  border-image: linear-gradient(to right, #bdc200, #95c11f, #3aaa35);
  border-image-slice: 1;
}
.range-slider {
  cursor: pointer;
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: linear-gradient(to right, #3baa34 0%, #ddd 0%);
  pointer-events: none;
}

.range-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  background-color: #3baa34;
  border: 1px solid #3baa34;
  width: 14px;
  height: 14px;
  margin: 0;
  border-radius: 50px;
}
</style>
