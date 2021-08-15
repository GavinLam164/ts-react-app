import {
	BrowserRouter, Route,
} from 'react-router-dom'
import { routeConfig } from './config'
import { Link } from 'react-router-dom'

export const Router: React.FC = () => {
	return <BrowserRouter>
		<Link to={'/preview'}>
			preview
		</Link>
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
