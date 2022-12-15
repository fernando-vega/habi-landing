import './Inputs.scss';
const Upload = () => {
	return (
		<div className="input-upload">
			<label htmlFor="foto">
				<span>Subir una foto</span>
				<input type="file" id="foto" />
			</label>
		</div>
	);
};

export default Upload;
