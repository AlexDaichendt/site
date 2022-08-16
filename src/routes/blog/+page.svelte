<script lang="ts">
	import type { BlogPostMeta } from '$lib/utils/types';
	import Link from '$components/Link.svelte';
	import ListItem from '$components/ListItem.svelte';

	export let data;
	const posts: BlogPostMeta[] = data.posts;
</script>

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
