import {useEffect, useState} from "preact/hooks";

import {
	Button,
	Column,
	Grid,
	Row
} from "carbon-components-react";

// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }) => {
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);

	useEffect(() => {
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<Grid className="home">
			<Row>
				<Column>
					<h1>Profile: {user}</h1>
					<p>This is the user profile for a user named { user }.</p>

					<p>Current time: {new Date(time).toLocaleString()}</p>

					<p>
						<Button onClick={() => setCount((count) => count + 1)}>Click Me</Button>
						{' '}
						Clicked {count} times.
					</p>
				</Column>
			</Row>
		</Grid>
	);
}

export default Profile;
