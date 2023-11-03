import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import HTTP404 from './components/HTTP404';
import ConfirmEmail from './components/confirmEmail';
import EmailConfirmed from './components/emailConfirmed';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: 'About',
		element: <About />,
	},
	{
		path: '*',
		element: <HTTP404 />,
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
