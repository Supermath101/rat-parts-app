import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Parts from '../routes/parts';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/rat-parts-app/" />
			<Parts path="/rat-parts-app/parts/" part={null} />
			<Parts path="/rat-parts-app/parts/:part" />
		</Router>
	</div>
)

export default App;
