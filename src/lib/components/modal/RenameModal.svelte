<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { renameModalStore } from '$lib/stores/modalStore';
	import { enhance } from '$app/forms';
	import { idStore } from '$lib/stores/idStore';
	import { Loader2 } from 'lucide-svelte';
	import { page } from '$app/stores';
	import toast from 'svelte-french-toast';
	let loading = false;
	$: {
		if ($page.form?.editFileNameSuccess) {
			toast.success($page.form?.editFileNameSuccess);
			renameModalStore.setFalse();
		}
	}
	$: {
		if ($page.form?.editFileNameError) {
			toast.error($page.form?.editFileNameError);
		}
	}
</script>

<Dialog.Root open={$renameModalStore} onOpenChange={renameModalStore.setFalse}>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Edit file name</Dialog.Title>
		</Dialog.Header>
		<form
			method="POST"
			use:enhance={() => {
				loading = true;
				return async ({ update }) => {
					await update();
					loading = false;
				};
			}}
			action="/dashboard?/editFileName"
			class="space-y-4"
		>
			<div>
				<p class="py-5">Name</p>
				<Input name="fileName" />
				<input type="text" value={$idStore} name="id" hidden />
			</div>
			<Dialog.Footer>
				<Button type="submit">
					{#if loading}
						<Loader2 class="animate-spin" />
					{:else}
						save changes
					{/if}
				</Button>
			</Dialog.Footer>
		</form>
	</Dialog.Content>
</Dialog.Root>
