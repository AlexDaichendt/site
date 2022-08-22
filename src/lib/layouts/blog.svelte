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
	import SEO from '$components/SEO.svelte';

	// svelte-ignore unused-export-let
	export let data;
	// svelte-ignore unused-export-let
	export let errors;

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

<SEO {title} {description} {keywords} />

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
	:global(h1, h2, h3, h4) {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	:global(h1 a, h2 a, h3 a, h4 a) {
		text-decoration: none;
		font-size: 0.7em;
		margin-left: 0.5rem;
		opacity: 0;
		transition: opacity 0.2s ease-in-out 0.1s;
	}
	:global(h1:hover a, h2:hover a, h3:hover a, h4:hover a) {
		opacity: 0.8;
	}
	:global(.icon-link::before) {
		content: '🔗';
	}
</style>
