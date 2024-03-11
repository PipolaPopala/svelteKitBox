<script lang="ts">
	import DataGrid from '$lib/components/DataGrid.svelte';
	import DropZone from '$lib/components/DropZone.svelte';
	export let data;
	$: user = data?.user;
</script>

{#await user}
	<p>Loading...</p>
{:then userData}
	<div>
		{userData.name}
	</div>
	<div class="mx-auto max-w-5xl">
		<DropZone />
		<DataGrid />
	</div>
{:catch err}
	<p>Error: {err.message}</p>
{/await}
