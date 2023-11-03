import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Dashboard from '.components/Dashboard';
import About from './components/About';
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
import Navbar from './components/Navbar';

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
	},

	{
		path: 'SignUp',
		element: <SignUp />,
	},

	{
		path: 'About',
		element: <About />,
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
	}
]);

function App() {
	return (
		<div className='App'>
			<Navbar />
			<RouterProvider router={router} />
			<Footer />
		</div>
	);
}

export default App;
