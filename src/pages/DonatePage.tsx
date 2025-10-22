import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../components/common/Button';

interface DonateForm {
	name: string;
	email: string;
	amount: number;
}

export function DonatePage(): JSX.Element {
	const { register, handleSubmit, reset } = useForm<DonateForm>();
	const [success, setSuccess] = React.useState<string | null>(null);

	const onSubmit = (data: DonateForm) => {
		setTimeout(() => {
			setSuccess(`Thank you, ${data.name}! Your donation of $${data.amount} was received.`);
			reset();
		}, 600);
	};

	return (
		<div className="section">
			<h2 className="section-title">Donate</h2>
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<label>
					Name
					<input {...register('name', { required: true })} placeholder="Your full name" />
				</label>
				<label>
					Email
					<input type="email" {...register('email', { required: true })} placeholder="you@example.com" />
				</label>
				<label>
					Amount (USD)
					<input type="number" step="1" min="1" {...register('amount', { required: true, valueAsNumber: true })} />
				</label>
				<Button type="submit">Donate</Button>
			</form>
			{success && <div className="toast success" role="status">{success}</div>}
		</div>
	);
}
