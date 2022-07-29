<script context="module">
	// @ts-ignore
	import components from './components';
	const { a, table, code, li, hr, sup } = components;
	export { a, table, code, li, hr, sup };
</script>

<script>
	// @ts-nocheck
	import { mdiCalendar } from '@mdi/js';
	import { mdiPencil } from '@mdi/js';
	import Icon from 'mdi-svelte';
	import Divider from '$components/Divider.svelte';
	import '$lib/utils/one-dark.css';

	export let title;
	// svelte-ignore unused-export-let
	export let description;
	export let created;
	export let updated = '';
	// svelte-ignore unused-export-let
	export let keywords;
	// svelte-ignore unused-export-let
	export let hidden = false;
</script>

<h1>{title}</h1>
<aside role="note">
	{#if updated}
		<Icon path={mdiPencil} size="0.8rem" /> updated {new Date(updated).toLocaleDateString('en-GB')};
	{/if}
	<Icon path={mdiCalendar} size="0.8rem" /> created
	{new Date(created).toLocaleDateString('en-GB')}
</aside>
<Divider />
<slot />

<style>
	aside {
		font-weight: 200;
		font-size: 0.8rem;
		margin-bottom: 1rem;
	}
</style>
