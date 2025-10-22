import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../components/common/Button';

interface ContactForm {
	name: string;
	email: string;
	message: string;
}

export function ContactPage(): JSX.Element {
	const { register, handleSubmit, reset } = useForm<ContactForm>();
	const [success, setSuccess] = React.useState<string | null>(null);

	const onSubmit = (data: ContactForm) => {
		setTimeout(() => {
			setSuccess(`Thanks ${data.name}, we'll get back to you soon!`);
			reset();
		}, 500);
	};

	return (
		<div className="section">
			<h2 className="section-title">Contact Us</h2>
			<div className="grid two">
				<form className="form" onSubmit={handleSubmit(onSubmit)}>
					<label>
						Name
						<input {...register('name', { required: true })} />
					</label>
					<label>
						Email
						<input type="email" {...register('email', { required: true })} />
					</label>
					<label>
						Message
						<textarea rows={5} {...register('message', { required: true })} />
					</label>
					<Button type="submit">Send</Button>
					{success && <div className="toast success">{success}</div>}
				</form>
				<div>
					<h3>Reach us</h3>
					<p>Phone: +1 (555) 123-4567</p>
					<p>Email: support@charitytrust.org</p>
					<p>Address: 123 Hope Ave, Kind City</p>
					<div className="map-wrapper">
						<iframe
							title="map"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019922692528!2d-122.41941558468186!3d37.774929779759956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b2a9e0f%3A0x5dfc3b2d9c!2sCivic%20Center!5e0!3m2!1sen!2sus!4v1610000000000"
							style={{ border: 0, width: '100%', height: 300 }}
							allowFullScreen
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
