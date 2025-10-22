import React from 'react';
import { ArrowUp } from 'lucide-react';
import './backtotop.css';

export function BackToTop(): JSX.Element {
	const [visible, setVisible] = React.useState(false);
	React.useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 200);
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);
	return (
		<button
			className={`back-to-top ${visible ? 'show' : ''}`}
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			aria-label="Back to top"
		>
			<ArrowUp />
		</button>
	);
}
