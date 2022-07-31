<script lang="ts">
	import { mdiLinkVariant } from '@mdi/js';
	import { mdiChevronRight } from '@mdi/js';
	import Icon from 'mdi-svelte';
	export let href: string;
	export let disableIcon = false;
	export let disablePrefetch = false;
	// svelte-ignore unused-export-let
	export let rel = '';

	const internal = !href.startsWith('http');

	// external props
	let props: Record<string,string|boolean> = {
			rel: "nofollow noreferrer noopener",
			target: "_blank"
		}
	if (internal) {
		// internal props
		if (!disablePrefetch ){
			props = {
				"sveltekit:prefetch": true
			}
		}
	}
</script>

<a   
    {...$$props}
	{...props}
	{href}
>
	{#if !disableIcon && !internal}
		<Icon path={internal ? mdiChevronRight : mdiLinkVariant} size="1rem"  />
	{/if}
	<span class="text"><slot /></span>
</a><style>
	a {
		color: var(--special-color);
		text-decoration: none;
		font-weight: 550;
	}
	a:hover {
		background-color: var(--outline-color);
		color: var(--dark-color)
	}
	.text {
		text-decoration: underline;
		word-wrap: break-word;

	}
</style>
