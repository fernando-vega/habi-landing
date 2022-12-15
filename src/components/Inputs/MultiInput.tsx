import './Inputs.scss';
import { useState } from 'react';

const MultiInput = (data: any) => {
	const [checked, setChecked] = useState(false);

	const toggle = (value: any) => {
		console.log(value);
		return !value;
	};

	return (
		<>
			<div className="item-checkbox">
				<input type="checkbox" id={data.config.title} name={data.config.title} checked={checked} onChange={() => setChecked(toggle)} />
				<label htmlFor={data.config.title}>{data.config.title}</label>
			</div>
			{checked && (
				<div className="item-checkbox">
					<input type="checkbox" id={data.config.options} name={data.config.options} />
					<label htmlFor={data.config.options}>{data.config.options}</label>
				</div>
			)}
		</>
	);
};

export default MultiInput;
