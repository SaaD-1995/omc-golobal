import { HomeIcon, FlagIcon, FaceSmileIcon } from "@heroicons/vue/24/outline";
export const useTheme = () => useState("theme", () => null);
export const useQuote = () => useState("quote", () => null);
export const useDuration = () => useState("duration", () => null);
export const useCreateQuoteMovementFormData = () =>
  useState("createQuoteMovementFormData", () => {
    return [
      {
        feedName: "Collection Postcode",
        address: {
          date: null,
          time: null,
          departureDate: "",
          arrivalDate: "",
          id: 1,
          country: null,
          latitude: "",
          longitude: "",
          county: null,
          town: null,
          firstAddressLine: "",
          secondAddressLine: "",
          postcode: null,
          name: "",
          inputVal: "",
          validAddress: true,
          validDate: null,
          validTime: null,
        },
      },
      {
        feedName: "Destination Postcode",
        address: {
          date: null,
          time: null,
          departureDate: "",
          arrivalDate: "",
          id: 2,
          country: null,
          latitude: "",
          longitude: "",
          county: null,
          town: null,
          firstAddressLine: "",
          secondAddressLine: "",
          postcode: null,
          name: "",
          inputVal: "",
          validAddress: true,
          validDate: null,
          validTime: null,
        },
      },
    ];
  });

export const useCreateQuoteMovementFormDataReturn = () =>
  useState("createQuoteMovementFormDataReturn", () => {
    return [
      {
        departureDate: null,
        arrivalDate: null,
        id: 1,
        latitude: null,
        longitude: null,
        firstAddressLine: "",
        secondAddressLine: "",
        town: null,
        county: null,
        postcode: null,
        country: null,
        name: "",
        inputVal: "",
        date: null,
        time: null,
        validAddress: true,
        validDate: null,
        validTime: null,
      },
      {
        date: null,
        time: null,
        departureDate: "",
        arrivalDate: "",
        id: 2,
        country: null,
        latitude: "",
        longitude: "",
        county: null,
        town: null,
        firstAddressLine: "",
        secondAddressLine: "",
        postcode: null,
        name: "",
        inputVal: "",
        validAddress: true,
        validDate: null,
        validTime: null,
      },
    ];
  });

export function fetchMockDataByKey(key: string) {
  const d: any = useTheme();
  if (key === "omc") {
    d.value = {
      from: "OMC Global <quote@enquires.omcglobal.co.uk>",
      to: ["sales@omcglobal.co.uk"],
      replyTo: "sales@omcglobal.co.uk",
      subject: "New Quote Submission",
      id: 1,
      name: "John Doe",
      bgColor: "#1A1919",
      borderColor: "#41ab34",
      logo: "/assets/images/logo.png",
      svgIcon: "/assets/images/omcIcon.png",
      innerColor: "#41ab34",
      icon: "/assets/images/omcIcon.svg",
    };
  }
  // if (key === "savari") {
  //   d.value = {
  //     from: "OMC Global <quote@enquires.omcglobal.co.uk>",
  //     to: ["hello@romisingh.com"],
  //     replyTo: "sales@omcglobal.co.uk",
  //     subject: "New Quote Submission",
  //     id: 2,
  //     name: "Nabeel",
  //     bgColor: "#000000",
  //     borderColor: "#446AF0",
  //     logo: "/images/Savari_Logo_Pink.png",
  //     svgIcon: "SavariMnemonicIcon",
  //     innerColor: "#121212",
  //     icon: "/images/Savari_Logo_Black.png",
  //   };
  // }
  // if (key === "savariQuotes") {
  //   d.value = {
  //     from: "OMC Global <quote@enquires.omcglobal.co.uk>",
  //     to: ["hello@romisingh.com"],
  //     replyTo: "sales@omcglobal.co.uk",
  //     subject: "New Quote Submission",
  //     id: 3,
  //     name: "Gcs",
  //     bgColor: "#0742FF",
  //     borderColor: "#0035E4",
  //     logo: "/images/Savari_Mnemonic_White.png",
  //     svgIcon: "SavariVectorIcon",
  //     innerColor: "#CFE8FF",
  //     icon: "/images/Savari_Mnemonic_Black.png",
  //   };
  // }
  // Return an empty array if the key doesn't match
  return [];
}

export const useTimelineData = () =>
  useState("timeline", () => {
    return [
      {
        id: 1,
        content: "Movement",
        target: "Schedule and plan your journey",
        status: "current",
      },
      {
        id: 2,
        content: "Journey Information",
        target: "Provide details about the journey",
        status: "upcoming",
      },
      {
        id: 3,
        content: "Customer Details",
        target: "To ensure effective communication and personalize the service",
        status: "upcoming",
      },
    ];
  });

export const useFeatureList = () =>
  useState("featureList", () => {
    return [
      {
        id: "1",
        name: "USB Posts",
        status: "active",

        icon: "/images/USB_port.png",
      },
      {
        id: "2",
        name: "Leather seats",
        status: "active",
        icon: "/images/Leather_seat.png",
      },
      {
        id: "3",
        name: "Reclining Seats",
        status: "active",
        icon: "/images/Reclining_seat.png",
      },
      {
        id: "4",
        name: "Aircon",
        status: "active",
        icon: "/images/Aircon.png",
      },
      {
        id: "5",
        name: "PA System",
        status: "active",
        icon: "/images/PA_system.png",
      },
      {
        id: "6",
        name: "TV",
        status: "active",
        icon: "/images/TV.png",
      },
    ];
  });
