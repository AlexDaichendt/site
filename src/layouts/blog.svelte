<script context="module">
	// @ts-ignore
	import components from '../components';
	const a = components.a;
	export { a };
</script>

<script lang="ts">
	// svelte-ignore unused-export-let
	export let title;
	// svelte-ignore unused-export-let
	export let date;
</script>

<slot />
