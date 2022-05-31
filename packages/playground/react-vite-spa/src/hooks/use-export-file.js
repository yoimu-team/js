import { useCallback } from 'react'
import { message } from 'antd'
import { downloadBlob } from '@yoimu/web-lib'
import { useHttp } from '@/core/hooks/http/use-http'

export const useExportFile = () => {
	const http = useHttp()

	const exportExcel = useCallback(
		async (url, filename, successMessage, extension = 'xlsx') => {
			const res = await (typeof url === 'function'
				? url()
				: http.instance.get(url, {
						responseType: 'blob',
				  }))
			if (res.status === 200) {
				message.success(successMessage)
				downloadBlob(res.data, filename, extension)
			}
		},
		[http],
	)

	return [exportExcel]
}
