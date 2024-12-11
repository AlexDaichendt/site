<script lang="js">
	// @ts-nocheck
	import { onMount } from 'svelte';
	let checked = false;

	onMount(() => {
		const ROOT = document.querySelector(':root');
		const DARK = 'dark';
		const LIGHT = 'light';
		const HIGH = 'more';
		const LOW = 'no-preference';
		const SCHEMES = [DARK, LIGHT];
		const CONTRASTS = [HIGH, LOW];
		function observeContext(data) {
			if (data.find((record) => !record.attributeName.endsWith('-is'))) {
				setScheme();
				setContrast();
			}
		}
		const schemeMedia = matchMedia('(prefers-color-scheme: dark)');
		const contrastMedia = matchMedia('(prefers-contrast: more)');
		let globalScheme = schemeMedia.matches ? DARK : LIGHT;
		let globalContrast = contrastMedia.matches ? HIGH : LOW;
		schemeMedia.addListener((_media) => {
			globalScheme = _media.matches ? DARK : LIGHT;
			setScheme();
		});
		contrastMedia.addListener((_media) => {
			globalContrast = _media.matches ? HIGH : LOW;
			setContrast();
		});
		function setScheme() {
			const setting = ROOT.dataset.nuScheme;
			ROOT.dataset.nuSchemeIs =
				(setting !== 'auto' && SCHEMES.includes(setting) && setting) || globalScheme;
		}
		function setContrast() {
			const setting = ROOT.dataset.nuContrast;
			ROOT.dataset.nuContrastIs =
				(setting !== 'auto' && CONTRASTS.includes(setting) && setting) || globalContrast;
		}
		const observer = new MutationObserver((data) => observeContext(data));
		observer.observe(ROOT, {
			characterData: false,
			attributes: true,
			childList: false,
			subtree: false,
		});
		setScheme();
		// adjust the theme selector
		checked = globalScheme === DARK;

		setContrast();
		// Switch to dark scheme
		// ROOT.dataset.nuContrast = 'more';
		// Increase contrast
		// ROOT.dataset.nuScheme = 'dark';
	});

	function toggleTheme() {
		const root = document.querySelector(':root');
		const theme = root.dataset['nuSchemeIs'];

		if (theme === 'light') {
			root.dataset['nuScheme'] = 'dark';
		} else {
			root.dataset['nuScheme'] = 'light';
		}
	}
</script>

<label class="switch">
	<input aria-label="Nightmode" type="checkbox" bind:checked on:change={toggleTheme} />
	<span class="slider round"></span>
</label>

<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: lightskyblue;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: gold;
		transition: 0.4s;
		background: radial-gradient(yellow, orange 63%, transparent calc(63% + 3px) 100%);
	}

	input:checked + .slider {
		background-color: var(--special-mark-color);
	}
	input:checked + .slider:before {
		background-color: white;
		background: radial-gradient(circle at 19% 19%, transparent 41%, var(--outline-color) 43%);
	}

	input:focus + .slider {
		box-shadow: 0 0 5px var(--special-shadow-color);
	}

	input:checked + .slider:before {
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
