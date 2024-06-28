import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Header from './components/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


function App() {

	return (
		<>
			<Header />
			<About />
			<Portfolio />
			<Contact />
			<Resume />
		</>
	);
}

export default App;
