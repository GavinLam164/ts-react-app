import { RouteProps } from 'react-router'
import { Detail } from './Detail/index'
import { Preview } from './Preview/index'

export const routeConfig: Array<RouteProps> = [
	{
		path: '/preview',
		component: Preview,
	},
	{
		path: '/detail',
		component: Detail,
	},
]
