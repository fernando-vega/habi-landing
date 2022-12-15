import CurrencyInput from 'react-currency-input-field';

import './Inputs.scss';

const Currency = (data: any) => {
	return (
		<div className="input-box">
			<CurrencyInput id={data.config.title} name={data.config.title} intlConfig={{ locale: 'es-CO', currency: 'COP' }} required />
			<span>{data.config.title}</span>
			<i></i>
		</div>
	);
};

export default Currency;
