import { h } from 'preact';
import style from './style.css';

import { Button } from 'carbon-components-react';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<Button>Get Carbon!</Button>
	</div>
);

export default Home;
