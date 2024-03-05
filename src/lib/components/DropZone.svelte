<script lang="ts">
	import { cn } from '$lib/utils';

	let isDragging = false;
	let fileInput: HTMLInputElement;
	let maxSize = 1024 * 1024 * 10;
	function handleClick() {
		fileInput.click();
	}
	function handleDragEnter() {
		isDragging = true;
	}
	function handleDragLeave() {
		isDragging = false;
	}
	function handleDrop(event: DragEvent) {
		isDragging = false;
		if (event.dataTransfer?.files) {
			const dropedFiles = Array.from(event.dataTransfer.files);
		}
	}
	function handleFileSelect(event: Event) {
		if (fileInput.files) {
			const selectedFiles = Array.from(fileInput.files);
		}
	}
	function checkFileSizeAndUpload(files: File[]) {
		const allFilesValid = files.every((file) => {
			if (file.size > maxSize) {
				alert(`Error ${file.name} size is too large (it exeeds ${maxSize / 1024 / 1024} MB)`);
				return true;
			}
			return false;
		});
		if (allFilesValid) {
		}
	}
	function handleUploads(files: File[]) {}
</script>

<button
	class={cn('h-44 w-full rounded-lg border-4 border-dashed bg-border/50',
	{
		' bg-primary/50 border-primary': isDragging
	})}
	on:click={handleClick}
	on:dragenter|preventDefault={handleDragEnter}
	on:dragleave|preventDefault={handleDragLeave}
	on:drop|preventDefault={handleDrop}
	on:dragover|preventDefault
>
	{#if isDragging}
		drop the file(s) here
	{:else}
		drag and drop a file hear or click to add files
	{/if}
	<input on:change={handleFileSelect} type="file" bind:this={fileInput} hidden multiple />
</button>
