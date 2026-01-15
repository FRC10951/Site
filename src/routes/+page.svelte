<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Motto from '$lib/components/Motto.svelte';
	import { onMount } from 'svelte';
	import { createLazyComponentLoader } from '$lib/utils/componentLoader';
	import type { ComponentType } from 'svelte';

	let About: ComponentType | null = $state(null);
	let FirstAge: ComponentType | null = $state(null);
	let VexFeature: ComponentType | null = $state(null);
	let EmpowerTechCard: ComponentType | null = $state(null);
	let RobokidsCard: ComponentType | null = $state(null);
	let Events: ComponentType | null = $state(null);
	let CommunityProjects: ComponentType | null = $state(null);
	let CTA: ComponentType | null = $state(null);

	let aboutElement: HTMLElement | null = $state(null);
	let firstAgeElement: HTMLElement | null = $state(null);
	let vexFeatureElement: HTMLElement | null = $state(null);
	let empowerTechElement: HTMLElement | null = $state(null);
	let robokidsElement: HTMLElement | null = $state(null);
	let eventsElement: HTMLElement | null = $state(null);
	let communityProjectsElement: HTMLElement | null = $state(null);
	let ctaElement: HTMLElement | null = $state(null);

	onMount(() => {
		const cleanup: (() => void)[] = [];

		// Load components when they're about to be visible
		cleanup.push(
			createLazyComponentLoader(() => import('$lib/components/About.svelte')).load(
				aboutElement,
				(component) => {
					About = component;
				}
			)
		);

		cleanup.push(
			createLazyComponentLoader(() => import('$lib/components/FirstAge.svelte')).load(
				firstAgeElement,
				(component) => {
					FirstAge = component;
				}
			)
		);

		cleanup.push(
			createLazyComponentLoader(() => import('$lib/components/VexFeature.svelte')).load(
				vexFeatureElement,
				(component) => {
					VexFeature = component;
				}
			)
		);

		cleanup.push(
			createLazyComponentLoader(() => import('$lib/components/EmpowerTechCard.svelte')).load(
				empowerTechElement,
				(component) => {
					EmpowerTechCard = component;
				}
			)
		);

		cleanup.push(
			createLazyComponentLoader(() => import('$lib/components/RobokidsCard.svelte')).load(
				robokidsElement,
				(component) => {
					RobokidsCard = component;
				}
			)
		);

		cleanup.push(
			createLazyComponentLoader(() => import('$lib/components/Events.svelte')).load(
				eventsElement,
				(component) => {
					Events = component;
				}
			)
		);

		cleanup.push(
			createLazyComponentLoader(() => import('$lib/components/CommunityProjects.svelte')).load(
				communityProjectsElement,
				(component) => {
					CommunityProjects = component;
				}
			)
		);

		cleanup.push(
			createLazyComponentLoader(() => import('$lib/components/CTA.svelte')).load(
				ctaElement,
				(component) => {
					CTA = component;
				}
			)
		);

		return () => {
			cleanup.forEach((fn) => fn());
		};
	});
</script>

<Hero />

<main>
	<div bind:this={aboutElement}>
		{#if About}
			<About />
		{/if}
	</div>

	<div bind:this={firstAgeElement}>
		{#if FirstAge}
			<FirstAge />
		{/if}
	</div>

	<!-- STEM Community Section: Card-based layout -->
	<section class="stem-community" bind:this={vexFeatureElement}>
		<h2 class="stem-community-heading">STEM Community</h2>
		<div class="stem-community-content">
			<!-- Feature Cards Section: asymmetric grid -->
			<div class="features-grid">
				<div class="left">
					{#if VexFeature}
						<VexFeature />
					{/if}
				</div>
				<div class="right">
					<div class="quarter-top" bind:this={empowerTechElement}>
						{#if EmpowerTechCard}
							<EmpowerTechCard />
						{/if}
					</div>
					<div class="quarter-bottom" bind:this={robokidsElement}>
						{#if RobokidsCard}
							<RobokidsCard />
						{/if}
					</div>
				</div>
			</div>
		</div>
	</section>

	<div bind:this={communityProjectsElement}>
		{#if CommunityProjects}
			<CommunityProjects />
		{/if}
	</div>

	<div bind:this={eventsElement}>
		{#if Events}
			<Events />
		{/if}
	</div>

	<div bind:this={ctaElement}>
		{#if CTA}
			<CTA />
		{/if}
	</div>
</main>

<style>
	main {
		overflow-x: hidden;
		position: relative;
		background: gray;
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
		margin: 0;
		padding: 0;
		width: 100%;
	}

	:global(.dark) main {
		background: #161618;
	}

	.features-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 650px;
		background: transparent;
		gap: 1.5rem;
		margin: 0 auto 3rem;
		padding: 0;
		max-width: 95%;
		width: 100%;
		border: none;
		border-radius: 8px;
		overflow: visible;
	}

	.features-grid :global(section) {
		margin: 0 !important;
	}

	.left {
		grid-column: 1;
		margin: 0;
		padding: 0;
		border-radius: 8px;
		overflow: hidden;
	}

	.right {
		grid-column: 2;
		display: grid;
		grid-template-rows: 1fr 1fr;
		margin: 0;
		padding: 0;
		gap: 1.5rem;
		border-radius: 8px;
		overflow: visible;
	}

	.quarter-top {
		grid-row: 1;
		margin: 0;
		padding: 0;
		border-radius: 8px;
		overflow: hidden;
	}

	.quarter-bottom {
		grid-row: 2;
		margin: 0;
		padding: 0;
		border-radius: 8px;
		overflow: hidden;
	}

	@media (max-width: 968px) {
		.features-grid {
			grid-template-columns: 1fr;
			min-height: 650px;
			gap: 1.5rem;
		}

		.left {
			grid-column: 1;
		}

		.right {
			grid-column: 1;
		}
	}

	@media (max-width: 480px) {
		.features-grid {
			gap: 1rem;
		}

		.right {
			gap: 1rem;
		}
	}

	.stem-community {
		margin: 0 auto;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 4rem 2rem;
		background: white;
	}

	:global(.dark) .stem-community {
		background: #161618; /* Apple Dark Elevated 1 - Primary Surface */
	}

	.stem-community-heading {
		font-size: 2.5rem;
		font-weight: 300;
		text-align: center;
		margin: 0 0 2rem 0;
		color: #000000;
		padding: 0;
		flex-shrink: 0;
	}

	:global(.dark) .stem-community-heading {
		color: #ffffff;
	}

	.stem-community-content {
		width: 100%;
		display: flex;
		align-items: stretch;
	}

	@media (max-width: 768px) {
		.stem-community {
			margin: 0 auto;
			padding: 3rem 1.5rem;
		}

		.stem-community-heading {
			font-size: 2rem;
			margin-bottom: 1.5rem;
		}
	}
</style>
