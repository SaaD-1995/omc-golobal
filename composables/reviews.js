export const useGoogleReviews = () => useState("googleReviews", () => []);
export async function getReviewsOfGoogle() {
  try {
    const res = await $fetch("/api/googleReviews", {
      method: "GET",
    });
    console.log("res im get revies from foogle", res);
    return [res, null];
  } catch (error) {
    console.log("error in get reviews from google", error);
    return [null, error];
  }
}
