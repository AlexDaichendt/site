<script context="module" lang="ts">
	import type { LoadEvent, LoadOutput } from '@sveltejs/kit';

	export async function load({ fetch }: LoadEvent): LoadOutput {
		const response = await fetch('https://cats.daichendt.one/list');
		const asJson = await response.json();

		return {
			status: response.status,
			props: {
				cats: response.ok && asJson,
			},
		};
	}
</script>

<script lang="ts">
	export let cats: Record<string, string>[];
</script>

{#each cats as cat}
	<img src={`https://cats.daichendt.one/${cat.key}`} alt="cat" />
{/each}

<style>
	img {
		width: 50%;
	}
</style>
