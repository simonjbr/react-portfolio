import Project from '../components/Project';

const Portfolio = () => {
	const projects = [
		{
			id: 1,
			title: 'PopChat',
			gitHub: 'https://github.com/cawooda/triumvirate',
			description:
				'Node.js, Express, PostgreSQL, Sequelize, Bulma, Handlebars, Multer',
			deploy: 'https://triumvirate.onrender.com',
			image: 'src/assets/project-image-popchat-crop.png',
		},
		{
			id: 2,
			title: 'Boardgame Bliss',
			gitHub: 'https://github.com/awesome-foursome/boardgame-bliss',
			description: 'JavaScript, HTML, CSS, JQuery, Bulma',
			deploy: 'https://awesome-foursome.github.io/boardgame-bliss/',
			image: 'src/assets/project-image-boardgame-bliss-crop.png',
		},
		{
			id: 3,
			title: 'techBlog',
			gitHub: 'https://github.com/simonjbr/tech-blog',
			description: 'Node.js, Express, PostgreSQL, Sequelize, Handlebars',
			deploy: 'https://tech-blog-v2l9.onrender.com/',
			image: 'src/assets/project-image-techblog-crop.png',
		},
		{
			id: 4,
			title: 'vivoChat',
			gitHub: 'TBA',
			description: 'MERN Stack',
			deploy: '',
			image: 'src/assets/project-image-vivochat-crop.png',
		},
	];

	return (
		<>
			<article className="pt-4 ps-4">
				<h1 className="text-4xl underline">Portfolio</h1>
				<div className="columns-2 max-sm:columns-1 my-12 px-6 gap-6">
					{projects.map((project) => (
						<div key={project.id} className="py-3 relative">
							<Project {...project} />
						</div>
					))}
				</div>
			</article>
		</>
	);
};

export default Portfolio;
