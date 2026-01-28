<script lang="ts">
	import { fly } from "svelte/transition";
	import HeroButton from "./HeroButton.svelte";
	import type { Snippet } from "svelte";

	export interface Props {
		backgroundImage: string;
		backgroundAlt: string;
		backgroundStyles?: string;
		backgroundClasses?: string;

		subtitle: string;
		title: string;
		description: string;
		children?: Snippet;
	}

	const {
		backgroundImage,
		backgroundAlt,
		backgroundStyles = "",
		backgroundClasses = "",
		subtitle,
		title,
		description,
		children,
	}: Props = $props();
</script>

<section class="h-screen text-ssis-white" id="10951-hero">
	<img
		src={backgroundImage}
		alt={backgroundAlt}
		style={backgroundStyles}
		class={`frc10951-hero-bg h-screen w-screen fixed left-0 top-0 -z-50 object-cover bg-center ${backgroundClasses}`}
		loading="eager"
		fetchpriority="high"
		decoding="async"
	/>
	<div
		class="h-full max-w-content box-border p-8 mt-52 mb-32 flex flex-col gap-4 justify-center items-start text-left max-md:text-center max-md:items-center mx-auto text-xl"
	>
		<p class="opacity-60" transition:fly={{ y: 30, duration: 1000, delay: 400 }}>{subtitle}</p>
		<p class="text-6xl font-black" transition:fly={{ y: 30, duration: 1000, delay: 400 }}>{title}</p>
		<p class="max-w-lead text-2xl text-balance" transition:fly={{ y: 20, duration: 1000, delay: 600 }}>
			{description}
		</p>
		{@render children?.()}
	</div>
</section>
