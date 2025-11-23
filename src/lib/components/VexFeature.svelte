<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { lazyLoadImage } from '$lib/utils/imageLoader';
	import { fade } from 'svelte/transition';

	const teams = [
		{
			name: '1599W',
			description: 'cycles between all the teams',
			image: '/vex.webp',
			link: '/vex/1599w',
		},
		{
			name: '1599V',
			description: 'competitive excellence and technical innovation',
			image: '/hero.webp',
			link: '/vex/1599v',
		},
		{
			name: '1599X',
			description: 'pushing the boundaries of robotics innovation',
			image: '/vex.webp',
			link: '/vex/1599x',
		},
		{
			name: '1599Y',
			description: 'emphasizing technical skills and collaborative teamwork',
			image: '/hero.webp',
			link: '/vex/1599y',
		},
		{
			name: '1599Z',
			description: 'the culmination of our VEX program with excellence and mentorship',
			image: '/vex.webp',
			link: '/vex/1599z',
		},
	];

	const AUTO_ADVANCE_INTERVAL = 10000; // 10 seconds

	let currentIndex = 0;
	let imageElement: HTMLElement | undefined;
	let isTransitioning = false;
	let autoAdvanceInterval: ReturnType<typeof setInterval> | null = null;
	let isFadingOut = false;

	$: currentTeam = teams[currentIndex];

	function nextTeam() {
		if (isTransitioning) return;
		isTransitioning = true;
		currentIndex = (currentIndex + 1) % teams.length;
		loadImage();
		setTimeout(() => {
			isTransitioning = false;
		}, 300);
		// Reset auto-advance timer after manual navigation
		resetAutoAdvance();
	}

	function prevTeam() {
		if (isTransitioning) return;
		isTransitioning = true;
		currentIndex = (currentIndex - 1 + teams.length) % teams.length;
		loadImage();
		setTimeout(() => {
			isTransitioning = false;
		}, 300);
		// Reset auto-advance timer after manual navigation
		resetAutoAdvance();
	}

	function loadImage() {
		if (!imageElement) return;
		// Fade out current image
		isFadingOut = true;
		setTimeout(() => {
			if (imageElement) {
				lazyLoadImage(currentTeam.image, imageElement);
				isFadingOut = false;
			}
		}, 250);
	}

	function startAutoAdvance() {
		stopAutoAdvance();
		autoAdvanceInterval = setInterval(() => {
			if (!isTransitioning) {
				isTransitioning = true;
				currentIndex = (currentIndex + 1) % teams.length;
				loadImage();
				setTimeout(() => {
					isTransitioning = false;
				}, 300);
			}
		}, AUTO_ADVANCE_INTERVAL);
	}

	function stopAutoAdvance() {
		if (autoAdvanceInterval !== null) {
			clearInterval(autoAdvanceInterval);
			autoAdvanceInterval = null;
		}
	}

	function resetAutoAdvance() {
		stopAutoAdvance();
		// Restart after a delay to give user time to interact
		setTimeout(() => {
			startAutoAdvance();
		}, AUTO_ADVANCE_INTERVAL);
	}

	onMount(() => {
		loadImage();
		startAutoAdvance();
	});

	onDestroy(() => {
		stopAutoAdvance();
	});
</script>

<section class="vex-feature">
	<div class="vex-feature-bg" class:fade-out={isFadingOut} bind:this={imageElement}></div>
	<div class="vex-feature-overlay"></div>
	<div class="vex-feature-navigation">
		<button
			class="vex-nav-button"
			on:click={prevTeam}
			aria-label="Previous team"
			disabled={isTransitioning}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="m15 18-6-6 6-6" />
			</svg>
		</button>
		<button
			class="vex-nav-button"
			on:click={nextTeam}
			aria-label="Next team"
			disabled={isTransitioning}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="m9 18 6-6-6-6" />
			</svg>
		</button>
	</div>
	<div class="vex-feature-content">
		{#key currentIndex}
			<div class="vex-feature-header" transition:fade={{ duration: 300 }}>
				<h4 class="vex-feature-title">{currentTeam.name}</h4>
				<p class="vex-feature-description">{currentTeam.description}</p>
			</div>
		{/key}
		<div class="vex-feature-subtitle">VEX V5</div>
		<div class="vex-feature-buttons">
			<a
				href={currentTeam.link}
				class="btn btn-outline text-white border-white hover:bg-white hover:text-text-dark"
			>
				Learn More
			</a>
			<a
				href="/vex"
				class="btn btn-outline text-white border-white hover:bg-white hover:text-text-dark"
			>
				VEX Overview
			</a>
		</div>
	</div>
</section>

<style>
	.vex-feature {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 400px;
		padding: 2rem 1.5rem;
		overflow: hidden;
		margin: 0;
		height: 100%;
		width: 100%;
	}

	.vex-feature-bg {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: brightness(0.85);
		z-index: 0;
		transition: opacity 0.5s ease;
		opacity: 1;
	}

	.vex-feature-bg.fade-out {
		opacity: 0;
	}

	.vex-feature-overlay {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 1;
	}

	.vex-feature-navigation {
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
		z-index: 3;
		display: flex;
		gap: 0.5rem;
	}

	.vex-nav-button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 50%;
		color: white;
		cursor: pointer;
		transition: all 0.3s ease;
		padding: 0;
		margin: 0;
	}

	.vex-nav-button:hover:not(:disabled) {
		background: rgba(255, 255, 255, 0.3);
		border-color: rgba(255, 255, 255, 0.5);
		transform: scale(1.1);
	}

	.vex-nav-button:active:not(:disabled) {
		transform: scale(0.95);
	}

	.vex-nav-button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.vex-nav-button svg {
		width: 20px;
		height: 20px;
	}

	.vex-feature-content {
		position: relative;
		z-index: 2;
		width: 100%;
		max-width: 500px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.vex-feature-header {
		margin-bottom: 1rem;
		margin-top: auto;
	}

	.vex-feature-title {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		color: white;
		line-height: 1.2;
	}

	.vex-feature-description {
		font-size: 1.1rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.9);
		margin: 0 0 1rem 0;
	}

	.vex-feature-subtitle {
		font-size: 1.75rem;
		font-weight: 600;
		color: white;
		margin: 0 0 1.5rem 0;
	}

	.vex-feature-buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.vex-feature-buttons .btn {
		flex: 1 1 auto;
		min-width: 140px;
	}

	@media (max-width: 968px) {
		.vex-feature {
			min-height: 350px;
			padding: 1.5rem;
		}

		.vex-feature-navigation {
			top: 1rem;
			right: 1rem;
		}

		.vex-nav-button {
			width: 36px;
			height: 36px;
		}

		.vex-nav-button svg {
			width: 18px;
			height: 18px;
		}

		.vex-feature-title {
			font-size: 2rem;
		}

		.vex-feature-description {
			font-size: 1rem;
		}

		.vex-feature-subtitle {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 768px) {
		.vex-feature {
			min-height: 300px;
			padding: 1.5rem 1rem;
		}

		.vex-feature-navigation {
			top: 0.75rem;
			right: 0.75rem;
			gap: 0.4rem;
		}

		.vex-nav-button {
			width: 32px;
			height: 32px;
		}

		.vex-nav-button svg {
			width: 16px;
			height: 16px;
		}

		.vex-feature-title {
			font-size: 1.75rem;
		}

		.vex-feature-description {
			font-size: 0.95rem;
		}

		.vex-feature-subtitle {
			font-size: 1.25rem;
			margin-bottom: 1rem;
		}

		.vex-feature-buttons {
			flex-direction: column;
		}

		.vex-feature-buttons .btn {
			width: 100%;
		}
	}

	@media (max-width: 480px) {
		.vex-feature {
			min-height: 280px;
			padding: 1rem;
		}

		.vex-feature-navigation {
			top: 0.5rem;
			right: 0.5rem;
			gap: 0.3rem;
		}

		.vex-nav-button {
			width: 28px;
			height: 28px;
		}

		.vex-nav-button svg {
			width: 14px;
			height: 14px;
		}

		.vex-feature-title {
			font-size: 1.5rem;
		}

		.vex-feature-description {
			font-size: 0.9rem;
		}

		.vex-feature-subtitle {
			font-size: 1.1rem;
		}
	}
</style>
