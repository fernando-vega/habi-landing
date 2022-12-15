import './Inputs.scss';

const Checkbox = (data: any) => {
	return (
		<fieldset>
			<legend>{data.config.title}</legend>
			<div className="flex-container">
				{data.config.adicionales.map((value: any, index: number) => (
					<div className="item-checkbox" key={index}>
						<input type="checkbox" id={value} name={value} />
						<label htmlFor={value}>{value}</label>
					</div>
				))}
			</div>
		</fieldset>
	);
};

export default Checkbox;
