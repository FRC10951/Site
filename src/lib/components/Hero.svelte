<script lang="ts">
	import { fly } from 'svelte/transition';
	import LinkButton from './LinkButton.svelte';
	import { INSTAGRAM_URL } from '$lib/constants';
</script>

<section class="h-screen">
	<img
		src="/homepage-images/hero.webp"
		alt="Team 10951 Hero"
		class="h-screen fixed left-0 top-0 -z-10 object-cover brightness-[35%]"
		loading="eager"
		fetchpriority="high"
		decoding="async"
		width="1920"
		height="1080"
	/>
	<div
		class="h-full gap-4 flex flex-col items-center justify-center text-center text-xl *:!text-white"
	>
		<h1
			class="text-[10rem] leading-[0.67] font-mono font-bold"
			transition:fly={{ y: 50, duration: 1000, delay: 200 }}
		>
			10951
		</h1>
		<h2 class="opacity-70" transition:fly={{ y: 30, duration: 1000, delay: 400 }}>
			Saigon South Dragons
		</h2>
		<p class="max-w-30 text-xl text-balance" transition:fly={{ y: 20, duration: 1000, delay: 600 }}>
			Saigon South International School's flagship<br />FIRST Robotics Competition team, debutting
			for FIRST Rebuilt.
		</p>
		<nav>
			<LinkButton href={INSTAGRAM_URL}>Instagram</LinkButton>
		</nav>
		<!-- TODO newsletter here or link to insta,d ecide when i get home -->
		<p class="opacity-70" transition:fly={{ y: 20, duration: 1000, delay: 800 }}>
			Scroll down for more information
		</p>
	</div>
</section>
