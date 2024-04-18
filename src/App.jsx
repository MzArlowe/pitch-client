import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
// import Dashboard from '.components/Dashboard';
import './App.css';
import UserEmail from './components/Auth/Signup/2_UserInformation/UserEmail';
import UserData from './components/Auth/Signup/5_UserData/UserData';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import HTTP404 from './components/404/HTTP404';
import SignIn from './components/Auth/Signin/SignIn';
import SignUp from './components/Auth/Signup/1_Landing/SignUp';
import ConfirmEmail from './components/Auth/Signup/3_ConfirmEmail/ConfirmEmail';
import EmailConfirmed from './components/Auth/Signup/4_ValidEmail/EmailConfirmed';

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
			loader: () => {
				const loc = window.location.pathname; // grabs the path name from the url
				if (!hideHeader) setHideHeader(loc === '/SignIn'); // if the path is `SignIn`, hide the header
				return 'signin';
			},
		},
		{
			path: 'SignUp',
			element: <SignUp />,
			loader: () => {
				const loc = window.location.pathname; // grabs the path name from the url
				if (!hideHeader) setHideHeader(loc === '/SignUp'); // if the path is `SignIn`, hide the header
				return 'signup';
			},
		},
		{
			path: 'SignupEmail',
			element: <UserEmail />,
		},
		{
			path: 'SignupData',
			element: <UserData />,
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

	return (
		<div className='App'>
			<Navbar />
			<RouterProvider router={router} />
			<Footer />
		</div>
	);
}

export default App;
