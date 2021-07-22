import './style.scss';

import { Button, Column, Grid, Row } from 'carbon-components-react';

const Home = () => (
	<Grid className="home">
		<Row>
			<Column>
				<h1>Home</h1>
				<p>
					This is the Home component.
				</p>
				<Button>Get Carbon!</Button>
			</Column>
		</Row>
	</Grid>
);

export default Home;
