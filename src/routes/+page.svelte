<script lang="ts">
	import { goto } from '$app/navigation';
	import toast from 'svelte-french-toast';
	import { auth, db } from '$lib/firebaseConfig';
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import { doc, setDoc } from 'firebase/firestore';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight } from 'lucide-svelte';

	const provider = new GoogleAuthProvider();

	async function signInWithGoogle() {
		try {
			console.log('start signIn');
			const { user } = await signInWithPopup(auth, provider);
			console.log('start signIn and get user', user);
			const idToken = await user.getIdToken();
			const response = await fetch('/', {
				method: 'POST',
				body: JSON.stringify(idToken),
				headers: {
					'content-Type': 'application/json'
				}
			});
			console.log('response from signIn', response);

			if (!response.ok) {
				console.log('response not ok with signIn');
				const errorResponse = await response.json();
				toast.error(errorResponse.message);
			}

			await setDoc(doc(db, 'users', user.uid), {
				name: user.displayName,
				email: user.email,
				profilePic: user.photoURL,
				uid: user.uid
			});

			console.log('response ok with signIn');
			toast.success('Successfully, redirecting ...');
			goto('/dashboard');
		} catch (err) {
			console.log('catch error with signIn');
			const errorMassage = (err as Error).message;
			toast.error(errorMassage);
		}
		console.log('finally signIn');
	}
</script>

<div class="bg-[#1e1919]">
	<div class="pt=[72px] mx-auto max-w-[777px] text-center text-white">
		<h1 class="mb:text-6xl text-3xl">securely collaborate on your projects from anywhere</h1>
		<p class="mb:text-lg mt-5 text-sm">
			SvelteKitBox Spaces brings your files and cloud content together, so that your PowerPoints can
			live next to your Google Docs, Trello boards, and whatever your team wants to use.
		</p>
		<Button on:click={signInWithGoogle} class="mt-10 p-6 font-semibold capitalize text-black"
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
