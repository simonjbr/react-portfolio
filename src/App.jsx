import './App.css';

import { Outlet } from 'react-router-dom';

import Header from './components/Header';
// import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
// import Resume from './pages/Resume';

function App() {
	return (
		<>
			<Header />
			<Outlet />
			{/* <About />
			<Portfolio />
			<Contact />
			<Resume /> */}
		</>
	);
}

export default App;
