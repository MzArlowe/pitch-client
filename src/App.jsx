import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import UserOne from './components/UserOne';
import UserTwo from './components/UserTwo';
import Footer from './components/Footer';
import Home from './components/Home';
import HTTP404 from './components/HTTP404';
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
