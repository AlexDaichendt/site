<script lang="ts">
	import type { ImageMetadata } from '$lib/utils/types';
	export let metadata: ImageMetadata[];
	export let sizes: string;

	const fallback = metadata[metadata.length - 1];
	const _metadata = metadata.slice(0, metadata.length - 1);

	const srcset = _metadata
		.map(({ href, width }) => `https://cats.daichendt.one/${href} ${width}w`)
		.join(',');
</script>

{#if !fallback && !metadata}
	No metadata supplied
{:else}
	<img {srcset} class="image" alt="A cute kitty" {sizes} loading="lazy" />
{/if}

<style>
	.image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
</style>
