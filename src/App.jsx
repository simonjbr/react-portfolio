import './App.css';

import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
// import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
// import Resume from './pages/Resume';

function App() {
	return (
		<>
			<div className="min-h-screen">
				<Header />
				<Outlet />
				<Footer />
			</div>
		</>
	);
}

export default App;
