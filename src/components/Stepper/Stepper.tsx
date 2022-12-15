import { FC, useState } from 'react';
import { Stepper, Step } from 'react-form-stepper';

import './Stepper.scss';
import Summary from 'components/Inputs/Summary';
import Text from 'components/Inputs/Text';
import Email from 'components/Inputs/Email';
import Number from 'components/Inputs/Number';
import Checkbox from 'components/Inputs/Checkbox';
import MultiInput from 'components/Inputs/MultiInput';
import Currency from 'components/Inputs/Currency';
import Upload from 'components/Inputs/Upload';

const StepContainer: FC = () => {
	const steps = [
		{ nameStep: 'Datos personales', component: <Text key={0} config={{ title: 'Nombre Completo' }} /> },
		{ nameStep: 'Email', component: <Email key={1} config={{ title: 'Correo Electrónico' }} /> },
		{ nameStep: 'Dirección', component: <Text key={0} config={{ title: 'Dirección' }} /> },
		{ nameStep: 'Piso', component: <Number key={3} config={{ title: 'Piso número', max: 50 }} /> },
		{ nameStep: 'Extras', component: <Checkbox key={4} config={{ title: 'Selecciona los adicionales', adicionales: ['Zona BBQ', 'Salon comunal', 'parque de juegos'] }} /> },
		{ nameStep: 'Parquadero', component: <MultiInput key={5} config={{ title: 'Parqueadero', options: 'Cubierto' }} /> },
		{ nameStep: 'Valor', component: <Currency key={6} config={{ title: 'Precio de tu apartamento' }} /> },
		{ nameStep: 'Foto', component: <Upload key={7} /> },
		{ nameStep: 'Asensor', component: <Checkbox key={8} config={{ title: 'Asensor', adicionales: ['Si'] }} /> },
		{ nameStep: 'Resumen', component: <Summary key={9} /> },
	];

	const [activeStep, setActiveStep] = useState(0);

	const handleNextStep = () => {
		if (activeStep <= 9) {
			setActiveStep(activeStep + 1);
		}
	};
	const handleBackStep = () => {
		if (activeStep >= 1) {
			setActiveStep(activeStep - 1);
		}
	};

	const handleSubmit = (): any => {
		console.log('Submit');
	};

	return (
		<section>
			<Stepper
				hideConnectors={true}
				styleConfig={{
					activeBgColor: '#6402ce',
					completedBgColor: '#c48dff',
					fontWeight: 'regular',
					activeTextColor: '#fff',
					borderRadius: '8px',
					circleFontSize: '14px',
					completedTextColor: '#fff',
					inactiveBgColor: '#ccc',
					inactiveTextColor: '#fff',
					labelFontSize: '14px',
					size: '30px',
				}}
				activeStep={activeStep}
			>
				{steps && steps.map((step, index) => <Step key={index} label={step.nameStep} />)}
			</Stepper>
			<div className="container-form">
				<form onSubmit={handleSubmit()}>{steps && steps.map((step, index) => (activeStep === index ? step.component : ''))}</form>
			</div>
			<div className="container-buttons">
				<button disabled={activeStep == 0} className="btn btn-stepper" onClick={handleBackStep}>
					Anterior
				</button>
				<button disabled={activeStep == steps.length - 1} className="btn btn-stepper" onClick={handleNextStep}>
					Siguiente
				</button>
			</div>
		</section>
	);
};

export default StepContainer;
