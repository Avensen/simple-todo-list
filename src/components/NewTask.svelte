<script>
	import { createEventDispatcher } from "svelte";

	let value = "";
	const dispatch = createEventDispatcher();

	function handleKeyUp({ key }) {
		if (key !== "Enter" || !value.length) return;
		dispatch("newtask", value);
		value = "";
	}
</script>

<input type="text" on:keyup={handleKeyUp} bind:value placeholder="+ Add Task" />

<style>
	input {
		box-sizing: border-box;
		margin-bottom: 1rem;
		padding: 1rem;
		border: none;
		outline: none;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.25);
		color: #fff;
		font-weight: lighter;
		font-size: 1em;
		cursor: pointer;
	}

	input::placeholder {
		color: #fff;
	}
</style>
