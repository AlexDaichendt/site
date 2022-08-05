<script context="module">
	const year = new Date().getFullYear();
</script>

<script>
	import { mdiCopyright } from '@mdi/js';

	import Icon from 'mdi-svelte';
	import Link from './Link.svelte';
</script>

<footer>
	<!-- container class inherited from __layout-->
	<div class="container">
		<p>Copyright <Icon path={mdiCopyright} size="1rem" /> {year} Alexander Daichendt</p>

		<div class="footerLinks">
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
		padding: 2rem;
		margin-top: 4rem;
	}
	@media screen and (max-width: 500px) {
		.footerLinks {
			flex-direction: column;
		}
	}
	.footerLinks {
		display: flex;
		justify-content: space-between;
	}
	:global(footer div a) {
		color: var(--text-soft-color) !important;
	}
	:global(footer div a:hover) {
		color: var(--light-color) !important;
	}
</style>
