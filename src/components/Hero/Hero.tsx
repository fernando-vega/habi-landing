import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateForm } from 'redux/form.reducer';
import './Hero.scss';

const Hero: FC = () => {
	const stateF = useSelector((formState: any) => formState.form.value);
	const dispatch = useDispatch();

	return (
		<div className="content-wrapper">
			<div className="content-hero">
				<h1 className="content-hero__title">Compramos tu vivienda en 10 días*</h1>
				{!stateF && (
					<button onClick={() => dispatch(stateForm())} className="content-hero__button btn btn-large">
						Vender mi apartamento
					</button>
				)}
			</div>
		</div>
	);
};

export default Hero;
