import React from 'react';
import Login from './Login'
import Logout from './Logout'
import Signup from './Signup'
import { Link } from 'react-router-dom'

const Home = ({}) => (
	<div>
	  <h4>Welcome, please <Link to="/signup">Sign Up</Link> or <Link to="/login">Login</Link></h4>
	</div>
	);

export default Home;