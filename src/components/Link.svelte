<script lang="ts">
	import { mdiLinkVariant } from '@mdi/js';
	import { mdiChevronRight } from '@mdi/js';
	import Icon from 'mdi-svelte';
	export let href: string;
	export let disableIcon = false;
	// svelte-ignore unused-export-let
	export let rel = '';

	const internal = !href.startsWith('http');
	let spin = false;
</script>

<a
	rel={!internal ? 'nofollow noreferrer noopener' : ''}
	target={!internal ? '_blank' : ''}
	{href}
	on:mouseover={() => (spin = true)}
	on:focus={() => (spin = true)}
	on:mouseleave={() => (spin = false)}
>
	{#if !disableIcon}
		<Icon path={internal ? mdiChevronRight : mdiLinkVariant} size="1rem" {spin} />
	{/if}
	<span class="text"><slot /></span>
</a>

<style>
	a {
		color: var(--special-color);
		text-decoration: none;
		font-weight: 550;
	}
	a:hover {
		color: var(--dark-color);
	}
	.text {
		text-decoration: underline;
	}
</style>
