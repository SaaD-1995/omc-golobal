export default defineEventHandler(async (event) => {
  try {
    console.log("in insta.js");
    const res = await $fetch(
      "https://api.instagram.com/v1/users/self/media/recent",
      {
        method: "GET",
        params: {
          access_token: "759270902757162|a40c59db01e5001d52cbd014e6ef523b",
        },
      }
    );
    console.log("res for insta is here", res);
    return res;
  } catch (error) {
    console.log("error", error);
    return error;
  }
});
