import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
	const currentPage = useLocation().pathname;

	return (
		<>
			<div className="px-5 navbar bg-gradient-to-tr from-slate-800 to-blue-500">
				<div className="navbar-start">
					<h1 className="text-5xl font-bold text-gray-350 hover:text-gray-500 w-auto flex align-middle transition-all">
						<Link to="/">simonjbr</Link>
					</h1>
				</div>
				<div className="navbar-end">
					<ul className="text-3xl transition-all flex justify-between max-sm:hidden">
						<li>
							<Link
								className={`btn-ghost rounded-md p-2 ${
									currentPage === '/' &&
									'underline text-gray-300 font-medium'
								}`}
								to="/"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								className={`btn-ghost rounded-md p-2 ${
									currentPage === '/Portfolio' &&
									'underline text-gray-300 font-medium'
								}`}
								to="/Portfolio"
							>
								Portfolio
							</Link>
						</li>
						<li>
							<Link
								className={`btn-ghost rounded-md p-2 ${
									currentPage === '/Contact' &&
									'underline text-gray-300 font-medium'
								}`}
								to="/Contact"
							>
								Contact
							</Link>
						</li>
						<li>
							<Link
								className={`btn-ghost rounded-md p-2 ${
									currentPage === '/Resume' &&
									'underline text-gray-300 font-medium'
								}`}
								to="/Resume"
							>
								Resume
							</Link>
						</li>
					</ul>
					<div className="dropdown dropdown-hover dropdown-end sm:hidden">
						<div
							tabIndex={0}
							role="button"
							className="m-1 text-2xl btn-ghost p-2 rounded-xl"
						>
							<GiHamburgerMenu />
						</div>
						<ul
							tabIndex={0}
							className="dropdown-content menu bg-cyan-950 rounded-box z-[1] w-52 p-2 shadow text-2xl"
						>
							<li>
							<Link
								className={`btn-ghost rounded-md p-2 ${
									currentPage === '/' &&
									'underline text-gray-300 font-medium'
								}`}
								to="/"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								className={`btn-ghost rounded-md p-2 ${
									currentPage === '/Portfolio' &&
									'underline text-gray-300 font-medium'
								}`}
								to="/Portfolio"
							>
								Portfolio
							</Link>
						</li>
						<li>
							<Link
								className={`btn-ghost rounded-md p-2 ${
									currentPage === '/Contact' &&
									'underline text-gray-300 font-medium'
								}`}
								to="/Contact"
							>
								Contact
							</Link>
						</li>
						<li>
							<Link
								className={`btn-ghost rounded-md p-2 ${
									currentPage === '/Resume' &&
									'underline text-gray-300 font-medium'
								}`}
								to="/Resume"
							>
								Resume
							</Link>
						</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
