export const NavbarData = [
	{
		title: 'Home',
		url: '/',
		className: 'nav-links',
		icon: 'fa-solid fa-house-user',
	},
	{
		title: 'About',
		url: '/About',
		className: 'nav-links',
		icon: 'fa-solid fa-circle-info',
	},
	{
		title: 'Service',
		url: '/Service',
		className: 'nav-links',
		icon: 'fa-solid fa-briefcase',
	},
	{
		title: 'Contact',
		url: '/Contact',
		className: 'nav-links',
		icon: 'fa-solid fa-address-book',
	},
	{
		title: 'Sign In',
		url: '/SignIn',
		className: 'nav-links',
		icon: 'fa-solid fa-address-book',
	},
	{
		title: 'Sign Up',
		url: '/SignUp',
		className: 'nav-links-mobile',
	},
];

let userType = 'notSet';

function setUserType(type) {
	if (type === 'Founder') {
		userType = 'Founder';
	} else if (type === 'Funder') {
		userType = 'Funder';
	}
	console.log(userType);
}

export { userType, setUserType };
