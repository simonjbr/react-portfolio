import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
	return (
		<>
			<div className="px-5 navbar bg-gradient-to-tr from-slate-800 to-blue-500">
				<div className="navbar-start">
					<h1 className="text-5xl font-bold text-gray-350 hover:text-gray-500 w-auto flex align-middle transition-all">
						<a href="/">simonjbr</a>
					</h1>
				</div>
				<div className="navbar-end">
					<ul className="text-3xl transition-all flex justify-between max-sm:hidden">
						<li>
							<a className="btn-ghost rounded-md p-2" href="/">
								About
							</a>
						</li>
						<li>
							<a
								className="btn-ghost rounded-md p-2"
								href="/Portfolio"
							>
								Portfolio
							</a>
						</li>
						<li>
							<a
								className="btn-ghost rounded-md p-2"
								href="/Contact"
							>
								Contact
							</a>
						</li>
						<li>
							<a
								className="btn-ghost rounded-md p-2"
								href="/Resume"
							>
								Resume
							</a>
						</li>
					</ul>
					<div className="dropdown dropdown-hover dropdown-end sm:hidden">
						<div tabIndex={0} role="button" className="m-1 text-2xl btn-ghost p-2 rounded-xl">
							<GiHamburgerMenu />
						</div>
						<ul
							tabIndex={0}
							className="dropdown-content menu bg-slate-600 rounded-box z-[1] w-52 p-2 shadow text-2xl"
						>
							<li>
							<a className="btn-ghost rounded-md p-2" href="/">
								About
							</a>
						</li>
						<li>
							<a
								className="btn-ghost rounded-md p-2"
								href="/Portfolio"
							>
								Portfolio
							</a>
						</li>
						<li>
							<a
								className="btn-ghost rounded-md p-2"
								href="/Contact"
							>
								Contact
							</a>
						</li>
						<li>
							<a
								className="btn-ghost rounded-md p-2"
								href="/Resume"
							>
								Resume
							</a>
						</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
