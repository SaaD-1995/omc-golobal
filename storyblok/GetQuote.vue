<script setup lang="ts">
import { PropType } from "vue";
import { fetchMockDataByKey, useTheme } from "../composables/quotes";
// import { storyblokGetQuote } from "../types/getQuote";
const props = defineProps({
  blok: {
    type: Object as PropType<storyblokGetQuote>,
    default: null,
  },
});
const route = useRoute();
const theme: any = useTheme();
const timeline = useTimelineData();
const company: any = computed(() => route.query.company || "");
const currentStep = ref(0);
const movementData = useCreateQuoteMovementFormData();
const returnMovementData = useCreateQuoteMovementFormDataReturn();
const steps = ref([
  {
    name: "Movement Info",
    description: "Movement Detail",
    status: "current",
  },
  {
    name: "Journey Information",
    description: "A few details about journey",
    status: "upcoming",
  },

  {
    name: "Customer Information",
    description: "Customer Information details",
    status: "upcoming",
  },
]);

const quoteData = ref({
  journeyInformation: {
    passengers: "",
    vehicleClassTypeId: "",
    vehicleLuggageTypeId: null,
    features: [],
    notes: "",
  },
  customerInformation: {
    clientName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
  },

  return: false,
  isSingle: true,
  isVehicleStay: false,
  differentDestination: false,
  differentPickup: false,
  return_time: "",
  return_date: "",
  validReturnTime: null,
  validReturnDate: null,
  journey_milage: null,
  journeys: [{ vias: [] }] as any,
});

function moveToNextStep() {
  if (currentStep.value == 0 && !!!validateFirstStep()) {
  } else if (currentStep.value == 1 && !!!validateSecondStep()) {
  } else if (currentStep.value == 2 && !!!validateThirdStep()) {
  } else {
    steps.value[currentStep.value].status = "completed";
    timeline.value[currentStep.value].status = "completed";
    ++currentStep.value;
    steps.value[currentStep.value].status = "current";

    timeline.value[currentStep.value].status = "current";
    scrollToTop();
  }
}
function validateFirstStep() {
  let valid = true;

  for (let i = 0; i < movementData.value.length; i++) {
    let movement: any = movementData.value[i].address;
    const missingKeys = [];

    if (!movement.firstAddressLine) {
      missingKeys.push("Address");
      movement.validAddress = false;
    }
    if ((i == 0 || i == movementData.value.length - 1) && !movement.time) {
      missingKeys.push("Date");
      movement.validDate = false;
    }
    if ((i == 0 || i == movementData.value.length - 1) && !movement.date) {
      missingKeys.push("Time");
      movement.validTime = false;
    }

    if (missingKeys.length > 0) {
      let error = `Missing  ${missingKeys.join(", ")} at Address Input ${i + 1}`;
      openSnackBar("error", error);
      valid = false;
      break;
    }
  }

  if (!!quoteData.value.return) {
    if (!!!quoteData.value.return_date) {
      openSnackBar("error", "Enter Date for Return Journey");
      // @ts-ignore
      quoteData.value.validReturnDate = false;
      return (valid = false);
    }
    if (!!!quoteData.value.return_time) {
      openSnackBar("error", "Enter Time for Return Journey");
      // @ts-ignore
      quoteData.value.validReturnTime = false;
      return (valid = false);
    }
    for (let i = 0; i < returnMovementData.value.length; i++) {
      let movement: any = returnMovementData.value[i];
      const missingKeys = [];
      // if (!movement.departureDate) missingKeys.push("departureDate");
      // if (!movement.arrivalDate) missingKeys.push("arrivalDate");
      if (!movement.firstAddressLine) {
        movement.validAddress = false;
        missingKeys.push("firstAddressLine");
      }

      if (missingKeys.length > 0) {
        let error = `Missing  ${missingKeys.join(", ")} at return Address Input ${i + 1}`;
        openSnackBar("error", error);
        valid = false;
        break;
      }
    }
  }
  return valid;
}

function validateSecondStep() {
  if (quoteData.value.journeyInformation.passengers == "") {
    openSnackBar("error", "How many Passenger are there?");
    return false;
  } else if (!!!quoteData.value.journeyInformation.vehicleClassTypeId) {
    openSnackBar("error", "Select your desired vehicle class");
    return false;
  } else if (!!!quoteData.value.journeyInformation.vehicleLuggageTypeId) {
    openSnackBar("error", "Select your Luggage Type");
    return false;
  } else return true;
}

function validateThirdStep() {
  if (!!!quoteData.value.customerInformation.clientName) {
    openSnackBar("error", "Enter Your Name");
    return false;
  } else if (!!!quoteData.value.customerInformation.email) {
    openSnackBar("error", "Enter Your Email");
    return false;
  } else if (!!!quoteData.value.customerInformation.phoneNumber) {
    openSnackBar("error", "Enter Your Phone Number");
    return false;
  }
  //  else if (!!!quoteData.value.customerInformation.companyName) {
  //   openSnackBar("error", "Enter Your Desired Company Name");
  //   return false;
  // }
  else return true;
}

// function validateFirstStep() {
//   return true;
// }
// function validateSecondStep() {
//   return true;
// }
// function validateThirdStep() {
//   return true;
// }

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function previousStep() {
  if (currentStep.value == 0) return;
  console.log("decrease");
  steps.value[currentStep.value].status = "upcoming";

  timeline.value[currentStep.value].status = "upcoming";
  --currentStep.value;
  steps.value[currentStep.value].status = "current";
  timeline.value[currentStep.value].status = "current";
  scrollToTop();
}

watch(
  () => quoteData.value.return,
  (newValue, oldValue) => {
    console.log("je");
    if (newValue) {
      const addressArray = useCreateQuoteMovementFormData();

      const returnMovementData = useCreateQuoteMovementFormDataReturn();

      Object.assign(returnMovementData.value[1], {
        ...addressArray.value[0].address,
      });

      Object.assign(returnMovementData.value[0], {
        ...addressArray.value[addressArray.value.length - 1].address,
      });
    } else {
      quoteData.value.isVehicleStay = false;
    }
  }
);

onMounted(async () => {
  fetchMockDataByKey(company.value);
});

const gtm = useGtm(); // auto-imported by the module
function triggerEvent() {
  gtm.trackEvent({
    event: "quoteSubmit",
    action: "conversion",
    label: "quote submit",
  });
}
</script>

<template>
  <div class="screenContainer pt-20 pb-20">
    <div class="flex justify-center bg-[#F5F5F5] w-full min-h-screen">
      <div class="mt-10 lg:w-4/5">
        <div class="px-2 sm:px-4">
          <section class="gap-10 p-5 mt-12 mb-32 bg-white shadow-sm rounded-xl">
            <FormQuoteMovement
              :quoteData="quoteData"
              v-if="steps[0].status == 'current'"
            />
            <FormQuoteJourneInformation
              :quoteData="quoteData"
              v-if="steps[1].status == 'current'"
            />
            <FormQuoteCustomerInformation
              :quoteData="quoteData"
              v-if="steps[2].status == 'current'"
            />
            <div class="flex flex-col w-full gap-4 mt-5 sm:flex-row">
              <InputquoteBtn
                v-if="currentStep > 0"
                class="w-full"
                @click="previousStep()"
                rounded2x
                tertiary
                >Back</InputquoteBtn
              >

              <InputquoteBtn
                v-if="currentStep < 2"
                class="w-full"
                @click="moveToNextStep()"
                rounded2x
                black
              >
                Continue</InputquoteBtn
              >

              <CreateQuoteButton
                @click="triggerEvent()"
                :theme="theme"
                :quoteData="quoteData"
                :validateThird="validateThirdStep"
                class="w-full"
                v-else
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
../composable/quotes