<script context="module">
	// @ts-ignore
	import components from './components';
	const { a, table, code, li } = components;
	export { a, table, code, li };
</script>

<script>
	// @ts-nocheck
	// svelte-ignore unused-export-let
	export let title;
	// svelte-ignore unused-export-let
	export let description;
	// svelte-ignore unused-export-let
	export let date;
	// svelte-ignore unused-export-let
	export let keywords;
	// svelte-ignore unused-export-let
	export let hidden;
</script>

<slot />
