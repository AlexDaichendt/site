<script lang="ts">
	import SEO from '$components/SEO.svelte';
	import Link from '$components/Link.svelte';
	import ListItem from '$components/ListItem.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: posts = data.posts;
</script>

<SEO />

<h1>Blog Posts</h1>

<p>Sometimes I document some of the things I do.</p>

<ul>
	{#each posts as post}
		<ListItem>
			<Link href={post.href}
				>{new Date(post.created).toLocaleDateString('en-GB')} - {post.title}</Link
			>
		</ListItem>
	{/each}
</ul>
