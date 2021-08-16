import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routeConfig } from './config'

export const Router: React.FC = () => (
	<BrowserRouter>{renderRoutes(routeConfig)}</BrowserRouter>
)
