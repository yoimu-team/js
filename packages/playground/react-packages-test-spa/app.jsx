import ReactDOM from 'react-dom'
import { V6RouterFirstApp } from '@/components/v6-router-first-app'

const App = () => {
	return <V6RouterFirstApp />
}

ReactDOM.render(
	// <React.StrictMode>
	<App />,
	// </React.StrictMode>,
	document.getElementById('root'),
)
