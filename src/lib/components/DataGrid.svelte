<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import type { TFile } from '../types';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Trash } from 'lucide-svelte';
	import prettyBytes from 'pretty-bytes';
	import { renameModalStore } from '$lib/stores/modalStore';
	import RenameModal from './modal/RenameModal.svelte';
	import { idStore } from '$lib/stores/idStore';
	export let files: TFile[];
	export let count: number;
	function getFileType(mine: string) {
		'image/png';
		const type = mine.split('/'[1]);
		return type;
	}
</script>

<div class="round-mb my-10 border shadow-md">
	<h1 class="py-5 pl-5 font-medium capitalize">files({count})</h1>
	{#if files.length === 0}
		<div class="flex h-[200px] items-center justify-center">
			<p class="text-gray-400">No files uploaded yet</p>
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
				{#each files as { downloadUrl, fileName, size, timestamp, type, id }}
					<Table.Row>
						<Table.Cell class="font-medium">{getFileType(type)}</Table.Cell>
						<Table.Cell>
							<Button
								variant="link"
								on:click={() => {
									idStore.set(id);
									renameModalStore.setTrue();
								}}>{fileName}</Button
							>
						</Table.Cell>
						<Table.Cell>{prettyBytes(size)}</Table.Cell>
						<Table.Cell>{timestamp.toDateString()}</Table.Cell>
						<Table.Cell>
							<Button download target="_blank" variant="link" href={downloadUrl}>download</Button>
						</Table.Cell>
						<Table.Cell>
							<Button size="icon" variant="outline"><Trash /></Button>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	{/if}
</div>

<RenameModal />
