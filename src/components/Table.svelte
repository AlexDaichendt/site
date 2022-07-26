<script>
</script>

<table id="table">
	<slot />
</table>

<style>
	table {
		background-color: var(--light-color);
		border-radius: 1rem;
		padding: 1rem;
		box-shadow: 0px 0px 2px var(--shadow-color);
		border: 1px solid var(--outline-color);
	}
	:global(#table tbody tr) {
		margin: 1rem;
	}
</style>
