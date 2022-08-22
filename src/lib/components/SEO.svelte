<script lang="ts">
	import { page } from '$app/stores';

	export let title = "Alex Daichendt's website";
	export let keywords: string[] = [];
	export let description: string;
	let seo = $page.data?.seo;

	if (seo) {
		title = seo.title ? `${seo.title} - Alex Daichendt` : "Alex Daichendt's website";
		description = seo.description;
		keywords = seo.keywords;
	}
</script>

<svelte:head
	><title>{title}</title>
	{#if description}
		<meta name="description" content={description} />
	{/if}
	<meta name="author" content="Alexander Daichendt" />
	{#if keywords}
		<meta name="keywords" content={keywords.join(',')} />
	{/if}
</svelte:head>
