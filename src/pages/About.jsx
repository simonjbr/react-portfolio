import { RxAvatar } from 'react-icons/rx';

const About = () => {
	return (
		<>
			<article className="pt-4 ps-4">
				<h1 className="text-3xl underline">About Me</h1>
				<div className="">
					<RxAvatar className="text-9xl my-12" />
					<p>
						The sun set over the tranquil lake, casting a warm,
						golden glow across the water. Birds chirped softly in
						the distance, their melodies blending harmoniously with
						the gentle rustling of leaves in the breeze. A family of
						ducks glided gracefully across the surface, leaving
						ripples in their wake. Nearby, a couple sat on a
						blanket, sharing a quiet moment as they watched the day
						turn into night. The air was filled with the sweet scent
						of blooming flowers, and the world seemed to pause,
						savoring the serene beauty of the evening. It was a
						perfect end to a peaceful day.
					</p>
				</div>
			</article>
		</>
	);
};

export default About;
