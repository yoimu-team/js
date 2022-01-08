import { createContext, useContext, useMemo } from 'react'
import { createHttp } from '@/core/hooks/http/create-http'
import { useAuth } from '@/core/hooks/use-auth'
import { AxiosInstance } from 'axios'
import { useMitt } from '@/core/hooks/use-mitt'
import { AUTHORIZATION_FAILED } from '@/core/mitt-type'
import { message } from 'antd'

export { AuthHttpProvider, useAuthHttp }

const context = createContext(null)

function AuthHttpProvider({ children }) {
	const token = useAuth(e => e.token)
	const { emit } = useMitt()
	const service = useMemo(() => {
		const _service = createHttp()

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
				}
				if (res.status === 401 || res.status === 403) {
					emit(AUTHORIZATION_FAILED)
				}
				return Promise.resolve(res)
			},
		)

		return _service
	}, [token])

	return (
		<context.Provider value={{ _http: service.http }}>
			{children}
		</context.Provider>
	)
}

/**
 * @return {{_http: AxiosInstance}}
 */
function useAuthHttp() {
	return useContext(context)
}
