import { useNavigate } from 'react-router-dom'
import { Breadcrumb } from 'antd'

export const GoBackBreadcrumbItem = ({ children }) => {
	const navigate = useNavigate()

	return (
		<Breadcrumb.Item>
			<a className="text-primary" onClick={() => navigate(-1)}>
				{children}
			</a>
		</Breadcrumb.Item>
	)
}
