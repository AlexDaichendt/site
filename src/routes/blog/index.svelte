<script context="module" lang="ts">
	import type { LoadEvent, LoadOutput } from '@sveltejs/kit';

	export async function load({ fetch }: LoadEvent): LoadOutput {
		const response = await fetch(`/blog/posts.json`);
		const asJson = await response.json();

		return {
			status: response.status,
			props: {
				posts: response.ok && asJson.posts,
			},
			stuff: {
				title: 'Blog',
				description:
					'My blogposts, where I occasionally document things, that I think are not accessible or badly documented.',
			},
		};
	}
</script>

<script lang="ts">
	import type { BlogPostMeta } from '../../types';
	import Link from '$components/Link.svelte';
	import ListItem from '$components/ListItem.svelte';

	export let posts: BlogPostMeta[];
</script>

<h1>Blog Posts</h1>

<p>Sometimes I document some of the things I do.</p>

<ul>
	{#each posts as post}
		<ListItem>
			<Link href={post.href}>{post.date} - {post.title}</Link>
		</ListItem>
	{/each}
</ul>
