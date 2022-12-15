import './Inputs.scss';
const Email = (data: any) => {
	return (
		<div className="input-box">
			<input type="email" required />
			<span>{data.config.title}</span>
			<i></i>
		</div>
	);
};

export default Email;
