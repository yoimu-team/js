import { createRoot } from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import { I18nProvider } from '@i18n'
import { AuthProvider } from '@/core/hooks/use-auth'
import { Routes } from '@/core/routes'
import { HttpProvider } from '@/core/hooks/http/use-http'
import '@/core/style/app.scss'
import '@/core/lib/dev-log'
import moment from 'moment'
import 'moment/dist/locale/zh-tw'

moment.locale('zh-tw')

const App = () => {
	return (
		<Router>
			<I18nProvider>
				<AuthProvider>
					<HttpProvider>
						<Routes />
					</HttpProvider>
				</AuthProvider>
			</I18nProvider>
		</Router>
	)
}
createRoot(document.getElementById('root')).render(<App />)
