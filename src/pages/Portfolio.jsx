import Project from '../components/Project';

// import project images
import popChatImage from '../assets/project-image-popchat-crop.png';
import boardgameBlissImage from '../assets/project-image-boardgame-bliss-crop.png';
import techBlogImage from '../assets/project-image-techblog-crop.png';
import vivoChatImage from '../assets/project-image-vivochat-crop2.png';
import weatherDashboardImage from '../assets/project-image-weather-dashboard-crop.png';
import socialNetworkApiImage from '../assets/project-image-social-network-api-crop.png';

const Portfolio = () => {
	const projects = [
		{
			id: 1,
			title: 'vivoChat',
			gitHub: 'https://github.com/simonjbr/vivo-chat',
			description: 'MERN Stack, Apollo GraphQL Subscriptions, Tailwind CSS',
			deploy: 'https://vivo-chat.onrender.com/',
			image: vivoChatImage,
		},
		{
			id: 2,
			title: 'Boardgame Bliss',
			gitHub: 'https://github.com/awesome-foursome/boardgame-bliss',
			description: 'JavaScript, HTML, CSS, JQuery, Bulma',
			deploy: 'https://awesome-foursome.github.io/boardgame-bliss/',
			image: boardgameBlissImage,
		},
		{
			id: 3,
			title: 'techBlog',
			gitHub: 'https://github.com/simonjbr/tech-blog',
			description: 'Node.js, Express, PostgreSQL, Sequelize, Handlebars',
			deploy: 'https://tech-blog-v2l9.onrender.com/',
			image: techBlogImage,
		},
		{
			id: 4,
			title: 'PopChat',
			gitHub: 'https://github.com/cawooda/triumvirate',
			description:
				'Node.js, Express, PostgreSQL, Sequelize, Bulma, Handlebars, Multer',
			deploy: 'https://triumvirate.onrender.com',
			image: popChatImage,
		},
		{
			id: 5,
			title: 'Weather Dashboard',
			gitHub: 'https://github.com/simonjbr/weather-dashboard',
			description: 'JQuery, Bootstrap',
			deploy: 'https://simonjbr.github.io/weather-dashboard/',
			image: weatherDashboardImage,
		},
		{
			id: 6,
			title: 'Social Network API',
			gitHub: 'https://github.com/simonjbr/social-network-api',
			description: 'Node.js, Express, MongoDB, Mongoose',
			deploy: 'https://github.com/simonjbr/social-network-api',
			image: socialNetworkApiImage,
		},
	];

	return (
		<>
			<article className="pt-4 ps-4">
				<h1 className="text-4xl underline">Portfolio</h1>
				<div className="columns-2 max-sm:columns-1 my-12 px-6 gap-6">
					{projects.map((project) => (
						<div key={project.id} className="p-3 relative">
							<Project {...project} />
						</div>
					))}
				</div>
			</article>
		</>
	);
};

export default Portfolio;
