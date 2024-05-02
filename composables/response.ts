import { useState } from "#app";
export const useLoading = () => useState('loading', () => false);
export function setLoading(status: boolean) {
    const loading = useLoading();
    loading.value = status;
}
export const useSnackbar = () =>
    useState('snackbar', () => {
        return {
            show: true,
            type: '',
            heading: '',
            body: '',
            button: "",
            routeTo: ""
        }
    })
export const openSnackBar = (type: string, heading: string, body: string = "", button: string = '', routeTo: string = "") => {
    const snackbar = useSnackbar();
    snackbar.value = {
        show: true,
        type,
        heading,
        body,
        button,
        routeTo
    }

    setTimeout(() => {
        closeSnackBar()
    }, 3000);

}

export const closeSnackBar = () => {
    const snackbar = useSnackbar()
    snackbar.value = {
        show: false,
        type: "",
        heading: "",
        body: "",
        button: "",
        routeTo: ""
    }
}

export const useDialog = () =>

    useState("dialog", () => {

        return {
            show: false,
            button: "info",
            heading: "",
            body: "",
            action: () => { },
            secondaryButton: "Close",
            secondaryButtonAction: () => { }
        }
    })


export const openDialog = (button: String, heading: String, body: String, action: Function, secondaryButton: String = "close", secondaryButtonAction: Function = () => { }) => {

    const dialog: any = useDialog()
    dialog.value = {
        show: true,
        button,
        heading,
        body,
        action,
        secondaryButton,
        secondaryButtonAction
    }


}

export const closeDialog = () => {
    const dialog = useDialog()
    dialog.value = {
        show: false,
        button: "",
        heading: "",
        body: "",
        action: () => { },
        secondaryButton: "Close",
        secondaryButtonAction: () => { }

    }
}