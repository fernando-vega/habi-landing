import './Inputs.scss';
const Number = (data: any) => {
	return (
		<div className="input-box">
			<input type="number" min="1" max={data.config.max} required />
			<span>{data.config.title}</span>
			<i></i>
		</div>
	);
};

export default Number;
