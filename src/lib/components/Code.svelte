<script lang="ts">
	let copied = false;

	function copyToClipboard(event: MouseEvent) {
		// @ts-ignore
		const target = event.target?.innerText.split('\n')[0];
		navigator.clipboard.writeText(target);

		// select the double clicked node
		let sel = document.getSelection();
		let range = new Range();
		range.selectNode(event.target?.firstChild);
		sel?.removeAllRanges();
		sel?.addRange(range);
		if (!copied) {
			copied = true;

			setTimeout(() => (copied = false), 3000);
		}
	}
</script>

<code on:dblclick={copyToClipboard}>
	<span class="text">
		<slot />
	</span>
	<div class:copied class="copyWrapper">
		{#if copied}
			Copied
		{:else}
			Double click to copy
		{/if}
	</div>
</code>

<style>
	.copied {
		background-color: yellowgreen !important;
		min-width: 3rem !important;
	}

	.copyWrapper {
		background-color: var(--special-color);
		margin-bottom: 0.2rem;
		padding: 0.2rem;
		border-radius: 3px;
		position: absolute;
		min-width: 10rem;
		visibility: hidden;
		z-index: 1;
		bottom: 100%;
		left: 0;
		margin-left: 0px;
	}
	code:hover .copyWrapper {
		visibility: visible;
	}
	code {
		position: relative;
		display: inline-block;
		background-color: var(--light-color);
		border-radius: 5px;
		box-shadow: 0 0 5px var(--shadow-color);
		padding: 2px;
		border: 1px solid var(--border-color);
		line-break: anywhere;
	}
	:global([data-nu-scheme-is='dark'] body code:not([class*='language-'])) {
		color: var(--bg-color);
	}
	:global(pre[class*='language-']) {
		margin: 0.5em 1rem !important;
	}
	:global(code[class*='language-'], pre[class*='language-']) {
		font-size: 0.9rem;
	}
</style>
