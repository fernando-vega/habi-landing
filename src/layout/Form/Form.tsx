import { FC } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import StepContainer from 'components/Stepper/Stepper';
import './Form.scss';

const Form: FC = () => {
	const stateF = useSelector((formState: any) => formState.form.value);

	if (stateF) {
		return (
			<motion.div className="content-form" initial={{ right: 300, opacity: 0 }} animate={{ right: 15, opacity: 1 }}>
				<StepContainer />
			</motion.div>
		);
	} else {
		return null;
	}
};

export default Form;
