<template>
  <div>
    <InputquoteBtn
      :loading="btnLoading"
      class="w-full"
      @click="submitForm()"
      rounded2x
      secondary
      >Create
    </InputquoteBtn>
  </div>
</template>

<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";
import { SendEmail } from "@/composables/email";
const props = defineProps({
  validateThird: { type: Function, default: () => null },
  theme: { type: Object, default: null },
  quoteData: {
    type: Object,
    default: null,
  },
});

const router = useRouter();
const route = useRoute();
const btnLoading = ref(false);

const company: any = computed(() => route.query.company || "");
const returnMovementData = useCreateQuoteMovementFormDataReturn();
const movementData = useCreateQuoteMovementFormData();

async function submitForm() {
  // @ts-ignore
  if (!props.validateThird()) return;

  btnLoading.value = true;
  let body = {
    htmlContent: htmlContent.value,
    from: props.theme.from,
    to: props.theme.to,
    replyTo: props.theme.replyTo,
    subject: props.theme.subject,
  };
  const [success, error] = await SendEmail(body);
  btnLoading.value = false;
  console.log("Success", success);
  if (success != null) {
    router.push({
      name: "Thankyou",
      query: { company: company.value },
    });
  } else if (!!error) {
    alert(`Error sending message ${error}`);
  }
}

const featureList = useFeatureList();

const features = computed(() => {
  let arr: any = [];
  featureList.value.forEach((feature) => {
    if (
      props.quoteData.journeyInformation.features.find(
        (item: any) => item.id == feature.id
      )
    ) {
      arr.push(feature.name);
    }
  });
  return arr.toString();
});

const collectionDepartureAt = computed(() => {
  let dateIs: any = movementData.value[0].address.date;
  let date = new Date(dateIs);
  console.log("date is", dateIs);
  // @ts-ignore
  let { hours, minutes, seconds } = movementData?.value[0]?.address?.time ?? {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  date.setHours(hours, minutes, seconds);
  date = new Date(date);
  let formated = useDateFormat(date, "MMMM DD, YYYY HH:mm AA");
  return formated.value;
});

const destinationArrivalAt = computed(() => {
  let dateIs: any = movementData.value[movementData.value.length - 1].address.date;
  let date = new Date(dateIs);
  console.log("date is", dateIs);
  // @ts-ignore
  let { hours, minutes, seconds } = movementData.value[movementData.value.length - 1]
    .address?.time ?? { hours: 0, minutes: 0, seconds: 0 };
  date.setHours(hours, minutes, seconds);

  date = new Date(date);
  let formated = useDateFormat(date, "MMMM DD, YYYY HH:mm AA");
  return formated.value;
});

const returnDepartureTime = computed(() => {
  let dateIs: any = props.quoteData.return_date;
  let date = new Date(dateIs);
  // @ts-ignore
  let { hours, minutes, seconds } = props.quoteData.return_time;
  date.setHours(hours, minutes, seconds);
  date = new Date(date);
  let formated = useDateFormat(date, "MMMM DD, YYYY HH:mm AA");
  return formated.value;
});
const htmlContent = computed(() => {
  return `
            <p>A new quote has been submitted from your website.</p>

            <div class="mt-10">
                <p class="font-semibold">Name: <span class="font-normal pl-3">${
                  props.quoteData?.customerInformation?.clientName
                }</span></p>
                <p class="font-semibold">Email: <span class="font-normal pl-3">${
                  props.quoteData?.customerInformation?.email
                }</span></p>
                <p class="font-semibold">Phone Number: <span class="font-normal pl-3">${
                  props.quoteData?.customerInformation?.phoneNumber
                }</span></p>
                <p class="font-semibold">Company Name: <span class="font-normal pl-3">${
                  props.quoteData?.customerInformation?.companyName
                }</span></p>
            </div>

            <div class="mt-10">
               <p class="font-semibold">Collection address: <span class="font-normal pl-3">${
                 movementData.value[0].address.firstAddressLine
               }</span></p>
                <p class="font-semibold">Departure from collection at: <span class="font-normal pl-3">${
                  collectionDepartureAt.value
                }</span></p>

              ${
                movementData.value.length > 2
                  ? movementData.value
                      .slice(1, -1)
                      .map(
                        (address, i) => `
      <p class="font-semibold">Stop ${i + 1} Address: <span class="font-normal pl-3">${
                          address.address.inputVal
                        }</span></p>
    `
                      )
                      .join("")
                  : ""
              }

                  <p class="font-semibold">Destination Address: <span class="font-normal pl-3">${
                    movementData.value[movementData.value.length - 1].address
                      .firstAddressLine
                  }</span></p>
                 <p class="font-semibold">Arrival at destination at : <span class="font-normal pl-3">${
                   destinationArrivalAt.value
                 }</span></p>
                <p class="font-semibold">No. Of Stops: <span class="font-normal pl-3">${
                  movementData.value.length - 2
                }</span></p>
            </div>



            ${
              props.quoteData.return
                ? `
              <div class="mt-10">
                <p class="font-semibold">Departure From Return Collection  At: <span class="font-normal pl-3">${
                  returnDepartureTime.value
                }</span></p>
                <p class="font-semibold">Return Collection Address: <span class="font-normal pl-3">${
                  returnMovementData.value[0].firstAddressLine
                }</span></p>

                  ${
                    returnMovementData.value.length > 2
                      ? returnMovementData.value
                          .slice(1, -1)
                          .map(
                            (address, i) => `
      <p class="font-semibold"> Return Stop ${
        i + 1
      } Address: <span class="font-normal pl-3">${address.inputVal}</span></p>
    `
                          )
                          .join("")
                      : ""
                  }

                <p class="font-semibold">Return Destination Address: <span class="font-normal pl-3">${
                  returnMovementData.value[returnMovementData.value.length - 1]
                    .firstAddressLine
                }</span></p>

                <p class="font-semibold">Stops During Return : <span class="font-normal pl-3">${
                  returnMovementData.value.length - 2
                }</span></p>
            </div>
              `
                : ""
            }



            <div class="mt-10">
                <p class="font-semibold">Vehicle Type: <span class="font-normal pl-3">${
                  props.quoteData.journeyInformation?.vehicleClassTypeId
                }</span></p>
                <p class="font-semibold">Total Passengers: <span class="font-normal pl-3">${
                  props.quoteData.journeyInformation?.passengers
                }</span></p>
                <p class="font-semibold">Features: <span class="font-normal pl-3">${
                  features.value
                }</span></p>
                <p class="font-semibold">Notes: <span class="font-normal pl-3">${
                  props.quoteData.journeyInformation?.notes
                }</span></p>
            </div>
        `;
});
</script>

<style scoped></style>
~/composable/email
