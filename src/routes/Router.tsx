import {
	BrowserRouter, Route,
} from 'react-router-dom'
import { Button } from 'antd'
import { routeConfig } from './config'

export const Router: React.FC = () => (
	<BrowserRouter>
		<Button>asdfasdfds</Button>
		{
			routeConfig.map(({ path, component, exact }) => (
				<Route
					key={(path as string)}
					path={path}
					component={component}
					exact={exact}
				/>
			))
		}
	</BrowserRouter>
)
