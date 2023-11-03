import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import UserOne from './components/UserOne';
import UserTwo from './components/UserTwo';
import Footer from './components/Footer';
import Home from './components/Home';
import HTTP404 from './components/HTTP404';
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
