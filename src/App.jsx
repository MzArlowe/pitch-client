import {
	createBrowserRouter,
	redirect,
	RouterProvider,
} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
// import Dashboard from '.components/Dashboard';
import './App.css';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import HTTP404 from './components/404/HTTP404';
import SignIn from './components/Auth/Signin/SignIn';
import SignUp from './components/Auth/Signup/01_Landing/SignUp';
import UserEmail from './components/Auth/Signup/02_UserInformation/UserEmail';
import ConfirmEmail from './components/Auth/Signup/03_ConfirmEmail/ConfirmEmail';
import EmailConfirmed from './components/Auth/Signup/04_ValidEmail/EmailConfirmed';
import UserData from './components/Auth/Signup/05_UserData/UserData';
import ProjectChoice from './components/Auth/Signup/06_ProjectChoice/ProjectChoice';
import FindProject from './components/Auth/Signup/07_FindProjectMember/FindProject/FindProject';
import FindMember from './components/Auth/Signup/07_FindProjectMember/FindMember/FindMember';
import ProjectDetails from './components/Auth/Signup/08_ProjectDetails/ProjectDetails';
import ConfirmSetup from './components/Auth/Signup/09_ConfirmSetup/ConfirmSetup';
import AccountCreated from './components/Auth/Signup/10_AccountCreated/AccountCreated';
import EducationSection from './EducationSection';

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
			loader: (currentPath) => {
				const loc = window.location.pathname; // grabs the path name from the url
				if (!hideHeader) setHideHeader(loc === '/SignIn'); // if the path is `SignIn`, hide the header
				return currentPath;
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
		{
			path: 'FindProject',
			element: <FindProject />,
		},
		{
			path: 'FindMember',
			element: <FindMember />,
		},
		{
			path: 'ProjectDetails',
			element: <ProjectDetails />,
		},
		{
			path: 'ConfirmSetup',
			element: <ConfirmSetup />,
		},
		{
			path: 'AccountCreated',
			element: <AccountCreated />,
		},
		{
			path: 'Dashboard',
			element: <Dashboard setHideHeader={setHideHeader} />,
			loader: async () => {
				const user = false;
				if (!user) {
					return redirect('/Signup');
				}
				return null;

				// const loc = window.location.pathname; // grabs the path name from the url
				// if (hideHeader) setHideHeader(loc === '/Dashboard'); // if the path is `SignIn`, hide the header
				// return 'dashboard';
			},
		},
		{
			path: 'ProjectChoice',
			element: <ProjectChoice />,
		},
		{
			path: 'Education',
			element: <EducationSection />,
		},
	]);

	return (
		<div className='App'>
			{!hideHeader && <Navbar />}
			<RouterProvider router={router} />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
