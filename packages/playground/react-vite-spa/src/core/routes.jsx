import { lazy } from 'react'
import { Switch } from 'react-router-dom'
import { withTitle } from '@/core/components/routes/with-funcs/with-title'
import { withSuspenseRoute } from '@/core/components/routes/with-suspense-route'
import { RouteWrapper } from '@/core/components/routes/route-wrapper'
import { LayoutFallback } from '@/core/components/fallback/layout-fallback'
import { CardWrap } from '@/core/components/card-wrap'

export const Routes = () => {
	return (
		// <PathnameHistoriesProvider>
			<Switch>
				<RouteWrapper
					path={'/login'}
					exact
					component={withSuspenseRoute(
						lazy(() => import('@/pages/login')),
						LayoutFallback,
						withTitle('登入'),
					)}
					layout={CardWrap}
				/>

				<RouteWrapper
					path={'/register'}
					exact
					component={withSuspenseRoute(
						lazy(() => import('@/pages/register')),
						LayoutFallback,
						withTitle('註冊'),
					)}
					layout={CardWrap}
				/>

				{/* LayoutRoute START */}
				{/*<RouteWrapper*/}
				{/*	path={'/billboard'}*/}
				{/*	exact*/}
				{/*	component={withSuspensePrivateRoute(*/}
				{/*		lazy(() => import('@/pages/billboard')),*/}
				{/*		LayoutFallback,*/}
				{/*		withTitle('公佈欄'),*/}
				{/*		withSideKey('billboard'),*/}
				{/*	)}*/}
				{/*	layout={Layout}*/}
				{/*/>*/}
				{/* LayoutRoute END */}

				<RouteWrapper
					component={withSuspenseRoute(
						lazy(() => import('@/core/components/not-found')),
						LayoutFallback,
						withTitle('找不到頁面'),
					)}
					layout={CardWrap}
				/>
			</Switch>
		// </PathnameHistoriesProvider>
	)
}
