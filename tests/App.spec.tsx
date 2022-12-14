import { render, screen } from "@testing-library/react";

import { App } from "../src/App";

test("App component display header", () => {
	render(<App />);

	const heading = screen.getByText(/🌱⚛️ Habi React App/i);

	expect(heading).toBeInTheDocument();
});
