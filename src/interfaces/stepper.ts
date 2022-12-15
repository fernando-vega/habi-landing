interface customComponent {
	type: string;
	errorMessage?: string;
	validation?: string;
	options?: string;
	moreOptions?: {};
}

export interface Stepper {
	description: string;
	component: customComponent;
}
