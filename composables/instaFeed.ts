export async function getInstaPosts() {
  try {
    const res = await $fetch("/api/insta", {
      method: "POST",
    });
    console.log("res from insta composables", res);
    return [res, null];
  } catch (error) {
    console.log("error from insta composables", error);
    return [null, error];
  }
}
