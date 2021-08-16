import { RouteConfig } from 'react-router-config'
import { AppLayout } from '@components/Layout'
import { Login } from './Login'
import { Preview } from './Preview'

export const routeConfig: Array<RouteConfig> = [
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/layout',
		component: AppLayout,
		routes: [
			{
				path: '/layout/preview',
				component: Preview,
			},
		],
	},
]
