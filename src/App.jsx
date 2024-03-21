import {
	createBrowserRouter,
	RouterProvider,
	useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar';
// import Dashboard from '.components/Dashboard';
import './App.css';
import UserOne from './components/UserOne';
import UserTwo from './components/UserTwo';
import Footer from './components/Footer';
import Home from './components/Home';
import HTTP404 from './components/HTTP404';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ConfirmEmail from './components/confirmEmail';
import EmailConfirmed from './components/emailConfirmed';
import { useState, useEffect } from 'react';

function App() {
	const [hideHeader, setHideHeader] = useState(false);

	const router = createBrowserRouter([
		{
			path: '*',
			element: <HTTP404 />,
		},
		{
			path: '/',
			element: <Home />,
		},
		{
			path: 'SignIn',
			element: <SignIn />,
			// runs when the route loads
			loader: () => {
				const loc = window.location.pathname; // grabs the path name from the url
				if (!hideHeader) setHideHeader(loc === '/SignIn'); // if the path is `SignIn`, hide the header
			},
		},

		{
			path: 'SignUp',
			element: <SignUp />,
			// runs when the route loads
			loader: () => {
				const loc = window.location.pathname; // grabs the path name from the url
				if (!hideHeader) setHideHeader(loc === '/SignUp'); // if the path is `SignIn`, hide the header
			},
		},
		{
			path: 'UserOne',
			element: <UserOne />,
		},
		{
			path: 'UserTwo',
			element: <UserTwo />,
		},
		{
			path: 'ConfirmEmail',
			element: <ConfirmEmail />,
		},
		{
			path: 'EmailConfirmed',
			element: <EmailConfirmed />,
		},
	]);

	useEffect(() => console.log({ hideHeader }), [hideHeader]);
	return (
		<div className='App'>
			{!hideHeader && <Navbar />}
			<RouterProvider router={router} />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
