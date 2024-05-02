export default defineEventHandler(async (event) => {
  try {
    console.log("in gogle.ts");
    const res = await $fetch(
      "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJjU--rTl19T4RiQcYhPlE5HI&key=AIzaSyB6b4lAU_NBZ6dlX4paDgmcDrFzNdlopR4&reviews=7",
      { method: "GET" }
    );
    console.log("res is here", res);
    return res;
  } catch (error) {
    console.log("error", error);
    return error;
  }
});
