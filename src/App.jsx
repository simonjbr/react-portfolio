import './App.css';

import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
// import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
// import Resume from './pages/Resume';

function App() {
	return (
		<>
			<Toaster />
			<div className="min-h-screen">
				<Header />
				<Outlet />
				<Footer />
			</div>
		</>
	);
}

export default App;
