import { Id, toast, ToastOptions } from "react-toastify";

export const toastError = (message: string): Id => {
    toast.dismiss()

    const toastErrorOptions: ToastOptions = {
        autoClose: false,
        type: "error",
        hideProgressBar: true,
        position: "top-center",
        pauseOnHover: false,
        closeButton: false
    }

    const toastId = toast(message, toastErrorOptions)
    return toastId
} 