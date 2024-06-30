import {
	IoLogoGithub,
	IoLogoLinkedin,
	IoLogoStackoverflow,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<>
			<div className="sticky top-full flex justify-evenly mb-5">
				<Link to="https://github.com/simonjbr">
					<IoLogoGithub className="text-5xl text-gray-500 hover:text-gray-300 cursor-pointer" />
				</Link>
				<Link to="https://au.linkedin.com/">
					<IoLogoLinkedin className="text-5xl text-gray-500 hover:text-gray-300 cursor-pointer" />
				</Link>
				<Link to="https://stackoverflow.com/">
					<IoLogoStackoverflow className="text-5xl text-gray-500 hover:text-gray-300 cursor-pointer" />
				</Link>
			</div>
		</>
	);
}
