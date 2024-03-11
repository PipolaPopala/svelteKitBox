<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	let files = [1];
</script>

<div class="round-mb my-10 border shadow-md">
	<h1 class="py-5 pl-5 font-medium capitalize">files(5)</h1>
	{#if files.length === 0}
		<div class="flex items-center justify-center h-[200px]">
			<p class="text-gray-400">no files uploaded yet</p>
		</div>
	{:else}
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">type</Table.Head>
					<Table.Head>file name</Table.Head>
					<Table.Head>file size</Table.Head>
					<Table.Head>data added</Table.Head>
					<Table.Head>link</Table.Head>
					<Table.Head class="sr-only">delete</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each { length: 5 } as _}
					<Table.Row>
						<Table.Cell class="font-medium">{'invoice.invoice'}</Table.Cell>
						<Table.Cell>{'invoice.paymentStatus'}</Table.Cell>
						<Table.Cell>{'invoice.paymentMethod'}</Table.Cell>
						<Table.Cell class="text-right">{'invoice.totalAmount'}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	{/if}
</div>
