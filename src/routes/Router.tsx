import {
	BrowserRouter, Route, Link,
} from 'react-router-dom'
import { routeConfig } from './config'

export const Router: React.FC = () => (
	<BrowserRouter>
		<Link to="/preview">
			preview
		</Link>
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
