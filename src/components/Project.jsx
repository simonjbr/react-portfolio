import { IoLogoGithub } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Project(project) {
	return (
		<div className="h-min w-full overflow-hidden group break-all">
			<Link to={project.gitHub}>
				<img
					src={project.image}
					alt={`${project.title} image`}
					className="w-full h-auto max-w-full object-cover group-hover:blur-sm group-hover:brightness-50 group-hover:saturate-50 group-hover:scale-105 border-slate-600 transition-all duration-500 overflow-hidden"
				/>
				<div className="invisible group-hover:visible text-3xl absolute inset-0 p-4 flex flex-col justify-center items-start">
					<div className="max-w-full">
						<Link
							to={project.deploy}
							className="hover:text-white hover:text-4xl  transition-all duration-300"
						>
							{project.title}
						</Link>
						<Link to={project.gitHub}>
							<IoLogoGithub className="hover:text-white hover:text-5xl  transition-all duration-300" />
						</Link>
					</div>
					<p className="text-2xl hover:text-white hover:text-3xl  transition-all duration-300 break-normal">
						{project.description}
					</p>
				</div>
			</Link>
		</div>
	);
}
