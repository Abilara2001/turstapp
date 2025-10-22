import React from 'react';
import './button.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'secondary';
};

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps): JSX.Element {
	return <button className={`btn ${variant} ${className}`.trim()} {...props} />;
}
