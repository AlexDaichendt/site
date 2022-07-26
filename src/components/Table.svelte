<script>
</script>

<div tabindex="0">
	<table id="table">
		<slot />
	</table>
</div>

<style>
	div {
		border-radius: 0.5rem;
		padding: 1rem;
		box-shadow: 0px 0px 2px var(--shadow-color);
		border: 1px solid var(--outline-color);
		overflow: auto;
		background: linear-gradient(to right, white 30%, rgba(255, 255, 255, 0)),
			linear-gradient(to right, rgba(255, 255, 255, 0), white 70%) 0 100%,
			radial-gradient(farthest-side at 0% 50%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)),
			radial-gradient(farthest-side at 100% 50%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)) 0 100%;
		background-repeat: no-repeat;
		background-color: white;
		background-size: 40px 100%, 40px 100%, 14px 100%, 14px 100%;
		background-position: 0 0, 100%, 0 0, 100%;
		background-attachment: local, local, scroll, scroll;
	}

	table {
		border-collapse: collapse;
		width: 100%;
	}

	:global(#table thead th) {
		padding-bottom: 0.25rem;
		padding-left: 1rem;
		padding-right: 1rem;
		border: solid;
		width: 350px;
		margin: auto;
		border-top: none;
		border-left: none;
		border-right: none;
		border-bottom: none;
		background: linear-gradient(var(--special-color), var(--special-color)) bottom
			/* left or right or else */ no-repeat;
		background-size: 50% 2px;
	}

	:global(#table tbody tr) {
		border-bottom: 1px solid var(--outline-color);
	}

	:global(#table tbody tr:last-child) {
		border-bottom: none;
	}

	:global(#table tbody td) {
		padding: 0.5rem;
	}
</style>
