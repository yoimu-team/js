import { useAuthHttp } from '@/core/hooks/http/use-auth-http'
import { useCallback } from 'react'
import { message } from 'antd'

export const useUploadFile = () => {
	const { _http } = useAuthHttp()

	const upload = useCallback(
		async file => {
			const formData = new FormData()
			formData.append('file', file)

			const { data } = await _http.post(`/file/upload`, formData)
			if (data.success) {
				message.success('上傳成功')
				return { success: true, id: data.data.id, name: file.name }
			}
			return { success: false, id: null, name: file.name }
		},
		[_http],
	)

	return {
		upload,
	}
}
