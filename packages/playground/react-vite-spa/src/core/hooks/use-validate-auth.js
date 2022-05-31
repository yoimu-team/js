import { useCallback, useEffect } from 'react'
import { EAuthCode, useAuth } from '@/core/hooks/use-auth'
import { useSafeState } from '@yoimu/react-common-lib'

export const useValidateAuth = () => {
	const auth = useAuth(e => e.auth)
	const token = useAuth(e => e.token)
	const setAuth = useAuth(e => e.setAuth)
	const clearAuthState = useAuth(e => e.clearAuthState)
	const [code, setCode] = useSafeState(
		auth == null ? EAuthCode.validating : EAuthCode.authSuccess,
	)

	const checkAuth = useCallback(async () => {
		if (token) {
			if (auth == null) {
				const { success } = await { success: false }
				if (success) {
					setAuth(undefined)
					return {
						code: EAuthCode.authSuccess,
						message: EAuthCode.t[EAuthCode.authSuccess],
					}
				}
			} else {
				return {
					code: EAuthCode.hasAuth,
					message: EAuthCode.t[EAuthCode.hasAuth],
				}
			}
			return {
				code: EAuthCode.authError,
				message: EAuthCode.t[EAuthCode.authError],
			}
		}
		return {
			code: EAuthCode.notLogin,
			message: EAuthCode.t[EAuthCode.notLogin],
		}
	}, [auth, token])

	const initAuth = async () => {
		const { code: _code } = await checkAuth()
		$devLog({
			'checkAuth.code': EAuthCode.t[_code],
		})
		switch (_code) {
			case EAuthCode.authError:
			case EAuthCode.notLogin:
				clearAuthState()
				break
		}
		setCode(_code)
	}

	useEffect(initAuth, [])

	return code
}
