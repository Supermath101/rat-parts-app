import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>RAT Parts App</h1>
		<nav>
			<Link activeClassName={style.active} href="/rat-parts-app/">Home</Link>
			<Link activeClassName={style.active} href="/rat-parts-app/parts">Part List</Link>
		</nav>
	</header>
);

export default Header;
