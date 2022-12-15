import './Inputs.scss';
const Text = (data: any) => {
	return (
		<div className="input-box">
			<input type="text" required />
			<span>{data.config.title}</span>
			<i></i>
		</div>
	);
};

export default Text;
