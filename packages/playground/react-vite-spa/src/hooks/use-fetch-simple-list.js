import { useEffect } from 'react'
import { useAuthHttp } from '@/core/hooks/http/use-auth-http'
import { useSafeState } from '@yoimu/react-common-lib'

export const useFetchSimpleList = (
	httpPath,
	params,
	method = 'get',
	checkParamsExists = false,
) => {
	const { _http } = useAuthHttp()
	const [list, setList] = useSafeState([])

	useEffect(() => {
		if (checkParamsExists && params == null) return
		;(async () => {
			const { data } = await _http[method](
				httpPath,
				params ? (method === 'get' ? { params } : params) : undefined,
			)
			if (data.success) {
				setList(data.data)
			}
		})()
	}, [params])

	return [list, setList]
}
