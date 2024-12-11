<script lang="ts">
	import MoveUpButton from '$components/MoveUpButton.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '@fontsource/ubuntu-mono/400.css';
	import '../app.css';
</script>

<div class="container upper">
	<Header />
	<main>
		<slot />
	</main>
</div>
<MoveUpButton />
<Footer />

<style>
	.upper {
		min-height: calc(100vh - 4rem - 8px);
	}

	:global(.container) {
		max-width: 50rem;
		margin: 0 auto;
		padding: 0 1rem;
		overflow-x: hidden;
	}

	:global(body) {
		background-color: var(--subtle-color);
		color: var(--text-color);
		transition: background-color 0.3s ease-in;
		font-family: 'Ubuntu Mono', monospace;
		line-height: 1.4;
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
