
import { hot } from 'react-hot-loader/root';
import styles from './App.css'

interface AppProps {
	name: string
}

export const App: React.FC<AppProps> = ({ name }) => {
	console.log(styles)
	return <div className={styles.appDemo}>
		{name}
	</div>
}


export const HotApp = hot(App);
