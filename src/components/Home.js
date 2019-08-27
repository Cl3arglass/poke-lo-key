import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
	<div>
	  <h4>Welcome, please <Link to="/signup">Sign Up</Link> or <Link to="/login">Login</Link></h4>
	</div>
	);

export default Home;