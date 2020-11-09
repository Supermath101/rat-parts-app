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
			{/* Put all page components in here. */}
			<Home path="/" />
			<Parts path="/parts/" part={null} />
			<Parts path="/parts/:part" />
		</Router>
	</div>
)

export default App;
