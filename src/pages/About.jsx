import { Headshot } from '../components/Headshot';

const About = () => {
	return (
		<>
			<article className="container mx-auto px-4 py-8 ">
				<h1 className="text-4xl underline font-bold mb-8 text-center md:text-left">
					About Me
				</h1>
				<div className="flex flex-col md:flex-row items-center gap-8">
					<div className="flex-shrink-0">
						<Headshot />
					</div>
					<div className="prose max-w-2xl">
						<p className="text-2xl leading-relaxed">
							My name is Simon Brown and I am a passionate full
							stack web developer, based out of Perth Western
							Australia, with a strong foundation built through a
							comprehensive bootcamp program. With a background in
							IT, I bring a wealth of experience and a
							problem-solving mindset to every project.
						</p>
						<p className="text-2xl leading-relaxed mt-4">
							My journey in technology has equipped me with the
							skills to create dynamic, user-friendly web
							applications. I am eager to leverage my expertise to
							build innovative solutions and contribute to
							exciting development teams.
						</p>
					</div>
				</div>
			</article>
		</>
	);
};

export default About;
