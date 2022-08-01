<script lang="ts">
	let kittyLink: string;
	let importing = false;
	let showSuccess = false;

	function beamKitty() {
		importing = true;

		fetch(`https://cats.daichendt.one/import?key=${kittyLink}`, {
			method: 'PUT',
			headers: { 'X-Custom-Auth-Key': import.meta.env.VITE_CATAPI_PASSWD },
		}).then((result) => {
			if (result.status === 200) {
				kittyLink = '';
				importing = false;
				showSuccess = true;
				setTimeout(() => (showSuccess = false), 5000);
			}
		});
	}
</script>

<h1>Administration Area</h1>
<h2>Add a cat</h2>
<input type="text" placeholder="cat me up" bind:value={kittyLink} />
<button type="button" on:click={beamKitty} disabled={importing}> Send </button>

{#if showSuccess}
	<span class="success">Successfully beamed up the kitty!</span>
{/if}

<style>
	.success {
		color: greenyellow;
	}
</style>
