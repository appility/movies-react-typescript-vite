import axios, { AxiosError } from "axios"

export { AxiosError }

export const instance = axios.create()

export default instance
