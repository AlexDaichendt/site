<script lang="ts">
	import { mdiChevronDoubleUp } from '@mdi/js';
	import Icon from 'mdi-svelte';
	let y: number = 0;

	$: enabled = y > 100;

	function onClick() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:window bind:scrollY={y} />

{#if enabled}
	<button on:click={onClick}><Icon path={mdiChevronDoubleUp} /></button>
{/if}

<style>
	button:focus {
		box-shadow: 0 0 5px var(--special-shadow-color);
	}
	button {
		border-radius: 35px;
		width: 48px;
		height: 48px;
		position: fixed;
		bottom: 32px;
		right: 32px;
		color: var(--light-color);
		border: 1px solid var(--special-shadow-color);
		background-color: var(--dark-color);
	}
	button:hover {
		border: 1px solid var(--shadow-color);
		color: var(--dark-color);
		background-color: var(--light-color);
	}
</style>
