<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight } from 'lucide-svelte';
</script>

<div class="bg-[#1e1919]">
	<div class="pt=[72px] mx-auto max-w-[777px] text-center text-white">
		<h1 class="mb:text-6xl text-3xl">securely collaborate on your projects from anywhere</h1>
		<p class="mb:text-lg mt-5 text-sm">
			SvelteKitBox Spaces brings your files and cloud content together, so that your PowerPoints can
			live next to your Google Docs, Trello boards, and whatever your team wants to use.
		</p>
		<Button href="/dashboard" class="mt-10 p-6 font-semibold capitalize text-black"
			>Get Started Now <ArrowRight class="h-5 w-5" />
		</Button>
	</div>
	<video class="mt-10" autoplay playsinline loop muted>
    <track kind="captions" />
		<source
			src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4"
			type="video/mp4"
		/>
	</video>
</div>
