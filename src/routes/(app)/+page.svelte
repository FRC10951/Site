<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";
	import Motto from "$lib/components/Motto.svelte";
	import { onMount } from "svelte";
	import { createLazyComponentLoader } from "$lib/utils/componentLoader";
	import type { Component } from "svelte";
	import HeroButton from "$lib/components/HeroButton.svelte";
	import { FRC_URL, INSTAGRAM_URL, SSIS_URL } from "$lib/constants";
	import TextSeparator from "../TextSeparator.svelte";

	let About: Component | null = $state(null);
	let FirstAge: Component | null = $state(null);
	let VexFeature: Component | null = $state(null);
	let EmpowerTechCard: Component | null = $state(null);
	let RobokidsCard: Component | null = $state(null);
	let Events: Component | null = $state(null);
	let CommunityProjects: Component | null = $state(null);
	let CTA: Component | null = $state(null);

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
			createLazyComponentLoader(() => import("$lib/components/About.svelte")).load(aboutElement, (component) => {
				About = component;
			})
		);

		cleanup.push(
			createLazyComponentLoader(() => import("$lib/components/FirstAge.svelte")).load(firstAgeElement, (component) => {
				FirstAge = component;
			})
		);

		cleanup.push(
			createLazyComponentLoader(() => import("$lib/components/VexFeature.svelte")).load(
				vexFeatureElement,
				(component) => {
					VexFeature = component;
				}
			)
		);

		cleanup.push(
			createLazyComponentLoader(() => import("$lib/components/EmpowerTechCard.svelte")).load(
				empowerTechElement,
				(component) => {
					EmpowerTechCard = component;
				}
			)
		);

		cleanup.push(
			createLazyComponentLoader(() => import("$lib/components/RobokidsCard.svelte")).load(
				robokidsElement,
				(component) => {
					RobokidsCard = component;
				}
			)
		);

		cleanup.push(
			createLazyComponentLoader(() => import("$lib/components/Events.svelte")).load(eventsElement, (component) => {
				Events = component;
			})
		);

		cleanup.push(
			createLazyComponentLoader(() => import("$lib/components/CommunityProjects.svelte")).load(
				communityProjectsElement,
				(component) => {
					CommunityProjects = component;
				}
			)
		);

		cleanup.push(
			createLazyComponentLoader(() => import("$lib/components/CTA.svelte")).load(ctaElement, (component) => {
				CTA = component;
			})
		);

		return () => {
			cleanup.forEach((fn) => fn());
		};
	});
</script>

<Hero
	backgroundImage="/homepage-images/hero.webp"
	backgroundAlt="Members of the team Saigon South Dragons sitting across the Steam Design Center's staircase"
	backgroundClasses="brightness-[35%] contrast-[120%] saturate-[80%]"
	subtitle="Mission Statement"
	title="Purposeful Global Citizens"
	description="Creating a student-led STEM hub that promotes innovation, outreach, and collaboration across Vietnam and the global FIRST community."
>
	<nav class="flex items-center gap-4">
		<HeroButton href={INSTAGRAM_URL} variant="primary">Instagram</HeroButton>
		<a href={SSIS_URL} class="h-18">
			<img src="/branding/ssis-white.png" alt="Saigon South International School" class="h-full" />
		</a>
	</nav>
</Hero>

<section class="bg-ssis-white text-ssis-blue">
	<div class="grid grid-cols-2 max-w-content gap-8 mx-auto px-8 py-32">
		<div class="flex flex-col gap-4">
			{#snippet Statistic(count: string, title: string)}
				<div class="flex flex-col">
					<span class="text-4xl font-extralight">{count}</span>
					<small class="text-xl opacity-65">{title}</small>
				</div>
			{/snippet}
			<div class="flex gap-8">
				{@render Statistic("63", "Students")}
				{@render Statistic("5", "Coaches")}
				{@render Statistic("0 VND", "In Fundraising")}
			</div>
			{#snippet Link(text: string, url: string)}
				<a class="frc10951-about-link opacity-35 hover:opacity-65 relative" href={url}>{text}</a>
			{/snippet}
			<p class="text-6xl">
				As {@render Link("Saigon South International School's", SSIS_URL)}
				flagship robotics team, we bring together students passionate about STEM, engineering, and innovation to compete in
				the {@render Link("FIRST Robotics Competition.", FRC_URL)}
			</p>
		</div>
		<img
			src="/homepage-images/team.webp"
			alt="Team 10951"
			loading="lazy"
			decoding="async"
			width="420"
			height="280"
			class="img-responsive img-rounded img-shadow-lg aspect-square"
		/>
	</div>
</section>

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

<!--
	TODO: uncomment once we have projects
-->
<!-- <div bind:this={communityProjectsElement}>
	{#if CommunityProjects}
		<CommunityProjects />
	{/if}
</div> -->

<!-- <div bind:this={eventsElement}>
	{#if Events}
		<Events />
	{/if}
</div> -->

<div bind:this={ctaElement}>
	{#if CTA}
		<CTA />
	{/if}
</div>

<style>
	.frc10951-about-link {
		display: inline;
		background-image: linear-gradient(currentColor, currentColor);
		background-size: 0% 0.2em;
		background-position: 0 100%;
		background-repeat: no-repeat;

		transition:
			background-size 300ms cubic-bezier(0.4, 0, 0.2, 1),
			opacity 300ms;
	}

	.frc10951-about-link:hover {
		background-size: 100% 0.2em;
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
