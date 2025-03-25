import headshot from '../assets/headshots/headshot-02.jpg';
export const Headshot = () => {
	return (
		<div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 shadow-lg">
			<img
				src={headshot}
				alt="Headshot image"
				className="w-full h-full object-cover"
				loading="lazy"
			/>
		</div>
	);
};
