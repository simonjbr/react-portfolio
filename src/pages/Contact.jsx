import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

const Contact = () => {
	// const [name, setName] = useState('');
	// const [email, setEmail] = useState('');
	// const [message, setMessage] = useState('');

	const [emptyField, setEmptyField] = useState(false);
	const [invalidEmail, setInvalidEmail] = useState(false);

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
		alert(
			`This page does not yet have a functioning backend. Please direct your questions to simon@gmail.com`
		);
	};

	return (
		<>
			<article className="pt-4 px-4">
				<h1 className="text-4xl underline mb-4">Contact</h1>
				<div className="mx-auto block max-w-md rounded-lg bg-cyan-950 p-6 shadow-xl">
					<form onSubmit={handleSubmit}>
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
						<button type="submit" className="btn text-2xl">
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
			<div className="mt-4 mx-auto max-w-md">
				<div role="alert" className="alert alert-warning">
					<p className="text-2xl">
						<span className="font-medium">Note:</span> This page
						does not yet have a functioning back end. Please direct
						your questions to:
						<br />
						Email: simon@gmail.com
						<br />
						Phone: +61 412 345 678
					</p>
				</div>
			</div>
		</>
	);
};

export default Contact;
