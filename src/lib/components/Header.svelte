<script lang="ts">
	import Logo from './Logo.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
  import { Button } from "$lib/components/ui/button";
	import ToggleMode from './ToggleMode.svelte';
</script>

<header class="flex items-center justify-between bg-background sticky top-0 left-0">
	<Logo />
	<div class="flex items-center gap-5">
		<ToggleMode />
		<Avatar.Root>
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
    <Button variant="ghost">Sign out</Button>
	</div>
</header>
