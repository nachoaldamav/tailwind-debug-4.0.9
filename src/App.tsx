import "@ialdama/tailwind-config/styles.css";
import Button from "@ialdama/tailwind-button";

function App() {
	return (
		<div className="flex flex-col items-center justify-center h-screen w-screen">
			<Button label="Hello World" onClick={() => alert("Hello World")} />
		</div>
	);
}

export default App;
