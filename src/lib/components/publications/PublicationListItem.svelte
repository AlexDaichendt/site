<script lang="ts">
	export let title: string;
	export let authors: string[];
	export let conference: string;
	export let pdf: string;
</script>

<li>
	<a class="main" href={pdf}>
		<span>
			{#each authors as author, i}
				{#if i != authors.length && i != 0}
					,
				{/if}
				{#if author == 'Alexander Daichendt'}
					<b>{author}</b>
				{:else}
					{author}
				{/if}
			{/each}
		</span>

		{title}

		{conference}
	</a>
</li>

<style>
	.main {
		display: flex;
		flex-direction: column;
	}

	a {
		text-decoration: none;
		color: inherit;
		margin-bottom: 8px;
	}
</style>
