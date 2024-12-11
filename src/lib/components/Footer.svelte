<script context="module">
	const year = new Date().getFullYear();
</script>

<script>
	import Icon from '@iconify/svelte';
	import Link from './Link.svelte';
</script>

<footer class="mt-16 p-8">
	<!-- container class inherited from __layout-->
	<div class="container">
		<p class="flex items-center gap-1">
			Copyright <Icon icon="material-symbols:copyright" class="inline-block" />
			{year} Alexander Daichendt
		</p>

		<div class="flex md:justify-between md:flex-row flex-col gap-1">
			<Link href="/cat">Meeeeeow</Link>
			<Link href="/privacy">Privacy Policy</Link>
			<Link href="/impressum">Impressum</Link>
			<Link href="https://github.com/AlexDaichendt/site">Source</Link>
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: var(--special-bg-color);
	}
	@media screen and (max-width: 500px) {
		.footerLinks {
			flex-direction: column;
		}
	}
	:global(footer div a) {
		color: var(--text-soft-color) !important;
	}
	:global(footer div a:hover) {
		color: var(--light-color) !important;
	}
</style>
