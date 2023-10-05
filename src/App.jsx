import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CapitalistOne from './components/CapitalistOne';
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
		path: 'CapitalistOne',
		element: <CapitalistOne />,
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
