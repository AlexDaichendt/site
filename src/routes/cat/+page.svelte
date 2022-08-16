<script lang="ts">
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import Image from '$lib/components/CatImage.svelte';
	import type { ImageMetadata } from '$lib/utils/types';
	import Link from '$lib/components/Link.svelte';

	export let cats: { images: ImageMetadata[] }[];
</script>

<section class="masonry">
	{#each cats as cat}
		<figure>
			<Link
				href={`https://cats.daichendt.one/${cat.images[cat.images.length - 1].href}`}
				disableIcon
				disablePrefetch
			>
				<Image
					metadata={cat.images}
					sizes="(max-width: 720px) 1px, (max-width: 1280px) 360px, 720px"
				/>
			</Link>
		</figure>
	{/each}
</section>

<style>
	.masonry {
		column-count: 3;
		column-gap: 1em;
	}

	/* Masonry on medium-sized screens */
	@media only screen and (max-width: 800px) and (min-width: 500px) {
		.masonry {
			column-count: 2;
		}
	}

	/* Masonry on small screens */
	@media only screen and (max-width: 500px) and (min-width: 0px) {
		.masonry {
			column-count: 1;
		}
	}

	figure {
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
		margin: 0;
		background-color: #eee;
		display: inline-block;
		margin: 0 0 1em;
		width: 100%;
	}
	figure:hover {
		filter: brightness(90%);
	}
</style>
