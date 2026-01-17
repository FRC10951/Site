<script lang="ts">
	import Hero from "$lib/components/Hero.svelte";
	import Motto from "$lib/components/Motto.svelte";
	import { onMount } from "svelte";
	import { createLazyComponentLoader } from "$lib/utils/componentLoader";
	import type { Component } from "svelte";
	import HeroButton from "$lib/components/HeroButton.svelte";
	import { FRC_URL, INSTAGRAM_URL, Links, SSIS_URL } from "$lib/constants";
	import TextSeparator from "../TextSeparator.svelte";
	import LinkButton from "$lib/components/LinkButton.svelte";
	import Reel from "./Reel.svelte";
	import Section from "$lib/components/Section.svelte";

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
			<img src="/brands/ssis-white.png" alt="Saigon South International School" class="h-full" />
		</a>
	</nav>
</Hero>

<Section class="bg-ssis-white text-ssis-blue" layoutClasses="grid grid-cols-2">
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
			{@render Statistic("247,000,000$", "Received from Israel")}
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
</Section>

<!-- <div class="w-full h-32 bg-gradient-to-b from-ssis-white to-rebuilt-sand"></div> -->

<Section class="bg-gradient-to-b from-ssis-white to-ssis-yellow" layoutClasses="items-center text-center">
	<h2 class="text-3xl opacity-50">Our Rookie Season</h2>
	<img src="/brands/frc/rebuilt-wordmark.svg" alt="FIRST Rebuilt Logo" class="h-64" />
	<p class="max-w-lead text-2xl">
		first rebuilt is blah blah blah insert sponsor corp slop here first rebuilt is blah blah blah insert sponsor corp
		slop here first rebuilt is blah blah blah insert sponsor corp slop here first rebuilt is blah blah blah insert
		sponsor corp slop here first rebuilt is blah blah blah insert sponsor corp slop here
	</p>
	<div class="flex flex-wrap gap-4">
		<LinkButton href="/seasons/rebuilt" variant="white" class="hover:bg-ssis-blue">Read More</LinkButton>
		<LinkButton href={Links.FRCRebuiltReveal} variant="minimal">Watch Game Reveal</LinkButton>
	</div>
	<Reel url={Links.InstagramKickoff} />
</Section>

<Section class="bg-ssis-white *:!text-ssis-white">
	<h2 class="text-dark text-3xl text-center opacity-50">STEM in SSIS</h2>
	<div class="flex justify-center flex-col gap-4 tablet:flex-row tablet:gap-0 team-family-cards">
		<div class="team-family-card">
			<div class="team-family-container">
				<img src="/media/stem-in-ssis/vex.webp" alt="VEX V5 Robotics Competition" />
				<div class="team-family-content">
					<div class="team-family-logo w-48">
						<img src="/brands/vex-white.svg" class="team-family-unhovered" alt="VEX V5 Robotics Competition" />
						<img src="/brands/vex-color.svg" class="team-family-hovered" alt="VEX V5 Robotics Competition" />
					</div>
					<div class="flex-grow"></div>
					<h3>VEX Robotics</h3>
					<p>VEX Worlds Trailblazer and Design Award recipient.</p>
					<a href="/family/v5rc">Read More</a>
				</div>
			</div>
		</div>
		<div class="team-family-card">
			<div class="team-family-container">
				<div class="team-family-content">
					<div class="team-family-logo w-48">
						<img src="/brands/empower-tech-white.png" class="team-family-unhovered" alt="Empower Tech" />
						<img src="/brands/empower-tech-color.png" class="team-family-hovered" alt="Empower Tech" />
					</div>
					<div class="flex-grow"></div>
					<h3>Epstein Files</h3>
					<p>Empowering local communities through technology education and innovation.</p>
					<a href="/family/empower-tech">Read More</a>
				</div>
			</div>
		</div>
		<div class="team-family-card">
			<div class="team-family-container">
				<div class="team-family-content">
					<div class="flex-grow"></div>
					<h3>Robokids</h3>
					<p>Spreading the love for robotics through hands-on learning.</p>
					<a href="/family/robokids">Read More</a>
				</div>
			</div>
		</div>
	</div>
</Section>

<div bind:this={ctaElement}>
	{#if CTA}
		<CTA />
	{/if}
</div>

<style>
	:root {
		--team-family-gap: 0.25rem;
	}

	.team-family-card {
		width: calc(20vw + var(--team-family-gap));
		transition: width cubic-bezier(0.215, 0.61, 0.355, 1) 300ms;
	}

	.team-family-card:hover {
		width: calc(40vw + var(--team-family-gap));
	}

	.team-family-container {
		display: flex;
		flex-direction: column;

		padding: 2rem;
		height: 36rem;

		border-radius: 0.5rem;
		background-color: black;
		position: relative;

		overflow: hidden;
	}

	.team-family-container > img {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 50%;
		transition: opacity cubic-bezier(0.215, 0.61, 0.355, 1) 300ms;
		filter: brightness(75%) contrast(125%) saturate(75%);
	}

	.team-family-container:hover > img {
		opacity: 75%;
	}

	.team-family-content {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		z-index: 10;
		gap: 0.5rem;

		max-width: 30ch;
		text-wrap: balance;
	}

	.team-family-content h3 {
		font-weight: bold;
		font-size: 1.25rem;
		color: unset;
	}

	.team-family-content a {
		font-weight: bold;
		color: unset;
	}

	.team-family-content a::after {
		content: "→";
		margin-left: 0.25rem;
	}

	.team-family-logo {
		position: relative;
	}

	.team-family-logo img {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
	}

	.team-family-card .team-family-unhovered {
		z-index: 10;
		transition: opacity cubic-bezier(0.215, 0.61, 0.355, 1) 300ms;
	}

	.team-family-card:hover .team-family-unhovered {
		opacity: 0;
	}

	.team-family-cards :nth-child(1) .team-family-container {
		margin-right: var(--team-family-gap);
	}

	.team-family-cards :nth-child(2) .team-family-container {
		margin: 0 calc(var(--team-family-gap) / 2);
	}

	.team-family-cards :nth-child(3) .team-family-container {
		margin-left: var(--team-family-gap);
	}
</style>
