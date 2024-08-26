// import dotenv from 'dotenv';
import { useRef, useState } from 'react';
import { validateEmail } from '../utils/helpers';
import emailjs from '@emailjs/browser';

// dotenv.config();

const Contact = () => {
	const [emptyField, setEmptyField] = useState(false);
	const [invalidEmail, setInvalidEmail] = useState(false);
	const form = useRef();

	// validate input on blur
	const handleOnBlur = (e) => {
		const { target } = e;
		const inputName = target.name;
		const inputValue = target.value;

		if (!inputValue) {
			switch (inputName) {
				case 'name':
					setEmptyField(true);
					break;
				case 'email':
					setEmptyField(true);
					break;
				case 'message':
					setEmptyField(true);
					break;
				default:
					console.error('invalid input name');
			}
		} else {
			setEmptyField(false);
		}

		// validate email address with helper function
		if (inputName === 'email' && !validateEmail(inputValue)) {
			setInvalidEmail(true);
		} else {
			setInvalidEmail(false);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_REACT_APP_SERVICE_ID,
				import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
				form.current,
				{
					publicKey: import.meta.env.VITE_REACT_APP_PUBLIC_KEY,
				}
			)
			.then(
				() => {
					console.log('SUCCESS!');
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};

	return (
		<>
			<article className="pt-4 px-4">
				<h1 className="text-4xl underline mb-4">Contact</h1>
				<div className="mx-auto block max-w-md rounded-lg bg-cyan-950 p-6 shadow-xl">
					<form ref={form} onSubmit={handleSubmit}>
						<label className="text-2xl input input-bordered flex items-center gap-3 mb-3">
							Name:
							<input
								onBlur={handleOnBlur}
								name="name"
								type="text"
								className="grow text-gray-300"
								placeholder="Enter name..."
							/>
						</label>
						<label className="text-2xl input input-bordered flex items-center gap-3 mb-3">
							Email:
							<input
								onBlur={handleOnBlur}
								name="email"
								type="text"
								className="grow text-gray-300"
								placeholder="Enter email..."
							/>
						</label>
						<textarea
							onBlur={handleOnBlur}
							name="message"
							type="text"
							className="text-2xl w-full textarea textarea-bordered grow text-gray-300"
							placeholder="Enter message..."
						></textarea>
						<button
							type="submit"
							className="btn text-2xl"
							value={'Send'}
						>
							Submit
						</button>
					</form>
				</div>
			</article>
			{/* form validation warnings */}
			{emptyField ? (
				<div className="mt-4 mx-auto max-w-md animate-pulse ease-in-out">
					<div role="alert" className="alert alert-error">
						<p className="text-2xl">
							Input fields cannot be left blank
						</p>
					</div>
				</div>
			) : (
				''
			)}
			{invalidEmail ? (
				<div className="mt-4 mx-auto max-w-md animate-pulse ease-in-out">
					<div role="alert" className="alert alert-error">
						<p className="text-2xl">Please provide a valid email</p>
					</div>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default Contact;
