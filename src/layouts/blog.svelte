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
	export let keywords;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords.join(', ')} />
</svelte:head>

<slot />
