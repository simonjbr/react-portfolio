import { IoLogoGithub } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Project(project) {
	return (
		<div className="h-min  overflow-hidden group ">
			<Link to={project.gitHub}>
				<img
					src={project.image}
					alt={`${project.title} image`}
					className="group-hover:blur-sm group-hover:brightness-50 group-hover:saturate-50 group-hover:scale-105 border-slate-600 transition-all duration-500 overflow-hidden"
				/>
				<div className="invisible group-hover:visible text-3xl absolute top-1/4 left-10">
					<div className="">
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
					<p className="text-2xl hover:text-white hover:text-3xl  transition-all duration-300">
						{project.description}
					</p>
				</div>
			</Link>
		</div>
	);
}
