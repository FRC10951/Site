<script lang="ts">
	import { fly } from 'svelte/transition';
	import HeroButton from './HeroButton.svelte';
	import { GITHUB_ORG_URL, INSTAGRAM_URL } from '$lib/constants';
</script>

<section class="min-h-70">
	<img
		src="/homepage-images/hero.webp"
		alt="Team 10951 Hero"
		class="h-screen w-screen fixed left-0 top-0 -z-10 object-cover brightness-[35%] bg-center"
		loading="eager"
		fetchpriority="high"
		decoding="async"
		width="1920"
		height="1080"
	/>
	<div
		class="h-full max-w-[1200px] box-border p-8 pt-96 pb-24 flex flex-col gap-4 justify-center items-start text-left max-md:text-center max-md:items-center mx-auto text-xl *:!text-white"
	>
		<p class="opacity-70" transition:fly={{ y: 30, duration: 1000, delay: 400 }}>
			Mission Statement
		</p>
		<p class="text-5xl font-black" transition:fly={{ y: 30, duration: 1000, delay: 400 }}>
			Purposeful Global Citizens
		</p>
		<p class="max-w-30 text-xl text-balance" transition:fly={{ y: 20, duration: 1000, delay: 600 }}>
			Creating a student-led STEM hub that promotes innovation, outreach, and collaboration across
			Vietnam and the global FIRST community.
		</p>
		<nav class="flex gap-4">
			<HeroButton href={INSTAGRAM_URL} variant="primary">Instagram</HeroButton>
			<HeroButton href={GITHUB_ORG_URL} variant="minimal">GitHub</HeroButton>
		</nav>
	</div>
</section>
