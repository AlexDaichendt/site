<script context="module">
	// @ts-ignore
	import components from '../components';
	const a = components.a;
	export { a };
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
</script>

<slot />
