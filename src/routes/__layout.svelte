<script context="module">
	const year = new Date().getFullYear();
</script>

<script>
	import ThemeSwitcher from '../components/ThemeSwitcher.svelte';
	import { page } from '$app/stores';
	import { mdiCopyright } from '@mdi/js';
	import Icon from 'mdi-svelte';
	import '@fontsource/ubuntu-mono/400.css';
	import Link from '../components/Link.svelte';
	import MoveUpButton from '../components/MoveUpButton.svelte';

	const NAV_ITEMS = [
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' },
	];
</script>

<svelte:head
	><title>{$page.stuff.title} - AlexDaichendt</title>
	<meta name="description" content={$page.stuff.description} />
	<meta name="author" content="Alexander Daichendt" />
</svelte:head>

<div class="container upper">
	<header>
		<div class="header">
			<a href="/">
				<h1>Alex Daichendt</h1>
			</a>

			<ThemeSwitcher />
		</div>
		<nav>
			<ol>
				{#each NAV_ITEMS as navItem}
					<li class="navItem {$page.url.pathname.includes(navItem.href) ? 'active' : ''}">
						<a href={navItem.href}>{navItem.label}</a>
					</li>
				{/each}
			</ol>
		</nav>
	</header>

	<div class="content">
		<slot />
	</div>
</div>
<MoveUpButton />
<footer>
	<div class="container">
		<p>Copyright <Icon path={mdiCopyright} size="1rem" /> {year} Alexander Daichendt</p>

		<Link href="/privacy">Privacy Policy</Link>
		<Link href="/impressum">Impressum</Link>
	</div>
</footer>

<style>
	@import 'normalize.css';
	@import 'sanitize.css';
	.upper {
		min-height: calc(100vh - 4rem - 8px);
	}
	.content {
		max-width: 60rem;
		margin: 0 auto;
	}
	header {
		margin-bottom: 3rem;
	}
	.active {
		font-weight: 600;
	}
	a {
		text-decoration: none;
		color: inherit;
		font-size: 1.2rem;
		position: relative;
	}
	ol {
		list-style-type: none;
	}
	.navItem {
		display: inline;
	}
	.navItem:not(:last-child)::after {
		content: '·';
		margin-right: 0.5rem;
	}

	.navItem a:hover {
		color: var(--text-strong-color);
	}
	.navItem a:after {
		content: '';
		position: absolute;
		bottom: -2px;
		right: 50%;
		width: 0%;
		border-bottom: 3px solid var(--outline-color);
		transition: 0.3s;
	}
	.navItem a:before {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 50%;
		width: 0%;
		border-bottom: 3px solid var(--outline-color);
		transition: 0.3s;
	}
	.navItem a:hover:after {
		width: 50%;
	}
	.navItem a:hover:before {
		width: 50%;
	}

	.container {
		max-width: 70rem;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}
	.header h1 {
		margin: 0;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		color: var(--special-color);
	}

	footer {
		background-color: var(--special-bg-color);
		padding: 2rem;
		margin-top: 4rem;
	}
	:global(footer div a) {
		color: var(--text-soft-color) !important;
	}
	:global(footer div a:hover) {
		color: var(--light-color) !important;
	}
	:global(body) {
		background-color: var(--subtle-color);
		color: var(--text-color);
		transition: background-color 0.3s ease-in;
		font-family: 'Ubuntu Mono', monospace;
		overflow-y: scroll;
		margin: 0;
		margin-top: 8px;
	}

	:global([data-nu-scheme-is='light'][data-nu-contrast-is='no-preference'] body) {
		--bg-color: rgba(255, 255, 255, 1);
		--text-color: rgba(44, 50, 32, 1);
		--text-soft-color: rgba(71, 76, 63, 1);
		--text-strong-color: rgba(74, 74, 74, 1);
		--subtle-color: rgba(248, 250, 245, 1);
		--border-color: rgba(225, 234, 210, 1);
		--shadow-color: rgba(181, 197, 148, 1);
		--input-color: rgba(255, 255, 255, 1);
		--outline-color: rgba(249, 201, 163, 1);
		--mark-color: rgba(224, 146, 38, 0.08);
		--special-color: rgba(224, 146, 38, 1);
		--special-bg-color: rgba(229, 149, 39, 1);
		--special-text-color: rgba(255, 255, 255, 1);
		--special-shadow-color: rgba(149, 112, 81, 1);
		--special-mark-color: rgba(255, 255, 255, 0.08);
		--light-color: rgba(254, 241, 233, 1);
		--dark-color: rgba(89, 66, 46, 1);
		--text-color-rgb: 44, 50, 32;
		--bg-color-rgb: 255, 255, 255;
		--subtle-color-rgb: 248, 250, 245;
		--special-color-rgb: 224, 146, 38;
		--special-text-color-rgb: 255, 255, 255;
		--special-bg-color-rgb: 229, 149, 39;
		--shadow-color-rgb: 181, 197, 148;
		--special-shadow-color-rgb: 149, 112, 81;
		--outline-color-rgb: 249, 201, 163;
		--dark-color-rgb: 89, 66, 46;
		--light-color-rgb: 254, 241, 233;
	}

	:global(html[data-nu-scheme-is='dark'][data-nu-contrast-is='no-preference'] body) {
		--bg-color: rgba(32, 32, 32, 1);
		--text-color: rgba(216, 227, 196, 1);
		--text-soft-color: rgba(184, 189, 176, 1);
		--text-strong-color: rgba(187, 187, 187, 1);
		--subtle-color: rgba(34, 37, 28, 1);
		--border-color: rgba(44, 51, 27, 1);
		--shadow-color: rgba(0, 0, 0, 1);
		--input-color: rgba(28, 28, 28, 1);
		--outline-color: rgba(217, 151, 82, 1);
		--mark-color: rgba(170, 113, 47, 0.08);
		--special-color: rgba(170, 113, 47, 1);
		--special-bg-color: rgba(151, 100, 40, 1);
		--special-text-color: rgba(230, 221, 216, 1);
		--special-shadow-color: rgba(58, 41, 28, 1);
		--special-mark-color: rgba(230, 221, 216, 0.08);
		--light-color: rgba(249, 203, 168, 1);
		--dark-color: rgba(68, 49, 32, 1);
		--text-color-rgb: 216, 227, 196;
		--bg-color-rgb: 32, 32, 32;
		--subtle-color-rgb: 34, 37, 28;
		--special-color-rgb: 170, 113, 47;
		--special-text-color-rgb: 230, 221, 216;
		--special-bg-color-rgb: 151, 100, 40;
		--shadow-color-rgb: 0, 0, 0;
		--special-shadow-color-rgb: 58, 41, 28;
		--outline-color-rgb: 217, 151, 82;
		--dark-color-rgb: 68, 49, 32;
		--light-color-rgb: 249, 203, 168;
	}

	:global(html[data-nu-scheme-is='light'][data-nu-contrast-is='more'] body) {
		--bg-color: rgba(255, 255, 255, 1);
		--text-color: rgba(29, 34, 20, 1);
		--text-soft-color: rgba(31, 33, 26, 1);
		--text-strong-color: rgba(74, 74, 74, 1);
		--subtle-color: rgba(248, 250, 245, 1);
		--border-color: rgba(173, 186, 149, 1);
		--shadow-color: rgba(147, 162, 117, 1);
		--input-color: rgba(255, 255, 255, 1);
		--outline-color: rgba(248, 179, 114, 1);
		--mark-color: rgba(181, 117, 28, 0.16);
		--special-color: rgba(181, 117, 28, 1);
		--special-bg-color: rgba(186, 120, 29, 1);
		--special-text-color: rgba(255, 255, 255, 1);
		--special-shadow-color: rgba(85, 63, 44, 1);
		--special-mark-color: rgba(255, 255, 255, 0.16);
		--light-color: rgba(254, 241, 233, 1);
		--dark-color: rgba(89, 66, 46, 1);
		--text-color-rgb: 29, 34, 20;
		--bg-color-rgb: 255, 255, 255;
		--subtle-color-rgb: 248, 250, 245;
		--special-color-rgb: 181, 117, 28;
		--special-text-color-rgb: 255, 255, 255;
		--special-bg-color-rgb: 186, 120, 29;
		--shadow-color-rgb: 147, 162, 117;
		--special-shadow-color-rgb: 85, 63, 44;
		--outline-color-rgb: 248, 179, 114;
		--dark-color-rgb: 89, 66, 46;
		--light-color-rgb: 254, 241, 233;
	}

	:global(html[data-nu-scheme-is='dark'][data-nu-contrast-is='more'] body) {
		--bg-color: rgba(32, 32, 32, 1);
		--text-color: rgba(233, 243, 215, 1);
		--text-soft-color: rgba(236, 241, 227, 1);
		--text-strong-color: rgba(187, 187, 187, 1);
		--subtle-color: rgba(34, 37, 28, 1);
		--border-color: rgba(77, 83, 66, 1);
		--shadow-color: rgba(0, 0, 0, 1);
		--input-color: rgba(28, 28, 28, 1);
		--outline-color: rgba(226, 157, 85, 1);
		--mark-color: rgba(188, 126, 53, 0.16);
		--special-color: rgba(188, 126, 53, 1);
		--special-bg-color: rgba(148, 98, 39, 1);
		--special-text-color: rgba(243, 238, 236, 1);
		--special-shadow-color: rgba(0, 0, 0, 1);
		--special-mark-color: rgba(243, 238, 236, 0.16);
		--light-color: rgba(251, 223, 203, 1);
		--dark-color: rgba(68, 49, 32, 1);
		--text-color-rgb: 233, 243, 215;
		--bg-color-rgb: 32, 32, 32;
		--subtle-color-rgb: 34, 37, 28;
		--special-color-rgb: 188, 126, 53;
		--special-text-color-rgb: 243, 238, 236;
		--special-bg-color-rgb: 148, 98, 39;
		--shadow-color-rgb: 0, 0, 0;
		--special-shadow-color-rgb: 0, 0, 0;
		--outline-color-rgb: 226, 157, 85;
		--dark-color-rgb: 68, 49, 32;
		--light-color-rgb: 251, 223, 203;
	}
</style>
