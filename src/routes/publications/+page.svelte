<script lang="ts">
	import Seo from '$components/SEO.svelte';
	import PublicationListItem from '$components/publications/PublicationListItem.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: publications = data.publications;
</script>

<Seo />

<h1>Publications</h1>

<h2>Conference papers</h2>
<ul>
	{#each publications as publication}
		<PublicationListItem
			title={publication.title}
			authors={publication.authors}
			pdf={publication.pdf}
			conference={publication.conference}
		/>
	{/each}
</ul>
