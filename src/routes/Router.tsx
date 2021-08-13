
import {
  BrowserRouter, Route
} from 'react-router-dom'
import { routeConfig } from './config'

export const Router = () => {
	return <BrowserRouter>
		{
			routeConfig.map(
				({ path, component, exact }) =>
					<Route
						key={(path as string)}
						path={path}
						component={component}
						exact={exact}
					/>
			)
		}
	</BrowserRouter>
}
