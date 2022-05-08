import { createContext, useContext, useMemo } from 'react'
import { useAuth } from '@/core/hooks/use-auth'
import axios, { AxiosInstance } from 'axios'
import { useMitt } from '@/core/hooks/use-mitt'
import { AUTHORIZATION_FAILED } from '@/core/mitt-type'
import { message } from 'antd'
import { Navigate } from 'react-router-dom'

export { HttpProvider, useHttp }

const context = createContext(null)

function HttpProvider({ children }) {
	const token = useAuth(e => e.token)
	const { emit } = useMitt()
	const service = useMemo(() => {
		const _service = {
			http: axios.create({
				baseURL: import.meta.env.VITE_API_BASE_URL,
			}),
		}

		_service.http.interceptors.request.use(
			config => {
				if (token != null) {
					config.headers['Authorization'] = `Bearer ${token}`
				}
				return config
			},
			error => {
				return Promise.resolve(error)
			},
		)

		_service.http.interceptors.response.use(
			response => {
				return response
			},
			error => {
				// 統一 try/catch
				const res = error.response
				if (res) {
					if (!res.config.headers.NoErrorMessage) {
						if (res.data && res.data.message) {
							message.error(res.data.message)
						}
					}
					if (res.status === 401 || res.status === 403) {
						emit(AUTHORIZATION_FAILED)
					}
				}
				return Promise.resolve(res)
			},
		)

		return _service
	}, [token])

	return (
		<context.Provider value={{ http: service.http }}>
			{children}
		</context.Provider>
	)
}

/**
 * @return {{http: AxiosInstance}}
 */
function useHttp() {
	return useContext(context)
}
