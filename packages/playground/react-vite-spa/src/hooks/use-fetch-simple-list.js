import { useEffect } from 'react'
import { useSafeState } from '@yoimu/react-common-lib'
import { useHttp } from '@/core/hooks/http/use-http'

export const useFetchSimpleList = (
	httpPath,
	params,
	method = 'get',
	checkParamsExists = false,
) => {
	const http = useHttp()
	const [list, setList] = useSafeState([])

	useEffect(() => {
		if (checkParamsExists && params == null) return
		;(async () => {
			const { data } = await http.instance[method](
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
