export async function refresh() {
    const config = useRuntimeConfig()
    const token: any = useCookie("refreshToken")
    const userId: any = useCookie("userId")
    console.log('refreshtoken', token.value);
    const form = new FormData()
    form.append("driver_id", userId.value)
    try {
        const response: any = await $fetch(`${config.BASE_URL}/auth/refresh_token`, {
            method: "POST",
            headers: { Authorization: `Bearer ${token.value}` },
            body: form
        })
        console.log('response of refresh...........', response);

        const accessToken = useAccessToken()
        const cookie_accessToken = useCookie("accessToken")
        accessToken.value = response?.access_token ?? null
        cookie_accessToken.value = accessToken.value

        const refreshToken = useRefreshToken()
        const cookie_refreshToken = useCookie("refreshToken")
        refreshToken.value = response?.refresh_token ?? null
        cookie_refreshToken.value = refreshToken.value

        return [response, null]
    }
    catch (error: any) {
        console.log('error refresh api', error);
        return [null, error]
    }
}

export async function forgot(email: any) {
    const config = useRuntimeConfig()

    const form = new FormData()
    form.append("email", email)

    try {
        const response: any = await $fetch(`${config.BASE_URL}/auth/forgot`, {
            method: "POST",
            body: form
        })
        return [response, null]
    }
    catch (error: any) {
        console.log('error forgot api', error);
        return [null, error]
    }
}

export async function login(body: any) {
    let form_data = new FormData()

    // console.log("ad",ad)
    form_data.append("email", body.email)
    form_data.append("password", body.password)
    const config = useRuntimeConfig()
    const accessToken = useCookie("accessToken")
    try {
        const response: Object = await $fetch(`${config.BASE_URL}/login`, {
            method: "POST",
            body: form_data,
            headers: { Authorization: `Bearer ${accessToken.value}` },
        })
        console.log("response of login", response)
        setStates(response)
        return [response, null]
    }

    catch (error: any) {
        if (error.status == 401) {
            error = "Invalid Credentials"
        }
        return [null, error]
    }
}








