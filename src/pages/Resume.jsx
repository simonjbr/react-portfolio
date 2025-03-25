import { Link } from 'react-router-dom';

const Resume = () => {
	return (
		<>
			<article className="pt-4 ps-4">
				<h1 className="text-4xl underline">Resume</h1>
				<p className="text-2xl">
					<Link
						to="https://github.com/simonjbr"
						className="link text-blue-500"
					>
						Download my resume here
					</Link>
				</p>
				<h2 className="text-2xl underline">Front-end Proficiencies</h2>
				<ul className="list-disc ms-5 text-xl">
					<li>JavaScript</li>
					<li>React</li>
					<li>Tailwind CSS</li>
					<li>HTML</li>
					<li>CSS</li>
					<li>Bootstrap</li>
					<li>Bulma</li>
					<li>JQuery</li>
					<li>Responsive Design</li>
				</ul>
				<h2 className="text-2xl underline">Back-end Proficiencies</h2>
				<ul className="list-disc ms-5 text-xl">
					<li>Node.js</li>
					<li>Express</li>
					<li>PostgreSql, Sequelize</li>
					<li>MongoDB, Mongoose</li>
					<li>REST API</li>
					<li>GraphQL</li>
				</ul>
				<h2 className="text-2xl underline">Other Skills</h2>
				<ul className="list-disc ms-5 text-xl">
					<li>Jest unit testing</li>
					<li>Render Deployment</li>
					<li>Netlify Deployment</li>
					<li>Git</li>
					<li>GitHub</li>
					<li>Agile</li>
				</ul>
			</article>
		</>
	);
};

export default Resume;
