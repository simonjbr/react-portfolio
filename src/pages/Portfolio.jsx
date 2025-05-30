import Project from '../components/Project';

// import project images
import popChatImage from '../assets/project-image-popchat-crop.png';
import boardgameBlissImage from '../assets/project-image-boardgame-bliss-crop.png';
import techBlogImage from '../assets/project-image-techblog-crop.png';
import vivoChatImage from '../assets/project-image-vivochat-crop2.png';
import weatherDashboardImage from '../assets/project-image-weather-dashboard-crop.png';
import socialNetworkApiImage from '../assets/project-image-social-network-api-crop.png';
import scrabblrImage from '../assets/project-image-scrabblr-crop.png';

const Portfolio = () => {
	const projects = [
		{
			id: 1,
			title: 'Scrabblr',
			gitHub: 'https://github.com/simonjbr/scrabblr',
			description: 'Node.js, Express, React, Google Cloud Vision API',
			deploy: 'https://github.com/simonjbr/scrabblr',
			image: scrabblrImage,
		},
		{
			id: 2,
			title: 'vivoChat',
			gitHub: 'https://github.com/simonjbr/vivo-chat',
			description:
				'MERN Stack, Apollo GraphQL Subscriptions, Tailwind CSS',
			deploy: 'https://vivo-chat.onrender.com/',
			image: vivoChatImage,
		},
		{
			id: 3,
			title: 'Boardgame Bliss',
			gitHub: 'https://github.com/awesome-foursome/boardgame-bliss',
			description: 'JavaScript, HTML, CSS, JQuery, Bulma',
			deploy: 'https://awesome-foursome.github.io/boardgame-bliss/',
			image: boardgameBlissImage,
		},
		{
			id: 4,
			title: 'techBlog',
			gitHub: 'https://github.com/simonjbr/tech-blog',
			description: 'Node.js, Express, PostgreSQL, Sequelize, Handlebars',
			deploy: 'https://tech-blog-v2l9.onrender.com/',
			image: techBlogImage,
		},
		{
			id: 5,
			title: 'PopChat',
			gitHub: 'https://github.com/cawooda/triumvirate',
			description:
				'Node.js, Express, PostgreSQL, Sequelize, Bulma, Handlebars, Multer',
			deploy: 'https://triumvirate.onrender.com',
			image: popChatImage,
		},
		{
			id: 6,
			title: 'Weather Dashboard',
			gitHub: 'https://github.com/simonjbr/weather-dashboard',
			description: 'JQuery, Bootstrap',
			deploy: 'https://simonjbr.github.io/weather-dashboard/',
			image: weatherDashboardImage,
		},
		{
			id: 7,
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
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-12 px-6">
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
