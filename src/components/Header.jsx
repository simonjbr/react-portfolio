import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
	return (
		<>
			<div className="px-5 navbar bg-gradient-to-tr from-slate-800 to-blue-500">
				<div className="navbar-start">
					<h1 className="text-5xl font-bold text-gray-350 hover:text-gray-500 w-auto flex align-middle transition-all">
						<Link to="/">simonjbr</Link>
					</h1>
				</div>
				<div className="navbar-end sm:min-w-[380px]">
					<Navigation />
				</div>
			</div>
		</>
	);
}
