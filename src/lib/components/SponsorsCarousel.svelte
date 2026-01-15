<script>
	import { browser } from "$app/environment";
	import { onMount } from "svelte";

	let isDark = $state(false);

	// Get FIRST logo based on dark mode
	let firstLogoSrc = $derived(
		isDark ? "/FIRST-logos/FIRST-dark-mode-horizontal-logo.webp" : "/FIRST-logos/FIRST-light-mode-horizontal-logo.webp"
	);

	// Sponsor logos from static folder
	let slides = $derived([
		{ src: "/sponsor-logos/coca-cola-logo.webp", alt: "Coca-Cola" },
		{ src: firstLogoSrc, alt: "FIRST Robotics Competition" },
		{ src: "/ssis-logos/ssis-logo.webp", alt: "Saigon South International School" },
		{ src: "/sponsor-logos/WIPLib-logo.webp", alt: "WIPLib" },
		{ src: "/sponsor-logos/lockheed-martin-logo.webp", alt: "Lockheed Martin" },
		{ src: "/sponsor-logos/palantir-logo.webp", alt: "Palantir" },
		{ src: "/sponsor-logos/boeing-logo.webp", alt: "Boeing" },
	]);

	// Duplicate slides for seamless loop
	let duplicatedSlides = $derived([...slides, ...slides]);

	onMount(() => {
		if (browser) {
			// Check initial dark mode state
			isDark = document.documentElement.classList.contains("dark");

			// Listen for theme changes
			const handleThemeChange = () => {
				isDark = document.documentElement.classList.contains("dark");
			};

			window.addEventListener("themechange", handleThemeChange);
			window.addEventListener("themeChange", handleThemeChange);

			// Watch for class changes
			const observer = new MutationObserver(() => {
				isDark = document.documentElement.classList.contains("dark");
			});
			observer.observe(document.documentElement, {
				attributes: true,
				attributeFilter: ["class"],
			});

			return () => {
				window.removeEventListener("themechange", handleThemeChange);
				window.removeEventListener("themeChange", handleThemeChange);
				observer.disconnect();
			};
		}
	});
</script>

<section class="sponsors">
	<div class="carousel-wrapper">
		<div class="carousel-track">
			{#each duplicatedSlides as slide}
				<div class="logo-item">
					<img
						src={slide.src}
						alt={slide.alt}
						loading="lazy"
						decoding="async"
						width="200"
						height="120"
						class="img-no-filter"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.sponsors {
		padding: 0;
		margin: 0;
		background: #f8f8f8; /* Light mode background */
		overflow: hidden;
		width: 100%;
		position: relative;
	}

	:global(.dark) .sponsors {
		background: #161618 !important; /* Apple Dark Elevated 1 - Primary Surface */
	}

	.carousel-wrapper {
		width: 100%;
		margin: 0;
		overflow: hidden;
		position: relative;
		background: inherit; /* Inherit from .sponsors */
	}

	:global(.dark) .carousel-wrapper {
		background: #161618; /* Apple Dark Elevated 1 - Primary Surface */
	}

	.carousel-track {
		display: flex;
		align-items: center;
		gap: 4rem;
		animation: scroll 22.86s linear infinite;
		will-change: transform;
	}

	.carousel-wrapper:hover .carousel-track {
		animation-play-state: paused;
	}

	.logo-item {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 120px;
		width: 200px;
	}

	.logo-item img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		filter: grayscale(0.3);
		transition: filter 0.3s ease;
		aspect-ratio: 5 / 3;
	}

	:global(.dark) .logo-item img {
		filter: grayscale(0.3) brightness(1.2);
	}

	.logo-item:hover img {
		filter: grayscale(0);
	}

	:global(.dark) .logo-item:hover img {
		filter: grayscale(0) brightness(1.3);
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	@media (max-width: 768px) {
		.sponsors {
			padding: 0;
			margin: 0;
		}

		.logo-item {
			height: 80px;
			width: 150px;
		}

		.carousel-track {
			gap: 2rem;
		}
	}
</style>
