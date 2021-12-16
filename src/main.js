import App from "./App.svelte";

const app = new App({
	target: document.body,
	props: {
		title: "To-Do List :)",
	},
});

export default app;
