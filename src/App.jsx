import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import HTTP404 from './components/HTTP404';

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
