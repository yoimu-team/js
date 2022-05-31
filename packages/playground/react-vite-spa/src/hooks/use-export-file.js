import { useAuthHttp } from '@/core/hooks/http/use-auth-http'
import { useCallback } from 'react'
import { message } from 'antd'
import { downloadBlob } from '@yoimu/web-lib'

export const useExportFile = () => {
	const { _http } = useAuthHttp()

	const exportExcel = useCallback(
		async (url, filename, successMessage, extension = 'xlsx') => {
			const res = await (typeof url === 'function'
				? url()
				: _http.get(url, {
						responseType: 'blob',
				  }))
			if (res.status === 200) {
				message.success(successMessage)
				downloadBlob(res.data, filename, extension)
			}
		},
		[_http],
	)

	return [exportExcel]
}
