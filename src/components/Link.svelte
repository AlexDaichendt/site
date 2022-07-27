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

	// external props
	let props: Record<string,string|boolean> = {
			rel: "nofollow noreferrer noopener",
			target: "_blank"
		}
	if(internal) {
		// internal props
		props = {
			"sveltekit:prefetch": true
		}
	}
</script>

<a   
    {...$$props}
	{...props}
	{href}
	on:mouseover={() => (spin = true)}
	on:focus={() => (spin = true)}
	on:mouseleave={() => (spin = false)}
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
		color: var(--outline-color);
	}
	.text {
		text-decoration: underline;
	}
</style>
