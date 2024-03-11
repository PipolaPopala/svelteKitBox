<script lang='ts'>
	import { ModeWatcher } from "mode-watcher";
	import { Toaster } from 'svelte-french-toast';
	import Header from '$lib/components/Header.svelte';
	import '../app.pcss';
</script>

<ModeWatcher />
<Header />
<Toaster />
<slot />
