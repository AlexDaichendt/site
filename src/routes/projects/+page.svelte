<script lang="ts">
	import Link from '$components/Link.svelte';
	import ListItem from '$components/ListItem.svelte';
	import Seo from '$components/SEO.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: projects = data.projects;
</script>

<Seo />

<h1>Projects</h1>

<p>Detailed descriptions of my contributions to various projects.</p>
<ul>
	{#each projects as project}
		<ListItem>
			<Link href={project.href}>{project.title}</Link>
		</ListItem>
	{/each}
</ul>
