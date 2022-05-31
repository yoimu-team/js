import axios, { AxiosInstance } from 'axios'

/**
 * @return {{instance: AxiosInstance}}
 */
export const createHttp = () => ({
	instance: axios.create({
		baseURL: import.meta.env.VITE_API_BASE_URL,
	}),
})
