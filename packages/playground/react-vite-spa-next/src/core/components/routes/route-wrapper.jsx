export const RouteWrapper = ({ layout: Layout, component: Component }) => {
	return (
		<Layout>
			<Component />
		</Layout>
	)
}
