import { RxAvatar } from 'react-icons/rx';

const About = () => {
	return (
		<>
			<article className="pt-4 ps-4">
				<h1 className="text-4xl underline">About Me</h1>
				<div className="">
					<RxAvatar className="text-9xl my-12" />
					<p className="text-xl px-4 max-w-[600px]">
						My name is Simon Brown and I am a passionate full stack
						web developer, based out of Perth Western Australia,
						with a strong foundation built through a comprehensive
						bootcamp program. With a background in IT, I bring a
						wealth of experience and a problem-solving mindset to
						every project. My journey in technology has equipped me
						with the skills to create dynamic, user-friendly web
						applications. I am eager to leverage my expertise to
						build innovative solutions and contribute to exciting
						development teams.
					</p>
				</div>
			</article>
		</>
	);
};

export default About;
