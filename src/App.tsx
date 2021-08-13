
import { hot } from 'react-hot-loader/root';
import { Router } from './routes/Router';

export const App: React.FC = () => {
	return <Router />;
}

export const HotApp = hot(App);
