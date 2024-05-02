import { useState } from "#app";

export const useUser = () => useState("user", () => null)
export const useUserId = () => useState("userId", () => null)
export const useAccessToken = () => useState("accessToken", () => null)
export const useRefreshToken = () => useState("refreshToken", () => null)

export function logout() {

    console.log('log put');
    const user = useUser()
    const cookie_user = useCookie("user")
    const userId = useUserId()
    const cookie_userId = useCookie("userId")
    const accessToken = useAccessToken()
    const cookie_accessToken = useCookie("accessToken")
    const refreshToken = useRefreshToken()
    const cookie_refreshToken = useCookie("refreshToken")
    cookie_accessToken.value = null
    cookie_refreshToken.value = null
    cookie_user.value = null
    cookie_userId.value = null
    user.value = null
    accessToken.value = null
    refreshToken.value = null
    userId.value = null
    return navigateTo('/')
}

export function getAccessToken() {
    const accessToken: any = useAccessToken();
    if (!!!accessToken.value) return null;
    const cookie_accessToken = useCookie('accessToken');
    if (cookie_accessToken.value != accessToken.value) {
        accessToken.vlaue = cookie_accessToken.value;
    }
    return accessToken.value;
}

export function setStates(response: any) {
    const user = useUser()
    const cookie_user = useCookie("user")
    user.value = response?.data?.user ?? null
    cookie_user.value = user.value

    const userId = useUserId()
    const cookie_userId = useCookie("userId")
    userId.value = response?.data?.user.id ?? null
    cookie_userId.value = userId.value

    const accessToken = useAccessToken()
    const cookie_accessToken = useCookie("accessToken")
    accessToken.value = response?.data?.token ?? null
    cookie_accessToken.value = accessToken.value

    // const refreshToken = useRefreshToken()
    // const cookie_refreshToken = useCookie("refreshToken")
    // refreshToken.value = response?.refresh_token ?? null
    // cookie_refreshToken.value = refreshToken.value


    // console.log('user.value', user.value);
    // console.log('cookie_userId.value', userId.value);
    // console.log('cookie_accessToken.value', accessToken.value);



}